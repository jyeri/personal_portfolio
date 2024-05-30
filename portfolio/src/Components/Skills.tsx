import Carousel from 'react-multi-carousel';
import { Row, Col, Container } from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';
import skillmeter from '../assets/reshot-meter.svg'
import bgimg from '../assets/reshot-icon-programmer.svg'
import { CircularProgress } from './Skillmeter';

export const Skills = () => {
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

      return (

        <section id="skills" className="skill">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>LloremIpsum is function version of the component LoremIpsum which generates plain text instead of HTML. They both get the same props/inputs as a single object.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <CircularProgress percentage={65}/>
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <CircularProgress percentage={65}/>
                                    <h5>JS/TS</h5>
                                </div>
                                <div className="item">
                                    <CircularProgress percentage={85}/>
                                    <h5>C</h5>
                                </div>
                                <div className="item">
                                    <CircularProgress percentage={65}/>
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <CircularProgress percentage={20}/>
                                    <h5>C++</h5>
                                </div>
                                <div className="item">
                                    <CircularProgress percentage={25}/>
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <CircularProgress percentage={25}/>
                                    <h5>MySql</h5>
                                </div>

                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
      );
}