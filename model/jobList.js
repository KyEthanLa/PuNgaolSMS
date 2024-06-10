const fs = require('fs');
let jobInfo  = JSON.parse(fs.readFileSync('./jobList.json', 'utf-8'));

exports.createJob = (name) =>{

    jobInfo[jobInfo.length] = {
        name: name,
        location: location,
        description: description,
        contact: contact,
        
    }

    fs.writeFileSync('./jobList.json', JSON.stringify(userInfo));

}

exports.getBuildingInformation = () => {
    return jobInfo;
}

exports.deleteJob = (name) =>{

    for (var i = 0; i < jobInfo.length; i++){
        if(jobInfo[i].name == name){
            delete jobInfo[i]
            fs.writeFileSync('./jobInfo.json', JSON.stringify(jobInfo));
            return true;
        }
    }

    jobInfo[jobInfo.length] = {
        name: name,
        location: location,
        description: description,
        contact: contact,
        
    }

    fs.writeFileSync('./jobList.json', JSON.stringify(userInfo));

}