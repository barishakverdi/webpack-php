import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger.js";
import ScrollToPlugin from "gsap/ScrollToPlugin.js";

// Eklentileri kaydedin
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

import ScrollReveal from 'scrollreveal/dist/scrollreveal.js'
window.sr = ScrollReveal();
