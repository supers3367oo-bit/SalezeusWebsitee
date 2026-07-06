import React, { useEffect, useMemo, useRef, ReactNode, RefObject, Fragment } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { hasArabicScript } from '../../lib/arabicScript';

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
  splitBy?: 'char' | 'word';
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'center bottom+=50%',
  scrollEnd = 'bottom bottom-=40%',
  stagger = 0.03,
  splitBy,
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const text = typeof children === 'string' ? children : '';
  const isArabic = hasArabicScript(text);

  const splitText = useMemo(() => {
    const mode = splitBy ?? (isArabic ? 'word' : 'char');
    const maskClass = isArabic
      ? 'inline-block overflow-hidden align-bottom pb-[0.38em] -mb-[0.38em]'
      : 'inline-block overflow-hidden align-bottom pb-[0.15em] -mb-[0.15em]';
    const lastWordPad = isArabic ? 'pe-[0.14em]' : 'pe-[0.1em]';

    if (mode === 'word') {
      const words = text.split(' ').filter(Boolean);
      const lastIndex = words.length - 1;

      return words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span
            className={`${maskClass} ${index === lastIndex ? lastWordPad : ''}`}
          >
            <span className="scroll-float-char inline-block">{word}</span>
          </span>
          {index < lastIndex && <span className="inline-block w-[0.28em]" aria-hidden>{'\u00A0'}</span>}
        </Fragment>
      ));
    }

    const lastIndex = text.length - 1;

    return text.split('').map((char, index) => {
      if (char === ' ') {
        return (
          <span key={`space-${index}`} className="inline-block w-[0.28em]" aria-hidden>
            {'\u00A0'}
          </span>
        )
      }

      return (
        <span
          className={`${maskClass} ${index === lastIndex ? lastWordPad : ''}`}
          key={index}
        >
          <span className="scroll-float-char inline-block">{char}</span>
        </span>
      )
    });
  }, [children, splitBy, isArabic, text]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;
    const charElements = el.querySelectorAll('.scroll-float-char');

    const tween = gsap.fromTo(
      charElements,
      {
        willChange: 'opacity, transform',
        opacity: 0,
        yPercent: isArabic ? 105 : 120,
        scaleY: isArabic ? 1.5 : 2.3,
        scaleX: isArabic ? 0.92 : 0.7,
        transformOrigin: '50% 0%'
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          toggleActions: 'play none none reverse',
        }
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger, children, isArabic]);

  return (
    <h2
      ref={containerRef}
      className={`my-5 ${isArabic ? 'overflow-visible' : 'overflow-hidden'} pe-[0.06em] ${containerClassName}`}
    >
      <span
        className={`inline shrink-0 ${isArabic ? 'leading-[1.35]' : 'leading-[1.15]'} pe-[0.04em] ${textClassName}`}
      >
        {splitText}
      </span>
    </h2>
  );
};

export default ScrollFloat;
