import { TrafficLightComponent } from "./TrafficLightComponent";

export const TrafficLight = () => {
  return (
    <>
      <TrafficLightComponent orientation={"vertical"} initialColor={"green"} />
      <TrafficLightComponent
        orientation={"horizontal"}
        initialColor={"green"}
      />
    </>
  );
};
