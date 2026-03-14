# Algoritmo productos medios
La mecánica de generación de números pseudoaleatorios de este algoritmo no congruencial es similar a la del algoritmo de cuadrados medios. La diferencia entre ambos radica en que el algoritmo de productos medios requiere dos semillas, ambas con D dígitos; además, en lugar de elevarlas al cuadrado, las semillas se multiplican y del producto se seleccionan los D dígitos del centro, los cuales formarán el primer número pseudoaleatorio r, = 0. D dígitos.

## Pasos

1. **1.Seleccionar semilla** $$x_0$$ donde (D > 3).
2. **2.Seleccionar segunda semilla** $$x_1$$ donde (D > 3)
3. **3.Multiplicar** $$x_0 * x_1$$ y aplicar la regla de los ceros a la izquieda.
4. 4.De esa multipliacacion tomar los cuatros digitos centrales para obtener $$x_n+1$$.
5. 5.Obtener $$r_i = 0.x_n+1$$ 
6. 6.El nuevo numero pseudoaletorio sera $$x_2 = x_n+1$$
7. 7.Y **repetir** de nuevo los pasos.

## Ejemplo:

- Semilla $$x_0 = 5015$$
- Semilla $$x_1 = 5735$$

**Nos piden una iteraciones de $$n = 5$$**

### Iteracion 1
- Multiplicamos $$X_0 * X_1 = 28756010$$
- Agregamos ceros izquierda (en este caso no por que cumple con los D > 7)
- Seleccionamos los digitos de medio $$X_n+1 = 7560$$
- Obtenemos $$r_i = 0.7560$$

### Iteracion 2
- Ahora $$x_1 = 5735$$ y $$x_2 = 7560$$
- $$x_1 * x_2 = 43349040
- $$x_n+1 = 3490$$
- $$r_i = 0.3490$$

### Iteracion 3
- $$X_2 = 7560$$ y $$x_3 = 3490$$
- $$x_2 * x_3 =26384400$$
- $$x_n+1 = 3844$$
- $$r_i=0.3844$$

### Iteracion 4
 - $$X_3 = 3490$$ y $$x_4 = 3844$$
 - $$x_3 * x_4 = 13415560$$
 - $$x_n+1 = 4155$$
 - $$r_i = 0.4155$$

### Iteracion 5
 - $$X_4 = 3844$$ y $$x_5 = 4155$$
 - $$x_4 * x_5 = 15971820$$
 - $$x_n+1 = 9718$$
 - $$r_i = 0.9718$$


<div style="display: flex; justify-content: center;">


| $$n$$ | $$X_0$$  | $$X_n$$  | $$X_n+1 = X_0 * X_n$$ | $$Xn+1$$ | $$ri$$     |
|---|------|------|-------------------|------|--------|
| 0 | 5015 | 5734 | 28756010          | 7560 | 0.7560 |
| 1 | 5734 | 7560 | 43349040          | 3490 | 0.3490 |
| 2 | 7560 | 3490 | 26384400          | 3844 | 0.3844 |
| 3 | 3490 | 3844 | 13415560          | 4155 | 0.4155 |
| 4 | 3844 | 4155 | 15971820          | 9718 | 0.9718 |


</div>

El algoritmo de productos medios es una técnica sencilla y didáctica para la generación de números pseudoaleatorios. Permite comprender la importancia de la selección de semillas y el proceso de obtención de los dígitos centrales. Aunque no es recomendable para aplicaciones que requieran alta aleatoriedad, es útil para fines educativos y para ilustrar conceptos básicos de simulación y generación de números aleatorios.