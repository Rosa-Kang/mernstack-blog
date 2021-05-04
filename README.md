# Flymango
#### Flymango is a web application where users can share their good memories from their trips and search for the next destination.
---

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li><a href="#reason">Purpose of the Project</a></li>
    <li><a href="#use-tech">Use tech</a></li>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li><a href="#structure">Architecture & Functionality</a></li>
    <li><a href="#new">Lessons</a></li>
    <li><a href="#reference">Reference</a></li>
  </ol>
</details>

---

<div id="reason"/>

## Purpose of the project

- To build a Full Stack Web Application using MongoDB - Express - React - Node.
- Authentication & Login Practice Practice
- Creating Realtime Web App where users can Create, Read, Update, Delete & Upload files

<!--USE TECH-->

## Used tech

<span id="use-tech">
  <img src="https://img.shields.io/badge/Javascript-orange?style=flat-square&logo=JavaScript&logoColor=white"/>
  <img src="https://img.shields.io/badge/css-blue?style=flat-square&logo=CSS3&logoColor=white"/>
  <img src="https://img.shields.io/badge/HTML-red?style=flat-square&logo=HTML5&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-blue?style=flat-square&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/ReactRouter-32b7f0?&logoColor=white"/>
  <img src="https://img.shields.io/badge/ReactHooks-e1a9f5?&logoColor=white"/>
  <img src="https://img.shields.io/badge/mongoDB-yellow?style=flat-square&logo=firebase&logoColor=white"/>

</span>

### Dependency

##Server side##
npm i body-parser : to POST request
npm i cors : Cross Origin Resource Sharing : a middleware to Connect/ Express
npm i express : a framework for creating the Routing of our application
npm i mongoose : to create models of our POST
npm i nodemon : auto reset the server
npm i bcryptjs jsonwebtoken

##Client side##
npm i @material-ui/core : ui kit used in this project
npm i axios : for making api request
npm i moment : library working with time and date
npm i react-file-base
npm i redux redux-thunk : asynchronous actions with redux
npm i jwt-decode react-google-login

---

<!-- ABOUT THE PROJECT -->

## About The Project

[Demo link](https://flymango.netlify.app/)

### Landing Page

---

<div>
<img width="45%" alt="img" src="https://user-images.githubusercontent.com/49248131/116836328-efa72300-ab7a-11eb-95aa-8dcbe4cd5877.png">
<img width="46%" alt="img" src="https://user-images.githubusercontent.com/49248131/116836333-f46bd700-ab7a-11eb-9157-fd6579ade191.png">
</div>

<div>
<img width="45%" alt="img" src="https://user-images.githubusercontent.com/49248131/116952602-e5029180-ac3f-11eb-83a4-dcf1ae820e48.png">
<img width="46%" alt="img" src="https://user-images.githubusercontent.com/49248131/116836333-f46bd700-ab7a-11eb-9157-fd6579ade191.png">
</div>
### Functionality Pages

---


|Client Side|

1. Action Types
   This App has various Actions such as Create, Update, Delete, Fetch, Like, Authentication and Logout
   These actions are stored in the actionsTypes.js file in constants.

```Javascript
export const CREATE = 'CREATE';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';
export const FETCH_ALL = 'FETCH_ALL';
.
.
```

2. Actions (Auth / Post)
   All the actions including Like, Update, Delete, Create, Auth and Logout has their functions in actions folder
   ex) Like Post

```javascript
export const likePost = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem("profile"));

  try {
    const { data } = await api.likePost(id, user?.token);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
```

3. Reducers
   When actions are created, reducers receive those actions to dispatch the data according to the actions.

```javascript
import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case LIKE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};
```

|Server Side|

1. Models
   In models, the data Schema for auth, and post are created like below

```Javascript
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
});

export default mongoose.model("User", userSchema);

```

2. Controller
   Using the schema, the actions like signin, signup, etc are controlled.

```Javascript
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModal from "../models/user.js";

const secret = 'test';

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });
    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });
    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });
    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
```

3. Routes
   End point of the routes are stored here.

4. Middleware
   Authorization by authentication are first controlled from Middleware and then it let the data released accordingly.

---

### Structure

```
.
│  
└── Client
│    └── src
│    │    ├── actions
│    │    ├── api
│    │    ├── components
│    │    ├── constants
│    │    └── reducers
│    │
│    ├── App.js
│    └── index.js
│ 
└── Server
     ├── controller
     ├── middleware
     ├── models
     ├── routes
     └── index.js

```

---

### Features

<img width="900" style="margin:10; padding:0;" alt="shot" src="https://user-images.githubusercontent.com/49248131/116954678-788a9100-ac45-11eb-821e-24bd620ada35.png">


1. LoginForm receives and execute the event Handling Function based user information from Landing Page.
2. Once the Use loggen-in, the chatting room is visible and also the user can create a new chatting room to invite people

---

<div id="new"/>

## Lessons

- MongoDB for the database
- Node & Express for the server-side
- React for the client-side
