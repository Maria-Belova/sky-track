import { Search } from 'lucide-react';
import { type FC } from 'react';

interface ISearchField {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export const SearchField: FC<ISearchField> = ({ placeholder = 'Search flight ...', value, onChange }: ISearchField) => {
  return (
    <div className='flex items-center w-sm px-8 py-4 rounded-2xl dark:bg-neutral-900 shadow-sm'>
      <Search size={24} className='dark:text-white mr-4' />
      <input
        className='w-full bg-transparent focus:outline-none text-lg dark:placeholder:text-neutral-500 dark:text-white'
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
