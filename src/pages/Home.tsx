import { useLocation, useSearchParams } from 'react-router';
import { FlightDetails } from '../components/flight-details/FlightDetails';
import { FlightList } from '../components/flight-list/FlightList';
import { useEffect } from 'react';
import { QUERY_PARAM_FLIGHT } from '../components/flight-list/flight.constants';
import { PageUrl } from '../constants/pageUrl';
import { match } from 'path-to-regexp';

export function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (match(location.pathname)(PageUrl.HOME_PAGE)) {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.delete(QUERY_PARAM_FLIGHT);
      setSearchParams(newSearchParams);
    }
  }, [location.pathname]);

  return (
    <div className='flex justify-between pt-8 h-screen' style={{ maxHeight: 'calc(100vh - 120px' }}>
      <FlightList />
      <FlightDetails />
    </div>
  );
}
