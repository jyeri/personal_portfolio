import React from 'react';
import { useProjectCard } from './useProjectCard';
import ProjectCardView from '../../Presentational/ProjectCardView';

interface IProjectCardProps {
    title: string;
    description: string;
    l_desc: string;
    imgUrl: string;
    github_url: string | null;
    vercel_url: string | null;
    mp4: string;
    id: number;
    onCardClick?: (project: any) => void;
}

const ProjectCard: React.FC<IProjectCardProps> = (props) => {
    const { handleOnMouseOver, handleOnMouseOut } = useProjectCard();

    return <ProjectCardView {...props} onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut} />;
};

export default ProjectCard;