# ¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?
  - Sprint Planning: reunirse al principio de cada Sprint para inspeccionar el Backlog del producto y desarrollar los items de este mismo. Estos items son los que compondrán el Sprint Backlog. El Spint planning se divide en dos partes, la primera para el *Qué* se va a hacer y la segunda para el *Cómo*.
  - Daily Scrum (la daily): reunirse diariamente durante 15 minutos  para hablar sobre lo realizado para cumplir el sprint goal, lo que se va a realizar y si algún integrante del Development Team tiene algún impedimento que le impide entregar.
  - Sprint Review: al final del Sprint, se reunen el Development Team y el product owner con los stakeholders para presentarles el incremento terminado para su inspección y adaptación necesaria.
  - Sprint Retrospective: después del Sprint Review se hace la retrospectiva. Se reflexiona sobre el último Sprint e identifican posibles mejoras para el próximo. Normalmente se basa en cinco fases: 
    1. Preparar el ambiente: pequeño ejercicio para romper el hielo.
    2. Recolectar información: se utilizan actividades para intentar construir una imagen de lo que ha sido el último Sprint.
    3. Generación de ideas: se intenta generar ideas para identificar acciones que ayuden a mejorar el rendimiento del equipo durante el siguiente Sprint.
    4. Decidir qué hacer: se proponen acciones que el equipo pueda implementar en el próximo Sprint basados en las ideas generadas.
    5. Cierre: una evaluación de la propia retrospectiva junto a un recordatorio de la mejora continua.
  - Sprint Grooming o Refinement: se hace el refinamiento del Backlog del producto para asegurar que siempre esté preparado. Se estima su duración en 2 horas, se da con todo el equipo Scrum y cualquier recurso adicional que considere el Product Owner que pueda contribuir a aclarar el requerimiento. Es necesario que asistan aquellos cuya presencia sea estrictamente relevante y conocer las historias de usuario o requerimientos a ser tratados

# ¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar
  Es una guía visual que representa la estructura esquelética de un sitio web. Se utilizan con el propósito de organizar los elementos para que lleven a cabo mejor su itención particular. El Wireframe representa el diseño de la página o la disposición de los contenidos del sitio web, incluyendo elementos de la interfaz y los sistemas de navegación y cómo funcionan en conjunto.
  Una herramienta para hacer Wireframes es Figma.

# Explicar la diferencia entre var, let y const. Y dar un ejemplo en qué caso se utilizará.
  Var es una variable con local scope, let es una variable con block scope y const es una variable de solo lectura que se guarda en un punto de la memoria y por esto no puede ser sobreescrita o reasignada. 

  ```javascript
  console.log(hola);
  var hola = "Hello World";
  // por hoisting se imprime el valor de la variable hola aunque se declare después
  
  let i = 6;
  for(let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
  // se imprime la variable i hasta el número 4, sale del ciclo for e imprime la variable i con el valor 6, esto por el scope que tiene la variable let

  const hola = "Hello World";
  hola = "Hola Mudo";
  console.log(hola);
  // presenta un error porque la variable no puede ser reescrita al ser definida como constante
  ```

# ¿Cuáles son los tres comandos que se pueden utilizar para crear una nueva rama llamada rama-1?
  1. git branch rama-1
  2. git checkout -b rama-1
  3. git switch -c rama-1

# Explicar la diferencia entre git merge y git rebase
  Git merge fusiona las ramas indicadas uniendo los historiales de las dos ramas mientras que git rebase fusiona las ramas indicadas reescribiendo el historial del proyecto.

# ¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull?
  El pull request es una petición que se hace al propietario del repositorio original para incorporar los commits del repositorio "forkeado". Git pull en cambio se utiliza para actualizar la versión local del repositorio desde otro repositorio remoto.

# ¿Qué es el Virtual DOM?
  Es una representación del DOM (Document Object Model) guardada en memoria. Este interpreta los cambios en la aplicación web y calcula la manera más eficiente de actualizar el DOM para que renderice la menor cantidad de cambios posibles.

# CodePem
  [Codepen](https://codepen.io/daniel-m-v/pen/wvXVbRJ)

