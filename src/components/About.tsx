import { getToken, writeTicket } from "../service/api";

const About = () => {
  const createTicket = async () => {
    const token = await getToken();
    await writeTicket(token);
  };

  return (
    <div>
      <h2>About</h2>
      <p>This is the about page.</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 font-bold rounded"
        onClick={createTicket}
      >
        Create Tickets
      </button>
    </div>
  );
};

export default About;
