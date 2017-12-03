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
        },
        {
          id: 25,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3223398011/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/somnambulist',
          a_string: 'Somnambulist by The Kandinsky Effect',
          rule: {
            "monday": [ 6, 14, 26, 1 ],
            "tuesday": [ 5, 13, 25, 30 ],
            "wednesday": [ 4, 12, 24, 29 ],
            "thursday": [ 8, 16, 28, 3 ],
            "saturday": [ 7, 15, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4106340234/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sketchbookquartett.bandcamp.com/album/ottos-mops',
          a_string: 'Ottos Mops by Sketchbook Quartett',
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
          id: 27,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=852414889/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://leapoffaith1.bandcamp.com/album/zenos-paradox',
          a_string: 'Zeno&#39;s Paradox by Leap Of Faith',
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
          id: 28,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1026454116/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://timdaisyrelayrecords.bandcamp.com/album/darren-johnston-tim-daisy-crossing-belmont-relay-digital-006',
          a_string: 'Darren Johnston &amp; Tim Daisy //  Crossing Belmont (relay digital 006) by Darren Johnston, Tim Daisy',
          rule: {
            "monday": [ 5, 13, 25, 30 ],
            "tuesday": [ 9, 17, 29, 4 ],
            "wednesday": [ 8, 16, 28, 3 ],
            "thursday": [ 7, 15, 27, 2 ],
            "saturday": [ 6, 14, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1146678931/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jasonstein.bandcamp.com/album/lucille',
          a_string: 'Lucille! by Jason Stein Quartet',
          rule: {
            "monday": [ 6, 14, 26, 1 ],
            "tuesday": [ 5, 13, 25, 30 ],
            "wednesday": [ 9, 17, 29, 4 ],
            "thursday": [ 8, 16, 28, 3 ],
            "saturday": [ 7, 15, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=21123771/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://intlanthem.bandcamp.com/album/fly-or-die',
          a_string: 'Fly or Die by jaimie branch',
          rule: {
            "monday": [ 7, 15, 27, 2 ],
            "tuesday": [ 6, 14, 26, 1 ],
            "wednesday": [ 5, 13, 25, 30 ],
            "thursday": [ 9, 17, 29, 4 ],
            "saturday": [ 8, 16, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3136913313/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://peterbrtzmann.bandcamp.com/album/chicago-tentet-1-3-nights-in-oslo',
          a_string: 'Chicago Tentet +1: 3 Nights in Oslo by Peter Brötzmann',
          rule: {
            "monday": [ 8, 16, 28, 3 ],
            "tuesday": [ 7, 15, 27, 2 ],
            "wednesday": [ 6, 14, 26, 1 ],
            "thursday": [ 5, 13, 25, 30 ],
            "saturday": [ 9, 17, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2047090175/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://briggankrauss.bandcamp.com/album/the-art-of-the-saxophone-live-at-the-saalfelden-jazz-festival-2017',
          a_string: 'The Art of the Saxophone: Live at the Saalfelden Jazz Festival 2017 by Krauss Briggan',
          rule: {
            "monday": [ 9, 17, 29, 4 ],
            "tuesday": [ 8, 16, 28, 3 ],
            "wednesday": [ 7, 15, 27, 2 ],
            "thursday": [ 6, 14, 26, 1 ],
            "saturday": [ 5, 13, 25, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3853683360/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://vandermark1.bandcamp.com/album/rara-avis-2',
          a_string: 'Rara Avis by Ken Vandermark',
          rule: {
            "monday": [ 5, 13, 25, 30 ],
            "tuesday": [ 9, 17, 29, 4 ],
            "wednesday": [ 8, 16, 28, 3 ],
            "thursday": [ 7, 15, 27, 2 ],
            "saturday": [ 6, 14, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4002071568/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://marswilliams.bandcamp.com/album/unusual-words',
          a_string: 'Unusual Words by BONESHAKER',
          rule: {
            "monday": [ 6, 14, 26, 1 ],
            "tuesday": [ 5, 13, 25, 30 ],
            "wednesday": [ 9, 17, 29, 4 ],
            "thursday": [ 8, 16, 28, 3 ],
            "saturday": [ 7, 15, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1307492242/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://intlanthem.bandcamp.com/album/the-new-breed',
          a_string: 'The New Breed by Jeff Parker',
          rule: {
            "monday": [ 8, 16, 28, 3 ],
            "tuesday": [ 7, 15, 27, 2 ],
            "wednesday": [ 6, 14, 26, 1 ],
            "thursday": [ 10, 18, 30, 5 ],
            "saturday": [ 9, 17, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3496899550/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thebridgesessions.bandcamp.com/album/twins',
          a_string: 'Twins by Twins',
          rule: {
            "monday": [ 9, 17, 29, 4 ],
            "tuesday": [ 8, 16, 28, 3 ],
            "wednesday": [ 7, 15, 27, 2 ],
            "thursday": [ 6, 14, 26, 1 ],
            "saturday": [ 10, 18, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2391481248/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rodrigopinheiro.bandcamp.com/album/summer-skyshift',
          a_string: 'Summer Skyshift by RED trio, John Butcher',
          rule: {
            "monday": [ 10, 18, 30, 5 ],
            "tuesday": [ 9, 17, 29, 4 ],
            "wednesday": [ 8, 16, 28, 3 ],
            "thursday": [ 7, 15, 27, 2 ],
            "saturday": [ 6, 14, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1927433318/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rodrigopinheiro.bandcamp.com/album/clocks-clouds',
          a_string: 'Clocks &amp; Clouds by Clocks &amp; Clouds',
          rule: {
            "monday": [ 6, 14, 26, 1 ],
            "tuesday": [ 10, 18, 30, 5 ],
            "wednesday": [ 9, 17, 29, 4 ],
            "thursday": [ 8, 16, 28, 3 ],
            "saturday": [ 7, 15, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2107741802/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thenecksau.bandcamp.com/album/vertigo',
          a_string: 'Vertigo by The Necks',
          rule: {
            "monday": [ 7, 15, 27, 2 ],
            "tuesday": [ 6, 14, 26, 1 ],
            "wednesday": [ 10, 18, 30, 5 ],
            "thursday": [ 9, 17, 29, 4 ],
            "saturday": [ 8, 16, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=682733157/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://taylorhobynum.bandcamp.com/album/enter-the-plustet',
          a_string: 'Enter the PlusTet by Taylor Ho Bynum',
          rule: {
            "monday": [ 8, 16, 28, 3 ],
            "tuesday": [ 7, 15, 27, 2 ],
            "wednesday": [ 6, 14, 26, 1 ],
            "thursday": [ 10, 18, 30, 5 ],
            "saturday": [ 9, 17, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=2637307575/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://firehouse12records.com/album/ubatuba',
          a_string: 'Ubatuba by Ingrid Laubrock',
          rule: {
            "monday": [ 9, 17, 29, 4 ],
            "tuesday": [ 8, 16, 28, 3 ],
            "wednesday": [ 7, 15, 27, 2 ],
            "thursday": [ 6, 14, 26, 1 ],
            "saturday": [ 10, 18, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3505407304/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aerophonicrecords.bandcamp.com/album/green-knights',
          a_string: 'Green Knights by The Engines',
          rule: {
            "monday": [ 10, 18, 30, 5 ],
            "tuesday": [ 9, 17, 29, 4 ],
            "wednesday": [ 8, 16, 28, 3 ],
            "thursday": [ 7, 15, 27, 2 ],
            "saturday": [ 6, 14, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=514392964/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://natewooley.bandcamp.com/album/argonautica',
          a_string: 'Argonautica by Nate Wooley',
          rule: {
            "monday": [ 6, 14, 26, 1 ],
            "tuesday": [ 10, 18, 30, 5 ],
            "wednesday": [ 9, 17, 29, 4 ],
            "thursday": [ 8, 16, 28, 3 ],
            "saturday": [ 7, 15, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2827536636/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://peterevansmusic.bandcamp.com/album/genesis',
          a_string: 'Genesis by Peter Evans Quintet',
          rule: {
            "monday": [ 7, 15, 27, 2 ],
            "tuesday": [ 6, 14, 26, 1 ],
            "wednesday": [ 10, 18, 30, 5 ],
            "thursday": [ 9, 17, 29, 4 ],
            "saturday": [ 8, 16, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1107896037/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rossmchenry.bandcamp.com/album/child-of-somebody',
          a_string: 'Child Of Somebody by Ross McHenry',
          rule: {
            "monday": [ 8, 16, 28, 3 ],
            "tuesday": [ 7, 15, 27, 2 ],
            "wednesday": [ 6, 14, 26, 1 ],
            "thursday": [ 10, 18, 30, 5 ],
            "saturday": [ 9, 17, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1498188536/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aramshelton.bandcamp.com/album/octet',
          a_string: 'OCTET by Aram Shelton',
          rule: {
            "monday": [ 9, 17, 29, 4 ],
            "tuesday": [ 8, 16, 28, 3 ],
            "wednesday": [ 7, 15, 27, 2 ],
            "thursday": [ 6, 14, 26, 1 ],
            "saturday": [ 10, 18, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2521744569/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aramshelton.bandcamp.com/album/bygning-g',
          a_string: 'Bygning G by Aram Shelton &amp; Håkon Berre',
          rule: {
            "monday": [ 10, 18, 30, 5 ],
            "tuesday": [ 9, 17, 29, 4 ],
            "wednesday": [ 8, 16, 28, 3 ],
            "thursday": [ 7, 15, 27, 2 ],
            "saturday": [ 6, 14, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3183556239/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aramshelton.bandcamp.com/album/sticks-and-reed',
          a_string: 'Sticks and Reed by Aram Shelton &amp; Frank Rosaly',
          rule: {
            "monday": [ 6, 14, 26, 1 ],
            "tuesday": [ 10, 18, 30, 5 ],
            "wednesday": [ 9, 17, 29, 4 ],
            "thursday": [ 8, 16, 28, 3 ],
            "saturday": [ 7, 15, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3246836406/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ingebrigtflaten.bandcamp.com/album/moments-form',
          a_string: 'Moments Form by Williams/Håker Flaten/Daisy',
          rule: {
            "monday": [ 8, 16, 28, 3 ],
            "tuesday": [ 7, 15, 27, 2 ],
            "wednesday": [ 11, 19, 1, 6 ],
            "thursday": [ 10, 18, 30, 5 ],
            "saturday": [ 9, 17, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1005341702/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/the-songs-of-albert-ayler',
          a_string: 'The Songs of Albert Ayler by Healing Force',
          rule: {
            "monday": [ 9, 17, 29, 4 ],
            "tuesday": [ 8, 16, 28, 3 ],
            "wednesday": [ 7, 15, 27, 2 ],
            "thursday": [ 11, 19, 1, 6 ],
            "saturday": [ 10, 18, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2950135151/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://paraphrasetimberne.bandcamp.com/album/pre-emptive-denial',
          a_string: 'Pre-Emptive Denial by Paraphrase &amp; Tim Berne',
          rule: {
            "monday": [ 10, 18, 30, 5 ],
            "tuesday": [ 9, 17, 29, 4 ],
            "wednesday": [ 8, 16, 28, 3 ],
            "thursday": [ 7, 15, 27, 2 ],
            "saturday": [ 11, 19, 1, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2107185416/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://driffrecords.bandcamp.com/album/1000-words',
          a_string: '1000 Words by Jeb Bishop &amp; Jorrit Dijkstra',
          rule: {
            "monday": [ 11, 19, 1, 6 ],
            "tuesday": [ 10, 18, 30, 5 ],
            "wednesday": [ 9, 17, 29, 4 ],
            "thursday": [ 8, 16, 28, 3 ],
            "saturday": [ 7, 15, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2607175037/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://driffrecords.bandcamp.com/album/circuitous',
          a_string: 'Circuitous by Pandelis Karayorgis Quintet',
          rule: {
            "monday": [ 7, 15, 27, 2 ],
            "tuesday": [ 11, 19, 1, 6 ],
            "wednesday": [ 10, 18, 30, 5 ],
            "thursday": [ 9, 17, 29, 4 ],
            "saturday": [ 8, 16, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1098182953/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://driffrecords.bandcamp.com/album/bathysphere',
          a_string: 'Bathysphere by Bathysphere',
          rule: {
            "monday": [ 8, 16, 28, 3 ],
            "tuesday": [ 7, 15, 27, 2 ],
            "wednesday": [ 11, 19, 1, 6 ],
            "thursday": [ 10, 18, 30, 5 ],
            "saturday": [ 9, 17, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3667949691/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mikereed1.bandcamp.com/album/flesh-bone',
          a_string: 'Flesh &amp; Bone by Mike Reed',
          rule: {
            "monday": [ 9, 17, 29, 4 ],
            "tuesday": [ 8, 16, 28, 3 ],
            "wednesday": [ 7, 15, 27, 2 ],
            "thursday": [ 11, 19, 1, 6 ],
            "saturday": [ 10, 18, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=710407335/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/convallaria',
          a_string: 'Convallaria by Thumbscrew: Mary Halvorson, Michael Formanek, Tomas Fujiwara',
          rule: {
            "monday": [ 11, 19, 1, 6 ],
            "tuesday": [ 10, 18, 30, 5 ],
            "wednesday": [ 9, 17, 29, 4 ],
            "thursday": [ 8, 16, 28, 3 ],
            "saturday": [ 12, 20, 2, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=536503710/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://balancepointacoustics.bandcamp.com/album/bpa-017-the-catastrophe-of-minimalism',
          a_string: 'BPA 017 The Catastrophe of Minimalism by John Butcher / Damon Smith / Weasel Walter',
          rule: {
            "monday": [ 12, 20, 2, 7 ],
            "tuesday": [ 11, 19, 1, 6 ],
            "wednesday": [ 10, 18, 30, 5 ],
            "thursday": [ 9, 17, 29, 4 ],
            "saturday": [ 8, 16, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3873763248/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://johnbutcher1.bandcamp.com/album/nigemizu',
          a_string: 'Nigemizu by John Butcher',
          rule: {
            "monday": [ 8, 16, 28, 3 ],
            "tuesday": [ 12, 20, 2, 7 ],
            "wednesday": [ 11, 19, 1, 6 ],
            "thursday": [ 10, 18, 30, 5 ],
            "saturday": [ 9, 17, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2991576717/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://danblacksberg.bandcamp.com/album/radiant-others',
          a_string: 'Radiant Others by Dan Blacksberg',
          rule: {
            "monday": [ 9, 17, 29, 4 ],
            "tuesday": [ 8, 16, 28, 3 ],
            "wednesday": [ 12, 20, 2, 7 ],
            "thursday": [ 11, 19, 1, 6 ],
            "saturday": [ 10, 18, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=434562700/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://grahamcostello.bandcamp.com/album/s-t-r-a-t-a',
          a_string: 'S T R A T A by Graham Costello&#39;s STRATA',
          rule: {
            "monday": [ 10, 18, 30, 5 ],
            "tuesday": [ 9, 17, 29, 4 ],
            "wednesday": [ 8, 16, 28, 3 ],
            "thursday": [ 12, 20, 2, 7 ],
            "saturday": [ 11, 19, 1, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=695837592/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aumfidelity.bandcamp.com/album/black-cherry-piercing-the-veil-in-dub',
          a_string: 'Black Cherry (Piercing The Veil in Dub) by Organic Grooves / William Parker &amp; Hamid Drake',
          rule: {
            "monday": [ 11, 19, 1, 6 ],
            "tuesday": [ 10, 18, 30, 5 ],
            "wednesday": [ 9, 17, 29, 4 ],
            "thursday": [ 8, 16, 28, 3 ],
            "saturday": [ 12, 20, 2, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=639555287/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://p-mm.bandcamp.com/album/pmm-sun-city-grils-pelican92',
          a_string: 'PMM# Sun City Grils - Pelican&#39;92 by Sun City Girls',
          rule: {
            "monday": [ 12, 20, 2, 7 ],
            "tuesday": [ 11, 19, 1, 6 ],
            "wednesday": [ 10, 18, 30, 5 ],
            "thursday": [ 9, 17, 29, 4 ],
            "saturday": [ 8, 16, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2374411763/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nakatanikawabatachou.bandcamp.com/album/perigee',
          a_string: 'Perigee by Nakatani / Kawabata / Chou',
          rule: {
            "monday": [ 9, 17, 29, 4 ],
            "tuesday": [ 13, 21, 3, 8 ],
            "wednesday": [ 12, 20, 2, 7 ],
            "thursday": [ 11, 17, 29, 4 ],
            "saturday": [ 10, 18, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2169293333/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://colinwebster.bandcamp.com/album/most-of-what-follows-is-true',
          a_string: 'Most Of What Follows Is True by Graham Dunning / Colin Webster',
          rule: {
            "monday": [ 10, 18, 30, 5 ],
            "tuesday": [ 9, 17, 29, 4 ],
            "wednesday": [ 13, 21, 3, 8 ],
            "thursday": [ 12, 20, 2, 7 ],
            "saturday": [ 11, 17, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3637057682/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://porticoquartet.bandcamp.com/album/art-in-the-age-of-automation',
          a_string: 'Art in the Age of Automation by Portico Quartet',
          rule: {
            "monday": [ 11, 17, 29, 4 ],
            "tuesday": [ 10, 18, 30, 5 ],
            "wednesday": [ 9, 17, 29, 4 ],
            "thursday": [ 13, 21, 3, 8 ],
            "saturday": [ 12, 20, 2, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3638337658/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://matthewhalsall.bandcamp.com/album/into-forever',
          a_string: 'Into Forever by Matthew Halsall &amp; The Gondwana Orchestra',
          rule: {
            "monday": [ 12, 20, 2, 7 ],
            "tuesday": [ 11, 17, 29, 4 ],
            "wednesday": [ 10, 18, 30, 5 ],
            "thursday": [ 9, 17, 29, 4 ],
            "saturday": [ 13, 21, 3, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=1000438910/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://music.microkingdom.com/album/return-to-the-valley-of-the-jeep-beats',
          a_string: 'Return to the Valley of the Jeep Beats by Microkingdom',
          rule: {
            "monday": [ 13, 21, 3, 8 ],
            "tuesday": [ 12, 20, 2, 7 ],
            "wednesday": [ 11, 17, 29, 4 ],
            "thursday": [ 10, 18, 30, 5 ],
            "saturday": [ 9, 17, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1928719438/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pnlrecords.bandcamp.com/album/fluku',
          a_string: 'Fluku by Large Unit',
          rule: {
            "monday": [ 9, 17, 29, 4 ],
            "tuesday": [ 13, 21, 3, 8 ],
            "wednesday": [ 12, 20, 2, 7 ],
            "thursday": [ 11, 17, 29, 4 ],
            "saturday": [ 10, 18, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=893355010/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aerophonicrecords.bandcamp.com/album/wistfully',
          a_string: 'Wistfully by Rempis/Harnik/Zerang',
          rule: {
            "monday": [ 10, 18, 30, 5 ],
            "tuesday": [ 9, 17, 29, 4 ],
            "wednesday": [ 13, 21, 3, 8 ],
            "thursday": [ 12, 20, 2, 7 ],
            "saturday": [ 11, 17, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3969055914/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://trostrecords.bandcamp.com/album/schraubenlieder',
          a_string: 'Schraubenlieder by SVEN-AKE JOHANSSON / ALEXANDER VON SCHLIPPENBACH',
          rule: {
            "monday": [ 12, 18, 30, 5 ],
            "tuesday": [ 11, 19, 1, 6 ],
            "wednesday": [ 10, 18, 30, 5 ],
            "thursday": [ 14, 22, 4, 9 ],
            "saturday": [ 13, 21, 3, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=315101896/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://f-a-t-a-k-a.bandcamp.com/album/muddy-ditch',
          a_string: 'Muddy Ditch by Sebastian Lexer &amp; Steve Noble',
          rule: {
            "monday": [ 13, 21, 3, 8 ],
            "tuesday": [ 12, 18, 30, 5 ],
            "wednesday": [ 11, 19, 1, 6 ],
            "thursday": [ 10, 18, 30, 5 ],
            "saturday": [ 14, 22, 4, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4206341431/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://trostrecords.bandcamp.com/album/falling-and-5-other-failings',
          a_string: 'Falling and 5 other failings by MATS GUSTAFSSON / CHRISTOF KURZMANN',
          rule: {
            "monday": [ 14, 22, 4, 9 ],
            "tuesday": [ 13, 21, 3, 8 ],
            "wednesday": [ 12, 18, 30, 5 ],
            "thursday": [ 11, 19, 1, 6 ],
            "saturday": [ 10, 18, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2273704258/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://peira.bandcamp.com/album/pm21-bascule',
          a_string: 'PM21 - Bascule by Tim Daisy, Jason Stein',
          rule: {
            "monday": [ 10, 18, 30, 5 ],
            "tuesday": [ 14, 22, 4, 9 ],
            "wednesday": [ 13, 21, 3, 8 ],
            "thursday": [ 12, 18, 30, 5 ],
            "saturday": [ 11, 19, 1, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1851477979/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://peira.bandcamp.com/album/pm20-sack-of-rice',
          a_string: 'PM20 - Sack of Rice by Michael Thieke, Guillermo Gregorio, Jim Baker, Michael Zerang',
          rule: {
            "monday": [ 11, 19, 1, 6 ],
            "tuesday": [ 10, 18, 30, 5 ],
            "wednesday": [ 14, 22, 4, 9 ],
            "thursday": [ 13, 21, 3, 8 ],
            "saturday": [ 12, 18, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2784287621/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://peira.bandcamp.com/album/pm19-three-babies',
          a_string: 'PM19 - Three Babies by Steve Beresford, Martin Küchen, Ståle Liavik Solberg',
          rule: {
            "monday": [ 12, 18, 30, 5 ],
            "tuesday": [ 11, 19, 1, 6 ],
            "wednesday": [ 10, 18, 30, 5 ],
            "thursday": [ 14, 22, 4, 9 ],
            "saturday": [ 13, 21, 3, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=177034270/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://glacialerratic.bandcamp.com/album/nominedomine-joe-morris-jamie-saft',
          a_string: 'Nominedomine /Joe Morris-Jamie Saft by Joe Morris and Jamie Saft',
          rule: {
            "monday": [ 13, 21, 3, 8 ],
            "tuesday": [ 12, 18, 30, 5 ],
            "wednesday": [ 11, 19, 1, 6 ],
            "thursday": [ 10, 18, 30, 5 ],
            "saturday": [ 14, 22, 4, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=867978653/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sluchaj.bandcamp.com/album/live-in-warsaw',
          a_string: 'Live in Warsaw by Aurora Trio',
          rule: {
            "monday": [ 15, 23, 5, 10 ],
            "tuesday": [ 14, 22, 4, 9 ],
            "wednesday": [ 13, 21, 3, 8 ],
            "thursday": [ 12, 20, 2, 7 ],
            "saturday": [ 11, 19, 1, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2070208487/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sluchaj.bandcamp.com/album/celebration-ensemble',
          a_string: 'Celebration Ensemble by Agusti Fernandez',
          rule: {
            "monday": [ 11, 19, 1, 6 ],
            "tuesday": [ 15, 23, 5, 10 ],
            "wednesday": [ 14, 22, 4, 9 ],
            "thursday": [ 13, 21, 3, 8 ],
            "saturday": [ 12, 20, 2, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1866111260/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://keithtippett.bandcamp.com/album/live-at-le-mans',
          a_string: 'Live at Le Mans by Keith Tippett Tapestry Orchestra',
          rule: {
            "monday": [ 12, 20, 2, 7 ],
            "tuesday": [ 11, 19, 1, 6 ],
            "wednesday": [ 15, 23, 5, 10 ],
            "thursday": [ 14, 22, 4, 9 ],
            "saturday": [ 13, 21, 3, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1947944204/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://linaallemano.bandcamp.com/album/squish-it',
          a_string: 'Squish It! by Lina Allemano&#39;s Titanium Riot',
          rule: {
            "monday": [ 13, 21, 3, 8 ],
            "tuesday": [ 12, 20, 2, 7 ],
            "wednesday": [ 11, 19, 1, 6 ],
            "thursday": [ 15, 23, 5, 10 ],
            "saturday": [ 14, 22, 4, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3693948926/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://glamournails.bandcamp.com/album/glamour-nails',
          a_string: 'Glamour Nails by Glamour Nails',
          rule: {
            "monday": [ 14, 22, 4, 9 ],
            "tuesday": [ 13, 21, 3, 8 ],
            "wednesday": [ 12, 20, 2, 7 ],
            "thursday": [ 11, 19, 1, 6 ],
            "saturday": [ 15, 23, 5, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1269458615/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wildflowermusic.bandcamp.com/album/wildflower',
          a_string: 'WILDFLOWER by Idris Rahman, Leon Brichard, Tom Skinner',
          rule: {
            "monday": [ 15, 23, 5, 10 ],
            "tuesday": [ 14, 22, 4, 9 ],
            "wednesday": [ 13, 21, 3, 8 ],
            "thursday": [ 12, 20, 2, 7 ],
            "saturday": [ 11, 19, 1, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2178562759/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tonyburkill.bandcamp.com/album/work-money-death',
          a_string: 'Work Money Death by Tony Burkill',
          rule: {
            "monday": [ 11, 19, 1, 6 ],
            "tuesday": [ 15, 23, 5, 10 ],
            "wednesday": [ 14, 22, 4, 9 ],
            "thursday": [ 13, 21, 3, 8 ],
            "saturday": [ 12, 20, 2, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2301339764/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bjornmeyer.bandcamp.com/album/provenance-2',
          a_string: 'Provenance by Björn Meyer',
          rule: {
            "monday": [ 13, 21, 3, 8 ],
            "tuesday": [ 12, 20, 2, 7 ],
            "wednesday": [ 16, 24, 6, 11 ],
            "thursday": [ 15, 23, 5, 10 ],
            "saturday": [ 14, 22, 4, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1201496113/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/you-can-be-mine',
          a_string: 'You Can Be Mine by Fred Lonberg-Holm &amp; Paal Nilssen-Love',
          rule: {
            "monday": [ 14, 22, 4, 9 ],
            "tuesday": [ 13, 21, 3, 8 ],
            "wednesday": [ 12, 20, 2, 7 ],
            "thursday": [ 16, 24, 6, 11 ],
            "saturday": [ 15, 23, 5, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1733766922/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/duft',
          a_string: 'Duft by Zeitkratzer',
          rule: {
            "monday": [ 15, 23, 5, 10 ],
            "tuesday": [ 14, 22, 4, 9 ],
            "wednesday": [ 13, 21, 3, 8 ],
            "thursday": [ 12, 20, 2, 7 ],
            "saturday": [ 16, 24, 6, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2257017568/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/gtr-synth-2000',
          a_string: 'Gtr/Synth 2000 by Kevin Drumm',
          rule: {
            "monday": [ 16, 24, 6, 11 ],
            "tuesday": [ 15, 23, 5, 10 ],
            "wednesday": [ 14, 22, 4, 9 ],
            "thursday": [ 13, 21, 3, 8 ],
            "saturday": [ 12, 20, 2, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=674664531/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://badbadnotgood.bandcamp.com/album/bbng2',
          a_string: 'BBNG2 by BADBADNOTGOOD',
          rule: {
            "monday": [ 12, 20, 2, 7 ],
            "tuesday": [ 16, 24, 6, 11 ],
            "wednesday": [ 15, 23, 5, 10 ],
            "thursday": [ 14, 22, 4, 9 ],
            "saturday": [ 13, 21, 3, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2504387784/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://illconsidered.bandcamp.com/album/ill-considered',
          a_string: 'ILL CONSIDERED by Idris Rahman, Leon Brichard, Emre Ramazanoglu, Yahael Camara-Onono',
          rule: {
            "monday": [ 13, 21, 3, 8 ],
            "tuesday": [ 12, 20, 2, 7 ],
            "wednesday": [ 16, 24, 6, 11 ],
            "thursday": [ 15, 23, 5, 10 ],
            "saturday": [ 14, 22, 4, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3747342065/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hysm.bandcamp.com/album/standing-on-the-verge-of-ascension-hysm-136',
          a_string: 'Standing On The Verge Of Ascension [HysM?136] by The Big Drum In The Sky Religion',
          rule: {
            "monday": [ 14, 22, 4, 9 ],
            "tuesday": [ 13, 21, 3, 8 ],
            "wednesday": [ 12, 20, 2, 7 ],
            "thursday": [ 16, 24, 6, 11 ],
            "saturday": [ 15, 23, 5, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1035468813/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://otra.bandcamp.com/album/otra',
          a_string: 'Otra by Otra',
          rule: {
            "monday": [ 16, 24, 6, 11 ],
            "tuesday": [ 15, 23, 5, 10 ],
            "wednesday": [ 14, 22, 4, 9 ],
            "thursday": [ 13, 21, 3, 8 ],
            "saturday": [ 17, 25, 7, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2766612070/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aumfidelity.bandcamp.com/album/uncle-joes-spirit-house',
          a_string: 'Uncle Joe&#39;s Spirit House by William Parker Organ Quartet',
          rule: {
            "monday": [ 17, 25, 7, 12 ],
            "tuesday": [ 16, 24, 6, 11 ],
            "wednesday": [ 15, 23, 5, 10 ],
            "thursday": [ 14, 22, 4, 9 ],
            "saturday": [ 13, 21, 3, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'free jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=814386422/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aumfidelity.bandcamp.com/album/cosmic-lieder',
          a_string: 'Cosmic Lieder by Darius Jones &amp; Matthew Shipp',
          rule: {
            "monday": [ 13, 21, 3, 8 ],
            "tuesday": [ 17, 25, 7, 12 ],
            "wednesday": [ 16, 24, 6, 11 ],
            "thursday": [ 15, 23, 5, 10 ],
            "saturday": [ 14, 22, 4, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('april_musics_id_seq', (SELECT MAX(id) FROM april_musics));");
    });
};
