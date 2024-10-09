import React from 'react';
import { FaTachometerAlt, FaWallet, FaUser, FaRegChartBar, FaListOl, FaBook, FaAddressBook } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className='sidebar-title'>
        <svg
          width="25"  
          height="25" 
          viewBox="0 0 93 93"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginRight: '8px', verticalAlign: 'middle' }} 
        >
          <path d="M23.3391 46.4702V69.6315H69.6618V46.4702H23.3391Z" fill="#10C680"/>
          <path d="M46.5004 69.6315L69.6618 69.6315L46.5004 92.7929V69.6315Z" fill="#05AA63"/>
          <path d="M46.5004 23.3088H92.8232V0.147461H69.6618L46.5004 23.3088Z" fill="#64EDB2"/>
          <path d="M0.177734 46.4702H69.6618L92.8232 23.3088L23.3391 23.3088L0.177734 46.4702Z" fill="#2FDD96"/>
        </svg>
        Minus1
      </h2>

      <div className="button-container">
        <button><FaTachometerAlt /> Dashboard</button>
        <button><FaAddressBook /> Portfolio</button>
        <button><FaRegChartBar /> Trading</button>
        <button><FaListOl />Watchlist</button>
        <button><FaBook />Academy</button>
        <button><FaUser /> Profile</button>
        <button><FaWallet />Wallet</button>
      </div>
      <div className="logout">
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Sidebar;
