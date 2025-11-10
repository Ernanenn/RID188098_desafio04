import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BlogSection from './components/BlogSection'
import ProjectsSection from './components/ProjectsSection'
import Footer from './components/Footer'
import './App.css'
import apiTestSuiteImg from './assets/apitest.jpeg'
import pontoEletronicoImg from './assets/pontosis.jpeg'
import showsabImg from './assets/showsab.jpeg'

// Identificador utilizado para persistir a escolha de tema no localStorage.
const THEME_STORAGE_KEY = 'portfolio-theme'

// Determina o tema inicial, priorizando a preferência salva pelo usuário
// e, caso não exista, consulta a preferência do sistema operacional.
const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light'
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') {
    return stored
  }
  if (window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return 'light'
}

// Conteúdo exibido no carrossel da seção de blog.
const blogPosts = [
  {
    id: 1,
    title: 'WebAssembly (Wasm): A Revolução da Performance no Navegador',
    date: '10 Nov 2025',
    tags: ['WebDev', 'Performance', 'Wasm'],
    excerpt:
      'Descubra por que o Wasm é uma realidade para rodar código de alta performance (C++, Rust) diretamente no seu browser, redefinindo o futuro das aplicações web.',
  },
  {
    id: 2,
    title: 'Seu Primeiro Modelo de ML: Um Guia Simples para Desenvolvedores',
    date: '28 Out 2025',
    tags: ['AI', 'Machine Learning', 'Python'],
    excerpt:
      'Aprenda os conceitos básicos de Machine Learning e como integrar seu primeiro modelo em uma aplicação web, transformando dados em decisões inteligentes, mesmo sem ser um cientista de dados.',
  },
  {
    id: 3,
    title: 'Como Usar o React Hook Form para Validar Formulários de Forma Simples e Eficiente',
    date: '15 Set 2025',
    tags: ['React', 'Formulários', 'Validade'],
    excerpt:
      'Aprenda a usar o React Hook Form para criar formulários robustos e validados de forma eficiente, transformando entradas de usuários em dados estruturados e seguros.',
  },
  {
    id: 4,
    title: 'Terraform vs. Pulumi: Qual Ferramenta de IaC Escolher em 2025?',
    date: '05 Dez 2025',
    tags: ['DevOps', 'Cloud', 'IaC', 'Terraform'],
    excerpt:
      'Uma análise detalhada das principais ferramentas de Infraestrutura como Código (IaC) do mercado. Comparamos as abordagens declarativa e imperativa para te ajudar a escolher a solução ideal para gerenciar seus recursos na nuvem.',
  },
]

// Portfólio de projetos destacados no site.
const projects = [
  {
    id: 1,
    title: 'API Test Suite',
    thumbnail: apiTestSuiteImg,
    description:
      'Uma ferramenta intuitiva e poderosa para realizar testes automatizados em APIs RESTful, desenvolvida com React e Vite. Esta aplicação permite configurar requisições HTTP, executar testes, validar respostas e visualizar resultados de forma clara e organizada, além de possibilitar a exportação dos relatórios.',
    link: 'https://github.com/Ernanenn/api-test-react',
  },
  {
    id: 2,
    title: 'Show do Semiárido',
    thumbnail: showsabImg,
    description:
      'É um jogo de perguntas e respostas interativo e divertido sobre as tradições, história e curiosidades do semiárido brasileiro. Este quiz permite que os jogadores testem seus conhecimentos, compartilhem seus resultados e comparem suas pontuações com outros jogadores.',
    link: 'https://show-do-semiarido.netlify.app/',
  },
  {
    id: 3,
    title: 'Sistema de Ponto Eletrônico',
    thumbnail: pontoEletronicoImg,
    description:
      'Sistema de registro de ponto eletrônico que permite aos usuários registrarem sua presença através de CPF e foto. O sistema registra a data, o horário e a foto tirada em um banco de dados.',
    link: 'https://github.com/Ernanenn/eletronic_pointSystem',
  },
]

function App() {
  // Estado responsável pelo tema atual da interface (light/dark).
  const [theme, setTheme] = useState(getInitialTheme)

  // Mantém o atributo data-theme sincronizado e persiste a escolha do usuário.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  // Alterna entre os dois temas disponíveis.
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className="app">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <BlogSection posts={blogPosts} />
        <ProjectsSection projects={projects} />
      </main>
      <Footer />
    </div>
  )
}

export default App
