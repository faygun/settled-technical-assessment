const axios = require('axios');
const listViewModel = require('../models/listView');

class listViewService
{
    async get(id){
        //db.get(id);
        try{
            let result = await axios.get("http://www.mocky.io/v2/5deccaf233000052002b8ff0/" + id);
            let data = new listViewModel(result.data);
            return data;
        }catch(err){
            global.Error(err);
            return null;
        }
    }
    

    update(listViewModel){
        //db.update(listViewService);
        return listViewModel.id;
    }

    create(listViewModel){
        //db.create(listViewModel)
        listViewModel.id = 2;
        return listViewModel.id;
    }
}

module.exports = listViewService;