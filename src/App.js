import './App.css';
import NavBar from './components/Navbar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';

function App() {
  return (
    <>
<NavBar />
<ItemListContainer greeting={'Estoy saludando a traves de props'} />
    </>
  );
}

export default App;
