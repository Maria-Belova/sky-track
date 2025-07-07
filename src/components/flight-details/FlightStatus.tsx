import { Dot } from 'lucide-react';
import { ProgressBar } from '../ui/ProgressBar';

interface IFlightStatus {
  percentage: number;
}
export const FlightStatus = ({ percentage }: IFlightStatus) => {
  return (
    <div className='mt-0.5 ml-4 bg-neutral-800 text-neutral-400 p-4 w-full' style={{ width: 'calc(100% - 32px)' }}>
      <div className='mt-1'>
        <ProgressBar percentage={percentage} />
      </div>
      <div className='flex justify-between items-center mt-4'>
        <div className='flex items-center'>
          <div>2 715 km</div>
          <Dot />
          <div>3h 1m</div>
        </div>
        <div className='flex items-center'>
          <div>882 km</div>
          <Dot />
          <div>59m</div>
        </div>
      </div>
    </div>
  );
};
