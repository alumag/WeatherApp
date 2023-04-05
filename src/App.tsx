import { Empty, Layout } from 'antd';
import 'antd/dist/reset.css';

import './App.css';
import { SearchLocation } from './services/location/SearchLocation';

const { Header, Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout className='layout'>
      <Header className='header'>
        <SearchLocation />
      </Header>
      <Content className='content'>
        <Empty />
      </Content>
    </Layout>
  );
};

export default App;
