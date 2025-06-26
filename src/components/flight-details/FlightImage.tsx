import type { IFlight } from '../../types/flight.types';

interface IFlightImage {
  flight: IFlight;
}

export const FlightImage = ({ flight }: IFlightImage) => {
  return (
    <div className='h-80 flex justify-center items-end bg-linear-to-b from-[#72b6fe] to-[#A3C7E1] rounded-tl-4xl rounded-tr-4xl'>
      <img src={flight.airplane.image} width='70%' className='mb-5' />
    </div>
  );
};
