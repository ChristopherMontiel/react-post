import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Filter from '../components/Filter';
import NewPost from '../components/NewPost';
import PostTable from '../containers/PostTable';
import { useGetPosts } from '../services/useApiPosts';
import { initPost } from '../store/action';
import '../styles/App.css';
import Layout from './Layout';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    useGetPosts().then(post =>{
      dispatch(initPost(post))
    })
  },[dispatch]);

  return (
    <Layout>
      <Filter/>
      <PostTable/>
      <NewPost/>
    </Layout>
  );
}

export default App;
