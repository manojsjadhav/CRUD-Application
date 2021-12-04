import { useEffect, useState } from "react";
import { GetDetailsById } from "../Api/axiosRequest";

export default (props) => {
  const [detailsById, setDetailsById] = useState({});
  const GetDetailsByHooks = (requestId) => {
    return GetDetailsById(requestId).then((res) => {
      console.log("responsdata is ________", res);
      setDetailsById(res);
    });
  };

  useEffect(() => {
    GetDetailsByHooks(props);
  }, []);
  return [detailsById];
};
