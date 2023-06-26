My Public Key Marvel API ⇒ 6480392eb96f14ac8d8af758e359b992

# 

## Developing application

Iniciei a aplicação, utilizando ViteJS com TypeScript. O Vite é uma ferramenta de build para projetos React o qual facilita e agiliza o desenvolvimento de aplicações Web, também deixa mais leve nossa aplicação, instalando menos pacotes e otimizando outros pacotes.

Configurei na aplicação o ESLint em conjunto do Prettier, utilizando o pacote de configurações padrão da Rocketseat. O qual padroniza todo o código da aplicação para que a aplicação mantenha sempre a mesma identação. (Poderia também criar uma config própria, mas gosto de trabalhar com o pacote da Rocketseat e agiliza essa etapa de configuração).

As tecnologias pedidas no desafio foram: React, Styled Components, TypeScript. Logo não utilizarei nenhum framework React e utilizarei CSS-in-JS ao invés de um CSS runtime ou TailwindCSS.

Iniciei instalando **Styled Components, Axios e Router DOM**. Bibliotecas essenciais para facilitar o desenvolvimento de aplicações Web, permitindo criar componentes estilizados, fazer chamadas HTTP retornando Promises e criar rotas de páginas em aplicações React.

Adicionei a fonte `Roboto`ao projeto e criei um `<GlobalStyle />` com um setup padrão que gosto de utilizar em projetos, com definição de cores, fontes, tamanhos da fonte e focus-shadow.

Criei uma instância do Axios utilizando como `baseUrl` a url adicionada ao `env`, também foi necessário definir a `api key`, chave pública que pegamos no próprio site da Marvel Development.


## To run Application

Para rodar a aplicação:

- Clonar o projeto e instalar dependências.
- Pegar a (url), rodar `git clone (url)`
- Rodar no terminal `yarn` para instalar as dependências.
- Adicionar um arquivo env com 2 variáveis
    
    VITE_BASE_API_URL = https://gateway.marvel.com/v1/public
    
    VITE_PUBLIC_KEY_API = (sua chave pública gerada no site da Marvel para desenvolvedores)
    
- Rodar a aplicação usando `yarn dev` no terminal e verificar a aplicação na porta 3000.

Também disponibilizei a aplicação rodando hospedada na Vercel, é só acessar: [`https://challenge-marvel-thetunnes.vercel.app`](https://challenge-marvel-thetunnes.vercel.app/)
