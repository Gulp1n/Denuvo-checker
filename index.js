import fetch from 'node-fetch'
import * as cheerio from 'cheerio'
import { HtmlReplace } from './modules/replace.js'
// import fs from 'fs'

let url = 'https://api.reddit.com/api/info/?id=t3_p9ak4n'

const body = await fetch(url).then(res => res.json())
const data = await body.data.children[0].data.selftext_html
const html = await HtmlReplace(data)

// fs.writeFile('data.html', html, (err) => {
//     if (err) throw err;
// })

const $ = cheerio.load(html)
let pp = $("table")
let pp2 = pp.first().text()
if (pp2.includes('Hogwarts Legacy')){
    console.log(':(')
} else {
    console.log(':)')
}
