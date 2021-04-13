import { useParams } from "react-router";
import { useState, useEffect } from "react";

function Detail(props) {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((resp) => resp.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err))
      .finally(() => console.log("done"));
  }, []);

  return (
    <div>
      <h1>Detail</h1>
      <h1>{id}</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export default Detail;
