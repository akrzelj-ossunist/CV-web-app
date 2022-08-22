CV-web-app

Multi form web application for creating CVs. On frontend side of an app you are inputing personal details then sending them to the backend side of the app where you store it in mongoDB.

For this to run u will need:

node-modules for react(in react file) -npx create-react-app .

node-modules for node(express.js)(in node file) -npm i express

nodemon for server automatically update(in node file) -npm i nodemon -D

axios for POST request(in react file) -npm install axios

cors to allow react to send data to node(in node file) -npm install cors

mongoose to connect to mongoDB database -npm install mongoose

To run node server -npm run dev

To run react -npm start