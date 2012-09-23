/**
 * Events
 */

/*
 
The code sketch:

// get an event by hashtag
events.get('leampack');

// an event
{
  hashtag: 'leampack'
, location: {
    lat: -52
  , lng: 1
  }
, created_at: 'some date'
  // perhaps...
, ends_at: 'other date'
, author: {
    // user data
  }
}

// new event
events.add({
  // event data as above
});

*/

var should = require('should')
  , events = require('../entity/events');

// events
describe('events', function () {

  it('should exist', function () {
    should.exist(events);
  });

  // events.get
  describe('#get', function () {
    
    // events.get('leampack')
    it('should return leampack', function () {

      var event = events.get('leampack');

      // Does it actually return data?
      events.should.be.a('object');

      // Is it equivalent to our code sketch?
      event.should
        .have.property('hashtag');
      event.should
        .have.property('location');
      event.should
        .have.property('created_at');

      // Check the data
      event.hashtag.should
        .equal('leampack');
      event.location.should
        .have.property('lat');
      event.location.should
        .have.property('lng');
      event.location.lat.should
        .equal(-52);
      event.location.lng.should
        .equal(1);
      event.created_at
        .should.equal('some date');

    });

  });

});