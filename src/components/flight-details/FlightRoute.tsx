import type { IFlight } from '../../types/flight.types';

interface IFlightRoute {
  flight: IFlight;
}

export const FlightRoute = ({ flight }: IFlightRoute) => {
  return (
    <div className='relative flex gap-0.5 ml-4 mt-4' style={{ width: 'calc(100% - 32px)' }}>
      <div className='flex flex-col items-center bg-neutral-800 rounded-tl-2xl py-6 w-full'>
        <div className='font-semibold text-4xl mb-4'>{flight.from.code}</div>
        <div>{flight.from.country}</div>
        <div className='text-neutral-400 mt-0.5'>{flight.from.timezone}</div>
      </div>
      <div className='absolute top-[calc(50%-24px)] left-[calc(50%-24px)] p-3 rounded-full bg-neutral-900 flex justify-center items-center'>
        <img src='/plane.svg' alt='plane-icon' width={24} />
      </div>
      <div className='flex flex-col items-center bg-neutral-800 rounded-tr-2xl py-6 w-full'>
        <div className='font-semibold text-4xl mb-4'>{flight.to.code}</div>
        <div>{flight.to.country}</div>
        <div className='text-neutral-400 mt-0.5'>{flight.to.timezone}</div>
      </div>
    </div>
  );
};
