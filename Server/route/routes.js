var express = require('express');
var router = express.Router();
const tasks = require('../model/taskItem')
module.exports = router;
router.get('/tasks',(req,res,next) => {
  tasks.find(function(err,task){
    if(err){
      res.json(err);
    }else{
      res.json(task);
    }
  });
});
//insertTask
router.post('/tasks',(req,res,next) => {
  let newtask = new tasks({
    taskName: req.body.taskName,
    taskDescription:req.body.taskDescription,
    taskPriority:req.body.taskPriority,
    taskAsignee:req.body.taskAsignee
  });
  newtask.save((err,task) => {
    if(err){
      res.json(err);
    }else{
      res.json({msg:'Task Created successfully'});
    }
  });
});
//UpdateTask
router.put('/tasks/:id',(req,res,next) => {
  tasks.findOneAndUpdate({_id: req.params.id},{
    $set:{
      taskName: req.body.taskName,
      taskDescription:req.body.taskDescription,
      taskPriority:req.body.taskPriority,
      taskAsignee:req.body.taskAsignee
    }
  },
  function(err,result){
    if(err){
      res.json(err);
    }else{
      res.json(result);
    }
  });
})
//DeleteTask
router.delete('/tasks/:id',(req,res,next) => {
  tasks.remove({_id: req.params.id}, function(err, result){
    if(err){
      res.json(err);
    }else{
      res.json(result);
    }
  });
})
