import products from '../data/products.json';
import ProductGrid from '../components/ProductGrid';

export default function HomePage() {
  return (
    <div>
      <h1 className="text-center my-4">All Products</h1>
      <ProductGrid products={products} />
    </div>
  );
}
