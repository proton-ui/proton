---
title: Contributing
---

## Developing Locally
After cloning Proton locally to your machine, run `yarn` to install the necessary dependencies, and then `yarn watch` to compile and watch assets for changes.

```shell
yarn
yarn watch
```

## Linking
To easily test and use the package locally, make use of Yarn's [link](https://yarnpkg.com/lang/en/docs/cli/link/) command. Package linking is a two-step process.

1. `yarn link` at the root of your Proton directory. This will create a symlink in your global Yarn directory.
2. In your project where you are making use of Proton, `yarn link @efelle/proton` will create the symbolic link from the global Yarn directory to your project.