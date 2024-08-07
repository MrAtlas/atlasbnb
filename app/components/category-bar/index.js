'use client'
import React from 'react';

import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { FaUmbrellaBeach, FaWater, FaSwimmingPool, FaMountain } from 'react-icons/fa'; // Font Awesome
import { GiDesert, GiGoldBar } from 'react-icons/gi'; // Game Icons
import { GrStreetView } from 'react-icons/gr'; // Grommet Icons

import { Button } from 'antd';

const categories = [
    { icon: <FaUmbrellaBeach />, label: 'Spiaggia' },
    { icon: <FaWater />, label: 'Sull\'acqua' },
    { icon: <GiDesert />, label: 'Campagna' },
    { icon: <GiGoldBar />, label: 'Luxe' },
    { icon: <FaSwimmingPool />, label: 'Piscine incredibili' },
    { icon: <FaMountain />, label: 'Baite' },
    { icon: <GrStreetView />, label: 'Vista mozzafiato' },
    // Add more categories as needed
];

const CategoryBar = () => {

    const scrollLeft = () => {
        document.getElementById('category-scroll').scrollLeft -= 150;
    };

    const scrollRight = () => {
        document.getElementById('category-scroll').scrollLeft += 150;
    };

    return (
        <div style={styles.container}>
            <Button icon={<LeftOutlined />} style={styles.scrollButton} onClick={scrollLeft} />
            <div id="category-scroll" style={styles.categoryContainer}>
                {categories.map((category, index) => (
                    <div key={index} style={styles.categoryItem}>
                        {category.icon}
                        <span style={styles.label}>{category.label}</span>
                    </div>
                ))}
            </div>
            <Button icon={<RightOutlined />} style={styles.scrollButton} onClick={scrollRight} />
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: '10px 0',
    },
    categoryContainer: {
        display: 'flex',
        overflowX: 'auto',
        scrollBehavior: 'smooth',
        width: '100%',
        padding: '0 10px',
    },
    categoryItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '20px',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
    },
    label: {
        marginTop: '5px',
        fontSize: '16px',
        color: '#555',
    },
    scrollButton: {
        border: 'none',
        backgroundColor: 'transparent',
        fontSize: '20px',
    },
};

export default CategoryBar;
