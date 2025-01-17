---
title: "Faster React apps coding: How to migrate from Emotion CSS-in-JS to Stylify Utility-First CSS."
image: '/images/blog/emotion-migration/header.jpg'
ogImage: '/images/blog/emotion-migration/og-image.jpg'
author: 'Vladimír Macháček'
annotation: "Want to style your React Application faster? Learn how to easily migrate from Emotion CSS-in-JS to Stylify utility-first CSS for better React development."
createdAt: 'February 24, 2023'
---

Looking for a better way to manage your CSS in React? Learn how to migrate from Emotion CSS-in-JS to Stylify CSS's utility-first approach and streamline your development workflow.

You can try the examples in this article in the [Playground On Stackblitz](https://stackblitz.com/edit/stylify-styled-components-migration?file=package.json,src%2FApp.jsx,README.MD,src%2Fmain.jsx) 🚀.

## 💎 Introduction
[Stylify](https://stylifycss.com) is a library that uses CSS-like selectors to generate optimized utility-first CSS based on what you write.

Features:
- ✅ Build module. No runtime script.
- ✅ CSS-like selectors
- ✅ No framework to study
- ✅ Less time spent in docs
- ✅ Mangled & Extremely small CSS
- ✅ No CSS purge needed
- ✅ Components, Variables, Custom selectors
- ✅ It can generate multiple CSS bundles

## 🔗 Components
In Emotion, components are often defined this way:
```jsx
const Title = styled.h1`
  color: blue
  font-weight: bold
  @media (max-width: 640px) {
    color:red
  }
`;
<Title>Hello World!🎉</Title>
```

Stylify provides a similar feature. [Components](/docs/stylify/compiler/#components) can be defined within a file (using [content options](/docs/stylify/compiler/#contentoptionsprocessors)), where they are used, or globally within a config.

Example with the configuration within a file. The content between `stylify-components` expects javascript object without surrounding brackets:
```html
<!--
stylify-components
  title: 'color:blue font-weight:bold md:color:red'
/stylify-components
-->
<h1 class="title"></h1>
```

Example in a global compiler config:
```js
const compilerConfig = {
  title: 'color:blue font-weight:bold md:color:red'
};
```

Usage:
```html
<h1 class="title"></h1>
```

**Components are "lazy" (generated on demand)**. This means, that even if you configure them (in a file or globally), they will be generated only if matched within the content. No unused CSS will be generated. The same goes for utilities. If the utility for a component is not matched within a content directly, the selector is not generated and only the component selector is added to the CSS output.

**The production CSS output** will look something like this in production:
```css
.a,.d {color:blue}
.b,.d {font-weight:bold}
 @media (max-width: 768px) {
 .c,.d {color:red}
 }
```

The html output:
```html
<h1 class="d"></h1>
```

## 🎯 Selectors
In Emotion, you can use CSS prop to style element directly like this:
```jsx
<div css={css`
  color: blue;
  font-weight: bold;
  @media (min-width: 640px) {
    color: red;
  }
`}></div>
```

Stylify allows you to use utilities directly within the content. So the above example can be refactored to this:
```html
<div className="color:blue font-weight:bold md:color:red"></div>
```

The production output of the CSS will be similar to the example of the components. The HTML however will look like this:
```html
<div className="a b c"></div>
```

## 🌐 Global Styles
Sometimes we need to style some parts of the application globally. To do that within the Emotion, we need to use the Global component:
```jsx
<Global
  styles={css`
    .some-class {
      color: hotpink !important;
    }
  `}
/>
```

In the case of Stylify, you can use [custom selectors](/docs/get-started#custom-selectors) to solve this problem. These selectors can be defined directly within the class attribute or in the global config.

Example with the class attribute:
```jsx
<div className="[.button_.icon]{font-size:14px}">
  <button className="
    [.icon]{color:#fff;border-radius:12px}
    [&+button]{margin-left:24px}
  ">
    <i className="icon"></i>
  </button>
  <button></button>
<div>
```

The syntax pattern in the class attribute looks like this:
```
[css selectors]{stylify selectors split by ;}
```

The `_` (underscore) is used instead of space in both CSS and Stylify selectors and the `&` character always refers to the current element.

The same code but in the global config would look like this:
```js
const compilerConfig = {
  customSelectors: {
    '.buttons-wrapper .button .icon': 'font-size:14px',
    '.button': `
       .icon { color:#fff border-radius:12px }
       & + button { margin-left:24px }
    `,
  }
}
```

When defining `customSelectors` in the global config, the syntax lets you use a nesting feature. The & characters refer to the upper level.

Usage of the global config:
```jsx
<div className="buttons-wrapper">
  <button className="button">
    <i className="icon"></i>
  </button>
  <button></button>
<div>
```

## 💲Variables
When you need to pass a color into the component using props, then instead of doing this `color: ${props => props.textColor};`, you can use native CSS variables:
```html
<div
  style={{ '--localTextColor': props.textColor }}
  className="title color:$localTextColor"
">
</div>
```

We just need to tell Stylify to replace variables with CSS variables instead of their value and that the `localTextColor` is external:
```js
const compilerConfig = {
  replaceVariablesByCssVariables: true,
  externalVariables: ['localTextColor']
}
```

The external variable can also be defined only in the file where it is used:
```html
<!--
stylify-externalVariables
  localTextColor
/stylify-externalVariables
-->
<div
  style={{ '--localTextColor': props.textColor }}
  className="title color:$localTextColor"
">
```

Stylify also provides an option to **configure custom variables**. It can be done in the file where they are used, in the same way as components or in the global config:

In file:
```html
<!--
stylify-variables
  primary: '#000',
  secondary: '#444'
/stylify-variables
-->
<div class="color:$primary"></div>
```

In Compiler Config:
```js
const compilerConfig = {
  primary: '#000'
}
```

## 📦 Splitting CSS
Emotion splits CSS automatically and injects it directly into the document based on the rendered components.

Stylify doesn't have any runtime script, so you have to configure the [Bundler](/docs/bundler) and the splitting manually.

However, the Stylify output is so small (it can be even 10 Kb (gzipped) for a large website), that it is ok to have only one bundle for the whole project. Eventually, there you can [check tips](/docs/get-started/best-practices#splitting-css) for CSS bundles splitting.

Bundles config example:
```js
const bundles = [
  {
     outputFile: 'path/to/layout.css',
     files: ['path/to/layout.jsx']
  },

  // Bundler uses https://npmjs.com/package/fast-glob
  // You can use its glob syntax
  {
     outputFile: 'path/to/global.css',
     files: ['path/**/*.jsx']
  }
]);
```
