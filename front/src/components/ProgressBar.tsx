import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";

const ProgressBar = ({ progressProps }) => {
  const [progress, setProgress] = useState(progressProps);

  return (
    <LoadingBar
      color={"#66b2f9"}
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
    />
  );
};

export default ProgressBar;
