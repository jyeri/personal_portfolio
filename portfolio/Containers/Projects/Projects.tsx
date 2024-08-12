import React from 'react';
import { useProjects } from './useProjects';
import ProjectsView from '../../Presentational/ProjectsView';

export const ProjectsContainer = () => {
    const {
        showModal,
        currentProject,
        handleCardClick,
        handleCloseModal,
        projects_react,
        projects_c,
        projects_py,
    } = useProjects();

    return (
        <ProjectsView
            showModal={showModal}
            currentProject={currentProject}
            onCardClick={handleCardClick}
            onCloseModal={handleCloseModal}
            projects_react={projects_react}
            projects_c={projects_c}
            projects_py={projects_py}
        />
    );
};