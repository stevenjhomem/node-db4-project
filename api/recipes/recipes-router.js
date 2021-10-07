const router = require('express').Router();

router.use('*', (req,res)=>{
    res.json({api: "is up and running!"})
})

// eslint-disable-next-line no-unused-vars
router.use((err,req,res,next)=>{ 
    res.status(500).json({
        CustomMessage: "Something went wrong in the recipes database",
        Message: err.message,
        stack: err.stack
    })
})

module.exports = router