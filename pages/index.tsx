import type { NextPage } from 'next';
import Head from 'next/head';
import { Header, LeftMenu, Post } from '../components';

const Home: NextPage = () => {
  return (
    <>
       <div className="wrapper">
        <div className="leftSide"> 
        <LeftMenu/>
        </div>
        <div className="content"> 
          <Post/>
          <Post />
        </div>
        <div className="rigthftSide"> </div>
      </div>
    </>
  );
};

export default Home;

//header commit
