import { useTheme } from '@/themeContext';

export const ThemeToggle = () => {
  const { toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="p-2 rounded bg-blue-500 text-white">
      Toggle Theme
    </button>
  );
};
