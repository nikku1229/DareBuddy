import { useAlert } from "../context/AlertContext";
import AlertIcon from "../assets/Icons/AlertIcon.svg";

function Toast() {
  const { toast } = useAlert();

  return (
    <>
      {toast.length !== 0 && (
        <div className="toast">
          <img src={AlertIcon} alt="alert" />
          <p>{toast}</p>
        </div>
      )}
    </>
  );
}

export default Toast;
