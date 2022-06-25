import React from 'react';
import { delPost } from "../store/action";
import { connect } from "react-redux";

const Post = ( { post, delPost } ) => {

  const handleRemove = product => {
    console.log("eliminando " + product.name);
		delPost(product.id);
	}

  return (
    <tr>
      <td> { post.name }</td>  
      <td> { post.desc } </td>
      <td>
        <button onClick={() => handleRemove(post)}>
          Eliminar
        </button>
      </td>
    </tr>
  );
}

//export default Post;
export default connect(null,{ delPost }) (Post);