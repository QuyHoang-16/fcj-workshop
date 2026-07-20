document.addEventListener("DOMContentLoaded", function () {

    // Lưu trang hiện tại
    const currentPath = window.location.pathname;

    let visited = JSON.parse(localStorage.getItem("visitedPages") || "[]");

    if (!visited.includes(currentPath)) {
        visited.push(currentPath);
        localStorage.setItem("visitedPages", JSON.stringify(visited));
    }

    document.querySelectorAll("#sidebar li[data-nav-id]").forEach(function (item) {

        let nav = item.getAttribute("data-nav-id");

        // Nếu đang chạy trên GitHub Pages thì thêm tên repo
        if (!nav.startsWith("/fcj-workshop")) {
            nav = "/fcj-workshop" + nav;
        }

        if (visited.includes(nav)) {
            item.classList.add("visited");
        }

    });

});