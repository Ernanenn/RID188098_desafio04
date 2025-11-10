import { useEffect, useState } from 'react'

const Navbar = ({ theme = 'light', onToggleTheme }) => {
  const [isElevated, setIsElevated] = useState(false)

  // Aplica uma sombra na barra de navegação assim que o usuário começa a rolar a página.
  useEffect(() => {
    const handleScroll = () => {
      setIsElevated(window.scrollY > 40)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const nextTheme = theme === 'dark' ? 'claro' : 'escuro'

  return (
    <header className={`navbar${isElevated ? ' navbar--elevated' : ''}`}>
      <button
        type="button"
        className="navbar__theme-toggle"
        onClick={onToggleTheme}
        aria-label={`Alternar para o tema ${nextTheme}`}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
      <nav className="navbar__links">
        <a href="#projects">Projetos</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  )
}

export default Navbar
