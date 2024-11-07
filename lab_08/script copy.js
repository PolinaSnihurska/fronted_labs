function toggleFolder(element) {
    const nestedList = element.nextElementSibling;
    if (nestedList) {
        nestedList.style.display = nestedList.style.display === "none" ? "block" : "none";
    }
}

document.querySelectorAll(".nested").forEach(el => {
    el.style.display = "none";
});