import React, { useEffect, useState } from 'react';

const MediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};

const useIsSmall = () => MediaQuery('(max-width: 576px)');
const useIsMedium = () => MediaQuery('(max-width: 768px)');
const useIsLarge = () => MediaQuery('(max-width: 1023px)');
const useIsXLarge = () => MediaQuery('(max-width: 1279px)');
const useIsXXLarge = () => MediaQuery('(max-width: 1535px)');

export { useIsSmall, useIsMedium, useIsLarge, useIsXLarge, useIsXXLarge };
