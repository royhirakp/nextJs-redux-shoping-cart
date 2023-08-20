// import CartComponent from "@/components/CartComponent";
import ProductDisplay from "@/components/ProductDisplay";
export default function Product({ params: { id } }) {
  //     const item = data.products.find((x) => x.id === id);
  //   console.log(item);
  return (
    <>
      <ProductDisplay id={id} />
    </>
  );
}
