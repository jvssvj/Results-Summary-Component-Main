fetch('data.json').then((response) => {
    response.json().then((info) => {
        document.querySelector('.reaction__img').src = info[0].icon
        document.querySelector('.reaction__title').innerHTML = info[0].category
        document.querySelector('.reaction__score').innerHTML = info[0].score

        document.querySelector('.memory__img').src = info[1].icon
        document.querySelector('.memory__title').innerHTML = info[1].category
        document.querySelector('.memory__score').innerHTML = info[1].score

        document.querySelector('.verbal__img').src = info[2].icon
        document.querySelector('.verbal__title').innerHTML = info[2].category
        document.querySelector('.verbal__score').innerHTML = info[2].score
        
        document.querySelector('.visual__img').src = info[3].icon
        document.querySelector('.visual__title').innerHTML = info[3].category
        document.querySelector('.visual__score').innerHTML = info[3].score
    })
})