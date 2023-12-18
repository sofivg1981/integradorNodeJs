const ejs = require("ejs")
const path = require ("path")
const fs = require ("fs")
const funkoJSON = fs.readFileSync("./src/data/funko.json","utf-8")
const funkos = JSON.parse(funkoJSON)

const shop = (req,res) => {

    res.render ("shop", {funkos:funkos})
}


const item= (req,res) => {

    res.send ("item")
}

const addItem = (req,res) => {
    res.send ("addItem")
}

const getcart = (req,res) => {
    res.send ("getcart")
}

const postCart = (req,res) => {
    res.send ("postCart")
}

const shopControllers =  {
    shop,
    item,
    addItem,
    getcart,
    postCart,
};



module.exports= shopControllers;