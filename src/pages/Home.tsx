import { FlightDetails } from '../components/flight-details/FlightDetails';
import { FlightList } from '../components/flight-list/FlightList';

export function HomePage() {
  return (
    <div className='flex justify-between p-8 h-screen'>
      <FlightList />
      <FlightDetails />
    </div>
  );
}
