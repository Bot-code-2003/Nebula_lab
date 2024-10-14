import React from "react";

const ClickedProject = () => {
  // Retrieve project data from local storage
  const projectData = JSON.parse(localStorage.getItem("project"));

  // Check if projectData exists
  if (!projectData) {
    return <div>No project data available.</div>; // Handle case when no project is found
  }

  return (
    <div className="flex flex-col items-center p-4">
      {/* Project Thumbnail */}
      <img
        src={projectData.projectThumbnail}
        alt={projectData.projectName}
        className="rounded-md w-[500px] object-cover mb-4 shadow-md"
      />

      {/* Project Name */}
      <h1 className="text-3xl font-bold mb-2">{projectData.projectName}</h1>

      {/* Author Info */}
      <p className="text-gray-600 text-lg mb-2">By: {projectData.author}</p>

      {/* Project Description */}
      <p className="text-gray-800 mb-4">{projectData.projectDescription}</p>

      {/* Tech Stack */}
      {projectData.techStack && (
        <p className="text-gray-600 mb-4">
          <strong>Tech Stack:</strong> {projectData.techStack}
        </p>
      )}

      {/* Project URL */}
      {projectData.projectURL && (
        <a
          href={projectData.projectURL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          View Project
        </a>
      )}
    </div>
  );
};

export default ClickedProject;
