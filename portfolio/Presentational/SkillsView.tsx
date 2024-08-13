import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CircularProgress } from './SVG/CircularProgress';
import { ResponsiveType } from 'react-multi-carousel';

interface SkillsViewProps {
  responsive: ResponsiveType;
}

export const SkillsView: React.FunctionComponent<SkillsViewProps> = ({ responsive }) => {
  return (
    <section id="skills" className="skill">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Programming languages and tools that I feel most comfortable at this moment.</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <CircularProgress percentage={65} />
                  <h5>ReactJS</h5>
                </div>
                <div className="item">
                  <CircularProgress percentage={65} />
                  <h5>Javascript/Typescript</h5>
                </div>
                <div className="item">
                  <CircularProgress percentage={85} />
                  <h5>C</h5>
                </div>
                <div className="item">
                  <CircularProgress percentage={65} />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <CircularProgress percentage={20} />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <CircularProgress percentage={25} />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <CircularProgress percentage={25} />
                  <h5>MySql</h5>
                </div>
                </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const SkillsViewMemo = React.memo(SkillsView);
export default SkillsViewMemo;