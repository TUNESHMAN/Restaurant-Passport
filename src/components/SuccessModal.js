import React, {useState} from "react";
import { Modal, Button } from "antd";

function SuccessModal() {
  let secondsToGo = 30;
  const modal = Modal.success({
    title: "You have successfully added a restaurant",
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

export default SuccessModal;


