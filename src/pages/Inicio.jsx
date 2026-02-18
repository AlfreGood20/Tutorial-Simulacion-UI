import { Link } from "react-router-dom";
import Card, { CardHome } from "../components/Card";
import Footer from "../components/Footer";

export default function Inicio() {
  return (
        <>
            <div className="flex flex-col md:w-full md:h-[566px] bg-slate-200 relative pt-5 border-black border-b border-gray-400 overflow-hidden">

                <h1 className="animate-bounce mt-20 ml-5 text-center text-6xl md:text-9xl font-bold bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 bg-clip-text text-transparent">
                    Simulación
                </h1>

                <p className="text-md text-black font-semibold text-center max-w-2xl mx-auto mt-4">Bienvenido a la plataforma educativa, donde aprenderas simulacion de forma teorica y practica.</p>

                <div className="flex justify-center mt-8 mb-10">
                    <a href="#temas" className="cursor-pointer bg-gray-500 hover:bg-gray-400 hover:border-none rounded-lg px-6 py-3 text-white font-extrabold">
                        Aprender ahora
                    </a>
                </div>

                <svg className="w-full " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="#000b76" fillOpacity="0.5" d="M0,64L48,58.7C96,53,192,43,288,53.3C384,64,480,96,576,101.3C672,107,768,85,864,85.3C960,85,1056,107,1152,117.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            <section className="md:flex-1 pt-10" id="temas">

                <h1 className="text-center font-extrabold text-4xl mb-15 mt-10">Temas</h1>

                <div className="flex flex-row justify-center gap-5 mx-3">

                    <Link to='/modulo-1'>
                        <CardHome
                            titulo="Introduccion a la simulación"
                            contenido="Introducción a los conceptos básicos de la simulación, su metodología y aplicación en el análisis de sistemas reales."
                            img="/imgs/MODULO 1.png"
                        >
                            
                        </CardHome>
                    </Link>

                    <Link to='/modulo-2'>
                        <CardHome
                            titulo="Números pseudoaleatorios"
                            contenido="Estudio de la generación y validación de números pseudoaleatorios para su uso en modelos de simulación."
                            img="/imgs/MODULO 2.jpg"
                        >
                           
                        </CardHome>
                    </Link>

                    <Link to='/example'>

                        <CardHome
                            titulo="Generación de variables aleatorias"
                            contenido="Generación de variables aleatorias y modelado de distribuciones estadísticas para simulaciones."
                            img="/imgs/MODULO 3.jpg"
                        >
                            
                        </CardHome>
                    
                    </Link>
    

                    <Link to='/example'>
                        <CardHome
                            titulo="Lenguajes de simulación"
                            contenido="Uso de lenguajes y herramientas de simulación para modelar y validar sistemas reales."
                            img="/imgs/MODULO 4.jpg"
                        />
                    </Link>
                </div>

            </section>

            <Footer
            ></Footer>

        </>
    );
}
