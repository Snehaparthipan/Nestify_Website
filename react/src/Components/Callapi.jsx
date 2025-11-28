import React, { useEffect, useState } from "react";

function Callapi() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((data) => setUsers(data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="apicard">
      <h1 className="apih1">User Testimonials</h1>

      <div className="usedetail">
        {users.map((user, index) => (
          <div className="apiusercards" key={index}>
            <img
              src={user.picture.large}
              alt="profile"
              className="userimg"
            />
            <h3>
              {user.name.last}
            </h3>
            <p className="email" >{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Callapi;
