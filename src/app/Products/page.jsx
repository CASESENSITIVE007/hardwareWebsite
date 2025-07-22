import { Suspense } from 'react';
import ProductGrid from './ProductGrid';

// A simple component to show while the grid is loading
function Loading() {
  return <p>Loading products...</p>;
}

// Notice this is now a Server Component
export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold mb-8">
        Our Products
      </h1>
      
      <Suspense fallback={<Loading />}>
        <ProductGrid />
      </Suspense>
    </div>
  );
}