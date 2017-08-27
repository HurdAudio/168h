'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('april_musics').del()
    .then(function () {
      // Inserts seed entries
      return knex('april_musics').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=467347803/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://vandermark1.bandcamp.com/album/momentum-1-stone',
          a_string: 'Momentum 1 : Stone by Ken Vandermark',
          rule: {
            "monday": "[4, 12, 24, 29]",
            "tuesday": "[3, 11, 23, 28]",
            "wednesday": "[2, 10, 22, 27]",
            "thursday": "[1, 9, 21, 26]",
            "saturday": "[5, 13, 25, 30]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2777684326/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sonorus-records.bandcamp.com/album/autotelic',
          a_string: 'Autotelic by Tim Daisy',
          rule: {
            "monday": "[5, 13, 25, 30]",
            "tuesday": "[4, 12, 24, 29]",
            "wednesday": "[3, 11, 23, 28]",
            "thursday": "[2, 10, 22, 27]",
            "saturday": "[1, 9, 21, 26]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=909149659/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://joemcphee.bandcamp.com/album/the-brass-city',
          a_string: 'The Brass City by Joe McPhee &amp; Jeb Bishop',
          rule: {
            "monday": "[1, 9, 21, 26]",
            "tuesday": "[5, 13, 25, 30]",
            "wednesday": "[4, 12, 24, 29]",
            "thursday": "[3, 11, 23, 28]",
            "saturday": "[2, 10, 22, 27]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3580399100/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aerophonicrecords.bandcamp.com/album/hit-the-ground-running-all-proceeds-to-benefit-refugee-one',
          a_string: 'Hit The Ground Running                                    (all proceeds to benefit Refugee One) by Rempis/Piet/Daisy',
          rule: {
            "monday": "[2, 10, 22, 27]",
            "tuesday": "[1, 9, 21, 26]",
            "wednesday": "[5, 13, 25, 30]",
            "thursday": "[4, 12, 24, 29]",
            "saturday": "[3, 11, 23, 28]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1243137714/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://joemcphee.bandcamp.com/album/the-dream-book',
          a_string: 'The Dream Book by Joe McPhee &amp; Dominic Duval',
          rule: {
            "monday": "[3, 11, 23, 28]",
            "tuesday": "[2, 10, 22, 27]",
            "wednesday": "[1, 9, 21, 26]",
            "thursday": "[5, 13, 25, 30]",
            "saturday": "[4, 12, 24, 29]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3668515304/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mattpiet.bandcamp.com/album/live-at-constellation',
          a_string: 'Live At Constellation by Matt Piet Trio',
          rule: {
            "monday": "[4, 12, 24, 29]",
            "tuesday": "[3, 11, 23, 28]",
            "wednesday": "[2, 10, 22, 27]",
            "thursday": "[1, 9, 21, 26]",
            "saturday": "[5, 13, 25, 30]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('april_musics_id_seq', (SELECT MAX(id) FROM april_musics));");
    });
};
