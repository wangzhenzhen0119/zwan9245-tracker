
// open add_mark
let add_mark = document.querySelector(".add_mark")
let add_btn = document.querySelector(".add_btn")


add_btn.onclick = function () {
    add_mark.style.display = 'flex'
}


// close add_mark
let close = document.querySelector(".close")
close.onclick = function () {
    add_mark.style.display = 'none'
   

}

let sle_img_mark = document.querySelector(".sle_img_mark")
// open add_img
let mark_form_sel_img = document.querySelector(".mark_form_sel_img")
mark_form_sel_img.onclick = function () {
    sle_img_mark.style.display = 'block'
}

// close add_img
let sle_img_btn = document.querySelector(".sle_img_btn")
sle_img_btn.onclick = function () {
    sle_img_mark.style.display = 'none'
}

let add_name_src = document.querySelector(".add_name_src")

// select add_img
let sel_imgs = document.querySelectorAll(".sel_imgs")
for (let i = 0; i < sel_imgs.length; i++) {
    sel_imgs[i].onclick = function () {
        add_name_src.src = sel_imgs[i].src
        sle_img_mark.style.display = 'none'
    }
}

// init add_mark_draw
let mark_draw = document.querySelectorAll(".mark_draw")
for (let i = 0; i < mark_draw.length; i++) {
    mark_draw[i].onclick = function () {
        for (let j = 0; j < mark_draw.length; j++) {
            mark_draw[j].classList.remove('mark_draw_active')
        }
        for (let j = 0; j <= i; j++) {
            mark_draw[j].classList.add('mark_draw_active')
        }
    }
}

// save add_mark
let save_btn = document.querySelector(".save_btn")
save_btn.onclick = function () {
    let add_name_src = document.querySelector(".add_name_src")
    let mark_rename = document.querySelector(".mark_rename")
    let mark_artist = document.querySelector(".mark_artist")
    let mark_album = document.querySelector(".mark_album")
    let mark_date = document.querySelector(".mark_date")
    let mark_content = document.querySelector(".mark_content")

    let mark_draw = document.querySelectorAll(".mark_draw")
    let mark_fraction = 0
    for (let i = 0; i < mark_draw.length; i++) {
        if (mark_draw[i].classList[1]) {
            mark_fraction = mark_fraction + 1
        }
    }
    // input value
    let obj = {
        img: add_name_src.src,
        title: mark_rename.value,
        artist: mark_artist.value,
        album: mark_album.value,
        fraction: mark_fraction,
        content: mark_content.value,
        date: mark_date.value
    }

    add_mark.style.display = 'none'
    createDom(obj)
    clickHandleer()


}
   
