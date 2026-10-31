import Image from "next/image";
import Navbar from "./components/Navbar";
import RoleTypewriter from "./components/RoleTypewriter";
import ContactForm from "./components/ContactForm";
import { assets, infoList, toolsData, workData } from "../assests/assets";

const services = [
  {
    title: "Web design",
    description: "Clear, responsive websites shaped around the people who use them.",
    icon: assets.web_icon,
  },
  {
    title: "Frontend development",
    description: "Fast, accessible interfaces built with modern web technologies.",
    icon: assets.code_icon,
  },
  {
    title: "Mobile experiences",
    description: "Thoughtful layouts that work beautifully across phones and tablets.",
    icon: assets.mobile_icon,
  },
  {
    title: "UI / UX design",
    description: "Useful flows and fine details that make products easier to understand.",
    icon: assets.ui_icon,
  },
];

const toolNames = [
  "Visual Studio Code",
  "Firebase",
  "MongoDB",
  "Figma",
  "Git",
  "GitHub",
  "Canva",
  "PowerPoint",
  "Word",
  "Microsoft SQL",
  "MySQL",
  "Clerk",
  "Vercel",
  "Jupyter Notebook",
  "Linux",
];

const certificates = [
  {
    title: "Google AI & Machine Learning Virtual Program — 9 Skill Badges",
    issuer: "Google",
    logo: assets.google_logo,
    pdf: "/google.pdf",
    skills: ["AI", "Machine Learning", "Generative AI", "Data Analysis"],
  },
  {
    title: "AWS Data Engineering Virtual Internship",
    issuer: "AWS",
    pdf: "/aws.pdf",
    skills: ["AWS", "Data Engineering", "ETL", "Data Pipelines", "Cloud Computing"],
  },
  {
    title: "EduSkills Ethical Hacking Virtual Internship",
    issuer: "EduSkills",
    logo: assets.eduskill_logo,
    pdf: "/eduskill3.pdf",
    skills: ["Ethical Hacking", "Cybersecurity", "Network Security", "Vulnerability Assessment"],
  },
  {
    title: "EduSkills Data Analytics with Python & Power BI",
    issuer: "EduSkills",
    logo: assets.eduskill_logo,
    pdf: "/eduskill2.pdf",
    skills: ["Python", "Data Analysis", "Data Visualization", "Power BI", "Business Intelligence"],
  },
  {
    title: "EduSkills SQL & Database Management Systems",
    issuer: "EduSkills",
    logo: assets.eduskill_logo,
    pdf: "/eduskill1.pdf",
    skills: ["SQL", "DBMS", "Database Design", "Query Optimization"],
  },
  {
    title: "Programming for Everybody: Getting Started with Python",
    issuer: "University of Michigan",
    logo: assets.michigan_logo,
    pdf: "/michigan.pdf",
    skills: ["Python", "Programming Fundamentals", "Data Structures", "Problem Solving"],
  },
  {
    title: "Object-Oriented Programming with C++",
    issuer: "Microsoft",
    logo: assets.microsoft_logo,
    pdf: "/microsoft1.pdf",
    skills: ["C++", "OOP", "Classes & Objects", "Inheritance", "Polymorphism"],
  },
  {
    title: "Introduction to Front-End Development",
    issuer: "Meta",
    logo: assets.meta_logo,
    pdf: "/meta.pdf",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Web Design", "Front-End Development"],
  },
  {
    title: "Programming in Python",
    issuer: "Meta",
    logo: assets.meta_logo,
    pdf: "/meta2.pdf",
    skills: ["Python", "Programming Fundamentals", "Functions", "Data Structures", "Problem Solving"],
  },
  {
    title: "AI Foundation Course",
    issuer: "Jio Institute",
    logo: assets.jio_logo,
    pdf: "/jio.pdf",
    skills: ["Artificial Intelligence", "Machine Learning", "Foundations"],
  },
  {
    title: "JavaScript Essentials 1",
    issuer: "Cisco Networking Academy",
    logo: assets.cisco_logo,
    pdf: "/cisco.pdf",
    skills: ["JavaScript", "Programming", "Web Development"],
  },
  {
    title: "Introduction to Networking",
    issuer: "NVIDIA",
    logo: assets.nvidia_logo,
    pdf: "/nvidia.pdf",
    skills: ["Networking", "Network Fundamentals"],
  },
];

const contactLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/joysamul2006", logo: assets.linkedin_logo, external: true },
  { label: "Instagram", href: "https://www.instagram.com/joyzsamul/", logo: assets.instagram_logo, external: true },
  { label: "GitHub", href: "https://github.com/joysamul", logo: assets.github_logo, external: true },
  { label: "Google Developer", href: "https://g.dev/joysamul", logo: assets.googledeveloper_logo, external: true },
  { label: "joysamul9933@gmail.com", href: "mailto:joysamul9933@gmail.com", logo: assets.gmail_logo, external: false },
];

const experiences = [
  {
    title: "Google Gemini Student Ambassador 2026",
    details: "GID: 10668 | 2026 – Present",
    logo: "/googleamb.png",
    bullets: [
      "Led campus-level Google Gemini awareness and student engagement initiatives, promoting practical applications of generative AI among students.",
      "Organized and hosted the Product Trial — “Build Night with Nano Banana” via Google Meet, facilitating hands-on AI experimentation and creative ideation.",
      "Managed the complete event workflow, including pre-survey, registrations, Google Meet coordination, feedback collection, participant follow-ups, and certificate coordination.",
      "Executed the “Fund My Crazy” initiative, engaging students in transforming innovative ideas into practical technology and startup concepts.",
      "Created AI-focused reels, campaigns, and visual content, including “Startup in 5 Minutes” and ShareSpace, using Gemini and Nano Banana.",
      "Prepared Monthly Highlights documenting ambassador activities, campaigns, content creation, and student engagement.",
      "Coordinated student communication through WhatsApp communities, announcements, surveys, feedback forms, and post-event support, strengthening campus participation in Google AI initiatives.",
    ],
  },
  {
    title: "Unstop Campus Champion | Unstop",
    details: "2026 – Present",
    logo: "/unstopamb.png",
    bullets: [
      "Promoting Unstop competitions, internships, challenges, and career opportunities across campus.",
      "Driving student registrations and participation through campus communities and social media.",
      "Creating promotional content and coordinating announcements, deadlines, and event information.",
      "Engaging with students to increase awareness and participation in Unstop opportunities.",
    ],
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <Image className="hero-wash" src={assets.header_bg_color} alt="" fill priority sizes="100vw" />
          <div className="hero-content">
            <Image
              className="hero-avatar"
              src={assets.profile_img}
              alt="Portrait of Joy Samul"
              width={144}
              height={144}
              priority
            />
            <p className="hero-greeting">Hi, I&apos;m <span>Joy Samul</span></p>
            <h1 id="hero-title" aria-label="I’m a Full Stack web developer, UI/ UX designer, and AI/ML enthusiast">
              I&apos;m a
              <span className="hero-role-slot"><RoleTypewriter /></span>
            </h1>
            <p className="hero-intro">I create thoughtful websites that balance clean design, useful details, and dependable code.</p>
            <div className="hero-actions">
              <a className="pill-button pill-button-dark" href="#contact">
                Contact me <Image src={assets.right_arrow_white} alt="" width={16} height={16} />
              </a>
              <a className="pill-button pill-button-light" href="/sample-resume.pdf" target="_blank" rel="noreferrer">
                Download CV <Image src={assets.download_icon} alt="" width={16} height={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="about-section section-wrap" id="about">
          <p className="section-kicker">A little about me</p>
          <h2 className="section-title">About me</h2>
          <div className="about-layout">
            <div className="about-photo-wrap">
              <Image src={assets.user_image} alt="Joy Samul" fill sizes="(max-width: 700px) 85vw, 330px" />
            </div>
            <div className="about-copy">
              <p className="about-lead">I&apos;m a developer who enjoys turning a thoughtful idea into a polished digital experience.</p>
              <p className="about-description">
                I bring design and development together to make websites that feel clear, work smoothly, and welcome everyone. I care about the details, from the first layout to the last interaction.
              </p>
              <div className="about-facts">
                {infoList.map((item, index) => (
                  <article className="about-fact" key={item.title}>
                    <Image src={item.icon} alt="" width={28} height={28} />
                    <h3>{item.title}</h3>
                    <p style={{ whiteSpace: "pre-line" }}>
                      {item.description}
                      {item.frameworks && <><br /><strong>Frameworks:</strong> {item.frameworks}</>}
                    </p>
                  </article>
                ))}
              </div>
              <div className="tool-row">
                <span>Tools I use</span>
                <div
                  className="tool-icons"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, 24px)",
                    gap: "15px",
                    flex: "1 1 0%",
                    minWidth: 0,
                    width: "100%",
                  }}
                >
                  {toolsData.map((tool, index) => (
                    <Image src={tool} alt={toolNames[index]} title={toolNames[index]} key={toolNames[index]} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section section-wrap" id="services">
          <p className="section-kicker">What I can do</p>
          <h2 className="section-title">My services</h2>
          <p className="section-intro">A considered mix of design and development to take a project from first idea to finished experience.</p>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <span className="service-icon"><Image src={service.icon} alt="" width={26} height={26} /></span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" aria-label={`Discuss ${service.title}`}>
                  Discuss a project <Image src={assets.arrow_icon} alt="" width={12} height={12} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="work-section section-wrap" id="work">
          <p className="section-kicker">A few things I&apos;ve made</p>
          <h2 className="section-title">My latest work</h2>
          <p className="section-intro">Selected web and product explorations, built with care from the first screen to the last.</p>
          <div className="work-grid">
            {workData.map((project, index) => (
              <article className="work-item" key={project.title}>
                <div className="work-image">
                  <Image src={project.bgImage} alt="" fill sizes="(max-width: 680px) 90vw, (max-width: 1000px) 44vw, 270px" />
                  <a className="work-image-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} in a new tab`} />
                  <span className="work-number">0{index + 1}</span>
                </div>
                <div className="work-caption">
                  <div><h3>{project.title}</h3><p>{project.description}</p></div>
                  <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title}`}>
                    <Image src={assets.arrow_icon} alt="" width={13} height={13} />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <a className="text-button" href="#contact">
            Have a project in mind? <Image src={assets.arrow_icon} alt="" width={13} height={13} />
          </a>
        </section>

        <section className="experience-section section-wrap" id="experience">
          <p className="section-kicker">Leadership and community</p>
          <h2 className="section-title">My Experience</h2>
          <div className="experience-list">
            {experiences.map((experience) => (
              <article className="experience-entry" key={experience.title}>
                <div className="experience-logo">
                  <Image src={experience.logo} alt={`${experience.title} logo`} fill sizes="48px" />
                </div>
                <div className="experience-content">
                  <div className="experience-heading">
                    <h3>{experience.title}</h3>
                    <p>{experience.details}</p>
                  </div>
                  <ul>
                    {experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="certificates-section section-wrap" id="certificates">
          <p className="section-kicker">Learning and credentials</p>
          <h2 className="section-title">My Certificates</h2>
          <p className="section-intro">A selection of programs and certifications across software development, AI, data, and cybersecurity.</p>
          <div className="certificate-grid">
            {certificates.map((certificate) => (
              <article className="certificate-card" key={certificate.pdf}>
                <div className="certificate-heading">
                  <div className="certificate-logo">
                    {certificate.logo ? (
                      <Image src={certificate.logo} alt={`${certificate.issuer} logo`} fill sizes="120px" />
                    ) : (
                      <span className="certificate-logo-text">aws</span>
                    )}
                  </div>
                  <p>{certificate.issuer}</p>
                </div>
                <h3>{certificate.title}</h3>
                <ul className="certificate-skills" aria-label="Skills">
                  {certificate.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
                <a className="certificate-link" href={certificate.pdf} target="_blank" rel="noreferrer">
                  View certificate PDF <Image src={assets.arrow_icon} alt="" width={13} height={13} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <p className="section-kicker">Get in touch</p>
          <h2 className="section-title">Let&apos;s work together</h2>
          <p className="section-intro">Have a project or a question? Send a note and tell me a little about it.</p>
          <ContactForm />
          <div className="contact-profiles" aria-label="Contact and social profiles">
            {contactLinks.map((link) => (
              <a
                className="contact-profile"
                href={link.href}
                key={link.label}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
              >
                <span className="contact-profile-icon">
                  <Image src={link.logo} alt="" fill sizes="20px" />
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </section>

        <footer className="site-footer">
          <a className="footer-name" href="#top">Joy Samul<span>.</span></a>
          <p>Copyright © Joy Samul 2026 | All rights reserved</p>
          <a className="back-to-top" href="#top">Back to top</a>
        </footer>
      </main>
    </>
  );
}
