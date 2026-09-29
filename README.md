# OpenVote UI

Angular frontend for the OpenVote election and voting application.

## Tech Stack

* Angular 18
* TypeScript
* Jasmine / Karma
* HTML / SCSS

## Features

* User authentication
* Election browsing
* Voting interface
* Election results
* Role-based UI for users and administrators
* Integration with the OpenVote Spring Boot REST API

## Development server

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
ng serve
```

Open `http://localhost:4200/` in your browser.

The application automatically reloads when source files are changed.

## Build

To build the project for production:

```bash
ng build
```

Build artifacts are stored in the `dist/` directory.

## Running unit tests

Run the unit tests with:

```bash
ng test
```

Tests are executed using Jasmine and Karma.

## Backend

This application is designed to communicate with the OpenVote backend built with Spring Boot.

Backend repository:

`https://github.com/Karlz-Bandz/open-vote`
