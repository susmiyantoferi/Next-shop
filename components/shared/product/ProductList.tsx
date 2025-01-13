import { Product } from "@/types";
import ProductCard from "./ProductCard";

const ProductList = ({title, data }: {title: string, data: Product[] }) => {
  return (
    <>
    <h2 className="ml-6 h2-bold">{title}</h2>
    <div className="flex aspect-[16/6] items-center justify-center p-6 mb-6 relative -m-1">
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4">
          {data.map((product: Product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <p>Product not found</p>
        </div>
      )}
    </div>
    </>
  );
};

export default ProductList;
