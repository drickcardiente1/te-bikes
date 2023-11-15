const mysql = require("mysql");

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"4357461_mbrdb"
});

db.connect((error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Database Connected")
    }
})

module.exports = db;
