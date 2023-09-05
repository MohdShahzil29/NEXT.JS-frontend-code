import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import { useEffect, useState } from "react";

export default function Home({ products }) {
  // const [data, setData] = useState(null);

  // const apiData = async () => {
  //   const { data } = await fetchDataFromApi("/api/products");
  //   setData(data);
  // };
  // useEffect(() => {
  //   apiData();
  // }, []);
  return (
    <main>
      <HeroBanner />
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Plush Comfort for Your Every Step
          </div>
          <div className="text-md md:text-xl">
            "Experience Effortless Comfort: Our lightweight Nike ZoomX midsole
            blends seamlessly with elevated stack heights to deliver unrivaled
            cushioning for those long, uninterrupted runs."
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {products?.data?.map((product) => (
          <ProductCard key={product?.id} data={product}/>
          ))}
          
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </div>
      </Wrapper>
    </main>
  );
}

export async function getStaticProps() {
  const products = await fetchDataFromApi("/api/products?populate=*");

  return {
    props: { products },
  };
}
