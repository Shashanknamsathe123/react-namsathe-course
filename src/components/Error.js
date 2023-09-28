import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();
  console.log(err, "....error");
  return (
    <>
      <div>Error</div>
      <h3>{err.status}</h3>
      <h3>{err.statusText}</h3>
    </>
  );
}

export default Error;
