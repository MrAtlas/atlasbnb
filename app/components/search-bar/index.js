'use client'
import React from 'react';
import { Input, DatePicker, Button, Divider } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import GuestDropdown from '../guest-dropdown';

const { RangePicker } = DatePicker;

const SearchBar = () => {
    return (
        <div style={styles.searchBarContainer}>
            <div style={styles.searchSection}>
                <div style={styles.searchItem}>
                    <label style={styles.label}>Where</label>
                    <Input placeholder="Search destinations" bordered={false} style={styles.input} />
                </div>
                <Divider type="vertical" style={styles.divider} />
                <div style={styles.searchItem}>
                    <label style={styles.label}>Check-in</label>
                    <DatePicker placeholder="Add dates" bordered={false} style={styles.input} />
                </div>
                <Divider type="vertical" style={styles.divider} />
                <div style={styles.searchItem}>
                    <label style={styles.label}>Check-out</label>
                    <DatePicker placeholder="Add dates" bordered={false} style={styles.input} />
                </div>
                <Divider type="vertical" style={styles.divider} />
                <div style={styles.searchItem}>
                    <label style={styles.label}>Guests</label>
                    <GuestDropdown />
                </div>
                <Button
                    type="primary"
                    shape="circle"
                    icon={<SearchOutlined />}
                    size="large"
                    style={styles.searchButton}
                />
            </div>
        </div>
    );
};

const styles = {
    searchBarContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        borderRadius: '50px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#fff',
        width: 'fit-content',
        margin: '20px auto',
    },
    searchSection: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    searchItem: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0 10px',
    },
    label: {
        fontSize: '12px',
        color: '#888',
    },
    input: {
        width: '100%',
        fontSize: '14px',
    },
    divider: {
        height: '40px',
    },
    searchButton: {
        marginLeft: '10px',
        backgroundColor: '#ff385c', // Airbnb's pink color
        borderColor: '#ff385c',
    },
};

export default SearchBar;
