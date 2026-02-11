#  Manual Técnico – GA-Archivos (v1.0)

---

## 1️ Tecnología

La aplicación está construida bajo una arquitectura **Serverless** y **Client-Side Only**, lo que significa que el **100% del procesamiento ocurre en el navegador del usuario**.

###  Tecnologías utilizadas

- **Lenguaje:** TypeScript  
  (Tipado fuerte para reducir errores en tiempo de compilación)

- **Framework:** React 19  
  (Uso de Hooks para gestión de estado y efectos)

- **Estilos:** Tailwind CSS  
  (Diseño responsivo basado en utilidades CSS)

- **Iconografía:** Lucide React  
  (Iconos vectoriales ligeros y modernos)

- **Módulo de carga:** ESM (ECMAScript Modules)  
  (Uso de `importmap` para cargar dependencias desde CDN sin proceso de build)

---

## 2️ El Corazón Técnico: File System Access API

A diferencia de aplicaciones web tradicionales que solo permiten subir archivos (upload),  
GA-Archivos utiliza la **File System Access API**, permitiendo interacción directa con el sistema de archivos local.

###  Capacidades clave

- **Directorio Persistente**  
  Uso de `FileSystemDirectoryHandle` para mantener referencia a carpetas locales.

- **Lectura Iterativa**  
  Implementación de `for await...of` sobre el handle para escanear archivos sin bloquear el hilo principal.

- **Escritura Directa**  
  - Creación de archivos con `getFileHandle({ create: true })`  
  - Escritura mediante `FileSystemWritableFileStream`  
  - Manipulación directa de datos binarios

---

## 3️ Arquitectura de Archivos

###  Descripción de cada archivo

- **index.html**  
  Punto de entrada. Configura `importmap` para cargar dependencias desde CDN (esm.sh) sin build local.

- **index.tsx**  
  Montaje de la aplicación React en el DOM.

- **App.tsx**  
  Componente principal. Contiene:
  - Lógica de negocio
  - Gestión de estados
  - Interfaz de usuario

- **types.ts**  
  Definición de interfaces y tipos globales:
  - `FileItem`
  - `GlobalConfig`
  - `FilterState`

- **utils/fileUtils.ts**  
  Funciones puras para:
  - Manipulación de nombres y extensiones
  - Formateo de tamaños en bytes

---

## 4️ Lógica de Procesamiento

El flujo de datos sigue el siguiente orden:

### 1. Escaneo

Al seleccionar la carpeta origen:

- Se genera un array de objetos `FileItem`.
- Cada objeto almacena el `FileSystemFileHandle` original.
- Esto permite acceder al contenido posteriormente sin solicitar permisos nuevamente.

---

### 2. Filtrado (Memoización)

Uso de `useMemo` para:

- Filtrar
- Ordenar
- Limitar resultados

 El filtrado solo se recalcula si:
- Cambia la lista de archivos
- Cambian los parámetros de filtrado

Esto optimiza significativamente el rendimiento.

---

### 3. Generación de Nombres

La función `getFinalName` combina:

- Configuración global (Prefijos / Sufijos)
- Lógica de Buscar y Reemplazar
- Nombres personalizados definidos por el usuario
- Listas pegadas desde el portapapeles

---

### 4. Ejecución Batch

Proceso de renombrado masivo:

1. Se itera sobre la lista filtrada.
2. Se lee el archivo original como objeto `File`.
3. Se crea un nuevo archivo en el directorio destino.
4. Se escribe el contenido utilizando un `WritableStream`.

---

## 5️ Seguridad y Privacidad

La privacidad está garantizada mediante **aislamiento total de datos**.

### Principios aplicados

- No existen llamadas `fetch` ni `POST` hacia servidores externos  
  (excepto para carga inicial de librerías desde CDN)

- El acceso a archivos requiere un **gesto explícito del usuario**  
  (clic en botón, según políticas de seguridad del navegador)

- Uso de `crypto.randomUUID()` para generar identificadores únicos  
  evitando colisiones de estado en la interfaz

---

## 6️ Limitaciones Técnicas (Sandboxing)

La aplicación está sujeta al sandbox del navegador.

### Sistemas Móviles

- Android e iOS no implementan `showDirectoryPicker`
- El sistema detecta esta ausencia
- Se lanza una excepción controlada mostrando aviso de incompatibilidad

### Persistencia de Permisos

- Los permisos de acceso a archivos caducan al cerrar la pestaña
- Esto ocurre por razones de seguridad del navegador

---

## Autor

**Gabriel Santos Grillo**

Portafolio:  
https://proyectosgabriel.vercel.app
