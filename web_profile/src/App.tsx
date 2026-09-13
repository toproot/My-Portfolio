import { useState } from 'react'
import { profile, type Project } from './data/profile'

const navigation = [
  { label: '핵심 역량', href: '#competencies' },
  { label: '경력', href: '#career' },
  { label: '주요 사례', href: '#projects' },
  { label: '기술', href: '#technologies' },
  { label: '학력·자격', href: '#credentials' },
  { label: '연락처', href: '#contact' },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M4 10h11M11 6l4 4-4 4" />
    </svg>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <header className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </header>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card" id={project.id}>
      <header className="project-header">
        <span className="project-number" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div>
          <p className="project-kicker">대표 사례</p>
          <h3>{project.title}</h3>
          {project.period && <p className="project-period">{project.period}</p>}
        </div>
      </header>

      <div className="case-grid">
        <div>
          <p className="case-label">해결할 문제</p>
          <p>{project.problem}</p>
        </div>
        <div>
          <p className="case-label">본인의 역할</p>
          <p>{project.role}</p>
        </div>
        <div>
          <p className="case-label">수행한 행동</p>
          <ul>
            {project.actions.map((action) => (
              <li key={action}>{action}</li>
            ))}
          </ul>
        </div>
        <div className="result-panel">
          <p className="case-label">확인된 결과</p>
          <ul>
            {project.results.map((result) => (
              <li key={result}>{result}</li>
            ))}
          </ul>
        </div>
      </div>

      <ul className="tag-list" aria-label="사용 기술">
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </article>
  )
}

function App() {
  const [copyStatus, setCopyStatus] = useState('')

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.contact.email)
      setCopyStatus('이메일 주소를 복사했습니다.')
    } catch {
      setCopyStatus('복사하지 못했습니다. 이메일 주소를 직접 선택해 주세요.')
    }
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        본문으로 건너뛰기
      </a>

      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#top" aria-label="정상근 프로필 처음으로">
            <span>정상근</span>
            <small>Manufacturing IT Engineer</small>
          </a>
          <nav aria-label="주요 메뉴">
            <ul>
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">Semiconductor · Smart Factory · Backend</p>
              <h1 id="hero-title">
                <span>{profile.person.name}</span>
                {profile.person.role}
              </h1>
              <p className="value-statement">{profile.person.valueStatement}</p>
              <div className="hero-summary">
                {profile.person.summary.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="current-role">
                <strong>{profile.person.currentTitle}</strong>
                <span>
                  {profile.person.experience} · {profile.person.experienceAsOf}
                </span>
              </div>
              <div className="hero-actions">
                <a className="button primary" href="#career">
                  주요 경력 보기 <ArrowIcon />
                </a>
                <a className="button secondary" href="#contact">
                  연락하기
                </a>
              </div>
            </div>

            <aside className="hero-evidence" aria-label="핵심 성과">
              <p className="aside-title">Evidence at a glance</p>
              <ol>
                {profile.highlights.map((highlight) => (
                  <li key={highlight.label}>
                    <a href={highlight.href}>
                      <strong>{highlight.value}</strong>
                      <span>{highlight.label}</span>
                      <ArrowIcon />
                    </a>
                  </li>
                ))}
              </ol>
              <p className="possible-roles">
                <span>기여 가능한 역할</span>
                {profile.person.possibleRoles}
              </p>
            </aside>
          </div>
        </section>

        <section className="section" id="competencies" aria-labelledby="competencies-title">
          <div className="container">
            <SectionHeading
              eyebrow="Core capabilities"
              title="제조 현장의 문제를 시스템 변화로 연결합니다"
              description="역량명보다 실제로 수행한 업무와 결과를 기준으로 정리했습니다."
            />
            <div className="competency-grid">
              {profile.competencies.map((competency, index) => (
                <article className="competency-card" key={competency.title}>
                  <span className="card-index">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{competency.title}</h3>
                  <p>{competency.evidence}</p>
                  <a className="text-link" href={competency.href}>
                    {competency.linkLabel} <ArrowIcon />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-tinted" id="career" aria-labelledby="career-title">
          <div className="container">
            <SectionHeading
              eyebrow="Experience"
              title="경력"
              description="최근 경력을 기준으로 역할과 담당 범위, 확인된 성과를 구분했습니다."
            />
            {profile.career.map((career) => (
              <article className="career-card" key={career.company}>
                <header className="career-header">
                  <div>
                    <p className="career-period">{career.period}</p>
                    <h3>{career.company}</h3>
                    <p className="career-team">{career.team}</p>
                  </div>
                  <div className="career-role">
                    <strong>{career.title}</strong>
                    <span>{career.employmentType}</span>
                  </div>
                </header>
                <p className="career-scope">{career.scope}</p>
                <div className="career-results">
                  <p className="case-label">핵심 기여와 프로젝트 성과</p>
                  <ul>
                    {career.keyResults.map((result) => (
                      <li key={result}>{result}</li>
                    ))}
                  </ul>
                </div>
                <details>
                  <summary>담당 업무 자세히 보기</summary>
                  <div className="details-content">
                    <ul>
                      {career.responsibilities.map((responsibility) => (
                        <li key={responsibility}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </details>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects" aria-labelledby="projects-title">
          <div className="container">
            <SectionHeading
              eyebrow="Selected cases"
              title="대표 프로젝트와 주요 성과"
              description="문제, 역할, 행동, 결과의 흐름으로 이력서에 확인되는 사례를 정리했습니다."
            />
            <div className="project-list">
              {profile.projects.map((project, index) => (
                <ProjectCard project={project} index={index} key={project.id} />
              ))}
            </div>
          </div>
        </section>

        <section
          className="section section-dark"
          id="technologies"
          aria-labelledby="technologies-title"
        >
          <div className="container">
            <SectionHeading
              eyebrow="Technology & tools"
              title="기술과 업무 도구"
              description="기술명은 실제 활용한 업무 맥락과 함께 표시했습니다. 숙련도 점수는 사용하지 않았습니다."
            />
            <div className="technology-grid">
              {profile.technologies.map((technology) => (
                <article key={technology.category}>
                  <h3>{technology.category}</h3>
                  <p>{technology.description}</p>
                  <ul className="tag-list">
                    {technology.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {technology.href && (
                    <a className="text-link light" href={technology.href}>
                      활용 사례 보기 <ArrowIcon />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="credentials" aria-labelledby="credentials-title">
          <div className="container">
            <SectionHeading
              eyebrow="Education & credentials"
              title="학력·자격·교육"
              description="제조 IT, AI, 데이터 역량과 관련된 항목을 우선했습니다."
            />
            <div className="credentials-layout">
              <div>
                <h3 className="subsection-title">학력</h3>
                <div className="credential-list">
                  {profile.education.map((education) => (
                    <article key={`${education.school}-${education.major}`}>
                      <p className="credential-date">{education.period}</p>
                      <h4>{education.school}</h4>
                      <p>{education.major}</p>
                      <p className="muted">
                        {[education.status, education.detail].filter(Boolean).join(' · ')}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="subsection-title">자격·어학</h3>
                <div className="credential-list compact">
                  {profile.certifications.map((certification) => (
                    <article key={certification.name}>
                      <p className="credential-date">{certification.date}</p>
                      <h4>{certification.name}</h4>
                      <p className="muted">
                        {[certification.detail, certification.issuer]
                          .filter(Boolean)
                          .join(' · ')}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
            <details className="training-details">
              <summary>교육 이수 내역 보기</summary>
              <div className="training-grid details-content">
                {profile.training.map((training) => (
                  <article key={training.name}>
                    <p className="credential-date">{training.period}</p>
                    <h4>{training.name}</h4>
                    <p>{training.detail}</p>
                  </article>
                ))}
              </div>
            </details>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="container contact-inner">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 id="contact-title">함께 해결할 제조 IT 과제를 이야기해 주세요.</h2>
              <p>
                반도체 제조 IT 백엔드, 설비 인터페이스 표준화, 스마트팩토리 자동화
                구축과 관련해 연락할 수 있습니다.
              </p>
            </div>
            <div className="contact-actions">
              <a className="email-link" href={`mailto:${profile.contact.email}`}>
                <span>이메일 보내기</span>
                <strong>{profile.contact.email}</strong>
              </a>
              <button className="copy-button" type="button" onClick={copyEmail}>
                이메일 주소 복사
              </button>
              <p className="copy-status" aria-live="polite" role="status">
                {copyStatus}
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>© 2026 {profile.person.name}. 이 페이지의 경력 정보는 이력서를 기준으로 작성했습니다.</p>
          <a href="#top">맨 위로</a>
        </div>
      </footer>
    </>
  )
}

export default App
