// ProjectItem.tsx
import React from "react";

interface ProjectItemProps {
  title: string;
  description: string;
  githubLink?: string;
  mediumArticle?: string;
  imgSrc?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ imgSrc, mediumArticle, githubLink, title, description }) => {
  return (
    <div
    style={{ backgroundColor: "#15181C" }}
    className="font-medium m-10 rounded-lg shadow-lg h-full flex flex-col"
  >
    <div className="text-2xl p-5 flex flex-row items-stretch flex-grow">
      {imgSrc && (
        <img
          src={imgSrc}
          alt={`${title} project image`}
          className="w-96 h-full object-cover mr-5 rounded-lg"
        />
      )}
      <div className="flex flex-col flex-grow">
        <h3 className="font-bold text-white mb-2">{title}</h3>
        <p className="text-sm mb-4 flex-grow">{description}</p>
        <div className="flex space-x-4">
          {githubLink && (
            <a
              className="rounded-lg p-1 text-xs text-blue-300"
              href={githubLink}
            >
              GitHub Link
            </a>
          )}
          {mediumArticle && (
            <a
              className="rounded-lg p-1 text-xs text-blue-300"
              href={mediumArticle}
            >
              Medium Article
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
  );
};

export default ProjectItem;