import path from 'path';

export default {
	sassVarsDirPath: path.join(__dirname, 'assets', 'scss', 'variables'),
	extend: {
		compiler: {
			ignoredElements: ['code-editor'],
			variables: {
				blue1: '#01befe',
				blue2: '#f2fcff',

				orange1: '#fe9901',
				orange2: '#fff9f2',

				grey1: '#f8f9fa',
				grey2: '#222',
				grey3: '#e5e7eb',

				shadow1: '0 8px 32px -8px rgb(0, 0, 0, 0.2)',

				radius1: '4px',
				radius2: '8px'
			},
			plainSelectors: {
				// Global
				'*': 'box-sizing:border-box scroll-behavior:smooth',
				'body': 'font-size:16px line-height:28px',
				img: 'max-width:100%',
				textarea: 'outline:none',
				hr: 'border:0 height:1px background-color:$grey3',
				'::selection': 'color:#fff background:$blue1',
				'.prism-editor-wrapper *': 'font-size:16px line-height:18px',

				// Articles common
				'article': 'margin-top:0 font-size:16px line-height:28px word-break:break-word',
				'article h1': 'scroll-margin-top:50px cursor:pointer font-size:34px line-height:54px margin-bottom:12px',
				'article h2': 'scroll-margin-top:50px cursor:pointer position:relative font-size:26px line-height:44px margin-top:42px margin-bottom:12px',
				'article h3': 'scroll-margin-top:50px cursor:pointer position:relative font-size:20px line-height:36px margin-top:32px margin-bottom:8px',
				'article h4': 'scroll-margin-top:50px cursor:pointer position:relative margin-top:32px margin-bottom:8px',
				'article pre': 'margin-top:0',
				'article a': 'color:$blue1',
				'article table': 'margin-bottom:24px min-width:800px',
				'article table td': 'word-break:keep-all border-bottom:1px__solid__$grey3 padding:4px',
				'article table th': 'text-align:left padding:4px',
				'article table thead': 'position:sticky top:0 left:0 background-color:rgba(255,255,255,0.8) backdrop-filter:blur(12px)',
				'article .note':'margin:16px__0',
				'article .note, article .note *': 'font-size:14px line-height:24px',
				'article .example-editor': 'margin:24px__0',
				'article * a[href^="#"][aria-hidden=true]': 'display:inline-block font-size:18px visibility:hidden padding:4px line-height:1 position:absolute top:50% text-decoration:none left:-24px transform:translateY(-50%)',
				'article h2:hover > a[href^="#"][aria-hidden=true], article h3:hover > a[href^="#"][aria-hidden=true], article h4:hover > a[href^="#"][aria-hidden=true]': 'visibility:visible',
				'.nuxt-content .nuxt-content-highlight': 'position:relative margin-top:24px margin-bottom:24px',
				'.hp__example-editor.example-editor': 'min-height:330px',
				// Docs
				'.docs__aside-link.nuxt-link-active': 'font-weight:bold color:$blue1 background-color:$blue2'
			},
			components: {
				// Global
				container: `
					max-width:1280px margin-left:auto margin-right:auto padding-left:8px padding-right:8px
					md:padding-left:12px md:padding-right:12px
					lg:padding-left:24px md:padding-right:24px
				`,
				btn: `
					background-color:$blue1 white-space:nowrap line-height:1 transition:background-color__0.3s,__color__0.3s cursor:pointer color:#fff text-decoration:none font-weight:bold
					border-radius:$radius2 padding:12px__24px display:inline-flex align-items:center
				`,
				'btn--transparent': {
					selectors: 'background:none hover:background-color:rgba(1,__190,__254,__0.1)',
					selectorsChain: 'btn'
				},
				'integration-block__image-wrapper': `max-height:60px max-width:100%`,
				'integration-block': `
					display:flex flex-direction:row justify-content:center align-items:center
					box-shadow:$shadow1 border-radius:$radius2 background-color:#fff
					width:calc(100%__*__1/2__-__12px) margin-bottom:12px margin-left:12px padding:12px
					text-decoration:none color:#000 min-height:100px
					sm:width:calc(100%__*__1/3__-__12px)
					md:width:calc(100%__*__1/4__-__24px) md:margin-bottom:24px md:margin-left:24px
					lg:padding:18px lg:width:calc(100%__*__1/5__-__24px)
				`,

				// HP
				'hp__section-title': `
					font-size:32px line-height:52px font-weight:bold margin-top:0 margin-bottom:24px
					md:font-size:60px md:line-height:90px md:margin-bottom:32px
				`,
				'hp__section-subtitle': `
					font-size:18px line-height:32px
					margin-top:0 margin-bottom:24px max-width:800px
					md:font-size:24px md:line-height:40px
				`,
				'hp__section-content': 'margin-top:40px md:margin-top:80px',
				'hp__section-more-info-link': `
					text-decoration:none color:$blue1 display:inline-flex align-items:center font-size:18px
					md:font-size:24px
				`,
				'hp__section-more-info-link-icon': 'margin-left:12px transform:rotate(-90deg)'
			}
		}
	}
};