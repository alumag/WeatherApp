import { Statistic, Typography } from 'antd';
import style from './Temperature.module.css';
interface Props {
  temp_c: number;
  temp_f: number;
  feelslike_c: number;
  feelslike_f: number;
  unit: 'celsius' | 'fahrenheit';
}

const Temperature: React.FC<Props> = ({ temp_c, feelslike_c, temp_f, feelslike_f, unit }) => {
  return (
    <div>
      <Statistic title='temperature' value={`${unit === 'celsius' ? temp_c : temp_f}°`} />
      <Typography className={style.feelsLike}>
        feels like {unit === 'celsius' ? feelslike_c : feelslike_f}°
      </Typography>
    </div>
  );
};

export default Temperature;
