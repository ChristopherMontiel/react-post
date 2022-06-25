import React from 'react';
const Post = ( { post } ) => {
  return (
    <tr>
      <td> { post.name }</td>  
      <td>Post de prueba 1</td>
      <td><button>Eliminar</button></td>
    </tr>
  );
}

export default Post;