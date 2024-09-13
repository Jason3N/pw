import React from "react";

interface TechnologyItemProp {
  icon: JSX.Element | null;
}

const TechnologyItem: React.FC<TechnologyItemProp> = ({ icon }) => {
  return (
    <div>
      <div
        style={{ backgroundColor: "#15181C" }}
        className="w-24 h-24 rounded-lg flex flex-col items-center justify-center shadow-lg"
      >
        {icon ? (
          <div className="pl-2 w-20 h-auto text-white">{icon}</div>
        ) : (
          <div className="text-white">{icon}</div> // Fallback when no icon is provided
        )}
      </div>
    </div>
  );
};

export default TechnologyItem;
