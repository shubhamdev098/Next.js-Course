"use client";
import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ReviewDetail({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  // const random = getRandomInt(5);

  // if (random === 1) {
  //   throw new Error("Something went wrong");
  // }
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      <h1>
        Review {params.reviewId} for product {params.productId}
      </h1>
    </div>
  );
}
