import { useState, useEffect, useCallback, useMemo } from "react";

export const useBanner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = useMemo(() => ["Problem Solver", "Coder", "Web Developer", "Software Developer", "IT-GUY", "Full Stack Dev", "Tech Enthusiast"], []);    const [text, setText] = useState('');
    const period = 150;
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [activeImg, setActiveImg] = useState('BannerImg2');
    const [description, setDescription] = useState('Get to know me little better by clicking other pictures. All of them contains little bit of me.');
    const [animateDescription, setAnimateDescription] = useState(false);
    const [isVisible, setIsVisible] = useState(false);


    // Wrap tick in useCallback
    const tick = useCallback(() => {
        const i = loopNum % toRotate.length;
        const fullText = toRotate[i];
        const updText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updText);

        if (!isDeleting && updText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(250);
        }
    }, [text, isDeleting, loopNum, toRotate]);

    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, delta);

        return () => clearInterval(ticker);
    }, [tick, delta]); // Include tick in the dependency array

    const onUpdateActiveImg = (Img: string) => {
        setActiveImg(Img);
        onUpdateText(Img);
        setAnimateDescription(true);
        setTimeout(() => setAnimateDescription(false), 1000);
    };

    const onUpdateText = (Img: string) => {
        const descriptions: { [key: string]: string } = {
            // Descriptions...
            BannerImg1: 'I am one of the founders of amateur football club, Arkki. We are playing in 5th division in Helsinki. Project is aimed to provide low threshold exercise and community to people moving in from elsewhere.',
            BannerImg2: 'I am enthusiastic about coding and problem solving, at this moment my strongest areas are: C, ReactJS, HTML, CSS. I am also familiar with Python, TypeScript, PHP, SQL, MongoDB, NodeJS, Git, Docker, Azure, Vercel, Cypress, ETC.',
            BannerImg3: 'My interest of coding sparked while working as web-dev/it-guy on somefix, then journey in coding continued in Hive Helsinki, where I learned to code in C. I am grateful for the experience and the people I met there. I am looking forward to the next steps in my coding journey.',
            BannerImg4: 'Football has been big part of my life since I was a kid, and my big dream would be possibility to combine these two passions. Coding and sports.',
            BannerImg5: 'I have a dog, called Niji. She is a 5 year old, rescued Husky-Malamute. Including her, every single doggo is awesome.',
            BannerImg6: 'More than developer I see myself as problem solver. I am always looking for new challenges and ways to improve my skills. Most of the languages and tools I know of I see as tools, but the main part is to know how to solve the problem.'
        };
        setDescription(descriptions[Img as keyof typeof descriptions] || 'Get to know me little better by clicking other pictures. All of them contains little bit of me.');
    };
    const updateVisibility = useCallback((visible: boolean) => {
        setIsVisible(visible);
    }, []);

    return {
        text,
        description,
        activeImg,
        isVisible,
        animateDescription,
        updateVisibility,
        onUpdateActiveImg
    };
};