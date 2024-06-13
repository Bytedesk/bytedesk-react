# Development

```bash
# install dependencies
$ yarn install

# develop library by docs demo
$ yarn start

# build library source code
$ yarn run build

# build library source code in watch mode
$ yarn run build:watch

# build docs
$ yarn run docs:build

# Locally preview the production build.
$ yarn run docs:preview

# check your project for potential problems
$ yarn run doctor
```

## Publish to npmjs.org

```bash
npm config get registry
# 
npm config set registry https://registry.npmjs.org/
#
npm login
npm version patch
yarn run build
# 
npm publish
```
