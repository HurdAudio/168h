'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('november_musics').del()
    .then(function () {
      // Inserts seed entries
      return knex('november_musics').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=843813690/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ethiopiquesseries.bandcamp.com/album/ethiopiques-box7',
          a_string: 'ETHIOPIQUES BOX7&quot; by VARIOUS ARTIST',
          rule: {
            "monday": [ 30, 11, 22, 24 ],
            "tuesday": [ 29, 10, 21, 23 ],
            "wednesday": [ 28, 9, 20, 22 ],
            "thursday": [ 27, 8, 19, 21 ],
            "saturday": [ 1, 12, 23, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3841544019/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ethiopiquesseries.bandcamp.com/album/ethiopian-hit-parade-volume-1',
          a_string: 'Ethiopian Hit Parade Volume 1 by Various Artists',
          rule: {
            "monday": [ 1, 12, 23, 25 ],
            "tuesday": [ 30, 11, 22, 24 ],
            "wednesday": [ 29, 10, 21, 23 ],
            "thursday": [ 28, 9, 20, 22 ],
            "saturday": [ 27, 8, 19, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2829339155/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ethiopiquesseries.bandcamp.com/album/almeyehu-esh-t-ethiopian-urban-modern-music-vol-2',
          a_string: 'ALMEYEHU ESHÉTÉ - ETHIOPIAN URBAN MODERN MUSIC VOL.2 by ALMEYEHU ESHÉTÉ',
          rule: {
            "monday": [ 27, 8, 19, 21 ],
            "tuesday": [ 1, 12, 23, 25 ],
            "wednesday": [ 30, 11, 22, 24 ],
            "thursday": [ 29, 10, 21, 23 ],
            "saturday": [ 28, 9, 20, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('november_musics_id_seq', (SELECT MAX(id) FROM november_musics));");
    });
};
