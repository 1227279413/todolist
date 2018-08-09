    let top1=document.querySelector(".top-1")
    let bottom=document.querySelector(".bottom")
    let ol1=document.querySelectorAll(".top1 ol")


    let a=localStorage.a?localStorage.a.split(","):[]
    let b=localStorage.b?localStorage.b.split(","):[]


function m() {
    //清空
    top1.innerHTML=""
    bottom.innerHTML=""
    localStorage.a=a.join(",")
    localStorage.b=b.join(",")



    a.forEach(function (element,index) {

        let div=document.createElement("div")
        top1.appendChild(div)
        div.classList.add("fn")
        let li=document.createElement("li")
        div.appendChild(li)
        let input=document.createElement("input")
        input.setAttribute("type","checkbox");
        input.onclick=function(){
            a.splice(index,1)
            b.unshift(element)
            m()
        }
        li.appendChild(input)
        let p=document.createElement("p")
        p.innerText=element;

        //双击
        p.ondblclick=function(){
            let input1=document.createElement("input")
            let abc=this.innerText;
            this.innerText="";
            input1.value=abc;
            let flag=true;
            //键盘回车
            input1.onkeydown=function (e) {
                flag=false;
                if(e.keyCode==13&&this.value!=""){
                    a[index]=this.value;
                    m()
                }
            }
            //失去焦点，退出输入框
            input1.onblur=function () {
                if(!flag){
                    return;
                }
                a[index]=this.value;
                m()
            }
            this.appendChild(input1)
            input1.focus();
        }
        li.appendChild(p)
        let box=document.createElement("div")
        box.classList.add("box")
        box.onclick=function () {
            a.splice(index,1)
            m()
        }
        let bigbox=document.createElement("div")
        bigbox.classList.add("yuan")
        bigbox.innerText="-"
        box.appendChild(bigbox)
        li.appendChild(box)

    })



    b.forEach(function (element,index) {
        let div=document.createElement("div")
        bottom.appendChild(div)
        div.classList.add("fn")
        let li=document.createElement("li")
        div.appendChild(li)
        let input=document.createElement("input")
        input.setAttribute("type","checkbox");
        input.checked="checked"
        input.onclick=function(){
            b.splice(index,1)
            a.unshift(element)
            m()
        }

        li.appendChild(input)
        let p=document.createElement("p")
        p.innerText=element;
        p.ondblclick=function(){
            let input1=document.createElement("input")
            let abc=this.innerText;
            this.innerText="";
            input1.value=abc;
            let flag=true;
            //键盘回车
            input1.onkeydown=function (e) {
                flag=false;
                if(e.keyCode==13&&this.value!=""){
                    b[index]=this.value;
                    m()
                }
            }
            //失去焦点，退出输入框
            input1.onblur=function () {
                if(!flag){
                    return;
                }
                b[index]=this.value;
                m()
            }
            this.appendChild(input1)
            input1.focus();
        }

        li.appendChild(p)
        let box=document.createElement("div")
        box.classList.add("box")
        box.onclick=function () {
            b.splice(index,1)
            m()
        }
        let bigbox=document.createElement("div")
        bigbox.classList.add("yuan")
        bigbox.innerText="-"
        box.appendChild(bigbox)
        li.appendChild(box)
    })
    ol1[0].innerText=a.length
    ol1[1].innerText=b.length
}
m()
let inp=document.querySelector("#text")
//键盘
inp.onkeydown=function (e) {
     if(e.keyCode==13&&this.value!=""){
         a.unshift(this.value);
         this.value=""
         m()
     }
}