async function getfruitsData() {
    const response = await fetch("./scripts/fruit.json");
    const data = await response.json();
    const mp = new Map()
    data.forEach((item) => {
        mp.set(item.name.toUpperCase(), {
            nutitions: item.nutritions
        })
    });

    return mp

}

document.getElementById('fill');
const productForm = document.getElementById('fill');
productForm.addEventListener('submit', (event) => {
    
    event.preventDefault()
    const data = new FormData(productForm)
    const firstName = data.get('fname')
    const email = data.get('email')
    const number = data.get('phone')
    const firstFruit = data.get('fruits')
    const secondFruit = data.get('fruits1')
    const thirdFruit = data.get('fruits2')
    const instruct = data.get('instructions')


    getfruitsData().then((data) => {
        

        const display = document.getElementById('output')
        const output = {
            'Personal Information':{
                firstName,
                email,
                number,
            },
            
            'first fruit selected': {
                name: firstFruit,
                nutrients: data.get(firstFruit.toUpperCase())
            },

            'second fruit selected': {
                name: secondFruit,
                nutrients: data.get(secondFruit.toUpperCase())
            },

            'third fruit selected': {
                name: thirdFruit,
                nutrients: data.get(thirdFruit.toUpperCase())
            },

            instruct,
            date: (new Date()).toDateString()
        }

        display.textContent = JSON.stringify(output, null, 4)


    })
})