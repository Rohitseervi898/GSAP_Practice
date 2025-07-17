# GSAP Animation Demo

This project demonstrates the use of [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/) and the ScrollTrigger plugin to create engaging web animations.

## Files

- **[index.html](index.html)**  
  A landing page with animated navigation and content using GSAP timeline and ScrollTrigger.  
  - Animates the logo and navigation items on page load.
  - Fades in the main heading.
  - Rotates two colored boxes (`.box1` and `.box2`) as you scroll, with scroll-based triggers and markers.

- **[Scroll.html](Scroll.html)**  
  A scroll-based animation example using GSAP and ScrollTrigger.  
  - Contains three full-page sections.
  - The middle section (`.page2`) features a large heading ("I AM A PROGRAMMER") that slides horizontally as you scroll, with pinning and markers enabled.

- **gsap.min.js**  
  Minified GSAP library.

- **ScrollTrigger.min.js**  
  Minified GSAP ScrollTrigger plugin.

## How to Use

1. Open `index.html` or `Scroll.html` in your browser.
2. Scroll the page to see the animations in action.
3. Markers are enabled for ScrollTrigger, so you can visualize the start and end points of each scroll animation.

## Features

- **GSAP Timeline Animations:**  
  Sequential entrance animations for navigation and main content.

- **ScrollTrigger Animations:**  
  - Rotating boxes on scroll in `index.html`.
  - Horizontal scrolling text with pinning in `Scroll.html`.

## Customization

- Edit the HTML and inline styles to change the layout or colors.
- Modify the GSAP animation parameters in the `<script>` tags to adjust timing, easing, or scroll behavior.

## Requirements

No build tools required. All dependencies are included as local files.

---

Created for learning