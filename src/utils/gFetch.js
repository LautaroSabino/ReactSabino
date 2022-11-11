
let arrayList = [{
    ID: '1',
    nombre: 'TOLDO PUNTO RECTO',
    descripción: 'Toldo plano de lona reforzada',
    stock: 10,
    precio: 15000,
    foto: '/assets/toldoroler.jpg'
}, {
    ID: '2',
    nombre: 'TOLDO PERGOLA',
    descripción: 'Toldo recto de lona reforzada',
    stock: 8,
    precio: 15000,
    foto: '/assets/toldopergola.jpeg'
}, {
    ID: '3',
    nombre: 'TOLDO ROMANO',
    descripción: 'Toldo plano de lona sencilla',
    stock: 4,
    precio: 15000,
    foto: '/assets/toldoromano.jpg'
}, {
    ID: '4',
    nombre: 'TOLDO VELA',
    descripción: 'Toldo roler de tela blackout',
    stock: 20,
    precio: 15000,
    foto: '/assets/toldovela.jpg'
}]


export const gFetch = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(arrayList)
        
    }, 3000);

})