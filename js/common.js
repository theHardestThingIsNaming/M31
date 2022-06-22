function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function move_to_next_page(page) {
    window.location.href=page;
}

function releave_gif(elm_id, gif_path){
    document.getElementById(elm_id).innerHTML = `
        <div id="${elm_id}" class="fade-in-image padded">
            <img src="${gif_path}" class="fixed_height ex_large_img" style="display: block; margin: auto;">
        </div>
    `;
}