import ProductCard from './ProductCard';
import styles from './styles/ProductGrid.module.css';

const ProductGrid = ({ products }) => {
  return (
    <div className={styles['product-grid']}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
