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
    lat: -52,
    lng: 1
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

var should = require('should');

describe('events', function () {

  it('should exist', function () {
    should.exist(events);
  });

});
