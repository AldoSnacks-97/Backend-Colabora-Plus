const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProjectSchema = new Schema({
  nameProject: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  userInCharge: {
    type: String,
    required: true
  },
  teammates: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  ],
  state: {
    type: String,
    default: 'Activo'
  },
  creationDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date,
    required: true
  }
});

const Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;
