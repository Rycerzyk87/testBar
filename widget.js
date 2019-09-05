// let myBar = new Bar({
//     message: 'Add beautiful widgets to your website',
//     position: 'top',
// });

// const btn = document.querySelector(".show a");
// const bar = document.querySelector(".visible");
// const text = document.querySelector(".text");
// const close = document.querySelector(".close");

// const heigth = myBar.position;

// btn.addEventListener("click", () => {
//     console.log("dzia");
// })

class Bar {
    constructor(props) {
        this.startBtn = document.querySelector(".show a");
        this.textArea = document.querySelector(".text");
        this.closeBtn = document.querySelector(".close");
        this.bar = document.querySelector(".visible");

        this.txt = props.message;
        this.position = props.position;
    }
}