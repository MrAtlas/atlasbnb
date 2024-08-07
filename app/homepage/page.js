'use client'
import React from 'react';
import { useAuth } from '../state/auth/auth-context';
import { Button, message, Typography } from 'antd';
import SearchBar from '../components/search-bar';
import FullScreenSearchBar from '../components/full-screen-search-bar';
import CategoryBar from '../components/category-bar';
import ProductCard from '../components/product-card';
import { getAllData } from '../lib/pocketbase_helper';

export default function Page() {
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);
  const [products, setProducts] = React.useState([])

  // Check screen size on initial load and when the window is resized
  React.useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllData('products');
        setProducts(result);
      } catch (error) {
        console.log(error);
        message.error(error.message)
      }
    }

    fetchData()
  }, [])

  const styles = {
    productDiv: {
      display: 'flex'
    }
  }

  return (
    <>
      {isSmallScreen ? <FullScreenSearchBar /> : <SearchBar />}
      <CategoryBar />
      {console.log(products)}
      <Typography>
        New Arrivals
      </Typography>
      <div style={styles.productDiv}>
        {products?.map((product, index) => (
          <ProductCard
            key={index}
            imageUrl={product.main_image}
            table={'products'}
            recordId={product.id}
            title={product.title}
            hostName={product.type}
            availability={product.isAvailable} />
        ))}
      </div>
    </>
  );
}
