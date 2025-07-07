export const SceletonCard = () => {
  return (
    <div className='bg-neutral-400 w-sm rounded-xl'>
      <div className='animate-pulse opacity-95 animate-slow p-6 cursor-pointer' style={{ height: '190px' }}>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <div className='bg-neutral-600 rounded-full h-10 w-10'></div>
            <div className='bg-neutral-500 h-4 w-20'></div>
          </div>
          <div className='bg-neutral-500 h-7 w-20 rounded-2xl'></div>
        </div>
        <div className='flex justify-between mt-8 gap-4 items-center'>
          <div>
            <div className='bg-neutral-500 h-4 mb-2'></div>
            <div className='bg-neutral-500 w-20 h-10'></div>
          </div>
          <div className='bg-neutral-600 h-2 w-full rounded-full'></div>
          <div>
            <div className='bg-neutral-500 h-4 mb-2'></div>
            <div className='bg-neutral-500 w-20 h-10'></div>
          </div>
        </div>
      </div>
    </div>
  );
};
