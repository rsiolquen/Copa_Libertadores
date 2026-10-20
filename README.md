# API REST Copa Libertadores

API creada con Node.js, Express y CORS para consultar clubes de la Copa Libertadores, sus países y los años en que ganaron títulos.

## Requisitos

- Node.js 20 o superior.
- Yarn.

## Instalación y ejecución

Desde la carpeta del proyecto, instala las dependencias:

```bash
yarn
```

Inicia el servidor:

```bash
yarn dev
```

La API estará disponible en http://localhost:3000.

El servidor se reinicia automáticamente al guardar cambios gracias a `node --watch`.

## Consultas disponibles

Todas las consultas usan el método GET.

| Ruta                     | Descripción                                         |
| ------------------------ | --------------------------------------------------- |
| `/api/clubes`            | Devuelve los 16 clubes.                             |
| `/api/clubes/:id`        | Busca un club por su ID.                            |
| `/api/clubes?pais=Chile` | Devuelve los clubes del país indicado.              |
| `/api/titulos/:club`     | Devuelve los años de los títulos del club indicado. |

Ejemplos:

- `/api/clubes/9`
- `/api/clubes?pais=Chile`
- `/api/titulos/colo-colo`

Las búsquedas por nombre de país y club no distinguen mayúsculas y minúsculas. Las tildes y la ñ sí cuentan.

## Respuestas

- **200:** consulta exitosa, incluso si el club tiene una lista de títulos vacía (`[]`).
- **404:** el club o el país solicitado no existe. El error se devuelve como JSON.

## Video de demostración

(https://youtu.be/xb5ZwlhkU4o)