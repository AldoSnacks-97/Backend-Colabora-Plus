const CalendarEvent = require('../models/calendarEvent.model');

// Obtener todos los eventos
const getCalendarEvents = async (req, res) => {
  try {
    const events = await CalendarEvent.find()
      .populate('userId', 'name email')
      .populate('taskId', 'tittle')
      .populate('projectId', 'nameProject');
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener eventos: ' + error.message });
  }
};

// Obtener eventos por usuario
const getEventsByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const events = await CalendarEvent.find({ userId })
      .populate('userId', 'name email')
      .populate('taskId', 'tittle')
      .populate('projectId', 'nameProject');
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener eventos del usuario: ' + error.message });
  }
};

// Obtener eventos por proyecto
const getEventsByProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const events = await CalendarEvent.find({ projectId })
      .populate('userId', 'name email')
      .populate('taskId', 'tittle')
      .populate('projectId', 'nameProject');
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener eventos del proyecto: ' + error.message });
  }
};

// Obtener eventos por tarea
const getEventsByTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const events = await CalendarEvent.find({ taskId })
      .populate('userId', 'name email')
      .populate('taskId', 'tittle')
      .populate('projectId', 'nameProject');
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener eventos de la tarea: ' + error.message });
  }
};

// Crear evento
const createCalendarEvent = async (req, res) => {
  try {
    const { title, description, startDate, endDate, userId, projectId, taskId, googleEventId, status } = req.body;

    if (!title || !description || !startDate || !endDate || !userId) {
      return res.status(400).json({ error: 'Todos los campos obligatorios deben ser completados' });
    }

    const newEvent = new CalendarEvent({
      title,
      description,
      startDate,
      endDate,
      userId,
      projectId,
      taskId,
      googleEventId,
      status
    });

    await newEvent.save();
    res.status(201).json({ message: 'Evento creado correctamente', event: newEvent });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el evento: ' + error.message });
  }
};

// Actualizar evento
const updateCalendarEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await CalendarEvent.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Evento no encontrado' });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el evento: ' + error.message });
  }
};

// Eliminar evento
const deleteCalendarEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await CalendarEvent.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Evento no encontrado' });
    res.status(200).json({ message: 'Evento eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el evento: ' + error.message });
  }
};

module.exports = {
  getCalendarEvents,
  getEventsByUser,
  getEventsByProject,
  getEventsByTask,
  createCalendarEvent,
  updateCalendarEventById,
  deleteCalendarEventById
};
