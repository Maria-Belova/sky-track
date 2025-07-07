import { useEffect, useState } from 'react';
import { SearchField } from '../ui/SearchField';
import FlightCard from './FlightCard';
import { FLIGHTS } from './flights.data';
import { useDebounce } from '../../hooks/useDebounce';
import { SceletonCard } from './SceletonCard';

export const FlightList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearcValue] = useState('');
  const debouncedSearch = useDebounce(searchValue, 400);

  useEffect(() => {
    setIsLoading(true);
    const loader = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(loader);
    };
  }, []);

  const flights = FLIGHTS.filter((flight) => {
    return (
      flight.airline.flightNumber.toLocaleLowerCase().includes(debouncedSearch.toLocaleLowerCase()) ||
      flight.from.city.toLowerCase().includes(debouncedSearch.toLocaleLowerCase()) ||
      flight.to.city.toLocaleLowerCase().includes(debouncedSearch.toLocaleLowerCase())
    );
  });

  return (
    <div className='w-full flex flex-col gap-8' style={{ maxHeight: 'calc(100vh - 136px - 32px)' }}>
      <SearchField value={searchValue} onChange={(e) => setSearcValue(e)} />
      <div className='overflow-y-scroll space-y-4' style={{ maxHeight: 'calc(100vh - 136px - 32px - 60px - 40px)' }}>
        {flights.map((flight) => (isLoading ? <SceletonCard /> : <FlightCard flight={flight} key={flight.airline.flightNumber} />))}
      </div>
    </div>
  );
};
