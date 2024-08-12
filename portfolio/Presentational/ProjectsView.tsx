import React from 'react';
import { Row, Col, Container, Tab, Nav, Modal, Button } from "react-bootstrap";
import ProjectCard from "../Containers/Projects/ProjectCard";
import github from '../Assets/github-icon-1.svg';
import Vercel from '../Assets/Vercel.svg';

export const ProjectsView = ({ showModal, currentProject, onCardClick, onCloseModal, projects_c, projects_react, projects_py }) => (
    <div>
    <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <p>Small showcase of projects I have worked on during and after my studies, more detailed list can be seen on my github. Hovering starts small preview and clicking gives more detailed description.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Full Stack</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Back-end</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Python</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content id="slideInUp" className={"animate__animated animate__slideInUp"}>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {projects_react.map((project, index) => (
                                            <ProjectCard
                                                key={index}
                                                {...project}
                                                onCardClick={onCardClick}
                                            />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {projects_c.map((project, index) => (
                                            <ProjectCard
                                                key={index}
                                                {...project}
                                                onCardClick={onCardClick}
                                            />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {projects_py.map((project, index) => (
                                            <ProjectCard
                                                key={index}
                                                {...project}
                                                onCardClick={onCardClick}
                                            />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <Modal show={showModal} onHide={onCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{currentProject?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{currentProject?.l_desc}</p>
                    <video controls src={currentProject?.mp4} style={{ width: '100%' }}>
                        Your browser does not support the video tag.
                    </video>
                    
                    <div className="modal-linkbox">
                    {(currentProject?.github_url) && (
                      <div className="modal-linkbox__github">
                        {currentProject?.github_url && (
                        <a target='_blank' href={currentProject?.github_url} className='git'><img className="modal-linkbox__icon" src={github} alt=''/><span className="modal-linkbox__text">Github</span></a>)}
                      </div>)}
                      {(currentProject?.vercel_url) && (
                      <div className="modal-linkbox__vercel">
                        {currentProject?.vercel_url && (
                        <a target='_blank' href={currentProject?.vercel_url} className='vercel'><img className="modal-linkbox__icon" src={Vercel} alt=''/><span className="modal-linkbox__text">Vercel</span></a>)}
                      </div>
                      )}
                      <Button className="close-bottom" variant="secondary" onClick={onCloseModal}>
                        Close
                      </Button>
                    </div>
                </Modal.Body>
            </Modal>
    </section>
    </div>
);

export default ProjectsView;