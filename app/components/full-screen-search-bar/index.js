'use client'
import React, { useState } from 'react';
import { Drawer, Button, Input, DatePicker } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import GuestDropdown from '../guest-dropdown';

const { RangePicker } = DatePicker;

const FullScreenSearchBar = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const closeDrawer = () => {
        setVisible(false);
    };

    return (
        <>
            {/* The entire search bar is clickable and opens the drawer */}
            <div style={styles.searchContainer} onClick={showDrawer}>
                <div style={styles.searchBar}>
                    <SearchOutlined style={styles.searchIcon} />
                    <div style={styles.searchContent}>
                        <div style={styles.mainText}>Where to?</div>
                        <div style={styles.subText}>Anywhere • Any week • Add guests</div>
                    </div>
                </div>
            </div>

            <Drawer
                title={null}
                placement="top"
                closable={true}
                onClose={closeDrawer}
                visible={visible}
                height="100%"
                style={styles.drawer}
                bodyStyle={styles.drawerBody}
            >
                <div style={styles.verticalSearchContainer}>
                    <div style={styles.searchSection}>
                        <h2 style={styles.sectionTitle}>Where to?</h2>
                        <Input
                            placeholder="Search destinations"
                            prefix={<SearchOutlined />}
                            size="large"
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.searchSection}>
                        <h2 style={styles.sectionTitle}>When</h2>
                        <RangePicker
                            placeholder={['Check-in', 'Check-out']}
                            size="large"
                            style={styles.datePicker}
                        />
                    </div>

                    <div style={styles.searchSection}>
                        <h2 style={styles.sectionTitle}>Guests</h2>
                        <GuestDropdown />
                    </div>

                    <div style={styles.actionContainer}>
                        <Button type="link" onClick={closeDrawer} style={styles.clearButton}>Clear all</Button>
                        <Button type="primary" shape="round" size="large" icon={<SearchOutlined />}>
                            Search
                        </Button>
                    </div>
                </div>
            </Drawer>
        </>
    );
};

const styles = {
    searchContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px 20px',
        backgroundColor: '#fff',
        borderRadius: '999px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        width: '100%',
        maxWidth: '600px',
    },
    searchBar: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    searchIcon: {
        fontSize: '20px',
        marginRight: '10px',
    },
    searchContent: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    mainText: {
        fontSize: '16px',
        fontWeight: '500',
    },
    subText: {
        fontSize: '14px',
        color: '#888',
    },
    drawer: {
        zIndex: 1000,
    },
    drawerBody: {
        padding: '20px',
        backgroundColor: '#f7f7f7',
    },
    verticalSearchContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        height: '100%',
        width: '100%',
    },
    searchSection: {
        width: '100%',
        maxWidth: '600px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    sectionTitle: {
        marginBottom: '8px',
        fontSize: '16px',
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        marginBottom: '20px',
    },
    datePicker: {
        width: '100%',
    },
    actionContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '600px',
        marginTop: '20px',
    },
    clearButton: {
        color: '#ff385c',
    },
};

export default FullScreenSearchBar;
