function eliminarProducto(ref) {
    $.ajax({
        url: `/productos/${ref}`,
        type: 'DELETE',
    })
}
