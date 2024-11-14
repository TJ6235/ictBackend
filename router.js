// import express

const express = require('express')

// import userController

const userController = require('./controllers/loginController')

// import fileController

const fileController = require('./controllers/fileController')

// import jwt

const jwt = require('./middleWare/jwtMiddleware')

// import multer 

const multer = require('./middleWare/multerMiddleware')

// create object for Router Class

const router = new express.Router


// login request

router.post('/register',userController.loginController)

// add file

router.post('/add-file',jwt,multer.single("fileImg"),fileController.addfileController)


// get all project

router.get('/get-files',fileController.getAllProjectController)

// delete a project 

router.delete('/delete-file/:id', fileController.deleteProjectController);

// PUT route to update a project by ID

router.put('/edit-file/:id', fileController.editProjectController);


module.exports=router