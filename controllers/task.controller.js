const Task = require('../models/task.model');
const { ObjectId } = require('mongodb');

// Obtener todas las tareas
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find()
      .populate('assignedProject', 'nameProject')
      .populate('progreso.usuario', 'name email');
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener tareas: " + error.message });
  }
};

// Obtener una tarea por ID
const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id)
      .populate('assignedProject', 'nameProject')
      .populate('progreso.usuario', 'name email');
    if (!task) return res.status(404).json({ message: "Tarea no encontrada" });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la tarea: " + error.message });
  }
};

// Obtener tareas por proyecto
const getTasksByProject = async (req, res) => {
  try {
    const projectId = new ObjectId(req.params.projectId);
    const tasks = await Task.find({ assignedProject: projectId })
      .populate('progreso.usuario', 'name email');
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener tareas por proyecto: " + error.message });
  }
};

// Obtener tareas por usuario
const getTasksByUser = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.userId);
    const tasks = await Task.find({ 'progreso.usuario': userId })
      .populate('assignedProject', 'nameProject');
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener tareas por usuario: " + error.message });
  }
};

// Crear tarea (con múltiples usuarios)
const createTask = async (req, res) => {
  try {
    const { tittle, assignedProject, users, dueDate } = req.body;

    if (!tittle || !assignedProject || !users || !Array.isArray(users) || !dueDate) {
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    const progreso = users.map(userId => ({
      usuario: new ObjectId(userId),
      estado: 'Pendiente'
    }));

    const task = new Task({
      tittle: tittle.trim(),
      assignedProject: new ObjectId(assignedProject),
      progreso,
      dueDate: new Date(dueDate)
    });

    await task.save();
    res.status(201).json({ message: "Tarea creada correctamente", task });
  } catch (error) {
    res.status(500).json({ error: "Error al crear tarea: " + error.message });
  }
};

// Actualizar tarea
const updateTaskById = async (req, res) => {
  try {
    const updateData = req.body;

    if (updateData.assignedProject)
      updateData.assignedProject = new ObjectId(updateData.assignedProject);

    if (updateData.progreso) {
      updateData.progreso = updateData.progreso.map(p => ({
        usuario: new ObjectId(p.usuario),
        estado: p.estado
      }));
    }

    const task = await Task.findByIdAndUpdate(req.params.id, updateData, { new: true });

    if (!task) return res.status(404).json({ message: "Tarea no encontrada" });

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar tarea: " + error.message });
  }
};

// Eliminar tarea
const deleteTaskById = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: "Tarea no encontrada" });

    res.status(200).json({ message: "Tarea eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar tarea: " + error.message });
  }
};

module.exports = {
  getTasks,
  getTaskById,
  getTasksByProject,
  getTasksByUser,
  createTask,
  updateTaskById,
  deleteTaskById
};
