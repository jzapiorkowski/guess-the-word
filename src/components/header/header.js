import React, { useReducer } from 'react';
import { Sidebar } from '../sidebar/Sidebar';
import './header.css';
import { GoThreeBars } from 'react-icons/go';

export const Header = (props) => {
  // const [sidebar, setSidebar] = useState(false);
  const [sidebar, toggleSidebar] = useReducer((sidebar) => !sidebar, false);

  return (
    <div className='header'>
      {sidebar ? <Sidebar></Sidebar> : null}
      {!props.endGame ? (
        <GoThreeBars onClick={toggleSidebar}></GoThreeBars>
      ) : null}
      <div className='logo'>Guess the word!</div>
    </div>
  );
};
