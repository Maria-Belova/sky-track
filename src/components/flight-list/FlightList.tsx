import FlightCard from './FlightCard';
import { FLIGHTS } from './flights.data';

export const FlightList = () => {
  return (
    <div className='w-sm m-8 space-y-4'>
      {FLIGHTS.map((flight) => {
        return (
          <FlightCard
            flight={flight}
            key={flight.airline}
          />
        );
      })}
    </div>
  );
};
