import { useState } from 'react'

const ProjectCard = ({ title, thumbnail, description }) => {
  // Controla a exibição do modal com a imagem ampliada do projeto.
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <article className="project-card">
        <button
          type="button"
          className="project-card__image"
          onClick={() => setIsOpen(true)}
        >
          <img src={thumbnail} alt={`Imagem do projeto ${title}`} />
        </button>
        <div className="project-card__content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </article>
      {isOpen && (
        <div className="modal" role="dialog" aria-modal="true" aria-label={`Imagem ampliada do projeto ${title}`}>
          <div className="modal__content">
            <button
              type="button"
              className="modal__close"
              onClick={() => setIsOpen(false)}
              aria-label="Fechar visualização da imagem"
            >
              ×
            </button>
            <div className="modal__image">
              <img src={thumbnail} alt={`Imagem do projeto ${title}`} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectCard
