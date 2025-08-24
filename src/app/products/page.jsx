import { Suspense } from "react";
import ProductsClient from "./products-client";

// Server-side loading fallback component
function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-20 h-20 mx-auto mb-6">
          <div className="w-full h-full rounded-full border-4 border-red-700 border-t-transparent animate-spin"></div>
        </div>
        <h2 className="text-2xl font-bold text-red-700 mb-2">
          THE ORIGINAL TRADERS
        </h2>
        <p className="text-blue-700 italic">Loading Premium Hardware...</p>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ProductsClient />
    </Suspense>
  );
}
