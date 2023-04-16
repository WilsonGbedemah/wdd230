function full() {
    const show = document.getElementById("drink-count");
    if (!localStorage.getItem("count")) {
        localStorage.setItem("count", 0);
    }
    show.innerText = localStorage.getItem("count") || 0;

}

full();

window.addEventListener("storage", () => {
    //console.log("f")
    full()
})
