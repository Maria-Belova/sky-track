import { Plane } from 'lucide-react';

interface IProgressBar {
  percentage: number;
}
export const ProgressBar = ({ percentage }: IProgressBar) => {
  return (
    <div className='w-full dark:bg-neutral-700 rounded-full h-1'>
      <div
        className='bg-gradient-to-r from-rose-500 to-orange-400 opacity-80 h-full rounded-full transform-all duration-500 ease-in-out relative'
        style={{ width: `${percentage}%` }}
      >
        <Plane size={28} className='rotate-45 absolute top-1/2 -translate-y-1/2 -right-2' strokeWidth={0} fill='white' />
      </div>
    </div>
  );
};
