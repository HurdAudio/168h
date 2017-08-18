'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('march_musics').del()
    .then(function () {
      // Inserts seed entries
      return knex('march_musics').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'women\'s history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4119708928/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newamsterdamrecords.bandcamp.com/album/krai',
          a_string: 'Край (Krai) by Olga Bell',
          rule: {
            "monday": "[4, 10, 16, 24]",
            "tuesday": "[3, 9, 15, 23]",
            "wednesday": "[2, 8, 14, 22]",
            "thursday": "[1, 7, 13, 21]",
            "saturday": "[5, 11, 17, 25]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'women\'s history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=51640814/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://missymazzoli.bandcamp.com/album/vespers-for-a-new-dark-age',
          a_string: 'Vespers for a New Dark Age by Missy Mazzoli, Victoire, Glenn Kotche, Lorna Dune',
          rule: {
            "monday": "[5, 11, 17, 25]",
            "tuesday": "[4, 10, 16, 24]",
            "wednesday": "[3, 9, 15, 23]",
            "thursday": "[2, 8, 14, 22]",
            "saturday": "[1, 7, 13, 21]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'women\'s history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3714052139/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jodyredhage.bandcamp.com/album/of-minutiae-and-memory',
          a_string: 'of minutiae and memory by Jody Redhage',
          rule: {
            "monday": "[1, 7, 13, 21]",
            "tuesday": "[5, 11, 17, 25]",
            "wednesday": "[4, 10, 16, 24]",
            "thursday": "[3, 9, 15, 23]",
            "saturday": "[2, 8, 14, 22]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('march_musics_id_seq', (SELECT MAX(id) FROM march_musics));");
    });
};
