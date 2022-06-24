import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>ReactPostCrud</h1>
      </header>
      
      <nav>
        <input type="text" name="FiltroNombre" placeholder="Filtro de Nombre"/>
        <button>Buscar</button>
      </nav>
      
      <main>
        <table>
          <tbody><tr>
            <td>Nombre </td>  
            <td>Descripción</td>
            <td>Acción</td>
          </tr>
          <tr>
            <td>Post 1 </td>  
            <td>Post de prueba 1</td>
            <td><button>Eliminar</button></td>
          </tr>
          <tr>
            <td>Post 2 </td>  
            <td>Post de prueba 2</td>
            <td><button>Eliminar</button></td>
          </tr>
          <tr>
            <td>Post 3 </td>  
            <td>Post de prueba 3</td>
            <td><button>Eliminar</button></td>
          </tr>
        </tbody></table>
      </main>
      
      <footer>
        <input type="text" name="Nombre" placeholder="Nombre"/>
        <input type="text" name="Descripción" placeholder="Descripción"/>
        <button>Crear</button>
      </footer>
    </div>
  );
}

export default App;
