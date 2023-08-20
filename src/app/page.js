import ProductItems from "@/components/ProductItems";
import { data } from "@/utils/data";
import Image from "next/image";

export default function Home() {
  const { products } = data;
  return (
    <div>
      <h1>products</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((item, i) => {
          return (
            <div key={i * 0.25}>
              <ProductItems products={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
