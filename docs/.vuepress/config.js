module.exports = {
    title: 'Proton UI',
    description: 'An Elegant Vue.js Component Library Built For Atomic CSS Frameworks',

    themeConfig: {
        repo: 'efellemedia/proton',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: 'Help us improve this page!',
        lastUpdated: 'Last Updated',

        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            {
                text: 'Components',
                items: [
                    { text: 'Button', link: '/guide/components/button' },
                    { text: 'Card', link: '/guide/components/card' },
                    { text: 'Chart', link: '/guide/components/chart' },
                    { text: 'Dropdown', link: '/guide/components/dropdown' },
                    { text: 'Dropdown Item', link: '/guide/components/dropdown-item' },
                    { text: 'Input', link: '/guide/components/input' },
                    { text: 'Modal', link: '/guide/components/modal' },
                    { text: 'Radio', link: '/guide/components/radio' },
                    { text: 'Textarea', link: '/guide/components/textarea' },
                    { text: 'Toggle', link: '/guide/components/toggle' },
                    { text: 'Tooltip', link: '/guide/components/tooltip' },
                ]
            }
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
                    '/guide/components/button',
                    '/guide/components/card',
                    '/guide/components/chart',
                    '/guide/components/dropdown',
                    '/guide/components/dropdown-item',
                    '/guide/components/input',
                    '/guide/components/modal',
                    '/guide/components/radio',
                    '/guide/components/textarea',
                    '/guide/components/toggle',
                    '/guide/components/tooltip',
                ],
            },
        ],
    },
}