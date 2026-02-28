# Elementos básicos de un simulador de eventos discretos 

Un simulador de eventos discretos es una herramienta que permite modelar y analizar sistemas cuyo estado cambia en momentos específicos del tiempo, en lugar de de manera continua. Para que el simulador funcione correctamente, se requiere un conjunto de elementos básicos, que incluyen la representación del sistema mediante un modelo, la definición de eventos, la gestión del tiempo y el registro de resultados. Estos elementos permiten ejecutar experimentos, estudiar el comportamiento del sistema y tomar decisiones basadas en datos simulados, sin afectar la operación real del sistema.

- **Tiempo de simulación**  
  Es el valor del tiempo que el simulador puede avanzar a una velocidad superior a la habitual de un reloj común, evolucionando así el estado de un sistema de forma acelerada.

- **Evento**  
  Un evento es un suceso que hace cambiar las variables de estado del sistema. Durante el procesamiento de un evento el tiempo de simulación permanece fijo. Un evento pertenece a una entidad, o actor en el sistema, y normalmente solo cambiará atributos de esta, dejando invariante el resto del sistema.

- **Entidad**  
  El sistema a simular se modela sobre la base de entidades o actores que representan en su agregado al sistema compuesto. El estado del sistema se entiende entonces como el agregado de los estados que lo conforman.

- **Actividad**  
  Secuencia de eventos pertenecientes a una entidad que cierran un ciclo funcional. A diferencia de un evento, que se ejecuta a tiempo de simulación constante, una actividad se desarrolla dentro de un intervalo de tiempo de simulación no puntual.

- **Simulación en tiempo acelerado**  
  Se da cuando el avance del tiempo de simulación es mayor de un segundo por cada segundo de tiempo real.

- **Simulación en tiempo real**  
  Se da cuando el avance del tiempo de simulación exactamente de un segundo por cada segundo de tiempo real.