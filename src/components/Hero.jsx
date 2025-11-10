const Hero = ({ greeting }) => {
  return (
    <section className="hero">
      {greeting && <span className="hero__eyebrow">{greeting}</span>}
      <h1>
        Olá, eu sou Ernane Nunes
        <br />
        Desenvolvedor Full-stack
      </h1>
      <p>
        Desenvolvedor especializado em traduzir visões de negócio em
        produtos digitais robustos e escaláveis. Ajudo empresas a validar
        rapidamente MVPs e garantir o lançamento de produtos com eficiência.
      </p>
      <a
        className="hero__button"
        href="https://drive.google.com"
        target="_blank"
        rel="noreferrer"
      >
        Download resumo
      </a>
    </section>
  )
}

export default Hero

