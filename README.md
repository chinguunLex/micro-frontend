Before running each app you will need to run the following in each apps root directory.

```
npm install
```

# Host

#### localhost:3000

The host app is **not** using create-react-app and instead has taken the approach of manually setting up
the react project and configuring the webpack configs.

NOTE: This host does not use a production grade webpack config setup

# Host Craco

Use a Craco configuraton with CRA so it is more tailored for production and is better suited for testing purposes.

To run the app:

- npm start

# Remote

#### localhost:3001

The remote has used create-react-app and in order to setup module federation we use [Craco](https://github.com/gsoft-inc/craco)
to override the webpack config which is located in node_modules/react-scripts/config/webpack.config.js

**To run the app and test your changes locally in the remote:**

- npm run local

**To test your changes in the host:**

- npm run dev
