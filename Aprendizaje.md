# 📚 Ruta de Aprendizaje — To-Do React App

> Este archivo es tu guía personal de aprendizaje. Márcalo como `[x]` a medida que vayas completando cada paso. Vive en la raíz del proyecto para que siempre lo tengas a mano.

---

## 🗺️ ¿Dónde estás ahora?

Tu app actualmente tiene:

- ✅ Proyecto creado con **Vite + React**
- ✅ Estilos con **Tailwind CSS**
- ✅ Estructura de componentes: `AddTask.jsx`, `TaskItem.jsx`, `TaskList.jsx`
- ✅ Estado global con `useState` en `App.jsx`
- ✅ Funcionalidades: agregar, editar, completar y eliminar tareas
- ✅ Diseño responsive con modo oscuro
- ⏳ Persistencia con `localStorage` — **próximo paso**

---

## 📍 Etapa 1 — Persistencia con `localStorage` y `useEffect`

> **Concepto clave:** Efectos secundarios y sincronización con el navegador.

### ¿Qué vas a aprender?

- Qué es `useEffect` y cuándo usarlo
- Cómo leer y escribir datos en `localStorage`
- Por qué el estado de React se "olvida" al recargar la página
- La diferencia entre el primer render y los renders siguientes

### Tareas

- [ ] Leer sobre `useEffect` — qué es un "efecto secundario" en React
- [ ] Guardar las tareas en `localStorage` cada vez que cambien (con `useEffect`)
- [ ] Cargar las tareas desde `localStorage` al iniciar la app (valor inicial de `useState`)
- [ ] Verificar que las tareas persisten al recargar el navegador

### Código guía (pista sin spoilers):

```js
// Cargar al inicio
const [tasks, setTasks] = useState(() => {
  const saved = localStorage.getItem("tasks");
  return saved ? JSON.parse(saved) : [];
});

// Guardar cuando cambien
useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]); // <- el array de dependencias es clave
```

### ¿Cómo saber que lo lograste?

> Agrega una tarea → recarga la página → la tarea sigue ahí ✅

---

## 📍 Etapa 2 — Filtros (Todas / Activas / Completadas)

> **Concepto clave:** Estado derivado y renderizado condicional.

### ¿Qué vas a aprender?

- Cómo filtrar un array con `.filter()`
- Qué es el "estado derivado" (datos calculados a partir del estado, sin necesidad de guardarlo)
- Cómo resaltar el filtro activo con estilos condicionales

### Tareas

- [ ] Crear un estado `filter` con valores: `'all'`, `'active'`, `'completed'`
- [ ] Crear una variable `filteredTasks` usando `.filter()` según el filtro activo
- [ ] Renderizar `filteredTasks` en lugar de `tasks` directamente
- [ ] Agregar botones de filtro con estilo activo/inactivo
- [ ] Mostrar un contador: "X tareas pendientes"

### ¿Cómo saber que lo lograste?

> Puedes alternar entre los 3 filtros y la lista se actualiza en tiempo real ✅

---

## 📍 Etapa 3 — Custom Hook: `useLocalStorage`

> **Concepto clave:** Reutilización de lógica con hooks personalizados.

### ¿Qué vas a aprender?

- Qué son los custom hooks y por qué existen
- Cómo extraer lógica repetida fuera de un componente
- Las reglas de los hooks (solo en componentes o en otros hooks)

### Tareas

- [ ] Crear un archivo `src/hooks/useLocalStorage.js`
- [ ] El hook recibe una `key` y un `initialValue`
- [ ] Internamente usa `useState` + `useEffect` para sincronizar con `localStorage`
- [ ] Reemplazar la lógica de `localStorage` en `App.jsx` con tu nuevo hook

### Uso esperado:

```js
const [tasks, setTasks] = useLocalStorage("tasks", []);
// ¡Así de limpio queda App.jsx!
```

### ¿Cómo saber que lo lograste?

> `App.jsx` no menciona `localStorage` en ningún lugar ✅

---

## 📍 Etapa 4 — Fecha de vencimiento

> **Concepto clave:** Inputs controlados y manipulación de fechas.

### ¿Qué vas a aprender?

- Manejar inputs de tipo `date` en React
- Comparar fechas con `Date` en JavaScript
- Ordenar un array con `.sort()`
- Mostrar fechas en formato legible

### Tareas

- [ ] Agregar un campo `dueDate` al objeto de cada tarea
- [ ] Incluir un `<input type="date">` en `AddTask.jsx`
- [ ] Mostrar la fecha en `TaskItem.jsx`
- [ ] Resaltar en rojo las tareas cuya fecha ya venció
- [ ] (Opcional) Ordenar la lista para que las más urgentes aparezcan primero

### ¿Cómo saber que lo lograste?

> Una tarea con fecha pasada se muestra en rojo automáticamente ✅

---

## 📍 Etapa 5 — Drag & Drop para reordenar

> **Concepto clave:** Eventos del DOM y manipulación de arrays.

### ¿Qué vas a aprender?

- La API nativa de HTML5 para drag & drop (`draggable`, `onDragStart`, `onDrop`)
- O la librería `@dnd-kit/core` (más moderna y accesible)
- Cómo reordenar un array inmutablemente con `splice` o `filter + splice`

### Tareas

- [ ] Decidir: ¿API nativa o librería? (se recomienda `@dnd-kit` para producción)
- [ ] Hacer cada `TaskItem` arrastrable
- [ ] Actualizar el estado de `tasks` al soltar una tarea en nueva posición
- [ ] Agregar feedback visual mientras arrastras (opacidad, borde, etc.)

### ¿Cómo saber que lo lograste?

> Puedes arrastrar y soltar tareas para cambiar su orden ✅

---

## 📍 Etapa 6 — Desplegar la app

> **Concepto clave:** Build de producción y deployment.

### ¿Qué vas a aprender?

- Qué hace `npm run build` y qué es la carpeta `dist/`
- Cómo conectar tu repositorio de GitHub a Vercel o Netlify
- Cómo funciona el CI/CD automático (push → deploy automático)

### Tareas

- [ ] Ejecutar `npm run build` y revisar la carpeta `dist/`
- [ ] Crear cuenta en [Vercel](https://vercel.com) o [Netlify](https://netlify.com) (ambos gratis)
- [ ] Conectar el repositorio de GitHub
- [ ] Configurar el build command: `npm run build` y el output: `dist`
- [ ] Compartir la URL pública con alguien 🎉

### ¿Cómo saber que lo lograste?

> Tu app tiene una URL pública que cualquier persona puede abrir ✅

---

## 🚀 Ruta de aprendizaje sugerida (próximos pasos después de localStorage)

Una vez que domines `localStorage` y `useEffect`, te recomiendo seguir este orden para continuar creciendo como desarrollador React:

1. **Filtros (Todas / Activas / Completadas):** Aprenderás a crear estados derivados y lógica condicional de renderizado.
2. **Extraer lógica a custom hooks:** Crea tu propio hook `useLocalStorage` para reutilizar esta funcionalidad.
3. **Añadir fecha de vencimiento:** Manejarás inputs de tipo `date` y ordenarás listas.
4. **Drag & drop (reordenar):** Un gran reto que te introduce a manejadores de eventos más complejos del DOM.
5. **Desplegar la app:** Usa Vercel o Netlify (gratis y fácil con GitHub) para que el mundo vea tu trabajo.

---

## 🧠 Conceptos React que habrás dominado al terminar

| Concepto                | Etapa donde se aprende |
| ----------------------- | ---------------------- |
| `useState`              | Ya tienes base         |
| `useEffect`             | Etapa 1                |
| Renderizado condicional | Etapa 2                |
| Estado derivado         | Etapa 2                |
| Custom Hooks            | Etapa 3                |
| Inputs controlados      | Etapa 4                |
| Manipulación de arrays  | Etapa 4 y 5            |
| Eventos del DOM         | Etapa 5                |
| Build y deployment      | Etapa 6                |

---

## 💡 Tips generales

- **Haz un commit por cada etapa** que completes. Tu historial de Git contará tu historia de aprendizaje.
- **No copies y pegues código sin entenderlo.** Si algo no te queda claro, pregúntale a la IA qué hace cada línea.
- **Rompe cosas a propósito.** Borrar una dependencia de `useEffect` y ver qué pasa es la mejor forma de entenderla.
- **El error en consola es tu amigo.** Aprende a leerlo antes de pedir ayuda.

---

_Última actualización: Junio 2026_
