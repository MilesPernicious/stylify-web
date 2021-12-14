---
section: get-started

order: 1

navigationTitle: "Installation"
title: 'How to install the Stylify and a first usage.'
---

Stylify can be used through CDN or installed via CLI like NPM or Yarn.

For easier start, create an index.html file, copy the code bellow into it and check whether the text is blue. If yes, then everything is ok and you can start coding.

```html
<div class="color:steelblue">
	Hello World!
</div>
<script src="https://unpkg.com/@stylify/stylify@0.0.2/dist/stylify.native.min.js"></script>
```

<note><template>
In case you want to know more about the installation, checkout the [Stylify package](/docs/stylify#installation) page for additional information.
</template></note>

In the example above we are using the Stylify Runtime and the [Native Preset](/docs/stylify/native-preset). Runtime allows us to generate CSS directly in the browser and the preset provides additional configuration so you can use the `color:steelblue` selector.