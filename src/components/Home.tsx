import { useState } from "react";
import { getToken, getTestData } from "../service/api";

const Home = () => {
  const [content, setContent] = useState<string>("");

  const getTickets = async () => {
    const token = await getToken();
    const data = await getTestData(token);

    setContent(data);
  };

  return (
    <div>
      <h1 className="font-bold text-3xl">Home</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 font-bold rounded"
        onClick={getTickets}
      >
        Get Tickets
      </button>
      {content && <pre>{content}</pre>}
    </div>
  );
};

export default Home;
