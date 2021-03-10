const fs = require('fs')
const path = require('path');



function userController(userInfo) {
    let users = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf8'));
    let userInf = JSON.parse(userInfo);
    
    for (let i = 0; i < users.length; i++) {
        if (userInf.userName === users[i].userName && userInf.password === users[i].password) {
            return ("200")
        } else  return ("400")
    }
}

module.exports = userController;