const getLogin = (req,res) => {
    res.send ("getLogin")
}

const postLogin = (req,res) => {
    res.send ("postLogin")
}

const register = (req,res) => {
    res.send ("register")
}

const postRegister = (req,res) => {
    res.send ("postRegister")
}

const logout = (req,res) => {
    res.send ("logout")
}


const controllers =  {
    getLogin,
    postLogin,
    register,
    postRegister,
    logout,
    
};

module.exports= controllers;