const burger = require("../models/burger")
const express = require("express")
const router = express.Router();
const orm = require("../config/orm")
//router

router.get("/",function(req,res){
      orm.selectAll(function(data){
        var hbsObject = {
          burger:data
        };
        console.log("router get " + hbsObject)
        res.render("index", hbsObject)
      });
});

router.post("/api/burgers", function(req,res){
 
})

router.put("/api/burger/:id",function(req,res){
  var condition = "id = " +req.params.id;
  console.log("condition", condition);
  orm.updateOne(
    {
      devoured:req.body.sleepy
    },
    condition,
    function(result){
      if(result.changedRows === 0){
        return res.status(404).end()
      }
      res.status(200).end()
    }
  );
});
  module.exports = router;