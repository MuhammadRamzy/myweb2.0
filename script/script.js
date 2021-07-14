const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top:" + (e.pageY - 12) + "px; left:" + (e.pageX - 12) + "px;");
})
document.addEventListener('click', () => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    },500)
})