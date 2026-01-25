
> **DOCUMENTACIÓN TÉCNICA: CONCURSO FOTOGRÁFICO**

---

## 1.  Resumen 
**Concurso Fotográfico** es una Single Page Application (SPA)  construida sobre el stack **MERN** (MongoDB, Express/Vercel, React, Node). La plataforma gestiona de forma asíncrona la captura de imágenes, el procesamiento en el lado del cliente, el almacenamiento en la nube y la sincronización de datos en tiempo real.

---

## 2.  Tecnológia

### 2.1. Frontend (Client Side)
* **Framework:** React 19.0.
* **Routing:** React Router DOM v7 (HashRouter para compatibilidad con hosting estático).
* **Estilos:** Tailwind CSS (Arquitectura basada en utilidades).
* **Iconografía:** Lucide React.
* **Estado Global:** React Context API (`AppContext`).
* **Persistencia Local:** Browser LocalStorage.

### 2.2. Backend (Serverless Layer)
* **Entorno de Ejecución:** Vercel Serverless Functions (Node.js).
* **API:** Arquitectura RESTful sobre endpoints individuales en `/api`.
* **Drivers:** MongoDB Native Driver para Node.js.

### 2.3. Infraestructura y Almacenamiento
* **Base de Datos:** MongoDB Atlas (NoSQL).
* **Gestión de Medios:** Cloudinary API v2.
* **Hosting:** Vercel Edge Network.

---

## 3. 📊 Arquitectura de Datos (Modelos NoSQL)

### 3.1. Colección: `config`
Almacena la configuración dinámica de cada concurso instanciado.
```typescript
{
  contestCode: string;         // PK - Identificador único del concurso
  title: string;               // Título visual
  subtitle: string;            // Subtítulo visual
  showAuthors: boolean;        // Flag de privacidad
  maxPhotosPerGallery: number; // Límite de negocio
  galleries: Array<{name: string, visible: boolean}>;
  adminPassword: string;       // Credencial de acceso
}

```

### 3.2. Colección: `photos`

Metadatos de las capturas alojadas en la nube.

```typescript
{
  contestCode: string;
  deviceId: string;            // ID de sesión persistente
  userName: string;
  gallery: string;
  cloudinaryUrl: string;       // URL de entrega (CDN)
  cloudinaryPublicId: string;   // ID para operaciones de borrado
  rating: number;              // Media calculada (Float)
  voteCount: number;           // Denominador para rating
}

```

---

## 4. Procesamiento de Imágenes

El flujo de carga está diseñado para minimizar la latencia y el consumo de ancho de banda:

1. **Captura:** El usuario selecciona un archivo mediante `HTMLInputElement`.
2. **Optimización (Canvas API):** La función `compressForUpload` redimensiona la imagen a un máximo de **1200px** y la convierte a **WebP** (calidad 80%).
3. **Upload Directo:** El cliente envía el blob optimizado directamente a **Cloudinary** mediante un `upload_preset` *unsigned*.
4. **Persistencia:** Tras el éxito, el cliente registra los metadatos en MongoDB vía `POST` a `/api/photos`.

---

## 5. Lógica 

### 5.1. Prevención de Race Conditions

El cálculo del rating se realiza de forma atómica en el endpoint `/api/votes.ts`.

* **Algoritmo:** `(Σ votos actuales + nuevo voto) / (count + 1)`.
* **Validación:** Se verifica el par `photoId + deviceId` para evitar duplicados.

### 5.2. Ranking Dinámico

Computado en el frontend mediante `useMemo`. Prioridad:

1. **Average Rating** (Descendente).
2. **Vote Count** (Descendente - Criterio de desempate).

---

## 6.  Seguridad y Roles

* **Participante:** Acceso mediante `contestCode`. Identificado por `deviceId`.
* **Admin de Concurso:** Acceso mediante `adminPassword` específico.
* **Super Admin:** Acceso global mediante **Master Password** (Colección `secrets`). El sistema permite la "Elevación de Privilegios" si se introduce esta clave en el campo de identificación.

---

## 7. Variables de Entorno

| Variable | Descripción |
| --- | --- |
| `MONGODB_URI` | Cadena de conexión de MongoDB Atlas. |
| `MONGODB_DB` | Nombre de la base de datos. |
| `CLOUDINARY_URL` | Credenciales completas para el SDK de Node.js. |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | ID público de la cuenta Cloudinary. |
| `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET` | Preset configurado para subidas directas. |

---

## 8. Mantenimiento y Operaciones

* **Borrado Sincronizado:** La API ejecuta una purga en dos pasos: primero en el CDN de Cloudinary (`destroy`) y luego en la base de datos (`deleteOne`).
* **Sincronización:** El sistema implementa un **polling cada 20 segundos** para mantener la integridad de los rankings sin recarga de página.

---
Desarrollado por Gabriel Santos Grillo

```

