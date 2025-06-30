import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { FLIGHTS } from '../flight-list/flights.data';
import { QUERY_PARAM_FLIGHT } from '../flight-list/flight.constants';
import { FlightTopPanel } from './FlightTopPanel';
import { FlightImage } from './FlightImage';
import { FlightActions } from './flight-actions/FlightActions';
import { FlightInformation } from './FlightInformation';
import { FlightRoute } from './FlightRoute';
import { FlightSchedule } from './FlightSchedule';

export const FlightDetails = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const flightFromParams = searchParams.get(QUERY_PARAM_FLIGHT);

  const flight = useMemo(() => {
    return FLIGHTS.filter((flight) => flight.airline.flightNumber === flightFromParams)[0] || null;
  }, [flightFromParams]);

  const handleRemoveParam = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete(QUERY_PARAM_FLIGHT);
    setSearchParams(newSearchParams);
  };

  return (
      <AnimatePresence>
        {flight && (
          <motion.div
            key='flight-details'
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='fixed top-34 right-8 w-md'
          >
            <div tabIndex={0} className='bg-neutral-950 overflow-y-scroll w-md rounded-4xl' style={{ height: 'calc(100vh - 136px - 32px)' }}>
              <div className='overflow-y-scroll' style={{ height: 'calc(100% - 88px - 16px)' }}>
                <FlightTopPanel flight={flight} onClick={handleRemoveParam} />
                <FlightImage flight={flight} />
                <FlightRoute flight={flight} />
                <FlightSchedule />
                <FlightInformation flight={flight} />
              </div>
              <FlightActions />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
  );
};
