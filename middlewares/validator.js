const { z, Schema } = require("zod") 


exports.registerSchema = z.object({
    email: z.string().email("Email ไม่ถูกต้อง"),
    firstname: z.string().min(3,"Firstname ค้องมากกว่า 3 อักขระ"),
    lastname:z.string().min(3,"lastname at least 3 letters"),
    password: z.string().min(6,"Password at least 6 letters"),
    confirmPassword: z.string().min(6,"Confirm password at least 6")
}).refine((data)=>data.password === data.confirmPassword,{
    message:"Password is not matched",
    path:["confirmPassword"]
})

exports.loginSchema = z.object({
    email: z.string().email("Email ไม่ถูกต้อง"),
    password: z.string().min(6,"Password at least 6 letters"),
})


exports.validateWithzod = (schema) => (req, res, next) =>{
    try {
        console.log("middleware for mzod")
        schema.parse(req.body)
        next()
    } catch (error) {
        const errMsg = error.errors.map((item)=>item.message)
        const arrTxt = errMsg.join(",")
        const merge = new Error(arrTxt)
        next(merge)
    }
}