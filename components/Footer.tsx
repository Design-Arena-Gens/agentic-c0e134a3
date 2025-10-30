"use client";

import { FiGithub, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#contact" },
    ],
    Services: [
      { name: "AI Consulting", href: "#services" },
      { name: "AI Agents", href: "#services" },
      { name: "Automations", href: "#services" },
      { name: "AI Content", href: "#services" },
      { name: "Web Development", href: "#services" },
    ],
    Resources: [
      { name: "Blog", href: "#blog" },
      { name: "Case Studies", href: "#case-studies" },
      { name: "Documentation", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: FiTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FiLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FiGithub, href: "https://github.com", label: "GitHub" },
    { icon: FiMail, href: "mailto:hello@evo.ai", label: "Email" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gradient mb-4">Evo</h3>
            <p className="text-slate-400 mb-4 max-w-sm">
              Transforming businesses with cutting-edge AI solutions. Your partner
              in digital innovation and intelligent automation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-gradient-purple transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-slate-400 hover:text-primary-light transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} Evo AI Consulting Agency. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-slate-400 hover:text-primary-light transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-primary-light transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-primary-light transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
