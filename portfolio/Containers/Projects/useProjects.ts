import { useState } from "react";
import { projects_react, projects_c, projects_py } from "../../Data/ProjectsData";

export const useProjects = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);

    const handleCardClick = (project) => {
        setCurrentProject(project);
        setShowModal(true);
    };

    const handleCloseModal = () => setShowModal(false);

    return {
        showModal,
        currentProject,
        handleCardClick,
        handleCloseModal,
        projects_react,
        projects_c,
        projects_py,
    };
};