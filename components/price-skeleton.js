import React from "react";
import ContentLoader from "react-content-loader";

const PriceSkeleton = (props) => (
  <ContentLoader
    speed={1}
    width={230}
    height={20}
    viewBox="0 0 230 20"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="3" ry="3" width="230" height="20" />
  </ContentLoader>
);

export default PriceSkeleton;
