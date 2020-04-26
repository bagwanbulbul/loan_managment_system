const knex = require("../connection.js")
let customerData = (customerDetails)=>{
    return knex.select("*").from("customer").insert(customerDetails)
}
let customerlogin=(emailId)=>{
    return knex.select('*').from('customer').havingIn('emailId',emailId)

}
module.exports={customerData,customerlogin}
