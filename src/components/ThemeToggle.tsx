import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../providers/theme/usetheme';
import { THEMES } from '../constants/theme';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className='rounded-full p-2 hover:text-orange-300 cursor-pointer transition-colors flex items-center justify-center'
      onClick={() => toggleTheme()}
    >
      {theme === THEMES.LIGHT ? <Sun size={22} /> : <Moon size={22} />}
    </div>
  );
};
