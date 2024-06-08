const fs = require('fs');
const userInfo = JSON.parse(fs.readFileSync('./userdb.json', 'utf-8'));
const { compare } = require('bcrypt');

exports.getUsers=()=> {
    return userInfo;
}

exports.checkloginDetails = (email, password)=> {
    var check = false;
    for(var i=0; i < userInfo.length; i++) {
        if (userInfo[i].email == email && userInfo[i].password == password) {
            check = true;
        }
    }
    return check;
}

exports.getID = (email, userPassword)=>{
    for (var i = 0; i < userInfo.length; i++){
        if(userInfo[i].email == email && userInfo[i].password == userPassword){
            return i;
        }
    }
    return -1;
}

exports.getEmail = (userID) =>{
    return userInfo[userID].email;
}

exports.emailAlreadyExist = (email) =>{
    for (var i = 0; i < userInfo.length; i++){
        console.log(email)
        console.log(userInfo[i].email)
        if(userInfo[i].email == email){
            return true;
        }
    }
    return false;
}

exports.createAccount = (email, name, number, password) => {

    userInfo[userInfo.length] = {
        username: name,
        number: number,
        email: email,
        password: password
    }
    fs.writeFileSync('./userdb.json', JSON.stringify(userInfo));

}

exports.removeAccount = (email) => {

    for (var i = 0; i < userInfo.length; i++){
        if(userInfo[i].email == email){
            delete userInfo[i]
            fs.writeFileSync('./userdb.json', JSON.stringify(userInfo));
            return true;
        }
    }
    return false;

}