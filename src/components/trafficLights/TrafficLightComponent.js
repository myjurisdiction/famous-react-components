import { useEffect, useState } from "react";

const lightDurationMap = {
  red: 4000,
  yellow: 500,
  green: 3000,
};

const nextLight = {
  red: "green",
  green: "yellow",
  yellow: "red",
};

const DEFAULT_COLOR = "grey";

export const TrafficLightComponent = ({ initialColor, orientation }) => {
  const [color, setColor] = useState(initialColor);

  useEffect(() => {
    const timer = setTimeout(() => {
      setColor(nextLight[color]);
    }, lightDurationMap[color]);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div
      className={`tl-container ${
        orientation === "horizontal" ? "horizontal" : "vertical"
      }`}
    >
      <Circle color="red" active={color === "red"} />
      <Circle color="yellow" active={color === "yellow"} />
      <Circle color="green" active={color === "green"} />
    </div>
  );
};

function Circle({ color, active }) {
  return (
    <div className={`tl-circle bg-${active ? color : DEFAULT_COLOR}`}></div>
  );
}
