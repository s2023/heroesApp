# HeroesApp
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.5.


## Development
1. Clone the project: ```git clone https://github.com/s2023/gifs-app```
2. Run ```npm install``` to install node modules.
3. In a terminal raise the Backend: ```npm run backend```. It will automatically be deployed to http://localhost:3000/users and http://localhost:3000/heroes.
4. In another terminal run the Application: ```npm start``` o ```ng serve -o```. It will automatically be deployed to http://localhost:4200/. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Deployment

### Gitpages
The following steps are required to deploy the application to Github Pages:
1. (Do this if they do not appear installed in devDependencies of the package.json) Install del-cli and copyfiles (take care always use "--save-dev"): ```npm i del-cli --save-dev``` and ```npm i copyfiles --save-dev```.
2. Run the GithubPages build script ```npm run build:github``` (this script make the build of the app and set up the app for Gitpages, copying all the content of dist folder to docs folder, the scripts are in package.json). 
This command runs: "npm run delete:docs && npm run build:href && npm run copy:dist".
This command is a series of scripts:
  "delete:docs": "del docs",
  "build:href": "ng build --base-href ./",
  "copy:dist": "copyfiles dist/heroes-app/** ./docs -f".
3. Commit and push changes to your copy of repository version of the app on Github, and configure your repository for Gitpages on Github repository: 1- Settings. 2- Pages. 3- Select "main" branch. 4- Select folder "/docs" and "Save".
4. When you commit changes to the repository having run before the githubpages build script, a version of the application will automatically be deployed in the "Actions" tab on Github repository.
