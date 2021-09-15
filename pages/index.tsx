import type { NextPage } from 'next';
import { MainLayout, Post } from '../components';

const Home: NextPage = () => {
  return (
   <MainLayout>
     <Post/>
      <Post />
      <Post />
   </MainLayout>
  );
}; 

export default Home;
