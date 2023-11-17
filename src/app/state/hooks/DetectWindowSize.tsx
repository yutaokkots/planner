import React, { useState, useEffect } from "react"

interface WindowType {
    width: number;
    height: number;
}

const DetectWindowSize = () => {
    const [windowSize, setWindowSize] = useState<WindowType>({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)
        };
    }, [])
    
    return windowSize;
}

export default DetectWindowSize;