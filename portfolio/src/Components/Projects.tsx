import { Row, Col, Container, Tab, Nav, Carousel } from "react-bootstrap"
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

        const responsive = {
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
          }
        }

        const projects_c = [
          {
            title: "Push Swap",
            description: "Sorting Algorithm. Hive Helsinki Project, done in C. Aimes to sort a stack of numbers with the least amount of operations.",
            imgUrl: pushSwap_img,
            mp4: pushSwap_mp4,
            id: 1,
          },
          {
            title: "Corewar",
            description: "Game in computer memory. Hive Helsinki Project, done in C. Aimes to create a champion that will survive in the memory game. Contains Assembler and Virtual Machine.",
            imgUrl: corewar_img,
            mp4: corewar_mp4,
            id: 2,
          },
          {
            title: "Lem in",
            description: "Pathfinding Algorithm. Hive Helsinki Project, done in C. Aimes to find the shortest path in a maze, utilizing BFS and Edmonds-Karp algorithm.",
            imgUrl: lemin_img,
            mp4: lemin_mp4,
            id: 3,
          },
        ];

        const projects_react = [
          {
            title: "Online Store",
            description: "Online Store with PHP, HTML and CSS. Done in single weekend. Contains possibility to add products to cart, login and register.",
            imgUrl: onlinestore_img,
            mp4: onlinestore_mp4,
            id: 4,
          },
          {
            title: "Github Finder",
            description: "Github Finder app design & development. ReactJS, ContextAPI, Github API. Search for Github users using react-query, view typeahead of matching users, links to Github profile.",
            imgUrl: userfinder_img,
            mp4: userfinder_mp4,
            id: 5,
          },
          {
            title: "Arkki",
            description: "WIP. Arkki app design & development. ReactJS, MongoDB. Arkki is our football team's app for managing formations and spearding information about us.",
            imgUrl: arkki_img,
            mp4: arkki_mp4,
            id: 6,
          },
        ];

        const projects_py = [
          {
            title: "Ultimate CV",
            description: "WIP, Playble CV, Python, Pygame. Ultimate CV is a game where you can play through my CV. Contains information about me & my life this far.",
            imgUrl: cvgame_img,
            mp4: cvgame_mp4,
            id: 7,
          },
        ];



        return (
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
                            <Nav.Link eventKey="third">Python 'n else</Nav.Link>
                          </Nav.Item>
                        </Nav>
                        <Tab.Content id="slideInUp" className={"animate__animated animate__slideInUp"}>
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