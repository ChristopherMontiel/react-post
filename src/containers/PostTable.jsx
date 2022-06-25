import React from 'react';
import Post from "../components/Post";
import {selectPosts, viewFilter} from "../store/reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return{
    posts: selectPosts(state),
    filter: viewFilter(state)
  }
}

const PostTable = ({ posts, filter }) => {
  let filterActive = filter.filterActive;
  let nameFilter = filter.nameFilter;
  let postView = [];
  if(filterActive){
    postView = posts.filter(po => po.name === nameFilter);
  }else{
    postView = posts.slice();
  }

  return (
    <main>
      <table>
        <tr>
          <td>Nombre</td>  
          <td>Descripción</td>
          <td>Acción</td>
        </tr>
        { postView.map(po => (
					<Post post = {po} />
				))} 

      </table>
    </main>
  );
}

export default connect(mapStateToProps)(PostTable);