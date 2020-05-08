import { Modal} from "antd";

function WarningModal() {
  let secondsToGo = 20;
  const modal = Modal.error({
    title: "Sorry, the restaurant details could not be added. Please try again!",
    content: `Please check that the restaurant doesn't already exist`,
  });
  const timer = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
      content: `Please check that the restaurant doesn't already exist`,
    });
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
  }, secondsToGo * 1000);
 
}

export default WarningModal;
