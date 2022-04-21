import { Axios } from "axios";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Dashboard from "./../assets/dashboard.png";
import Nave from "./Nave";

export default function Admin() {
  const nav = useNavigate();

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/login").then((res) => {
  //     if (res.data.loggedIn === true) {
  //       // setLoginStatus(res.data.user[0].name);
  //       alert ('hello')
  //     }
  //   });
  // }, []);

  const logout = () => {
    // e.preventDefault();
    localStorage.clear();
    nav("/login");
  };
  return (
<div>
<Nave/>

</div>
  );
}
