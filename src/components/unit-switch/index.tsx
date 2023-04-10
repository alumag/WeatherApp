import { Switch } from 'antd';
import { useCallback } from 'react';
import { useTemperatureUnit } from '../../hooks/useTemperatureUnit';

const UnitSwitch: React.FC = () => {
  const { temperatureUnit, setTemperatureUnit } = useTemperatureUnit();

  const handleChange = useCallback(
    (checked: boolean) => {
      setTemperatureUnit(checked ? 'celsius' : 'fahrenheit');
    },
    [setTemperatureUnit],
  );

  return (
    <Switch
      defaultChecked={temperatureUnit === 'celsius'}
      onChange={handleChange}
      checkedChildren='c'
      unCheckedChildren='f'
    />
  );
};

export default UnitSwitch;
