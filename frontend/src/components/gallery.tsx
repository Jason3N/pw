// ProjectItem.tsx
import React from "react";

interface GalleryItemProps {
  title: string;
  description: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ title, description }) => {
  return (
    <div
    style={{ backgroundColor: "#15181C" }}
    className="font-medium m-10 rounded-lg shadow-lg h-full flex flex-col"
    >
    <div>
        <p>
            {title}
        </p>
    </div>
     <p>
            {description}
        </p>
 
     
  </div>
  );
};




export default GalleryItem;