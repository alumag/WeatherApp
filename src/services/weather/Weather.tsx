import { Card, Descriptions, Spin } from 'antd';
import { useMemo } from 'react';
import { useCurrentWeather } from './hooks';

interface Props {
  location: string;
}
export const Weather: React.FC<Props> = ({ location }) => {
  const { currentWeather, refetch } = useCurrentWeather(location);

  const descriptions = useMemo(() => {
    if (!currentWeather) {
      return <Spin />;
    }

    return Object.entries(currentWeather).map(([key, value]) => (
      <Descriptions.Item label={key}>{String(value)}</Descriptions.Item>
    ));
  }, [currentWeather]);

  return (
    <Card title='Weather'>
      <Descriptions>{descriptions}</Descriptions>
    </Card>
  );
};
