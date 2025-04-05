Colabora+ API

Colabora+ es una API RESTful desarrollada con Express y MongoDB. Permite gestionar usuarios, tareas, proyectos, notificaciones y eventos de calendario, todo a través de una serie de endpoints accesibles mediante HTTP.
Descripción

Esta API está diseñada para gestionar los diferentes aspectos de un sistema de colaboración, permitiendo la creación, asignación y seguimiento de tareas dentro de proyectos, gestión de usuarios, notificaciones personalizadas y eventos de calendario sincronizados.
Tecnologías Utilizadas:

  -Node.js
  
  -Express
  
  -MongoDB (con Mongoose)
  
  -CORS (para permitir solicitudes entre orígenes)

Endpoints de la API
1. Usuarios (/api/users)

    GET /api/users/all
    URL: https://backend-colabora-plus.onrender.com/api/users/all
    Método: GET
    Descripción: Obtiene todos los usuarios registrados.

    GET /api/users/byId/:id
    URL: https://backend-colabora-plus.onrender.com/api/users/byId/{{id}}
    Método: GET
    Descripción: Obtiene un usuario específico por su ID.

    POST /api/users/add
    URL: https://backend-colabora-plus.onrender.com/api/users/add
    Método: POST
    Descripción: Crea un nuevo usuario.

    POST /api/users/login
    URL: https://backend-colabora-plus.onrender.com/api/users/login
    Método: POST
    Descripción: Inicia sesión

    PUT /api/users/update/:id
    URL: https://backend-colabora-plus.onrender.com/api/users/update/{{id}}
    Método: PUT
    Descripción: Actualiza la información de un usuario específico.

    DELETE /api/users/delete/:id
    URL: https://backend-colabora-plus.onrender.com/api/users/delete/{{id}}
    Método: DELETE
    Descripción: Elimina un usuario específico.

2. Tareas (/api/tasks)

    GET /api/projects/all
    URL: https://backend-colabora-plus.onrender.com/api/tasks/all
    Método: GET
    Descripción: Obtiene todos los proyectos.

    GET /api/projects/byId/:id
    URL: https://backend-colabora-plus.onrender.com/api/tasks/byId/{{id}}
    Método: GET
    Descripción: Obtiene un proyecto específico por su ID.

    POST /api/projects/add
    URL: https://backend-colabora-plus.onrender.com/api/tasks/add
    Método: POST
    Descripción: Crea un nuevo proyecto.

    PUT /api/projects/update/:id
    URL: https://backend-colabora-plus.onrender.com/api/tasks/update/{{id}}
    Método: PUT
    Descripción: Actualiza un proyecto específico.

    DELETE /api/projects/delete/:id
    URL: https://backend-colabora-plus.onrender.com/api/tasks/delete/{{id}}
    Método: DELETE
    Descripción: Elimina un proyecto específico.
   
3. Proyectos (/api/projects)

    GET /api/projects/all
    URL: https://backend-colabora-plus.onrender.com/api/projects/all
    Método: GET
    Descripción: Obtiene todos los proyectos.
    
    GET /api/projects/byId/:id
    URL: https://backend-colabora-plus.onrender.com/api/projects/byId/{{id}}
    Método: GET
    Descripción: Obtiene un proyecto específico por su ID.
    
    POST /api/projects/add
    URL: https://backend-colabora-plus.onrender.com/api/projects/add
    Método: POST
    Descripción: Crea un nuevo proyecto.
    
    PUT /api/projects/update/:id
    URL: https://backend-colabora-plus.onrender.com/api/projects/update/{{id}}
    Método: PUT
    Descripción: Actualiza un proyecto específico.
    
    DELETE /api/projects/delete/:id
    URL: https://backend-colabora-plus.onrender.com/api/projects/delete/{{id}}
    Método: DELETE
    Descripción: Elimina un proyecto específico.

4. Notificaciones (/api/notifications)

    GET /api/notifications/all
    URL: https://backend-colabora-plus.onrender.com/api/notifications/all
    Método: GET
    Descripción: Obtiene todas las notificaciones.
    
    GET /api/notifications/byUser/:userId
    URL: https://backend-colabora-plus.onrender.com/api/notifications/byUser/{{userId}}
    Método: GET
    Descripción: Obtiene las notificaciones de un usuario específico.
    
    POST /api/notifications/add
    URL: https://backend-colabora-plus.onrender.com/api/notifications/add
    Método: POST
    Descripción: Crea una nueva notificación.
    
    PUT /api/notifications/update/:id
    URL: https://backend-colabora-plus.onrender.com/api/notifications/update/{{id}}
    Método: PUT
    Descripción: Actualiza una notificación específica.
    
    DELETE /api/notifications/delete/:id
    URL: https://backend-colabora-plus.onrender.com/api/notifications/delete/{{id}}
    Método: DELETE
    Descripción: Elimina una notificación específica.

5. Eventos de Calendario (/api/calendars)

    GET /api/calendars/all
    URL: https://backend-colabora-plus.onrender.com/api/calendars/all
    Método: GET
    Descripción: Obtiene todos los eventos de calendario.
    
    GET /api/calendars/byUser/:userId
    URL: https://backend-colabora-plus.onrender.com/api/calendars/byUser/{{userId}}
    Método: GET
    Descripción: Obtiene los eventos de un usuario específico.
    
    POST /api/calendars/add
    URL: https://backend-colabora-plus.onrender.com/api/calendars/add
    Método: POST
    Descripción: Crea un nuevo evento de calendario.
    
    PUT /api/calendars/update/:id
    URL: https://backend-colabora-plus.onrender.com/api/calendars/update/{{id}}
    Método: PUT
    Descripción: Actualiza un evento de calendario específico.
    
    DELETE /api/calendars/delete/:id
    URL: https://backend-colabora-plus.onrender.com/api/calendars/delete/{{id}}
    Método: DELETE
    Descripción: Elimina un evento de calendario específico.

Modelos de Datos

1. Usuario (User)

    Nombre: Nombre completo del usuario.

    Email: Dirección de correo electrónico.

    Contraseña: Contraseña para autenticación (encriptada).

    Foto de perfil: URL de la foto de perfil.

    Configuración de notificaciones: Preferencias sobre qué notificaciones recibir.

2. Proyecto (Project)

    Nombre: Nombre del proyecto.

    Descripción: Descripción del proyecto.

    Fecha de creación: Fecha en la que se creó el proyecto.

    Dueño: Usuario que es dueño del proyecto.

    Lista de miembros: Usuarios que participan en el proyecto.

    Estado: Puede ser "activo" o "archivado".

3. Tarea (Task)

    Título: Título de la tarea.

    Descripción: Descripción detallada de la tarea.

    Proyecto: Proyecto al que pertenece la tarea.

    Asignado a: Usuario al que se le asigna la tarea.

    Estado: Puede ser "pendiente", "en progreso" o "completada".

    Fecha límite: Fecha límite para completar la tarea.

4. Notificación (Notification)

    Usuario destinatario: El usuario que recibirá la notificación.

    Tipo: Tipo de notificación ("recordatorio", "cambio de estado", "asignación de tarea").

    Estado: Puede ser "leída" o "no leída".

5. Evento de Calendario (CalendarEvent)

    Relacionado con: Puede estar vinculado a una tarea o proyecto.

    Sincronización con Google Calendar: Sincronización con eventos en Google Calendar.

Controladores

1. UserController

    Obtener y actualizar el perfil del usuario.

    Configuración de notificaciones.

2. ProjectController

    Crear, editar, eliminar proyectos.

    Agregar o remover miembros de un proyecto.

    Listar los proyectos de un usuario.

3. TaskController

    Crear, editar, eliminar tareas.

    Asignar tareas a usuarios.

    Actualizar el estado de la tarea.

    Obtener las tareas de un proyecto.

4. NotificationController

    Enviar y recibir notificaciones push.

    Marcar notificaciones como leídas.

5. CalendarController

    Sincronizar tareas con Google Calendar.

    Crear eventos en el calendario.

    Obtener eventos sincronizados.
