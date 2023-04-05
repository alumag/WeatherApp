import { AutoComplete, Input } from 'antd';
import { useState } from 'react';
import { useSearchLocations } from './hooks/useSearchLocation';

export const SearchLocation: React.FC = () => {
  const [query, setQuery] = useState('');
  const { locations: lookupSuggestions, selectLocation } = useSearchLocations(query);

  const options =
    lookupSuggestions?.map(({ id, name, country }) => ({
      id,
      value: `${name} (${country})`,
      label: (
        <span>
          {name} ({country})
        </span>
      ),
    })) ?? [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSelect = (value: any, { id }: { id: number }) => {
    selectLocation(id);
  };

  return (
    <>
      <AutoComplete
        allowClear
        style={{ width: 500 }}
        options={options}
        onSelect={handleSelect}
        onSearch={setQuery}
      >
        <Input.Search size='large' placeholder='what is the weather at...' enterButton />
      </AutoComplete>
    </>
  );
};
