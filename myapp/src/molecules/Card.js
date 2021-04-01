import Button from "../atoms/Button";

function Card({ meetup }) {
  return (
    <div
      style={{
        backgroundColor: "#C4C4C4",
        width: "40vh",
        padding: "10px",
        marginRight: "40px",
      }}
    >
      <p>{meetup.date}</p>
      <hr />
      <p>{meetup.name}</p>
      <p>
        {meetup.went} <span style={{ color: "#A8A8A8" }}>went</span>
      </p>
      <Button bgColor="#828282" color="white" title="View" />
    </div>
  );
}

export default Card;
