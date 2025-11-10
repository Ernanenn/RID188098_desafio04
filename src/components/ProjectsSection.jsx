import ProjectCard from './ProjectCard'

// Agrupa o portfólio de projetos, exibindo cada item com descrição e miniatura.
const ProjectsSection = ({ projects }) => {
  return (
    <section id="projects" className="projects">
      <h2>Projetos</h2>
      <div className="projects__list">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection

