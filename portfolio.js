import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[id]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'AWS', level: 85, icon: '☁️' },
    { name: 'Terraform', level: 80, icon: '🏗️' },
    { name: 'Jenkins', level: 85, icon: '🔄' },
    { name: 'Docker', level: 75, icon: '🐳' },
    { name: 'Git', level: 80, icon: '⚡' },
    { name: 'Linux', level: 75, icon: '🐧' }
  ];

  const projects = [
    {
      title: "WordPress on AWS LightSail",
      description: "Deployed WordPress application on AWS LightSail with optimized performance and scalability configurations.",
      tech: ["AWS LightSail", "WordPress", "Linux", "Database"],
      image: "🌐",
      url: "https://www.linkedin.com/in/amalkbiju-devops/details/projects/1758302477114/single-media-viewer/?profileId=ACoAAE5g4U0Bs-DGSLDjGG-rZ4tdNVqE7djhmHw"
    },
    {
      title: "Snake Game Containerized",
      description: "Containerized classic Snake game application using Docker for consistent deployment across environments.",
      tech: ["Docker", "JavaScript", "HTML/CSS", "Containerization"],
      image: "🐍",
      url: "https://www.linkedin.com/in/amalkbiju-devops/details/projects/1741329307311/single-media-viewer/?profileId=ACoAAE5g4U0Bs-DGSLDjGG-rZ4tdNVqE7djhmHw"
    },
    {
      title: "CI/CD Pipeline for Web App using GitHub Actions and Docker",
      description: "Implemented automated CI/CD pipeline using GitHub Actions and Docker for seamless web application deployment.",
      tech: ["GitHub Actions", "Docker", "CI/CD", "Automation"],
      image: "🚀",
      url: "https://www.linkedin.com/in/amalkbiju-devops/details/projects/1741328804293/single-media-viewer/?profileId=ACoAAE5g4U0Bs-DGSLDjGG-rZ4tdNVqE7djhmHw"
    },
    {
      title: "Spotify Playlist Automation with Terraform",
      description: "Automated Spotify playlist management using Terraform for infrastructure-as-code approach to music curation.",
      tech: ["Terraform", "Spotify API", "Automation", "IaC"],
      image: "🎵",
      url: "https://www.linkedin.com/in/amalkbiju-devops/details/projects/1738611972212/single-media-viewer/?profileId=ACoAAE5g4U0Bs-DGSLDjGG-rZ4tdNVqE7djhmHw"
    }
  ];

  const certifications = [
    {
      name: "AWS Cloud Practitioner",
      url: "https://www.credly.com/badges/635150ca-8290-4a77-9073-b9751d6a2c0d/public_url"
    },
    {
      name: "AWS SysOps Administrator",
      url: "https://www.credly.com/badges/7bf8f824-8076-4cef-a9fa-f1e25696d22d/public_url"
    }
  ];

  const timeline = [
    {
      year: "2024",
      title: "AWS DevOps Engineer",
      company: "Professional Role",
      description: "AWS DevOps Automation & CI/CD Pipeline Implementation – Provisioned cloud infrastructure on AWS using Terraform for scalable and repeatable deployments. Designed and configured Jenkins CI/CD pipelines to automate build, test, and deployment workflows. Deployed and orchestrated Docker containers to support high-availability applications across environments."
    },
    {
      year: "2024",
      title: "AWS DevOps Course",
      company: "Besant Technologies",
      description: "Completed comprehensive AWS DevOps training covering cloud infrastructure, automation, and best practices for modern deployment strategies."
    },
    {
      year: "2023",
      title: "CSP Robotics Workshop",
      company: "ASAP",
      description: "Participated in advanced robotics workshop focusing on automation and problem-solving techniques applicable to DevOps practices."
    },
    {
      year: "2020-2023",
      title: "Bachelor of Computer Applications",
      company: "Kannur University",
      description: "Completed undergraduate degree in Computer Applications with focus on software development, database management, and system administration."
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f172a 100%)',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      
      {/* Floating Background Elements */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 1
      }}>
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: `${20 + i * 15}%`,
              left: '-10%',
              fontSize: '2rem',
              opacity: 0.1,
              animation: `float${i} ${15 + i * 5}s linear infinite`
            }}
          >
            {i % 2 === 0 ? '☁️' : '🖥️'}
          </div>
        ))}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float0 { 0% { transform: translateX(-100px); } 100% { transform: translateX(calc(100vw + 100px)); } }
        @keyframes float1 { 0% { transform: translateX(-100px); } 100% { transform: translateX(calc(100vw + 100px)); } }
        @keyframes float2 { 0% { transform: translateX(-100px); } 100% { transform: translateX(calc(100vw + 100px)); } }
        @keyframes float3 { 0% { transform: translateX(-100px); } 100% { transform: translateX(calc(100vw + 100px)); } }
        @keyframes float4 { 0% { transform: translateX(-100px); } 100% { transform: translateX(calc(100vw + 100px)); } }
        
        @keyframes fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideIn { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        
        .fade-in { animation: fadeIn 0.8s ease-out forwards; }
        .slide-in { animation: slideIn 0.8s ease-out forwards; }
        .scale-in { animation: scaleIn 0.8s ease-out forwards; }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          transition: all 0.3s ease;
        }
        
        .glass-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          border-color: rgba(147, 51, 234, 0.5);
        }
        
        .skill-bar {
          background: #374151;
          border-radius: 10px;
          overflow: hidden;
          height: 8px;
        }
        
        .skill-fill {
          height: 100%;
          background: linear-gradient(90deg, #9333ea, #3b82f6);
          border-radius: 10px;
          transition: width 2s ease-in-out;
        }
        
        .glow-button {
          background: linear-gradient(135deg, #9333ea, #3b82f6);
          border: none;
          border-radius: 25px;
          padding: 12px 24px;
          color: white;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .glow-button:hover {
          box-shadow: 0 0 20px rgba(147, 51, 234, 0.5);
          transform: translateY(-2px);
        }
      `}</style>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 20px',
        position: 'relative',
        zIndex: 2
      }}>
        <div className={isVisible.hero ? 'fade-in' : ''} id="hero">
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 8rem)',
            fontWeight: '900',
            background: 'linear-gradient(135deg, #a855f7, #3b82f6, #06b6d4)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem',
            animation: isVisible.hero ? 'fadeIn 1s ease-out' : ''
          }}>
            AMAL K BIJU
          </h1>
          
          <p style={{
            fontSize: 'clamp(1.2rem, 3vw, 2rem)',
            color: '#d1d5db',
            marginBottom: '2rem',
            animation: isVisible.hero ? 'fadeIn 1s ease-out 0.3s both' : ''
          }}>
            AWS DevOps Engineer | Automating Infrastructure with Terraform & Jenkins
          </p>
          
          <button 
            className="glow-button"
            style={{
              fontSize: '1.1rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              animation: isVisible.hero ? 'scaleIn 0.8s ease-out 0.6s both' : ''
            }}
          >
            📥 Download Resume
          </button>
        </div>
      </section>

      {/* About Me Section */}
      <section style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 
            id="about"
            className={isVisible.about ? 'fade-in' : ''}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '4rem',
              background: 'linear-gradient(135deg, #a855f7, #3b82f6)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            About Me
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>
            <div className={`glass-card ${isVisible.about ? 'slide-in' : ''}`} style={{ padding: '2rem' }}>
              <div style={{
                width: '120px',
                height: '120px',
                background: 'linear-gradient(135deg, #9333ea, #3b82f6)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                margin: '0 auto 1.5rem'
              }}>
                👨‍💻
              </div>
              <p style={{ color: '#d1d5db', lineHeight: '1.6', fontSize: '1.1rem' }}>
                AWS DevOps Engineer with hands-on experience in automating infrastructure using Terraform, 
                configuring Jenkins CI/CD pipelines, and managing Docker containers. Currently working at 
                Besant Technologies, specializing in AWS cloud services including EC2, S3, and IAM. 
                Passionate about automation, continuous integration, and scalable cloud solutions.
              </p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className={`glass-card ${isVisible.about ? 'fade-in' : ''}`}
                  style={{ 
                    padding: '1rem',
                    animationDelay: `${0.1 * index}s`
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '8px'
                  }}>
                    <span style={{ 
                      fontSize: '1.1rem', 
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <span>{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span style={{ color: '#9ca3af' }}>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-fill"
                      style={{ 
                        width: isVisible.about ? `${skill.level}%` : '0%'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 
            id="projects"
            className={isVisible.projects ? 'fade-in' : ''}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '4rem',
              background: 'linear-gradient(135deg, #a855f7, #3b82f6)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Featured Projects
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`glass-card ${isVisible.projects ? 'scale-in' : ''}`}
                style={{
                  padding: '1.5rem',
                  animationDelay: `${0.1 * index}s`
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                  {project.image}
                </div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold', 
                  marginBottom: '1rem',
                  color: '#a855f7'
                }}>
                  {project.title}
                </h3>
                <p style={{ 
                  color: '#d1d5db', 
                  marginBottom: '1rem',
                  lineHeight: '1.5'
                }}>
                  {project.description}
                </p>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1rem'
                }}>
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      style={{
                        background: 'rgba(147, 51, 234, 0.3)',
                        color: '#a855f7',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '15px',
                        fontSize: '0.875rem',
                        border: '1px solid rgba(147, 51, 234, 0.5)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#3b82f6',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  🔗 View on LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Certifications */}
      <section style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 
            id="skills"
            className={isVisible.skills ? 'fade-in' : ''}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '4rem',
              background: 'linear-gradient(135deg, #a855f7, #3b82f6)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Certifications
          </h2>

          {/* Certifications */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '2rem',
            justifyContent: 'center'
          }}>
            {certifications.map((cert, index) => (
              <a
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card ${isVisible.skills ? 'slide-in' : ''}`}
                style={{
                  padding: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  animationDelay: `${0.1 * index}s`,
                  textDecoration: 'none',
                  color: 'inherit',
                  cursor: 'pointer'
                }}
              >
                <span style={{ color: '#fbbf24', fontSize: '2.5rem' }}>🏆</span>
                <div>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                    color: '#a855f7'
                  }}>
                    {cert.name}
                  </h3>
                  <p style={{ 
                    color: '#3b82f6',
                    fontSize: '0.9rem',
                    margin: 0
                  }}>
                    View on Credly →
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 
            id="experience"
            className={isVisible.experience ? 'fade-in' : ''}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '4rem',
              background: 'linear-gradient(135deg, #a855f7, #3b82f6)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Experience
          </h2>
          
          <div style={{ position: 'relative' }}>
            {/* Timeline line */}
            <div style={{
              position: 'absolute',
              left: '32px',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(to bottom, #9333ea, #3b82f6)'
            }} />
            
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={isVisible.experience ? 'slide-in' : ''}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.5rem',
                  marginBottom: '3rem',
                  animationDelay: `${0.2 * index}s`
                }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: 'linear-gradient(135deg, #9333ea, #3b82f6)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                  flexShrink: 0,
                  zIndex: 10,
                  position: 'relative'
                }}>
                  {item.year}
                </div>
                <div className="glass-card" style={{ padding: '1.5rem', flex: 1 }}>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: 'bold', 
                    color: '#a855f7',
                    marginBottom: '0.5rem' 
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ 
                    fontSize: '1.125rem', 
                    color: '#3b82f6',
                    marginBottom: '0.75rem' 
                  }}>
                    {item.company}
                  </p>
                  <p style={{ color: '#d1d5db', lineHeight: '1.5' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 
            id="contact"
            className={isVisible.contact ? 'fade-in' : ''}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '4rem',
              background: 'linear-gradient(135deg, #a855f7, #3b82f6)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Get In Touch
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem'
          }}>
            <div className={`glass-card ${isVisible.contact ? 'slide-in' : ''}`} style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                Let's Work Together
              </h3>
              <p style={{ 
                color: '#d1d5db', 
                marginBottom: '1.5rem',
                lineHeight: '1.6'
              }}>
                Ready to automate your infrastructure and streamline your deployment processes? 
                Let's discuss how we can build efficient DevOps solutions together.
              </p>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                {['🐙', '💼', '📧'].map((icon, index) => (
                  <button
                    key={index}
                    style={{
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(135deg, #9333ea, #3b82f6)',
                      border: 'none',
                      borderRadius: '50%',
                      fontSize: '1.25rem',
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>
            
            <div className={`glass-card ${isVisible.contact ? 'scale-in' : ''}`} style={{ padding: '2rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <input
                  type="email"
                  placeholder="Your Email"
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    color: 'white',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                />
              </div>
              <button 
                type="submit"
                className="glow-button"
                style={{ width: '100%', fontSize: '1rem' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        padding: '2rem', 
        textAlign: 'center', 
        borderTop: '1px solid rgba(255, 255, 255, 0.2)' 
      }}>
        <p style={{ color: '#9ca3af' }}>© AMAL K BIJU 2025. All rights reserved. | amalkbiju95@gmail.com | +91 96055 20224</p>
      </footer>
    </div>
  );
};

export default Portfolio;
