/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = app => {
  
  const convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get((req, res,next) => 
         {
      const input = req.query.input;
      if (!input) return res.send('')
      const initNum = convertHandler.getNum(input);
      const initUnit = convertHandler.getUnit(input);
      
      if (!initNum && !initUnit) res.json({string: 'Invalid number and unit'})
      else if (!initNum) res.json({string:'Invalid number'})
      else if (!initUnit) res.json({string:'Invalid unit'})
      else {
        
        const returnNum = convertHandler.convert(initNum, initUnit);
        const returnUnit = convertHandler.getReturnUnit(initUnit);      
        const toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

        res.json({initNum, initUnit, returnNum, returnUnit, string: toString})
      }
    
      
    });
    
};
