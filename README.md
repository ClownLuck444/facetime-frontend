# 📱 Frontend con Ionic para Registro y Autenticación Facial

Este proyecto es una aplicación móvil desarrollada con **Ionic + Angular**, diseñada para interactuar con un backend en Flask y permitir el **registro de usuarios**, **inicio de sesión** y **verificación mediante reconocimiento facial**.

---

## 📌 Descripción

La aplicación ofrece una interfaz amigable que permite a los usuarios registrarse, autenticarse con usuario/contraseña o mediante una imagen de su rostro. Está pensada para usarse en conjunto con un backend que procese el reconocimiento facial y gestione la autenticación.

Ideal para sistemas de control de acceso, asistencia de personal o apps de seguridad.

---

## 🚀 Funcionalidades

- 📋 Registro de usuario con datos personales
- 🔐 Inicio de sesión con credenciales
- 📸 Captura de imagen facial desde cámara o galería
- 📤 Envío de imagen al backend para validación
- 🔁 Navegación por rutas protegidas si se autentica con éxito
- ⚙️ Configurable para adaptarse a cualquier backend REST

---

## 🛠️ Tecnologías

- Ionic Framework 7
- Angular 15+
- Capacitor (para cámara nativa)
- HttpClient para llamadas a API Flask
- HTML5 + SCSS

---

## 📦 Instalación y Ejecución

### 1. Clona el repositorio

git clone https://github.com/ClownLuck444/facetime-frontend.git
cd facetime-frontend

### 2. Instala las dependencias
npm install
### 3. Ejecuta la aplicación en el navegador
ionic serve

