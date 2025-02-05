const handleError = (err, req, res, next) => {
    // code
    res.status(err.statusCode || 500).json({message:err.message || "some ting wong"})
}


module.exports = handleError