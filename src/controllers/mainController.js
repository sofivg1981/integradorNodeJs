const ejs = require("ejs")
const path= require ("path")
const fs = require ("fs")
const funkoJSON = fs.readFileSync("./src/data/funko.json","utf-8")
const funkos = JSON.parse(funkoJSON)

const homePage = (req,res) => {
   
   res.render ("home", {funkos:funkos})
}

const contact = (req,res) => {
    res.send ("Contact")
}

const about = (req,res) => {
    res.send ("about")
}

const faqs = (req,res) => {
    res.send ("Faqs")
}

const mainControllers =  {
    homePage,
    contact,
    about,
    faqs
};



module.exports= mainControllers;