import { X } from 'lucide-react';
import type { IFlight } from '../../types/flight.types';

interface IFlightTopPanel {
  flight: IFlight;
  onClick: () => void;
}

export const FlightTopPanel = ({ flight, onClick }: IFlightTopPanel) => {
  return (
    <div className='bg-neutral-900 rounded-xl flex justify-between items-center p-4 absolute top-6 left-6' style={{ width: 'calc(100% - 48px)' }}>
      <div>
        <div className='text-orange-300 text-2xl'>{flight.airline.flightNumber}</div>
        <div className=''>Ryanair</div>
      </div>
      <div className='rounded-full bg-neutral-800 w-10 h-10 flex justify-center items-center cursor-pointer' onClick={onClick}>
        <X />
      </div>
    </div>
  );
};
