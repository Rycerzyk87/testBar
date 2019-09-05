
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
})

closeBtn.addEventListener("click", () => {
    bar.style.display = 'none';
})



let myBar = new Bar({
    message: 'Add beautiful widgets to your website',
    position: 'top',
});