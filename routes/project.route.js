const express = require('express');
const router = express.Router();
const {
  getProjects,
  getProjectById,
  createProject,
  updateProjectById,
  deleteProjectById
} = require('../controllers/project.controller');

// Obtener todos los proyectos
router.get('/all', getProjects);

// Obtener un proyecto por ID
router.get('/:id', getProjectById);

// Crear nuevo proyecto
router.post('/add', createProject);

// Actualizar proyecto
router.put('/:id', updateProjectById);

// Eliminar proyecto
router.delete('/:id', deleteProjectById);

module.exports = router;
