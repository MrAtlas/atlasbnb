'use client'
import React, { useState } from 'react';
import { Button, Dropdown, Menu, InputNumber, Row, Col } from 'antd';
import { DownOutlined, UpOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';

const GuestDropdown = () => {
    const [visible, setVisible] = useState(false);
    const [guests, setGuests] = useState({
        adults: 0,
        children: 0,
        infants: 0,
        pets: 0,
    });

    const handleMenuClick = (e) => {
        e.preventDefault();
        setVisible(!visible);
    };

    const handleGuestChange = (type, value) => {
        setGuests({ ...guests, [type]: value });
    };

    const menu = (
        <div style={styles.dropdownContainer}>
            <Row style={styles.guestRow}>
                <Col span={12}>
                    <span>Adults</span>
                    <span style={styles.subtext}>Ages 13 or above</span>
                </Col>
                <Col span={12} style={styles.inputControls}>
                    <Button icon={<MinusOutlined />} onClick={() => handleGuestChange('adults', Math.max(guests.adults - 1, 0))} />
                    <InputNumber
                        min={0}
                        value={guests.adults}
                        readOnly
                        bordered={false}
                        style={styles.guestInput}
                    />
                    <Button icon={<PlusOutlined />} onClick={() => handleGuestChange('adults', guests.adults + 1)} />
                </Col>
            </Row>

            <Row style={styles.guestRow}>
                <Col span={12}>
                    <span>Children</span>
                    <span style={styles.subtext}>Ages 2–12</span>
                </Col>
                <Col span={12} style={styles.inputControls}>
                    <Button icon={<MinusOutlined />} onClick={() => handleGuestChange('children', Math.max(guests.children - 1, 0))} />
                    <InputNumber
                        min={0}
                        value={guests.children}
                        readOnly
                        bordered={false}
                        style={styles.guestInput}
                    />
                    <Button icon={<PlusOutlined />} onClick={() => handleGuestChange('children', guests.children + 1)} />
                </Col>
            </Row>

            <Row style={styles.guestRow}>
                <Col span={12}>
                    <span>Infants</span>
                    <span style={styles.subtext}>Under 2</span>
                </Col>
                <Col span={12} style={styles.inputControls}>
                    <Button icon={<MinusOutlined />} onClick={() => handleGuestChange('infants', Math.max(guests.infants - 1, 0))} />
                    <InputNumber
                        min={0}
                        value={guests.infants}
                        readOnly
                        bordered={false}
                        style={styles.guestInput}
                    />
                    <Button icon={<PlusOutlined />} onClick={() => handleGuestChange('infants', guests.infants + 1)} />
                </Col>
            </Row>

            <Row style={styles.guestRow}>
                <Col span={12}>
                    <span>Pets</span>
                    <span style={styles.subtext}>Bringing a service animal?</span>
                </Col>
                <Col span={12} style={styles.inputControls}>
                    <Button icon={<MinusOutlined />} onClick={() => handleGuestChange('pets', Math.max(guests.pets - 1, 0))} />
                    <InputNumber
                        min={0}
                        value={guests.pets}
                        readOnly
                        bordered={false}
                        style={styles.guestInput}
                    />
                    <Button icon={<PlusOutlined />} onClick={() => handleGuestChange('pets', guests.pets + 1)} />
                </Col>
            </Row>

            <div style={styles.actions}>
                <Button type="link" onClick={() => setGuests({ adults: 0, children: 0, infants: 0, pets: 0 })}>
                    Clear
                </Button>
                <Button type="primary" onClick={() => setVisible(false)}>
                    Save
                </Button>
            </div>
        </div>
    );

    return (
        <Dropdown
            overlay={menu}
            trigger={['click']}
            visible={visible}
            onVisibleChange={(visible) => setVisible(visible)}
            placement="bottomLeft"
        >
            <Button onClick={handleMenuClick} style={styles.dropdownButton}>
                {guests.adults + guests.children + guests.infants + guests.pets > 0 ?
                    `${guests.adults + guests.children + guests.infants + guests.pets} Guests` :
                    'Add guests'} <DownOutlined />
            </Button>
        </Dropdown>
    );
};

const styles = {
    dropdownContainer: {
        padding: '20px',
        width: '300px',
        borderRadius: '16px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    guestRow: {
        marginBottom: '15px',
    },
    subtext: {
        display: 'block',
        color: '#888',
        fontSize: '12px',
    },
    inputControls: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    guestInput: {
        width: '50px',
        textAlign: 'center',
        border: 'none',
    },
    actions: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '15px',
    },
    dropdownButton: {
        padding: '8px 16px',
        borderRadius: '20px',
        backgroundColor: '#fff',
        borderColor: '#ddd',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
    },
};

export default GuestDropdown;
