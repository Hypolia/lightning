<p align="center">
  <a href="https://www.hypolia.fr">
    <img src="https://media.discordapp.net/attachments/936741758635769866/937762244014522458/logo_4005x2156.png?width=2644&height=1424" width="318px" alt="Hypolia logo" />
  </a>
</p>
<h3 align="center">Synergistic and powerful applications!</h3>
<p align="center">Build your web applications quickly and easily ⚡</p>

<p align="center">
  <a href="https://github.com/hypolia/lightning/blob/master/LICENSE">
    <img alt="GNUv3 License" src="https://img.shields.io/badge/License-GNU%20v3-yellow.svg">
  </a>

</p>

<br />

<p align="center">
    <img src="https://miro.medium.com/v2/resize:fit:1400/1*RjjHWXEUgGHcwgtuXmv4zw.png"  alt="Banner" />
</p>

**Leadcode Lightning** is an open-source project that makes developing web applications quick and easy. Lightning is written in [Typescript](https://www.typescriptlang.org/) and uses [NX](https://nx.dev/) to manage our different applications and libraries.

## Getting Started

### Install and launch app's
```bash
# Install dependecies
$ yarn install
$ yarn start obsidian # http://localhost:4200
```

### Use NX
```bash
# Generate Librairie
$ nx g @nx/react:lib <folder>/<name>

# Generate App
$ nx g @nx/react:app <name>
```

## FAQ
### Why do we use NX?

- NX works like a strong framework and it's very helpful for React app.
- It allows us to make mono-repo and we can divide our application into several entities/libraries that can reuse.
- Offers helpers to facilitate generating components, libraries, applications, and tools to check the health of our applications (circular dependencies).
- Using NX cloud, cache to deploy the application, run tests and build only what has been modified.
- Provides Framework to facilitate unit tests with [Jest](https://jestjs.io/) and e2e tests with [Cypress](https://www.cypress.io/).

### How is the project structured?

Our project is divided into several libraries, we are going to have 3 major categories of libraries:

- BlockEditor: All components allowing the use and implementation of our advanced editor
- Board: All the components and programs that allow us to manage our data
- Shared: several elements of sharing between all components, UI components for enums, helpers, layout.

We have separated the logical components “feature” and the UI components “UI” for each of the libraries. Requests and data are always called in features and flow to UI components. The goal is really to separate our features as much as possible to avoid circular dependencies and facilitate understanding of the project.

It’s an NX-proven approach, feel free to read the book “effective react with NX”, very interesting and well detailed.