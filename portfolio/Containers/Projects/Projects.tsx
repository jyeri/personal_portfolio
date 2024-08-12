import React from 'react';
import { ProjectsView } from '../../Presentational/ProjectsView';
import { useProjects } from './useProjects';

export const Projects = () => {
    const { showModal, currentProject, handleCardClick, handleCloseModal, projects_c, projects_react, projects_py } = useProjects();

    return (
        <ProjectsView
            showModal={showModal}
            currentProject={currentProject}
            onCardClick={handleCardClick}
            onCloseModal={handleCloseModal}
            projects_c={projects_c}
            projects_react={projects_react}
            projects_py={projects_py}
        />
    );
};