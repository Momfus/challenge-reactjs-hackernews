import Layout from "../../Components/Layout/layout";
import { useNavigate } from "react-router-dom";

/**
 * Renders a NotFound page with a message and a button to navigate back to the home page.
 * @returns JSX.Element
 */
const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-lg mb-4">
          Sorry, the page you are looking for could not be found.
        </p>
        <button
          className="bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate("/")}
        >
          Go Back To Home
        </button>
      </div>
    </Layout>
  );
};

export default NotFound;
