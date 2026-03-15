import { useState, useEffect } from "react";

export const usefetchUserDetails = () => {
  const [userdata, setUserdata] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const fetchData = fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUserdata(data);
      });
  }, []);
  console.log(userdata);
  return { userdata, setUserdata };
};
