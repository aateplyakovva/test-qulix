function ValidateInput () {
    const input = document.querySelector('.counter')
    const result = document.querySelector('.result')

    const limit = 100

    result.textContent = 00 + '/' + limit

    input.addEventListener('input', () => {
        const textLength = input.value.length
        result.textContent = textLength + '/' + limit
    })
}

ValidateInput ()