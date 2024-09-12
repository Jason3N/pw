import React from "react";

interface TechnologyItemProp {
  imageSrc: string; // Add this prop for the image source
}

const TechnologyItem: React.FC<TechnologyItemProp> = ({ imageSrc }) => {
  return (
    <div> 
      <div
        style = {{ backgroundColor: '#15181C' }} 
        className="w-14 rounded-lg flex flex-row items-center p-4 shadow-lg">
        <img src={imageSrc} className="w-5 h-5"/>
      </div>
    </div>
  );
};

export default TechnologyItem;
