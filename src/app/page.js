"use client"; // Dosyayı client component olarak işaretler

import { useState } from 'react';
import products from '../data/products.json';
import ProductGrid from '../components/ProductGrid';
import CategoryDropdown from '../components/CategoryDropdown';

export default function HomePage() {
  const [filteredProducts, setFilteredProducts] = useState(products); // Başlangıçta tüm ürünler gösteriliyor
  const categories = [...new Set(products.map((product) => product.category))]; // Kategorileri benzersiz hale getiriyoruz

  const handleCategorySelect = (category) => {
    if (category === '') {
      setFilteredProducts(products); // Tüm ürünleri göster
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === category) // Kategoriye göre filtrele
      );
    }
  };

  return (
    <div>
      <h1 className="text-center my-4">{/* Product Listing */}</h1>
      {/* Kategori dropdown */}
      <CategoryDropdown
        categories={categories}
        onSelectCategory={handleCategorySelect}
      />
      {/* Filtrelenmiş ürün grid'i */}
      <ProductGrid products={filteredProducts} />
    </div>
  );
}
