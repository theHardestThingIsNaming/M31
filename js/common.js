function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function move_to_next_page(page) {
    window.location.href=page;
}


