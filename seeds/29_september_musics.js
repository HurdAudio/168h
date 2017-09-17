'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('september_musics').del()
    .then(function () {
      // Inserts seed entries
      return knex('september_musics').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'math rock/progressive rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=708679432/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sleepingpeople.bandcamp.com/album/growing',
          a_string: 'Growing by Sleeping People',
          rule: {
            "monday": [ 4, 24, 2, 26 ],
            "tuesday": [ 3, 23, 1, 25 ],
            "wednesday": [ 2, 22, 30, 24 ],
            "thursday": [ 1, 21, 29, 23 ],
            "saturday": [ 5, 25, 3, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'math rock/progressive rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1244104386/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bsmrocks.bandcamp.com/album/infinity-overhead',
          a_string: 'Infinity Overhead by Minus The Bear',
          rule: {
            "monday": [ 5, 25, 3, 27 ],
            "tuesday": [ 4, 24, 2, 26 ],
            "wednesday": [ 3, 23, 1, 25 ],
            "thursday": [ 2, 22, 30, 24 ],
            "saturday": [ 1, 21, 29, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'math rock/progressive rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2502661337/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hella.bandcamp.com/album/tripper',
          a_string: 'Tripper by Hella',
          rule: {
            "monday": [ 1, 21, 29, 23 ],
            "tuesday": [ 5, 25, 3, 27 ],
            "wednesday": [ 4, 24, 2, 26 ],
            "thursday": [ 3, 23, 1, 25 ],
            "saturday": [ 2, 22, 30, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'math rock/progressive rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2048046098/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://artbears.bandcamp.com/album/revisited',
          a_string: 'revisited by Art Bears',
          rule: {
            "monday": [ 2, 22, 30, 24 ],
            "tuesday": [ 1, 21, 29, 23 ],
            "wednesday": [ 5, 25, 3, 27 ],
            "thursday": [ 4, 24, 2, 26 ],
            "saturday": [ 3, 23, 1, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'math rock/progressive rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1761798674/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://beak.bandcamp.com/album/recordings-05-01-09-17-01-09',
          a_string: 'Recordings 05/01/09 &gt; 17/01/09 by BEAK&gt;',
          rule: {
            "monday": [ 3, 23, 1, 25 ],
            "tuesday": [ 2, 22, 30, 24 ],
            "wednesday": [ 1, 21, 29, 23 ],
            "thursday": [ 5, 25, 3, 27 ],
            "saturday": [ 4, 24, 2, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'math rock/progressive rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1702491211/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://silentisland.bandcamp.com/album/re-quator',
          a_string: 'Re-quator by Silent Island',
          rule: {
            "monday": [ 4, 24, 2, 26 ],
            "tuesday": [ 3, 23, 1, 25 ],
            "wednesday": [ 2, 22, 30, 24 ],
            "thursday": [ 1, 21, 29, 23 ],
            "saturday": [ 5, 25, 3, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'math rock/progressive rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3338847054/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://doncaballero.bandcamp.com/album/punkgasm',
          a_string: 'Punkgasm by Don Caballero',
          rule: {
            "monday": [ 6, 26, 4, 28 ],
            "tuesday": [ 5, 25, 3, 27 ],
            "wednesday": [ 4, 24, 2, 26 ],
            "thursday": [ 3, 23, 1, 25 ],
            "saturday": [ 2, 22, 30, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'math rock/progressive rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=627033204/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thistownneedsguns.bandcamp.com/album/this-town-needs-guns',
          a_string: 'This Town Needs Guns by TTNG',
          rule: {
            "monday": [ 2, 22, 30, 24 ],
            "tuesday": [ 6, 26, 4, 28 ],
            "wednesday": [ 5, 25, 3, 27 ],
            "thursday": [ 4, 24, 2, 26 ],
            "saturday": [ 3, 23, 1, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'math rock/progressive rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4141035187/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://teramelos.bandcamp.com/album/trash-generator',
          a_string: 'Trash Generator by Tera Melos',
          rule: {
            "monday": [ 3, 23, 1, 25 ],
            "tuesday": [ 2, 22, 30, 24 ],
            "wednesday": [ 6, 26, 4, 28 ],
            "thursday": [ 5, 25, 3, 27 ],
            "saturday": [ 4, 24, 2, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'math rock/progressive rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2840280732/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://stickmen-moonjune.bandcamp.com/album/roppongi',
          a_string: 'Roppongi by Stick Men featuring Mel Collins',
          rule: {
            "monday": [ 4, 24, 2, 26 ],
            "tuesday": [ 3, 23, 1, 25 ],
            "wednesday": [ 2, 22, 30, 24 ],
            "thursday": [ 6, 26, 4, 28 ],
            "saturday": [ 5, 25, 3, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'math rock/progressive rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=297370005/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://vattnet.bandcamp.com/album/vattnet',
          a_string: 'Vattnet by Vattnet',
          rule: {
            "monday": [ 5, 25, 3, 27 ],
            "tuesday": [ 4, 24, 2, 26 ],
            "wednesday": [ 3, 23, 1, 25 ],
            "thursday": [ 2, 22, 30, 24 ],
            "saturday": [ 6, 26, 4, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'math rock/progressive rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=911440374/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://electricorange.bandcamp.com/album/eoxxv',
          a_string: 'EOXXV by electric orange',
          rule: {
            "monday": [ 6, 26, 4, 28 ],
            "tuesday": [ 5, 25, 3, 27 ],
            "wednesday": [ 4, 24, 2, 26 ],
            "thursday": [ 3, 23, 1, 25 ],
            "saturday": [ 2, 22, 30, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('september_musics_id_seq', (SELECT MAX(id) FROM september_musics));");
    });
};
