function returnValue(num1,num2){
    return num1*num2
}

function receivesAFunction(cbFxn){
    cbFxn(4,7)
}
receivesAFunction(returnValue)

function returnsANamedFunction(){
    var fn
  return  fn = () => 'before all'
}
returnsANamedFunction()

const returnsAnAnonymousFunction=  ()=>{
    var fn 
   return fn = () =>`deeply equal `
}
returnsAnAnonymousFunction()