---
title: How to Effortlessly Migrate from Styled Components CSS-in-JS to Stylify Utility-First CSS for Better React Development.
image: '/images/blog/styled-components-migration/header.jpg'
ogImage: '/images/blog/styled-components-migration/og-image.jpg'
author: 'Vladimír Macháček'
annotation: "Learn how to easily migrate to Stylify CSS for better React development."
createdAt: 'February 16, 2023'
---

Say goodbye to CSS-in-JS and Runtime scripts for injecting and compiling CSS and hello to lightning-fast coding with
<nuxt-link to="/">Stylify utility-first CSS</nuxt-link>. As a React frontend engineer, you know the importance of efficient, streamlined solutions that don't sacrifice style or functionality. And that's exactly what Stylify offers.

Migrating from Styled Components CSS-in-JS solution is a breeze with Stylify. And because it has no runtime, you can expect snappier performance.

You can the examples in this article in the [Playground On Stackblitz](https://stackblitz.com/edit/stylify-styled-components-migration?file=package.json,src%2FApp.jsx,README.MD,src%2Fmain.jsx) 🚀.

## 💎 Introduction
<nuxt-link to="/">Stylify</nuxt-link> is a library that uses CSS-like selectors to generate optimized utility-first CSS based on what you write.

Features:
- ✅ Build module. No runtime script.
- ✅ CSS-like selectors
- ✅ No framework to study
- ✅ Less time spent in docs
- ✅ Mangled & Extremely small CSS
- ✅ No CSS purge needed
- ✅ Components, Variables, Custom selectors
- ✅ It can generate multiple CSS bundles

Also, we have a page about <nuxt-link to="/docs/get-started/why-stylify-css">what problems Stylify CSS solves and why you should give it a try!</nuxt-link>

## 🔗 Components
In Styled Components, components are often defined this way:
```jsx
const Title = styled.div`
  color: blue
  font-weight: bold
  @media (max-width: 768px) {
    color:red
  }
`;
<Title>Hello World!🎉</Title>
```

Stylify provides a similar feature. Components can be defined within a file, where they are used, or globally within a config.

Example with the configuration within a file. The content between `stylify-components` expect javascript object without surrounding brackets:
```html
<!--
stylify-components
  title: 'color:blue font-weight:bold md:color:red'
/stylify-components
-->
<div class="title"></div>
```

Example in a global compiler config:
```js
const compilerConfig = {
  title: 'color:blue font-weight:bold md:color:red'
};
```

Usage:
```html
<div class="title"></div>
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
<div class="d"></div>
```

## 🎯 Selectors
Stylify also allows you to use utilities directly within the content. So the above example can also look like this:

```html
<div class="color:blue font-weight:bold md:color:red"></div>
```

The production output of the CSS will be similar to the example of the components. The HTML however will look like this:
```html
<div class="a b c"></div>
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

Also, we need to configure Stylify, to replace variables by CSS variables instead of their value:
```js
const compilerConfig = {
  replaceVariablesByCssVariables: true,
  externalVariables: ['localTextColor']
}
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
<div class="color:primary"></div>
```

In Compiler Config:
```js
const compilerConfig = {
  primary: '#000'
}
```

## 📦 Splitting CSS
Styled Components splits CSS automatically and inject it directly into the document based on the rendered components.

Stylify doesn't have any runtime script, so you have to configure the <nuxt-link to="/docs/bundler">Bundler</nuxt-link> and the splitting manually.

However, the Stylify output is so small (it can be even 10 Kb (gzipped) for a large website), that it is ok to have only one bundle for the whole project. Eventually, there you can <nuxt-link to="/docs/get-started/best-practices#splitting-css">check tips</nuxt-link> for CSS bundles splitting.

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
