const express = require('express')
const router = express.Router()
const usermodel = require('../model/users');

router.get('/', function(req, res, next) {

    if(req.session.loggedIn){
      res.redirect('/home');
    }
    else{
      res.render("register");
    }
  });

  router.post('/', (req, res, next)=>{
    const name = req.body.name;
    const num = req.body.number;
    const email = req.body.email;
    const password = req.body.password;
  
    let emailExist = usermodel.emailAlreadyExist(email);
    if(!emailExist){
      usermodel.createAccount(name, num, email, password);
      res.render("register", { creationSuccess: true });
    }
    else{
      res.render("register", {emailError: true});
    }
  });

module.exports = router