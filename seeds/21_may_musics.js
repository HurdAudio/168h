'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('may_musics').del()
    .then(function () {
      // Inserts seed entries
      return knex('may_musics').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2926666832/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newfocusrecordings.bandcamp.com/album/hushers',
          a_string: 'Hushers by Quince Contemporary Vocal Ensemble',
          rule: {
            "monday": "[ 4, 10, 17, 30 ]",
            "tuesday": "[ 3, 9, 16, 29 ]",
            "wednesday": "[ 2, 8, 15, 28 ]",
            "thursday": "[ 1, 7, 14, 27 ]",
            "saturday": "[ 5, 11, 18, 31 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4179012292/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://karlrecords.bandcamp.com/album/la-l-gende-deer',
          a_string: 'La Légende d&#39;Eer by IANNIS XENAKIS',
          rule: {
            "monday": "[ 5, 11, 18, 31 ]",
            "tuesday": "[ 4, 10, 17, 30 ]",
            "wednesday": "[ 3, 9, 16, 29 ]",
            "thursday": "[ 2, 8, 15, 28 ]",
            "saturday": "[ 1, 7, 14, 27 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=45299544/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://karlrecords.bandcamp.com/album/complete-song-books',
          a_string: 'Complete Song Books by JOHN CAGE, REINHOLD FRIEDL',
          rule: {
            "monday": "[ 1, 7, 14, 27 ]",
            "tuesday": "[ 5, 11, 18, 31 ]",
            "wednesday": "[ 4, 10, 17, 30 ]",
            "thursday": "[ 3, 9, 16, 29 ]",
            "saturday": "[ 2, 8, 15, 28 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2824493515/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zeitkratzer.bandcamp.com/album/karlheinz-stockhausen-old-school',
          a_string: 'Karlheinz Stockhausen [old school] by zeitkratzer',
          rule: {
            "monday": "[ 2, 8, 15, 28 ]",
            "tuesday": "[ 1, 7, 14, 27 ]",
            "wednesday": "[ 5, 11, 18, 31 ]",
            "thursday": "[ 4, 10, 17, 30 ]",
            "saturday": "[ 3, 9, 16, 29 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1635773245/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://idmtheftable.bandcamp.com/album/leaving-the-keyboard-that-plays-itself-down-by-the-river-between-2-30-and-3-30-am-august-3rd-2017',
          a_string: 'Leaving the keyboard that plays itself down by the river between 2:30 and 3:30 AM August 3rd 2017 by id m theft able',
          rule: {
            "monday": "[ 3, 9, 16, 29 ]",
            "tuesday": "[ 2, 8, 15, 28 ]",
            "wednesday": "[ 1, 7, 14, 27 ]",
            "thursday": "[ 5, 11, 18, 31 ]",
            "saturday": "[ 4, 10, 17, 30 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1468997469/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://babel-label.bandcamp.com/album/karlheinz-stockhausen-tierkreis',
          a_string: 'KARLHEINZ STOCKHAUSEN TIERKREIS by BRUNO HEINEN SEXTET',
          rule: {
            "monday": "[ 4, 10, 17, 30 ]",
            "tuesday": "[ 3, 9, 16, 29 ]",
            "wednesday": "[ 2, 8, 15, 28 ]",
            "thursday": "[ 1, 7, 14, 27 ]",
            "saturday": "[ 5, 11, 18, 31 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('may_musics_id_seq', (SELECT MAX(id) FROM may_musics));");
    });
};
