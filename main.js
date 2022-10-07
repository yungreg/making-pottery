const buyClay = () => {
    const newClayObject = {}
    return newClayObject
}
let boughtClay = buyClay()

const makePottery = (newClayObject) => {
    newClayObject.shape = "bowl"
    return newClayObject
}



const bisqueFire = (newClayObject) => {
    newClayObject.readyForGlazing = true
    return newClayObject
}


const glazePottery = (newClayObject) => {
        if (newClayObject.readyForGlazing === true ){
        newClayObject.glazing ='Midnight Blue'
        return newClayObject
    } else {
        console.log('Make sure you bisque fire the pottery before you glaze it.') 
    }
}


const finalFiring = (newClayObject,kilnTemperature) => {
    if(kilnTemperature > 1200) {
        newClayObject.cracked = true
    } else { 
        newClayObject.cracked = false
    }
    return newClayObject
}


let shapedPottery = makePottery(boughtClay)
let bisquedBowl = bisqueFire(shapedPottery)
let glazedBowlforFiring = glazePottery(bisquedBowl) 
const firedPottery = finalFiring(glazedBowlforFiring, 1200)

console.log(firedPottery)

