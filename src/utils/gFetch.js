
let arrayList = [{
    ID: '1',
    nombre: 'TOLDO PUNTO RECTO',
    categoria: 'Lona reforzada',
    stock: 10,
    precio: 15000,
    foto: '/assets/toldoroler.jpg'
}, {
    ID: '2',
    nombre: 'TOLDO PERGOLA',
    categoria: 'Lona reforzada',
    stock: 8,
    precio: 15000,
    foto: '/assets/toldopergola.jpg'
}, {
    ID: '3',
    nombre: 'TOLDO ROMANO',
    categoria: 'Lona simple',
    stock: 4,
    precio: 15000,
    foto: '/assets/toldoromano.jpg'
}, {
    ID: '4',
    nombre: 'TOLDO VELA',
    categoria: 'Lona simple',
    stock: 20,
    precio: 15000,
    foto: '/assets/toldovela.jpg'
}]


export const gFetch = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(arrayList)
        
    }, 2000);

})

export const gFetch2 = (ID) => {

    return new Promise((resuelto, rechazado)=>{
        setTimeout(()=>{
            resuelto(ID ? product.find(item => item.ID === ID) : product)
        }, 2000)
    })
}