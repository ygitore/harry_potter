export const firePottery = (pottery, temp) => {
    pottery.fired = true
    if(temp > 2200){
        pottery.cracked = true
    }else if(temp <= 2200){
        pottery.cracked = false
    }
    return pottery
}