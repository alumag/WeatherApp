import { Typography } from 'antd';
import style from './Title.module.css';

const Title: React.FC = () => {
  return (
    <div className={style.titleContainer}>
      <span>
        <Typography className={style.bold}>Forecast</Typography>
      </span>
    </div>
  );
};

export default Title;
