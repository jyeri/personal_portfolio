import React from 'react';
import { useBanner } from './useBanner';
import BannerView from '../../Presentational/BannerView';

export const Banner: React.FC = () => {
    const { text, description, animateDescription, activeImg, onUpdateActiveImg } = useBanner();

    return (
        <BannerView
            text={text}
            description={description}
            animateDescription={animateDescription}
            activeImg={activeImg}
            onUpdateActiveImg={onUpdateActiveImg}
        />
    );
};

const BannerMemo = React.memo(Banner);
export default BannerMemo;