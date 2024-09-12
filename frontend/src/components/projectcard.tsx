// ProjectItem.tsx
import React from "react";

interface ProjectItemProps {
  title: string;
  description: string;
  githubLink?: string;
  mediumArticle?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ mediumArticle, githubLink, title, description }) => {
  return (
    <div
      style = {{ backgroundColor: '#15181C' }} 
      className = "m-10 rounded-lg border-1">
        <div className="text-2xl p-5">
            <h3 className = "text-white mb-5">{title}</h3>
            <p className="text-xs w-60">{description}</p>
            {githubLink && <a 
              className = "mt-10 border-2 rounded-lg p-1 text-xs"
              href={
                githubLink
            }>github</a>}
            {mediumArticle && <a 
              className = "mt-10 border-2 rounded-lg p-1 text-xs"
              href={
                mediumArticle
            }>medium</a>}
        </div>
    </div>
  );
};

export default ProjectItem;
