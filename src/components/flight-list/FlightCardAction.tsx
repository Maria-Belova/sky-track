import { Heart } from 'lucide-react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { addFavorite, removeFavorite } from '../../store/favorites/favorites.slice';

interface IFlightCardAction {
  flightId: string;
}

export const FlightCardAction = ({ flightId }: IFlightCardAction) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites);

  const isFavorite = favorites.includes(flightId);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(flightId));
    } else {
      dispatch(addFavorite(flightId));
    }
  };

  return (
    <div
      className={
        'absolute group-hover:-right-16 duration-500 right-1 px-3 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 z-50 flex flex-col transition-all'
      }
      style={{ top: 'calc(50% - 24px)' }}
      onClick={handleToggleFavorite}
    >
      <div className='bg-neutral-900 text-white rounded-xl p-3 cursor-pointer'>
        <Heart size={24} fill={isFavorite ? 'white' : 'none'} />
      </div>
    </div>
  );
};
