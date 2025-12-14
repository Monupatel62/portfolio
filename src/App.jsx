
import { useState } from 'react'

export default function App() {
  const [dark, setDark] = useState(true)

  return (
    <div className={dark ? 'dark' : 'light'}>
      <div className="container">

        <button className="toggle" onClick={() => setDark(!dark)}>
          {dark ? '☀ Light Mode' : '🌙 Dark Mode'}
        </button>

        <section className="hero fade">
          <h1>Hi, I'm Hriteek 👋</h1>
          <p>Fresher | B.Tech CSE | Full‑Stack & IoT Developer</p>
          <div className="buttons">
            <a href="/resume.pdf" download className="btn">Download Resume</a>
            <a href="#projects" className="btn outline">View Projects</a>
          </div>
        </section>

        <section className="fade">
          <h2>About Me</h2>
          <p>
            Computer Science fresher (2022–2026) actively seeking internships and
            entry‑level roles. I love building real‑world web and IoT systems and
            learning by doing.
          </p>
        </section>

        <section className="fade">
          <h2>Skills</h2>
          <ul className="skills">
            <li>JavaScript</li><li>Python</li><li>React</li><li>Node.js</li>
            <li>MongoDB</li><li>Arduino</li><li>ESP8266</li><li>MQTT</li>
          </ul>
        </section>

        <section id="projects" className="fade">
          <h2>Projects</h2>

          <div className="card">
            <img src="/src/assets/project1.png" alt="Smart Home Project" />
            <h3>Smart Home Automation</h3>
            <p>Real‑time IoT system with authentication and MQTT.</p>
            <a href="https://github.com/Monupatel62/smart-home-project" target="_blank">GitHub Repo</a>
          </div>

          <div className="card">
            <img src="/src/assets/project2.png" alt="Bluetooth LED Project" />
            <h3>Bluetooth LED Control</h3>
            <p>Arduino + HC‑05 LED automation with multiple modes.</p>
            <a href="https://github.com/your-username/bluetooth-led-control" target="_blank">GitHub Repo</a>
          </div>
        </section>

        <section className="fade">
          <h2>Contact</h2>
          <p>Email: monuvlogs54@gmail.com</p>
          <p>Phone: 6202516452</p>
        </section>

      </div>
    </div>
  )
}
