import React from 'react';
import { FaTachometerAlt, FaWallet, FaUser, FaRegChartBar, FaBell } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>
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
      <ul>
        <li><FaTachometerAlt /> Dashboard</li>
        <li><FaWallet /> Portfolio</li>
        <li><FaRegChartBar /> Trading</li>
        <li>Watchlist</li>
        <li>Academy</li>
        <li><FaUser /> Profile</li>
        <li>Wallet</li>
      </ul>
      <div className="logout">
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Sidebar;
