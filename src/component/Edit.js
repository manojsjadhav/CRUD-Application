import React, { useEffect, useState } from "react";
import { UpdateApiAction } from "../Redux/action/Action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import GetDetailsByHooks from "../Hooks/GetDetailsByHooks";

const Edit = () => {
  const { id } = useParams();
  console.log("params id is ______", id);
  const [user, setUser] = useState({
    name: " ",
    email: " ",
    phoneno: " ",
    country: " ",
  });
  const dispatch = useDispatch();
  const isUpdateRespons = useSelector((state) => state.Reducer.isUpdateRespons);
  const [detailsById] = GetDetailsByHooks(id);
  console.log("detailsById is *******", detailsById);

  useEffect(() => {
    const datares = () => {
      console.log(detailsById);
      if (detailsById) {
        setUser((prevval) => {
          return {
            ...prevval,
            name: detailsById?.data?.name,
            email: detailsById?.data?.email,
            phoneno: detailsById?.data?.phoneno,
            country: detailsById?.data?.country,
          };
        });
      }
    };
    datares();
  }, [detailsById]);
  console.log(user, "useruser");
  const handlInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUser((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const clickHandler = (e) => {
    e.preventDefault();
    const finalData = {
      ...user,
    };
    dispatch(UpdateApiAction(finalData, id));
    console.log(finalData);
  };
  if (isUpdateRespons) {
    alert("your data has been Updated");
  }
  return (
    <div>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputName">Name</label>
            <input
              type="text"
              className="form-control"
              id="inputname"
              value={user.name}
              name="name"
              placeholder="Name"
              defaultValue={user.name}
              onChange={handlInput}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              value={user.email}
              name="email"
              placeholder="Email"
              defaultValue={user.email}
              onChange={handlInput}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputPhone">Phone</label>
            <input
              type="text"
              className="form-control"
              id="inputPhone"
              value={user.phoneno}
              name="phoneno"
              placeholder="Phone"
              defaultValue={user.phoneno}
              onChange={handlInput}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputCountry">Country</label>
            <input
              type="text"
              className="form-control"
              id="inputCountry"
              value={user.country}
              name="country"
              placeholder="Country"
              defaultValue={user.country}
              onChange={handlInput}
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => {
            clickHandler(e);
          }}
        >
          Update Detail
        </button>
      </form>
    </div>
  );
};

export default Edit;
