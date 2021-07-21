import React from "react";
import "./App.css";
import { Layout } from "antd";
import Sidebar from "./components/Sidebar.js";
import AppHeader from "./components/AppHeader";
import Searchbar from "./components/SearchHeader/Searchbar";











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
