# mernstack-blog

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

- To build a Full Stack Web Application ReactJS, mongoDB, express, Node.js
- Authentication & Login Practice Practice
- Creating Realtime Chatting App where users can Create, Read, Update, Delete & Upload files

<!--USE TECH-->

## Used tech

<span id="use-tech">
  <img src="https://img.shields.io/badge/Javascript-orange?style=flat-square&logo=JavaScript&logoColor=white"/>
  <img src="https://img.shields.io/badge/css-blue?style=flat-square&logo=CSS3&logoColor=white"/>
  <img src="https://img.shields.io/badge/HTML-red?style=flat-square&logo=HTML5&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-blue?style=flat-square&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/ReactRouter-32b7f0?&logoColor=white"/>
  <img src="https://img.shields.io/badge/ReactHooks-e1a9f5?&logoColor=white"/>
  <img src="https://img.shields.io/badge/firebase-yellow?style=flat-square&logo=firebase&logoColor=white"/>
  <img src="https://img.shields.io/badge/Cloudinary-orange?style=flat-square&logoColor=white"/>

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

[Demo link]()

### Landing Page

---

<div>
<img width="45%" alt="img" src="https://user-images.githubusercontent.com/49248131/116836328-efa72300-ab7a-11eb-95aa-8dcbe4cd5877.png">
<img width="45%" alt="img" src="https://user-images.githubusercontent.com/49248131/116836331-f2097d00-ab7a-11eb-8a63-6f6efe942572.png">
</div>

<div>
<img width="46%" alt="img" src="https://user-images.githubusercontent.com/49248131/116836333-f46bd700-ab7a-11eb-9157-fd6579ade191.png">
<img width="45%" alt="gif" src="https://user-images.githubusercontent.com/59603575/105945799-4e0ac400-60a9-11eb-987c-ef00cf142905.gif">
</div>

### Functionality Pages

---

<div>
<img width="45%" alt="스크린샷 2021-01-16 오후 4 09 47" src="https://user-images.githubusercontent.com/59603575/105945952-9f1ab800-60a9-11eb-80e2-4324282ea38b.png">
<img width="46%" alt="gif" src="https://user-images.githubusercontent.com/59603575/105945809-5400a500-60a9-11eb-96f3-7c2363c35aad.gif">
</div>

---

## Architecture

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

### Structure

<img width="1680" alt="스크린샷 2021-01-16 오후 4 10 08" src="https://user-images.githubusercontent.com/59603575/105948977-49e1a500-60af-11eb-8249-133fc1b50e0e.png">

---

### Features

<img width="1680" style="margin:0; padding:0;" alt="스크린샷 2021-01-16 오후 4 10 08" src="https://user-images.githubusercontent.com/59603575/105949828-b4dfab80-60b0-11eb-971d-d4644c5701db.png">

1. LoginForm receives and execute the event Handling Function based user information from Landing Page.
2. Once the Use loggen-in, the chatting room is visible and also the user can create a new chatting room to invite people

---

<div id="new"/>

## Lessons

-
-
-

---
