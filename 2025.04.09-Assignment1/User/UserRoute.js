const express =require('express');
const router =express.Router();
const {getUserSummary}=require('./userService');

router.get('/summary/:id',(req,res) =>{
    const userid=req.params.id;
    const summary= getUserSummary(userid);
    
    if(!summary){
        return res.status(404).json({error: 'User not found'});
    }

    res.json(summary);
})

module.exports=router;
