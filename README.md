# Website del [Proyecto Chaucha](https://www.chaucha.cl/)

El sitio web consta de dos ramas. La primera `master` contiene
el código fuente, mientras que la rama `gh-pages` contiene
el compilado accesible desde la web.

Se ha utilizado el *CMS Lektor* para crear el sitio web
[https://www.getlektor.com/](https://www.getlektor.com/).

## Traducciones

Las traducciones existen en dos tipos de archivo.
los archivos `.ini` almacenados en `databags/` y los archivos `.lr`
almacenados en `content`.

Los archivos `ini` tienen textos utilizados en la maquetación del sitio,como menús u otros textos pequeños.

Mientras que los archivos `.lr` tienen el contenido de la página que están asociados.

Para poder agregar un nuevo idioma se debe editar el archivo
`Chaucha.lektorproject` y añadirlo de forma similar al idioma inglés.

El formato es `[alternatives.<lang>]` donde `<lang>` será el código del idioma utilizado para identificarlo en el sistema.

### Ejemplos

```ini
[alternatives.en]
name = English
url_prefix = /en/
locale = en_US
```

Luego podrá ser utilizado en los archivos `.ini` anteponiendo el código del idioma.

```ini
[es]
url = 'URL'
portCPU = 'Puerto CPU/GPU'
portASIC = 'Puerto ASIC'
algo = 'Algoritmo'
sourceCode = 'Código Fuente'
basedOn = 'Basado en el código fuente de'
blockCreation = 'Creación de %s bloque por minuto'
reward = 'Recompensa de %s CHA por bloque'
max = 'Límite máximo de %s CHA'
whatIs = '¿Qué es el Proyecto Chaucha?'

[en]
url = 'URL'
portCPU = 'CPU/GPU Port'
portASIC = 'ASIC Port'
algo = 'Algorithm'
sourceCode = 'Source Code'
basedOn = 'Built with the same source code of'
blockCreation = '%s Block created per minute'
reward = '%s CHA reward per block'
max = '%s CHA Max'
whatIs = 'What is the Chaucha Project?'
```

Para traducir los archivos `.lr` solamente se debe crear un nuevo archivo llamado `contents+lang.lr` donde `lang` corresponde al código del idioma

- `contents.lr`
- `contents+en.lr`

## Ejecución y Compilación

### Ejecución

Para poder desarrollar navegar hasta el directorio `src/` y luego utilizar el comando `lektor server`. Esto permitirá ejecutar un servidor en *localhost* y realizar pruebas.

### Compilación

Se ha proporcionado un script en `src/build.sh` donde ejecuta el comando de compilación.

`lektor build --output-path ../../gh-pages`

El sistema asume que la organización del directorio es la siguiente:

```txt
chaucha.cl/
-- web/
---- README.md
---- src/
-- gh-pages/
---- index.html
```

Al ejecutar el comando `build.sh` se remplazará el contenido de `gh-pages` y facilitará la actualización utilizando el comando `git push origin gh-pages`.

### Docker

Se ha utilizado [Docker Compose](https://docs.docker.com/compose/install/#install-compose) para poder
crear un ambiente de desarrollo.

#### Instalación y Ejecución

```sh
docker-compose build

docker-compose up -d
```

Luego podrá ser visto los cambios en `localhost:5000`.