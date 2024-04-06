import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};
function Spinner({ loading }) {
  return (
    <ClipLoader
      cssOverride={override}
      size={150}
      color={"#123abc"}
      aria-label="loaing spinner"
      data-testid="loader"
      loading={loading}
    />
  );
}

export default Spinner;
