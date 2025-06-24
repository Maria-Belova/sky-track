import type { FC } from 'react';
import type { IFlight } from '../../types/flight.types';

interface IFlightCard {
  flight: IFlight;
}

const FlightCard: FC<IFlightCard> = ({
  flight,
}: IFlightCard) => {
  return (
    <div className='bg-neutral-900 rounded-xl p-6 border-3 border-neutral-900 hover:border-orange-300 cursor-pointer'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2'>
          <img
            src={flight.logo}
            alt={flight.airline}
            width={40}
            height={40}
            className='bg-white rounded-full'
          />
          <div>{flight.airline}</div>
        </div>
        <div className='bg-neutral-800 py-1 px-2 rounded-2xl'>
          {flight.aircraftReg}
        </div>
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
