/**
 * Projects Component
 * 
 * Server Component - displays static project cards.
 * 
 * TypeScript note: We define a Project type/interface to ensure type safety
 * when working with project data. This catches errors at compile time.
 */

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export default function Projects() {
  /**
   * Project Data
   * 
   * In a real application, this might come from:
   * - A CMS (Sanity, Contentful)
   * - A database query
   * - Markdown files
   * - An API endpoint
   * 
   * For now, we're using static data defined here.
   */
  const projects: Project[] = [
    {
      title: 'M&A Platform Integration',
      description: 'Led the technical integration of acquired insurance platform into Travelers ecosystem. Designed migration strategy, coordinated engineering teams across organizations, and established unified technical standards.',
      technologies: ['Elixir', 'Phoenix', 'GraphQL', 'AWS', 'PostgreSQL'],
    },
    {
      title: 'Underwriting Platform',
      description: 'Architected and launched an industry-leading underwriting and pricing platform for multiple Cyber and Technology insurance products.',
      technologies: ['Elixir', 'Phoenix', 'GraphQL', 'AWS', 'PostgreSQL'],
    },
    {
      title: 'Engineering Culture Framework',
      description: 'Developed and implemented comprehensive engineering culture framework including career ladders, technical standards, and mentorship programs. Improved retention and team satisfaction scores.',
      technologies: ['Leadership', 'Process Design', 'Team Building'],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Work
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Recent projects and initiatives spanning technical architecture, team leadership, and strategic initiatives.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              /**
               * Key Prop in Lists
               * 
               * React requires a "key" prop when rendering lists.
               * Keys help React identify which items have changed, been added, or removed.
               * 
               * Best practices:
               * - Use stable IDs from your data when available (project.id)
               * - Index as last resort (only if list never reorders)
               * - Must be unique among siblings
               */
              <div
                key={index}
                className="bg-background-secondary border border-border rounded-lg p-6 hover:border-primary transition-colors"
              >
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                
                <p className="text-foreground-muted mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-light text-foreground text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links (if available) */}
                {(project.link || project.github) && (
                  <div className="flex gap-4 mt-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-hover font-medium"
                      >
                        View Project →
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-hover font-medium"
                      >
                        GitHub →
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-foreground-muted mb-6">
              Want to learn more about my work and leadership approach?
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors font-medium"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
