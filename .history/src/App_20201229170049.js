import { Layout } from 'antd';
import "antd/dist/antd.css"
const { Header, Footer, Content,Sider } = Layout;

function App() {
  return (
    <Layout>
      <div>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
      </div>
    </Layout>
  );
}
export default App;
