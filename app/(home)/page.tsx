import HomeCarousel from "@/components/shared/home/HomeCarousel";
import ProductList from "@/components/shared/product/ProductList";
import { getLatestProducts } from "@/lib/actions/product.actions";
import data from "@/lib/data";

export default async function Page() {
  const productsDb = await getLatestProducts();

  return (
    <main>
      <HomeCarousel items={data.carousels} />
      <ProductList title="New Arrivals" data={productsDb} />
    </main>
  );
}
