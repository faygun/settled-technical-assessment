class listing{
     constructor(data){
        if(!data)
            return null;
            
        this.id = data.id;
        this.user_id = data.user_id;
        this.address = data.address;
        this.postCode = data.postCode
    }
}

module.exports = listing;