# Portfólio Profissional

Portfólio profissional construído em **React + Vite**, seguindo o Template 03 do Figma, proposto no desafio da Escola DNC. O projeto traz uma landing page moderna, com carrossel de artigos, seção de projetos e alternância de tema (claro/escuro), mantendo fidelidade ao layout original.

## ✨ Principais funcionalidades

- **Alternância de tema** (light/dark) persistida em `localStorage`.
- **Carrossel de artigos** com autoplay, indicadores e controle responsivo.
- **Modal de imagens** nos cards de projeto.
- **Navbar dinâmica** com sombra ao rolar e âncoras para as seções.
- Layout responsivo para desktop, tablet e mobile.

## 🛠️ Tecnologias

- [React](https://react.dev/) + [Vite](https://vite.dev/)  
- Hooks nativos (`useState`, `useEffect`, `useMemo`, `useRef`)  
- CSS modularizado com variáveis de tema e media queries  
- Persistência de tema em `localStorage`

## 📂 Estrutura

- `src/App.jsx` – coordena o tema, injeta dados e renderiza as seções.
- `src/components/` – blocos de UI (Hero, Navbar, Blog, Projetos, Footer, etc.).
- `src/App.css` – estilos globais organizados por seções mais ajustes responsivos.
- `src/index.css` – reset, variáveis de cores (light/dark) e definições base.

## ⚙️ Executando o projeto

```bash
# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O projeto roda por padrão em `http://localhost:5173`.
