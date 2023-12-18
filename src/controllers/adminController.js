const admin = (req,res) => {
    res.send ("Admin")
}

const adminCreate = (req,res) => {
    res.send ("adminCreate")
}

const postCreate = (req,res) => {
    res.send ("postCreate")
}

const getEdit = (req,res) => {
    res.send ("getEdit")
}

const putEdit = (req,res) => {
    res.send ("putEdit")
}

const deleteId = (req,res) => {
    res.send ("deleteId")
}

const controllers =  {
    admin,
    adminCreate,
    postCreate,
    getEdit,
    putEdit,
    deleteId
};

module.exports= controllers;