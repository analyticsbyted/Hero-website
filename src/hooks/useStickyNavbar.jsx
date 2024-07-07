import { useState, useEffect } from 'react';

const useStickyNavbar = () => {
  const [sticky, setSticky] = useState(false);
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50 || pathname !== "/");
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    const handleLocationChange = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  return sticky;
};

export default useStickyNavbar;
