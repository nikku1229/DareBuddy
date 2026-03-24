import { useEffect, useState, Activity } from "react";
import { fetchDaresCategory } from "../services/dareService";
import { usePlayer } from "../context/PlayerContext";
import LocationIcon from "../assets/Icons/LocationIcon.svg";
import CatagoryIcon from "../assets/Icons/CatagoryIcon.svg";
import CrossIcon from "../assets/Icons/CrossIcon.svg";

function SecondForm() {
  const { dareCategories, setDareCategories, category, setCategory } =
    usePlayer();
  const [isMoreCategoryVisible, setIsMoreCategoryVisible] = useState(false);

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
      const res = await fetchDaresCategory();
      setDareCategories(res.data);
    };

    getCategories();
  }, []);

  return (
    <>
      <section className="category-section">
        <div className="icon-box">
          <img src={LocationIcon} alt="Category" />
        </div>
        <h2>Where to Play?</h2>
        <div className="select-box">
          {dareCategories.slice(0, 7).map((c) => (
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
      </section>
      <Activity mode={isMoreCategoryVisible ? "visible" : "hidden"}>
        <section className="more-category-section">
          <div className="select-box-container">
            <div className="head">
              <h3>Select Category</h3>
              <img
                src={CrossIcon}
                alt="close"
                onClick={() => setIsMoreCategoryVisible(!isMoreCategoryVisible)}
              />
            </div>
            <div className="content">
              {dareCategories.slice(7).map((c) => (
                <div
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`option-box ${category === c ? "active" : ""}`}
                >
                  {c}
                </div>
              ))}
            </div>
          </div>
        </section>
      </Activity>
    </>
  );
}

export default SecondForm;
