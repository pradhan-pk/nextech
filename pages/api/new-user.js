import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  const DATABASE_NAME = "NexTech";
  const DATABASE_PASSWORD = "Nextech";

  if (req.method === "POST") {
    const client = await MongoClient.connect(
        `mongodb+srv://master:${DATABASE_PASSWORD}@nextech.5d1pu.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`
    );
    const db = client.db();
    const usersCollection = db.collection("users");
    await usersCollection.insertOne(req.body);

    client.close();

    res.status(201).send({ Message: "User added!" });
  }
};

export default handler;

