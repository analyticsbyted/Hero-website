import { useEffect } from 'react';

const useInactivityTimer = (timeout = 300000, logoutAction) => {
  useEffect(() => {
    let timeoutId;

    const resetTimer = () => {
      if (timeoutId) clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        logoutAction();
      }, timeout);
    };

    const events = ['load', 'mousemove', 'mousedown', 'click', 'scroll', 'keypress'];

    const resetEvents = events.map(event => {
      return window.addEventListener(event, resetTimer);
    });

    resetTimer();

    return () => {
      resetEvents.forEach(event => window.removeEventListener(event, resetTimer));
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeout, logoutAction]);
};

export default useInactivityTimer;
