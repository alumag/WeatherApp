import { Button, Card, Empty, Row } from 'antd';
import { useMemo } from 'react';
import { useTemperatureUnit } from '../../hooks/useTemperatureUnit';
import Day from './components/day';
import { useForecast } from './hooks';
import Title from './components/title';
import { ReloadOutlined } from '@ant-design/icons';

interface Props {
  location: string;
}
export const Forecast: React.FC<Props> = ({ location }) => {
  const { forecast, refetch } = useForecast(location);
  const { temperatureUnit } = useTemperatureUnit();

  const reload = useMemo(() => {
    return (
      <Button onClick={refetch} type='link'>
        <ReloadOutlined />
      </Button>
    );
  }, [refetch]);

  const content = useMemo(() => {
    if (!forecast || forecast.length === 0) {
      return <Empty />;
    }

    return forecast.map(({ date, day }) => {
      return (
        <Day
          key={date}
          date={date}
          maxtemp_c={day.maxtemp_c}
          mintemp_c={day.mintemp_c}
          maxtemp_f={day.maxtemp_f}
          mintemp_f={day.mintemp_f}
          unit={temperatureUnit}
        />
      );
    });
  }, [temperatureUnit, forecast]);

  return (
    <Card title={<Title />} extra={reload}>
      <Row>{content}</Row>
    </Card>
  );
};
