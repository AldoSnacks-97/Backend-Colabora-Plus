const express = require('express');
const router = express.Router();
const {
  getTasks,
  getTaskById,
  getTasksByProject,
  getTasksByUser,
  createTask,
  updateTaskById,
  deleteTaskById
} = require('../controllers/task.controller');

// Obtener todas las tareas
router.get('/all', getTasks);

// Obtener una tarea por ID
router.get('/:id', getTaskById);

// Obtener tareas por proyecto
router.get('/byProject/:projectId', getTasksByProject);

// Obtener tareas por usuario
router.get('/byUser/:userId', getTasksByUser);

// Crear una nueva tarea
router.post('/add', createTask);

// Actualizar una tarea
router.put('/:id', updateTaskById);

// Eliminar una tarea
router.delete('/:id', deleteTaskById);

module.exports = router;
