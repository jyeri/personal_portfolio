import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import BannerImg1 from "../Assets/cr_arkki.png";
import BannerImg2 from "../Assets/cr_bw.png";
import BannerImg3 from "../Assets/cr_hive.png";
import BannerImg4 from "../Assets/cr_jalkapallo.png";
import BannerImg5 from "../Assets/cr_niji.png";
import BannerImg6 from '../Assets/cr_niji2.png';

interface BannerViewProps {
    text: string;
    description: string;
    animateDescription: boolean;
    activeImg: string;
    onUpdateActiveImg: (img: string) => void;
}

const BannerView: React.FunctionComponent<BannerViewProps> = ({ text, description, animateDescription, activeImg, onUpdateActiveImg }) => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">I'd like to welcome you to my life</span>
                                    <h1>{`I am Jyri, also known as `}</h1>
                                    <h1><span className="wrap">{text}</span></h1>
                                    <p className={animateDescription ? 'animate-text' : ''}>{description}</p>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <div className="header-img">
                            <ul>
                                <li>
                                    <img src={BannerImg1} alt="Image 1" className={activeImg === 'BannerImg1' ? 'active BannerImg' : 'BannerImg'} onClick={() => onUpdateActiveImg('BannerImg1')}/>
                                </li>
                                <li>
                                    <img src={BannerImg2} alt="Image 2" className={activeImg === 'BannerImg2' ? 'active BannerImg' : 'BannerImg'} onClick={() => onUpdateActiveImg('BannerImg2')}/>
                                </li>
                                <li>
                                    <img src={BannerImg3} alt="Image 3" className={activeImg === 'BannerImg3' ? 'active BannerImg' : 'BannerImg'} onClick={() => onUpdateActiveImg('BannerImg3')}/>
                                </li>
                                <li>
                                    <img src={BannerImg4} alt="Image 4" className={activeImg === 'BannerImg4' ? 'active BannerImg' : 'BannerImg'} onClick={() => onUpdateActiveImg('BannerImg4')}/>
                                </li>
                                <li>
                                    <img src={BannerImg5} alt="Image 5" className={activeImg === 'BannerImg5' ? 'active BannerImg' : 'BannerImg'} onClick={() => onUpdateActiveImg('BannerImg5')}/>
                                </li>
                                <li>
                                    <img src={BannerImg6} alt="Image 6" className={activeImg === 'BannerImg6' ? 'active BannerImg' : 'BannerImg'} onClick={() => onUpdateActiveImg('BannerImg6')}/>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

const BannerViewMemo = React.memo(BannerView);
export default BannerViewMemo;