const handleError = (err, req, res, next) => {
    // code
    console.log("step 3 handle error")
    res.status(err.statusCode || 500).json({message:err.message || "some ting wong"})
}


module.exports = handleError