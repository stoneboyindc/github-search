# Github Search App

### Getting Started
To start the app: 

```
npm install
npm run start
```
Any changes made to the source code will automatically refresh the app in the 
browser.

To run tests:

```
npm run test
```

### Objective
We'd like you to build a web app that does the following:

* Shows a form with four fields
  * Org Name
  * Min Stars
  * Min Watchers
  * Max Issues
* When a user types an org name in the first field, the app uses `src/util/fetchRepos` to fetch all the repos on github for that org
* The repos are then displayed in a list or grid under the form
* When a user enters a number in the Min Stars, Min Watchers, or Max Issues fields, it filters the repo list accordingly. 
* If any field in the form changes, including the org name, the list should change accordingly 

### Notes

* This skeleton project is set up in React. We use React at Conductor, so if you know React, please use it here and show us your React skills. 
* This scope of this application may or may not make you consider using a state management tool. We use Redux at Conductor. If you know Redux, please use it here and show us your Redux skills, even if you normally wouldn't use Redux for a project of this scope.   
* Unlike short challenges where you're asked to find the best solution without necessarily cleaning up or refactoring your code, in this challenge we're asking you for the whole package. We are committed to clean, well-factored, maintainable code at Conductor and we hope you are too.
* This project is set up to run tests, but there's just one placeholder for now. At Conductor we take quality and testing very seriously and we hope you do too.
* This is a small application you're writing, but we encourage you to write it as if it might be extended to be a large application later. We value extensibility at Conductor, and we hope you do too.  # github-search
