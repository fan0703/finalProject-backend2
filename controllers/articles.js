const express = require('express');
const router = express.Router();
const Articles = require('../models/articles')

router.get('/', async(req, res)=>{
  
    Articles.find({}, (err, foundArticles)=>{
        res.json(foundArticles)
    })
});

router.delete('/:id', async(req, res)=>{
   
        Articles.findByIdAndRemove(req.params.id, (err, deletedArticle)=>{
        res.json(deletedArticle)
    })
});

router.put('/:id', async(req, res)=>{
  
        Articles.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedArticle)=>{
        res.json(updatedArticle)
    })
});

router.post('/', async(req, res)=>{
    
        Articles.create(req.body, (err, createdArticle)=>{
        res.json(createdArticle) //.json() will send proper headers in response so client knows it's json coming back
    })
})

router.get('/:id', async(req, res)=>{
    
        Articles.findById(req.params.id, (err, foundArticle)=>{
        res.json(foundArticle)
    })
})
module.exports = router