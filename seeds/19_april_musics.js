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
            "monday": [4, 12, 24, 29],
            "tuesday": [3, 11, 23, 28],
            "wednesday": [2, 10, 22, 27],
            "thursday": [1, 9, 21, 26],
            "saturday": [5, 13, 25, 30]
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
            "monday": [5, 13, 25, 30],
            "tuesday": [4, 12, 24, 29],
            "wednesday": [3, 11, 23, 28],
            "thursday": [2, 10, 22, 27],
            "saturday": [1, 9, 21, 26]
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
            "monday": [1, 9, 21, 26],
            "tuesday": [5, 13, 25, 30],
            "wednesday": [4, 12, 24, 29],
            "thursday": [3, 11, 23, 28],
            "saturday": [2, 10, 22, 27]
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
            "monday": [2, 10, 22, 27],
            "tuesday": [1, 9, 21, 26],
            "wednesday": [5, 13, 25, 30],
            "thursday": [4, 12, 24, 29],
            "saturday": [3, 11, 23, 28]
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
            "monday": [3, 11, 23, 28],
            "tuesday": [2, 10, 22, 27],
            "wednesday": [1, 9, 21, 26],
            "thursday": [5, 13, 25, 30],
            "saturday": [4, 12, 24, 29]
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
            "monday": [4, 12, 24, 29],
            "tuesday": [3, 11, 23, 28],
            "wednesday": [2, 10, 22, 27],
            "thursday": [1, 9, 21, 26],
            "saturday": [5, 13, 25, 30]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1857682343/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mattpiet.bandcamp.com/album/out-of-step-live-in-amsterdam',
          a_string: 'Out of Step: Live in Amsterdam by Matt Piet/Raoul van der Weide/Frank Rosaly',
          rule: {
            "monday": [ 6, 14, 26, 1],
            "tuesday": [ 5, 13, 25, 30],
            "wednesday": [ 4, 12, 24, 29],
            "thursday": [ 3, 11, 23, 28],
            "saturday": [ 2, 10, 22, 27]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=682776265/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://intlanthem.bandcamp.com/album/ultraviolet',
          a_string: 'Ultraviolet by Nick Mazzarella Trio',
          rule: {
            "monday": [ 2, 10, 22, 27 ],
            "tuesday": [ 6, 14, 26, 1 ],
            "wednesday": [ 5, 13, 25, 30 ],
            "thursday": [ 4, 12, 24, 29 ],
            "saturday": [ 3, 11, 23, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3498965030/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://intlanthem.bandcamp.com/album/bottle-tree',
          a_string: 'Bottle Tree by Bottle Tree',
          rule: {
            "monday": [ 3, 11, 23, 28 ],
            "tuesday": [ 2, 10, 22, 27 ],
            "wednesday": [ 6, 14, 26, 1 ],
            "thursday": [ 5, 13, 25, 30 ],
            "saturday": [ 4, 12, 24, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1028063960/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://johnbutcher.bandcamp.com/album/bell-trove-spools-2',
          a_string: 'Bell Trove Spools by John Butcher',
          rule: {
            "monday": [ 4, 12, 24, 29 ],
            "tuesday": [ 3, 11, 23, 28 ],
            "wednesday": [ 2, 10, 22, 27 ],
            "thursday": [ 6, 14, 26, 1 ],
            "saturday": [ 5, 13, 25, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2362157429/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jasonkaohwang.bandcamp.com/album/jason-kao-hwang-edge-2006',
          a_string: 'Jason Kao Hwang/EDGE (2006) by Jason Kao Hwang/EDGE',
          rule: {
            "monday": [ 5, 13, 25, 30 ],
            "tuesday": [ 4, 12, 24, 29 ],
            "wednesday": [ 3, 11, 23, 28 ],
            "thursday": [ 2, 10, 22, 27 ],
            "saturday": [ 6, 14, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3016926047/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://joemcphee.bandcamp.com/album/journey',
          a_string: 'Journey by Trio X',
          rule: {
            "monday": [ 6, 14, 26, 1 ],
            "tuesday": [ 5, 13, 25, 30 ],
            "wednesday": [ 4, 12, 24, 29 ],
            "thursday": [ 3, 11, 23, 28 ],
            "saturday": [ 2, 10, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=612056518/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jebbishop.bandcamp.com/album/2009-middle-west',
          a_string: '2009 (Middle West) by Jeb Bishop Trio',
          rule: {
            "monday": [ 2, 10, 22, 27 ],
            "tuesday": [ 6, 14, 26, 1 ],
            "wednesday": [ 5, 13, 25, 30 ],
            "thursday": [ 4, 12, 24, 29 ],
            "saturday": [ 3, 11, 23, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4107847956/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://vandermark1.bandcamp.com/album/escalator',
          a_string: 'Escalator by Ken Vandermark, Klaus Kugel, Mark Tokar',
          rule: {
            "monday": [ 4, 12, 24, 29 ],
            "tuesday": [ 3, 11, 23, 28 ],
            "wednesday": [ 7, 15, 27, 2 ],
            "thursday": [ 6, 14, 26, 1 ],
            "saturday": [ 5, 13, 25, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3393583437/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://blackzonemythchant.bandcamp.com/album/mane-thecel-phares',
          a_string: 'Mane Thecel Phares by Black Zone Myth Chant',
          rule: {
            "monday": [ 5, 13, 25, 30 ],
            "tuesday": [ 4, 12, 24, 29 ],
            "wednesday": [ 3, 11, 23, 28 ],
            "thursday": [ 7, 15, 27, 2 ],
            "saturday": [ 6, 14, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1328109578/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chrisspeed.bandcamp.com/album/ruins',
          a_string: 'Ruins by Chris Speed &amp; Zeno De Rossi',
          rule: {
            "monday": [ 6, 14, 26, 1 ],
            "tuesday": [ 5, 13, 25, 30 ],
            "wednesday": [ 4, 12, 24, 29 ],
            "thursday": [ 3, 11, 23, 28 ],
            "saturday": [ 7, 15, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3923641399/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aerophonicrecords.bandcamp.com/album/lattice',
          a_string: 'Lattice by Dave Rempis Solo',
          rule: {
            "monday": [ 7, 15, 27, 2 ],
            "tuesday": [ 6, 14, 26, 1 ],
            "wednesday": [ 5, 13, 25, 30 ],
            "thursday": [ 4, 12, 24, 29 ],
            "saturday": [ 3, 11, 23, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3596587766/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hernanifaustino.bandcamp.com/album/lisbon-connection',
          a_string: 'Lisbon Connection by Lisbon Connection',
          rule: {
            "monday": [ 3, 11, 23, 28 ],
            "tuesday": [ 7, 15, 27, 2 ],
            "wednesday": [ 6, 14, 26, 1 ],
            "thursday": [ 5, 13, 25, 30 ],
            "saturday": [ 4, 12, 24, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=205068890/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/bremen-to-bridgwater',
          a_string: 'Bremen to Bridgwater by Chris McGregor&#39;s Brotherhood Of Breath',
          rule: {
            "monday": [ 4, 12, 24, 29 ],
            "tuesday": [ 3, 11, 23, 28 ],
            "wednesday": [ 7, 15, 27, 2 ],
            "thursday": [ 6, 14, 26, 1 ],
            "saturday": [ 5, 13, 25, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=905997959/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/beating-the-teens-songs-of-steve-lacy',
          a_string: 'Beating The Teens: Songs Of Steve Lacy by Ideal Bread',
          rule: {
            "monday": [ 5, 13, 25, 30 ],
            "tuesday": [ 4, 12, 24, 29 ],
            "wednesday": [ 3, 11, 23, 28 ],
            "thursday": [ 7, 15, 27, 2 ],
            "saturday": [ 6, 14, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3156874954/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/a-night-walking-through-mirrors',
          a_string: 'A Night Walking Through Mirrors by Chicago / London Underground',
          rule: {
            "monday": [ 7, 15, 27, 2 ],
            "tuesday": [ 6, 14, 26, 1 ],
            "wednesday": [ 5, 13, 25, 30 ],
            "thursday": [ 4, 12, 24, 29 ],
            "saturday": [ 8, 16, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3037455370/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ingebrigtflaten.bandcamp.com/album/meet-the-locals',
          a_string: 'Meet The Locals by The Trio',
          rule: {
            "monday": [ 8, 16, 28, 3 ],
            "tuesday": [ 7, 15, 27, 2 ],
            "wednesday": [ 6, 14, 26, 1 ],
            "thursday": [ 5, 13, 25, 30 ],
            "saturday": [ 4, 12, 24, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=321746804/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ingebrigtflaten.bandcamp.com/album/theater-tilters-vol-ii',
          a_string: 'Theater Tilters Vol II by Atomic',
          rule: {
            "monday": [ 4, 12, 24, 29 ],
            "tuesday": [ 8, 16, 28, 3 ],
            "wednesday": [ 7, 15, 27, 2 ],
            "thursday": [ 6, 14, 26, 1 ],
            "saturday": [ 5, 13, 25, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=504011275/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ingebrigtflaten.bandcamp.com/album/its-a-delicate-thing',
          a_string: 'Its A Delicate Thing by IPA',
          rule: {
            "monday": [ 5, 13, 25, 30 ],
            "tuesday": [ 4, 12, 24, 29 ],
            "wednesday": [ 8, 16, 28, 3 ],
            "thursday": [ 7, 15, 27, 2 ],
            "saturday": [ 6, 14, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('april_musics_id_seq', (SELECT MAX(id) FROM april_musics));");
    });
};
