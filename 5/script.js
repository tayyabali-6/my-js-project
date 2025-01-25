let img = ['https://images.unsplash.com/photo-1561133211-6067fc8e7348?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhcmt8ZW58MHx8MHx8fDA%3D','https://media.istockphoto.com/id/1879765354/photo/beautiful-park-in-kuala-lumpur-malaysia.webp?a=1&b=1&s=612x612&w=0&k=20&c=3edBqqMJfcuE25hBEm2OMor_UgKLE0l9egrkD7KRS_E=','https://media.istockphoto.com/id/1148490089/photo/deciduous-tree-in-the-park.webp?a=1&b=1&s=612x612&w=0&k=20&c=gsz9HyJMhGtqfM7xiaUw6YxvhSgYFBzlc4nJ-S16iLE=']

let pic = document.getElementById('pic')

let index = 0
rightErow = () => {
    index++
    if (index >= img.length) {
        index = 0
    }
    pic.src = img[index]
}

leftErow = () => {
index--
if (index < img.length) {
    index = img.length-1
}
pic.src = img[index]
}