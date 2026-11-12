import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

interface ProjectItemProps {
  title: string;
  description: string;
  githubLink?: string;
  mediumArticle?: string;
  imgSrc?: string;
  category?: string;
  tags?: string[];
}

const ProjectItem = ({
  imgSrc,
  mediumArticle,
  githubLink,
  title,
  description,
  category,
  tags = [],
}: ProjectItemProps) => (
  <article className={imgSrc ? "project-card" : "project-card project-card-compact"}>
    {imgSrc && (
      <div className="project-preview">
        <img src={imgSrc} alt={`${title} application preview`} loading="lazy" width="960" height="600" />
      </div>
    )}
    <div className="project-content">
      {category && <p className="eyebrow">{category}</p>}
      <h3>{title}</h3>
      <p className="project-description">{description}</p>
      {tags.length > 0 && (
        <ul className="project-tags" aria-label="Project technologies">
          {tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
      )}
      <div className="project-links">
        {mediumArticle && (
          <a href={mediumArticle} target="_blank" rel="noreferrer" aria-label={`Read the ${title} case study`}>
            Read the Medium Article <FiArrowUpRight aria-hidden="true" />
          </a>
        )}
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noreferrer" aria-label={`View ${title} on GitHub`}>
            <FaGithub aria-hidden="true" /> Code <FiArrowUpRight aria-hidden="true" />
          </a>
        )}
      </div>
    </div>
  </article>
);

export default ProjectItem;
