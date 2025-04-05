const Project = require('../models/project.model');
const { ObjectId } = require('mongoose').Types;

// Obtener todos los proyectos
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find()
      .populate('teammates', 'name email'); // Asegura que venga nombre y correo de cada user
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: "Error al recuperar los proyectos: " + error.message });
  }
};

// Obtener un proyecto por ID
const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate('teammates', 'name email');
    if (!project) return res.status(404).json({ message: "Proyecto no encontrado" });
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: "Error al recuperar el proyecto: " + error.message });
  }
};

// Crear un proyecto
const createProject = async (req, res) => {
  try {
    const { nameProject, description, userInCharge, teammates, state, endDate } = req.body;

    if (!nameProject || !description || !userInCharge || !endDate) {
      return res.status(400).json({ error: "Todos los campos obligatorios deben estar llenos" });
    }

    const newProject = new Project({
      nameProject: nameProject.trim(),
      description: description.trim(),
      userInCharge: userInCharge.trim(),
      teammates: Array.isArray(teammates) ? teammates.map(id => new ObjectId(id)) : [],
      state: state?.trim() || 'Activo',
      creationDate: new Date(),
      endDate: new Date(endDate)
    });

    await newProject.save();

    const populatedProject = await Project.findById(newProject._id)
      .populate('teammates', 'name email');

    res.status(201).json({ message: "Proyecto creado exitosamente", project: populatedProject });
  } catch (error) {
    res.status(500).json({ error: "Error al crear el proyecto: " + error.message });
  }
};

// Actualizar un proyecto por ID
const updateProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    if (updateData.teammates) {
      updateData.teammates = updateData.teammates.map(id => new ObjectId(id));
    }

    const updated = await Project.findByIdAndUpdate(id, updateData, { new: true })
      .populate('teammates', 'name email');

    if (!updated) return res.status(404).json({ message: "Proyecto no encontrado" });

    res.status(200).json({ message: "Proyecto actualizado correctamente", project: updated });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el proyecto: " + error.message });
  }
};

// Eliminar un proyecto
const deleteProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Project.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Proyecto no encontrado" });

    res.status(200).json({ message: "Proyecto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el proyecto: " + error.message });
  }
};

module.exports = {
  getProjects,
  getProjectById,
  createProject,
  updateProjectById,
  deleteProjectById
};
