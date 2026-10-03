import { useEffect } from "react";

export const ReadyNote = ({ onReady }) => {
  useEffect(() => {
    onReady();
  }, []);

  return <></>;
};
