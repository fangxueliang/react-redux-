import { Layout } from 'antd'

const { Header, Footer, Content, Sider } = Layout

function App() {
  return (
    <Layout>
      <div className="App_layout">
        <Header> Header </Header>
        <Layout>
          <Sider> Sider </Sider>
          <Content> Content </Content>
        </Layout>
        <Footer> Footer </Footer>
      </div>
    </Layout>
  )
}
export default App
