import { useEffect, useState, Activity } from "react";
import { fetchDaresCategory } from "../services/dareService";
import { usePlayer } from "../context/PlayerContext";
import { useAlert } from "../context/AlertContext";
import Toast from "./Toast";
import Loader from "./Loader";
import LocationIcon from "../assets/Icons/LocationIcon.svg";
import CatagoryIcon from "../assets/Icons/CatagoryIcon.svg";
import CrossIcon from "../assets/Icons/CrossIcon.svg";

function SecondForm() {
  const { dareCategories, setDareCategories, category, setCategory } =
    usePlayer();
  const { loader, setLoader, showToast } = useAlert();
  const [isMoreCategoryVisible, setIsMoreCategoryVisible] = useState(false);
  const [visibleCount, setVisibleCount] = useState(7);

  const categoryIcon = {
    beach: "🏄‍♂️",
    college: "🎓",
    couple: "👩‍❤️‍👨",
    festival: "🎊",
    friends: "🫂",
    gaming: "🎮",
    gym: "🏋️‍♂️",
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        setLoader(true);
        const res = await fetchDaresCategory();
        setDareCategories(res.data);
      } catch (err) {
        showToast("Network Error!");
      } finally {
        setLoader(false);
      }
    };

    getCategories();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setVisibleCount(3);
      } else if (window.innerWidth <= 768) {
        setVisibleCount(5);
      } else {
        setVisibleCount(7);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Toast />
      <section className="category-section">
        <div className="icon-box">
          <img src={LocationIcon} alt="Category" />
        </div>
        <h2>Where to Play?</h2>

        {loader ? (
          <>
            <Loader />
          </>
        ) : (
          <div className="select-box desk-show">
            {dareCategories &&
              dareCategories.slice(0, visibleCount).map((c) => (
                <div
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`option-box ${category === c ? "active" : ""}`}
                >
                  <span>{categoryIcon[c] || "💫"}</span> {c}
                </div>
              ))}
            <div
              className="option-box"
              onClick={() => setIsMoreCategoryVisible(!isMoreCategoryVisible)}
            >
              <span>
                <img src={CatagoryIcon} alt="more" />
              </span>
              See more
            </div>
          </div>
        )}
      </section>
      <Activity mode={isMoreCategoryVisible ? "visible" : "hidden"}>
        <section className="more-category-section">
          <div className="select-box-container desk-show">
            <div className="head">
              <h3>Select Category</h3>
              <img
                src={CrossIcon}
                alt="close"
                onClick={() => setIsMoreCategoryVisible(!isMoreCategoryVisible)}
              />
            </div>
            {loader ? (
              <Loader />
            ) : (
              <div className="content">
                {dareCategories &&
                  dareCategories.slice(visibleCount).map((c) => (
                    <div
                      key={c}
                      onClick={() => setCategory(c)}
                      className={`option-box ${category === c ? "active" : ""}`}
                    >
                      {c}
                    </div>
                  ))}
              </div>
            )}
          </div>
        </section>
      </Activity>
    </>
  );
}

export default SecondForm;
