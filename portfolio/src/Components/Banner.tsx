import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from '../assets/reshot-icon-thinking-code.svg'


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Problem Solver", "Coder", "Web Developer", "Software Developer", "IT-GUY", "Full Stack Developer", "Tech Enthusiast"];
    const [text, setText] = useState(toRotate[0]);
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta /2);
        }

        if(!isDeleting && updText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(150);
        }
        if (loopNum === toRotate.length + 1) {
            setLoopNum(0);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">I'd like to welcome you to my life</span>
                        <h1>{`I am Jyri, also known as `}<span className="wrap">{text}</span></h1>
                        <p>Full stack developer with a passion for creating beautiful and functional user experiences.</p>
                        <button onClick={() => console.log('Hire me')}>Hire me <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="header img" />
                    </Col>
                </Row>
            </Container>
        </section>

    )
}