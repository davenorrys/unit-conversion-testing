/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = input.replace(/[A-z]+$/,'')
    try {
      const match = input.match(/\//g)
      if (Array.isArray(match))
        if (match.length >1) return false
      eval(result) 
    }
    catch (err){
      return  false
    }
    return result
  };
  
  this.getUnit = function(input) {
    const units = ['mi', 'km','gal', 'l','lbs','kg']
    let result
    try{
      result = input.match(/[A-z]+$/i)[0]
    }
    catch(e){
      return false
    }    
    return units.includes(result.toLowerCase())? result : false
  };
  
  this.getReturnUnit = function(initUnit) {
    const units = [['mi', 'km'], ['gal', 'l'], ['lbs', 'kg']]
    const unit  = units.filter(i=>i.includes(initUnit.toLowerCase()))[0]
    return unit.indexOf(initUnit)? unit[0]:unit[1];
  };

  this.spellOutUnit = function(unit) {
    const units = {
      mi: 'miles',
      km: 'kilometers',
      gal: 'galons',
      l: 'litres',
      lbs: 'pounds',
      kg: 'kilograms'
    }
    
    return units[unit];
  };
  
  this.convert = function(initNum, initUnit) {
    const formulas = {
      gal : 3.78541,
      lbs : 0.453592,
      mi  : 1.60934
    }
    let result = eval(initNum);
    
    switch(initUnit.toLowerCase()){
      case 'gal':
      case 'lbs':
      case 'mi':
        result *= formulas[initUnit.toLowerCase()]
        break;
      case 'l':
        result /= formulas.gal
        break;
      case 'kg':
        result /= formulas.lbs
        break;
      case 'km':
        result /= formulas.mi
        break;
        
        
    }    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {    
    
    return `${`${initNum} ${this.spellOutUnit(initUnit)}`} converts to ${`${returnNum} ${this.spellOutUnit(returnUnit)}`}`;
  };
  
}

module.exports = ConvertHandler;
