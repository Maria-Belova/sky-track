import FlightCard from '../components/flight-list/FlightCard';
import { FLIGHTS } from '../components/flight-list/flights.data';
import { useAppSelector } from '../hooks/useAppSelector';
import cn from 'clsx';

export const Favorites = () => {
  const favorites = useAppSelector((state) => state.favorites);

  const findFlight = (id: string) => {
    const foundedFlight = FLIGHTS.find((flight) => flight.airline.flightNumber === id);
    return foundedFlight!;
  };
  return (
    <div className='p-10'>
      <div className='text-4xl mb-7'>FAVORITES FLIGHTS</div>
      <div className={cn(favorites.length < 4 ? 'gap-15' : 'lg:justify-between', 'flex flex-wrap')}>
        {favorites.map((favoriteId) => {
          return (
            <div className='mb-5'>
              <FlightCard flight={findFlight(favoriteId)} />;
            </div>
          );
        })}
      </div>
    </div>
  );
};
