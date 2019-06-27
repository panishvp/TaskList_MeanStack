var mongoose = require('mongoose');
const taskSchema = mongoose.Schema({
  taskName: {
    type: String,
    required: true
  },
  taskDescription: {
    type: String,
    required: true
  },
  taskPriority:  {
    type: String,
    required: true
  },
  taskAsignee: {
   type: String,
   required: true
 }
});
const tasks = module.exports = mongoose.model('tasks', taskSchema);
