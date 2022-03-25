# CRUD-Talkers
É um projeto de CRUD, o que significa que o usuário deverá poder Criar, Ler, Atualizar e Deletar dados usando requisições HTTP.

## Table of contents

- [Visão geral](#visão-geral)
  - [O desafio](#o-desafio)
  - [Imagens](#imagens)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Construído com](#construído-com)
  - [O que aprendi](#o-que-aprendi)
  - [Desenvolvimento continuo](#desenvolvimento-continuo)
  - [Recursos úteis](#recursos-úteis)
- [Autor](#autor)


## Visão geral

### O desafio

Esse projeto é uma refatoração do Talker-Manager, um projeto Trybe, ele foi pensado para validar o aprendizado das Promises em JavaScript, o conhecimento básico do Express e como ler e escrever arquivos usando o módulo nativo _File System_ do Node.js.

Mas no CRUD-Talkers fui além, mudei a linguagem para TypeScript e utilizei POO _(Programação Orientada a Objetos)_, ao invés da programação procedural.

__Os usuários devem ser capaz de?__
- Se registrar e logar
- Criar palestrantes
- Listar todos os palestrantes
- Buscar o palestrante pelo id
- Buscar o palestrante pelo nome
- Atualizar os palestrantes
- Deletar os palestrantes


### Imagens

<small>Avaliação do Talker-Manager</small>
![](./talker_manager_evaluator.png)

### Links

- [English README](../README.md) EN


## Meu processo

### Construído com

- Node.js
- Express.js
- TypeScript
- Mocha, Chai and Sinon

### O que aprendi

No projeto original, Talker-Manager, aprendi a construir uma API simples usando Express, os principais _"verbos"_ HTTP _(GET, POST, PUT, DELETE)_, ler e escrever arquivos usando o módulo nativo File System do Node.js e solidifiquei meus conhecimentos sobre código JavaScript assíncrono.

Já no CRUD-Talker comecei a aprender sobre arquitetura MSC, os princípios do SOLID e como construir as Models, Services e Controller usando classes.

### Desenvolvimento continuo

A primeira funcionalidade que pretendo implementar é uma cobertura de testes de 80%, usando as bibliotecas, Mocha, Chai e Sinon, planejo fazer isso até o meio de Abril (15/04/2022).

O segundo passo é a refatoração do useCase e validações, quero remover a validação de dados e o tratamento de erros da camada useCase e realocá-los como middleware. Planejo fazer isso antes de Maior (05/2022).

### Recursos úteis

- [Artigos pessoais sobre Express](https://dev.to/gabrielhsilvestre/series/17270)
- [Express.js](http://expressjs.com/en/4x/api.html)
- [Módulo File System Node.js](https://nodejs.org/dist/latest-v16.x/docs/api/fs.html)

## Autor

- LinkedIn - [Gabriel Silvestre](https://www.linkedin.com/in/gabrielh-silvestre/)
- DevTo - [Gabriel_Silvestre](https://dev.to/gabrielhsilvestre)
