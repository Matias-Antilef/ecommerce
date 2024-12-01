"use client";

import { useEffect, useState } from "react";
import styles from "./product.module.css";
import { ProductModel } from "@/models/product.model";
import Image from "next/image";

export default function ProductInfo({ params }: { params: { id: string } }) {
  const [data, setData] = useState<ProductModel>();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((res) => {
        setData(res[0]);
      })
      .catch((err) => console.error("Error al cargar los datos:", err));
  }, [params.id]);

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
