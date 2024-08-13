import { useState, useCallback } from 'react';
import { projects_c, projects_react, projects_py } from '../../Data/ProjectsData';
import { IProject } from '../../Data/ProjectsData'; // Import the IProject interface

export const useProjects = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentProject, setCurrentProject] = useState<IProject | null>(null);

    const handleCardClick = useCallback((project: IProject) => {
        setCurrentProject(project);
        setShowModal(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setShowModal(false);
        setCurrentProject(null); // Ensure to reset current project on modal close
    }, []);

    return {
        showModal,
        currentProject,
        handleCardClick,
        handleCloseModal,
        projects_c,
        projects_react,
        projects_py,
    };
};