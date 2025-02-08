
import { useEffect } from 'react';

const useAsciiArt = (asciiArt: string) => {
  useEffect(() => {
    console.log(asciiArt);
  }, [asciiArt]);
};

export default useAsciiArt;
