import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { X } from 'lucide-react';
import cn from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { FLIGHTS } from '../flight-list/flights.data';
import { QUERY_PARAM_FLIGHT } from '../flight-list/flight.constants';

export const FlightDetails = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const flightFromParams = searchParams.get(QUERY_PARAM_FLIGHT);

  const flight = useMemo(() => {
    return FLIGHTS.filter((flight) => flight.airline === flightFromParams)[0] || null;
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
          className='fixed top-8 right-8 w-lg'
        >
          <div className='bg-neutral-950 w-lg rounded-4xl' style={{ height: 'calc(100vh - 64px)' }}>
            <div className={cn(`bg-[url(${flight.image})]`, 'p-6 h-[35%] rounded-tl-4xl rounded-tr-4xl')}>
              <div className='bg-neutral-900 rounded-xl flex justify-between items-center p-4'>
                <div>
                  <div className='text-orange-300 text-2xl'>{flight.airline}</div>
                  <div className=''>Ryanair</div>
                </div>
                <div className='rounded-full bg-neutral-800 w-10 h-10 flex justify-center items-center cursor-pointer' onClick={handleRemoveParam}>
                  <X />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
