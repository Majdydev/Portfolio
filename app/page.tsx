"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaUnity,
  FaReact,
  FaCode,
  FaGamepad,
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaTiktok,
  FaShoppingCart,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  SiUnrealengine,
  SiNextdotjs,
  SiDotnet,
  SiItchdotio,
} from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

// Define types for content to make it easier to update
type ProjectType = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
  icon: React.ReactNode;
};

type SocialLinkType = {
  name: string;
  url: string;
  icon: React.ReactNode;
};

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax effect values
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  // Content for portfolio - easy to update
  const portfolioContent = {
    hero: {
      greeting: "Hi, my name is",
      name: "Majd Abbassi",
      tagline: "I build games and web applications.",
      description:
        "I'm a multi-disciplinary developer specializing in Unity Game Development, Fullstack Web Development with Next.js and ASP.NET, and Unreal Engine Blueprint programming.",
      ctaText: "Check out my work",
      profileImage: "/profile-image.jpg", // Place your profile image in the public folder
    },
    about: {
      title: "About Me",
      paragraphs: [
        "Hello! I'm a versatile developer with expertise spanning game development and web technologies. My journey in software engineering has equipped me with a diverse skill set that allows me to create immersive experiences across different platforms.",
        "With a background in Unity and Unreal Engine, I create engaging gaming experiences while also building robust web applications using modern frameworks like Next.js backed by ASP.NET.",
        "I thrive in creative problem-solving environments and enjoy the challenge of bringing ideas to life through code, whether it's a complex game mechanic or a smooth web interaction.",
      ],
      image: "/about-image.jpg", // Place in public folder
    },
    skills: [
      {
        title: "Unity Game Development",
        icon: <FaUnity className="text-5xl text-accent mb-4" />,
        description:
          "Experienced in developing 2D and 3D games with Unity. Proficient in C# scripting, game mechanics, physics, and shader programming.",
        tags: ["C#", "Physics", "Shaders", "HLSL"],
      },
      {
        title: "Fullstack Web Development",
        icon: (
          <div className="flex items-center gap-3 text-5xl text-accent mb-4">
            <SiNextdotjs />
            <SiDotnet className="text-4xl" />
          </div>
        ),
        description:
          "Building responsive, performant web applications using modern frontend technologies paired with robust backend solutions.",
        tags: ["Next.js", "React", "ASP.NET", "Tailwind CSS"],
      },
      {
        title: "Unreal Engine Development",
        icon: <SiUnrealengine className="text-5xl text-accent mb-4" />,
        description:
          "Skilled in creating interactive experiences with Unreal Engine, focusing on Blueprint visual scripting for rapid prototyping and development.",
        tags: ["Blueprint", "Materials", "Sequencer", "Level Design"],
      },
      {
        title: ".NET Development",
        icon: <SiDotnet className="text-5xl text-accent mb-4" />,
        description:
          "Building scalable and robust backend systems using .NET technologies. Experienced in creating RESTful APIs, microservices, and data-driven applications.",
        tags: [".NET Core", "C#", "Entity Framework", "ASP.NET MVC"],
      },
      {
        title: "Java Spring Boot",
        icon: <div className="text-5xl text-accent mb-4 font-bold">☕</div>,
        description:
          "Developing enterprise-grade applications with Java Spring Boot. Expertise in microservices architecture, REST APIs, and database integration.",
        tags: ["Java", "Spring Boot", "JPA/Hibernate", "Microservices"],
      },
      {
        title: "DevOps",
        icon: <div className="text-5xl text-accent mb-4">⚙️</div>,
        description:
          "Implementing CI/CD pipelines and DevOps practices to streamline development workflows, optimize deployment processes, and ensure application reliability.",
        tags: ["CI/CD", "Docker", "Kubernetes", "Cloud Platforms"],
      },
    ],
    projects: [
      {
        title: "Arja3 4odwa - Unity Game",
        description:
          "A narrative-driven adventure game exploring themes of identity and return, with immersive gameplay mechanics and engaging storytelling.",
        image: "/images/work-1.jpg", // Update with your actual image path
        tags: ["Unity", "C#", "2D Game", "Narrative"],
        demoLink: "https://majdydev.itch.io/arja3-4odwa",
        codeLink: "https://github.com/Majdydev",
        icon: <FaUnity className="text-accent" />,
      },
      {
        title: "Idrak Academy",
        description:
          "Educational platform designed to provide accessible learning resources with interactive content and comprehensive course materials.",
        image: "/images/work-2.jpg", // Update with your actual image path
        tags: ["Next.js", "React", "Education", "Frontend"],
        demoLink: "https://idrakacademy.net/",
        codeLink: "https://github.com/Majdydev",
        icon: <SiNextdotjs className="text-accent" />,
      },
      {
        title: "Portfolio Website",
        description:
          "Personal portfolio showcasing projects and skills with a clean, responsive design and smooth interactions.",
        image: "/images/work-3.jpg", // Update with your actual image path
        tags: ["HTML", "CSS", "JavaScript", "Frontend"],
        demoLink: "https://abbassi.glitch.me/",
        codeLink: "https://github.com/Majdydev",
        icon: <FaReact className="text-accent" />,
      },
      {
        title: "E-commerce Platform",
        description:
          "Full-featured online store with product catalog, shopping cart, and secure checkout functionality.",
        image: "/images/work-4.jpg", // Update with your actual image path
        tags: ["Next.js", "React", "E-commerce", "Fullstack"],
        demoLink: "https://ecommerce-4hto.vercel.app/",
        codeLink: "https://github.com/Majdydev",
        icon: (
          <div className="flex space-x-2">
            <SiNextdotjs className="text-accent" />
            <SiDotnet className="text-accent" />
          </div>
        ),
      },
    ],
    contact: {
      title: "Get In Touch",
      description:
        "I'm currently open to new opportunities and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out!",
      email: "majdabbassi27@gmail.com",
      ctaText: "Say Hello",
    },
    socialLinks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abbassidev/",
        icon: <FaLinkedin />,
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/majdydev",
        icon: <FaFacebook />,
      },
      {
        name: "GitHub",
        url: "https://github.com/Majdydev",
        icon: <FaGithub />,
      },
      {
        name: "TikTok",
        url: "https://www.tiktok.com/@majd_dev",
        icon: <FaTiktok />,
      },
      {
        name: "itch.io",
        url: "https://majdydev.itch.io/",
        icon: <SiItchdotio />,
      },
      {
        name: "Gumroad",
        url: "https://majda44.gumroad.com",
        icon: <FaShoppingCart />,
      },
    ],
  };

  return (
    <div ref={containerRef} className="bg-primary text-textPrimary">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-md">
        <div className="flex justify-between items-center py-4 px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent font-mono text-xl font-bold"
          >
            &lt;Majd/&gt;
          </motion.div>
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-8 items-center"
          >
            <li>
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </motion.ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center pt-20 section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-lg font-mono text-accent mb-4">
              {portfolioContent.hero.greeting}
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold mb-4">
              {portfolioContent.hero.name}.
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold text-textSecondary mb-8">
              {portfolioContent.hero.tagline}
            </h3>
            <p className="text-textSecondary max-w-xl text-lg mb-12">
              {portfolioContent.hero.description}
            </p>
            <a
              href="#projects"
              className="border border-accent text-accent hover:bg-accent/10 py-4 px-8 rounded font-mono font-medium transition-all duration-300"
            >
              {portfolioContent.hero.ctaText}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Profile image */}
              <div className="w-full h-full rounded-lg overflow-hidden border-2 border-accent/30 relative">
                {/* You can replace this with an actual image when you have one */}
                <div className="w-full h-full bg-secondary flex items-center justify-center">
                  <FaCode className="text-8xl text-accent/30" />
                </div>
                {/* Uncomment and add your image path when ready */}
                {/* <Image 
                  src={portfolioContent.hero.profileImage}
                  alt="Profile"
                  fill
                  className="object-cover"
                /> */}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center section-padding"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <span className="font-mono text-accent mr-2">01.</span>{" "}
              {portfolioContent.about.title}
            </h2>
            <div className="space-y-4 text-textSecondary">
              {portfolioContent.about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-secondary rounded-lg p-6 relative overflow-hidden"
          >
            <div className="code-card w-full h-full rounded-md border-2 border-accent/20 relative">
              <div className="bg-[#1E1E1E] text-xs md:text-sm font-mono overflow-hidden h-full p-4 relative">
                <div className="flex items-center gap-2 mb-4 opacity-70">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-gray-400">about.tsx</span>
                </div>

                <div className="text-blue-400">
                  <span className="text-pink-400">const</span>{" "}
                  <span className="text-blue-300">aboutMe</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-white">&#123;</span>
                </div>

                <div className="pl-4 mt-2">
                  <div>
                    <span className="text-blue-300">paragraphs</span>
                    <span className="text-white">: [</span>
                  </div>
                  <div className="pl-4 mt-2">
                    <span className="text-green-400">
                      "Hello! I'm a versatile developer with expertise spanning
                      game development and web technologies. My journey in
                      software engineering has equipped me with a diverse skill
                      set that allows me to create immersive experiences across
                      different platforms."
                    </span>
                    <span className="text-white">,</span>
                  </div>
                  <div className="pl-4 mt-2">
                    <span className="text-green-400">
                      "With a background in Unity and Unreal Engine, I create
                      engaging gaming experiences while also building robust web
                      applications using modern frameworks like Next.js backed
                      by ASP.NET."
                    </span>
                    <span className="text-white">,</span>
                  </div>
                  <div className="pl-4 mt-2">
                    <span className="text-green-400">
                      "I thrive in creative problem-solving environments and
                      enjoy the challenge of bringing ideas to life through
                      code, whether it's a complex game mechanic or a smooth web
                      interaction."
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className="text-white">]</span>
                  </div>
                </div>

                <div className="mt-2">
                  <span className="text-white">&#125;;</span>
                </div>

                <div className="mt-4">
                  <span className="text-pink-400">export default function</span>{" "}
                  <span className="text-yellow-400">About</span>
                  <span className="text-white">() &#123;</span>
                </div>

                <div className="pl-4 mt-2">
                  <span className="text-pink-400">return</span>{" "}
                  <span className="text-white">(</span>
                  <div className="pl-4">
                    <span className="text-blue-500">&lt;div</span>{" "}
                    <span className="text-yellow-300">className</span>
                    <span className="text-white">="about-section"</span>
                    <span className="text-blue-500">&gt;</span>
                    <div className="pl-4">
                      <span className="text-blue-500">&lt;h2&gt;</span>
                      <span className="text-white">About Me</span>
                      <span className="text-blue-500">&lt;/h2&gt;</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-500">&lt;div&gt;</span>
                      <span className="text-white">
                        &#123;aboutMe.paragraphs.map(p =&gt; (
                      </span>
                      <div className="pl-4">
                        <span className="text-blue-500">&lt;p&gt;</span>
                        <span className="text-white">&#123;p&#125;</span>
                        <span className="text-blue-500">&lt;/p&gt;</span>
                      </div>
                      <span className="text-white">))&#125;</span>
                      <span className="text-blue-500">&lt;/div&gt;</span>
                    </div>
                    <span className="text-blue-500">&lt;/div&gt;</span>
                  </div>
                  <span className="text-white">);</span>
                </div>

                <div className="mt-2 mb-4">
                  <span className="text-white">&#125;</span>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-[#1E1E1E] to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section - Grid Layout (replacing horizontal scroll) */}
      <section id="skills" className="min-h-screen section-padding">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <span className="font-mono text-accent mr-2">02.</span> My Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioContent.skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-secondary rounded-lg p-8 shadow-lg h-full"
              >
                {skill.icon}
                <h3 className="text-2xl font-bold mb-3">{skill.title}</h3>
                <p className="text-textSecondary mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {skill.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/50 rounded-full text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen section-padding">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-16 flex items-center">
            <span className="font-mono text-accent mr-2">03.</span> Featured
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {portfolioContent.projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="project-card"
              >
                <div className="mb-4 bg-primary/50 h-48 rounded overflow-hidden relative group cursor-pointer">
                  {/* Project preview image with hover effect */}
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    className="block w-full h-full"
                  >
                    <div className="absolute inset-0 flex items-center justify-center bg-primary/60 group-hover:bg-primary/30 transition-all duration-300 z-10">
                      <FaExternalLinkAlt className="text-2xl text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    {/* Placeholder until you have real images */}
                    <div className="absolute inset-0 flex items-center justify-center bg-secondary">
                      <FaGamepad className="text-5xl text-accent/30" />
                    </div>
                    {/* Use real images - keep this commented until you have the images */}
                    {
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    }
                  </Link>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  {project.icon}
                </div>
                <p className="text-textSecondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/50 rounded-full text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline flex items-center gap-2 group"
                  >
                    <span>View Project</span>
                    <FaExternalLinkAlt className="text-xs transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    GitHub
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center section-padding"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl w-full text-center"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
            <span className="font-mono text-accent mr-2">04.</span>{" "}
            {portfolioContent.contact.title}
          </h2>
          <p className="text-textSecondary mb-10 text-lg">
            {portfolioContent.contact.description}
          </p>
          <motion.a
            href={`mailto:${portfolioContent.contact.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block border-2 border-accent text-accent hover:bg-accent/10 py-4 px-8 rounded-md font-mono font-medium transition-all duration-300"
          >
            {portfolioContent.contact.ctaText}
          </motion.a>

          <div className="mt-16 flex justify-center space-x-8 text-2xl text-textSecondary">
            {portfolioContent.socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "#64ffda" }}
                className="transition-colors"
                title={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-textSecondary text-sm font-mono">
        <p>Designed & Built by Majd</p>
        <p className="mt-2">
          © {new Date().getFullYear()} - All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
