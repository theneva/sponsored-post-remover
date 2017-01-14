console.log('starting up');

setInterval(() => {
    var elements = document.getElementsByClassName('_m8c');
    for (var i = 0; i < elements.length; i++) {
        elements[i]
            .parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
            .style.display = 'none'
    }

    console.log('replaced', elements.length, 'elements');
}, 1500);
