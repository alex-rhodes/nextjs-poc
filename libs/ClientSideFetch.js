import fetch from "isomorphic-unfetch";

export default async function (...args) {
  const res = await fetch(...args);
  console.log("RES", res);
  return res.json();
}
