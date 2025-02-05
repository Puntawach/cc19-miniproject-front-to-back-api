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

