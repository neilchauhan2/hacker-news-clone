export const Alert = (msg, status) => {
    const div = document.createElement("div");
    div.className = `notification is-${status} `;
    div.appendChild(document.createTextNode(msg));
    const container = document.getElementById("search-section-container");
    container.insertBefore(div, document.getElementById("alert"));
    setTimeout(() => {
        container.removeChild(div);
    }, 3000);
};
