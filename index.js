// ✅ index.js del backend
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
const userRoute = require('./routes/user.route');
const taskRoute = require('./routes/task.route');
const projectRoute = require('./routes/project.route');
const notificationRoute = require('./routes/notification.route');
const calendarEventRoute = require('./routes/calendarEvent.route');

app.use('/api/users', userRoute);
app.use('/api/tasks', taskRoute);
app.use('/api/projects', projectRoute);
app.use('/api/notifications', notificationRoute);
app.use('/api/calendars', calendarEventRoute);

app.get('/', (req, res) => {
  res.send('Bienvenido al servidor de APIs version 1.0.0');
});

// Realizar petición de conexión a mongodb
mongoose.connect('mongodb+srv://AldoMisaelLealPalafox:AldoAtlas20@cluster0.ocypv.mongodb.net/DB_ColaboraPlus1?retryWrites=true&w=majority&appName=Cluster0')
.then( () => {
    console.log('Se estableció la conexión a base de datos exitosamente');
    app.listen( 3000, () => {
        console.log('Servidor trabajando en el puerto 3000');
    });
})
.catch( () => console.log('Ocurrió un error en la conexión a la base de datos') );