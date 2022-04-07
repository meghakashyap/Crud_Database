const knex = require("knex")({
    client: 'mysql',
    connection: {
      host : 'localhost',
      port : 3306,
      user : 'root',
      password : 'Megha@8287',
      database : 'user_details'
    }
});

// create table
knex.schema.createTable("details",(details)=>{
    details.increment(id),
    details.string(name),
    details.string(description)
})
.then((data)=>{
    console.log(data)
    console.log("creating table")
}).catch((err)=>{
    console.log(err)
});

// we are inserting the data in the table
knex('details').insert({ id:6, name:'Queen',description:'I like Lol' })
.then((data)=>{
    console.log(data);
    console.log("insert data");
}).catch((err)=>{
    console.log(err)
});

// we are gettting the data from table 
knex.select('*').from('details')
.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})

// update the data in table
knex.update({id:2,name: 'Samridhii', description: 'I like chocolate'})
.table('details').where("id",2).then((data)=>{
    console.log("updating");
}).catch((err)=>{
    console.log("not updating")
})

// delete the data from table
knex('details').where('id',6).del().then((data)=>{
    console.log("delete")
}).catch((err)=>{
    console.log(err)
})