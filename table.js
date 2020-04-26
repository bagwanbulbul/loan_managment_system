var knex = require('knex')({
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'navgurukul',
      database: 'loan_managment'
    }
  })
knex.schema.createTable("customer", (table) => {
    table.increments('id')
    table.string('emailId').unique()
    table.string('userName')
    table.string('password')
})
.then(() => console.log("table created"))
.catch((err) => { console.log(err); throw err });
