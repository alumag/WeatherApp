import { Layout, Spin } from 'antd';
import 'antd/dist/reset.css';

import './App.css';
import { AppContent } from './AppContent';
import { useLocation } from './services/location/hooks';
import { SearchLocation } from './services/location/SearchLocation';

const { Header, Content } = Layout;

const App: React.FC = () => {
  const location = useLocation();

  return (
    <Layout className='layout'>
      <Header className='header'>
        <SearchLocation />
      </Header>
      <Content className='content'>
        {location ? <AppContent location={location} /> : <Spin size='large' />}
      </Content>
    </Layout>
  );
};

export default App;
