import React, { useState } from "react";
import { PostApiAction } from "../Redux/action/Action";
import { useDispatch, useSelector } from "react-redux";

const Form = () => {
  const [user, setUser] = useState({
    name: " ",
    email: " ",
    phoneno: " ",
    country: " ",
  });

  const handlInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUser((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };
  const dispatch = useDispatch();
  const isRespons = useSelector((state) => state.Reducer.isRespons);

  const clickHandler = (e) => {
    e.preventDefault();
    const finalData = {
      ...user,
    };
    dispatch(PostApiAction(finalData));
    console.log(finalData);
  };
  if (isRespons) {
    alert("your response has been submited !");
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
              id="inputName"
              value={user.name}
              name="name"
              placeholder="Name"
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
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
