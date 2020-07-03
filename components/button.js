import Link from "next/link";

export default function Button() {
  return (
    <>
      <Link href="//argos.co.uk/product/4642811" passHref={true}>
        <a>Add To Trolly</a>
      </Link>
      <style jsx>{`
        a {
          text-align: center;
          letter-spacing: normal;
          background-image: none;
          margin-bottom: 0;
          border-radius: 3px;
          box-sizing: border-box;
          border: 2px solid;
          line-height: normal;
          cursor: pointer;
          padding: 10px 16px 11px 16px;
          overflow: hidden;
          font-weight: 700;
          font-size: 16px;
          background-color: #ffffff;
          color: #008542;
          border-color: #008542;
          transition: background-color 0.2s ease, color 0.2s ease,
            border-color 0.2s ease;
          padding: 12px 16px 13px 16px;
          border-width: 0;
          background-color: #008542;
          color: #ffffff;
        }
      `}</style>
    </>
  );
}
