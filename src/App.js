import "./styles.css";
import { useEffect, useState } from "react";
import { usefetchUserDetails } from "./hooks/useFetchUserDetails";
export default function App() {
  // useEffect(() => {
  //   const url = "https://jsonplaceholder.typicode.com/users";
  //   const fetchData = fetch(url)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setUserdata(data);
  //     });
  // }, []);

  //fetchUserDetails()

  //   const cities = data.map(user => user.address.city);
  // console.log(cities);

  const { userdata } = usefetchUserDetails();

  const handleDelete = (index) => {
    setUserdata(userdata.filter((_, i) => i !== index));
  };
  return (
    <>
      {/* <fetchUserDetails /> */}
      <div className="App">
        <h1>User Details</h1>
        <ul>
          {userdata.map((users, index) => (
            <div key={index}>
              {users.id} {users.name} {users.address.city}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
