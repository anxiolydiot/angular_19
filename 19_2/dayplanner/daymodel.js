// 'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
Day is an object in a collection

    Day belongs to -> Schedule

*/

var schedule = new Schema({
  plan: {
    type: String,
    unique: false,
    specs: {type: Schema.Types.objectId, ref:'daySchema'}
  }
});

var daySchema = new Schema({
    dayDate: {
      type: String,
      unique: false
    }, /**/
    hours: {
      type: Number,
      unique: false
    }
});


var Day = mongoose.model('Day', daySchema);
module.exports = Day;