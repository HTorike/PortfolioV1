import {useState, useEffect} from 'react';
import './MouseGlow.css';

const MouseGlow = ({isDarkMode}) => {
    const [coords, setCoords] = useState({x: 0, y: 0});

    useEffect(() => {
        const HandleMouseMove = (event) => {
            setCoords({x: event.clientX, y: event.clientY});
        };

        document.addEventListener('mousemove', HandleMouseMove);
            return () => {
                document.removeEventListener('mousemove', HandleMouseMove);
            };
    }, []);

    const glowColor = isDarkMode
    ? 'radial-gradient(circle, #e0aaff, transparent 45% )'
    : 'radial-gradient(circle, #10002b, transparent 45% )';

    return (
        <div className='mouseGlow' style={{
            left: coords.x, 
            top: coords.y,
            background: glowColor
        }}>

        </div>
    );
};

export default MouseGlow;