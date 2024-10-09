import React from 'react';
import './Dashboard.css';
import { FaCoins } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header>
        <h2>Dashboard</h2>
        <div className="user-info">
          <input type="text" placeholder="Search your coins..." />
          <FaCoins />
          <div className="user">Alexim</div>
        </div>
      </header>

      <div className="content">
        <section className="trending">
          <h3>Trending</h3>
          <ul>
            <li>Tether (USDT) +0.40%</li>
            <li>Uniswap (UNI) +2.30%</li>
            <li>Wazirx (WRX) -0.06%</li>
          </ul>
        </section>

        <section className="top-coins">
          <div className="coin">
            <h4>Compound</h4>
            <p>$27,308.00</p>
            <span>+8250%</span>
          </div>
          <div className="coin">
            <h4>Shiba Inu</h4>
            <p>$0.00008827</p>
            <span>+660910%</span>
          </div>
          <div className="coin">
            <h4>Theta Fuel</h4>
            <p>$0.04276</p>
            <span>-151%</span>
          </div>
        </section>

        <section className="history">
          <h3>History</h3>
          <ul>
            <li>SushiSwap $345.90</li>
            {/* Додай більше пунктів */}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
