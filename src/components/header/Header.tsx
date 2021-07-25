import React from 'react';

const Header = () => {
    return (
        <nav>
            <div className="sidebar-button">
                <i className='bx bx-menu sidebarBtn'></i>
                <span className="dashboard">Dashboard</span>
            </div>
            <div className="search-box">
                <input type="text" placeholder="Search..." />
                <i className='bx bx-search'></i>
            </div>
            <div className="profile-details">
                <img src="images/profile.jpg" alt="" />
                <span className="admin_name">Prem Shahi</span>
                <i className='bx bx-chevron-down'></i>
            </div>
        </nav>
    );
};

export default Header;