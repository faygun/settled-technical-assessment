const axios = require('axios');
const listingModel = require('../models/listing');
const userService = require('../services/userService');
const helper = require('../helper/helper');

class listingService{
    async get(listing_id){
        try{
            var result = await axios.get('http://www.mocky.io/v2/5decd38633000058002b9005/' + listing_id);
            var listing = new listingModel(result.data);
            return listing;
        }
        catch(err){
            global.Error(err)
            return null;
        }
        
    }

    async sendEmail(listing){

        console.log("Pretending to send email...");
        try{
            let _userService = new userService();
            let user = await _userService.get(listing.user_id);
    
            if(user){
                let _helper = new helper();
                let email = _helper.prepareEmailTemplate(user, listing);
                console.log(email);
            }
        }catch(err){
            global.Error(err);
            console.log(err);
        }
    }
}

module.exports = listingService;