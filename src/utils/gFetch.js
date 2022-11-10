
let arrayList = [{
    ID: '1',
    nombre: 'TOLDO PUNTO RECTO',
    descripción: 'Toldo plano de lona reforzada',
    stock: 10,
    precio: 15000,
    foto: 'https://argentinatoldos.com/wp-content/uploads/2021/01/toldo-brazo-invisibles-1024x768.jpg'
}, {
    ID: '2',
    nombre: 'TOLDO CURVO',
    descripción: 'Toldo curvo de lona reforzada',
    stock: 8,
    precio: 15000,
    foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBlYdhWV75yE-gzMd-tJxEFGrAlk4jjuqUvcRSGTC-K4NPYRsntALqNlaQP3-FVKj2_pQ&usqp=CAU'
}, {
    ID: '3',
    nombre: 'TOLDO ROMANO',
    descripción: 'Toldo plano de lona sencilla',
    stock: 4,
    precio: 15000,
    foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFv1IVlQD7pKYVPcEdJLlcJXSdOuGnjiuf3w-Qh8MgcctRba8yiYBg8KONvpImjdZxyuk&usqp=CAU'
}, {
    ID: '4',
    nombre: 'TOLDO VELA',
    descripción: 'Toldo roler de tela blackout',
    stock: 20,
    precio: 15000,
    foto: 'https://www.solarsol.cl/wp-content/uploads/2018/05/Toldo-vela.jpg'
}]


export const gFetch = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(arrayList)
        
    }, 3000);

})