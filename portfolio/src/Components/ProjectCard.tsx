import { Col } from "react-bootstrap";

interface IcardProps {
    title: string,
    description: string,
    imgUrl: string,
    videoUrl: string,
};

export const ProjectCard: React.FunctionComponent<IcardProps> = ({ title, description, imgUrl, videoUrl }) => {

    const handleOnMouseOver = (e: React.MouseEvent<HTMLVideoElement>) => {
        console.log("PLAY");
        const video = e.currentTarget;
        if (video.readyState >= 3) { // HAVE_FUTURE_DATA
            video.play().catch(error => {
                // Auto-play was prevented
                // Show a UI element to let the user manually start playback
                console.log("playback prevented");
            });
        } else {
            video.load();
            video.addEventListener('canplay', function onCanPlay() {
                video.removeEventListener('canplay', onCanPlay);
                video.play().catch(error => {
                    // Auto-play was prevented
                    // Show a UI element to let the user manually start playback
                    console.log("playback prevented");
                });
            });
        }
    }

    const HandleOnMouseOut = (e: React.MouseEvent<HTMLVideoElement>) => {
        console.log("PAUSE");
        e.currentTarget.pause();
    }


  return (
      <Col>
        <div className="proj-imgbx">
          <img src={imgUrl} alt="logo"/>
          <video 
            loop
            preload="none" 
            muted
            id={title}
            onMouseOver={handleOnMouseOver}
            onMouseOut={HandleOnMouseOut}
            onClick={() => console.log('Video clicked')}>
              <source id={title} src={videoUrl} type='video/mp4'/>
          </video>

        </div>
      </Col>
  )
}