import styles from './styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <img
        src={product.image}
        alt={product.name}
        className={styles['card-img-top']}
      />
      <div className={styles['card-body']}>
        <h5 className={styles['card-title']}>{product.name}</h5>
        <p className={styles['card-text']}>{product.description}</p>
        <p className={`${styles['card-text']} fw-bold`}>
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
