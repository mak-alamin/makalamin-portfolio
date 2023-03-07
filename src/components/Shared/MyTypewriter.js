import React, { useEffect, useState } from 'react';

const MyTypewriter = ({ textArray, speed, delay }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [delayPeriod, setDelayPeriod] = useState(delay);
  const [delayPassed, setDelayPassed] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!delayPassed) {
        setDelayPeriod(delayPeriod - speed);
        if (delayPeriod <= 0) {
          setDelayPassed(true);
        }
      } else {
        if (currentText.length === textArray[currentTextIndex].length) {
          if (currentTextIndex === textArray.length - 1) {
            setCurrentTextIndex(0);
          } else {
            setCurrentTextIndex(currentTextIndex + 1);
          }
          setCurrentText('');
          setDelayPeriod(delay);
          setDelayPassed(false);
        } else {
          setCurrentText(textArray[currentTextIndex].slice(0, currentText.length + 1));
        }
      }
    }, delayPassed ? speed : delayPeriod);
    
    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, delay, delayPassed, delayPeriod, speed, textArray]);

  let prevText = (currentTextIndex === 0) ? textArray[textArray.length - 1 ] : textArray[currentTextIndex-1];

  return (
    <>{delayPassed ?  currentText : prevText }</>
  );
};

export default MyTypewriter;
