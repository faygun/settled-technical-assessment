const express = require('express');
const router = express.Router();
const listViewModel = require('../../models/listView');
const listViewService = require('../../services/listViewService');
const listingService = require('../../services/listingService');
const auth = require('../../middleware/auth');

router.post('/',auth, async(req, res)=>{
    var {listing_id} = req.body;
    try{
        let _listViewService = new listViewService();
        let model = await _listViewService.get(listing_id)
        // if the record exist in the db
        if(model){
            model.number_of_views += 1;
            let result = _listViewService.update(model);
    
            if(!result)
                res.status(500).json({msg:"Unexpected error"});

            if(model.number_of_views >= 1000){
                let _listingService = new listingService();
                let listing = await _listingService.get(listing_id);
                
                if(listing){
                    // we can use message bus for events like this. It could be queus tech such as rabbitmq or SQS
                    // Or async method .
                    _listingService.sendEmail(listing);
                }
            }
        }else{
            //Create a new one
            let number_of_views = 1;
            model = new listViewModel({listing_id, number_of_views});
            let result = _listViewService.create(model);   
            
            if(!result)
                res.status(500).json({msg:"Unexpected error"});
        }
        
        res.status(200).json({data:model});
    }catch(err){
        console.log(err);
        res.status(500).json({msg:"Unexpected error"});
    }
});


module.exports = router;