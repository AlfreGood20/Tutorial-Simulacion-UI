import { useState } from "react";
import Content from "../components/Content";
import MainContent from "../components/MainContent";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";



export default function Modulo_1() {

  return (
    <>
      <MainContent>

        <Sidebar>
          <h1 className="text-center text-lg font-sans font-extrabold">Contenido</h1>

          <div className="flex flex-col items-start">
            <ul className="list-item">

              <li>
                <button>Subtemas</button>
              </li>

            </ul>
          </div>
        </Sidebar>

        <Content>

          <h1 className="text-2xl font-extrabold">Introducción a la simulación</h1>

          <img src="/imgs/INTRODUCCION.jpg" className="w-full h-85 rounded-5xl"/>

          <h2 className="text-lg font-semibold mt-4">"¿Qué es la simulación?"</h2>
          <p className="ml-3 text-justify">En el contexto de la ingeniería, la simulación es una técnica analítica y numérica que consiste en <strong>crear un modelo computacional</strong> (es decir, una réplica virtual) de un sistema, proceso o producto real. 
            Este modelo permite imitar el comportamiento del sistema a lo largo del tiempo, con el objetivo de comprenderlo mejor, analizar su rendimiento y evaluar distintos escenarios sin necesidad de experimentar directamente con el sistema físico.</p>

          <br/><p className="ml-3 text-justify">Podemos entenderla como un "laboratorio virtual" donde los ingenieros pueden realizar pruebas, cometer errores y encontrar soluciones óptimas sin detener la producción real, sin construir prototipos costosos o sin poner en riesgo la seguridad de las personas.</p>

          <h2 className="text-lg font-semibold mt-4">"Conceptos básicos de la simulación"</h2>
          <div className="flex flex-col justify-center">
            
            <Card aditional="rounded-lg border border-gray-300 mt-2">
              <h1 className="text-2xl font-extrabold text-center">Entidad</h1>
              <img src="/imgs/TUERCA.jpg" className="w-40 h-auto mx-auto" alt="Tuerca" />
              <p>Son los elementos dinámicos que se mueven a través del sistema simulado. 
                Representan los objetos individuales que son procesados o que fluyen en el modelo.</p>

              <p><strong>Ejemplos:</strong> Piezas en una fábrica, clientes en un banco, paquetes en una bodega, vehículos en una carretera, pacientes en un hospital.</p>
            </Card>

            <Card aditional="rounded-lg border border-gray-300 mt-2">
              <h1 className="text-2xl font-extrabold text-center">Recursos</h1>
              <img src="/imgs/OPERADORES.jpg" className="w-40 h-auto mx-auto" alt="Tuerca" />
              <p>Son los elementos estáticos o fijos que proporcionan un servicio a las entidades. 
                Suelen tener una capacidad limitada y pueden ser ocupados y liberados.</p>
              <p><strong>Ejemplos:</strong> Operarios de máquinas, cajeros automáticos, camiones de reparto, camillas en urgencias, servidores de cómputo.</p>
            </Card>

            <Card aditional="rounded-lg border border-gray-300 mt-2">
              <h1 className="text-2xl font-extrabold text-center">Atributos</h1>
              <img src="/imgs/ATRIBUTO.png" className="w-40 h-auto mx-auto" alt="Tuerca" />
              <p>Son las características o propiedades propias de cada entidad. 
                Lo importante de los atributos es que cada entidad puede tener un valor diferente para el mismo atributo.</p>
              <p><strong>Ejemplos:</strong> La prioridad de un cliente (VIP vs. regular), el peso de una pieza, la temperatura de un líquido, la hora de llegada de una entidad al sistema.</p>
            </Card>

            <Card aditional="rounded-lg border border-gray-300 mt-2">
              <h1 className="text-2xl font-extrabold text-center">Variables de Estado</h1>
              <img src="/imgs/VARIABLE.jpg" className="w-40 h-auto mx-auto" alt="Tuerca" />
              <p>Representan la información global del sistema en un momento dado. 
                A diferencia de los atributos (que pertenecen a una entidad), las variables describen la situación general del modelo.</p>
              <p><strong>Ejemplos:</strong> Temperatura actual de un horno, número de piezas en el almacén, estado del semáforo (verde/rojo), si una máquina está ocupada o libre.</p>
            </Card>

            <Card aditional="rounded-lg border border-gray-300 mt-2">
              <h1 className="text-2xl font-extrabold text-center">Eventos</h1>
              <img src="/imgs/EVENTO.jpg" className="w-40 h-auto mx-auto rounded-lg" alt="Tuerca" />
              <p>Son los sucesos instantáneos que cambian el estado del sistema. 
                La simulación "salta" de un evento a otro.</p>
              <p><strong>Ejemplos:</strong> La llegada de un cliente, la avería de una máquina, el inicio de una tarea, la finalización de un proceso.</p>
            </Card>

          </div>

          <h2 className="text-lg font-semibold mt-4">"Metodología de la simulación"</h2>
          <p className="ml-3 text-justify">Llevar a cabo un estudio de simulación no es simplemente sentarse a programar un modelo. 
            Para garantizar que los resultados sean válidos, confiables y útiles para la toma de decisiones, es fundamental seguir una metodología estructurada. 
            Esta metodología funciona como una hoja de ruta que guía al ingeniero desde la comprensión del problema hasta la implementación de las soluciones.</p>
          
          <br/><h2 className="font-semibold mt-4">Pasos a seguir:</h2>
          
          <div className="ml-3 mt-2 flex flex-col gap-4">
            <div>
              <p className="text-justify font-bold">Etapa 1: Formulación del problema y planificación</p>
              <p className="text-justify">Todo proyecto comienza con una definición clara del sistema a estudiar. En esta fase, se deben establecer los objetivos específicos del estudio: ¿Qué preguntas queremos responder? ¿Qué problema queremos resolver?. Es crucial definir el alcance del modelo (qué incluir y qué dejar fuera) y los recursos necesarios (tiempo, personal, software).</p>
            </div>

            <div>
              <p className="text-justify font-bold">Etapa 2: Diseño del modelo conceptual</p>
              <p className="text-justify">Antes de tocar la computadora, se debe elaborar un diseño conceptual del modelo. Esto implica crear una representación abstracta del sistema real, usualmente mediante diagramas de flujo, mapas de procesos o herramientas más avanzadas como Redes de Petri. Este paso permite a todos los involucrados visualizar la lógica del proceso y asegurar que se entiende correctamente antes de pasar a la programación.</p>
            </div>

            <div>
              <p className="text-justify font-bold">Etapa 3: Recogida de datos</p>
              <p className="text-justify">Un modelo de simulación es tan bueno como los datos que lo alimentan. En esta etapa, se identifican y recolectan los datos necesarios, como tiempos de proceso, tasas de llegada, disponibilidad de recursos y costos. Es fundamental verificar que los datos sean suficientes, confiables y representativos del sistema real.</p>
            </div>

            <div>
              <p className="text-justify font-bold">Etapa 4: Construcción del modelo computacional</p>
              <p className="text-justify">Aquí es donde el modelo conceptual se traduce a un lenguaje que la computadora pueda entender. Se utiliza un software de simulación especializado (como Simio, AnyLogic, Arena o Simul8) o lenguajes de programación para crear el modelo ejecutable. Durante esta fase, el ingeniero programa la lógica, las entidades, los recursos y las reglas definidas en las etapas anteriores.</p>
            </div>

            <div>
              <p className="text-justify font-bold">Etapa 5: Verificación y validación</p>
              <p className="text-justify">Este es uno de los pasos más críticos:</p>
              <ul className="list-disc list-inside ml-4">
                <li><strong>Verificación:</strong> ¿Construimos el modelo correctamente? Se asegura de que el programa computacional no tenga errores y funcione según lo especificado en el modelo conceptual.</li>
                <li><strong>Validación:</strong> ¿Construimos el modelo correcto? Se comprueba que el modelo represente con precisión el sistema real. Esto se logra comparando su comportamiento con datos históricos o consultando con expertos en el proceso.</li>
              </ul>
            </div>

            <div>
              <p className="text-justify font-bold">Etapa 6: Experimentación y análisis</p>
              <p className="text-justify">Una vez que el modelo está verificado y validado, comienza la fase de experimentación. Se ejecutan diferentes escenarios ("¿Qué pasaría si...?") variando parámetros como la asignación de recursos, la distribución de la planta o las políticas de operación. El objetivo no es solo obtener números, sino comprender el comportamiento del sistema y adquirir conocimiento que permita justificar las decisiones.</p>
            </div>

            <div>
              <p className="text-justify font-bold">Etapa 7: Documentación</p>
              <p className="text-justify">Es esencial documentar todo el proceso. Esto incluye desde los supuestos y las fuentes de datos hasta las versiones del modelo y los resultados de los experimentos. Una buena documentación permite reutilizar el modelo en el futuro y facilita la comunicación de los hallazgos a otras personas.</p>
            </div>

            <div>
              <p className="text-justify font-bold">Etapa 8: Implementación</p>
              <p className="text-justify">El último paso, y el más importante desde el punto de vista práctico, es tomar decisiones basadas en el estudio de simulación e implementar los cambios en el sistema real. La simulación cumple su propósito cuando sus recomendaciones se traducen en acciones concretas que mejoran la eficiencia, reducen costos o aumentan la productividad.</p>
            </div>
          </div>

        </Content>
        
      </MainContent>
    </>
  )
}
