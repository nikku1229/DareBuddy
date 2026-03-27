import { useAlert } from "../context/AlertContext";

function Loader() {
  const { loader } = useAlert();

  return (
    <>
      <div className="loader">
        <div className="loader-circle first"></div>
        <div className="loader-circle second"></div>
        <div className="loader-circle third"></div>
        <div className="loader-circle forth"></div>
        <div className="loader-circle fifth"></div>
      </div>
    </>
  );
}

export default Loader;
