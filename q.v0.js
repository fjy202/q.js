class QResult{
    constructor(ele){
        console.assert(ele instanceof Element)
        this.element=ele
    }
    setText(text){
        this.element.innerText=text
        return this
    }
    setHTML(html){
        this.element.innerHTML=html
        return this
    }
    setStyle(k,v){
        this.element.style[k]=v
        return this
    }
    setAttr(k,v){
        this.element.setAttribute(k,v)
        return this
    }
    getText(){
        return this.element.innerText
    }
    getHTML(){
        return this.element.innerHTML
    }
    getStyle(k){
        return this.element.style[k]
    }
    getAttr(k){
        return this.element.getAttribute(k)
    }
}
class QResults{
    constructor(eles){
        console.assert(eles instanceof NodeList)
        this.elements=eles
    }
    setText(text){
        this.elements.foreach((obj)=>{obj.innerText=text})
        return this
    }
    setHTML(html){
        this.elements.foreach((obj)=>{obj.innerHTML=html})
        return this
    }
    setStyle(k,v){
        this.elements.foreach((obj)=>{obj.style[k]=v})
        return this
    }
    setAttr(k,v){
        this.elements.foreach((obj)=>{obj.setAttribute(k,v)})
        return this
    }
    getText(){
        return this.element.innerText
    }
    getHTML(){
        return this.element.innerHTML
    }
    getStyle(k){
        return this.element.style[k]
    }
    getAttr(k){
        return this.element.getAttribute(k)
    }
}
var qjs={
    get:function get(q){
        q=q||"*"
        return new QResult(document.querySelector(q))
    },
    gets:function gets(q){
        q=q||"*"
        return new QResults(document.querySelectorAll(q))
    }
}