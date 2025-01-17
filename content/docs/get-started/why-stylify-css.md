---
section: get-started

order: 1

navigationTitle: "Why Stylify?"

title: "Why you should use Stylify CSS?"
description: "Why you should use Stylify CSS instead of writing CSS manually? Learn what are Stylify CSS features and what problems Stylify tries to solve."
---

Learn what are Stylify CSS features and what problems Stylify tries to solve. Discover how it can improve your daily coding experience and how it simplifies onboarding a new developer into the team.

Stylify may look like inline styles. Why not use them? Because they cannot be efficiently optimized.

## Stylify CSS Features
Stylify CSS allows you to write CSS faster and get extremely small CSS bundles. It is also easily integrable into any tool.

<stylify-features></stylify-features>

## Problems Stylify CSS tries to solve
Stylify CSS primarily focuses on the syntax for utilities and CSS bundles optimization. But apart from that, there are a lot of problems that Stylify solves.
Some of them appear when writing CSS and some of them when a new employee joins a company.

#### Duplicated properties for selectors
Whether we write a component or a selector, we mostly duplicate `properties:values` attached to that selector. Stylify solves this by internal algorithm for joining selectors, components and utilities.

#### Duplicated media queries
The same problem as above but for media queries. Stylify attaches selectors to correct media query and they are generated only once for each file.

#### Constant switching between CSS and HTML files
When writing CSS manually, we often need to create a CSS file, then go to HTML, attach that class to some element and add CSS for it. With Stylify CSS this is not necessary.

#### Need to remove unused classes manually
You can do that with the purge tool but that just fixes already-made mistakes. Stylify CSS generates everything on demand. No unused CSS is generated. No purge is needed.

#### Complicated CSS files management
If the CSS is written manually (with or without a CSS preprocessor) we have to create CSS files or style tags for it (within Vue templates for example). This makes CSS management difficult. We have to manually create, remove and rename files. In case of importing files, we have to always fix the path when the file moves somewhere else or is renamed. When the amount of CSS files starts rising, it's simply more and more difficult. This is not the case with Stylify CSS. Files can be in the `.gitignore`. They are generated automatically based on each bundle configuration. Adding style tags and imports can be automated using hooks too.

#### Wrong CSS splitting
It takes a lot of work to split and correctly import CSS, to avoid importing unused styles. Since CSS utilities are small and the good approach is to split it for layout/page or not split anything at all, the import is simple.

#### We have to figure out names for selectors using BEM or a similar approach
This is eliminated by CSS-like utilities. There is no need for BEM or other naming conventions.

#### Creating useless selectors for simple things
Utilities solve the problem of creating a selector such as a `sidebar--larger-margin` just for larger indentation.

#### Unnecessary high specificity in CSS
This is again solved by utilities and specific overrides can be solved using CSS variables. Because you can style elements conditionally and atomically, you often don't need to have higher specificity when using utilities.

#### Counterintuitive nesting in preprocessors
In preprocessors like SCSS and Stylus, we tend to use nesting too much like in the example below. This makes the selector's discovery harder and also harder to maintain. With utilities, you simply don't use this.

```css
.section {
	&__homepage {
		// ...
		&-top-left { /* */ }
	}
	&--big
}
```

#### Selectors are modified from multiple places
We often need to modify for example a button. To make it larger/smaller for someplace within an application. So we make a class that modifies that button (if done correctly) or override that button selector directly (which is wrong).

Overriding can lead to copying such selectors on multiple places, which is hard to maintain and sometimes, we also need to override that already overridden selector. Which is an even bigger problem.

In the case of modifiers, the question is, are you going to put them into a CSS file, that is loaded on the page, where it is used or into the component file to keep all modifiers in one place. The first approach makes the maintenance harder because the modifiers are scattered across various files and the second leads to unused modifiers on a page.

Stylify allows you to define modifiers in both ways. Within files, where are used or in a global config. However, modifiers are always generated only into those bundles, where are used. Unused modifiers (global or local) are not generated.

#### Fewer problems for new employees
When a new employee joins a company, he doesn't have to study any framework. If he knows CSS, he can start using Stylify CSS right away. He doesn't have to study CSS-in-JS library, CSS framework shortcuts and how to use that framework so the output is optimized.

<div class="text-align:center margin-bottom:48px">
	<h2 class="lg:font-size:32px margin-bottom:24px">Interested? Go ahead and give Stylify CSS a try!</h2>
	<nuxt-link to="/docs/get-started" class="btn line-height:1 lg:font-size:24px">
		Get Started
		<i class="icon icon-arrow-down-circle display:inline-block margin-left:8px transform:rotate(-90deg)"></i>
	</nuxt-link>
</div>
