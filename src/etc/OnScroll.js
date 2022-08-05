import { useEffect } from "react";

export default function OnScroll({state}) {
    useEffect(() => {
        const handleScroll = event => {
            if (window.scrollY >= 80) {
                state(true);
            } else {
                state(false);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

  return null;
}



