import { useCallback } from 'react';

export const useProjectCard = () => {
    const handleOnMouseOver = useCallback((e: React.MouseEvent<HTMLVideoElement>) => {
        const playPromise = e.currentTarget.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => console.error('Error attempting to play', error));
        }
    }, []);

    const handleOnMouseOut = useCallback((e: React.MouseEvent<HTMLVideoElement>) => {
        e.currentTarget.pause();
    }, []);

    return { handleOnMouseOver, handleOnMouseOut };
};