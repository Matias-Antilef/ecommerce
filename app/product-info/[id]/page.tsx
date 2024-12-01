"use client";

import { useEffect, useState } from "react";
import styles from "./product.module.css";
import { ProductModel } from "@/models/product.model";
import Image from "next/image";
import useFetch from "@/hooks/useFetch";

export default function ProductInfo({ params }: { params: { id: string } }) {
  const [data, setData] = useState<ProductModel | null>();
  const { fetchData } = useFetch<ProductModel>({ url: "/data.json" });

  useEffect(() => {
    if (fetchData) {
      setData(fetchData[0]);
    }
  }, [fetchData]);

  return (
    <div className={styles.container}>
      <div className={styles.images_container}>
        {data &&
          data.images.map((res) => (
            <Image
              key={res.id}
              src={res.url}
              height={50}
              width={50}
              alt="a"
              priority
            />
          ))}
      </div>
    </div>
  );
}
