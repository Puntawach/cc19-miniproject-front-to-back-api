// 1.list all user
// 2 update role
// 3 deletee User 

exports.listUser = async (req, res, next ) => {
    //code 
    try {
        res.json({message:"list user active"})
    } catch (error) {
        next(error)
    }
    
}

exports.updateRole = async (req, res, next) => {
    //code
    try {
        res.json({message:"updaet active"})
    } catch (error) {
        next(error);
    }
}

exports.deleteUser = async (req, res, next) => {
    //code
    try {
        res.json({message:"deleteeeeeee"})

    } catch (error) {
        next(error)
    }
}