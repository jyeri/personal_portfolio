import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import BannerImg1 from "../assets/cr_arkki.png"
import BannerImg2 from "../assets/cr_bw.png"
import BannerImg3 from "../assets/cr_hive.png"
import BannerImg4 from "../assets/cr_jalkapallo.png"
import BannerImg5 from "../assets/cr_niji.png"
import BannerImg6 from '../assets/cr_niji2.png'
import arrow from '../assets/handdrawnarrow.svg'


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Problem Solver", "Coder", "Web Developer", "Software Developer", "IT-GUY", "Full Stack Developer", "Tech Enthusiast"];
    const [text, setText] = useState('');
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [activeImg, setActiveImg] = useState('BannerImg2');
    const [description, setDescription] = useState('Get to know me little better by clicking other pictures. All of them contains little bit of me.');
    const [animateDescription, setAnimateDescription] = useState(false);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => clearInterval(ticker);
    }, [text, isDeleting, loopNum, delta]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updText);

        if (!isDeleting && updText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(150);
        }
    };

    const onUpdateActiveImg = (Img: string) => {
        setActiveImg(Img);
        onUpdateText(Img);
        setAnimateDescription(true);
        setTimeout(() => setAnimateDescription(false), 1000);
    };

    const onUpdateText = (Img: string) => {
        const descriptions: { [key: string]: string } = {
            BannerImg1: 'I am one of the founders of amateur football club, Arkki. We are playing in 5th division in Helsinki. Project is aimed to provide low threshold exercise and community to people moving in from elsewhere.',
            BannerImg2: 'I am enthusiastic about coding and problem solving, at this moment my strongest areas are: C, ReactJS, HTML, CSS. I am also familiar with Python, TypeScript, PHP, SQL, MongoDB, NodeJS, Git, Docker, Azure, Vercel, Cypress, ETC.',
            BannerImg3: 'My interest of coding sparked while working as web-dev/it-guy on somefix, then journey in coding continued in Hive Helsinki, where I learned to code in C. I am grateful for the experience and the people I met there. I am looking forward to the next steps in my coding journey.',
            BannerImg4: 'Football has been big part of my life since I was a kid, and my big dream would be possibility to combine these two passions. Coding and sports.',
            BannerImg5: 'I have a dog, called Niji. She is a 5 year old, rescued Husky-Malamute. Including her, every single doggo is awesome.',
            BannerImg6: 'More than developer I see myself as problem solver. I am always looking for new challenges and ways to improve my skills. Most of the languages and tools I know of I see as tools, but the main part is to know how to solve the problem.'
        };
        setDescription(descriptions[Img as keyof typeof descriptions] || 'Get to know me little better by clicking other pictures. All of them contains little bit of me.');
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">I'd like to welcome you to my life</span>
                        <h1>{`I am Jyri, also known as `}</h1>
                        <h1><span className="wrap">{text}</span></h1>
                        <p className={animateDescription ? 'animate-text' : ''}>{description}</p>
                        <button onClick={() => console.log('Hire me')}>Hire me <ArrowRightCircle size={25}/></button>
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

    )
}