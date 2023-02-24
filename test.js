import fetch from "node-fetch";
import * as cheerio from "cheerio";
import { HtmlReplace } from "./modules/replace.js";
import fs from 'fs'
import * as ReadLine from "readline/promises";

let url = 'https://api.reddit.com/api/info/?id=t3_p9ak4n'

const body = await fetch(url).then(res => res.json())
const data = await body.data.children[0].data.selftext_html
const html = await HtmlReplace(data)

const $ = cheerio.load(html)
let pp = $("table")
let pp2 = pp.first().contents().last().children().get().map(res => {
    return $(res).children().first().text()
})

const rl = ReadLine.createInterface({
    input: process.stdin,
    output: process.stdout,
})

pp2.forEach((ele, i) => {
    console.log(`${i+1}: ${ele}`)
})

async function selector(){
    let answer = await rl.question(`select game titel, type number between 1 and ${pp2.length} >>> `, (ele) => {return ele})
    if(answer < 1 || answer > pp2.length) {
        console.log('invalid imput try again')
        return await selector()
    }
    rl.close()
    return answer
}

let select = await selector()
console.log(`you selected ${pp2[select-1]}`)