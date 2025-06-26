import { FLIGHT_ACTIONS } from './flight-actions.data';

export const FlightActions = () => {
  return (
    <div className='absolute bottom-4 h-22 left-4 flex gap-0.5' style={{ width: 'calc(100% - 32px)' }}>
      {FLIGHT_ACTIONS.map((action) => {
        return (
          <div
            className='bg-neutral-800 w-full first:rounded-bl-2xl first:rounded-tl-2xl last:rounded-tr-2xl last:rounded-br-2xl cursor-pointer hover:text-orange-300'
            key={action.label}
          >
            <div className='flex flex-col justify-center items-center h-full'>
              <action.icon />
              <div className='mt-2'>{action.label}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
