# Numeros pseudoaletorios
En áreas como la simulación y la programación, es necesario utilizar números aleatorios para representar situaciones reales. Sin embargo, las computadoras no pueden generarlos de forma completamente aleatoria, ya que siguen instrucciones definidas. Por ello, se desarrollaron los números pseudoaleatorios, que son generados mediante métodos matemáticos y permiten simular la aleatoriedad de forma eficiente.

## ¿Qué son los numero pseudoaletorios?
Un número pseudoaleatorio es un número generado en un proceso que parece producir números al azar, pero no lo hace realmente. Las secuencias de números pseudoaleatorios no muestran ningún patrón o regularidad aparente desde un punto de vista estadístico, a pesar de haber sido generadas por un algoritmo completamente determinista, en el que las mismas condiciones iniciales producen siempre el mismo resultado.

## ¿Comó se generan?
Inician con un valor **semilla (seed)** para producir una secuencia de números con apariencia aleatoria, pero predecible. A partir de la semilla, el algoritmo aplica transformaciones matemáticas para generar un número y usarlo como base para el siguiente, buscando un largo periodo antes de repetirse.

- **La Semilla (Seed):** Es el valor inicial. Si se usa la misma semilla, el algoritmo producirá exactamente la misma secuencia.

- **Algoritmos Determinísticos:** Utilizan funciones de inicialización, transición y salida para transformar datos (ej. método de la parte media del cuadrado, congruencial lineal).

## Características de los números pseudoaleatorios

Para que una secuencia sea considerada buena debe cumplir:

- Uniformidad: los números deben distribuirse de forma uniforme en el intervalo.

- Independencia: cada número generado no debe depender del anterior.

- Periodo largo: la secuencia no debe repetirse rápidamente.

- Reproducibilidad: usando la misma semilla se obtiene la misma secuencia.

## Clasificacion

- **No congruencial:**
    - Los algoritmos no congruenciales pertenecen a la familia de los Generadores de Números Pseudoaleatorios (PRNG). A diferencia de los métodos congruenciales, que se basan en la aritmética modular (residuos de divisiones), los no congruenciales utilizan operaciones de manipulación de bits o dígitos (extracción, desplazamiento o combinación) para romper la correlación entre números sucesivos.

    - La premisa de estos algoritmos es la extracción de la parte central de un resultado aritmético. Se asume que, en un producto o una potencia, los dígitos de los extremos (los más significativos y los menos significativos) presentan patrones o sesgos, mientras que los dígitos centrales tienden a comportarse de manera más uniforme y "caótica".

    - **Clasificación Principal**
        - **- Cuadrados Medios (Mid-Square):** El precursor, diseñado por John von Neumann en 1946. Su teoría se basa en que elevar un número al cuadrado expande su variabilidad, y los dígitos centrales representan la zona de mayor entropía.

        - **- Productos Medios (Mid-Product):** Una variante que busca mayor complejidad al multiplicar dos semillas distintas ($X_{i}$ y $X_{i-1}$), intentando evitar la convergencia rápida a cero que sufre el método de cuadrados medios.

        - **-Multiplicador Constante:** Utiliza una constante fija ($C$) multiplicada por una semilla variable. Teóricamente, si $C$ es un número con propiedades específicas (como ser un número primo o tener una distribución de dígitos balanceada), el periodo del generador se extiende.

- **Congruencial**
    - Los generadores congruenciales son algoritmos deterministas que producen una secuencia de números que simulan las propiedades estadísticas de una distribución uniforme. Su fundamento reside en la Teoría de Números, específicamente en la aritmética de residuos.

    - Dentro del estudio de la generación de números pseudoaleatorios, la clasificación fundamental se divide según la naturaleza de la función de transición utilizada para transformar una semilla en el siguiente número de la secuencia.

        - **No lineales**
            - Son aquellos cuya relación de recurrencia se basa en una función polinómica de primer grado. Es la familia más utilizada en la ingeniería debido a su alta eficiencia y facilidad de implementación.

            - **- Fundamento Matemático:** Se definen por la estructura $f(x) = (ax + c) \pmod{m}$. Al ser una función lineal, el crecimiento del valor antes del módulo es constante y proporcional.

            - **- Comportamiento Geométrico:** Debido a su linealidad, si se analizan los números generados en dimensiones superiores (duplas o ternas), estos tienden a alinearse en hiperplanos. Este fenómeno se conoce como el Efecto Marsaglia.

        - **Lineales**
            - Estos algoritmos fueron diseñados para eliminar los patrones geométricos (las "líneas" o planos) que aparecen en los métodos lineales. Utilizan funciones matemáticas que no crecen de manera proporcional.

            - **- Fundamento Matemático:** Utilizan operaciones de grado superior (como el cuadrado de la semilla), inversiones multiplicativas o manipulaciones lógicas de bits que no siguen una línea recta en el plano cartesiano.

            - **- Comportamiento Geométrico:** Rompen la estructura de hiperplanos, logrando que los puntos se dispersen de forma mucho más errática y uniforme, lo cual es deseable para simulaciones de alta complejidad.

La generación de números pseudoaleatorios en ingeniería se basa en algoritmos matemáticos que, aunque son deterministas y repetibles mediante una semilla, logran imitar la aleatoriedad necesaria para modelar sistemas reales. 

Estos se dividen principalmente en métodos lineales, que son rápidos y predecibles gracias a su estructura de primer grado y aritmética modular, y métodos no lineales, que utilizan operaciones más complejas como potencias o inversiones para eliminar patrones geométricos y ofrecer una mayor calidad estadística.