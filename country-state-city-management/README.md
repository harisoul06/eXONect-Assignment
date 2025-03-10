
React JS Assignment: Country, State, and City Management Application

Project Overview

The goal of this project is to build a Country, State, and City Management system using ReactJS and JavaScript (without using any external libraries or npm packages). The application allows users to add, edit, and delete countries, states, and cities in a hierarchical structure.

The core requirements include:

1. Country Management: Add, Edit, Delete countries.

2. State Management: Add, Edit, Delete states for a specific country.

3. City

Management: Add, Edit, Delete cities within a specific state. 4. Confirmation

Dialogs: Show confirmation alerts before performing delete and update

actions.

Functional Requirements

1. Country Management

• Add a Country:

The user should be able to add a new country using a button to trigger a prompt.

Initially, the user can add a country without specifying any

states. Edit a Country:

• The user should be able to edit an existing country name by triggering

an edit option from the UI.

A confirmation dialog should appear before updating a

country. Delete a Country:

The user should be able to delete a country.

When a country is deleted, its associated states and cities should also

be deleted.

• A confirmation alert should appear before deleting a country.

2. State Management

Add a State:

States can be added to a specific country.

• The user can choose to add the state now or add it later (via an "edit" flow).

• States should be linked to a specific country.

Edit a State:

• The user should be able to edit the name of an existing state.

A confirmation dialog should appear before updating a state.

• Delete a State:

The user should be able to delete a state.

• Deleting a state should remove all associated cities.

A confirmation dialog should appear before deleting a state.

3. City Management

• Add a City:

Cities can be added under a specific state.

• The user can add a city either during the state creation process or later via an "edit" flow.

• Delete a City:

The user should be able to delete a city under a specific state.

• A confirmation alert should appear before deleting a city.

User Interface (UI) Design

The application consists of the following Ul components:

1. Main Screen:

a. A button to add a new country.

b. A list of existing countries, each with options to:

1. Edit the country name.

ii. Delete the country.

iii. View and manage states for the country..

2. State Management Screen:

a. For each country, a section where the user can:

1. Add a new state.

ii. Edit existing states.

iii. Delete states (with confirmation).

3. City Management Screen:

a. For each state, a section where the user can:

1. Add a new city.

ii. Delete existing cities (with confirmation).

Component Breakdown

1. App.js

• Role: Main component responsible for managing the overall state of countries. states, and cities.

• Key Features:

• Manages the state of the countries.

• Handles the logic for adding, updating, and deleting countries.o

Passes down data and functions to child components for states and cities management.

2. CountryList.js

• Role: Displays a list of all countries.

Key Features:

Allows the user to add a new country.

Allows the user to edit or delete a country.

Displays a list of states for each country and provides a link to

manage those states.

3. StateList.js

• Role: Displays a list of states for a specific country.

• Key Features:

Allows the user to add, edit, and delete states.

Shows a confirmation dialog before performing delete or update

actions. Displays a list of cities for each state and provides a link to manage those cities.

4. CityList.js

• Role: Displays a list of cities for a specific state.

• Key Features:

Allows the user to add or delete cities.

Shows a confirmation dialog before performing delete actions.

Business Logic

Adding New Entities:

When adding a new entity (country, state, or city), the user will be prompted to enter a name (via a simple prompt or a form-based UI).

• The new entity is then added to the existing data structure and rendered in the Ul.

Editing Existing Entities:

• Editing involves replacing the name of an existing country, state, or city. A confirmation dialog is shown before proceeding with the update. After confirming, the name is updated in the data structure, and the Ul is re rendered.

Deleting Entities:

Deleting an entity (country, state, or city) triggers a confirmation dialog..

If confirmed, the entity is removed from the data structure, and all related states/cities (in case of deleting a country or state) are also removed.. The Ul is updated to reflect the changes.

Confirmation Alerts:

For critical actions such as updating or deleting a country, state, or city, a confirmation alert is shown:

1. Before Deleting: A simple window.confirm() is used to confirm the user's intention.

2. Before Editing: A prompt is used to ask the user for the new name, followed by a confirmation step.

Implementation Details:

Technologies Used:

• ReactJS: For building the component-based user interface.

• JavaScript (ES6): For handling state management, event handling, and data manipulation..

Development Flow:

1. Set up React App: Use Create React App to initialize the project. 2. Create Components: Develop individual components for countries, states, and cities.

2. State Management: Use React's useState hook to manage the state of the countries, states, and cities.

3. Data Flow: Pass data and functions down the component hierarchy using props. 5. User Interaction: Use prompt dialogs for adding and editing names, and confirm dialogs for deletion.



Testing and Validation:

1. Functional Testing:

a. Add, edit, and delete operations are tested to ensure proper functionality. b. Confirmation dialogs appear and work as expected.

2. UI Testing:

a. Ensure that the UI properly reflects the changes after any operation (add, edit, delete).

b. Verify that the hierarchical structure (Country State City) is correctly displayed and managed.

Conclusion:

This application allows users to manage a hierarchical structure of countries, states, and cities, with the ability to add, edit, and delete each level. The flow is simple and

intuitive, with proper confirmation dialogs to ensure that users do not accidentally perform destructive actions.

By following this structure, you can ensure the application is scalable.

maintainable, and adheres to the specified requirements.






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
