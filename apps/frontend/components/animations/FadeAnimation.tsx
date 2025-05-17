import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './FadeAnimation.css';

interface FadeAnimationProps {
  in: boolean;
  timeout: number;
  children: React.ReactNode;
}

const FadeAnimation: React.FC<FadeAnimationProps> = ({ in: inProp, timeout, children }) => {
  return (
    <CSSTransition in={inProp} timeout={timeout} classNames="fade" unmountOnExit>
      {children}
    </CSSTransition>
  );
};

export default FadeAnimation;
