import User from "./User";
const UserList = (props) => {
  return (
    <div className="flex flex-wrap">
      {props.users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};
export default UserList;