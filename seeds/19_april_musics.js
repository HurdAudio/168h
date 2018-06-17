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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
          theme: 'Free Jazz',
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
        },
        {
          id: 94,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3501715583/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kylemotl.bandcamp.com/album/panjandrums',
          a_string: 'Panjandrums by Kyle Motl Trio w/ Kjell Nordeson &amp; Tobin Chodos',
          rule: {
            "monday": [ 14, 22, 4, 9 ],
            "tuesday": [ 13, 21, 3, 8 ],
            "wednesday": [ 17, 25, 7, 12 ],
            "thursday": [ 16, 24, 6, 11 ],
            "saturday": [ 15, 23, 5, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3732899736/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lawfulcitizen.bandcamp.com/album/lawful-citizen',
          a_string: 'Lawful Citizen by Lawful Citizen',
          rule: {
            "monday": [ 15, 23, 5, 10 ],
            "tuesday": [ 14, 22, 4, 9 ],
            "wednesday": [ 13, 21, 3, 8 ],
            "thursday": [ 17, 25, 7, 12 ],
            "saturday": [ 16, 24, 6, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3258117317/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aumfidelity.bandcamp.com/album/akhenaten-suite',
          a_string: 'Akhenaten Suite by Roy Campbell Ensemble',
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
          id: 97,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2382532351/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fonterossa.bandcamp.com/album/desmadre',
          a_string: 'Desmadre by Marco Colonna, Augusti Fernandez',
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
          id: 98,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2977130084/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mayarecordings.bandcamp.com/album/a-moment-s-liberty',
          a_string: 'A Moment’s Liberty by Aurora Trio (Agustí Fernández, Barry Guy, Ramón López)',
          rule: {
            "monday": [ 14, 22, 4, 9 ],
            "tuesday": [ 18, 26, 8, 13 ],
            "wednesday": [ 17, 25, 7, 12 ],
            "thursday": [ 16, 24, 6, 11 ],
            "saturday": [ 15, 23, 5, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2563716858/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mayarecordings.bandcamp.com/album/time-passing',
          a_string: 'Time Passing … by Barry Guy with Savina Yannatou, Anja Pöche, Matthew Brook and Camerata Zürich',
          rule: {
            "monday": [ 15, 23, 5, 10 ],
            "tuesday": [ 14, 22, 4, 9 ],
            "wednesday": [ 18, 26, 8, 13 ],
            "thursday": [ 17, 25, 7, 12 ],
            "saturday": [ 16, 24, 6, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2933784511/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://glisteningexamples.bandcamp.com/album/the-invisible-curse',
          a_string: 'The Invisible Curse by Kevin Drumm and Jason Lescalleet',
          rule: {
            "monday": [ 16, 24, 6, 11 ],
            "tuesday": [ 15, 23, 5, 10 ],
            "wednesday": [ 14, 22, 4, 9 ],
            "thursday": [ 18, 26, 8, 13 ],
            "saturday": [ 17, 25, 7, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=407294319/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://trostrecords.bandcamp.com/album/konzert-f-r-12-traktoren',
          a_string: 'Konzert für 12 Traktoren by SVEN-AKE JOHANSSON',
          rule: {
            "monday": [ 17, 25, 7, 12 ],
            "tuesday": [ 16, 24, 6, 11 ],
            "wednesday": [ 15, 23, 5, 10 ],
            "thursday": [ 14, 22, 4, 9 ],
            "saturday": [ 18, 26, 8, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=315101896/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://f-a-t-a-k-a.bandcamp.com/album/muddy-ditch',
          a_string: 'Muddy Ditch by Sebastian Lexer &amp; Steve Noble',
          rule: {
            "monday": [ 18, 26, 8, 13 ],
            "tuesday": [ 17, 25, 7, 12 ],
            "wednesday": [ 16, 24, 6, 11 ],
            "thursday": [ 15, 23, 5, 10 ],
            "saturday": [ 14, 22, 4, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3067283074/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kenvandermark.bandcamp.com/album/momentum-2-3',
          a_string: 'Momentum 2 &amp; 3 by Ken Vandermark',
          rule: {
            "monday": [ 14, 22, 4, 9 ],
            "tuesday": [ 18, 26, 8, 13 ],
            "wednesday": [ 17, 25, 7, 12 ],
            "thursday": [ 16, 24, 6, 11 ],
            "saturday": [ 15, 23, 5, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1263157526/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://vandermark1.bandcamp.com/album/live-in-sant-anna-arresi',
          a_string: 'Live in Sant&#39; Anna Arresi by Summit Quartet',
          rule: {
            "monday": [ 15, 23, 5, 10 ],
            "tuesday": [ 14, 22, 4, 9 ],
            "wednesday": [ 18, 26, 8, 13 ],
            "thursday": [ 17, 25, 7, 12 ],
            "saturday": [ 16, 24, 6, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4212385504/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://intlanthem.bandcamp.com/album/irreversible-entanglements',
          a_string: 'Irreversible Entanglements by Irreversible Entanglements',
          rule: {
            "monday": [ 17, 25, 7, 12 ],
            "tuesday": [ 16, 24, 6, 11 ],
            "wednesday": [ 15, 23, 5, 10 ],
            "thursday": [ 19, 27, 9, 14 ],
            "saturday": [ 18, 26, 8, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1217978298/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aumfidelity.bandcamp.com/album/planetary-unknown-2',
          a_string: 'Planetary Unknown by David S. Ware / Cooper-Moore / William Parker / Muhammad Ali',
          rule: {
            "monday": [ 18, 26, 8, 13 ],
            "tuesday": [ 17, 25, 7, 12 ],
            "wednesday": [ 16, 24, 6, 11 ],
            "thursday": [ 15, 23, 5, 10 ],
            "saturday": [ 19, 27, 9, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1564452652/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://paalnilssen-love.bandcamp.com/album/paal-nilssen-love-large-unit-erta-ale',
          a_string: 'Paal Nilssen-Love Large Unit : Erta Ale by Paal Nilssen-Love',
          rule: {
            "monday": [ 19, 27, 9, 14 ],
            "tuesday": [ 18, 26, 8, 13 ],
            "wednesday": [ 17, 25, 7, 12 ],
            "thursday": [ 16, 24, 6, 11 ],
            "saturday": [ 15, 23, 5, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2670047260/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunntrio-slr.bandcamp.com/album/sunn-trio',
          a_string: 'Sunn Trio by Sunn Trio',
          rule: {
            "monday": [ 15, 23, 5, 10 ],
            "tuesday": [ 19, 27, 9, 14 ],
            "wednesday": [ 18, 26, 8, 13 ],
            "thursday": [ 17, 25, 7, 12 ],
            "saturday": [ 16, 24, 6, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2470241019/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://juliankirshnerjakirecords.bandcamp.com/album/five-percent-tint',
          a_string: 'Five Percent Tint by Gerrit Hatcher and Julian Kirshner',
          rule: {
            "monday": [ 16, 24, 6, 11 ],
            "tuesday": [ 15, 23, 5, 10 ],
            "wednesday": [ 19, 27, 9, 14 ],
            "thursday": [ 18, 26, 8, 13 ],
            "saturday": [ 17, 25, 7, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1254713292/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://juliankirshnerjakirecords.bandcamp.com/album/whip-the-apron',
          a_string: 'Whip The Apron by Weinberg/Kirchen/Kirshner',
          rule: {
            "monday": [ 17, 25, 7, 12 ],
            "tuesday": [ 16, 24, 6, 11 ],
            "wednesday": [ 15, 23, 5, 10 ],
            "thursday": [ 19, 27, 9, 14 ],
            "saturday": [ 18, 26, 8, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1157475184/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://singlespeedmusic.bandcamp.com/album/uncovered',
          a_string: 'Uncovered by Shelton Mofjell',
          rule: {
            "monday": [ 18, 26, 8, 13 ],
            "tuesday": [ 17, 25, 7, 12 ],
            "wednesday": [ 16, 24, 6, 11 ],
            "thursday": [ 15, 23, 5, 10 ],
            "saturday": [ 19, 27, 9, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=978800525/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thomaszaruba.fr/album/slow-down',
          a_string: 'SLOW DOWN by THOMAS ZARUBA',
          rule: {
            "monday": [ 20, 28, 10, 15 ],
            "tuesday": [ 19, 27, 9, 14 ],
            "wednesday": [ 18, 26, 8, 13 ],
            "thursday": [ 17, 25, 7, 12 ],
            "saturday": [ 16, 24, 6, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2277641234/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunnymurray.bandcamp.com/album/sunny-murray',
          a_string: 'Sunny Murray by Sunny Murray',
          rule: {
            "monday": [ 16, 24, 6, 11 ],
            "tuesday": [ 20, 28, 10, 15 ],
            "wednesday": [ 19, 27, 9, 14 ],
            "thursday": [ 18, 26, 8, 13 ],
            "saturday": [ 17, 25, 7, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=940056246/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kylemotl.bandcamp.com/album/katabasis',
          a_string: 'Katabasis by Kyle Motl / Drew Ceccato',
          rule: {
            "monday": [ 17, 25, 7, 12 ],
            "tuesday": [ 16, 24, 6, 11 ],
            "wednesday": [ 20, 28, 10, 15 ],
            "thursday": [ 19, 27, 9, 14 ],
            "saturday": [ 18, 26, 8, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1632580698/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://amirthakidambi.bandcamp.com/album/holy-science',
          a_string: 'Holy Science by Elder Ones',
          rule: {
            "monday": [ 18, 26, 8, 13 ],
            "tuesday": [ 17, 25, 7, 12 ],
            "wednesday": [ 16, 24, 6, 11 ],
            "thursday": [ 20, 28, 10, 15 ],
            "saturday": [ 19, 27, 9, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1368121686/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://iordache.bandcamp.com/album/one-life-left',
          a_string: 'One Life Left by Iordache',
          rule: {
            "monday": [ 19, 27, 9, 14 ],
            "tuesday": [ 18, 26, 8, 13 ],
            "wednesday": [ 17, 25, 7, 12 ],
            "thursday": [ 16, 24, 6, 11 ],
            "saturday": [ 20, 28, 10, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2781980594/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bobbykappmatthewshipp.bandcamp.com/album/cactus',
          a_string: 'Cactus by Bobby Kapp &amp; Matthew Shipp',
          rule: {
            "monday": [ 20, 28, 10, 15 ],
            "tuesday": [ 19, 27, 9, 14 ],
            "wednesday": [ 18, 26, 8, 13 ],
            "thursday": [ 17, 25, 7, 12 ],
            "saturday": [ 16, 24, 6, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3498965030/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://intlanthem.bandcamp.com/album/bottle-tree',
          a_string: 'Bottle Tree by Bottle Tree',
          rule: {
            "monday": [ 16, 24, 6, 11 ],
            "tuesday": [ 20, 28, 10, 15 ],
            "wednesday": [ 19, 27, 9, 14 ],
            "thursday": [ 18, 26, 8, 13 ],
            "saturday": [ 17, 25, 7, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=388286133/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://intlanthem.bandcamp.com/album/international-anthem-flips',
          a_string: 'International Anthem Flips by krushLove',
          rule: {
            "monday": [ 18, 26, 8, 13 ],
            "tuesday": [ 17, 25, 7, 12 ],
            "wednesday": [ 21, 29, 11, 16 ],
            "thursday": [ 20, 28, 10, 15 ],
            "saturday": [ 19, 27, 9, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4151798314/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://intlanthem.bandcamp.com/album/solo-contra',
          a_string: 'Solo Contra by John McCowen',
          rule: {
            "monday": [ 19, 27, 9, 14 ],
            "tuesday": [ 18, 26, 8, 13 ],
            "wednesday": [ 17, 25, 7, 12 ],
            "thursday": [ 21, 29, 11, 16 ],
            "saturday": [ 20, 28, 10, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2280736778/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://paalnilssen-love.bandcamp.com/album/paal-nilssen-love-large-unit-ana',
          a_string: 'Paal Nilssen-Love Large Unit : Ana by Paal Nilssen-Love',
          rule: {
            "monday": [ 20, 28, 10, 15 ],
            "tuesday": [ 19, 27, 9, 14 ],
            "wednesday": [ 18, 26, 8, 13 ],
            "thursday": [ 17, 25, 7, 12 ],
            "saturday": [ 21, 29, 11, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=352857807/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://waclawzimpel.bandcamp.com/album/lines',
          a_string: 'Lines by Waclaw Zimpel',
          rule: {
            "monday": [ 21, 29, 11, 16 ],
            "tuesday": [ 20, 28, 10, 15 ],
            "wednesday": [ 19, 27, 9, 14 ],
            "thursday": [ 18, 26, 8, 13 ],
            "saturday": [ 17, 25, 7, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2453153282/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://waclawzimpel.bandcamp.com/album/2',
          a_string: '2 by Saagara',
          rule: {
            "monday": [ 17, 25, 7, 12 ],
            "tuesday": [ 21, 29, 11, 16 ],
            "wednesday": [ 20, 28, 10, 15 ],
            "thursday": [ 19, 27, 9, 14 ],
            "saturday": [ 18, 26, 8, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3543434231/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://maxjohnson.bandcamp.com/album/in-the-west',
          a_string: 'In the West by Max Johnson',
          rule: {
            "monday": [ 18, 26, 8, 13 ],
            "tuesday": [ 17, 25, 7, 12 ],
            "wednesday": [ 21, 29, 11, 16 ],
            "thursday": [ 20, 28, 10, 15 ],
            "saturday": [ 19, 27, 9, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2947788769/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://maxjohnson.bandcamp.com/album/free-reservoir',
          a_string: 'Free Reservoir by Simon Nabatov, Max Johnson &amp; Michael Sarin',
          rule: {
            "monday": [ 19, 27, 9, 14 ],
            "tuesday": [ 18, 26, 8, 13 ],
            "wednesday": [ 17, 25, 7, 12 ],
            "thursday": [ 21, 29, 11, 16 ],
            "saturday": [ 20, 28, 10, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3919563242/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://maxjohnson.bandcamp.com/album/something-familiar',
          a_string: 'Something Familiar by Max Johnson Trio',
          rule: {
            "monday": [ 21, 29, 11, 16 ],
            "tuesday": [ 20, 28, 10, 15 ],
            "wednesday": [ 19, 27, 9, 14 ],
            "thursday": [ 18, 26, 8, 13 ],
            "saturday": [ 22, 30, 12, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1461683551/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://helengillet.bandcamp.com/album/horizon',
          a_string: 'Horizon by Tephra Sound',
          rule: {
            "monday": [ 22, 30, 12, 17 ],
            "tuesday": [ 21, 29, 11, 16 ],
            "wednesday": [ 20, 28, 10, 15 ],
            "thursday": [ 19, 27, 9, 14 ],
            "saturday": [ 18, 26, 8, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3366347658/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://collectifspatule.bandcamp.com/album/le-vanneau-hupp',
          a_string: 'Le Vanneau Huppé by Collectif SPATULE',
          rule: {
            "monday": [ 18, 26, 8, 13 ],
            "tuesday": [ 22, 30, 12, 17 ],
            "wednesday": [ 21, 29, 11, 16 ],
            "thursday": [ 20, 28, 10, 15 ],
            "saturday": [ 19, 27, 9, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2071770399/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shiftingparadigmrecords.bandcamp.com/album/red-planet-with-bill-carrothers',
          a_string: 'Red Planet with Bill Carrothers by Red Planet with Bill Carrothers',
          rule: {
            "monday": [ 19, 27, 9, 14 ],
            "tuesday": [ 18, 26, 8, 13 ],
            "wednesday": [ 22, 30, 12, 17 ],
            "thursday": [ 21, 29, 11, 16 ],
            "saturday": [ 20, 28, 10, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 130,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1846715301/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kenvandermark.bandcamp.com/album/momentum-1-stone',
          a_string: 'Momentum 1 : Stone by Ken Vandermark',
          rule: {
            "monday": [ 20, 28, 10, 15 ],
            "tuesday": [ 19, 27, 9, 14 ],
            "wednesday": [ 18, 26, 8, 13 ],
            "thursday": [ 22, 30, 12, 17 ],
            "saturday": [ 21, 29, 11, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 131,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3251343418/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://billlaswell.bandcamp.com/album/seize-the-rainbow',
          a_string: 'Seize The Rainbow by Sonny Sharrock Band',
          rule: {
            "monday": [ 21, 29, 11, 16 ],
            "tuesday": [ 20, 28, 10, 15 ],
            "wednesday": [ 19, 27, 9, 14 ],
            "thursday": [ 18, 26, 8, 13 ],
            "saturday": [ 22, 30, 12, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 132,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3299414741/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://billlaswell.bandcamp.com/album/tennessee-2004',
          a_string: 'Tennessee 2004 by Praxis',
          rule: {
            "monday": [ 22, 30, 12, 17 ],
            "tuesday": [ 21, 29, 11, 16 ],
            "wednesday": [ 20, 28, 10, 15 ],
            "thursday": [ 19, 27, 9, 14 ],
            "saturday": [ 18, 26, 8, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 133,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4098047639/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chrispitsiokos.bandcamp.com/album/before-the-heat-death-2',
          a_string: 'Before the Heat Death by CP Unit',
          rule: {
            "monday": [ 19, 27, 9, 14 ],
            "tuesday": [ 23, 1, 13, 18 ],
            "wednesday": [ 22, 30, 12, 17 ],
            "thursday": [ 21, 29, 11, 16 ],
            "saturday": [ 20, 28, 10, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 134,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3344859504/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ugexploderecords.bandcamp.com/album/unplanned-obsolescence',
          a_string: 'Unplanned Obsolescence by Chris Pitsiokos / Weasel Walter',
          rule: {
            "monday": [ 20, 28, 10, 15 ],
            "tuesday": [ 19, 27, 9, 14 ],
            "wednesday": [ 23, 1, 13, 18 ],
            "thursday": [ 22, 30, 12, 17 ],
            "saturday": [ 21, 29, 11, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 135,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2328614651/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chrispitsiokos.bandcamp.com/album/one-eye-with-a-microscope-attached',
          a_string: 'One Eye with a Microscope Attached by Chris Pitsiokos Quartet',
          rule: {
            "monday": [ 21, 29, 11, 16 ],
            "tuesday": [ 20, 28, 10, 15 ],
            "wednesday": [ 19, 27, 9, 14 ],
            "thursday": [ 23, 1, 13, 18 ],
            "saturday": [ 22, 30, 12, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 136,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=112754703/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://darrenjohnston.bandcamp.com/album/broken-shadows-the-fuchsia-dell-and-other-tales',
          a_string: 'Broken Shadows - The Fuchsia Dell and Other Tales by Darren Johnston',
          rule: {
            "monday": [ 22, 30, 12, 17 ],
            "tuesday": [ 21, 29, 11, 16 ],
            "wednesday": [ 20, 28, 10, 15 ],
            "thursday": [ 19, 27, 9, 14 ],
            "saturday": [ 23, 1, 13, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 137,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3477267182/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://edgetonerecords.bandcamp.com/album/third-impulse',
          a_string: 'Third Impulse by Third Impulse, Darren Johnston',
          rule: {
            "monday": [ 23, 1, 13, 18 ],
            "tuesday": [ 22, 30, 12, 17 ],
            "wednesday": [ 21, 29, 11, 16 ],
            "thursday": [ 20, 28, 10, 15 ],
            "saturday": [ 19, 27, 9, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 138,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3367370805/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://stevenlugerner.bandcamp.com/album/for-we-have-heard-2',
          a_string: 'For We Have Heard by Steven Lugerner, Darren Johnston, Myra Melford, Matt Wilson',
          rule: {
            "monday": [ 19, 27, 9, 14 ],
            "tuesday": [ 23, 1, 13, 18 ],
            "wednesday": [ 22, 30, 12, 17 ],
            "thursday": [ 21, 29, 11, 16 ],
            "saturday": [ 20, 28, 10, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 139,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2528072222/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ensemblesupermusique.bandcamp.com/album/les-accords-intuitifs',
          a_string: 'Les accords intuitifs by Ensemble SuperMusique',
          rule: {
            "monday": [ 20, 28, 10, 15 ],
            "tuesday": [ 19, 27, 9, 14 ],
            "wednesday": [ 23, 1, 13, 18 ],
            "thursday": [ 22, 30, 12, 17 ],
            "saturday": [ 21, 29, 11, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 140,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1055688368/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ensemblesupermusique.bandcamp.com/album/bruit-court-circuit',
          a_string: 'Bruit court-circuit by Ensemble SuperMusique',
          rule: {
            "monday": [ 22, 30, 12, 17 ],
            "tuesday": [ 21, 29, 11, 16 ],
            "wednesday": [ 20, 28, 10, 15 ],
            "thursday": [ 24, 2, 14, 19 ],
            "saturday": [ 23, 1, 13, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 141,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1332537416/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ensemblesupermusique.bandcamp.com/album/y-a-du-bruit-dans-ma-cabane',
          a_string: 'Y’a du bruit dans ma cabane by Ensemble SuperMusique',
          rule: {
            "monday": [ 23, 1, 13, 18 ],
            "tuesday": [ 22, 30, 12, 17 ],
            "wednesday": [ 21, 29, 11, 16 ],
            "thursday": [ 20, 28, 10, 15 ],
            "saturday": [ 24, 2, 14, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 142,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=747198744/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tomasfujiwara.bandcamp.com/album/triple-double',
          a_string: 'Triple Double by Tomas Fujiwara',
          rule: {
            "monday": [ 24, 2, 14, 19 ],
            "tuesday": [ 23, 1, 13, 18 ],
            "wednesday": [ 22, 30, 12, 17 ],
            "thursday": [ 21, 29, 11, 16 ],
            "saturday": [ 20, 28, 10, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 143,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2891019264/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://taylortomas.bandcamp.com/album/through-foundation',
          a_string: 'Through Foundation by Taylor Ho Bynum &amp; Tomas Fujiwara',
          rule: {
            "monday": [ 20, 28, 10, 15 ],
            "tuesday": [ 24, 2, 14, 19 ],
            "wednesday": [ 23, 1, 13, 18 ],
            "thursday": [ 22, 30, 12, 17 ],
            "saturday": [ 21, 29, 11, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 144,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2777475031/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://taylortomas.bandcamp.com/album/stepwise',
          a_string: 'Stepwise by Tomas Fujiwara &amp; Taylor Ho Bynum',
          rule: {
            "monday": [ 21, 29, 11, 16 ],
            "tuesday": [ 20, 28, 10, 15 ],
            "wednesday": [ 24, 2, 14, 19 ],
            "thursday": [ 23, 1, 13, 18 ],
            "saturday": [ 22, 30, 12, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 145,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1919415252/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://worldgalaxyrecords.bandcamp.com/album/thelonious-sphere-monk',
          a_string: 'Thelonious Sphere Monk by Mast',
          rule: {
            "monday": [ 22, 30, 12, 17 ],
            "tuesday": [ 21, 29, 11, 16 ],
            "wednesday": [ 20, 28, 10, 15 ],
            "thursday": [ 24, 2, 14, 19 ],
            "saturday": [ 23, 1, 13, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 146,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2069771264/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://worldgalaxyrecords.bandcamp.com/album/light-magnet',
          a_string: 'Light Magnet by Holophonor',
          rule: {
            "monday": [ 23, 1, 13, 18 ],
            "tuesday": [ 22, 30, 12, 17 ],
            "wednesday": [ 21, 29, 11, 16 ],
            "thursday": [ 20, 28, 10, 15 ],
            "saturday": [ 24, 2, 14, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 147,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2445484328/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://worldgalaxyrecords.bandcamp.com/album/the-heart-of-infinite-change',
          a_string: 'The Heart of Infinite Change by Natasha Agrama',
          rule: {
            "monday": [ 25, 3, 15, 20 ],
            "tuesday": [ 24, 2, 14, 19 ],
            "wednesday": [ 23, 1, 13, 18 ],
            "thursday": [ 22, 30, 12, 17 ],
            "saturday": [ 21, 29, 11, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 148,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3697416670/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://quinkirchner.bandcamp.com/album/the-other-side-of-time',
          a_string: 'The Other Side of Time by Quin Kirchner',
          rule: {
            "monday": [ 21, 29, 11, 16 ],
            "tuesday": [ 25, 3, 15, 20 ],
            "wednesday": [ 24, 2, 14, 19 ],
            "thursday": [ 23, 1, 13, 18 ],
            "saturday": [ 22, 30, 12, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 149,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2834868565/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sameergupta.bandcamp.com/album/balance',
          a_string: 'Balance by The Supplicants',
          rule: {
            "monday": [ 22, 30, 12, 17 ],
            "tuesday": [ 21, 29, 11, 16 ],
            "wednesday": [ 25, 3, 15, 20 ],
            "thursday": [ 24, 2, 14, 19 ],
            "saturday": [ 23, 1, 13, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 150,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2944452650/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kimoki.bandcamp.com/album/the-great-root',
          a_string: 'The Great Root by KIM OKI',
          rule: {
            "monday": [ 23, 1, 13, 18 ],
            "tuesday": [ 22, 30, 12, 17 ],
            "wednesday": [ 21, 29, 11, 16 ],
            "thursday": [ 25, 3, 15, 20 ],
            "saturday": [ 24, 2, 14, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 151,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4209517424/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://darktree.bandcamp.com/album/stomiidae',
          a_string: 'Stomiidae by Stomiidae (Daniel Levin • Chris Pitsiokos • Brandon Seabrook)',
          rule: {
            "monday": [ 24, 2, 14, 19 ],
            "tuesday": [ 23, 1, 13, 18 ],
            "wednesday": [ 22, 30, 12, 17 ],
            "thursday": [ 21, 29, 11, 16 ],
            "saturday": [ 25, 3, 15, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 152,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2222414316/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://darktree.bandcamp.com/album/live-at-the-century-city-playhouse-los-angeles-1979',
          a_string: 'Live at the Century City Playhouse - Los Angeles, 1979 by Vinny Golia Wind Quartet',
          rule: {
            "monday": [ 25, 3, 15, 20 ],
            "tuesday": [ 24, 2, 14, 19 ],
            "wednesday": [ 23, 1, 13, 18 ],
            "thursday": [ 22, 30, 12, 17 ],
            "saturday": [ 21, 29, 11, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 153,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1326538116/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://darktree.bandcamp.com/album/en-corps-generation',
          a_string: 'En Corps - Generation by En Corps (Eve Risser • Benjamin Duboc • Edward Perraud)',
          rule: {
            "monday": [ 21, 29, 11, 16 ],
            "tuesday": [ 25, 3, 15, 20 ],
            "wednesday": [ 24, 2, 14, 19 ],
            "thursday": [ 23, 1, 13, 18 ],
            "saturday": [ 22, 30, 12, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 154,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3455575167/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunwatchers.bandcamp.com/album/ii',
          a_string: 'II by Sunwatchers',
          rule: {
            "monday": [ 23, 1, 13, 18 ],
            "tuesday": [ 22, 30, 12, 17 ],
            "wednesday": [ 26, 4, 16, 21 ],
            "thursday": [ 25, 3, 15, 20 ],
            "saturday": [ 24, 2, 14, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 155,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2201323480/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thiefs.bandcamp.com/album/graft',
          a_string: 'GRAFT by THIEFS',
          rule: {
            "monday": [ 24, 2, 14, 19 ],
            "tuesday": [ 23, 1, 13, 18 ],
            "wednesday": [ 22, 30, 12, 17 ],
            "thursday": [ 26, 4, 16, 21 ],
            "saturday": [ 25, 3, 15, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 156,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4030106603/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aumfidelity.bandcamp.com/album/wisdom-of-uncertainty',
          a_string: 'Wisdom of Uncertainty by David S. Ware Quartet',
          rule: {
            "monday": [ 25, 3, 15, 20 ],
            "tuesday": [ 24, 2, 14, 19 ],
            "wednesday": [ 23, 1, 13, 18 ],
            "thursday": [ 22, 30, 12, 17 ],
            "saturday": [ 26, 4, 16, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 157,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4157557513/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tonunaissootrio.bandcamp.com/album/tonu-naissoo-trio-1970',
          a_string: 'Tonu Naissoo Trio (1970) by Tonu Naissoo Trio',
          rule: {
            "monday": [ 26, 4, 16, 21 ],
            "tuesday": [ 25, 3, 15, 20 ],
            "wednesday": [ 24, 2, 14, 19 ],
            "thursday": [ 23, 1, 13, 18 ],
            "saturday": [ 22, 30, 12, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 158,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=866568059/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kaze2.bandcamp.com/album/atody-man',
          a_string: 'Atody Man by Kaze',
          rule: {
            "monday": [ 22, 30, 12, 17 ],
            "tuesday": [ 26, 4, 16, 21 ],
            "wednesday": [ 25, 3, 15, 20 ],
            "thursday": [ 24, 2, 14, 19 ],
            "saturday": [ 23, 1, 13, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 159,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1828543043/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jazebaqti.bandcamp.com/album/stories',
          a_string: 'Stories by Jaze Baqti',
          rule: {
            "monday": [ 23, 1, 13, 18 ],
            "tuesday": [ 22, 30, 12, 17 ],
            "wednesday": [ 26, 4, 16, 21 ],
            "thursday": [ 25, 3, 15, 20 ],
            "saturday": [ 24, 2, 14, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 160,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=38965267/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hookertrio.bandcamp.com/album/remembering',
          a_string: 'Remembering by William Hooker Trio w/Ava Mendoza &amp; Damon Smith',
          rule: {
            "monday": [ 24, 2, 14, 19 ],
            "tuesday": [ 23, 1, 13, 18 ],
            "wednesday": [ 22, 30, 12, 17 ],
            "thursday": [ 26, 4, 16, 21 ],
            "saturday": [ 25, 3, 15, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 161,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1591655911/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://waclawzimpel.bandcamp.com/album/lam',
          a_string: 'LAM by Waclaw Zimpel',
          rule: {
            "monday": [ 26, 4, 16, 21 ],
            "tuesday": [ 25, 3, 15, 20 ],
            "wednesday": [ 24, 2, 14, 19 ],
            "thursday": [ 23, 1, 13, 18 ],
            "saturday": [ 27, 5, 17, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 162,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2127122724/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://matsgustafsson.bandcamp.com/album/new-york-ystad',
          a_string: 'New York - Ystad by Mats Gustafsson, Thurston Moore, Steve Shelley, Lee Ranaldo',
          rule: {
            "monday": [ 27, 5, 17, 22 ],
            "tuesday": [ 26, 4, 16, 21 ],
            "wednesday": [ 25, 3, 15, 20 ],
            "thursday": [ 24, 2, 14, 19 ],
            "saturday": [ 23, 1, 13, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 163,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1995703143/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nubyagarcia.bandcamp.com/album/when-we-are',
          a_string: 'When We Are by Nubya Garcia',
          rule: {
            "monday": [ 23, 1, 13, 18 ],
            "tuesday": [ 27, 5, 17, 22 ],
            "wednesday": [ 26, 4, 16, 21 ],
            "thursday": [ 25, 3, 15, 20 ],
            "saturday": [ 24, 2, 14, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 164,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4138331469/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ryankeberle.bandcamp.com/album/reverso-suite-ravel',
          a_string: 'Reverso - Suite Ravel by Reverso',
          rule: {
            "monday": [ 24, 2, 14, 19 ],
            "tuesday": [ 23, 1, 13, 18 ],
            "wednesday": [ 27, 5, 17, 22 ],
            "thursday": [ 26, 4, 16, 21 ],
            "saturday": [ 25, 3, 15, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 165,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3532235805/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://elnegocito.bandcamp.com/album/mephiti',
          a_string: 'Mephiti by Mephiti',
          rule: {
            "monday": [ 25, 3, 15, 20 ],
            "tuesday": [ 24, 2, 14, 19 ],
            "wednesday": [ 23, 1, 13, 18 ],
            "thursday": [ 27, 5, 17, 22 ],
            "saturday": [ 26, 4, 16, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 166,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1816086165/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://steuartliebig.bandcamp.com/album/snake-or-man-gold-lion-fest-july-2016',
          a_string: 'snake or man/gold lion fest, july 2016 by steuart liebig',
          rule: {
            "monday": [ 26, 4, 16, 21 ],
            "tuesday": [ 25, 3, 15, 20 ],
            "wednesday": [ 24, 2, 14, 19 ],
            "thursday": [ 23, 1, 13, 18 ],
            "saturday": [ 27, 5, 17, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 167,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3288174927/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tonyfalco.bandcamp.com/album/songs-for-sal',
          a_string: 'Songs For Sal by Tony Falco',
          rule: {
            "monday": [ 27, 5, 17, 22 ],
            "tuesday": [ 26, 4, 16, 21 ],
            "wednesday": [ 25, 3, 15, 20 ],
            "thursday": [ 24, 2, 14, 19 ],
            "saturday": [ 23, 1, 13, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 168,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=746254404/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://milmin.bandcamp.com/album/durian-brow',
          a_string: 'Durian Brow by Durian Brow',
          rule: {
            "monday": [ 24, 2, 14, 19 ],
            "tuesday": [ 28, 6, 18, 23 ],
            "wednesday": [ 27, 5, 17, 22 ],
            "thursday": [ 26, 4, 16, 21 ],
            "saturday": [ 25, 3, 15, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 169,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2212167778/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://peterzummo.bandcamp.com/album/frame-loop',
          a_string: 'Frame Loop by Peter Zummo',
          rule: {
            "monday": [ 25, 3, 15, 20 ],
            "tuesday": [ 24, 2, 14, 19 ],
            "wednesday": [ 28, 6, 18, 23 ],
            "thursday": [ 27, 5, 17, 22 ],
            "saturday": [ 26, 4, 16, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 170,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2944138936/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ayler-records.bandcamp.com/album/vernacular-avant-garde',
          a_string: 'Vernacular Avant-garde by Peter Bruun&#39;s All Too Human',
          rule: {
            "monday": [ 26, 4, 16, 21 ],
            "tuesday": [ 25, 3, 15, 20 ],
            "wednesday": [ 24, 2, 14, 19 ],
            "thursday": [ 28, 6, 18, 23 ],
            "saturday": [ 27, 5, 17, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 171,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4235150817/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sameergupta.bandcamp.com/album/a-circle-has-no-beginning',
          a_string: 'A Circle Has No Beginning by Sameer Gupta',
          rule: {
            "monday": [ 27, 5, 17, 22 ],
            "tuesday": [ 26, 4, 16, 21 ],
            "wednesday": [ 25, 3, 15, 20 ],
            "thursday": [ 24, 2, 14, 19 ],
            "saturday": [ 28, 6, 18, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 172,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2125061923/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mariagrand.bandcamp.com/album/magdalena',
          a_string: 'Magdalena by María Grand',
          rule: {
            "monday": [ 28, 6, 18, 23 ],
            "tuesday": [ 27, 5, 17, 22 ],
            "wednesday": [ 26, 4, 16, 21 ],
            "thursday": [ 25, 3, 15, 20 ],
            "saturday": [ 24, 2, 14, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 173,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=541192747/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mariagrand.bandcamp.com/album/tetrawind',
          a_string: 'TetraWind by María Grand',
          rule: {
            "monday": [ 24, 2, 14, 19 ],
            "tuesday": [ 28, 6, 18, 23 ],
            "wednesday": [ 27, 5, 17, 22 ],
            "thursday": [ 26, 4, 16, 21 ],
            "saturday": [ 25, 3, 15, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 174,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=358029223/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunnysidezone.com/album/singular-awakening',
          a_string: 'Singular Awakening by Mike McGinnis',
          rule: {
            "monday": [ 25, 3, 15, 20 ],
            "tuesday": [ 24, 2, 14, 19 ],
            "wednesday": [ 28, 6, 18, 23 ],
            "thursday": [ 27, 5, 17, 22 ],
            "saturday": [ 26, 4, 16, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 175,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=3386600203/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunnysidezone.com/album/heart-tonic',
          a_string: 'Heart Tonic by Caroline Davis',
          rule: {
            "monday": [ 27, 5, 17, 22 ],
            "tuesday": [ 26, 4, 16, 21 ],
            "wednesday": [ 25, 3, 15, 20 ],
            "thursday": [ 29, 7, 19, 24 ],
            "saturday": [ 28, 6, 18, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 176,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=128309419/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kylemotl.bandcamp.com/album/augur',
          a_string: 'AUGUR by Kyle Motl',
          rule: {
            "monday": [ 28, 6, 18, 23 ],
            "tuesday": [ 27, 5, 17, 22 ],
            "wednesday": [ 26, 4, 16, 21 ],
            "thursday": [ 25, 3, 15, 20 ],
            "saturday": [ 29, 7, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 177,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2425289080/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://adamrudolph.bandcamp.com/album/y-y',
          a_string: 'Yèyí by Adam Rudolph, Ralph Jones',
          rule: {
            "monday": [ 29, 7, 19, 24 ],
            "tuesday": [ 28, 6, 18, 23 ],
            "wednesday": [ 27, 5, 17, 22 ],
            "thursday": [ 26, 4, 16, 21 ],
            "saturday": [ 25, 3, 15, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 178,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3743710167/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rempispietdaisy.bandcamp.com/album/throw-tomatoes',
          a_string: 'Throw Tomatoes by Rempis / Piet / Daisy',
          rule: {
            "monday": [ 25, 3, 15, 20 ],
            "tuesday": [ 29, 7, 19, 24 ],
            "wednesday": [ 28, 6, 18, 23 ],
            "thursday": [ 27, 5, 17, 22 ],
            "saturday": [ 26, 4, 16, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 179,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2752869323/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tworiversrecords.bandcamp.com/album/love-and-protest',
          a_string: 'LOVE AND PROTEST by COLLECTIVE X',
          rule: {
            "monday": [ 26, 4, 16, 21 ],
            "tuesday": [ 25, 3, 15, 20 ],
            "wednesday": [ 29, 7, 19, 24 ],
            "thursday": [ 28, 6, 18, 23 ],
            "saturday": [ 27, 5, 17, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 180,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=526341575/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eavemontreal.bandcamp.com/album/eave',
          a_string: 'Eave by Eave',
          rule: {
            "monday": [ 27, 5, 17, 22 ],
            "tuesday": [ 26, 4, 16, 21 ],
            "wednesday": [ 25, 3, 15, 20 ],
            "thursday": [ 29, 7, 19, 24 ],
            "saturday": [ 28, 6, 18, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 181,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=367153313/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://samgendel.bandcamp.com/album/pass-if-music',
          a_string: 'Pass If Music by Sam Gendel',
          rule: {
            "monday": [ 28, 6, 18, 23 ],
            "tuesday": [ 27, 5, 17, 22 ],
            "wednesday": [ 26, 4, 16, 21 ],
            "thursday": [ 25, 3, 15, 20 ],
            "saturday": [ 29, 7, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 182,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2639239996/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://omlott.bandcamp.com/album/inhale-volume-i',
          a_string: 'Inhale - Volume I by Luft (Mats Gustafsson &amp; Erwan Keravec)',
          rule: {
            "monday": [ 30, 8, 20, 25 ],
            "tuesday": [ 29, 7, 19, 24 ],
            "wednesday": [ 28, 6, 18, 23 ],
            "thursday": [ 27, 5, 17, 22 ],
            "saturday": [ 26, 4, 16, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 183,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2866398829/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://omlott.bandcamp.com/album/attack',
          a_string: 'Attack by Anna Högberg',
          rule: {
            "monday": [ 26, 4, 16, 21 ],
            "tuesday": [ 30, 8, 20, 25 ],
            "wednesday": [ 29, 7, 19, 24 ],
            "thursday": [ 28, 6, 18, 23 ],
            "saturday": [ 27, 5, 17, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 184,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1539656772/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://natbirchalljazzman.bandcamp.com/album/cosmic-language',
          a_string: 'Cosmic Language by Nat Birchall',
          rule: {
            "monday": [ 27, 5, 17, 22 ],
            "tuesday": [ 26, 4, 16, 21 ],
            "wednesday": [ 30, 8, 20, 25 ],
            "thursday": [ 29, 7, 19, 24 ],
            "saturday": [ 28, 6, 18, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 185,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1727024361/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://megokura.bandcamp.com/album/npo-trio-live-at-the-stone',
          a_string: 'NPO Trio Live At The Stone by Meg Okura, Sam Newsome, Jean-Michel Pilc',
          rule: {
            "monday": [ 28, 6, 18, 23 ],
            "tuesday": [ 27, 5, 17, 22 ],
            "wednesday": [ 26, 4, 16, 21 ],
            "thursday": [ 30, 8, 20, 25 ],
            "saturday": [ 29, 7, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 186,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1832604723/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://woutgooris.bandcamp.com/album/some-time',
          a_string: 'Some Time by Wout Gooris Trio &amp; Chisholm/Vann',
          rule: {
            "monday": [ 29, 7, 19, 24 ],
            "tuesday": [ 28, 6, 18, 23 ],
            "wednesday": [ 27, 5, 17, 22 ],
            "thursday": [ 26, 4, 16, 21 ],
            "saturday": [ 30, 8, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 187,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2842545668/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://illconsidered.bandcamp.com/album/ill-considered-3',
          a_string: 'ILL CONSIDERED 3 by ILL CONSIDERED',
          rule: {
            "monday": [ 30, 8, 20, 25 ],
            "tuesday": [ 29, 7, 19, 24 ],
            "wednesday": [ 28, 6, 18, 23 ],
            "thursday": [ 27, 5, 17, 22 ],
            "saturday": [ 26, 4, 16, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 188,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3452754172/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://salimwashington.bandcamp.com/album/dogon-revisited',
          a_string: 'DOGON REVISITED by Salim Washington',
          rule: {
            "monday": [ 26, 4, 16, 21 ],
            "tuesday": [ 30, 8, 20, 25 ],
            "wednesday": [ 29, 7, 19, 24 ],
            "thursday": [ 28, 6, 18, 23 ],
            "saturday": [ 27, 5, 17, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 189,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2927667759/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://alexoliveriossunshineensemble.bandcamp.com/album/sunshine-ensemble',
          a_string: 'Sunshine Ensemble by Alex Oliverio&#39;s Sunshine Ensemble',
          rule: {
            "monday": [ 28, 6, 18, 23 ],
            "tuesday": [ 27, 5, 17, 22 ],
            "wednesday": [ 1, 9, 21, 26 ],
            "thursday": [ 30, 8, 20, 25 ],
            "saturday": [ 29, 7, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 190,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1335580777/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eremiterecords.bandcamp.com/album/magnetoception',
          a_string: 'Magnetoception by Joshua Abrams',
          rule: {
            "monday": [ 29, 7, 19, 24 ],
            "tuesday": [ 28, 6, 18, 23 ],
            "wednesday": [ 27, 5, 17, 22 ],
            "thursday": [ 1, 9, 21, 26 ],
            "saturday": [ 30, 8, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 191,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3252766463/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eremiterecords.bandcamp.com/album/simultonality',
          a_string: 'Simultonality by Joshua Abrams &amp; Natural Information Society',
          rule: {
            "monday": [ 30, 8, 20, 25 ],
            "tuesday": [ 29, 7, 19, 24 ],
            "wednesday": [ 28, 6, 18, 23 ],
            "thursday": [ 27, 5, 17, 22 ],
            "saturday": [ 1, 9, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 192,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3176410119/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eremiterecords.bandcamp.com/album/natural-information',
          a_string: 'Natural Information by Joshua Abrams',
          rule: {
            "monday": [ 1, 9, 21, 26 ],
            "tuesday": [ 30, 8, 20, 25 ],
            "wednesday": [ 29, 7, 19, 24 ],
            "thursday": [ 28, 6, 18, 23 ],
            "saturday": [ 27, 5, 17, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 193,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1615864524/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://palmunit.bandcamp.com/album/hommage-jef-gilson',
          a_string: 'Hommage à Jef Gilson by Palm Unit',
          rule: {
            "monday": [ 27, 5, 17, 22 ],
            "tuesday": [ 1, 9, 21, 26 ],
            "wednesday": [ 30, 8, 20, 25 ],
            "thursday": [ 29, 7, 19, 24 ],
            "saturday": [ 28, 6, 18, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 194,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=207193141/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://edgetonerecords.bandcamp.com/album/thollems-traveling-sessions-with-abigail-alwin-and-piotr-michalowski',
          a_string: 'Thollem&#39;s Traveling Sessions with Abigail Alwin and Piotr Michalowski by Thollem McDonas',
          rule: {
            "monday": [ 28, 6, 18, 23 ],
            "tuesday": [ 27, 5, 17, 22 ],
            "wednesday": [ 1, 9, 21, 26 ],
            "thursday": [ 30, 8, 20, 25 ],
            "saturday": [ 29, 7, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 195,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3552579749/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thollem.bandcamp.com/album/duos-with-drummers-compilation',
          a_string: 'Duos With Drummers Compilation by Chase, Lund, Rivera, Robair, Treadway, Schonberg, Chacon, Wayne, Csendes, Ligeti',
          rule: {
            "monday": [ 29, 7, 19, 24 ],
            "tuesday": [ 28, 6, 18, 23 ],
            "wednesday": [ 27, 5, 17, 22 ],
            "thursday": [ 1, 9, 21, 26 ],
            "saturday": [ 30, 8, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 196,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3507100406/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://collectifspatule.bandcamp.com/album/colunia-live-soleils-bleus-digital-album',
          a_string: 'Colunia - Live@Soleils Bleus Digital Album by Collectif SPATULE',
          rule: {
            "monday": [ 1, 9, 21, 26 ],
            "tuesday": [ 30, 8, 20, 25 ],
            "wednesday": [ 29, 7, 19, 24 ],
            "thursday": [ 28, 6, 18, 23 ],
            "saturday": [ 2, 10, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 197,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=1716639791/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://music.erikfriedlander.com/album/artemisia',
          a_string: 'Artemisia by Erik Friedlander',
          rule: {
            "monday": [ 2, 10, 22, 27 ],
            "tuesday": [ 1, 9, 21, 26 ],
            "wednesday": [ 30, 8, 20, 25 ],
            "thursday": [ 29, 7, 19, 24 ],
            "saturday": [ 28, 6, 18, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 198,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=3656065569/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://music.erikfriedlander.com/album/rings',
          a_string: 'Rings by Erik Friedlander',
          rule: {
            "monday": [ 28, 6, 18, 23 ],
            "tuesday": [ 2, 10, 22, 27 ],
            "wednesday": [ 1, 9, 21, 26 ],
            "thursday": [ 30, 8, 20, 25 ],
            "saturday": [ 29, 7, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 199,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=595674653/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://intlanthem.bandcamp.com/album/kudu',
          a_string: 'Kudu by Anteloper',
          rule: {
            "monday": [ 29, 7, 19, 24 ],
            "tuesday": [ 28, 6, 18, 23 ],
            "wednesday": [ 2, 10, 22, 27 ],
            "thursday": [ 1, 9, 21, 26 ],
            "saturday": [ 30, 8, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 200,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=184532265/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://intlanthem.bandcamp.com/album/the-new-breed-deluxe-edition',
          a_string: 'The New Breed (Deluxe Edition) by Jeff Parker',
          rule: {
            "monday": [ 30, 8, 20, 25 ],
            "tuesday": [ 29, 7, 19, 24 ],
            "wednesday": [ 28, 6, 18, 23 ],
            "thursday": [ 2, 10, 22, 27 ],
            "saturday": [ 1, 9, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 201,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3801818489/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://intlanthem.bandcamp.com/album/alternate-moon-cycles',
          a_string: 'Alternate Moon Cycles by Rob Mazurek',
          rule: {
            "monday": [ 1, 9, 21, 26 ],
            "tuesday": [ 30, 8, 20, 25 ],
            "wednesday": [ 29, 7, 19, 24 ],
            "thursday": [ 28, 6, 18, 23 ],
            "saturday": [ 2, 10, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 202,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1443017017/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jefgilson.bandcamp.com/album/jef-gilson',
          a_string: 'Jef Gilson by Jef Gilson',
          rule: {
            "monday": [ 2, 10, 22, 27 ],
            "tuesday": [ 1, 9, 21, 26 ],
            "wednesday": [ 30, 8, 20, 25 ],
            "thursday": [ 29, 7, 19, 24 ],
            "saturday": [ 28, 6, 18, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 203,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3704093983/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jefgilson.bandcamp.com/album/archives',
          a_string: 'Archives by Jef Gilson',
          rule: {
            "monday": [ 29, 7, 19, 24 ],
            "tuesday": [ 3, 11, 23, 28 ],
            "wednesday": [ 2, 10, 22, 27 ],
            "thursday": [ 1, 9, 21, 26 ],
            "saturday": [ 30, 8, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 204,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2199448471/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jefgilson.bandcamp.com/album/gilson-et-malagasy',
          a_string: 'Gilson et Malagasy by Jef Gilson',
          rule: {
            "monday": [ 30, 8, 20, 25 ],
            "tuesday": [ 29, 7, 19, 24 ],
            "wednesday": [ 3, 11, 23, 28 ],
            "thursday": [ 2, 10, 22, 27 ],
            "saturday": [ 1, 9, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 205,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3662920709/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ernestorodrigues.bandcamp.com/album/for-cecil-taylor',
          a_string: 'For Cecil Taylor by New Thing Unit',
          rule: {
            "monday": [ 1, 9, 21, 26 ],
            "tuesday": [ 30, 8, 20, 25 ],
            "wednesday": [ 29, 7, 19, 24 ],
            "thursday": [ 3, 11, 23, 28 ],
            "saturday": [ 2, 10, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 206,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2057237705/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://brandonevans.bandcamp.com/album/solo-saxophone-x901',
          a_string: 'Solo Saxophone X901 by Brandon Evans',
          rule: {
            "monday": [ 2, 10, 22, 27 ],
            "tuesday": [ 1, 9, 21, 26 ],
            "wednesday": [ 30, 8, 20, 25 ],
            "thursday": [ 29, 7, 19, 24 ],
            "saturday": [ 3, 11, 23, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 207,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2537096297/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mattmitchell-timberne.bandcamp.com/album/f-rage',
          a_string: 'FØRAGE by Matt Mitchell',
          rule: {
            "monday": [ 3, 11, 23, 28 ],
            "tuesday": [ 2, 10, 22, 27 ],
            "wednesday": [ 1, 9, 21, 26 ],
            "thursday": [ 30, 8, 20, 25 ],
            "saturday": [ 29, 7, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 208,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1207650234/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thandintuli.bandcamp.com/album/exiled',
          a_string: 'Exiled by Thandi Ntuli',
          rule: {
            "monday": [ 29, 7, 19, 24 ],
            "tuesday": [ 3, 11, 23, 28 ],
            "wednesday": [ 2, 10, 22, 27 ],
            "thursday": [ 1, 9, 21, 26 ],
            "saturday": [ 30, 8, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 209,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3598785858/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lindasikhakhane.bandcamp.com/album/two-sides-one-mirror',
          a_string: 'Two Sides, One Mirror by Linda Sikhakhane',
          rule: {
            "monday": [ 30, 8, 20, 25 ],
            "tuesday": [ 29, 7, 19, 24 ],
            "wednesday": [ 3, 11, 23, 28 ],
            "thursday": [ 2, 10, 22, 27 ],
            "saturday": [ 1, 9, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 210,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4176142662/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://siyamakuzenisextet.bandcamp.com/album/out-of-this-world',
          a_string: 'Out Of This World by Siya Makuzeni',
          rule: {
            "monday": [ 2, 10, 22, 27 ],
            "tuesday": [ 1, 9, 21, 26 ],
            "wednesday": [ 30, 8, 20, 25 ],
            "thursday": [ 4, 12, 24, 29 ],
            "saturday": [ 3, 11, 23, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 211,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3271440558/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://idrisackamoorandthepyramids.bandcamp.com/album/an-angel-fell',
          a_string: 'An Angel Fell by Idris Ackamoor and the Pyramids',
          rule: {
            "monday": [ 3, 11, 23, 28 ],
            "tuesday": [ 2, 10, 22, 27 ],
            "wednesday": [ 1, 9, 21, 26 ],
            "thursday": [ 30, 8, 20, 25 ],
            "saturday": [ 4, 12, 24, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 212,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=923598507/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://idrisackamoor.bandcamp.com/album/centurian',
          a_string: 'CENTURIAN by Idris Ackamoor',
          rule: {
            "monday": [ 4, 12, 24, 29 ],
            "tuesday": [ 3, 11, 23, 28 ],
            "wednesday": [ 2, 10, 22, 27 ],
            "thursday": [ 1, 9, 21, 26 ],
            "saturday": [ 30, 8, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 213,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1414051275/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://idrisackamoor.bandcamp.com/album/idris-ackamoor-paris-quartet',
          a_string: 'Idris Ackamoor Paris Quartet by Idris Ackamoor',
          rule: {
            "monday": [ 30, 8, 20, 25 ],
            "tuesday": [ 4, 12, 24, 29 ],
            "wednesday": [ 3, 11, 23, 28 ],
            "thursday": [ 2, 10, 22, 27 ],
            "saturday": [ 1, 9, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 214,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=165167252/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://trevorwatts.bandcamp.com/album/no-fear',
          a_string: 'No Fear by John Stevens, Trevor Watts, Barry Guy',
          rule: {
            "monday": [ 1, 9, 21, 26 ],
            "tuesday": [ 30, 8, 20, 25 ],
            "wednesday": [ 4, 12, 24, 29 ],
            "thursday": [ 3, 11, 23, 28 ],
            "saturday": [ 2, 10, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 215,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3467860411/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://robbrown.bandcamp.com/album/rob-brown-juan-p-carletti-duo',
          a_string: 'Rob Brown Juan P Carletti Duo by Rob Brown and Juan P Carletti',
          rule: {
            "monday": [ 2, 10, 22, 27 ],
            "tuesday": [ 1, 9, 21, 26 ],
            "wednesday": [ 30, 8, 20, 25 ],
            "thursday": [ 4, 12, 24, 29 ],
            "saturday": [ 3, 11, 23, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 216,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2877333412/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://validrecords.bandcamp.com/album/masters-of-improvisation',
          a_string: 'Masters of Improvisation by Kidd Jordan, Alvin Fielder, Joel Futterman &amp;  Steve Swell',
          rule: {
            "monday": [ 3, 11, 23, 28 ],
            "tuesday": [ 2, 10, 22, 27 ],
            "wednesday": [ 1, 9, 21, 26 ],
            "thursday": [ 30, 8, 20, 25 ],
            "saturday": [ 4, 12, 24, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 217,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3515419127/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kamaalwilliams.bandcamp.com/album/the-return',
          a_string: 'The Return by Kamaal Williams',
          rule: {
            "monday": [ 5, 13, 25, 30 ],
            "tuesday": [ 4, 12, 24, 29 ],
            "wednesday": [ 3, 11, 23, 28 ],
            "thursday": [ 2, 10, 22, 27 ],
            "saturday": [ 1, 9, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 218,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2578133113/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ilusorecords.bandcamp.com/album/the-compass',
          a_string: 'The Compass by Álvaro Domene',
          rule: {
            "monday": [ 1, 9, 21, 26 ],
            "tuesday": [ 5, 13, 25, 30 ],
            "wednesday": [ 4, 12, 24, 29 ],
            "thursday": [ 3, 11, 23, 28 ],
            "saturday": [ 2, 10, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 219,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=840620847/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://peterevansmusic.bandcamp.com/album/weatherbird',
          a_string: 'Weatherbird by Cory Smythe &amp; Peter Evans',
          rule: {
            "monday": [ 2, 10, 22, 27 ],
            "tuesday": [ 1, 9, 21, 26 ],
            "wednesday": [ 5, 13, 25, 30 ],
            "thursday": [ 4, 12, 24, 29 ],
            "saturday": [ 3, 11, 23, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 220,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=863352611/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://joearmon-jones.bandcamp.com/album/starting-today',
          a_string: 'Starting Today by Joe Armon-Jones',
          rule: {
            "monday": [ 3, 11, 23, 28 ],
            "tuesday": [ 2, 10, 22, 27 ],
            "wednesday": [ 1, 9, 21, 26 ],
            "thursday": [ 5, 13, 25, 30 ],
            "saturday": [ 4, 12, 24, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 221,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=531781330/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://anthonypirog.bandcamp.com/album/duo',
          a_string: 'Duo by Anthony Pirog/Emre Kartari',
          rule: {
            "monday": [ 4, 12, 24, 29 ],
            "tuesday": [ 3, 11, 23, 28 ],
            "wednesday": [ 2, 10, 22, 27 ],
            "thursday": [ 1, 9, 21, 26 ],
            "saturday": [ 5, 13, 25, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 222,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1554656875/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://destination-out.bandcamp.com/album/corona',
          a_string: 'Corona by CECIL TAYLOR &amp; SUNNY MURRAY',
          rule: {
            "monday": [ 5, 13, 25, 30 ],
            "tuesday": [ 4, 12, 24, 29 ],
            "wednesday": [ 3, 11, 23, 28 ],
            "thursday": [ 2, 10, 22, 27 ],
            "saturday": [ 1, 9, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 223,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4172470766/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://don-cherry.bandcamp.com/album/home-boy-sister-out',
          a_string: 'Home Boy, Sister Out by Don Cherry',
          rule: {
            "monday": [ 1, 9, 21, 26 ],
            "tuesday": [ 5, 13, 25, 30 ],
            "wednesday": [ 4, 12, 24, 29 ],
            "thursday": [ 3, 11, 23, 28 ],
            "saturday": [ 2, 10, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 224,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=544986837/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://intlanthem.bandcamp.com/album/logos',
          a_string: 'Logos by Dos Santos',
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
          id: 225,
          user_id: 1,
          theme: 'Free Jazz',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4175182504/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thecontemporaryjazzquintet.bandcamp.com/album/location',
          a_string: 'Location by The Contemporary Jazz Quintet',
          rule: {
            "monday": [ 4, 12, 24, 29 ],
            "tuesday": [ 3, 11, 23, 28 ],
            "wednesday": [ 2, 10, 22, 27 ],
            "thursday": [ 6, 14, 26, 1 ],
            "saturday": [ 5, 13, 25, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('april_musics_id_seq', (SELECT MAX(id) FROM april_musics));");
    });
};
