#  Manual Técnico: Plataforma de Concurso Fotográfico

Este documento detalla la arquitectura y los procedimientos de despliegue y mantenimiento de la aplicación.

## 1. Tecnológia

La aplicación utiliza un enfoque de **Single Page Application (SPA)** con microservicios en el backend (Serverless).

* **Frontend:**
* **React 19:** Biblioteca principal para la interfaz de usuario.
* **TypeScript:** Lenguaje para asegurar la robustez del código y tipado estático.
* **Tailwind CSS:** Framework de utilidades para un diseño responsivo.
* **Lucide React:** Set de iconos vectoriales de alta calidad.
* **ESM.sh:** Gestión de dependencias mediante módulos ES nativos.


* **Backend & Servidor:**
* **Vercel:** Hosting y ejecución de *Serverless Functions* (Node.js).
* **MongoDB Atlas:** Base de datos NoSQL en la nube para almacenamiento persistente.


* **Servicios:**
* **Native Canvas API:** Procesamiento y compresión de imágenes en el cliente (navegador).

---

## 2. Arquitectura del Sistema

### 2.1. Estructura de Archivos

* **`/api`**: Endpoints de Node.js (Vercel Serverless Functions).
* **`/pages`**: Vistas y componentes principales de la aplicación.
* **`/contexts`**: Gestión del estado global (**React Context API**).
* **`/services`**: Capa de comunicación con la API y servicios externos.
* **`/lib`**: Instancia *singleton* del cliente de MongoDB.

### 2.2. Flujo de Datos

1. **Peticiones:** El cliente solicita datos mediante `fetch` a `/api`.
2. **Conexión:** Las funciones serverless conectan con **MongoDB Atlas** mediante una conexión optimizada.
3. **Distribución:** El estado global en `AppContext.tsx` distribuye la info a los componentes.
4. **Sincronización:** Sistema de **polling** (refresco cada 20s) para simular tiempo real.

---

## 3. Optimización de Imágenes

Para garantizar la escalabilidad y minimizar la transferencia, se implementa un pipeline en el lado del cliente (`Upload.tsx`):

* **Redimensionamiento:** Máximo de **1200px** en su lado más largo.
* **Conversión:** Transformación a formato **WebP** (o JPEG).
* **Compresión:** Factor de calidad de **0.7 (70%)**.
* **Impacto:** Una imagen de 10MB se reduce a **150KB-300KB** antes de enviarse en Base64.

---

## 4. Modelo de Datos (MongoDB)

* **`config`**: Parámetros del concurso (título, categorías, contraseñas).
* **`photos`**: Metadatos de imágenes (Base64, autor, puntuación).
* **`votes`**: Registro de votos para evitar duplicados (`photoId` + `deviceId`).
* **`users`**: Registro simple de participantes.
* **`secrets`**: Clave Maestra del Súper Administrador.

---

## 5. Guía de Despliegue

### 5.1. Repositorio en GitHub

1. Subir archivos del proyecto.
2. Incluir `.gitignore` para excluir `node_modules`.

### 5.2. Configuración en Vercel

Configurar **Environment Variables** en *Settings*:

* `MONGODB_URI`: String de conexión de Atlas.
* `MONGODB_DB`: Nombre de la base de datos.

### 5.3. Configuración de MongoDB Atlas

1. Crear cluster gratuito (**M0**).
2. **Network Access:** Permitir acceso desde cualquier IP (`0.0.0.0/0`) para IPs dinámicas de Vercel.
3. Crear usuario con permisos de lectura/escritura.

---

## 6. Seguridad y Permisos

* **Roles:** * *Súper Admin:* Control total vía Clave Maestra.
* *Admin de Concurso:* Control limitado a su `contestCode`.


* **Prevención de Fraude:** Uso de `deviceId` (huella digital del navegador) almacenado en `localStorage` para evitar votos múltiples por la misma obra.

---

## 7. Mantenimiento y Escalabilidad

* **Almacenamiento:** Actualmente usa Base64 por simplicidad. En proximas actualizaciones para producciones masivas, se  migrará a **S3 o Cloudinary** y guardar solo la URL en MongoDB.
* **Timeout:** La compresión en el cliente previene que las funciones de Vercel excedan el tiempo límite de ejecución al procesar archivos pesados.

---
