import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './SlideAnimation.css';

interface SlideAnimationProps {
  in: boolean;
  timeout: number;
  children: React.ReactNode;
}

const SlideAnimation: React.FC<SlideAnimationProps> = ({ in: inProp, timeout, children }) => {
  return (
    <CSSTransition in={inProp} timeout={timeout} classNames="slide" unmountOnExit>
      {children}
    </CSSTransition>
  );
};

export default SlideAnimation;
