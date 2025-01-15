import ProductImages from "@/components/shared/product/ProductImages";
import ProductPrice from "@/components/shared/product/ProductPrice";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getProductBySlug } from "@/lib/actions/product.actions";
import { APP_NAME } from "@/lib/constant";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductBySlug(params.slug);
  if (!product) {
    return { title: "Product not found" };
  }
  return {
    title: `${product.name} - ${APP_NAME}`,
    description: product.description,
  };
}


const Productdetails = async ({
  params: { slug },
}: {
  params: { slug: string };
  searchParams: { page: string; color: string; size: string };
}) => {
  const product = await getProductBySlug(slug);
  if (!product) {
    return notFound();
  }

  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="col-span-2">
            <ProductImages images={product.images!} />
          </div>

          <div className="col-span-2 flex flex-col w-full gap-8 p-5">
            <div className="flex flex-col gap-6">
            <h1 className="h3-bold">{product.name}</h1>
              <p className="p-medium-16 rounded-full text-gray-500">
                {product.brand} {product.category}
              </p>
              
              <p>
                {product.rating} of {product.numReviews} rewiews
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex gap-3">
                  <ProductPrice 
                  value={Number(product.price)}
                  className="p-bold-20 rounded-full bg-green-500/10 px-5 py-2 text-green-700"
                  />

                </div>

              </div>
            </div>

            <div>
              <p>Description :</p>
              <p>{product.description}</p>
            </div>          
          </div>

         <div>
         <Card className="mt-6 mb-6 ml-3 mr-3">
            <CardContent className="p-4">
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <div>
                  <ProductPrice value={Number(product.price)}/>
                </div>
                </div>

                <div className="mb-2 flex justify-between">
                  <div>Status</div>
                 {product.stock > 0 ? (
                  <Badge variant="outline" className="bg-green-500/30 px-5 py-2 text-green-700">In Stock</Badge>
                  
                 ) : (
                  <Badge variant="destructive">Unavailable</Badge>
                 )}
                </div>

                {product.stock !== 0 && (
                      <div className=" flex-center">
                        <Button className="w-full">Add to cart</Button>
                      </div>
                )}

            </CardContent>
          </Card>
         </div>
        </div>
      </section>
    </>
  );
};

export default Productdetails;
