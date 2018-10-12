module.exports = {
    title: 'Proton UI',
    description: 'An Elegant Vue.js Component Library',

    themeConfig: {
        repo: 'efellemedia/proton',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: 'Help us improve this page!',
        lastUpdated: 'Last Updated',

        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
        ],

        sidebar: [
            {
                title: 'Development',
                collapsable: false,
                children: [
                    '/guide/',
                    '/guide/contributing',
                    '/guide/roadmap',
                ],
            },

            {
                title: 'Components',
                collapsable: false,
                children: [
                    '/guide/input',
                ],
            },
        ],
    },
}