import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BlogSection from './components/BlogSection'
import ProjectsSection from './components/ProjectsSection'
import Footer from './components/Footer'
import './App.css'
import apiTestSuiteImg from './assets/apitest.jpeg'
import pontoEletronicoImg from './assets/pontosis.jpeg'

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
    title: 'Sistema de Ponto Eletrônico',
    thumbnail: pontoEletronicoImg,
    description:
      'Sistema de registro de ponto eletrônico que permite aos usuários registrarem sua presença através de CPF e foto. O sistema registra a data, o horário e a foto tirada em um banco de dados.',
    link: 'https://github.com/Ernanenn/eletronic_pointSystem',
  },
  {
    id: 3,
    title: '36 Days of Malayalam type',
    thumbnail:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    link: 'https://www.joao.dev',
  },
]

function App() {
  return (
    <div className="app">
      <Navbar />
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
