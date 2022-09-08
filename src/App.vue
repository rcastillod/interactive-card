<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view />
  </div>
</template>

<style lang="scss">
/* -------------------------------------------------------------------------- */
/*                              CUSTOM PROPERTIES                             */
/* -------------------------------------------------------------------------- */
:root {
  /* Colors */
  --primary-color: hsl(278, 68%, 11%);
  --primary-color-tint: hsl(278, 34%, 20%);
  --grey-color: hsl(270, 3%, 77%);
  --white-color: hsl(100, 100, 100);
  --black-color: hsl(0, 0, 0);

  /* Font Familiy */
  --body-font: "Rubik", sans-serif;

  /* Font Weights */
  --fw-light: 300;
  --fw-regular: 400;
}
/* -------------------------------------------------------------------------- */
/*                                    RESET                                   */
/* -------------------------------------------------------------------------- */
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
* {
  margin: 0;
  padding: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

html,
body {
  height: 100%;
}

/* Set core body defaults */
body {
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
/* -------------------------------------------------------------------------- */
/*                               UTILITY CLASSESS                             */
/* -------------------------------------------------------------------------- */

.flex {
  display: flex;
  gap: var(--gap, 1rem);
}

.direction-column {
  flex-direction: column;
}

.grid {
  display: grid;
  gap: var(--gap, 1rem);
}

.flow > *:where(:not(:first-child)) {
  margin-top: var(--flow-gap, 1rem);
}

.container {
  padding-inline: 2em;
  margin-inline: auto;
  max-width: min(100% - 2rem, 83.75rem);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* -------------------------------------------------------------------------- */
/*                                   GLOBAL                                   */
/* -------------------------------------------------------------------------- */
body {
  color: var(--primary-color);
  font-family: var(--body-font);
  font-size: 1rem;
}
</style>
