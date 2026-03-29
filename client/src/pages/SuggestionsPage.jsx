import { useEffect, useState } from "react";
import {
  fetchSuggestions,
  deleteSuggestions,
  updateStatusSuggestions,
} from "../services/suggestionService";
import { useSuggestions } from "../context/SuggestionsContext";
import { useAlert } from "../context/AlertContext";
import Header from "../components/Header";
import Toast from "../components/Toast";
import Loader from "../components/Loader";
import AlertIcon from "../assets/Icons/AlertIcon.svg";

function suggestionsPage() {
  const [password, setPassword] = useState("");

  const { isLogin, setIsLogin, suggestedDares, setSuggestedDares } =
    useSuggestions();
  const { showToast, setLoader, loader } = useAlert();

  const handleLogin = (e) => {
    e.preventDefault();

    if (import.meta.env.VITE_SUGGESTION_PASS === password) {
      showToast("login successful");
      localStorage.setItem("tokenPassword", password);
      setIsLogin(true);
      setPassword("");
    } else {
      showToast("login failed");
      setPassword("");
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await deleteSuggestions(id);
      console.log(res.data);
      getData();
      showToast("Delete Successful");
    } catch (err) {
      showToast("Failed to delete");
    }
  };

  const getData = async () => {
    try {
      setLoader(true);
      const res = await fetchSuggestions();
      console.log(res.data);
      setSuggestedDares(res.data);
    } catch (err) {
      showToast("Network Error");
    } finally {
      setLoader(false);
    }
  };

  const handleStatus = async (id, status) => {
    try {
      setLoader(true);

      await updateStatusSuggestions(id, status);

      showToast(`Marked as ${status}`);
      getData();
    } catch (err) {
      showToast("Failed to update status");
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    if (!isLogin) return;

    getData();
  }, [isLogin]);

  return (
    <>
      <Toast />
      <Header />
      {!isLogin ? (
        <>
          <section className="main-container auth-form-section">
            <form onSubmit={handleLogin}>
              <input
                type="password"
                value={password}
                placeholder="Enter Pass"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="primary-btn">
                Get Access
              </button>
            </form>
          </section>
        </>
      ) : (
        <>
          <section className="main-container data-section">
            {loader ? (
              <div className="loader-block">
                <h1>All Suggestions</h1>
                <Loader />
              </div>
            ) : (
              <>
                {suggestedDares.length > 0 ? (
                  <>
                    <h1>All Suggestions</h1>
                    <ul>
                      {suggestedDares.map((d, i) => (
                        <li className="list" key={i}>
                          <h2>{d.dare}</h2>
                          <h2>{d.category}</h2>
                          <h2>{d.type}</h2>
                          <h2
                            className={`status ${d.status === "approved" && "approved"} ${d.status === "rejected" && "rejected"} ${d.status === "pending" && "pending"}`}
                            onClick={() => {
                              d.status === "pending"
                                ? handleStatus(d._id, "approved")
                                : d.status === "approved"
                                  ? handleStatus(d._id, "rejected")
                                  : handleStatus(d._id, "pending");
                            }}
                          >
                            {d.status}
                          </h2>
                          <div
                            className="delete"
                            onClick={() => handleDelete(d._id)}
                          >
                            Delete
                          </div>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <>
                    <div className="empty">
                      <h1>All Suggestions</h1>
                      <img src={AlertIcon} alt="empty" />
                      <h2>No Suggestions</h2>
                    </div>
                  </>
                )}
              </>
            )}
          </section>
        </>
      )}
    </>
  );
}

export default suggestionsPage;
