const PostTable = () => {
  return (
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
  );
}

export default PostTable;