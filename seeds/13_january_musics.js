'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('january_musics').del()
    .then(function () {
      // Inserts seed entries
      return knex('january_musics').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'american mavericks',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4061994166/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://icebreakermusic.bandcamp.com/album/cranial-pavement',
          a_string: 'Cranial Pavement by Icebreaker',
          rule: {
            "monday": "[ 1, 5, 7, 11]",
            "tuesday": "[3, 7, 9, 13]",
            "wednesday": "[5, 9, 11, 15]",
            "thursday": "[7, 11, 13, 16]",
            "saturday": "[10, 14, 16, 19]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'american mavericks',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3225313691/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://johnlutheradams.bandcamp.com/album/become-ocean',
          a_string: 'Become Ocean by John Luther Adams',
          rule: {
            "monday": "[ 10, 14, 16, 19]",
            "tuesday": "[1, 5, 7, 11]",
            "wednesday": "[3, 7, 9, 13]",
            "thursday": "[5, 9, 11, 15]",
            "saturday": "[7, 14, 16, 19]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'american mavericks',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3309731678/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://michaelgordonmusic.bandcamp.com/album/dystopia',
          a_string: 'Dystopia by Michael Gordon',
          rule: {
            "monday": "[ 7, 14, 16, 19]",
            "tuesday": "[10, 14, 16, 19]",
            "wednesday": "[1, 5, 7, 11]",
            "thursday": "[3, 7, 9, 13]",
            "saturday": "[5, 9, 11, 15]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('january_musics_id_seq', (SELECT MAX(id) FROM january_musics));");
    });
};
