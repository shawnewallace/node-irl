/**
 * Events
 */

/**
 * get returns an event associated with
 * a particular hashtag.
 *
 * The hashtag argument is a string.
 *
 * Returns an event object.
 */
exports.get = function () {
  return {
    hashtag: 'leampack'
  , location: {
      lat: -52
    , lng: 1
    }
  , created_at: 'some date'
  };
};