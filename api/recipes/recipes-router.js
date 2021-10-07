const router = require('express').Router();

router.use('*', (req,res,next)=>{
    res.json({api: "is up and running!"})
})

router.use((err,req,res,next)=>{ 
    res.status(500).json({
        CustomMessage: "Something went wrong in the recipes database",
        Message: err.message,
        stack: err.stack
    })
})

module.exports = router