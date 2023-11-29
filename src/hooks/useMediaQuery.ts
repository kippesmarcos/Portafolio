import { useState, useCallback, useEffect } from 'react'

type MeasurementType = 'width' | 'height'

export const useMediaQuery = (value: number, measurementType: MeasurementType = 'width') => {
    const [targetReached, setTargetReached] = useState(false)

    const updateTarget = useCallback((e: MediaQueryListEvent) => {
        if (e.matches) {
            setTargetReached(true)
        } else {
            setTargetReached(false)
        }
    }, []);
    useEffect(() => {
        const media = window.matchMedia(`(max-${measurementType}: ${value}px)`);
        media.addEventListener('change', updateTarget)

        // Check on mount (callback is not called until a change occurs)
        if (media.matches) {
            setTargetReached(true)
        }

        return () => media.removeEventListener('change', updateTarget);
    }, []);

    return targetReached;
};
