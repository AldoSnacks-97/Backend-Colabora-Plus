const express = require('express');
const router = express.Router();
const {
  getCalendarEvents,
  getEventsByUser,
  getEventsByProject,
  getEventsByTask,
  createCalendarEvent,
  updateCalendarEventById,
  deleteCalendarEventById
} = require('../controllers/calendarEvent.controller');

// Obtener todos los eventos
router.get('/all', getCalendarEvents);

// Obtener eventos por usuario
router.get('/byUser/:userId', getEventsByUser);

// Obtener eventos por proyecto
router.get('/byProject/:projectId', getEventsByProject);

// Obtener eventos por tarea
router.get('/byTask/:taskId', getEventsByTask);

// Crear nuevo evento
router.post('/add', createCalendarEvent);

// Actualizar evento
router.put('/update/:id', updateCalendarEventById);

// Eliminar evento
router.delete('/delete/:id', deleteCalendarEventById);

module.exports = router;
