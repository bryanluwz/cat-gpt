# gh-pages-common-template

Common template for github pages

## Install github pages

npm install gh-pages --save-dev

## Copy

`git submodule add --name public https://github.com/bryanluwz/gh-pages-common-public.git ./public`

`git submodule add --name src --force https://github.com/bryanluwz/gh-pages-common-src ./src/components`

_`--force` if error_

## Open your package.json file and add the following fields at the top level

> "homepage": "https://\<username>.github.io/\<repository-name>",
> "scripts": {
> "predeploy": "npm run build",
> "deploy": "gh-pages -d build"
> }

## npm

### To install packages

`npm i`

### To start

`npm start`

### To deploy to GitHub Pages

`npm run deploy`

or

`npm run deploy -- -m "commit message"`

## stonks
