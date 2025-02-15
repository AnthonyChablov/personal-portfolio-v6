
import { useEffect } from 'react';

const useAsciiArt = (asciiArt: string) => {
  useEffect(() => {
    console.log("%c" + asciiArt, "font-family: monospace;");
  }, [asciiArt]);
};

export default useAsciiArt;
