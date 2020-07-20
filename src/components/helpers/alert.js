const alert = (msg, status) => {
    const div = document.createElement("div");
    div.className = `notification is-${status} `;
    div.appendChild(document.createTextNode(msg));
    const container = document.getElementById("alertBox");
    container.appendChild(div);
    setTimeout(() => {
        container.removeChild(div);
    }, 6000);
};

export default alert;
