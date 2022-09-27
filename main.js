function modal() {
    Swal.fire({
        title: '¡Recuerda!',
        text: 'Es temporada de haters, mantente fresco :)',
        icon: 'success',
        showConfirmButton: false,
        timer: 13500
    });
}

$(document).ready(function () {
    $('.carousel').carousel({
        interval: 8000
    });
});