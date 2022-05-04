import UserList from "../components/UserList";
import { MongoClient } from "mongodb";
const HomePage = (props) => {
  return <UserList users={props.userList} />;
};
export async function getStaticProps() {
    const DATABASE_NAME = "NexTech";
    const DATABASE_PASSWORD = "Nextech";

  const client = await MongoClient.connect(
    `mongodb+srv://master:${DATABASE_PASSWORD}@nextech.5d1pu.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`
  );
  const db = client.db();
  const usersCollection = db.collection("users");
  const users = await usersCollection.find().toArray();

  client.close();

  return {
    props: {
      userList: users.map((user) => ({
        id: user._id.toString(),
        name: user.name,
        college: user.college,
        branch: user.branch,
      })),
    },
  };
}
export default HomePage;