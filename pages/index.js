import Link from "next/link";
import fetch from "node-fetch";
import useSWR from "swr";

import ClientSideFetch from "../libs/ClientSideFetch";
import Button from "../components/button";
import PriceSkeleton from "../components/price-skeleton";

function Index({ productData, avgRating }) {
  const { partNumber, name } = productData.attributes;

  const { data } = useSWR(
    "https://www.argos.co.uk/product-api/pdp-service/partNumber/4642811",
    ClientSideFetch
  );
  console.log("!!!", data);
  return (
    <div className="container">
      <div className="content-block">
        <div className="image-container">
          <img
            className="product-image"
            src={`//media.4rgos.it/s/Argos/${partNumber}_R_SET?w=270&h=270&qlt=75&fmt.jpeg.interlaced=true`}
          />
        </div>
        <div className="text-container">
          <p>{name}</p>
          <p>This product has {avgRating} ⭐️'s</p>
          <div className="price">
            {data ? <strong>Price Here</strong> : <PriceSkeleton />}
          </div>
        </div>
      </div>
      <div className="button-container">
        <Button />
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          position: relative;
          padding: 15px 0px;
          max-width: 230px;
          height: 450px;
          border: 1px solid;
          border-radius: 8px;
        }
        .content-block {
          margin-bottom: 20px;
        }
        .image-container {
          transition: opacity 0.5s;
          position: relative;
          padding: 100% 0 0;
        }
        .product-image {
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;
          max-width: 100%;
          max-height: 100%;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        }
        .text-container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        .button-container {
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          margin-top: auto;
        }
        .price {
          margin-top: 5px;
        }
        p {
          margin: 0;
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  const product = await fetch(
    "https://www.argos.co.uk/product-api/pdp-service/partNumber/4642811"
  );
  const { data, included } = await product.json();

  const avgRating = included.filter((attribute) => {
    const rating = attribute?.attributes?.avgRating;
    return typeof rating === "number";
  });

  return {
    props: {
      productData: data,
      avgRating:
        Math.round((avgRating[0].attributes.avgRating + Number.EPSILON) * 100) /
        100,
    },
  };
}

export default Index;
