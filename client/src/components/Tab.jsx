import { useSnapshot } from "valtio";
import state from "../store";
const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state);

  const isActiveStyle =
    isActiveTab && isFilterTab
      ? { bacgroundColor: snap.color, opacity: 0.5 }
      : { bacgroundColor: "trasnparent", opacity: 1 };
  return (
    <div
      key={tab.name}
      className={`tab-btn ${
        isFilterTab ? "rounded-full glassmorhism" : "rounded-4"
      }`}
      style={isActiveStyle}
    >
      <img
        src={tab.icon}
        alt={tab.name}
        className={`${isFilterTab ? "w-2/3 h-2/3" : " w-11/12 h-11/12"}`}
        onClick={handleClick}
      />
    </div>
  );
};
export default Tab;
