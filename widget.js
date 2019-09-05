startBtn = document.querySelector(".show a");
textArea = document.querySelector(".text");
closeBtn = document.querySelector(".close");
bar = document.querySelector(".visible");
getWidgets = document.querySelector(".barCenter button");

class Bar {
    constructor(props) {
        this.txt = props.message;
        this.position = props.position;
    }


}
getWidgets.addEventListener("click", () => {
    alert("hello world");
})

startBtn.addEventListener("click", () => {
    textArea.innerHTML = myBar.txt;
    bar.style.display = 'block';
    if (myBar.position === 'top') {
        bar.style.top = 0;
    } else {
        bar.style.bottom = 0;
    }
})

closeBtn.addEventListener("click", () => {
    bar.style.display = 'none';
})


