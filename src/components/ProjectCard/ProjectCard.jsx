import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({
  title,
  description,
  price,
  rating,
  downloads,
  isBestSeller,
  driveFile,
  thumbnail,
}) => {
  const formatDownloads = (num) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };

  return (
    <div className="project-card">
      {/* Project Image */}
      <div className="project-image-container">
        <img src={thumbnail} alt={title} className="project-image" />
        <div className="image-overlay"></div>

        {/* Best Seller Badge */}
        {isBestSeller && (
          <div className="best-seller-badge">
            <span className="award-icon">🏆</span>
            Best Seller
          </div>
        )}

        {/* Live View Button - appears on hover */}
        <div className="preview-button-container">
          <button
            onClick={() => window.open(driveFile, "_blank")}
            className="preview-button"
          >
            <span className="eye-icon">👁</span>
            Preview
          </button>
        </div>
      </div>

      {/* Project Content */}
      <div className="project-content">
        <h3 className="project-title">{title}</h3>

        <p className="project-description">{description}</p>

        {/* Rating and Downloads */}
        <div className="project-stats">
          <div className="stats-left">
            <div className="rating">
              <span className="star-icon">⭐</span>
              <span className="rating-value">{rating}</span>
            </div>
            <div className="separator"></div>
            <div className="downloads">
              <span className="download-icon">⬇</span>
              <span className="download-count">
                {formatDownloads(downloads)}
              </span>
            </div>
          </div>

          <div className="source-code-label">
            <span className="external-icon">🔗</span>
            <span>Source Code</span>
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="download-section">
        <div className="download-container">
          <div className="price-section">
            <div className="status-dot"></div>
            <span className="price">{price}</span>
          </div>

          <div className="action-buttons">
            <button
              onClick={() => window.open(driveFile, "_blank")}
              className="view-more-button"
            >
              <span className="eye-icon">👁</span>
              View More
            </button>

            <button
              onClick={() => window.open(driveFile, "_blank")}
              className="download-button"
            >
              <span className="download-icon">⬇</span>
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
