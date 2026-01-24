# Documentación Técnica: Ga-Optimo 

**Arquitectura de Compresión Client-Side 100% Local** **Desarrollado por:** Gabriel Santos Grillo

## 1. Resumen de Arquitectura

Ga-Optimo esta construida con **React 19** y **TypeScript**. La principal característica técnica es su arquitectura **"Offline"**: la lógica de procesamiento de datos ocurre exclusivamente en el hilo principal del navegador (y/o Canvas API), eliminando la necesidad de APIs externas, servidores de backend o servicios de procesamiento en la nube.

### Tecnológia

* **Framework:** React 19 
* **Lenguaje:** TypeScript 
* **Estilos:** Tailwind CSS 
* **Iconografía:** Lucide React.
* **Bundler:** ESM Modules via esm.sh.

## 2. Implementación del Motor de Compresión

La lógica reside en `utils/imageUtils.ts` y utiliza la **Canvas API** nativa de HTML5.

### Flujo de Datos:

1. **Entrada:** El archivo se lee mediante `FileReader.readAsDataURL` para generar un buffer de visualización.
2. **Renderizado:** Se instancia un objeto `HTMLImageElement`.
3. **Procesamiento:**
* Se crea un `HTMLCanvasElement` dinámico.
* Se calculan las nuevas dimensiones basadas en el factor de escala (`settings.scale`).
* Se dibuja la imagen en el contexto 2D (`drawImage`).


4. **Codificación (Encoding):**
* Se utiliza `canvas.toBlob(callback, format, quality)`.
* **Formatos soportados:** `image/webp` (pérdida/sin pérdida), `image/jpeg` (con pérdida), `image/png` (sin pérdida).



## 3. Manejo de Archivos 

Para mejorar la experiencia de usuario en sistemas de escritorio, la aplicación implementa la **File System Access API** (disponible en entornos seguros HTTPS y navegadores Chromium).

* **Guardado Individual:** Utiliza `window.showSaveFilePicker` para permitir al usuario definir la ruta y el nombre antes de escribir el Blob.
* **Procesamiento por Lotes:** Utiliza `window.showDirectoryPicker` para obtener permisos de escritura en una carpeta completa. Esto permite guardar múltiples imágenes optimizadas sin disparar múltiples diálogos de descarga individuales.

```typescript
// Fragmento lógico de escritura masiva
const dirHandle = await window.showDirectoryPicker();
const fileHandle = await dirHandle.getFileHandle(fileName, { create: true });
const writable = await fileHandle.createWritable();
await writable.write(compressedBlob);
await writable.close();

```

## 4. Seguridad y Privacidad 

La aplicación está diseñada para cumplir con normativas de privacidad estrictas:

* **No API Keys:** 
* **Cero Llamadas Externas:** No se realizan peticiones  a dominios de terceros para procesar datos.
* **Aislamiento de Datos:** Las imágenes residen en el estado de React (`useState`) como `URL objects` temporales y se liberan mediante `URL.revokeObjectURL` para prevenir fugas de memoria (Memory Leaks).

## 5. Estructura de Tipos (TypeScript)

El sistema de tipos asegura la integridad de los ajustes de compresión:

```typescript
export type OutputFormat = 'image/jpeg' | 'image/webp' | 'image/png';

export interface CompressionSettings {
  quality: number; // Rango 0.1 a 1.0
  scale: number;   // Porcentaje 10-100
  format: OutputFormat;
  prefix: string;
  suffix: string;
}

```

## 6. Consideraciones de Despliegue (Vercel/Static)

Ga-Optimo puede desplegarse como un sitio estático puro.

* **Sin Variables de Entorno:** No requiere configuración de `ENV` en el panel de Vercel.
* **Performance:** El uso de `React.memo` y `useCallback` en los paneles de ajustes minimiza los re-renders durante el desplazamiento de los sliders de calidad.

## 7. Mantenimiento

Para actualizar dependencias, se utiliza el sistema de importación basado en ESM en el archivo `index.html`. No requiere una fase de compilación (Build step) compleja si se mantiene la arquitectura de módulos actuales.

---

**¿Te gustaría que añadiera una sección sobre cómo manejar los límites de memoria del navegador al procesar archivos muy grandes?**
