# portfolio-frontend
Portfólio pessoal de projetos.
Design totalmente inspirado do insômnia (programa utilizado para fazer requisições HTTP)

Tabela de conteúdos
=
- [portfolio-frontend](#portfolio-frontend)
- [Tabela de conteúdos](#tabela-de-conteúdos)
  - [Instalação](#instalação)
  - [Como usar](#como-usar)
  - [Status](#status)
    - [Features](#features)
  - [Licença](#licença)
  - [Tecnologias utilizadas](#tecnologias-utilizadas)
    - [Bibliotecas populares utilizadas](#bibliotecas-populares-utilizadas)


## Instalação

Você precisa do [Git](https://git-scm.com) e do [Node.JS](https://nodejs.org/) instalados na sua máquina (recomendo Node >=18.0.0).

```bash
# Clone este repositório
$ git clone <https://github.com/JoaoSCoelho/portfolio-frontend>

# Acesse a pasta do projeto no terminal/cmd
$ cd portfolio-frontend

# Instale as dependências
$ npm install
```

## Como usar

<p style="background-color: #ff450030; padding: 1em; font-style: italic; font-weight: bold;">❗❕ Antes de iniciar o site, você precisa iniciar o servidor, para isso clone o repositório <a style="font-style: initial;" href="https://github.com/JoaoSCoelho/portfolio-backend"><code>&lt;https://github.com/JoaoSCoelho/portfolio-backend&gt;</code></a> e siga os passos para inicialização.</p>

Primeiramente, crie um arquivo chamado `.env.local` na raíz do projeto. (você pode renomear o arquivo `.env.local.example` para `.env.local`)

```env
NEXT_PUBLIC_BASE_API_URL=AQUI VOCÊ DEVE COLOCAR A URL DA API QUE ESTÁ RODANDO, COMO POR EXEMPLO: http://localhost:3333
```
```bash
# Execute a aplicação em modo de desenvolvimento
$ npm run dev
# ou em modo de produção
$ npm run build
$ npm run start

# O site iniciará na porta:3000 - acesse <http://localhost:3000>
```
o site irá rodar por padrão em `localhost:3000`, para visualizar abra [`http://localhost:3000`](http://localhost:3000) no seu navegador.

![Home](resources/usage-gif.gif)

## Status
> **🚧 Em construção... 🚧**

### Features

- [x] Busca de projetos
  - [x] Resposta em JSON
  - [ ] Resposta em HTML

## Licença

[MIT](https://choosealicense.com/licenses/mit/)

## Tecnologias utilizadas
<div style="display: inline-block">
  <img src="resources/react-icon.svg.png" style="width: 50px; height: 50px; object-fit: contain; vertical-align: middle;" title="React" alt="React logo">
  <img src="resources/nextjs-icon.svg" style="width: 50px; background-color: white; border-radius: 9999px; vertical-align: middle;" title="Next.JS" alt="Next.JS logo">
  <img src="resources/typescript-logo.svg.png" style="width: 50px; vertical-align: middle;" title="TypeScript" alt="TypeScript logo">
</div>


React | Next.JS | TypeScript

### Bibliotecas populares utilizadas
<div style="display: inline-block">
  <img src="resources/axios-logo.png" style="width: 50px; height: 50px; object-fit: contain; vertical-align: middle;" title="Axios" alt="Axios logo">
  <img src="resources/react-icons-logo.svg" style="width: 50px; height: 50px; object-fit: contain; vertical-align: middle;" title="React Icons" alt="React Icons logo">
</div>

Axios | React Icons

