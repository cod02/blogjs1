function darkMode() {
    localStorage.setItem("mode", "darkmode" === localStorage.getItem("mode") ? "light" : "darkmode"), "darkmode" === localStorage.getItem("mode") ? document.querySelector("#mainContent").classList.add("darkMode") : document.querySelector("#mainContent").classList.remove("darkMode")
};

function gridMode() {
    localStorage.setItem("list", "listmode" === localStorage.getItem("list") ? "grid" : "listmode"), "listmode" === localStorage.getItem("list") ? document.querySelector("#mainContent").classList.add("gridMode") : document.querySelector("#mainContent").classList.remove("gridMode")
};

function resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 20,
        headerEl = document.getElementById( & #39;header&# 39;);
    if (distanceY > shrinkOn) {
        headerEl.classList.add("show");
    } else {
        headerEl.classList.remove("show");
    }
}
window.addEventListener( & #39;scroll&# 39;, resizeHeaderOnScroll);

function copyFunction() {
    document.getElementById("getlink").select(), document.execCommand("copy"), document.getElementById("shareNotif").innerHTML = "<span>Link copied!</span>"
};
(function () {
    var youtube = document.querySelectorAll(".lazyYoutube");
    for (var i = 0; i < youtube.length; i++) {
        var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/sddefault.jpg";
        var image = new Image();
        image.setAttribute("class", "lazy");
        image.setAttribute("data-src", source);
        image.setAttribute("src", "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=");
        image.setAttribute("alt", "Youtube video");
        image.addEventListener("load", function () {
            youtube[i].appendChild(image);
        }(i));
        youtube[i].addEventListener("click", function () {
            var iframe = document.createElement("iframe");
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allowfullscreen", "");
            iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");
            this.innerHTML = "";
            this.appendChild(iframe);
        });
    };
})();
