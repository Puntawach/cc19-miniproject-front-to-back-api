const prisma = require("../configs/prisma")
const createError = require("../utils/createError")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.register = async (req, res, next) =>{
    try {
        //code
        //step 1 req.body
        const {email,firstname,lastname,password,confirmPassword} = req.body
        console.log(email,firstname,lastname,password,confirmPassword)
        //step 2 validate
        // if(!email){
        //step 3 check already
        const checkEmail = await prisma.profile.findFirst({
            where:{
                email:email,
            }
        })
        console.log(checkEmail)
        if(checkEmail){
            createError(400,"email is already exist")
        }
        //step 4 enreypt brcypt
        // const salt = bcrypt.genSaltSync(10)
        const hashPassword = bcrypt.hashSync(password,10)
        // console.log(hashPassword)
        const profile = await prisma.profile.create({
            data:{
                email:email,
                firstname:firstname,
                lastname:lastname,
                password:hashPassword,
            }
        })
        //step 5 insert to DB
        //step 6 response
        res.json({message:"hello. register"})
    } catch (error) {
        console.log('step 2 catch')
        next(error)
    }
}

exports.login = async (req, res, next) => {

    try {
        // step 1 req body
        const { email, password } = req.body
        console.log(req.body)
        // step 2 check email and password
        const profile = await prisma.profile.findFirst({
            where: {
                email:email,
            }
        })
        console.log(profile)
        if(!profile){
            return createError(400, "Email, password is invalid")
        }
        const isMatch = bcrypt.compareSync(password,profile.password)

        if(!isMatch){
            return createError(400, "email, Password is invalid !")
        }

        //step 3 generate token
        const payload = {
            id:profile.id,
            email:profile.email,
            firstname:profile.firstname,
            lastname:profile.lastname,
            role:profile.role,
        }
        console.log(payload)

        const token = jwt.sign(payload, process.env.SECRET, {
            expiresIn:"1d"
        }) 
        //step 4 responcse
        res.json({message:"login success",
            payload:payload,
            token:token,
        })
    } catch (error) {
        console.log(error)
        next(error)
    }

}

exports.currentUser = async (req, res, next) => {
    //code check token from the front use if u allowed t oinspect hsi section
    try {
        res.json({message:"Hello, currentUSer"})
    } catch (error) {
        next(error)
    }
    
}