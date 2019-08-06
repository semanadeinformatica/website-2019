# Semana de Informática - Website 2019

Website for the 2019 edition of [Semana de Informática](https://sinf.pt), taking place at Faculty of Engineering of the University of Porto from October 28 to 30.

Made with ❤️ by NIAEFEUP.

## Installation

### Prerequisites

- [`Node JS`](https://nodejs.org)
- [`Gatsby`](https://www.gatsbyjs.org)

## Usage

### Development

```bash
npm install # use node version 10.16.0
gatsby develop
```

If there's no new packages to install, you can simply run:

```bash
gatsby develop
```

This will create a development server with hot reloading which will listen on `http://localhost:8000`.

It also makes available GraphiQL, an in-browser IDE, to explore the site's data and schema on `http://localhost:8000/___graphql`.

## Project Details

This project uses [`Gatsby.js`](https://gatsbyjs.org/). The visual framework used is [`Reactstrap`](https://reactstrap.github.io/).

### Project Structure

```
    .
    ├── src
        ├── components :: General React Components
        ├── data :: Markdown data to be displayed on the site
        ├── images :: Image assets
        ├── pages :: Page components
        ├── templates :: Templates for pages using markdown data
        └── utils :: Utilitary components
    ├── .gitignore
    ├── .prettierrc
    ├── .travis.yml
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md
```

## License

[MIT License](https://choosealicense.com/licenses/mit/)
