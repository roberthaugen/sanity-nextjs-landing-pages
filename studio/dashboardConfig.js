export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dbaf3847af8e38460d38b0a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-h5vhfjdz',
                  apiId: '6c6c8df7-0257-4053-8f26-d15437d71b94'
                },
                {
                  buildHookId: '5dbaf384c446c90185b51ab3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-au6y3uvt',
                  apiId: '079035c8-b0f1-4aed-b7cb-ad6a30ea0c54'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/roberthaugen/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-au6y3uvt.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
