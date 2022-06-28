if (true) {
  let url = document.getElementById("main-prod-url");
  let item = document.getElementById("main-prod-bar");

  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();

  xhr.addEventListener("load", () => {
    let status = xhr.status;
    if (status >= 200 && status < 300) {
      item.style.width = '100%';
    }
  });
}
