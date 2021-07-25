import React from 'react';
import Header from '../header/Header';
import OverView from '../OverView/OverView';
import RecentSales from '../recentSales/RecentSales';
import Sidebar from '../Sidebar/Sidebar';
import TopSales from '../topSales/TopSales';
import './home.css';

const Home = () => {
    return (
        <div>
            <Sidebar />
            <section className="home-section">
                <Header />
                <div className="home-content">
                    <OverView />
                    <div className="sales-boxes">
                        <RecentSales />
                        <TopSales />
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Home;