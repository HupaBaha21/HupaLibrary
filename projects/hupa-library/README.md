# HupaLibrary

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## Code scaffolding

Run `ng generate component component-name --project HupaLibrary` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project HupaLibrary`.
> Note: Don't forget to add `--project HupaLibrary` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build HupaLibrary` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build HupaLibrary`, go to the dist folder `cd dist/hupa-library` and run `npm publish`.

## Running unit tests

Run `ng test HupaLibrary` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


To build and edit library while running application:
1. RUN: "ng build HupaLibrary --watch"

To add a component:
1. RUN: "ng generate component components/{{COMPONENT}} --project HupaLibrary".
2. ADD "{{COMPONENT}}Component" to the "hupa-library.module.ts" file in the "exports" part/list.
3. ADD LINE "export * from './lib/components/{{COMPONENT}}/{{COMPONENT}}.component';" to "public-api.ts".
Yay!
