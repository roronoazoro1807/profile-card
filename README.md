# Profile Card

A sleek, modern, and fully interactive **Profile Card** UI component built with vanilla HTML, CSS, and JavaScript. This card demonstrates glassmorphism design, smooth animations, and subtle parallax effects to provide an engaging user experience.

---


## Project Overview

The **Profile Card** project showcases a user profile interface that you can plug into your web projects. It combines a minimalist design with advanced CSS techniques (glassmorphism, gradients, responsive layouts) and JavaScript-driven interactivity (follow button toggle, parallax tilt).

Use this component as a starting point for social apps, portfolios, or dashboards where you need to display user information in an eye-catching way.

---

## Features

* **Glassmorphism Background**: Semi-transparent card with blurred backdrop for a modern look.
* **Gradient Theme**: Full-page gradient background that complements the card.
* **Interactive Follow Button**: Click to toggle follow state with smooth color transitions and icon updates.
* **Parallax Tilt Effect**: Card tilts in response to mouse movements for a 3D feel.
* **Entrance Animations**: Fade-in-up effect on each element for sequential reveal.
* **Responsive Design**: Adapts to various screen sizes, mobile-friendly.

---


## Tech Stack

* **HTML5**: Semantic markup for structure.
* **CSS3**: Flexbox, border-radius, keyframe animations, backdrop-filter, gradients.
* **JavaScript**: DOM manipulation for interactions and parallax effect.

---



## How It Works

### 1. HTML Structure

* The card is wrapped in a `<div class="profile-card">`.
* Contains an `<img>` for the avatar, a name/title section, stats, and a button.

### 2. Styling (CSS)

* `.profile-card` uses `backdrop-filter: blur(20px)` and semi-transparent background.
* Entrance animations are defined with `@keyframes fadeInUp` and applied with staggered delays.
* Button and card hover states use `transition` for smooth effects.

### 3. JavaScript Interactions

* **Follow Button**: On click, button text and gradient change for 2 seconds before reverting.
* **Parallax Tilt**:

  ```js
  document.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    // calculate rotation based on cursor position
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  ```

---

## Customization

* **Change Avatar**: Replace the `src` in `<img>` with your image URL.
* **Update Name/Title**: Edit the `<h1>` and `<p class="title">` text.
* **Stats Icons & Numbers**: Modify SVGs inside `.stat` elements and adjust `.stat-number`.
* **Color Palette**: Update gradient colors in `body` and `.follow-btn` backgrounds in `style.css`.
* **Animation Timings**: Tweak `animation-delay` and `transition` durations in CSS.

---

## Folder Structure

```plaintext
profile-card/
├── index.html      # Main markup
├── style.css       # Styles (glassmorphism, animations)
└── script.js       # Interactivity (button & tilt effect)
```

---



*Made with ❤️ by [roronoazoro1807](https://github.com/roronoazoro1807)*
