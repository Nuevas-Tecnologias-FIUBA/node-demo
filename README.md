# Demo de Node + Express + Mongoose
## El proyecto contiene:
* Ejemplo de bloqueo con sleep (ver indexSleep.js). Al manejar Node.js un solo hilo, una operación que demora varios segundos bloquea todas las peticiones que le siguen.
* Ejemplo de API REST (ver index.js, routes/ y models/)
* Ejemplo de mapeo de Node.js a MongoDB con Mongoose (ver models/)

## Otros temas vistos:
### Diferencias entre MongoDB y bases de datos relacionales:
* Colecciones en lugar de tablas, documentos (JSON) en lugar de registros, atributos en lugar de columnas
* Las colecciones no tienen estructura a priori, la estructura es dada por las aplicaciones (es más dinámico)
* Lenguaje de consultas JSON en lugar de SQL
* No existen relaciones por sí mismas ("joins"), deben ser manejadas a nivel aplicación
* MongoDB no reemplaza a las bases de datos relacionales, sirve principalmente para casos de usos distintos donde la información no es estructurada o no se conoce la estructura a priori

### Características de NodeJS
* Entorno orientado a eventos utilizando Javascript como lenguaje + librerias de I/O
* Un solo hilo de ejecución para todas las peticiones en lugar de un hilo por petición
* Se maneja con callbacks, cada vez que se necesita utilizar I/O (disco, base de datos, WS, etc) se le pasa la función que debe invocar al volver de la llamada, durante ese tiempo el hilo no espera sino que pasa a responder el siguiente evento
* Para casos de uso donde el tiempo de CPU es despreciable frente al tiempo de I/O tiene una escalabilidad muy superior al modelo de servidor de aplicación tradicional (no se genera el costo asociado a mantener una gran cantidad de hilos)
* NodeJS fue el primer entorno con estas características que se hizo masivo, actualmente hay implementaciones en diversos lenguajes. Ver por ejemplo Eclipse Vert.x.

### Comandos básicos de MongoDB:
Son equivalentes a los de SQL:
* show dbs -> Mostrar bases
* use nuevastecnologias -> Usar una base existente
* db.teachers.insert({nombre: 'Pablo',apellido: 'Cosso'}) -> Insertar un documento en colección "teachers"
* db.teachers.find() -> Seleccionar todos los elementos de la colección "teachers"
* db.teachers.update({nombre:"Pablo"},{$set:{apellido:"Cosso1"}}) -> Actualizar un documento según un filtro
* db.teachers.find({nombre:"Pablo"}) -> Encontrar un documento en particular
* db.teachers.find({$where:"this.apellido.length<=2"}) -> Encontrar un documento con una condición compleja
* db.teachers.find({username:{$exists : true}})}} -> Encontrar un documento que tiene un atributo en particular
* db.teachers.remove({username: "pcosso"}) -> Eliminar un documento
* db.teachers.drop() -> Eliminar una colección
