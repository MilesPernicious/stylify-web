<template>
	<div class="display:grid grid-template-columns:repeat(auto-fit,minmax(300px,1fr)) gap:24px flex-wrap:wrap">
		<nuxt-link v-for="component in componentsList" :key="component.docsUrl" :to="`/snippets/${component.docsUrl}`" class="text-decoration:none width:100% display:flex flex-direction:column margin-bottom:24px border-radius:8px [&:hover_h3]{color:$blue1}">
			<iframe :src="`/content/snippets/${component.previewUrl}`" class="width:100% height:250px overflow:hidden border-radius:8px" frameBorder="0" loading="lazy" fetchpriority="low"></iframe>
			<h3 class="margin:12px_0_0_0 font-size:18px line-height:1!important transition:.3s">{{ component.title }}</h3>
		</nuxt-link>
	</div>
</template>

<script>
const components = [
	{
		previewUrl: 'components/article-list1.html',
		docsUrl: 'components/articles',
		title: 'Articles List - Type 1'
	},
	{
		previewUrl: 'components/article-list2.html',
		docsUrl: 'components/articles',
		title: 'Articles List - Type 2'
	},
	{
		previewUrl: 'components/article-list3.html',
		docsUrl: 'components/articles',
		title: 'Articles List - Type 3'
	},
	{
		previewUrl: 'components/article-detail.html',
		docsUrl: 'components/articles',
		title: 'Articles - Detail'
	},
	{
		previewUrl: 'components/animations.html',
		docsUrl: 'components/animations',
		title: 'Animations'
	},
	{
		previewUrl: 'components/badges.html',
		docsUrl: 'components/badges',
		title: 'Badges'
	},
	{
		previewUrl: 'components/breadcrumb.html',
		docsUrl: 'components/breadcrumb',
		title: 'Breadcrumb'
	},
	{
		previewUrl: 'components/buttons.html',
		docsUrl: 'components/buttons',
		title: 'Buttons'
	},
	{
		previewUrl: 'components/containers.html',
		docsUrl: 'components/containers',
		title: 'Containers'
	},
	{
		previewUrl: 'components/dialogs.html',
		docsUrl: 'components/dialogs',
		title: 'Dialogs'
	},
	{
		previewUrl: 'components/dividers.html',
		docsUrl: 'components/dividers',
		title: 'Dividers'
	},
	{
		previewUrl: 'components/faq.html',
		docsUrl: 'components/faq',
		title: 'FAQ'
	},
	{
		previewUrl: 'components/sign-in-form.html',
		docsUrl: 'components/forms',
		title: 'Forms'
	},
	{
		previewUrl: 'components/grids-fit.html',
		docsUrl: 'components/grids',
		title: 'Grids'
	},
	{
		previewUrl: 'components/lists.html',
		docsUrl: 'components/lists',
		title: 'Lists'
	},
	{
		previewUrl: 'components/messages.html',
		docsUrl: 'components/messages',
		title: 'Messages'
	},
	{
		previewUrl: 'components/mobile-navigation.html',
		docsUrl: 'components/navigations',
		title: 'Mobile navigation'
	},
	{
		previewUrl: 'components/navigation-with-overflow.html',
		docsUrl: 'components/navigations',
		title: 'Navigation with overflow'
	},
	{
		previewUrl: 'components/paginations.html',
		docsUrl: 'components/paginations',
		title: 'Paginations'
	},
	{
		previewUrl: 'components/shadows.html',
		docsUrl: 'components/shadows',
		title: 'Shadows'
	},
	{
		previewUrl: 'components/switches.html',
		docsUrl: 'components/switches',
		title: 'Switches'
	},
	{
		previewUrl: 'components/text-fields.html',
		docsUrl: 'components/text-fields',
		title: 'Text Fields'
	},
];

export default {
	props: {
		selected: {
			type: Array,
			default: () => [
				'components/buttons',
				'components/navigations',
				'components/switches',
				'components/text-fields',
				'components/paginations',
				'components/articles',
				'components/dialogs',
				'components/messages',
				'components/forms'
			]
		}
	},
	computed: {
		componentsList() {
			if (!this.selected.length) {
				return components;
			}

			const selectedComponents = [];

			for (const docsUrl of this.selected) {
				selectedComponents.push(components.find((component) => component.docsUrl === docsUrl ));
			}

			return selectedComponents;
		}
	}
}
</script>
