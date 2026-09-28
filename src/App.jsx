import { useEffect, useRef, useState } from 'react'
import {
  SiCplusplus, SiJavascript, SiReact, SiNodedotjs,
  SiMysql, SiFirebase, SiMongodb, SiGit, SiGithub,
} from 'react-icons/si'
import {
  FaProjectDiagram, FaCubes, FaBolt, FaKey, FaExchangeAlt, FaSyncAlt, FaLinkedin,
  FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaCopy, FaCheck, FaArrowUp,
  FaLayerGroup, FaCode, FaBars, FaTimes,
} from 'react-icons/fa'
import photo from './assets/harsh.png'
import logo from './assets/logo.png'

const EMAIL = 'harshmahajan2410@gmail.com'
const PHONE = '+91 8085255032'
// 👇 PASTE YOUR WEB3FORMS ACCESS KEY BETWEEN THE QUOTES
const WEB3FORMS_KEY = 'a0b56803-d0cc-421f-8c7b-e05a0b8a4a79'
const ROLES = ['Full-Stack Developer', 'Real-Time Systems Builder', 'DSA Enthusiast']

const SKILLS = [
  { cat: 'Languages', name: 'C++', Icon: SiCplusplus, c: '#5c9ee6' },
  { cat: 'Languages', name: 'JavaScript', Icon: SiJavascript, c: '#f7df1e' },
  { cat: 'Core CS', name: 'DSA', Icon: FaProjectDiagram, c: '#a855f7' },
  { cat: 'Core CS', name: 'OOP', Icon: FaCubes, c: '#ec4899' },
  { cat: 'Web', name: 'React.js', Icon: SiReact, c: '#61dafb' },
  { cat: 'Web', name: 'Node.js', Icon: SiNodedotjs, c: '#68a063' },
  { cat: 'Web', name: 'REST APIs', Icon: FaExchangeAlt, c: '#a855f7' },
  { cat: 'Databases', name: 'MySQL', Icon: SiMysql, c: '#00a3d6' },
  { cat: 'Databases', name: 'Firebase', Icon: SiFirebase, c: '#ffca28' },
  { cat: 'Tools', name: 'Git', Icon: SiGit, c: '#f05032' },
  { cat: 'Tools', name: 'GitHub', Icon: SiGithub, c: '#24292f' },
]
const CATS = ['All', 'Languages', 'Core CS', 'Web', 'Databases', 'Tools']

const EXPERIENCE = [
  {
    date: 'Jun 2025 — Aug 2025', role: 'Software Development Engineer Intern', org: 'Bluestock Fintech Pvt. Ltd.',
    points: [
      'Built full-stack features using React.js, Node.js and MySQL within Agile sprints.',
      'Optimized MySQL queries and refactored code, boosting page-load speed and performance.',
      'Contributed to code reviews and sprint planning for consistent, on-time delivery.',
    ],
  },
  {
    date: 'Feb 2026 — Mar 2026', role: 'Python Developer Intern', org: 'Ypsilon IT Solutions Pvt. Ltd.',
    points: [
      'Wrote Python scripts and data-processing pipelines to automate applied business problems.',
      'Delivered assigned project milestones independently, with clean, maintainable coding practices.',
    ],
  },
]

const EDUCATION = [
  { date: '2023 — 2027', title: 'B.Tech, Computer Science & IT', org: 'CDGI — Chameli Devi Group of Institutions (RGPV), Indore, MP', score: 'CGPA 6.35' },
  { date: '2023', title: 'Higher Secondary Education', org: "S.T. Antony Gianellie's Convent H.S. School, Nepanagar, MP", score: '69%' },
  { date: '2021', title: 'Secondary Education', org: "S.T. Antony Gianellie's Convent H.S. School, Nepanagar, MP", score: '82%' },
]

const PROJECTS = [
  {
    title: 'Real-Time Collaborative Code Editor', Icon: FaCode,
    desc: 'A high-performance platform where multiple developers write, edit and run code together simultaneously — room-based collaboration with live cursor sync and user-identity tracking, structured with OOP principles.',
    tags: ['React', 'WebSocket', 'JavaScript', 'Firebase', 'Yjs'],
  },
  {
    title: 'CraveOS — Smart Restaurant Queue Reducer', Icon: FaLayerGroup,
    desc: 'A cloud-native, high-concurrency dining platform that eliminates physical queues through a QR-enabled ordering workflow, with real-time wait-time analytics and JWT-secured, cashless payments.',
    tags: ['React.js', 'MongoDB Atlas', 'JWT', 'QR-Code API'],
  },
]

const NAV = ['about', 'skills', 'experience', 'education', 'projects', 'contact']

/* ---------- hooks & helpers ---------- */
function useInView(opts = { threshold: 0.15 }) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect() }
    }, opts)
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return [ref, seen]
}

function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const [ref, seen] = useInView()
  return (
    <Tag ref={ref} className={`reveal ${seen ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  )
}

function Typewriter({ words }) {
  const [i, setI] = useState(0)
  const [txt, setTxt] = useState('')
  const [del, setDel] = useState(false)
  useEffect(() => {
    const w = words[i % words.length]
    const t = setTimeout(() => {
      if (!del) {
        setTxt(w.slice(0, txt.length + 1))
        if (txt.length + 1 === w.length) setTimeout(() => setDel(true), 1300)
      } else {
        setTxt(w.slice(0, txt.length - 1))
        if (txt.length - 1 === 0) { setDel(false); setI(i + 1) }
      }
    }, del ? 35 : 75)
    return () => clearTimeout(t)
  }, [txt, del, i])
  return <span className="typed">{txt}<i className="caret" /></span>
}

function Counter({ to, suffix = '', decimals = 0 }) {
  const [ref, seen] = useInView()
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!seen) return
    let start = null
    const step = (t) => {
      start = start ?? t
      const p = Math.min((t - start) / 1400, 1)
      setV(to * (1 - Math.pow(1 - p, 3)))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [seen])
  return <span ref={ref}>{v.toFixed(decimals)}{suffix}</span>
}


/* ---------- vector art ---------- */
function Squiggle() {
  return (
    <svg className="squiggle" viewBox="0 0 200 14" preserveAspectRatio="none" aria-hidden="true">
      <path pathLength="1" d="M2 8 Q14 0 26 8 T50 8 T74 8 T98 8 T122 8 T146 8 T170 8 T198 8" />
    </svg>
  )
}

function Brush() {
  return (
    <svg className="brush" viewBox="0 0 440 470" aria-hidden="true">
      <defs>
        <filter id="rough" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.035 0.09" numOctaves="2" seed="4" />
          <feDisplacementMap in="SourceGraphic" scale="22" />
        </filter>
      </defs>
      <g filter="url(#rough)" fill="none" strokeLinecap="round">
        <path pathLength="1" d="M70 110 C 160 60, 270 130, 390 70" strokeWidth="64" style={{ animationDelay: '.1s' }} />
        <path pathLength="1" d="M50 200 C 160 150, 280 240, 400 170" strokeWidth="58" style={{ animationDelay: '.45s' }} />
        <path pathLength="1" d="M60 290 C 170 240, 260 330, 380 265" strokeWidth="54" style={{ animationDelay: '.8s' }} />
        <path pathLength="1" d="M90 380 C 180 340, 270 410, 350 350" strokeWidth="46" style={{ animationDelay: '1.15s' }} />
      </g>
    </svg>
  )
}

function Shapes() {
  return (
    <>
      <svg className="shape s-star" viewBox="0 0 40 40" aria-hidden="true"><path d="M20 0 L24 16 L40 20 L24 24 L20 40 L16 24 L0 20 L16 16Z" /></svg>
      <svg className="shape s-ring" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="15" /></svg>
      <svg className="shape s-plus" viewBox="0 0 40 40" aria-hidden="true"><path d="M20 6V34M6 20H34" /></svg>
      <svg className="shape s-wave" viewBox="0 0 80 24" aria-hidden="true"><path d="M2 12 Q12 0 22 12 T42 12 T62 12 T78 12" /></svg>
    </>
  )
}

function Badge() {
  return (
    <div className="badge" aria-hidden="true">
      <svg viewBox="0 0 160 160" className="badge-spin">
        <defs><path id="circ" d="M80 80 m-58 0 a58 58 0 1 1 116 0 a58 58 0 1 1 -116 0" /></defs>
        <text><textPath href="#circ">FULL-STACK DEVELOPER • B.TECH CSE • RGPV • </textPath></text>
      </svg>
      <span className="badge-core">{'</>'}</span>
    </div>
  )
}

const spot = (e) => {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

/* ---------- App ---------- */
export default function App() {
  const [cat, setCat] = useState('All')
  const [active, setActive] = useState('')
  const [progress, setProgress] = useState(0)
  const [menu, setMenu] = useState(false)
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', msg: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  useEffect(() => {
    const onScroll = () => {
      const d = document.documentElement
      setProgress((d.scrollTop / (d.scrollHeight - d.clientHeight)) * 100)
    }
    window.addEventListener('scroll', onScroll)
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    NAV.forEach((id) => document.getElementById(id) && io.observe(document.getElementById(id)))
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect() }
  }, [])

  const copyMail = () => {
    navigator.clipboard?.writeText(EMAIL)
    setCopied(true); setTimeout(() => setCopied(false), 1800)
  }

  const send = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio enquiry from ${form.name}`,
          name: form.name,
          email: form.email,
          message: form.msg,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('sent')
        setForm({ name: '', email: '', msg: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const shown = SKILLS.filter((s) => cat === 'All' || s.cat === cat)

  return (
    <>
      <div className="progress" style={{ width: `${progress}%` }} />

      <header>
        <nav>
          <a href="#top" className="logo" aria-label="Harsh Mahajan — home"><img src={logo} alt="Harsh Mahajan" /></a>
          <div className={`nav-links ${menu ? 'open' : ''}`}>
            {NAV.map((n) => (
              <a key={n} href={`#${n}`} className={active === n ? 'active' : ''} onClick={() => setMenu(false)}>{n[0].toUpperCase() + n.slice(1)}</a>
            ))}
          </div>
          <a className="nav-cta" href="#contact">Hire me</a>
          <button className="burger" aria-label="Menu" onClick={() => setMenu(!menu)}>{menu ? <FaTimes /> : <FaBars />}</button>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero" id="top">
        <div className="wrap hero-grid">
          <div className="hero-left">
            <h1>
              Hey There,<span className="wave-hand">👋</span><br />
              I'm <span className="name">Harsh<Squiggle /></span>
            </h1>
            <div className="exp"><b>2</b><span>INTERNSHIPS<br />COMPLETED</span></div>
          </div>

          <div className="hero-center">
            <Brush />
            <img className="cutout" src={photo} alt="Harsh Mahajan" />
            <Shapes />
          </div>

          <div className="hero-right">
            <p className="tagline">I build fast, real-time web apps, and I love what I do.</p>
            <p className="now">Currently a <Typewriter words={ROLES} /></p>
            <div className="hero-ctas">
              <a className="btn btn-solid" href="#projects">See my work</a>
              <a className="btn btn-outline" href="#contact">Get in touch</a>
            </div>
            <Badge />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-track">
          {[...SKILLS, ...SKILLS].map((s, i) => (
            <span key={i} className="m-item"><s.Icon color={s.c} />{s.name}</span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about">
        <div className="wrap">
          <Reveal><div className="eyebrow">About</div><h2 className="title">What I do</h2></Reveal>
          <div className="about-grid">
            {[
              { i: <FaLayerGroup />, t: 'Full-Stack Development', d: 'Responsive React interfaces and scalable Node.js + MySQL REST APIs, shipped inside Agile sprints.' },
              { i: <FaBolt />, t: 'Real-Time Systems', d: 'WebSocket-driven, room-based collaboration with live cursor sync and identity tracking.' },
              { i: <FaProjectDiagram />, t: 'Problem Solving', d: 'Strong grounding in DSA and OOP, applied to efficient, maintainable code under deadlines.' },
            ].map((c, k) => (
              <Reveal key={c.t} delay={k * 120}>
                <div className="card spot" onMouseMove={spot}>
                  <div className="ic">{c.i}</div>
                  <h3>{c.t}</h3>
                  <p>{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="stats">
            {[
              { n: 2, l: 'Internships', s: '' }, { n: 2, l: 'Major projects', s: '' },
              { n: SKILLS.length, l: 'Technologies', s: '' }, { n: 2027, l: 'Graduating', s: '' },
            ].map((s) => (
              <div key={s.l} className="stat"><b><Counter to={s.n} suffix={s.s} /></b><span>{s.l}</span></div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="wrap">
          <Reveal><div className="eyebrow">Skills</div><h2 className="title">Tools &amp; technologies</h2>
            <p className="sub">Filter by category — hover a card to see it light up.</p></Reveal>
          <Reveal className="tabs">
            {CATS.map((c) => (
              <button key={c} className={cat === c ? 'on' : ''} onClick={() => setCat(c)}>{c}</button>
            ))}
          </Reveal>
          <div className="skill-grid">
            {shown.map((s, i) => (
              <div key={s.name} className="skill spot" style={{ '--c': s.c, animationDelay: `${i * 45}ms` }} onMouseMove={spot}>
                <s.Icon size={34} color={s.c} />
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="wrap">
          <Reveal><div className="eyebrow">Experience</div><h2 className="title">Where I've worked</h2></Reveal>
          <div className="timeline">
            {EXPERIENCE.map((e, k) => (
              <Reveal key={e.role} delay={k * 150} className="t-item">
                <div className="t-date">{e.date}</div>
                <div className="card spot" onMouseMove={spot}>
                  <h3>{e.role}</h3>
                  <div className="org">{e.org}</div>
                  <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education">
        <div className="wrap">
          <Reveal><div className="eyebrow">Education</div><h2 className="title">Academic background</h2></Reveal>
          <div className="timeline">
            {EDUCATION.map((e, k) => (
              <Reveal key={e.title + e.date} delay={k * 150} className="t-item">
                <div className="t-date">{e.date}</div>
                <div className="card spot edu" onMouseMove={spot}>
                  <div>
                    <h3>{e.title}</h3>
                    <div className="org">{e.org}</div>
                  </div>
                  <span className="score">{e.score}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="wrap">
          <Reveal><div className="eyebrow">Projects</div><h2 className="title">Things I've built</h2></Reveal>
          <div className="proj-grid">
            {PROJECTS.map((p, k) => (
              <Reveal key={p.title} delay={k * 150}>
                <div className="proj spot" onMouseMove={spot}>
                  <div className="proj-ic"><p.Icon /></div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="wrap">
          <Reveal className="contact-box">
            <div className="contact-info">
              <h2 className="title">Let's build<br /><span className="name-hl">something.</span></h2>
              <p className="sub">Open to Software Developer roles. Send a message and I'll reply within a day.</p>
              <button className="c-row" onClick={copyMail}>
                <FaEnvelope /> {EMAIL} <span className="copy">{copied ? <><FaCheck /> Copied</> : <FaCopy />}</span>
              </button>
              <a className="c-row" href="tel:+918085255032"><FaPhoneAlt /> {PHONE}</a>
              <div className="c-row"><FaMapMarkerAlt /> Indore, Madhya Pradesh, India</div>
              <div className="socials">
                <a href="https://github.com/harshmahajan24" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/harsh-mahajan-6a0448290" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`} target="_blank" rel="noreferrer" aria-label="Email"><FaEnvelope /></a>
                <a href="tel:+918085255032" aria-label="Phone"><FaPhoneAlt /></a>
              </div>
            </div>
            <form onSubmit={send}>
              <input required placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <input required type="email" placeholder="Your email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <textarea required rows="5" placeholder="Tell me about the role or project…" value={form.msg} onChange={(e) => setForm({ ...form, msg: e.target.value })} />
              <button className="btn btn-solid" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
              {status === 'sent' && <p className="form-msg ok">Thanks! Your message was sent. I'll reply soon.</p>}
              {status === 'error' && <p className="form-msg err">Something went wrong. Please email me directly at {EMAIL}.</p>}
            </form>
          </Reveal>
        </div>
      </section>

      <footer><img className="foot-logo" src={logo} alt="Harsh Mahajan" /><div>Designed &amp; built by Harsh Mahajan · 2026</div></footer>
      <a href="#top" className={`to-top ${progress > 15 ? 'show' : ''}`} aria-label="Back to top"><FaArrowUp /></a>
    </>
  )
}