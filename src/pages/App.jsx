import React from 'react';
import Filter from '../components/Filter';
import NewPost from '../components/NewPost';
import PostTable from '../containers/PostTable';
import '../styles/App.css';
import Layout from './Layout';

function App() {
  return (
    <Layout>
      <Filter/>
      <PostTable/>
      <NewPost/>
    </Layout>
  );
}

export default App;
