/**
 * About Component
 * 
 * Server Component - no interactivity needed.
 * Content is static and can be rendered on the server for optimal performance.
 */

import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="section-padding bg-background-secondary">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            About Me
          </h2>
          
          {/* Profile Photo */}
          <div className="flex justify-center mb-12">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-lg">
              <Image
                src="/profile.jpg"
                alt="Kelvin Ma"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Bio */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  From Photojournalism to Engineering Leadership
                </h3>
                <p className="text-foreground-muted leading-relaxed">
                  My career journey is unconventional: I started as a photojournalist with a client list 
                  that included The New York Times, Bloomberg News, and The Wall Street Journal, earning 
                  a Pulitzer Prize nomination for my coverage of the 2013 Boston Marathon bombings. 
                  In 2015, I transitioned to software engineering through General Assembly's 
                  Web Development Immersive program, bringing creative problem-solving skills 
                  from photojournalism into technical leadership.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Leading the AI-Augmented Engineering Era
                </h3>
                <p className="text-foreground-muted leading-relaxed mb-4">
                  I'm a passionate advocate and power user of generative AI coding tools, championing
                  their adoption across engineering teams to drive measurable productivity gains. At
                  Travelers, I've led the successful integration of tools like GitHub Copilot and Claude
                  into daily workflows, demonstrating that the future of software engineering isn't about
                  replacing developers—it's about amplifying their capabilities.
                </p>
                <p className="text-foreground-muted leading-relaxed mb-4">
                  With 8+ years of experience building, scaling, and retaining high-performing teams
                  from startup to acquisition, I specialize in M&A integrations, AI-first development
                  practices, and creating engineering cultures where people do their best work. I believe
                  the most effective engineering leaders today are those who can blend strategic vision
                  with hands-on technical expertise — I practice what I preach by using AI tools daily
                  for everything from rapid prototyping to architectural planning.
                </p>
                <p className="text-foreground-muted leading-relaxed">
                  Photography remains a personal creative outlet—you can follow my ongoing
                  work on{' '}
                  <a
                    href="https://instagram.com/_kelvin_internet_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-hover underline"
                  >
                    Instagram @_kelvin_internet_
                  </a>.
                </p>
              </div>
            </div>
            
            {/* Right Column - Skills & Expertise */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Leadership & Strategy
                </h3>
                <ul className="space-y-2">
                  {[
                    'Generative AI Adoption & Developer Productivity',
                    'AI-Augmented Development Practices',
                    'Engineering Leadership & Team Building',
                    'M&A Integration & Post-Acquisition Leadership',
                    'Engineering Culture & Developer Experience',
                    'Technical Architecture & System Design'
                  ].map((skill) => (
                    <li key={skill} className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-foreground-muted">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Technical Expertise
                </h3>
                <ul className="space-y-2">
                  {[
                    'GitHub Copilot, Claude, ChatGPT & AI Tools',
                    'Elixir / Phoenix Framework',
                    'React / TypeScript / Next.js',
                    'Ruby / Ruby on Rails',
                    'GraphQL & API Design',
                    'Distributed Systems & Microservices',
                    'Cloud Infrastructure (AWS, GCP)'
                  ].map((skill) => (
                    <li key={skill} className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-foreground-muted">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Career Timeline - Simplified */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Career Journey
            </h3>
            <div className="space-y-6">
              {[
                {
                  role: 'Director of Software Engineering',
                  company: 'Travelers Insurance',
                  period: '2025 - Present',
                  description: 'Leading post-acquisition integration and championing generative AI adoption across engineering teams, driving significant productivity gains. Maintaining below-average team attrition through transparent communication and supportive leadership during organizational transition.'
                },
                {
                  role: 'Sr. Manager, Engineering',
                  company: 'Corvus Insurance',
                  period: '2020 - 2025',
                  description: 'Scaled engineering teams from 10 to 50+ engineers. Led Travelers partnership integration and launched two new insurance products. Aligned engineering roadmaps with business objectives while building high-performing, collaborative teams.'
                },
                {
                  role: 'Team Lead → Engineering Manager',
                  company: 'Forward Financing',
                  period: '2016 - 2019',
                  description: 'First engineering hire. Built and led team of 7 engineers, established engineering culture and co-op program. Developed internal tools supporting 573% company growth and integrated ML into underwriting processes.'
                }
              ].map((job, index) => (
                <div key={index} className="border-l-4 border-primary pl-6 pb-6">
                  <h4 className="text-xl font-semibold text-foreground">{job.role}</h4>
                  <p className="text-primary mb-2">{job.company} • {job.period}</p>
                  <p className="text-foreground-muted">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
