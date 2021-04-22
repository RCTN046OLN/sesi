function UserCard({ user, onClick }) {
  return (
    <li key={user.id}>
      {user.name} - <button onClick={() => onClick(user.id)}>Detail</button>
    </li>
  );
}

export default UserCard;
