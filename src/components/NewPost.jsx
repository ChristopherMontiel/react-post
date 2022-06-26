import React, {useRef} from 'react';
import { addPost } from "../store/action";
import { selectPosts } from "../store/reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return{
    posts: selectPosts(state)
  }
}

const NewPost = ({addPost, posts}) => {
  const form = useRef(null);
  
  const handleAdd = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    //Se genera un ID único para cada post.
    let idPost = 0;
    if (posts.length !== 0){
      idPost = posts[posts.length - 1].id + 1;
    }
    const data = {
      id: idPost, 
      name: formData.get('Nombre'),
      description: formData.get('Descripción')
    }
    console.log(data);
    addPost(data);
  }

  return (
    <form action="/" className="NewPost" ref={form}>
      <input type="text" name="Nombre" placeholder="Nombre"/>
      <input type="text" name="Descripción" placeholder="Descripción"/>
      <button onClick={ handleAdd }>Crear</button>
    </form>
  );
}

export default connect(mapStateToProps,{ addPost }) (NewPost);