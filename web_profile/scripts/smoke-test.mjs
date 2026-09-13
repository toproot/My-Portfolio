import { mkdir } from 'node:fs/promises'
import process from 'node:process'
import { chromium } from 'playwright-core'

const baseUrl = process.env.PROFILE_URL ?? 'http://127.0.0.1:5173'

function assert(condition, message) {
  if (!condition) {
    throw new Error(message)
  }
}

await mkdir('test-output', { recursive: true })

const browser = await chromium.launch({ headless: true })

try {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
  })
  const page = await context.newPage()

  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: {
        writeText: async (text) => {
          window.__profileCopiedText = text
        },
      },
    })
  })

  await page.goto(baseUrl, { waitUntil: 'networkidle' })
  assert((await page.title()) === '정상근 | 제조 IT 백엔드 엔지니어', '페이지 제목 불일치')
  assert((await page.locator('html').getAttribute('lang')) === 'ko', '문서 언어가 ko가 아님')
  assert((await page.locator('h1').count()) === 1, 'h1은 하나여야 함')
  assert((await page.locator('main section').count()) === 7, '주요 섹션 개수 불일치')
  assert((await page.locator('a[download]').count()) === 0, '다운로드 링크가 노출됨')
  assert((await page.locator('a[href^="mailto:"]').count()) === 1, '이메일 링크 누락')

  const desktopOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  )
  assert(!desktopOverflow, '데스크톱에서 가로 스크롤 발생')

  const careerDetails = page.locator('#career details')
  await careerDetails.locator('summary').focus()
  await page.keyboard.press('Enter')
  assert(await careerDetails.evaluate((element) => element.open), '경력 상세 키보드 펼치기 실패')

  await page.locator('.training-details summary').click()
  assert(
    await page.locator('.training-details').evaluate((element) => element.open),
    '교육 내역 클릭 펼치기 실패',
  )

  await page.locator('.copy-button').click()
  assert(
    (await page.locator('.copy-status').textContent())?.includes('복사했습니다'),
    '이메일 복사 성공 안내 누락',
  )
  assert(
    (await page.evaluate(() => window.__profileCopiedText)) === 'toproot7913@gmail.com',
    '복사된 이메일 불일치',
  )

  await page.evaluate(() => {
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText: async () => Promise.reject(new Error('blocked')) },
    })
  })
  await page.locator('.copy-button').click()
  assert(
    (await page.locator('.copy-status').textContent())?.includes('복사하지 못했습니다'),
    '이메일 복사 실패 안내 누락',
  )

  await page.locator('nav a[href="#projects"]').click()
  assert((await page.evaluate(() => location.hash)) === '#projects', '메뉴 섹션 이동 실패')

  await page.screenshot({ path: 'test-output/desktop.png', fullPage: true })

  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto(baseUrl, { waitUntil: 'networkidle' })
  const mobileOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  )
  assert(!mobileOverflow, '모바일에서 가로 스크롤 발생')
  assert(
    (await page.locator('.competency-card').first().boundingBox())?.width <= 358,
    '모바일 핵심 역량 카드 너비 초과',
  )
  await page.screenshot({ path: 'test-output/mobile.png', fullPage: true })

  await page.emulateMedia({ media: 'print' })
  const printState = await page.evaluate(() => ({
    header: getComputedStyle(document.querySelector('.site-header')).display,
    careerDetails: getComputedStyle(document.querySelector('#career .details-content')).display,
    copyButton: getComputedStyle(document.querySelector('.copy-button')).display,
  }))
  assert(printState.header === 'none', '인쇄 화면에서 상단 메뉴가 숨겨지지 않음')
  assert(printState.careerDetails === 'block', '인쇄 화면에서 경력 상세가 숨겨짐')
  assert(printState.copyButton === 'none', '인쇄 화면에서 복사 버튼이 노출됨')

  console.log('Smoke tests passed: desktop, mobile, interactions, keyboard, print')
} finally {
  await browser.close()
}
