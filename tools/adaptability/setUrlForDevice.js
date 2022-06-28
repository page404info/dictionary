let iframes = document.getElementsByTagName("iframe");

for (let i = 0; i < iframes.length; i++) {
  iframes[i].src = localStorage.getItem("url");
}
