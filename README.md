# Host 
#### localhost:3000
  The host app is __not__ using create-react-app and instead had taking the approach of manually setting up
  the react project and configuring the webpack configs.

# Remote 
#### localhost:3001
The remote has used create-react-app and in order to setup module federation we use [Craco](https://github.com/gsoft-inc/craco)
to override the webpack config which is located in node_modules/react-scripts/config/webpack.config.js

# Run Apps
1. cd remote
2 npm i
3. npm run start
4. cd ..
5. cd host
6. npm i
7. npm run start



