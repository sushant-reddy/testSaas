const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
});

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;
