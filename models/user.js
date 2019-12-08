class user{
    constructor(data){
        if(!data)
            return null;

        this.id = data.id;
        this.email = data.email;
        this.name = data.name;
        this.surName = data.surName;
    }
}

module.exports = user;