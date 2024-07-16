const SitemapGenerator = require('sitemap-generator')

//url tujuan
const siteUrl = 'https://karyasentosaunggul.co.id'

//membuat generator
const generator = SitemapGenerator(siteUrl,{
    stripQuerystring: false
})

// membuat event listener berhasil atau gagal
generator.on('done', ()=>{
    console.log('done')
})

generator.on('error', (error)=>{
    console.log(`Error: ${error}`)
})

//mengenerate sitemap
generator.start()