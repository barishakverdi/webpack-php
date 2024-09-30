import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin.js";
import MotionPathPlugin from "gsap/MotionPathPlugin.js";
import ScrollTrigger from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollToPlugin, MotionPathPlugin, ScrollTrigger);

import ScrollReveal from "scrollreveal";
window.sr = ScrollReveal();