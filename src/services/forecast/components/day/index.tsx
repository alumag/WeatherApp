import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Statistic, Typography } from 'antd';
import classNames from 'classnames';
import style from './Day.module.css';

interface Props {
  date: string;
  maxtemp_c: number; // (decimal) Maximum temperature in celsius for the day.
  maxtemp_f: number; // (decimal) Maximum temperature in fahrenheit for the day
  mintemp_c: number; // (decimal) Minimum temperature in celsius for the day
  mintemp_f: number; // (decimal) Minimum temperature in fahrenheit for the day
  unit: 'celsius' | 'fahrenheit';
}

const Day: React.FC<Props> = ({ date, maxtemp_c, maxtemp_f, mintemp_c, mintemp_f, unit }) => {
  return (
    <div className={style.dayContainer}>
      <Typography>{date}</Typography>
      <Statistic
        className={classNames(style.temperature, style.maxTemp)}
        prefix={<ArrowUpOutlined />}
        value={`${unit === 'celsius' ? maxtemp_c : maxtemp_f}°`}
      />
      <Statistic
        className={classNames(style.temperature, style.minTemp)}
        prefix={<ArrowDownOutlined />}
        value={`${unit === 'celsius' ? mintemp_c : mintemp_f}°`}
      />
    </div>
  );
};

export default Day;
