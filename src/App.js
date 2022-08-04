import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className='contenido'>
      <Header titulo="“Galería de Imágenes con React”"/>
      <div className='imgs'>
        <Card imagen="/assets/imgs/perritoCard1.webp" titulo="perrito" descripcion="perrito card 1"/>
        <Card imagen="/assets/imgs/gatito.jpg" titulo="gatito" descripcion="Gatito extremadamente lindo"/>
        <Card imagen="/assets/imgs/escorpion.jpg" titulo="Escorpión" descripcion="Escorpión modelando para foto"/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
