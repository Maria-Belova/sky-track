import { FlightDetails } from '../components/flight-details/FlightDetails';
import { FlightList } from '../components/flight-list/FlightList';
import { ThemeToggle } from '../components/ThemeToggle';

export function HomePage() {
  return (
    <div className='flex justify-between p-8 h-screen'>
      <FlightList />
      <ThemeToggle />
      <FlightDetails />
    </div>
  );
}
