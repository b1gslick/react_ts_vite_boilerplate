import {FC, useContext} from 'react';
import {ThemeContext} from '../contexts/themeContext';

import './styles.scss';

const Header: FC = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
    localStorage.setItem('default-theme', isCurrentDark ? 'light' : 'dark');
  };

  return (
    <header className="header">
      <div className="header-content">
        <div>
          <h1 className="logo-section">Logo section</h1>
        </div>
        <div className="toggle-btn-section">
          <div className={`toggle-checkbox m-vertical-auto`}>
            <input
              className="toggle-btn__input"
              type="checkbox"
              name="checkbox"
              onChange={handleThemeChange}
              checked={theme === 'light'}
            />
            <button
              type="button"
              className={`toggle-btn__input-label`}
              onClick={handleThemeChange}
            ></button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
