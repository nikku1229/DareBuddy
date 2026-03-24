import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePlayer } from "../context/PlayerContext";
import Header from "../components/Header";
import FirstForm from "../components/FirstForm";
import SecondForm from "../components/SecondForm";
import ThirdForm from "../components/ThirdForm";
import ForthForm from "../components/ForthForm";
import NextArrowIcon from "../assets/Icons/NextArrowIcon.svg";
import PreviousArrowIcon from "../assets/Icons/PreviousArrowIcon.svg";

export default function SetupGame() {
  const navigate = useNavigate();
  const { step, category, type, names, next, back } = usePlayer();

  // START GAME
  const startGame = () => {
    navigate("/game", {
      state: {
        players: names,
        category,
        type,
      },
    });
  };

  return (
    <div className="main-container">
      <Header></Header>
      <div className="form-container">
        <ul className="steps">
          <li className="step active-step"></li>
          <li className={`step ${step >= 2 && "active-step"}`}></li>
          <li className={`step ${step >= 3 && "active-step"}`}></li>
          <li className={`step ${step >= 4 && "active-step"}`}></li>
        </ul>

        {step === 1 && <FirstForm />}

        {step === 2 && <SecondForm />}

        {step === 3 && <ThirdForm />}

        {step === 4 && <ForthForm />}

        <section className="form-change-btns">
          {step >= 2 && (
            <button onClick={back} className="back-btn primary-btn">
              <img src={PreviousArrowIcon} alt="back" />
              Back
            </button>
          )}
          {step < 4 && (
            <button onClick={next} className="next-btn secondary-btn">
              Next
              <img src={NextArrowIcon} alt="next" />
            </button>
          )}

          {step === 4 && (
            <button onClick={startGame} className="start-btn secondary-btn">
              start Game
              <img src={NextArrowIcon} alt="next" />
            </button>
          )}
        </section>
      </div>
    </div>
  );
}
