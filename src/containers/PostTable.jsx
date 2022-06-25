import React from 'react';
import Post from "../components/Post";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return{
    amount: state.amountReducer.posts
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
        {/* {posts.map(po => (
					<Post product = {po} />
				))} */}

      </table>
    </main>
  );
}

export default connect(mapStateToProps, null)(PostTable);