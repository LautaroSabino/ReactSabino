export const gFetch = new Promise((resolve, reject) => {

    let arrayList = [{
        ID: '1',
        nombre: 'Toldo plano',
        descripción: 'Toldo plano de lona reforzada',
        stock: 10
    }, {
        ID: '2',
        nombre: 'Toldo curvo',
        descripción: 'Toldo curvo de lona reforzada',
        stock: 8
    }, {
        ID: '3',
        nombre: 'Toldo plano frágil',
        descripción: 'Toldo plano de lona sencilla',
        stock: 4
    }, {
        ID: '4',
        nombre: 'Toldo roler',
        descripción: 'Toldo roler de tela blackout',
        stock: 20
    }]
    resolve(arrayList)

})