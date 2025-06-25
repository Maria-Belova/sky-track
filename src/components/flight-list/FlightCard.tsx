import cn from 'clsx';
import { useSearchParams } from 'react-router';
import type { IFlight } from '../../types/flight.types';
import { QUERY_PARAM_FLIGHT } from './flight.constants';

interface IFlightCard {
  flight: IFlight;
}

const FlightCard = ({ flight }: IFlightCard) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedFlight = searchParams.get(QUERY_PARAM_FLIGHT);

  const isActiveFlight = selectedFlight === flight.airline;

  return (
    <div
      className={cn(
        isActiveFlight ? 'border-orange-300' : 'border-neutral-900',
        'bg-neutral-900 rounded-xl p-6 border-3 hover:border-orange-300 cursor-pointer',
      )}
      onClick={() => {
        setSearchParams({ [QUERY_PARAM_FLIGHT]: flight.airline });
      }}
    >
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2'>
          <img src={flight.logo} alt={flight.airline} width={40} height={40} className='bg-white rounded-full' />
          <div>{flight.airline}</div>
        </div>
        <div className='bg-neutral-800 py-1 px-2 rounded-2xl'>{flight.aircraftReg}</div>
      </div>
      <div className='flex justify-between mt-8'>
        <div>
          <div>{flight.fromSity}</div>
          <div className='font-semibold text-4xl'>{flight.fromCode}</div>
        </div>
        <div>
          <div>{flight.toSity}</div>
          <div className='font-semibold text-4xl'>{flight.toCode}</div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
