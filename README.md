# Portfólio Freelancer – Template 03 (Figma)

Este projeto é um portfólio profissional desenvolvido com **React** e **Vite**, seguindo fielmente o **Template 03** disponibilizado no Figma para o desafio. Toda a estrutura, hierarquia visual e componentes foram construídos com base nesse layout, garantindo consistência com o design original.

## Tecnologias

- [React](https://react.dev/) + [Vite](https://vite.dev/) para velocidade de desenvolvimento e HMR.
- Hooks nativos (`useState`, `useEffect`) para adicionar dinamismo e personalização.
- CSS puro para reproduzir a identidade visual do template.

## Hooks utilizados

- `useState`: mantém a saudação exibida na seção Hero conforme o período do dia.
- `useEffect`: calcula o horário atual ao montar a aplicação e atualiza a saudação dinamicamente.

## Executando o projeto

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
```

O servidor padrão do Vite estará disponível em `http://localhost:5173`.

## Estrutura principal

- `src/components`: componentes modulares que refletem os blocos do Template 03 (Hero, Blog, Projetos, Contato e Footer).
- `src/App.jsx`: orquestra os componentes, injeta dados estáticos e aplica os hooks.
- `src/App.css` e `src/index.css`: estilos alinhados às cores, tipografia e espaçamentos do Template 03.

## Status do projeto

✅ Layout e conteúdo adaptados do Template 03  
✅ Configuração com React + Vite  
✅ Hooks implementados (`useState` + `useEffect`)  
✅ Responsividade básica mantendo a essência do design
