import { Spin } from 'antd';
import style from './Spinner.module.css';

const Spinner: React.FC = () => {
  return (
    <div className={style.spinnerContainer}>
      <Spin size='large' />
    </div>
  );
};

export default Spinner;
