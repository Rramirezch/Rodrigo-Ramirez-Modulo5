

const esperarSegundos = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (console.log('Ha transcurrido:',time / 1000, 'segundos'))
        }, time)
    })
}

export default esperarSegundos;