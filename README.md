# AcnNgStarter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.3. It provides additional capabilities and recommendations for designing the modules within the application.

## Enhancements

### Theme and Core Module
Defined and scaffolded the theme and core modules. These modules are loaded on initial scaffold of the application and can be used to host modules, themes and components that are required on application load.

### HMR (Hot Module Reloading)
HMR is a feature to inject updated modules into the active runtime. During developement (serving the application locally), it hot swaps modules that are changed instead of re-building the entire application. 

HMR Documentation: https://webpack.github.io/docs/hot-module-replacement.html

### TS Config
Changed to use ES6 module definition and loading. Also added path shortcuts/refefences: @core/*. For example these path references can be use inside the application: `import { Component } from '@core/....component_path'`

### TS Linting Rules
Linting rules allow to manaintan developement standards. Added recommenden linting rules for maintaining best developement practices.

### Dependencies and Runtime tasks
* Linting task: `npm run lint` to run linting rules
* Code Coverage: `npm run coverage` to run code unit test coverage reports
* Builds with AOT (Ahead of Time Compilation). Documentation: (https://angular.io/docs/ts/latest/cookbook/aot-compiler.html)
* Imported Bootstrap 4.0.0-alpha

### SASS insteand of CSS
Bootstrap 4.0.0-alpha uses SASS and to maintain consistency and better developement capabilities for styles the starter includes SASS loaders and the basic components use SASS instead of CSS. We can still import and use CSS files while developement if required.

### Yarn 
Allows use to lock and manage external dependencies in package.json. This prevents differences in node_module dependencies across different developer systems and during builds. 

Yarn Lock Documentation: (https://yarnpkg.com/lang/en/docs/yarn-lock/)

## Developement

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
