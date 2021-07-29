module.exports = {
	locales: ['en', 'de', 'fr'],
	defaultLocale: 'de',
	pages: {
		'*': ['common'],
	},
	// loadLocaleFrom: (lang, ns) =>
	// 	import(`./src/locales/${lang}/${ns}.json`).then((m) => m.default),
};
