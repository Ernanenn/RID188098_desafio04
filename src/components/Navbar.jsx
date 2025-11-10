import { useEffect, useState } from 'react'

const Navbar = () => {
  const [isElevated, setIsElevated] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsElevated(window.scrollY > 40)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`navbar${isElevated ? ' navbar--elevated' : ''}`}>
      <nav className="navbar__links">
        <a href="#projects">Projetos</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  )
}

export default Navbar

