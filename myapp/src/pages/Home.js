import { useState, useEffect } from "react";
import { useHistory } from "react-router";

function Home(props) {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  // console.log(history, "history");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err))
      .finally(() => console.log("done"));
  }, []);

  const handleToDetail = (userId) => {
    history.push(`/detail/${userId}`);
  };

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}{" "}
            <button onClick={() => handleToDetail(user.id)}>Detail</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
