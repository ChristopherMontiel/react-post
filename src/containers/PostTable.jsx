import React from 'react';
import Post from "../components/Post";
import {selectPosts} from "../store/reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return{
    posts: selectPosts(state)
  }
}

const PostTable = ({ posts }) => {
  return (
    <main>
      <table>
        <tr>
          <td>Nombre</td>  
          <td>Descripción</td>
          <td>Acción</td>
        </tr>
        { posts.map(po => (
					<Post post = {po} />
				))} 

      </table>
    </main>
  );
}

export default connect(mapStateToProps)(PostTable);