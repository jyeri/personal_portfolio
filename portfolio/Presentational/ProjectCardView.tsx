import React from 'react';
import { Col } from "react-bootstrap";

interface IProjectCardViewProps {
    title: string;
    description: string;
    l_desc: string;
    imgUrl: string;
    github_url: string | null;
    vercel_url: string | null;
    mp4: string;
    id: number;
    onCardClick?: (project: any) => void;
    onMouseOver: (e: React.MouseEvent<HTMLVideoElement>) => void;
    onMouseOut: (e: React.MouseEvent<HTMLVideoElement>) => void;
}

const ProjectCardView: React.FC<IProjectCardViewProps> = ({
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
);

export default ProjectCardView;