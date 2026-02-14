# Portfólio - Guilherme Augusto

Portfólio pessoal desenvolvido com HTML, CSS e JavaScript puro — sem frameworks ou dependências de build.

## Preview

Site single-page com as seções:

- **Apresentação** — foto, título e localização
- **Experiência** — projetos como ERP, automação com N8N e análise de dados
- **Formação** — graduação em Ciências da Computação (UNIFAVIP), cursos e idiomas
- **Contato** — email, telefone e GitHub

## Tecnologias

- HTML5
- CSS3 (animações, grid, glassmorphism)
- JavaScript (vanilla)
- [Google Fonts](https://fonts.google.com/) — Fira Sans
- [Font Awesome 6](https://fontawesome.com/) — ícones de contato

## Estrutura

```
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── img/
    ├── marca.svg
    ├── perfil.jpg
    ├── detalhe.svg
    ├── cursos.svg
    └── idiomas.svg
```

## Funcionalidades

- Navegação com smooth scroll
- Animações de entrada ao scroll (IntersectionObserver)
- Navbar sticky com efeito glassmorphism (blur + transparência)
- Adaptação automática da navbar entre seções claras e escuras
- Destaque do link ativo na navegação conforme a seção visível
- Layout responsivo (desktop, tablet e mobile)

## Como usar

Basta abrir o `index.html` no navegador. Não precisa de servidor ou build.

```bash
# ou com um servidor local
npx serve .
```

## Licença

Alguns direitos reservados.
