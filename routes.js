let path = require("path");
let express = require("express");
let router = express.Router();

router.get("/",function(req,res) {
  res.sendFile(path.resolve(__dirname,"homescreen.html"));
});
router.get("/about",function(req,res) {
    res.sendFile(path.resolve(__dirname,"about.html"));
});
router.get("/reading",function(req,res) {
    res.sendFile(path.resolve(__dirname,"reading.html"));
});
router.get("/signups",function(req,res) {
    res.sendFile(path.resolve(__dirname,"signups.html"));
});
router.get("/homescreen",function(req,res) {
    res.sendFile(path.resolve(__dirname,"homescreen.html"));
});

module.exports = router;
