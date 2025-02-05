# server

## step 1 create package

``` bash
npm init -y
```

## step 2 install package...
``` bash
npm install express nodemon cors morgan bcryptjs jsonwebtoken zod prisma
```
```bash
npx prisma init
```

## step 3 Git
```bash
git init
git add .
git commit -m "message"
```

next step 
copy code from repo
-- only first time--
``` bash
git remote add origin https://github.com/Puntawach/cc19-miniproject-front-to-back-api.git
git branch -M main
git push -u origin main
```
when update code
``` bash
git add .
git commit -m "message"
git push
```

## step 4 update server package,json

``` json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev":"nodemon index.js"
  },
  ```


## step 5 start server  // use middleware

``` js 
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")



const app = express();
//middleware
app.use(cors()) // allow cross domain 
app.use(morgan("dev")) // show log at termial
app.use(express.json()) // For read json


//routing 


//start server 
const PORT = 8000
app.listen(PORT,()=>console.log("this server is running on port "+PORT))
```
\
## step 6 Routing & ccontroller [register]

``` js ```

## step 7 create handleerror

``` js ```

## step 8 validate with zod
``` js
const { z, Schema } = require("zod") 


exports.registerSchema = z.object({
    email: z.string().email("Email ไม่ถูกต้อง"),
    firstname: z.string().min(3,"Firstname ค้องมากกว่า 3 อักขระ"),
    lastname:z.string().min(3,"lastname at least 3 letters"),
    password: z.string().min(6,"Password at least 6 letters"),
    confirmPassword: z.string().min(6,"confrim > 6")
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
```
and then update code at
auth-routes

                                            
## step 9 prisma 
