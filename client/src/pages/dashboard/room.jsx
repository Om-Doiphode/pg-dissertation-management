import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import "./room.css";
const Room = () => {
  const { roomId } = useParams();

  const config = async (element) => {
    const appID = 1884666751;
    const serverSecret = "91ec2ae84c5c16e4c2895a5ef6a7e07e";
    const token = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Username"
    );
    const zp = ZegoUIKitPrebuilt.create(token);
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };

  return (
    <div className="room-page">
      <div className="room-container" ref={config}></div>
    </div>
  );
};
export default Room;
