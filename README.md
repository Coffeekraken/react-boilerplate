![Coffeekraken HTML Boilerplate](/.resources/doc-header.jpg)

# Coffeekraken React Boilerplate <img src="/.resources/coffeekraken-logo.jpg" height="25px" />

<p>
	<!-- <a href="https://travis-ci.org/coffeekraken/react-boilerplate">
		<img src="https://img.shields.io/travis/coffeekraken/react-boilerplate.svg?style=flat-square" />
	</a> -->
	<!-- <a href="https://www.npmjs.com/package/{package-name}">
		<img src="https://img.shields.io/npm/v/{package-name}.svg?style=flat-square" />
	</a> -->
	<!-- <a href="https://github.com/coffeekraken/react-boilerplate/blob/master/LICENSE.txt">
		<img src="https://img.shields.io/npm/l/{package-name}.svg?style=flat-square" />
	</a> -->
	<!-- <a href="https://github.com/coffeekraken/react-boilerplate">
		<img src="https://img.shields.io/npm/dt/{package-name}.svg?style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/react-boilerplate">
		<img src="https://img.shields.io/github/forks/coffeekraken/react-boilerplate.svg?style=social&label=Fork&style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/react-boilerplate">
		<img src="https://img.shields.io/github/stars/coffeekraken/react-boilerplate.svg?style=social&label=Star&style=flat-square" />
	</a>-->
  <a href="https://github.com/coffeekraken/react-boilerplate">
    <img src="https://img.shields.io/david/coffeekraken/react-boilerplate.svg?style=flat-square" />
  </a>
  <a href="https://github.com/coffeekraken/react-boilerplate">
    <img src="https://img.shields.io/david/dev/coffeekraken/react-boilerplate.svg?style=flat-square" />
  </a>
  <a href="https://github.com/Coffeekraken/react-boilerplate/blob/master/LICENSE.txt">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square" />
  </a>
	<a href="https://twitter.com/coffeekrakenio">
		<img src="https://img.shields.io/twitter/url/http/coffeekrakenio.svg?style=social&style=flat-square" />
	</a>
	<a href="https://coffeekraken.io">
		<img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=flat-square&label=https://coffeekraken.io&colorB=f2bc2b&style=flat-square" />
	</a>
</p>

React boilerplate integrated with react-scripts, redux, redux-thunk, reselect, sugar, gridle and more...

<img src="/.resources/react.png" title="React" height="40px" /><img src="/.resources/redux.png" title="Redux" height="40px" /><img src="/.resources/thunk.png" title="Redux Thunk" height="40px" /><img src="/.resources/reselect.png" title="Redux Reselect" height="40px" /><img src="/.resources/styled-components.png" title="Styled components" height="40px" /><img src="/.resources/docker.png" title="Docker" height="40px" /><img src="/.resources/eslint.png" title="ESLint" height="40px" /><img src="/.resources/jest.png" title="Jest" height="40px" /><img src="/.resources/npm.png" title="NPM" height="40px" />
<img src="/.resources/prettier.png" title="Prettier" height="40px" /><img src="/.resources/sass.png" title="Sass" height="40px" /><img src="/.resources/stylelint.png" title="Stylelint" height="40px" /><img src="/.resources/travisci.png" title="Travis CI" height="40px" /><img src="/.resources/webpack.png" title="Webpack" height="40px" />

## Features

- Complete build process using [react-scripts](https://github.com/facebook/create-react-app)
- [Redux](https://redux.js.org/) built-in
- [Redux thunk](https://github.com/reduxjs/redux-thunk) built-in
- [Reselect](https://github.com/reduxjs/reselect) built-in
- [Styled component](https://www.styled-components.com/) built-in
- Immutable state through [Immer](https://github.com/mweststrate/immer)
- Sass support through [node-sass](https://github.com/sass/node-sass)
- CSS structure based on [atomic design](http://bradfrost.com/blog/post/atomic-web-design/) principles
- Code linting through [ESLint](https://eslint.org/) and [Stylelint](https://stylelint.io/)
- [Jest](https://jestjs.io/) tests stack
- Automatically reject commits if tests and linting fail through [pre-commit](https://www.npmjs.com/package/pre-commit)
- [Browsersync](https://browsersync.io/) built-in
- [Dotenv](https://www.npmjs.com/package/dotenv) built-in
- Docker container configuration built-in
- [CSSUA](http://cssuseragent.org/) built-in
- [Babel polyfill](https://babeljs.io/docs/en/babel-polyfill) built-in
- [Coffeekraken scripts stack](https://github.com/coffeekraken/scripts-stack) built-in
- [Coffeekraken sugar](https://github.com/coffeekraken/sugar) built-in
- [Coffeekraken gridle](https://github.com/coffeekraken/gridle) built-in

## Table of content

1. **[Go to website](https://coffeekraken.io)**
2. [Install](#readme-install)
3. [Get Started](#readme-get-started)
4. [Scripts](#readme-scripts)
5. [Browsers support](#readme-browsers-support)
6. [Code formatting](#readme-code-formatting)
7. [Code linting](#readme-code-linting)
8. [Contribute](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md)
9. [Who are Coffeekraken?](https://github.com/Coffeekraken/coffeekraken/blob/master/who-are-we.md)
10. [Licence](#readme-license)

<a name="readme-install"></a>

## Install

```sh
npm install
```

> If needed, install [npm](https://www.npmjs.com/get-npm).

<a name="readme-get-started"></a>

## Get Started

Run this command to start working as quickly as possible

```sh
npm start
```

<a name="readme-scripts"></a>

## Scripts

- `npm run scss` : Build the scss files in the src folder
- `npm start` : Build/monitor src files using coffeekraken-scripts-stack, start the http server as well as the browsersync one
- `npm start-react` : Start the react-scripts process that will build and serve the dev application
- `npm run build` : Build the react prod application using the react-scripts CLI
- `npm run build:server` : Start the prod server to serve the build folder
- `npm run browsersync` : Start the browsersync service on port `8080`
- `npm run test` : Run the tests
- `npm run pretty-quick` : Run prettier on the entire project
- `npm run pretty-quick-commit` : Run prettier on staged filed
- `npm run lint` : Run the linters
- `npm run lint:js` : Run the Js linter
- `npm run lint:css` : Run the css linter
- `npm run extract-messages` : Extract the messages from all the `messages.js` files up to the translations folder

<a name="readme-browsers-support"></a>
## Browsers support

| <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" /></br>IE / Edge | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" /></br>Firefox | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" /></br>Chrome | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" /></br>Safari |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE11+                                                                                                                                                              | last 2 versions                                                                                                                                                   | last 2 versions                                                                                                                                                | last 2 versions                                                                                                                                                |

> As browsers are automatically updated, we will keep as reference the last two versions of each but this component can work on older ones as well.

<a id="readme-code-formatting"></a>

## Code formatting

Your code will automatically be formatted using [Prettier](https://prettier.io/) when you commmit your files.

<a id="readme-code-linting"></a>

## Code linting

This boilerplate uses some code linting rules. Here's the list:

1. [ESLint](https://eslint.org/) with [airbnb](https://www.npmjs.com/package/eslint-config-airbnb), [react-app](https://www.npmjs.com/package/eslint-config-react-app), [prettier](https://github.com/prettier/eslint-config-prettier) and `prettier/react` for javascript files
2. [Stylelint](https://github.com/stylelint/stylelint) with [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) for `scss` files

> Your commits will not been accepted if the code style is not respected!

<a name="readme-license"></a>

## License

The code is available under the [MIT license](LICENSE.txt).
