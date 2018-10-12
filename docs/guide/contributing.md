---
title: Contributing
---

## Local Development
After cloning Proton locally to your machine, run `yarn` to install the necessary dependencies, and then `yarn watch` to compile and watch assets for changes.

```shell
yarn
yarn watch
```

### Linking
To easily test and use the package locally, make use of Yarn's [link](https://yarnpkg.com/lang/en/docs/cli/link/) command. Package linking is a two-step process.

1. `yarn link` at the root of your Proton directory. This will create a symlink in your global Yarn directory.
2. In your project where you are making use of Proton, `yarn link @efelle/proton` will create the symbolic link from the global Yarn directory to your project.

## Reporting Issues
_Coming Soon_

## Documentation
Documentation is bundled along side the source code within the `docs/` directory. Pages are written in markdown and rendered through the use of [VuePress](https://vuepress.vuejs.org/). You can start writing and contributing to the documentation locally by running the `yarn docs:dev` command. This will spin up a server instance and start watching and compiling any newly added or modified markdown file.

When you're happy with your work and are ready to send a pull request, close your server and compile the documentation for production by running `yarn docs:build`. This will generate the static files used in production.