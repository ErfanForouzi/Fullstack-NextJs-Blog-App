import React, { useEffect, useRef } from "react";

const useOutsideClick = (handler,listenCapture=true) => {
  const ref = useRef();
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }
    document.addEventListener("click", handleClick,listenCapture);

    return () => document.removeEventListener("click", handleClick,listenCapture);
  }, [handler]);

  return ref;
};

export default useOutsideClick;
