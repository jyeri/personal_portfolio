import { useCallback } from 'react';

export const useProjectCard = () => {
    const handleOnMouseOver = useCallback((e: React.MouseEvent<HTMLVideoElement>) => {
        const playPromise = e.currentTarget.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                // AbortError is expected if play() is immediately interrupted by pause()
                if (!(error && (error.name === 'AbortError' || error.code === 20))) {
                    console.error('Error attempting to play', error);
                }
            });
        }
    }, []);

    const handleOnMouseOut = useCallback((e: React.MouseEvent<HTMLVideoElement>) => {
        e.currentTarget.pause();
    }, []);

    return { handleOnMouseOver, handleOnMouseOut };
};