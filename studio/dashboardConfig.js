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
                  buildHookId: '5d88ac66dbb16855d045f7af',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-n2d5zver',
                  apiId: 'e4b6659e-7fe9-467e-bb92-892e9f5f248d'
                },
                {
                  buildHookId: '5d88ac66eb920e5578d1655d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-t8vt4kx8',
                  apiId: 'f6670ac7-aed2-46e1-87e4-487c9198d075'
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
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-t8vt4kx8.netlify.com', category: 'apps'}
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
