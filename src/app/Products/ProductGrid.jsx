'use client';

import { useSearchParams } from 'next/navigation';

const allProducts = [
  { id: 1, name: 'bearing type1', category: 'category1' },
  { id: 2, name: 'lubricant type 1', category: 'category2' },
  { id: 3, name: 'other things', category: 'category3' },
  { id: 4, name: 'bearing type1', category: 'category1' },
  { id: 5, name: 'other things', category: 'category3' },
  { id: 6, name: 'lubricant type 1', category: 'category2' },
];

export default function ProductGrid() {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get('category');

  const displayedProducts = selectedCategory
    ? allProducts.filter((product) => product.category === selectedCategory)
    : allProducts;

  // The H1 is moved to the parent page, this component only returns the grid
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayedProducts.map((product) => (
        <div key={product.id} className="border rounded-lg p-4 shadow-lg">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-gray-500 capitalize">{product.category}</p>
        </div>
      ))}
    </div>
  );
}