import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';
import { AutoStories, ChevronLeft, ChevronRight, Dashboard, Fastfood, Person } from '@mui/icons-material';

import classes from './style.module.scss';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => location.pathname === path;

  const getItemClassName = (path) => `${classes.sidebar__item} ${isActive(path) ? classes.active : ''}`;

  return (
    <div className={classes.container}>
      {isOpen && (
        <div className={classes.sidebar}>
          <div className={getItemClassName('/dashboard')} onClick={() => navigate('/dashboard')}>
            <Tooltip arrow title="Dashboard">
              <Dashboard />
            </Tooltip>
          </div>
          <div className={getItemClassName('/diary')} onClick={() => navigate('/diary')}>
            <Tooltip arrow title="Diary">
              <AutoStories />
            </Tooltip>
          </div>
          <div className={getItemClassName('/search')} onClick={() => navigate('/search')}>
            <Tooltip arrow title="Food">
              <Fastfood />
            </Tooltip>
          </div>
          <div className={getItemClassName('/profile')} onClick={() => navigate('/profile')}>
            <Tooltip arrow title="Profile">
              <Person />
            </Tooltip>
          </div>
        </div>
      )}

      <div className={classes.chevron} onClick={toggleSidebar}>
        {isOpen ? <ChevronLeft /> : <ChevronRight />}
      </div>
    </div>
  );
};

export default Sidebar;