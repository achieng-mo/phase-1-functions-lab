//STEPS
//1. Create a function distanceFromHqInBlocks
//2. Give created funcyion an argument (pickUpLocation)
//3. Use return value from distanceFromHqInBlocks within the second function distanceFromHqInBlocks
//4. Maintain a constant of feet along Manhattan block
//5. Create a function called distance travelled in feet
//6. Function above to take arguments of start and destination
//7. Output number of feet travelled

//First function: Create function with blockNumber as parameter. Calculate the number of blocks from pickup location on 50th street to hq on 42nd street
//Call function to output no of blocks

function distanceFromHqInBlocks(blockNumber) {
    if(blockNumber > 42){
        return blockNumber - 42
    }
    else{
        return 42 - blockNumber
    }
    
}

let numberOfBlocks = distanceFromHqInBlocks(34)
console.log('Number of blocks is ', numberOfBlocks)

//Second Function

function distanceFromHqInFeet(blockNumber) {
    let feet = distanceFromHqInBlocks(50) 
    return feet * 264
    
}

let distanceInFeet = distanceFromHqInFeet(43)
console.log('Distance in feet is', distanceInFeet)

//Third Function

function distanceTravelledInFeet(start, destination) {
    if(start < destination){
        return (destination - start) * 264
    }
    else{
        return (destination - start) * 264
    }   
  
}

let feetTravelled = distanceTravelledInFeet(43, 48)
console.log('Distance travelled in feet is', feetTravelled)

//Fourth Function

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)

    if(distance <= 400){
        return 0
    }
    else if(distance > 400 && distance <= 2000){
        return .02 * (distance - 400)
    }
    else if(distance > 2000 && distance <= 2500){
        return 25
    }
    else if(distance > 2500){
        return 'cannot travel that far'
    }
        
    }

let farePrice = calculatesFarePrice(50, 58)
console.log('Your fare is:', farePrice) 