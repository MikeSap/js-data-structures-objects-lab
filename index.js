// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
   const updated_driver = { ...driver }
   updated_driver[key] = value
   return updated_driver
}

function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
    driver[key] = value
    return driver
}


function deleteFromDriverByKey(driver,key){
  const updated_driver = { ...driver }
  delete updated_driver[key]
  return updated_driver
}

function destructivelyDeleteFromDriverByKey(driver,key){
    delete driver[key]
    return driver
}