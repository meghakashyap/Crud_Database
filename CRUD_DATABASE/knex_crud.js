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

// Creating table
knex.schema.createTable('users', (users) => {
    users.increments('Id')
    users.string('Name')
    users.integer('Age')
    users.string("City")
})
.then((data) => {
    console.log(data)
    console.log("Creating data")
}).catch((err)=>{
    console.log("Error in Creating data")
    console.log(err)
});

// Inserting data in table
knex("users").insert([{id:1,Name:"Megha",Age:20,City:"Delhi"},{id:2,Name:"Raghav",Age:21,City:"Delhi"},{id:3,Name:"Muskan",Age:19,City:"Kanpur"},{id:4,Name:"Priya",Age:22,City:"Haryana"}])
.then((data)=>{
    console.log(data)
    console.log("Inserting data successfully")
}).catch((err)=>{
    console.log(err)
    console.log("Error in inserting data")
})

// updating the data
knex("users").where({id:4}).update({City:"Delhi"})
.then((data)=>{
    console.log(data)
    console.log("Update Successfull")
})
.catch((err)=>{
    console.log(err)
    console.log("Error in Updating")
});

// Delete the data
knex("users").where({id:3}).del()
.then((data)=>{
    console.log(data)
    console.log("Delete the data successful")
})
.catch((err)=>{
    console.log(data)
    cosnole.log("Error in deleting the data")
})