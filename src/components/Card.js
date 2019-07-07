import React from "react";

import CardTitle from "./CardTitle";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";

export default function Card(props) {
  return (
    <>
      <CardTitle titleName={props.titleName} />
      <CardContent imgUrl={props.imgUrl} />
      <CardFooter />
    </>
  );
}
