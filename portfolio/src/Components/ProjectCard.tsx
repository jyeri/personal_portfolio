import { Col, Form } from "react-bootstrap";

interface IcardProps {
    title: string,
    description: string,
    imgUrl: string,
    mp4: string,
    id: number,
};

export const ProjectCard: React.FunctionComponent<IcardProps> = ({ title, description, imgUrl, mp4, id }) => {


    
    const handleOnMouseOver = (e: React.MouseEvent<HTMLVideoElement>) => {
        var playPromise = e.currentTarget.play();
        var videoid = e.currentTarget.id;

        if (playPromise !== undefined) {
          playPromise.then(_ => {
            console.log('play');
          })
          .catch(error => {
            console.log(playPromise);
            console.log('play error with +', videoid);
          });
        }
    };
    
      const handleOnMouseOut = (e: React.MouseEvent<HTMLVideoElement>) => {
        e.currentTarget.pause();
        console.log('pause');
      };

      return (
        <Col size={12} sm={6} md={4}>
          <div className="proj-imgbx">
          <video 
                id={`video${id}`}
                loop
                preload='none'
                muted // Needs to be there to be able to play
                onMouseOver={handleOnMouseOver}
                onMouseOut={handleOnMouseOut}
            >
                <source src={mp4} type='video/mp4' />
            </video>
            <img src={imgUrl} />
            <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
            </div>
          </div>
        </Col>
      )
}