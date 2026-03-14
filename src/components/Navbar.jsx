import { Link } from 'react-router-dom';
import './layout.css';
import { ButtomNav } from './Button';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-3">

        <h1 className="text-md font-semibold">
          Learning simulación
        </h1>

        <ul className="flex gap-5">
          <li>          
            <ButtomNav to="/">
              Inicio
            </ButtomNav>
          </li>
          <li>
            <ButtomNav to="/">
              Temas
            </ButtomNav>
          </li>
        </ul>

      </div>
    </nav>
  );
}
