// const ctx = require.context('./', true, /.*.json$/)
// const FeatureCollection = ctx.keys().reduce((accumulator, currentValue) => {
//     const key = currentValue.split('.')[1].split('/')[1]
//     const josnData = ctx(currentValue)
//     if (josnData.type === 'FeatureCollection') {
//         accumulator[key] = ctx(currentValue)
//     }
//     return accumulator
// }, {})

export const world = require('./world.json')