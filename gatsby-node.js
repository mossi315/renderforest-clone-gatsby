const path = require('path')
const slugify = require('slugify');
exports.createPages = async({graphql, actions}) => {
    const { createPage } = actions

   

    const result = await graphql(`
    query GetNavs {
        allContentfulNavigation {
          nodes {
            video
          }
        }
      }
    `)   

    // result.data.allContentfulNavigation.nodes.forEach(navs=>{
    //   navs.video.forEach(page => {
    //     deletePage({ path: `/${page}` });
    //   });  
    // })


    result.data.allContentfulNavigation.nodes.forEach(navs => {
        navs.video.forEach(tag => {
            const slug = slugify(tag, {lower : true});
            createPage({
                path: `/${slug}`,
                component: path.resolve(`src/templates/tag-template.js`),
                context: {
                   tag : tag,
                },
            })
        })
    })
}