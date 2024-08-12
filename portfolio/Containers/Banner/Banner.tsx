import React from 'react';
import { useBanner } from './useBanner';
import BannerView from '../../Presentational/BannerView';

const Banner: React.FunctionComponent = () => {
    const { text, description, animateDescription, activeImg, onUpdateActiveImg } = useBanner();

    return <BannerView text={text} description={description} animateDescription={animateDescription} activeImg={activeImg} onUpdateActiveImg={onUpdateActiveImg} />;
};

export default Banner;