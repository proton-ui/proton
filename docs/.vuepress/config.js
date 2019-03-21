module.exports = {
    title: 'Proton UI',
    description: 'An Elegant Vue.js Component Library Built For Atomic CSS Frameworks',
    ga: 'UA-130579476-1',

    head: [
        ['link', { rel: 'icon', href: '/hero.png' }],
        ['link', { rel: 'stylesheet', href: '/proton-preflight.css' }],
        ['link', { rel: 'stylesheet', href: '/proton-components.css' }],
        ['link', { rel: 'stylesheet', href: '/proton-utilities.css' }],
    ],

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
                    { text: 'Checkbox', link: '/guide/components/checkbox' },
                    { text: 'Collapse', link: '/guide/components/collapse' },
                    { text: 'Datatable', link: '/guide/components/datatable' },
                    { text: 'Dropdown', link: '/guide/components/dropdown' },
                    { text: 'Dropdown Item', link: '/guide/components/dropdown-item' },
                    { text: 'Input', link: '/guide/components/input' },
                    { text: 'Modal', link: '/guide/components/modal' },
                    { text: 'Pagination', link: '/guide/components/pagination' },
                    { text: 'Radio', link: '/guide/components/radio' },
                    { text: 'Select', link: '/guide/components/select' },
                    { text: 'Slug', link: '/guide/components/slug' },
                    { text: 'Tabs', link: '/guide/components/tabs' },
                    { text: 'Textarea', link: '/guide/components/textarea' },
                    { text: 'Toast', link: '/guide/components/toast' },
                    { text: 'Toggle', link: '/guide/components/toggle' },
                    { text: 'Tooltip', link: '/guide/components/tooltip' },
                    { text: 'Treeview', link: '/guide/components/treeview' },
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
                    '/guide/components/checkbox',
                    '/guide/components/collapse',
                    '/guide/components/datatable',
                    '/guide/components/dropdown',
                    '/guide/components/dropdown-item',
                    '/guide/components/input',
                    '/guide/components/modal',
                    '/guide/components/pagination',
                    '/guide/components/radio',
                    '/guide/components/select',
                    '/guide/components/slug',
                    '/guide/components/tabs',
                    '/guide/components/textarea',
                    '/guide/components/toast',
                    '/guide/components/toggle',
                    '/guide/components/tooltip',
                    '/guide/components/treeview',
                ],
            },
        ],
    },

    plugins: [
        '@vuepress/google-analytics',
    ],
}