import type { IFlight } from '../../types/flight.types';
import { formatAltitude } from '../../utils/altitude-formatter';

interface IFlightInformation {
  flight: IFlight;
}

export const FlightInformation = ({ flight }: IFlightInformation) => {
  return (
    <div className='ml-4 mt-2' style={{ width: 'calc(100% - 32px)' }}>
      <div className='bg-zinc-700 w-full px-4 py-2 rounded-tl-2xl rounded-tr-2xl mb-0.5'>Flight information</div>
      <div className='flex gap-0.5 justify-between mb-0.5'>
        <div className='bg-neutral-800 p-4 w-full'>{flight.airplane.name}</div>
        <div className='flex items-center bg-neutral-800 p-4 w-full'>
          <img src={`/flags/${flight.airline.country}-flag.svg`} alt={`${flight.airline.country} flag`} className='h-4 w-5' />
          <div className='ml-2'>{flight.airline.country}</div>
        </div>
      </div>
      <div className='flex gap-0.5 justify-between mb-2'>
        <div className='flex justify-between bg-neutral-800 p-4 w-full rounded-bl-2xl'>
          <div className='text-neutral-400'>Speed</div>
          <div>{flight.route.speed} km/h</div>
        </div>
        <div className='flex justify-between bg-neutral-800 p-4 w-full rounded-br-2xl'>
          <div className='text-neutral-400'>Altitude</div>
          <div>{formatAltitude(flight.route.altitude)} m</div>
        </div>
      </div>
    </div>
  );
};
