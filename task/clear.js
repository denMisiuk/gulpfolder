const del = require("del")

//configaration
const path = require("../config/path.js")

//deleting
const clear = () => {
   return del(path.root);
}




module.exports = clear;