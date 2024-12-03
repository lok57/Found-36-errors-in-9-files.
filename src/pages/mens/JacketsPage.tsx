import { useProducts } from '../../contexts/ProductContext';
import ProductGrid from '../../components/ProductGrid';
import { Product } from '../../types';

export default function JacketsPage() {
  const { products, updateProduct } = useProducts();
  const jackets = products.filter(p => p.category === 'Men' && p.subcategory === 'Jackets');

  return (
    <ProductGrid
      title="Men's Jackets"
      description="Premium jackets and outerwear"
      products={jackets}
      onUpdateProduct={updateProduct}
    />
  );
}