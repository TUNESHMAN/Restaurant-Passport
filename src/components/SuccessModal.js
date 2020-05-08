import { Modal } from "antd";

function SuccessModal() {
  let secondsToGo = 30;
  const modal = Modal.success({
    title: "You have successfully added a restaurant",
    content: `Please click on the city to view it.`,
  });
  const timer = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
      content: `Please click on the city to view it.`,
    });
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
  }, secondsToGo * 1000);
}

export default SuccessModal;
