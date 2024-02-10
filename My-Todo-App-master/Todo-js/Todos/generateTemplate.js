const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-cotent-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    list.innerHTML = +html;
};
