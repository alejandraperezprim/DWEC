import React, { useState, useEffect } from 'react';
import './Projects.css';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  useEffect(() => {
    fetch('/data/projectsData.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error al cargar los proyectos:', error));
  }, []);

  const handleProjectClick = (projectId) => {
    setSelectedProjectId(selectedProjectId === projectId ? null : projectId);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Mis Proyectos</h1>
      <div className="row">
        {projects.map((project) => (
          <div
            key={project.id}
            className="col-md-4 mb-4 d-flex justify-content-center"
          >
            <div className="card project-card" onClick={() => handleProjectClick(project.id)}>
              <img
                src={project.image}
                alt={project.title}
                className="card-img-top project-image"
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">
                  {selectedProjectId === project.id
                    ? project.fullDescription
                    : project.description}
                </p>
                {selectedProjectId === project.id && (
                  <a
                    href={project.link}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Proyecto
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
