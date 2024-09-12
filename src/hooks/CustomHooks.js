import React from "react";
import usePush from "./usePush";


const useNavigateTo = (path) => {
    const push = usePush();
  
    return () => push(path);
  };
export { usePush,useNavigateTo }