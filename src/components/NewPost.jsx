import React, {useRef} from 'react';
import { addPost } from "../store/action";
import { connect } from "react-redux";

const NewPost = ({addPost}) => {
  const form = useRef(null);
  
  const handleAdd = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      name: formData.get('Nombre'),
      desc: formData.get('Descripción')
    }
    console.log(data);
    addPost(data);
  }

  return (
    <form action="/" className="form" ref={form}>
      <input type="text" name="Nombre" placeholder="Nombre"/>
      <input type="text" name="Descripción" placeholder="Descripción"/>
      <button onClick={ handleAdd }>Crear</button>
    </form>
  );
}

export default connect(null,{ addPost }) (NewPost);