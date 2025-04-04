const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
  tittle: {
    type: String,
    required: true
  },
  assignedProject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true
  },
  progreso: [
    {
      usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      estado: {
        type: String,
        enum: ['Pendiente', 'En progreso', 'Completado'],
        default: 'Pendiente'
      }
    }
  ],
  dueDate: {
    type: Date,
    required: true
  }
});

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;
