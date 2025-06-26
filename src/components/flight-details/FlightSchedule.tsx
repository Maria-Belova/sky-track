export const FlightSchedule = () => {
  return (
    <div className='mt-0.5 mb-2 ml-4' style={{ width: 'calc(100% - 32px)' }}>
      <div className='flex gap-0.5 justify-between mb-0.5'>
        <div className='flex items-center justify-between bg-neutral-800 p-4 w-full'>
          <div className='text-neutral-400'>Scheduled</div>
          <div>08:32</div>
        </div>
        <div className='flex items-center justify-between bg-neutral-800 p-4 w-full'>
          <div className='text-neutral-400'>Actual</div>
          <div>08:44</div>
        </div>
      </div>
      <div className='flex gap-0.5 justify-between mb-0.5'>
        <div className='flex items-center justify-between bg-neutral-800 p-4 w-full rounded-bl-2xl'>
          <div className='text-neutral-400'>Scheduled</div>
          <div>13:15</div>
        </div>
        <div className='flex items-center justify-between bg-neutral-800 p-4 w-full rounded-br-2xl'>
          <div className='text-neutral-400'>Estimated</div>
          <div>13:25</div>
        </div>
      </div>
    </div>
  );
};
