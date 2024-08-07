'use client'
import React from 'react';
import { Card, Typography } from 'antd';
import { ShareAltOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Text } = Typography;

const ProductCard = ({ imageUrl, table, recordId, title, hostName, availability }) => {
    return (
        <Card
            hoverable
            cover={
                <div style={styles.coverContainer}>
                    <img
                        alt={title}
                        src={`http://127.0.0.1:8090/api/files/${table}/${recordId}/${imageUrl}`}
                        style={styles.image}
                    />
                    <div style={styles.iconContainer}>
                        <ShareAltOutlined style={styles.icon} />
                    </div>
                </div>
            }
            style={styles.card}
        >
            <Meta
                title={<div style={styles.title}>{title}</div>}
                description={
                    <>
                        <Text type="secondary" style={styles.hostName}>Host: {hostName}</Text><br />
                        <Text type={availability === 'Available' ? 'success' : 'danger'}>{availability}</Text>
                    </>
                }
            />
        </Card>
    );
};

const styles = {
    card: {
        borderRadius: '12px',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '250px',
        maxHeight: '345px',
        margin: '10px'
    },
    coverContainer: {
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '200px',
        borderRadius: '12px 12px 0 0',
    },
    iconContainer: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '50%',
        padding: '5px',
    },
    icon: {
        fontSize: '20px',
        color: '#fff',
    },
    title: {
        fontSize: '16px',
        fontWeight: 'bold',
    },
    hostName: {
        fontSize: '14px',
        marginBottom: '4px',
    },
};

export default ProductCard;
