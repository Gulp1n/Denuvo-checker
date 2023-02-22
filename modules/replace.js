const r1 = /&lt;/g //<
const r2 = /&gt;/g //>
const r3 = /&amp;/g //&

export async function HtmlReplace(body) {
    let pp = body
    pp = pp.replace(r1, '<')
    pp = pp.replace(r2, '>')
    pp = pp.replace(r3, '&')
    return pp
}