const express = require('express');
const router = express.Router();
const usermodel = require('../model/users');

router.get('/', function(req, res, next) {
    if(req.session.loggedIn){
      res.redirect('/home');
    }
    else{
      res.render("index", { title:'Login'});
    }
  });

router.post('/', (req, res, next) =>{
    let email = req.body.email;
    let password = req.body.password;
    
    let loginResult = usermodel.checkloginDetails(email, password);
    if (loginResult) {
        res.redirect("home");
    }
    else {
        res.render('', {error:true});
    }
    });
    

module.exports = router

