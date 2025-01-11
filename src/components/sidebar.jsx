import React, { useState } from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='pt-10'>
            <div className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
                <button className="toggle-btn" onClick={toggleSidebar}>
                    ☰
                </button>
                {isOpen && (
                    <div className="menu-content">

                        <ul>
                            <li>
                                ANALYSIS
                                <ul className="counts">
                                    <Link to='/category'>
                                        <li>Category </li>
                                    </Link>
                                    <Link to='/catvscat'>
                                        <li>Category VS Category</li>
                                    </Link >
                                <Link to='/subcat'>
                                    <li>
                                        Subcategory
                                    </li>   
                                </Link>
                                    <Link to='/subvssub'>
                                        <li>Subcategory VS Subcategory</li>
                                    </Link>
                                    <Link to='/finalproduct'>
                                        <li>Top Products</li>
                                    </Link>
                                    <Link to='/provspro'>
                                        <li>End Product VS End Product</li>
                                    </Link>
                                    
                                </ul>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Sidebar;
