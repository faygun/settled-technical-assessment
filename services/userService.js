const axios = require('axios');
const userModel = require('../models/user');

class userService{
    async get(user_id){
        try{
            var result = await axios.get('http://www.mocky.io/v2/5deccb3b33000076002b8ff2/' + user_id);
            var user = new userModel(result.data);
            return user;
        }catch(err){
            global.Error(err);
            return null;
        }
    }
}

module.exports = userService;