exports.register = (req, res, next) =>{
    //code
    try {
        res.json({message:"hello. register"})
    } catch (error) {
        console.log(error)
        next()
    }
}


exports.login = (req, res, next) => {

    try {
        console.log(ff)
        res.json({mesaage:"login active"})
        
    } catch (error) {
        console.log(error)
        next(error)
    }
}