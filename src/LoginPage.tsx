import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { setAccessToken } from "./localstorage";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const location = useLocation();

  const lang = location.pathname.split("/")[1];

  let realPassword = "";

  if (lang === "tr") {
    realPassword = "yfy4$!D";
  }
  if (lang === "es") {
    realPassword = "HmgC53!";
  }
  if (lang === "pt") {
    realPassword = "8hiFj!";
  }
  if (lang === "uz") {
    realPassword = "6Gi7sj";
  }
  if (lang === "fr") {
    realPassword = "skj52sj";
  }
  if (lang === "en") {
    realPassword = "djT9!g";
  }
  if (lang === "az") {
    realPassword = "tn0!G4";
  }
  if (lang === "kg") {
    realPassword = "9Gwok$v";
  }

  const submit = () => {
    if (username === "timetobet") {
      if (password === realPassword) {
        setAccessToken();
        alert("Logged in");
        navigate(`/${window.location.pathname.split("/")[1]}`);
      } else {
        alert("Password is incorrect");
      }
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-200 flex items-center justify-center flex-col space-y-4">
      <input
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-gray-600 px-4 py-2 text-white" onClick={submit}>
        Submit
      </button>
    </div>
  );
};
