const orm = require("../config/orm")


orm.selectAll("burgers")
orm.insertOne("Angus five-star burger")
orm.updateOne(true, 3)



module.exports = "burger";