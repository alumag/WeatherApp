import { ReloadOutlined } from '@ant-design/icons';
import { Button, Card, Col, Empty, Row, Statistic, Typography } from 'antd';
import { useMemo } from 'react';
import { useTemperatureUnit } from '../../hooks/useTemperatureUnit';
import Temperature from './components/temperature';
import Title from './components/title';
import { useCurrentWeather } from './hooks';

interface Props {
  location: string;
}
export const Weather: React.FC<Props> = ({ location }) => {
  const { isLoading, currentWeather, refetch } = useCurrentWeather(location);
  const temperatureUnit = useTemperatureUnit();

  const reload = useMemo(() => {
    return (
      <Button onClick={refetch} type='link'>
        <ReloadOutlined spin={isLoading} />
      </Button>
    );
  }, [refetch, isLoading]);

  const title = useMemo(() => {
    if (!currentWeather) {
      return <Title />;
    }

    return <Title condition={currentWeather.condition} />;
  }, [currentWeather]);

  const content = useMemo(() => {
    if (!currentWeather) {
      return <Empty />;
    }

    const { temp_c, temp_f, feelslike_c, feelslike_f, humidity, wind_mph } = currentWeather;
    return (
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col>
          <Temperature
            temp_c={temp_c}
            temp_f={temp_f}
            feelslike_c={feelslike_c}
            feelslike_f={feelslike_f}
            unit={temperatureUnit}
          />
        </Col>
        <Col>
          <Statistic title='humidity' value={humidity} suffix='%' />
        </Col>
        <Col>
          <Statistic title='wind speed' value={wind_mph} suffix={<Typography>mph</Typography>} />
        </Col>
      </Row>
    );
  }, [currentWeather, temperatureUnit]);

  return (
    <Card title={title} extra={reload}>
      {content}
    </Card>
  );
};
