# Getting Started with Conversional Mini Project App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm i`

Installs all the required dependencies from package.json.

This command will create node_module/ directory and package-lock.json file.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## More About this Project

You can understand more abot the this project in below sections:

### Versions

Node: `v16.13.0`
npm: `8.1.0`

### Toggling between JSON files

In [App.js Line 11](https://github.com/shivangsarat/conversional/blob/main/src/App.js#L11) you can update the name of JSON file to use your new JSON Configuration.

### Additional Requirements

For Additional requirements Section in the problem statement, if key `url` is not passed in props of `LinkElement` it'll open the modal.

For deciding which links and buttons open modal, an extra props could be passed as `openModal` with `boolean` value. If the button/link consists of the prop, it'll triger modal [currently updated in data2.json](https://github.com/shivangsarat/conversional/blob/main/public/data2.json#L50) in case of a button. Similar could be done in case of LinkComponent or similarly other keys could be added for different functionalities/behaviours.

### File Structure

- conversional
    - public
        - data.json
        - data2.json
    - src
        - App.js
        - components
            - BoxComponent
            - ButtonComponent
            - H1Component
            - H2Component
            - LinkComponent
            - ListComponent
            - ModalComponent
            - ParagraphComponent
            - RenderComponent

- [BoxComponent](https://github.com/shivangsarat/conversional/blob/main/src/components/BoxComponent.js)
- [ButtonComponent](https://github.com/shivangsarat/conversional/blob/main/src/components/ButtonComponent.js)
- [H1Component](https://github.com/shivangsarat/conversional/blob/main/src/components/H1Component.js)
- [H2Component](https://github.com/shivangsarat/conversional/blob/main/src/components/H2Component.js)
- [LinkComponent](https://github.com/shivangsarat/conversional/blob/main/src/components/LinkComponent.js)
- [ListComponent](https://github.com/shivangsarat/conversional/blob/main/src/components/ListComponent.js)
- [ModalComponent](https://github.com/shivangsarat/conversional/blob/main/src/components/ModalComponent.js)
- [ParagraphComponent](https://github.com/shivangsarat/conversional/blob/main/src/components/ParagraphComponent.js)

- [RenderComponent](https://github.com/shivangsarat/conversional/blob/main/src/components/RenderComponent.js)

RenderComponent is in turn called by [src/App.js in line 23](https://github.com/shivangsarat/conversional/blob/main/src/App.js#L23) with the json data of components.


#### JSON files

JSON files are located in [public/](https://github.com/shivangsarat/conversional/tree/main/public) directory.

Individual Components and its renderComponent are inside [src/components/](https://github.com/shivangsarat/conversional/tree/main/src/components) directory.

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
