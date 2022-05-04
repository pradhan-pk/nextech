import { useRef } from "react";
import { useRouter } from "next/router";

const NewUserForm = () => {
  // use of useRef to capture input value
  const userNameInputRef = useRef();
  const userCollegeInputRef = useRef();
  const userBranchInputRef = useRef();

  // use of useRouter from next/router to redirect this page to the Homepage
  const router = useRouter();

  // implementation of newUserHandler function
  const newUserHandler = async (event) => {
    event.preventDefault();

    // store user data in an object
    const userData = {
      name: userNameInputRef.current.value,
      college: userCollegeInputRef.current.value,
      branch: userBranchInputRef.current.value,
    };

    // use of Fetch API to make a request to the new-user api and get back a response
    const response = await fetch("/api/new-user", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "content-Type": "application/json",
      },
    });

    // parses JSON response into native JavaScript objects
    const data = await response.json();

    console.log(data);

    // redirects this page to the Homepage
    router.replace("/");
  };

  const INPUT_STYLE =
    "my-2 p-2 border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-50 focus:outline-none w-full h-10 rounded-md";

  return (
    <div className="flex-col px-12 py-12 max-w-3xl mx-auto shadow-xl rounded-2xl">
      <h1 className="font-light text-4xl">Add a new User </h1>
      <form onSubmit={newUserHandler}>
        <input
          type="text"
          placeholder="User Name"
          required
          ref={userNameInputRef}
          className={INPUT_STYLE}
        />
        <input
          type="text"
          placeholder="College Name"
          required
          ref={userCollegeInputRef}
          className={INPUT_STYLE}
        />
        <input
          type="text"
          placeholder="Branch"
          required
          ref={userBranchInputRef}
          className={INPUT_STYLE}
        />
        <button
          type="submit"
          className="bg-yellow-500 text-gray-800 font-medium text-xl inline-flex  w-full items-center px-4 py-4 rounded-xl"
        >
          Add Now
        </button>
      </form>
    </div>
  );
};

export default NewUserForm;