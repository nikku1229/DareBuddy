import { useState, Activity } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { addSuggestions } from "../services/suggestionService";
import { useAlert } from "../context/AlertContext";
import Loader from "../components/Loader";
import Toast from "../components/Toast";
import Logo from "../assets/Logos/Favicon.png";
import CrossIcon from "../assets/Icons/CrossIcon.svg";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { showToast, loader, setLoader } = useAlert();

  const [isSuggestionBoxVisible, setIsSuggestionBoxVisible] = useState(false);
  const [dare, setDare] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");

  const handleSuggestion = async (e) => {
    e.preventDefault();

    try {
      setLoader(true);
      const data = {
        dare: dare,
        category: category.toLowerCase(),
        type: type,
      };

      const res = await addSuggestions(data);
      showToast("Request Sended");
      setDare("");
      setCategory("");
      setType("");
    } catch (err) {
      showToast(err.response?.data || err.message || "Network Error");
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      <header>
        <div className="logo" onClick={() => navigate("/")}>
          <img src={Logo} alt="Logo" className="logo" />
        </div>

        {location.pathname === "/" && (
          <div className="header-btn">
            <button
              onClick={() => setIsSuggestionBoxVisible(!isSuggestionBoxVisible)}
              className="primary-btn"
            >
              Suggest your dares
            </button>
          </div>
        )}
      </header>

      <Activity mode={isSuggestionBoxVisible ? "visible" : "hidden"}>
        <section className="suggestion-box-section">
          <Toast />
          <div className="suggestion-form">
            <div className="head">
              <h2>Suggest your dares</h2>
              <img
                src={CrossIcon}
                alt="close"
                onClick={() =>
                  setIsSuggestionBoxVisible(!isSuggestionBoxVisible)
                }
              />
            </div>

            {loader ? (
              <>
                <div className="loader">
                  <Loader />
                </div>
              </>
            ) : (
              <>
                <form onSubmit={handleSuggestion}>
                  <div className="field">
                    <label htmlFor="dare">Dare*</label>
                    <input
                      id="dare"
                      type="text"
                      placeholder="Enter dare..."
                      value={dare}
                      onChange={(e) => setDare(e.target.value)}
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="category">Category*</label>
                    <input
                      id="category"
                      type="text"
                      placeholder="Enter where to play dare..."
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      required
                    />
                  </div>
                  <div className="field">
                    <p>Type*</p>
                    <div className="input">
                      <span>
                        <input
                          type="radio"
                          name="type"
                          id="veg"
                          value="veg"
                          onChange={(e) => {
                            setType("veg");
                          }}
                          required
                        />
                        <label htmlFor="veg">Veg</label>
                      </span>
                      <span>
                        <input
                          type="radio"
                          name="type"
                          id="nonveg"
                          value="nonveg"
                          onChange={(e) => {
                            setType("nonveg");
                          }}
                          required
                        />
                        <label htmlFor="nonveg">Non Veg</label>
                      </span>
                    </div>
                  </div>
                  <button type="submit" className="primary-btn">
                    Send suggestion
                  </button>
                </form>
              </>
            )}
          </div>
        </section>
      </Activity>
    </>
  );
}

export default Header;
