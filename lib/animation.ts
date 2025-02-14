// lib/useFadeInOnScroll.ts
import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the plugin once.
gsap.registerPlugin(ScrollTrigger);

interface FadeInOptions {
  start?: string;
  end?: string;
  stagger?: number;
  yInitial?: string | number;
}

export function useFadeInOnScroll(
  ref: RefObject<HTMLElement>,
  { start = "center center", end = "bottom 75%", stagger = 0.2, yInitial = 0 }: FadeInOptions = {}
) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    // Set the initial state of all children.
    gsap.set(element.children, { opacity: 0, y: yInitial });
    
    // Animate the children to fade in.
    gsap.to(element.children, {
      opacity: 1,
      y: 0,
      stagger,
      ease: "power1.out",
      scrollTrigger: {
        markers:true,
        trigger: element,
        start,
        end,
        scrub: true,
        toggleActions: "play reverse play reverse",
      },
    });
    
    // Cleanup on unmount: kill the ScrollTrigger instance.
    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, [ref, start, end, stagger, yInitial]);
}
