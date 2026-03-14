# Algoritmo cuadrados medios
El algoritmo de cuadrados medios es un método para generar números pseudoaleatorios, propuesto por John von Neumann. Consiste en tomar un número inicial (llamado semilla), elevarlo al cuadrado y extraer los dígitos centrales del resultado para formar el siguiente número de la secuencia.

## Pasos
1. **1. Semilla:** Elegir un número entero inicial $$x_0$$ con $$D$$ dígitos (se recomiendan 4 o más).

2. **2. Cuadrado:** Elevar la semilla al cuadrado: $$y_0 = {x_0}^2$$

3. **3. Selección:** Tomar los $$D$$ dígitos centrales de $$y_o$$. **Si el resultado no tiene suficientes dígitos agregar ceros a la izquierda**. El total de digitos debe ser 8, si no, realizar lo que se leyo.

4. **4. Resultado:** El número pseudoaleatorio es: $$r_i = 0.x_1$$

5. **5. Iteración:** El nuevo valor central $$x_1$$ se convierte en la nueva semilla para repetir el proceso. Y estos pasos se repite para los proximos $$n...$$

## Ejemplo:
Generar los primero 5 numeros $$ri$$ a partir de una semilla $$x_o = 5735$$.

### Iteración 1

1. **Semilla:** $$x_0 = 5735$$  
2. **Cuadrado:** $${x_0}^2 = 32,890,225$$  
3. **Selección:** Se toman los 4 dígitos centrales: $$x_1 = 8902$$  
4. **Resultado:** $$r_1 = 0.8902$$  

### Iteración 2

1. **Semilla:** $$x_1 = 8902$$  
2. **Cuadrado:** $${x_1}^2 = 79,282,404$$  
3. **Selección:** Se toman los 4 dígitos centrales: $$x_2 = 2824$$  
4. **Resultado:** $$r_2 = 0.2824$$  

### Iteración 3

1. **Semilla:** $$x_2 = 2824$$  
2. **Cuadrado:** $${x_2}^2 = 7,978,976$$  
3. **Selección:** Se agregan ceros a la izquierda para completar 8 dígitos: $$07,978,976$$  
	Se toman los 4 dígitos centrales: $$x_3 = 9789$$  
4. **Resultado:** $$r_3 = 0.9789$$  

### Iteración 4

1. **Semilla:** $$x_3 = 9789$$  
2. **Cuadrado:** $${x_3}^2 = 95,817,721$$  
3. **Selección:** Se toman los 4 dígitos centrales: $$x_4 = 8177$$  
4. **Resultado:** $$r_4 = 0.8177$$  

### Iteración 5

1. **Semilla:** $$x_4 = 8177$$  
2. **Cuadrado:** $${x_4}^2 = 66,857,329$$  
3. **Selección:** Se toman los 4 dígitos centrales: $$x_5 = 8573$$  
4. **Resultado:** $$r_5 = 0.8573$$  

<div style="display: flex; justify-content: center;">
  
| $$n$$ | $$x$$  | $$x \times x = x^2$$ | Ceros a la izquierda | $$X_{n+1}$$ | $$r_i$$  |
| :---: | :----: | :------------------: | :------------------: | :---------: | :------: |
|  1    | 5735   | 32,890,225           | 32,890,225           | 8902        | 0.8902   |
|  2    | 8902   | 79,282,404           | 79,282,404           | 2824        | 0.2824   |
|  3    | 2824   | 07,978,976           | 07,978,976           | 9789        | 0.9789   |
|  4    | 9789   | 95,817,721           | 95,817,721           | 8177        | 0.8177   |
|  5    | 8177   | 66,857,329           | 66,857,329           | 8573        | 0.8573   |

</div>

 
El algoritmo de cuadrados medios genera números pseudoaleatorios a partir de una semilla, aplicando el proceso de elevar al cuadrado y extraer los dígitos centrales. Como se observa, los valores generados parecen aleatorios, pero el método puede perder aleatoriedad o caer en ciclos cortos si la semilla no es adecuada. Por eso, aunque es útil para entender la generación de números pseudoaleatorios, en la práctica se prefieren algoritmos más robustos para aplicaciones reales.