import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <>
      <section className="error-page">
        <Loader></Loader>
        <h1>Page not found!</h1>
        <button className="secondary-btn" onClick={() => navigate("/")}>
          Back to home
        </button>
      </section>
    </>
  );
}

export default ErrorPage;
