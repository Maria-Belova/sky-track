import FlightCard from './FlightCard';
import { FLIGHTS } from './flights.data';

export const FlightList = () => {
  return (
    <div className='w-sm overflow-y-scroll space-y-4' style={{ maxHeight: 'calc(100vh - 136px - 32px)' }}>
      {FLIGHTS.map((flight) => {
        return <FlightCard flight={flight} key={flight.airline.flightNumber} />;
      })}
    </div>
  );
};
