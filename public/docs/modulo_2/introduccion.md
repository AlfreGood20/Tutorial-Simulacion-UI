# Numeros pseudoaletorios
En áreas como la simulación y la programación, es necesario utilizar números aleatorios para representar situaciones reales. Sin embargo, las computadoras no pueden generarlos de forma completamente aleatoria, ya que siguen instrucciones definidas. Por ello, se desarrollaron los números pseudoaleatorios, que son generados mediante métodos matemáticos y permiten simular la aleatoriedad de forma eficiente.

## ¿Qué son los numero pseudoaletorios?
Un número pseudoaleatorio es un número generado en un proceso que parece producir números al azar, pero no lo hace realmente. Las secuencias de números pseudoaleatorios no muestran ningún patrón o regularidad aparente desde un punto de vista estadístico, a pesar de haber sido generadas por un algoritmo completamente determinista, en el que las mismas condiciones iniciales producen siempre el mismo resultado.

## ¿Comó se generan?
Inician con un valor **semilla (seed)** para producir una secuencia de números con apariencia aleatoria, pero predecible. A partir de la semilla, el algoritmo aplica transformaciones matemáticas para generar un número y usarlo como base para el siguiente, buscando un largo periodo antes de repetirse.

- **La Semilla (Seed):** Es el valor inicial. Si se usa la misma semilla, el algoritmo producirá exactamente la misma secuencia.

- **Algoritmos Determinísticos:** Utilizan funciones de inicialización, transición y salida para transformar datos (ej. método de la parte media del cuadrado, congruencial lineal).

## Clasificación
En simulación, los números pseudoaleatorios (PRN) se clasifican principalmente según el tipo de algoritmo que los genera y su aplicación.

<div style='display: flex; justify-content: center;'>
    <img src='/imgs/image.png' style='width:auto; height:auto;'/>
</div>

### Clasificados por:
![clasificacion](/imgs/clasificacionAlgorimos.png)