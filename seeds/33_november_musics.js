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
        },
        {
          id: 4,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=734007773/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ethiopiquesseries.bandcamp.com/album/getatchew-mekurya-ethiopian-urban-modern-music-vol-5',
          a_string: 'GETATCHEW MEKURYA - ETHIOPIAN URBAN MODERN MUSIC VOL. 5 by GETATCHEW MEKURYA',
          rule: {
            "monday": [ 28, 9, 20, 22 ],
            "tuesday": [ 27, 8, 19, 21 ],
            "wednesday": [ 1, 12, 23, 25 ],
            "thursday": [ 30, 11, 22, 24 ],
            "saturday": [ 29, 10, 21, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3478976100/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ethiopiquesseries.bandcamp.com/album/mulatu-astatke-ethio-jazz',
          a_string: 'MULATU ASTATKE - ETHIO JAZZ by MULATU ASTATKE',
          rule: {
            "monday": [ 29, 10, 21, 23 ],
            "tuesday": [ 28, 9, 20, 22 ],
            "wednesday": [ 27, 8, 19, 21 ],
            "thursday": [ 1, 12, 23, 25 ],
            "saturday": [ 30, 11, 22, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3946190093/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ethiopiquesseries.bandcamp.com/album/tlahoun-g-ss-ss-ethiopian-urban-modern-music-vol-4',
          a_string: 'TLAHOUN GÉSSÉSSÉ - ETHIOPIAN URBAN MODERN MUSIC VOL. 4 by TLAHOUN GÉSSÉSSÉ',
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
          id: 7,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1576491176/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ethiopiquesseries.bandcamp.com/album/various-artists-ethiopian-modern-instrumentals-hits',
          a_string: 'VARIOUS ARTISTS - ETHIOPIAN MODERN INSTRUMENTALS HITS by VARIOUS ARTISTS',
          rule: {
            "monday": [ 2, 13, 24, 26 ],
            "tuesday": [ 1, 12, 23, 25 ],
            "wednesday": [ 30, 11, 22, 24 ],
            "thursday": [ 29, 10, 21, 23 ],
            "saturday": [ 28, 9, 20, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1900915377/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ethiopiquesseries.bandcamp.com/album/various-artists-ethiopian-soul-and-groove-vol-1',
          a_string: 'VARIOUS ARTISTS - ETHIOPIAN SOUL AND GROOVE VOL.1 by Various Artists',
          rule: {
            "monday": [ 28, 9, 20, 22 ],
            "tuesday": [ 2, 13, 24, 26 ],
            "wednesday": [ 1, 12, 23, 25 ],
            "thursday": [ 30, 11, 22, 24 ],
            "saturday": [ 29, 10, 21, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'ethiopia and pan-african',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4217537268/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ethiopiquesseries.bandcamp.com/album/various-artists-heavenly-ethiopiques',
          a_string: 'VARIOUS ARTISTS - HEAVENLY ETHIOPIQUES by VARIOUS ARTISTS',
          rule: {
            "monday": [ 29, 10, 21, 23 ],
            "tuesday": [ 28, 9, 20, 22 ],
            "wednesday": [ 2, 13, 24, 26 ],
            "thursday": [ 1, 12, 23, 25 ],
            "saturday": [ 30, 11, 22, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('november_musics_id_seq', (SELECT MAX(id) FROM november_musics));");
    });
};
