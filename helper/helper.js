var userModel = require('../models/user');
var listViewModel = require('../models/listView');
var axios = require('axios');
class helper{
    prepareEmailTemplate(user, listing){
        let template = `
        ------------
        To: ${user.email}
        From: hello@settled.co.uk

        Subject: Your listing is getting popular
        Content:
        Hi ${user.name},

        Your listing for ${listing.address}, ${listing.zipCode} has been viewed over 1000 times. Congratulations!

        Kind regards,
        The Settled Team
        ------------
    `
        return template;
        
    }
}

module.exports = helper;