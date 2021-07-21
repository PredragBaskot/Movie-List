import React from "react";
import "./App.css";
import { Layout } from "antd";
import Searchbar from "./components/Searchbar/Searchbar";
import AppHeader from "./components/AppHeader/AppHeader";
import Sidebar from "./components/Sidebar/Sidebar";

const { Header, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Sider>
          <Sidebar />
        </Sider>
        <Layout>
          <Header>
            <AppHeader></AppHeader>
            <Searchbar />
          </Header>
          <Content></Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
