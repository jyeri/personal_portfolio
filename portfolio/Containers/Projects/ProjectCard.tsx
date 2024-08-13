import React from 'react';
import { IProject } from '../../Data/ProjectsData'; // Import the IProject interface
import { useProjectCard } from './useProjectCard';
import ProjectCardView from '../../Presentational/ProjectCardView';

interface IProjectCardProps extends IProject {
    onCardClick?: (project: IProject) => void;
}

const ProjectCard: React.FC<IProjectCardProps> = React.memo((props) => {
    const { handleOnMouseOver, handleOnMouseOut } = useProjectCard();

    return <ProjectCardView {...props} onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut} />;
});

export default ProjectCard;