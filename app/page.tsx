"use client";

import GridMain from "@/components/ui/GridMain";
import CardProduct from "@/components/ui/CardProduct";
import Image from "next/image";
import useFetch from "@/hooks/useFetch";
import { ProductCardModel } from "@/models/product.model";
import { useEffect, useState } from "react";

function HomePage() {
  const [data, setData] = useState<ProductCardModel[] | null>(null);

  const { fetchData } = useFetch<ProductCardModel[] | null>({
    url: "/data.json",
  });

  useEffect(() => {
    setData(fetchData);
  }, [fetchData]);

  return (
    <div className="flex flex-col gap-10 py-10">
      <GridMain>
        <div className="relative col-span-3 row-span-6 rounded-3xl overflow-hidden">
          <Image
            src={"/test.png"}
            alt="/test.png"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative col-span-2 row-span-3 col-start-4 rounded-3xl overflow-hidden ">
          <Image
            src={"/test.png"}
            alt="/test.png"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative col-span-2 row-span-3 col-start-4 row-start-4 rounded-3xl overflow-hidden">
          <Image
            src={"/test.png"}
            alt="/test.png"
            fill
            priority
            className="object-cover"
          />
        </div>
      </GridMain>

      <div className="flex flex-wrap gap-1 justify-between">
        {data &&
          data.map((res) => (
            <CardProduct
              key={res.id}
              id={res.id}
              title={res.title}
              brand={res.brand}
              price={res.price}
              discount={res.discount}
              rating={res.rating}
              imageMain={res.imageMain}
            />
          ))}
      </div>
    </div>
  );
}
export default HomePage;
