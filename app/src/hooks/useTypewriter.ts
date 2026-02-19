import { useState, useEffect } from 'react';

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
}

export function useTypewriter({ text, speed = 50, delay = 0 }: UseTypewriterOptions) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    
    const startTyping = () => {
      let currentIndex = 0;
      
      const typeNextChar = () => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
          timeout = setTimeout(typeNextChar, speed);
        } else {
          setIsComplete(true);
        }
      };
      
      typeNextChar();
    };

    timeout = setTimeout(startTyping, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(interval);
  }, []);

  return { displayText, isComplete, showCursor };
}
