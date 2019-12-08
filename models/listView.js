class listView{
    constructor(data){
        if(!data)
            return null;
            
        this.id = data.id;
        this.listing_id = data.listing_id;
        this.number_of_views = data.number_of_views;
    }
}

module.exports = listView;