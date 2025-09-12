import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to scroll to top when route changes
 * Handles both desktop and mobile scroll containers
 */
export const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Execute scroll to top with delay to ensure route change completes
    const timeoutId = setTimeout(() => {
      forceScrollToTop();

      // Execute again with requestAnimationFrame
      requestAnimationFrame(() => {
        forceScrollToTop();
      });
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [location.pathname]);
};

/**
 * Aggressive scroll to top function that targets all possible scroll containers
 */
const forceScrollToTop = () => {
  // Get all possible scroll containers
  const rootElement = document.getElementById('root');
  const mainElement = document.getElementById('main-content');
  const bodyElement = document.body;
  const htmlElement = document.documentElement;

  // Force scroll to top on primary containers
  [rootElement, mainElement, bodyElement, htmlElement].forEach((element) => {
    if (element) {
      element.scrollTop = 0;
      element.scrollLeft = 0;
    }
  });

  // Window scroll methods
  window.scrollTo(0, 0);

  // Try scrollIntoView on the page top element
  const pageTopElement = document.getElementById('page-top');
  if (pageTopElement) {
    pageTopElement.scrollIntoView({
      behavior: 'auto',
      block: 'start'
    });
  }

  // Try scrollIntoView on the main content
  if (mainElement) {
    mainElement.scrollIntoView({
      behavior: 'auto',
      block: 'start'
    });
  }

  // Try CSS scroll behavior on root
  if (rootElement) {
    rootElement.style.scrollBehavior = 'auto';
    rootElement.scrollTop = 0;
    rootElement.style.scrollBehavior = '';
  }

  // Find and scroll any element that has scroll position
  const allElements = document.querySelectorAll('*');
  allElements.forEach(element => {
    if (element.scrollTop > 0) {
      element.scrollTop = 0;
    }
    if (element.scrollLeft > 0) {
      element.scrollLeft = 0;
    }
  });
};

/**
 * Function to manually scroll to top
 * Can be called from click handlers
 */
export const scrollToTop = () => {
  // Execute immediately
  forceScrollToTop();

  // Execute with requestAnimationFrame for better timing
  requestAnimationFrame(() => {
    forceScrollToTop();

    // Execute again after a short delay
    setTimeout(() => {
      forceScrollToTop();
    }, 10);
  });
};
