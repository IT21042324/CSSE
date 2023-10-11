import { BusSeatView } from "../../component/inspector/busSeatView";

export const ViewAllocation = () => {
  const seatInfo = { row: 10 };

  return <BusSeatView seatInfo={seatInfo} />;
};
