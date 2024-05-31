import { Row, Col, Container, Tab, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import bgimg from '../assets/black-bg2.svg'
import pushSwap_img from '../assets/projects/pushSwap/pushSwap_img.png'
import pushSwap_mp4 from '../assets/projects/pushSwap/pushSwap_mp4.mp4';
import corewar_img from '../assets/projects/corewar/corewar_img.png'
import corewar_mp4 from '../assets/projects/corewar/corewar_mp4.mp4';
import lemin_img from '../assets/projects/lemin/lemin_img.png'
import lemin_mp4 from '../assets/projects/lemin/lemin_mp4.mp4';
import onlinestore_img from '../assets/projects/onlinestore/onlinestore_img.png'
import onlinestore_mp4 from '../assets/projects/onlinestore/onlinestore_mp4.mp4';
import userfinder_img from '../assets/projects/userfinder/userfinder_img.png'
import userfinder_mp4 from '../assets/projects/userfinder/userfinder_mp4.mp4';
import arkki_img from '../assets/projects/arkki/arkki_img.png'
import arkki_mp4 from '../assets/projects/arkki/arkki_mp4.mp4';
import cvgame_img from '../assets/projects/cvgame/cvgame_img.png'
import cvgame_mp4 from '../assets/projects/cvgame/cvgame_mp4.mp4';

export const Projects = () => {

        const projects_c = [
          {
            title: "Push Swap",
            description: "Sorting Algorithm. Hive Helsinki Project, done in C",
            imgUrl: pushSwap_img,
            mp4: pushSwap_mp4,
          },
          {
            title: "Corewar",
            description: "Game in computer memory. Hive Helsinki Project, done in C",
            imgUrl: corewar_img,
            mp4: corewar_mp4,
          },
          {
            title: "Lem in",
            description: "Pathfinding Algorithm. Hive Helsinki Project, done in C",
            imgUrl: lemin_img,
            mp4: lemin_mp4,
          },
        ];

        const projects_react = [
          {
            title: "Online Store",
            description: "Online Store Design & Development, done in one weekend with PHP, HTML and CSS",
            imgUrl: onlinestore_img,
            mp4: onlinestore_mp4,
          },
          {
            title: "Github Finder",
            description: "Github Finder app design & development. ReactJS, ContextAPI, Github API",
            imgUrl: userfinder_img,
            mp4: userfinder_mp4,
          },
          {
            title: "Arkki",
            description: "WIP. Arkki app design & development. ReactJS, MongoDB",
            imgUrl: arkki_img,
            mp4: arkki_mp4,
          },
        ];

        const projects_py = [
          {
            title: "Ultimate CV",
            description: "WIP, Playble CV, Python, Pygame",
            imgUrl: cvgame_img,
            mp4: cvgame_mp4,
          },
        ];



    return (
        <section className="project" id="projects">
          <Container>
            <Row>
              <Col size={12}>
                    <h2>Projects</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">ReactJS, HTML, PHP</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">C/C++</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Python</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp" className="tab-content">
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              projects_react.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <Row>
                            {
                              projects_c.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <Row>
                            {
                              projects_py.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
              </Col>
            </Row>
          </Container>
          <img className="background-image-right" src={bgimg}></img>
        </section>
      )
    }