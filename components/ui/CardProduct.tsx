"use client";

import { SVGcart } from "@/assets/IconsSVG";
import { PublicRoutes } from "@/models/routes";
import Image from "next/image";
import Link from "next/link";

const CardProduct = ({
  id,
  title,
  brand,
  price,
  discount,
  rating,
  images,
}: {
  id: number;
  title: string;
  brand: string;
  price: number;
  discount: number;
  rating: number;
  images: { id: number; url: string }[];
}) => {
  return (
    <Link href={`${PublicRoutes.PRODUCT_INFO}/${id}`}>
      <article className="mb-5 w-[280px] bg-gray-50 ">
        <div className="relative h-[250px] w-full">
          <button
            className="  absolute top-0 right-0 pt-2 pr-2 h-10 w-10  z-10"
            onClick={() => alert("agregado a carrito")}
          >
            <SVGcart />
          </button>
          <Image src={images[0].url} alt="test" fill className="object-cover" />
        </div>

        <div className="pt-3">
          <div className="pb-3">
            <span className="text-sm font-semibold"> {brand} </span>
            <h6 className="font-semibold"> {title} </h6>
          </div>

          <div className="pb-2">{rating}</div>

          <div className="flex flex-col pb-1">
            <div className="flex gap-2 items-center">
              <span className=" text-red-500 font-semibold text-xl">
                $ {price - (price * discount) / 100} USD
              </span>
              <span className="bg-red-500 text-white font-bold py-1 px-2 rounded-lg">
                {discount}% OFF
              </span>
            </div>
            <span className="line-through italic text-base">${price} USD</span>
          </div>
        </div>
      </article>
    </Link>
  );
};
export default CardProduct;
