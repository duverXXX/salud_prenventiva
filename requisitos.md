# Especificación de Requisitos del Sistema - Salud Preventiva

**Proyecto:** Sistema de Salud Preventivo (Atención Virtual y Registro Médico)  
**Autores:** Duverley Rengifo, Jhon Keiler Moreno, Miguel Benítez, Sammy Ramirez  
**Docente:** Marta Lucia Jiménez Torres  
**Fecha:** 15/10/2026  

---

## 📌 1. Requisitos Funcionales (RF)

1. **RF-01: Autenticación y Selección de Rol**  
   El sistema permitirá a los usuarios seleccionar entre el rol de **Paciente** o **Médico** en la pantalla de inicio de sesión antes de ingresar credenciales.
2. **RF-02: Registro de Paciente**  
   Permitir a nuevos pacientes registrarse ingresando nombre completo, correo electrónico, documento de identidad y teléfono.
3. **RF-03: Agendamiento de Citas Médicas**  
   El paciente podrá programar citas seleccionando el tipo de consulta (General, Control Preventivo, Teleconsulta), fecha y hora disponible.
4. **RF-04: Módulo de Teleconsulta Virtual**  
   Permitir el acceso a una sala virtual de videollamada interactiva en tiempo real para consultas médicas a distancia.
5. **RF-05: Carga y Descarga de Resultados de Laboratorio**  
   El usuario podrá cargar y visualizar exámenes médicos en formato digital (PDF), con opción de descarga instantánea.
6. **RF-06: Consulta de Historia Clínica**  
   Visualización estructurada de datos del paciente, registro de vacunas, antecedentes médicos y controles preventivos.
7. **RF-07: Agenda Médica del Profesional**  
   El médico podrá revisar el listado de citas programadas con filtros por paciente, fecha y tipo de atención.
8. **RF-08: Gestión de Perfil de Usuario**  
   Módulo para actualizar información personal y de contacto de pacientes y médicos.
9. **RF-09: Centro de Ayuda y Preguntas Frecuentes (FAQ)**  
   Sección desplegable con respuestas a dudas habituales sobre navegación, citas y privacidad.
10. **RF-10: Recuperación de Contraseña**  
    Formulario para solicitar restablecimiento de acceso mediante correo electrónico.

---

## 🛡️ 2. Requisitos No Funcionales (RNF)

1. **RNF-01: Rendimiento y Optimización para Zonas Rurales**  
   La interfaz debe ser ligera (peso optimizado con arquitectura REST/JSON) para cargar correctamente en conexiones de bajo ancho de banda o redes móviles inestables.
2. **RNF-02: Seguridad y Confidencialidad (HTTPS / Cifrado)**  
   Todas las comunicaciones y archivos transmitidos deberán estar protegidos bajo protocolo **HTTPS con certificados SSL/TLS**, garantizando la privacidad médica.
3. **RNF-03: Control de Acceso Basado en Roles (RBAC)**  
   El sistema restringirá el acceso a las vistas de acuerdo al rol autenticado (Paciente solo ve su información; Médico accede a expedientes autorizados).
4. **RNF-04: Diseño Responsivo y Usabilidad**  
   La plataforma debe adaptarse fluidamente a pantallas de teléfonos móviles, tabletas y ordenadores de escritorio.
5. **RNF-05: Disponibilidad y Mantenibilidad**  
   Arquitectura modular de 3 capas (Frontend, Backend, Base de Datos) que permita escalabilidad y mantenimiento sin interrumpir la operación.
