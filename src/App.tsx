import { Layout } from 'antd';

import { AppContent } from './AppContent';
import { useLocation } from './services/location/hooks';
import { SearchLocation } from './services/location/SearchLocation';
import Spinner from './components/spinner';
import style from './App.module.css';

const { Header, Content } = Layout;

const App: React.FC = () => {
  const location = useLocation();

  return (
    <Layout className={style.container}>
      <Header className={style.header}>
        <SearchLocation />
      </Header>
      <Content className={style.content}>
        {location ? <AppContent location={location} /> : <Spinner />}
      </Content>
    </Layout>
  );
};

export default App;
