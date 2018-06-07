// 计算页面的实际高度，iframe自适应会用到
function calcPageHeight(doc) {
    var cHeight = Math.max(doc.body.clientHeight, doc.documentElement.clientHeight)
    var sHeight = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight)
    var height  = Math.max(cHeight, sHeight)
    return height
}
window.onload = function() {
    var doc = document
    var height = calcPageHeight(doc)
    var myifr = doc.getElementById('myifr')
    if (myifr) {
        // url必须指向b的绝对地址
        myifr.src = 'https://www.uscreditcardguide.com/b.html?height=' + height
            
    }
};