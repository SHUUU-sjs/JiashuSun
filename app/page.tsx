const experiences = [
  ["Now", "Independent designer & creative partner", "HCI, education and AI"],
  ["Based in", "Stockholm, Sweden", "Working with people and teams globally"],
  ["Practice", "Research through making", "Digital products, services and learning experiences"],
];

const projects = [
  {
    number: "01",
    title: "Learning that grows with people",
    category: "HCI · Education",
    description:
      "Designing formative digital tools that help learners build confidence through small, visible steps.",
    accent: "blue",
  },
  {
    number: "02",
    title: "Co-creating with AI, not around it",
    category: "AI · Human agency",
    description:
      "Giving people legible controls, helpful feedback and room for judgement inside intelligent systems.",
    accent: "yellow",
  },
  {
    number: "03",
    title: "Making room for collective sense-making",
    category: "Participation · Systems",
    description:
      "A living toolkit for teams to share context, find patterns and turn different voices into action.",
    accent: "green",
  },
];

function TreeArtwork() {
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="sky-sun" />
      <div className="tree-trunk" />
      <div className="tree-crown crown-one" />
      <div className="tree-crown crown-two" />
      <div className="tree-crown crown-three" />
      <div className="tree-studio"><span /><i /></div>
      <div className="tree-mushroom mushroom-one" />
      <div className="tree-mushroom mushroom-two" />
      <div className="tree-mushroom mushroom-three" />
      <span className="tree-bird">✦</span>
      <span className="art-caption">HCI · Education · AI<br />Growing useful ideas</span>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Jiashu Sun home">
          JIASHU SUN<span className="wordmark-dot">.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Selected work</a>
          <a href="#practice">Practice</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="welcome" id="top">
        <div className="welcome-copy">
          <p className="eyebrow">Hello, I&apos;m Jiashu Sun</p>
          <h1>Welcome<span className="wordmark-dot">.</span></h1>
          <p className="welcome-lede">
            I am an interdisciplinary designer working across HCI, education and AI.
            I make useful things feel human — turning emerging technology into
            clearer, kinder experiences for people.
          </p>
          <p>
            My practice moves between research, strategy and making. I am
            interested in the moments when people build understanding together:
            learning something new, working with an intelligent system, or finding
            a shared way forward.
          </p>
          <div className="contact-links" aria-label="Contact links">
            <a href="mailto:hello@jiashusun.com">hello@jiashusun.com ↗</a>
            <a href="#work">Selected work ↘</a>
            <a href="#contact">Let&apos;s collaborate ↘</a>
          </div>
        </div>
        <TreeArtwork />
      </section>

      <section className="experience-section" id="practice">
        <h2>Recent practice</h2>
        <div className="experience-list">
          {experiences.map(([period, title, detail]) => (
            <article className="experience-row" key={period}>
              <span>{period}</span>
              <strong>{title}</strong>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="research-section" id="work">
        <p className="eyebrow">Selected work</p>
        <h2>Growing useful ideas with people and intelligent systems.</h2>
        <div className="research-intro">
          <p>
            I use design to make complex systems more understandable, participatory
            and alive. Across projects, I look for forms people can see themselves
            in — precise enough to be useful, open enough to grow.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-row" key={project.number}>
              <span className={`project-mark project-mark--${project.accent}`} aria-hidden="true">
                <i /><b /><em />
              </span>
              <div className="project-main">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <a className="project-link" href="#contact" aria-label={`Ask about ${project.title}`}>
                View case study ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="closing-section">
        <p className="eyebrow">A small principle</p>
        <p>
          I design for the moment understanding starts to grow — when a person,
          a system and a new possibility finally meet.
        </p>
      </section>

      <footer id="contact">
        <p className="eyebrow">Have something in mind?</p>
        <h2>Let&apos;s make it<br /><em>meaningful.</em></h2>
        <a className="mail-link" href="mailto:hello@jiashusun.com">
          hello@jiashusun.com <span aria-hidden="true">↗</span>
        </a>
        <div className="footer-bottom">
          <span>© 2026 Jiashu Sun</span>
          <div>
            <a href="#top">LinkedIn</a>
            <a href="#top">Instagram</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
