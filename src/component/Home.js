import React, { useEffect } from "react";
import { GetApiAction, DeleteApiAction } from "../Redux/action/Action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const responsedata = useSelector((state) => state.Reducer.details);
  const isDeleteRespons = useSelector((state) => state.Reducer.isDeleteRespons);

  console.log("responsedata is --------", responsedata);

  useEffect(() => {
    dispatch(GetApiAction());
  }, [dispatch]);
  if (isDeleteRespons) {
    alert("your data has been Deleted !");
    window.location.reload(false);
  }

  const result = responsedata
    ? responsedata.map((data, i) => {
        return (
          <tr key={i}>
            <th scope="row">{data.id}</th>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.phoneno}</td>
            <td>{data.country}</td>
            <td>
              <Link to={`/edit/${data.id}`}>
                <span className="material-icons">edit</span>
              </Link>
            </td>
            <td>
              <span
                className="material-icons text-danger delete-icon"
                onClick={() => dispatch(DeleteApiAction(data.id))}
              >
                delete
              </span>
            </td>
          </tr>
        );
      })
    : null;

  return (
    <div>
      <table className="table table-dark mt-5">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">PhoneNo</th>
            <th scope="col">country</th>
            <th scope="col">edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>{result}</tbody>
      </table>
    </div>
  );
};

export default Home;
