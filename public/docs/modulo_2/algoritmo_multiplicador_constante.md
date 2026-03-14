# Algoritmo multiplicador constante
Este algoritmo genera números aleatorios mediante la multiplicación de una semilla inicial por una constante en cada iteración. Toma los dígitos centrales del resultado como la nueva semilla y los dígitos decimales como el número aleatorio generado.

Es un algoritmo de números pseudoaleatorios, es utilizado, por ejemplo, en videojuegos de cartas para que el jugador obtenga cartas de manera aleatoria, también se suele usar en juegos de apuestas en general, para tirar dados y que el valor sea diferente cada vez, es un algoritmo muy útil aunque no es el único algoritmo capaz de generar números pseudoaleatorios.

## Pasos
1. **1.Seleccionar una semilla $$x_0$$** con D dígitos (D>3).
2. **2.Seleccionar constante $$a$$**
3. **3.Multiplicar** $$x_0 * a$$ (aplicar los ceros a la izquierda en caso de que D < 7)
4. **4.Tomar los cuatros digitos del medio** $$x_n+1$$
5. **5.Obtener $$r_i = 0.x_n+1$$**
6. **6. Repetir los pasos usando la constante**

## Ejemplo:
- Semilla $$x_0 = 9803$$
- $$a$$ (constante) = 6935
- $$n$$ (iteraciones) = 5

### Iteracion 1
- Multiplicamos $$x_0 * a = 67983805$$
- Tomamos los cuatros digitos $$x_n+1 = 9838$$
- Obtenemos $$r_i = 0.9838$$

### Iteracion 2
- Ahora $$x_1 = 9838$$
- $$x_1 * a = 68226530$$
- $$x_n+1 = 2265$$
- $$r_i=0.2265$$

### Iteracion 3
- $$x_2 = 2265$$
- $$x_2 * a = 15707775
- $$x_n+1 = 7077
- $$r_i = 0.7077$$

### Iteracion 4
- $$x_3 = 7077$$
- $$x_3 * a = 49078995$$
- $$x_n+1 = 0789$$
- $$r_i = 0.0789$$


### Iteracion 5
- $$x_4 =0789$$
- $$x_4 * a = 05471715$$
- $$x_n+1 = 4717$$
- $$r_i = 0.4717$$

<div style="display: flex; justify-content: center;">

| $$n$$ | $$a$$    | $$x$$    | $$a * x$$    | $$Xn+1$$ | $$ri$$     |
|---|------|------|----------|------|--------|
| 0 | 6935 | 9803 | 67983805 | 9838 | 0.9838 |
| 1 | 6935 | 9838 | 68226530 | 2265 | 0.2265 |
| 2 | 6935 | 2265 | 15707775 | 7077 | 0.7077 |
| 3 | 6935 | 7077 | 49078995 | 0789 | 0.0789 |
| 4 | 6935 | 0789 | 05471715 | 4717 | 0.4717 |

</div>

El algoritmo del multiplicador constante es una herramienta sencilla para la generación de números pseudoaleatorios. Aunque su uso es principalmente educativo y no se recomienda para aplicaciones que requieran alta seguridad o aleatoriedad, permite comprender de manera práctica conceptos fundamentales de simulación y generación de números aleatorios.