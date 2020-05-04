import React from "react";
import { Modal, Button } from "antd";

function WarningModal() {
  let secondsToGo = 5;
  const modal = Modal.error({
    title: "Sorry, the restaurant details could not be added. Please try again!",
    content: `This modal will be destroyed after ${secondsToGo} second.`,
  });
  const timer = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
      content: `This modal will be destroyed after ${secondsToGo} second.`,
    });
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
  }, secondsToGo * 1000);
 
}

export default WarningModal;
