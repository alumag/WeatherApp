import { Typography } from 'antd';
import { useMemo } from 'react';
import { WeatherApiCondition } from '../../../common/types';
import style from './Title.module.css';
interface Props {
  condition?: WeatherApiCondition;
}

const Title: React.FC<Props> = ({ condition }) => {
  const icon = useMemo(() => {
    return condition ? (
      <img className={style.icon} src={condition.icon} alt='weather-condition-icon' />
    ) : null;
  }, [condition]);

  return (
    <div className={style.titleContainer}>
      <span>
        <Typography className={style.bold}>
          {icon}
          Weather
          {icon}
        </Typography>
      </span>
      <Typography className={style.condition}>{condition?.text}</Typography>
    </div>
  );
};

export default Title;
