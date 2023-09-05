import Link from "next/link";
import React from "react";
import Image from "next/image";
import { getDiscount } from "@/utils/helper";

const ProductCard = ({ data: { attributes: p, id } }) => {
  return (
    <Link
      href={`/product/${p?.slug}`}
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      <Image
        width={500}
        height={500}
        src={p.thumbnail.data.attributes.url}
        alt={p.name}
      />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">{p?.title}</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">&#8377;{p?.price}</p>
          {p?.orignal_price && (
            <>
              <p className="text-base  font-medium line-through">
                &#8377;{p?.orignal_price}
              </p>
              <p className="ml-auto text-base font-medium text-green-500">
                &#8377;{getDiscount(p?.orignal_price, p?.price)}% off
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
