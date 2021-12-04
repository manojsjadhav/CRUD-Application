import axios from "axios";

export async function axisRequest(url, method, headers, params) {
  return params
    ? axios({
        url: url,
        method: method,
        headers: headers,
        data: params,
        timeout: 1000,
      })
    : axios({
        url: url,
        method: method,
        headers: headers,
        data: {},
        timeout: 1000,
      });
}

const GetApiDetails = () => {
  const headers = {
    "content-type": "application/json",
  };
  return axisRequest("http://127.0.0.1:3003/details", "GET", headers, {});
};

const PostApiDetails = (data) => {
  const headers = {
    "content-type": "application/json",
  };
  return axisRequest("http://127.0.0.1:3003/details", "POST", headers, data);
};

const GetDetailsById = (id) => {
  const headers = {
    "content-type": "application/json",
  };
  return axisRequest("http://127.0.0.1:3003/details/" + id, "GET", headers, {});
};

const UpdateApiDetails = (data, id) => {
  const headers = {
    "content-type": "application/json",
  };
  return axisRequest(
    "http://127.0.0.1:3003/details/" + id,
    "PUT",
    headers,
    data
  );
};

const DeleteApiDetails = (id) => {
  const headers = {
    "content-type": "application/json",
  };
  return axisRequest(
    "http://127.0.0.1:3003/details/" + id,
    "DELETE",
    headers,
    {}
  );
};

export {
  GetApiDetails,
  PostApiDetails,
  GetDetailsById,
  UpdateApiDetails,
  DeleteApiDetails,
};
