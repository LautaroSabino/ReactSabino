
let arrayList = [{
    ID: '1',
    nombre: 'Toldo plano',
    descripción: 'Toldo plano de lona reforzada',
    stock: 10,
    foto: 'https://argentinatoldos.com/wp-content/uploads/2021/01/toldo-brazo-invisibles-1024x768.jpg'
}, {
    ID: '2',
    nombre: 'Toldo curvo',
    descripción: 'Toldo curvo de lona reforzada',
    stock: 8,
    foto: 'https://argentinatoldos.com/wp-content/uploads/2021/01/toldo-brazo-invisibles-1024x768.jpg'
}, {
    ID: '3',
    nombre: 'Toldo plano frágil',
    descripción: 'Toldo plano de lona sencilla',
    stock: 4,
    foto: 'https://argentinatoldos.com/wp-content/uploads/2021/01/toldo-brazo-invisibles-1024x768.jpg'
}, {
    ID: '4',
    nombre: 'Toldo roler',
    descripción: 'Toldo roler de tela blackout',
    stock: 20,
    foto: 'https://argentinatoldos.com/wp-content/uploads/2021/01/toldo-brazo-invisibles-1024x768.jpg'
}]


export const gFetch = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(arrayList)
        
    }, 3000);

})