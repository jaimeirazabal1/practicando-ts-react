import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Alimentos } from './components/Alimentos';

function App() {
  const [comida, setComida] = useState<string>('')
  return (
    <div className="container app">
      <h1>Dieta para 1500 kcal</h1>
      <ul>
        <li><b>Las preparaciones deben ser:</b> a la plancha, horneado, sudado, al vapor, guisado en salsa natural de vegetales, evitar las frituras</li>
        <li>Las ensaladas pueden ser preparadas con jugo de limón, vinagre, cilantro, perejil, apio españa, ajo.</li>
        <li><b>Alimentos No deseados:</b> Refrescos, Chucherías, Salsa Inglesa, Salsa Soja, Salsa de Ajo, Alimentos Deshidratados (sopas, cremas, salsas, etc.) Jugos de sobres. Carne de cochino y sus derivados (chuleta, chorizo, chicharrón, etc.), Frituras, Dulces tipo: Conservas, helados, tortas de pastelería, galletas con crema dulce.</li>
        <li><b>Utensilios que se necesitan:</b> Tazas y cucharas de medir, Balanza de Cocina con apreciación de 10 g (cantidad mínima que pesa la balanza.)</li>
      </ul>
      <div className="center">
        <select className="form-control" value={comida} onChange={(e) => setComida(e.target.value)}>
          <option>Seleccione su comida</option>
          <option>Desayuno 6:00-8:00 am</option>
          <option>Desayuno Merienda 10:00 am</option>
          <option>Almuerzo 12:00-2:00 pm</option>
          <option>Almuerzo Merienda 4:30 pm</option>
          <option>Cena 6:00 -8:00 pm</option>
          <option>Cena Merienda 9:00 pm</option>
        </select>
      </div>
      <Alimentos />
    </div >
  );
}

export default App;
