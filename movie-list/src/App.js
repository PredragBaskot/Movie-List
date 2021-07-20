
import React from 'react';
import './App.css';
import { Layout } from 'antd';

const { Header, Sider, Content } = Layout;


function App() {


  return (
    <div className="App">
      <Layout>
        <Sider></Sider>
        <Layout>
          <Header></Header>
          <Content></Content>

        </Layout>
      </Layout>
    </div>
  );
}

export default App;
