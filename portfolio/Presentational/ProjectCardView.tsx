import React from 'react';
import { Col } from "react-bootstrap";
import { IProject } from '../Data/ProjectsData'; // Import the IProject interface

interface IProjectCardViewProps extends IProject {
    onMouseOver: (e: React.MouseEvent<HTMLVideoElement>) => void;
    onMouseOut: (e: React.MouseEvent<HTMLVideoElement>) => void;
    onCardClick?: (project: IProject) => void;
}

const ProjectCardView: React.FC<IProjectCardViewProps> = React.memo(({
    title,
    description,
    l_desc,
    imgUrl,
    github_url,
    vercel_url,
    mp4,
    id,
    onCardClick,
    onMouseOver,
    onMouseOut,
}) => (
    <Col size={12} sm={6} md={4} onClick={() => onCardClick && onCardClick({ title, description, l_desc, imgUrl, github_url, vercel_url, mp4, id })}>
        <div className="proj-imgbx">
            <video
                id={`video${id}`}
                loop
                preload='none'
                muted
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
            >
                <source src={mp4} type='video/mp4' />
            </video>
            <img src={imgUrl} alt={title} />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
    </Col>
));

export default ProjectCardView;