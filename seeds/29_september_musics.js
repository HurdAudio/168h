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
          theme: 'Math Rock & Progressive Rock',
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
          theme: 'Math Rock & Progressive Rock',
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
          theme: 'Math Rock & Progressive Rock',
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
          theme: 'Math Rock & Progressive Rock',
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
          theme: 'Math Rock & Progressive Rock',
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
          theme: 'Math Rock & Progressive Rock',
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
          theme: 'Math Rock & Progressive Rock',
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
          theme: 'Math Rock & Progressive Rock',
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
          theme: 'Math Rock & Progressive Rock',
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
          theme: 'Math Rock & Progressive Rock',
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
          theme: 'Math Rock & Progressive Rock',
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
          theme: 'Math Rock & Progressive Rock',
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
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2282624741/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jackotheclock.bandcamp.com/album/night-loops',
          a_string: 'Night Loops by Jack O&#39; The Clock',
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
          id: 14,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=514041149/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bentknee.bandcamp.com/album/shiny-eyed-babies',
          a_string: 'Shiny Eyed Babies by Bent Knee',
          rule: {
            "monday": [ 4, 24, 2, 26 ],
            "tuesday": [ 3, 23, 1, 25 ],
            "wednesday": [ 7, 27, 5, 29 ],
            "thursday": [ 6, 26, 4, 28 ],
            "saturday": [ 5, 25, 3, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2259312047/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://benlevingroup.bandcamp.com/album/freak-machine',
          a_string: 'Freak Machine by Ben Levin Group',
          rule: {
            "monday": [ 5, 25, 3, 27 ],
            "tuesday": [ 4, 24, 2, 26 ],
            "wednesday": [ 3, 23, 1, 25 ],
            "thursday": [ 7, 27, 5, 29 ],
            "saturday": [ 6, 26, 4, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4141035187/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://teramelos.bandcamp.com/album/trash-generator',
          a_string: 'Trash Generator by Tera Melos',
          rule: {
            "monday": [ 6, 26, 4, 28 ],
            "tuesday": [ 5, 25, 3, 27 ],
            "wednesday": [ 4, 24, 2, 26 ],
            "thursday": [ 3, 23, 1, 25 ],
            "saturday": [ 7, 27, 5, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2727139504/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://vesselsband.bandcamp.com/album/the-great-distraction',
          a_string: 'The Great Distraction by Vessels',
          rule: {
            "monday": [ 7, 27, 5, 29 ],
            "tuesday": [ 6, 26, 4, 28 ],
            "wednesday": [ 5, 25, 3, 27 ],
            "thursday": [ 4, 24, 2, 26 ],
            "saturday": [ 3, 23, 1, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2517781939/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://totorro.bandcamp.com/album/come-to-mexico',
          a_string: 'Come To Mexico by Totorro',
          rule: {
            "monday": [ 3, 23, 1, 25 ],
            "tuesday": [ 7, 27, 5, 29 ],
            "wednesday": [ 6, 26, 4, 28 ],
            "thursday": [ 5, 25, 3, 27 ],
            "saturday": [ 4, 24, 2, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2895599953/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jackotheclock.bandcamp.com/album/repetitions-of-the-old-city-i',
          a_string: 'Repetitions of the Old City - I by Jack O&#39; The Clock',
          rule: {
            "monday": [ 4, 24, 2, 26 ],
            "tuesday": [ 3, 23, 1, 25 ],
            "wednesday": [ 7, 27, 5, 29 ],
            "thursday": [ 6, 26, 4, 28 ],
            "saturday": [ 5, 25, 3, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3005376859/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bigbigtrain.bandcamp.com/album/grimspound-hi-resolution-audio',
          a_string: 'Grimspound (hi resolution audio) by Big Big Train',
          rule: {
            "monday": [ 5, 25, 3, 27 ],
            "tuesday": [ 4, 24, 2, 26 ],
            "wednesday": [ 3, 23, 1, 25 ],
            "thursday": [ 7, 27, 5, 29 ],
            "saturday": [ 6, 26, 4, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1395941753/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://soen-sweden.bandcamp.com/album/lykaia',
          a_string: 'Lykaia by Soen',
          rule: {
            "monday": [ 7, 27, 5, 29 ],
            "tuesday": [ 6, 26, 4, 28 ],
            "wednesday": [ 5, 25, 3, 27 ],
            "thursday": [ 4, 24, 2, 26 ],
            "saturday": [ 8, 28, 6, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2976713978/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://beak.bandcamp.com/album/beak-2',
          a_string: 'BEAK&gt;&gt; by BEAK&gt;',
          rule: {
            "monday": [ 8, 28, 6, 30 ],
            "tuesday": [ 7, 27, 5, 29 ],
            "wednesday": [ 6, 26, 4, 28 ],
            "thursday": [ 5, 25, 3, 27 ],
            "saturday": [ 4, 24, 2, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3926561595/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://drokk.bandcamp.com/album/drokk-music-inspired-by-mega-city-one',
          a_string: 'Drokk: Music inspired by Mega-City One by Geoff Barrow and Ben Salisbury',
          rule: {
            "monday": [ 4, 24, 2, 26 ],
            "tuesday": [ 8, 28, 6, 30 ],
            "wednesday": [ 7, 27, 5, 29 ],
            "thursday": [ 6, 26, 4, 28 ],
            "saturday": [ 5, 25, 3, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2753656719/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://goldenteacher.bandcamp.com/album/bells-from-the-deep-end',
          a_string: 'Bells From The Deep End by Golden Teacher',
          rule: {
            "monday": [ 5, 25, 3, 27 ],
            "tuesday": [ 4, 24, 2, 26 ],
            "wednesday": [ 8, 28, 6, 30 ],
            "thursday": [ 7, 27, 5, 29 ],
            "saturday": [ 6, 26, 4, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3152595739/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://toe-music.bandcamp.com/album/hear-you',
          a_string: 'Hear You by toe',
          rule: {
            "monday": [ 6, 26, 4, 28 ],
            "tuesday": [ 5, 25, 3, 27 ],
            "wednesday": [ 4, 24, 2, 26 ],
            "thursday": [ 8, 28, 6, 30 ],
            "saturday": [ 7, 27, 5, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1026932213/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thistownneedsguns.bandcamp.com/album/disappointment-island',
          a_string: 'Disappointment Island by TTNG',
          rule: {
            "monday": [ 7, 27, 5, 29 ],
            "tuesday": [ 6, 26, 4, 28 ],
            "wednesday": [ 5, 25, 3, 27 ],
            "thursday": [ 4, 24, 2, 26 ],
            "saturday": [ 8, 28, 6, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3691745907/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://covetband.bandcamp.com/album/currents-ep',
          a_string: 'Currents EP by covet',
          rule: {
            "monday": [ 8, 28, 6, 30 ],
            "tuesday": [ 7, 27, 5, 29 ],
            "wednesday": [ 6, 26, 4, 28 ],
            "thursday": [ 5, 25, 3, 27 ],
            "saturday": [ 4, 24, 2, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2796246848/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://beholdtheelder.bandcamp.com/album/reflections-of-a-floating-world',
          a_string: 'Reflections of a Floating World by Elder',
          rule: {
            "monday": [ 5, 25, 3, 27 ],
            "tuesday": [ 9, 29, 7, 1 ],
            "wednesday": [ 8, 28, 6, 30 ],
            "thursday": [ 7, 27, 5, 29 ],
            "saturday": [ 6, 26, 4, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4268244820/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://profoundlorerecords.bandcamp.com/album/heartless',
          a_string: 'Heartless by PALLBEARER',
          rule: {
            "monday": [ 6, 26, 4, 28 ],
            "tuesday": [ 5, 25, 3, 27 ],
            "wednesday": [ 9, 29, 7, 1 ],
            "thursday": [ 8, 28, 6, 30 ],
            "saturday": [ 7, 27, 5, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1016358289/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://exeyeband.bandcamp.com/album/ex-eye',
          a_string: 'Ex Eye by Ex Eye',
          rule: {
            "monday": [ 7, 27, 5, 29 ],
            "tuesday": [ 6, 26, 4, 28 ],
            "wednesday": [ 5, 25, 3, 27 ],
            "thursday": [ 9, 29, 7, 1 ],
            "saturday": [ 8, 28, 6, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=119402848/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jackotheclock.bandcamp.com/album/outsider-songs',
          a_string: 'Outsider Songs by Jack O&#39; The Clock',
          rule: {
            "monday": [ 8, 28, 6, 30 ],
            "tuesday": [ 7, 27, 5, 29 ],
            "wednesday": [ 6, 26, 4, 28 ],
            "thursday": [ 5, 25, 3, 27 ],
            "saturday": [ 9, 29, 7, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3882342693/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wayfaringstrangers.bandcamp.com/album/warfaring-strangers-acid-nightmares',
          a_string: 'Warfaring Strangers: Acid Nightmares by Wayfaring Strangers',
          rule: {
            "monday": [ 9, 29, 7, 1 ],
            "tuesday": [ 8, 28, 6, 30 ],
            "wednesday": [ 7, 27, 5, 29 ],
            "thursday": [ 6, 26, 4, 28 ],
            "saturday": [ 5, 25, 3, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1686039003/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://flowersmustdie.bandcamp.com/album/kompost',
          a_string: 'Kompost by Flowers Must Die',
          rule: {
            "monday": [ 5, 25, 3, 27 ],
            "tuesday": [ 9, 29, 7, 1 ],
            "wednesday": [ 8, 28, 6, 30 ],
            "thursday": [ 7, 27, 5, 29 ],
            "saturday": [ 6, 26, 4, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1583846915/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://twinponies.bandcamp.com/album/twin-ponies',
          a_string: 'Twin Ponies by Twin Ponies',
          rule: {
            "monday": [ 6, 26, 4, 28 ],
            "tuesday": [ 5, 25, 3, 27 ],
            "wednesday": [ 9, 29, 7, 1 ],
            "thursday": [ 8, 28, 6, 30 ],
            "saturday": [ 7, 27, 5, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2535733799/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://horselords.bandcamp.com/album/hidden-cities',
          a_string: 'Hidden Cities by Horse Lords',
          rule: {
            "monday": [ 8, 28, 6, 30 ],
            "tuesday": [ 7, 27, 5, 29 ],
            "wednesday": [ 6, 26, 4, 28 ],
            "thursday": [ 10, 30, 8, 2 ],
            "saturday": [ 9, 29, 7, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2738203020/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://guerillatoss.bandcamp.com/album/eraser-stargazer',
          a_string: 'Eraser Stargazer by Guerilla Toss',
          rule: {
            "monday": [ 9, 29, 7, 1 ],
            "tuesday": [ 8, 28, 6, 30 ],
            "wednesday": [ 7, 27, 5, 29 ],
            "thursday": [ 6, 26, 4, 28 ],
            "saturday": [ 10, 30, 8, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3191779155/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://plini.bandcamp.com/album/sweet-nothings',
          a_string: 'Sweet Nothings by Plini',
          rule: {
            "monday": [ 10, 30, 8, 2 ],
            "tuesday": [ 9, 29, 7, 1 ],
            "wednesday": [ 8, 28, 6, 30 ],
            "thursday": [ 7, 27, 5, 29 ],
            "saturday": [ 6, 26, 4, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4132332380/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://intervalsmusic.bandcamp.com/album/the-shape-of-colour',
          a_string: 'The Shape of Colour by Intervals',
          rule: {
            "monday": [ 6, 26, 4, 28 ],
            "tuesday": [ 10, 30, 8, 2 ],
            "wednesday": [ 9, 29, 7, 1 ],
            "thursday": [ 8, 28, 6, 30 ],
            "saturday": [ 7, 27, 5, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2544212106/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://plini.bandcamp.com/album/handmade-cities',
          a_string: 'Handmade Cities by Plini',
          rule: {
            "monday": [ 7, 27, 5, 29 ],
            "tuesday": [ 6, 26, 4, 28 ],
            "wednesday": [ 10, 30, 8, 2 ],
            "thursday": [ 9, 29, 7, 1 ],
            "saturday": [ 8, 28, 6, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1540001085/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://vasudeva.bandcamp.com/album/no-clearance',
          a_string: 'No Clearance by Vasudeva',
          rule: {
            "monday": [ 8, 28, 6, 30 ],
            "tuesday": [ 7, 27, 5, 29 ],
            "wednesday": [ 6, 26, 4, 28 ],
            "thursday": [ 10, 30, 8, 2 ],
            "saturday": [ 9, 29, 7, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2333766195/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tideedit.bandcamp.com/album/foreign-languages',
          a_string: 'Foreign Languages by tide/edit',
          rule: {
            "monday": [ 9, 29, 7, 1 ],
            "tuesday": [ 8, 28, 6, 30 ],
            "wednesday": [ 7, 27, 5, 29 ],
            "thursday": [ 6, 26, 4, 28 ],
            "saturday": [ 10, 30, 8, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2432964530/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tomsstory.bandcamp.com/album/toms-story',
          a_string: 'Tom&#39;s Story by Tom&#39;s Story',
          rule: {
            "monday": [ 11, 1, 9, 3 ],
            "tuesday": [ 10, 30, 8, 2 ],
            "wednesday": [ 9, 29, 7, 1 ],
            "thursday": [ 8, 28, 6, 30 ],
            "saturday": [ 7, 27, 5, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2801189383/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lasersedge.bandcamp.com/album/agusa',
          a_string: 'Agusa by Agusa',
          rule: {
            "monday": [ 7, 27, 5, 29 ],
            "tuesday": [ 11, 1, 9, 3 ],
            "wednesday": [ 10, 30, 8, 2 ],
            "thursday": [ 9, 29, 7, 1 ],
            "saturday": [ 8, 28, 6, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3884739943/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hooffoot.bandcamp.com/album/hooffoot',
          a_string: 'Hooffoot by Hooffoot',
          rule: {
            "monday": [ 8, 28, 6, 30 ],
            "tuesday": [ 7, 27, 5, 29 ],
            "wednesday": [ 11, 1, 9, 3 ],
            "thursday": [ 10, 30, 8, 2 ],
            "saturday": [ 9, 29, 7, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3774446051/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://amplifier.bandcamp.com/album/trippin-with-dr-faustus',
          a_string: 'Trippin&#39; With Dr. Faustus by Amplifier',
          rule: {
            "monday": [ 9, 29, 7, 1 ],
            "tuesday": [ 8, 28, 6, 30 ],
            "wednesday": [ 7, 27, 5, 29 ],
            "thursday": [ 11, 1, 9, 3 ],
            "saturday": [ 10, 30, 8, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=789325349/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dtes.bandcamp.com/album/hereticsHeretics by Dream the Electric Sleep',
          a_string: '',
          rule: {
            "monday": [ 10, 30, 8, 2 ],
            "tuesday": [ 9, 29, 7, 1 ],
            "wednesday": [ 8, 28, 6, 30 ],
            "thursday": [ 7, 27, 5, 29 ],
            "saturday": [ 11, 1, 9, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2970790357/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://johnlancaster.bandcamp.com/album/phantom-moon',
          a_string: 'Phantom Moon by John Lancaster',
          rule: {
            "monday": [ 11, 1, 9, 3 ],
            "tuesday": [ 10, 30, 8, 2 ],
            "wednesday": [ 9, 29, 7, 1 ],
            "thursday": [ 8, 28, 6, 30 ],
            "saturday": [ 7, 27, 5, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2755053974/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://knifeworld.bandcamp.com/album/buried-alone-tales-of-crushing-defeat',
          a_string: 'Buried Alone: Tales Of Crushing Defeat by Knifeworld',
          rule: {
            "monday": [ 7, 27, 5, 29 ],
            "tuesday": [ 11, 1, 9, 3 ],
            "wednesday": [ 10, 30, 8, 2 ],
            "thursday": [ 9, 29, 7, 1 ],
            "saturday": [ 8, 28, 6, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2383623109/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mathcoreindex.bandcamp.com/album/volume-4',
          a_string: 'Volume 4 by Mathcore Index',
          rule: {
            "monday": [ 9, 29, 7, 1 ],
            "tuesday": [ 8, 28, 6, 30 ],
            "wednesday": [ 12, 2, 10, 4 ],
            "thursday": [ 11, 1, 9, 3 ],
            "saturday": [ 10, 30, 8, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=1485278688/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://flatearthsocietyuk.com/album/sleep-less',
          a_string: 'Sleep Less by FES // Exploder',
          rule: {
            "monday": [ 10, 30, 8, 2 ],
            "tuesday": [ 9, 29, 7, 1 ],
            "wednesday": [ 8, 28, 6, 30 ],
            "thursday": [ 12, 2, 10, 4 ],
            "saturday": [ 11, 1, 9, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=265922236/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thespeedofsoundinseawater.bandcamp.com/album/first-contact',
          a_string: 'First Contact by The Speed of Sound in Seawater',
          rule: {
            "monday": [ 11, 1, 9, 3 ],
            "tuesday": [ 10, 30, 8, 2 ],
            "wednesday": [ 9, 29, 7, 1 ],
            "thursday": [ 8, 28, 6, 30 ],
            "saturday": [ 12, 2, 10, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3972089070/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://seriousbeak.bandcamp.com/album/ankaa',
          a_string: 'Ankaa by Serious Beak',
          rule: {
            "monday": [ 12, 2, 10, 4 ],
            "tuesday": [ 11, 1, 9, 3 ],
            "wednesday": [ 10, 30, 8, 2 ],
            "thursday": [ 9, 29, 7, 1 ],
            "saturday": [ 8, 28, 6, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=483534004/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hashshashin.bandcamp.com/album/nihsahshsah',
          a_string: 'nihsahshsaH by Hashshashin',
          rule: {
            "monday": [ 8, 28, 6, 30 ],
            "tuesday": [ 12, 2, 10, 4 ],
            "wednesday": [ 11, 1, 9, 3 ],
            "thursday": [ 10, 30, 8, 2 ],
            "saturday": [ 9, 29, 7, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=2860962436/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://downloads.webofmimicry.com/album/the-system-of-antichrist-bereshith',
          a_string: 'THE SYSTEM OF ANTICHRIST / Bereshith by Secret Chiefs 3',
          rule: {
            "monday": [ 9, 29, 7, 1 ],
            "tuesday": [ 8, 28, 6, 30 ],
            "wednesday": [ 12, 2, 10, 4 ],
            "thursday": [ 11, 1, 9, 3 ],
            "saturday": [ 10, 30, 8, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3261200053/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kiln-audio.bandcamp.com/album/ampday',
          a_string: 'Ampday by KILN',
          rule: {
            "monday": [ 10, 30, 8, 2 ],
            "tuesday": [ 9, 29, 7, 1 ],
            "wednesday": [ 8, 28, 6, 30 ],
            "thursday": [ 12, 2, 10, 4 ],
            "saturday": [ 11, 1, 9, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2712720927/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://teramelos.bandcamp.com/album/zoo-weather',
          a_string: 'Zoo Weather by Tera Melos',
          rule: {
            "monday": [ 12, 2, 10, 4 ],
            "tuesday": [ 11, 1, 9, 3 ],
            "wednesday": [ 10, 30, 8, 2 ],
            "thursday": [ 9, 29, 7, 1 ],
            "saturday": [ 13, 3, 11, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1240266293/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bygones.bandcamp.com/album/by',
          a_string: 'by- by bygones',
          rule: {
            "monday": [ 13, 3, 11, 5 ],
            "tuesday": [ 12, 2, 10, 4 ],
            "wednesday": [ 11, 1, 9, 3 ],
            "thursday": [ 10, 30, 8, 2 ],
            "saturday": [ 9, 29, 7, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2506291823/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://invalids.bandcamp.com/album/eunoia-2',
          a_string: 'Eunoia by Invalids',
          rule: {
            "monday": [ 9, 29, 7, 1 ],
            "tuesday": [ 13, 3, 11, 5 ],
            "wednesday": [ 12, 2, 10, 4 ],
            "thursday": [ 11, 1, 9, 3 ],
            "saturday": [ 10, 30, 8, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1641112215/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://birdsurgeon.bandcamp.com/album/vanishings',
          a_string: 'Vanishings by Bird Surgeon',
          rule: {
            "monday": [ 10, 30, 8, 2 ],
            "tuesday": [ 9, 29, 7, 1 ],
            "wednesday": [ 13, 3, 11, 5 ],
            "thursday": [ 12, 2, 10, 4 ],
            "saturday": [ 11, 1, 9, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1408460894/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://invalids.bandcamp.com/album/strengths',
          a_string: 'Strengths by Invalids',
          rule: {
            "monday": [ 11, 1, 9, 3 ],
            "tuesday": [ 10, 30, 8, 2 ],
            "wednesday": [ 9, 29, 7, 1 ],
            "thursday": [ 13, 3, 11, 5 ],
            "saturday": [ 12, 2, 10, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1179762531/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://artascatharsis.bandcamp.com/album/3',
          a_string: '3 by SEIMS',
          rule: {
            "monday": [ 12, 2, 10, 4 ],
            "tuesday": [ 11, 1, 9, 3 ],
            "wednesday": [ 10, 30, 8, 2 ],
            "thursday": [ 9, 29, 7, 1 ],
            "saturday": [ 13, 3, 11, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=643374385/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://protestthehero.bandcamp.com/album/volition-instrumental',
          a_string: 'Volition (Instrumental) by Protest the Hero',
          rule: {
            "monday": [ 13, 3, 11, 5 ],
            "tuesday": [ 12, 2, 10, 4 ],
            "wednesday": [ 11, 1, 9, 3 ],
            "thursday": [ 10, 30, 8, 2 ],
            "saturday": [ 9, 29, 7, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3662930337/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://moebiusmetal.bandcamp.com/album/hybris',
          a_string: 'Hybris by Moebius',
          rule: {
            "monday": [ 10, 30, 8, 2 ],
            "tuesday": [ 14, 4, 12, 6 ],
            "wednesday": [ 13, 3, 11, 5 ],
            "thursday": [ 12, 2, 10, 4 ],
            "saturday": [ 11, 1, 9, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3191779155/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://plini.bandcamp.com/album/sweet-nothings',
          a_string: 'Sweet Nothings by Plini',
          rule: {
            "monday": [ 11, 1, 9, 3 ],
            "tuesday": [ 10, 30, 8, 2 ],
            "wednesday": [ 14, 4, 12, 6 ],
            "thursday": [ 13, 3, 11, 5 ],
            "saturday": [ 12, 2, 10, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4132332380/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://intervalsmusic.bandcamp.com/album/the-shape-of-colour',
          a_string: 'The Shape of Colour by Intervals',
          rule: {
            "monday": [ 12, 2, 10, 4 ],
            "tuesday": [ 11, 1, 9, 3 ],
            "wednesday": [ 10, 30, 8, 2 ],
            "thursday": [ 14, 4, 12, 6 ],
            "saturday": [ 13, 3, 11, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=97896603/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://polarisaus.bandcamp.com/album/the-mortal-coil',
          a_string: 'The Mortal Coil by Polaris',
          rule: {
            "monday": [ 13, 3, 11, 5 ],
            "tuesday": [ 12, 2, 10, 4 ],
            "wednesday": [ 11, 1, 9, 3 ],
            "thursday": [ 10, 30, 8, 2 ],
            "saturday": [ 14, 4, 12, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1254800922/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hella.bandcamp.com/album/church-gone-wild-chirpin-hard',
          a_string: 'Church Gone Wild/Chirpin Hard by Hella',
          rule: {
            "monday": [ 14, 4, 12, 6 ],
            "tuesday": [ 13, 3, 11, 5 ],
            "wednesday": [ 12, 2, 10, 4 ],
            "thursday": [ 11, 1, 9, 3 ],
            "saturday": [ 10, 30, 8, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=594277877/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zachhill.bandcamp.com/album/face-tat',
          a_string: 'FACE TAT by Zach Hill',
          rule: {
            "monday": [ 10, 30, 8, 2 ],
            "tuesday": [ 14, 4, 12, 6 ],
            "wednesday": [ 13, 3, 11, 5 ],
            "thursday": [ 12, 2, 10, 4 ],
            "saturday": [ 11, 1, 9, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3472867358/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://teramelos.bandcamp.com/album/patagonian-rats',
          a_string: 'Patagonian Rats by Tera Melos',
          rule: {
            "monday": [ 11, 1, 9, 3 ],
            "tuesday": [ 10, 30, 8, 2 ],
            "wednesday": [ 14, 4, 12, 6 ],
            "thursday": [ 13, 3, 11, 5 ],
            "saturday": [ 12, 2, 10, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4211984975/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mildhighclub.bandcamp.com/album/skiptracing',
          a_string: 'Skiptracing by Mild High Club',
          rule: {
            "monday": [ 13, 3, 11, 5 ],
            "tuesday": [ 12, 2, 10, 4 ],
            "wednesday": [ 11, 1, 9, 3 ],
            "thursday": [ 15, 5, 13, 7 ],
            "saturday": [ 14, 4, 12, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1937278011/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pontiak.bandcamp.com/album/living',
          a_string: 'Living by Pontiak',
          rule: {
            "monday": [ 14, 4, 12, 6 ],
            "tuesday": [ 13, 3, 11, 5 ],
            "wednesday": [ 12, 2, 10, 4 ],
            "thursday": [ 11, 1, 9, 3 ],
            "saturday": [ 15, 5, 13, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=953164322/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dustrider.bandcamp.com/album/event-horizon',
          a_string: 'Event Horizon by Dustrider',
          rule: {
            "monday": [ 15, 5, 13, 7 ],
            "tuesday": [ 14, 4, 12, 6 ],
            "wednesday": [ 13, 3, 11, 5 ],
            "thursday": [ 12, 2, 10, 4 ],
            "saturday": [ 11, 1, 9, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3540716909/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cleft.bandcamp.com/album/whale-bone',
          a_string: 'Whale Bone by Cleft',
          rule: {
            "monday": [ 11, 1, 9, 3 ],
            "tuesday": [ 15, 5, 13, 7 ],
            "wednesday": [ 14, 4, 12, 6 ],
            "thursday": [ 13, 3, 11, 5 ],
            "saturday": [ 12, 2, 10, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1381174505/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://vasquez.bandcamp.com/album/ep426',
          a_string: 'EP426 by VASQUEZ',
          rule: {
            "monday": [ 12, 2, 10, 4 ],
            "tuesday": [ 11, 1, 9, 3 ],
            "wednesday": [ 15, 5, 13, 7 ],
            "thursday": [ 14, 4, 12, 6 ],
            "saturday": [ 13, 3, 11, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=215104950/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cleft.bandcamp.com/album/bosh',
          a_string: 'BOSH! by Cleft',
          rule: {
            "monday": [ 13, 3, 11, 5 ],
            "tuesday": [ 12, 2, 10, 4 ],
            "wednesday": [ 11, 1, 9, 3 ],
            "thursday": [ 15, 5, 13, 7 ],
            "saturday": [ 14, 4, 12, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3425333302/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://leftysdeceiver.bandcamp.com/album/ld101',
          a_string: 'LD101 by Lefty&#39;s Deceiver',
          rule: {
            "monday": [ 14, 4, 12, 6 ],
            "tuesday": [ 13, 3, 11, 5 ],
            "wednesday": [ 12, 2, 10, 4 ],
            "thursday": [ 11, 1, 9, 3 ],
            "saturday": [ 15, 5, 13, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2297540464/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dentapes.bandcamp.com/album/im-wigging-out-but-i-feel-patient',
          a_string: 'I&#39;m Wigging Out But I Feel Patient by Gabriel Delicious',
          rule: {
            "monday": [ 16, 6, 14, 8 ],
            "tuesday": [ 15, 5, 13, 7 ],
            "wednesday": [ 14, 4, 12, 6 ],
            "thursday": [ 13, 3, 11, 5 ],
            "saturday": [ 12, 2, 10, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=432676080/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dentapes.bandcamp.com/album/dusty',
          a_string: 'Dusty by Dusty',
          rule: {
            "monday": [ 12, 2, 10, 4 ],
            "tuesday": [ 16, 6, 14, 8 ],
            "wednesday": [ 15, 5, 13, 7 ],
            "thursday": [ 14, 4, 12, 6 ],
            "saturday": [ 13, 3, 11, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2773548801/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://direwolves-slr.bandcamp.com/album/earthquake-country',
          a_string: 'Earthquake Country by Dire Wolves (Just Exactly Perfect Sisters Band)',
          rule: {
            "monday": [ 13, 3, 11, 5 ],
            "tuesday": [ 12, 2, 10, 4 ],
            "wednesday": [ 16, 6, 14, 8 ],
            "thursday": [ 15, 5, 13, 7 ],
            "saturday": [ 14, 4, 12, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1515583213/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://planktonwat-slr.bandcamp.com/album/hidden-path',
          a_string: 'Hidden Path by Plankton Wat',
          rule: {
            "monday": [ 14, 4, 12, 6 ],
            "tuesday": [ 13, 3, 11, 5 ],
            "wednesday": [ 12, 2, 10, 4 ],
            "thursday": [ 16, 6, 14, 8 ],
            "saturday": [ 15, 5, 13, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=920816937/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thehatchet.bandcamp.com/album/planetary-space-child',
          a_string: 'PLANETARY SPACE CHILD by RUBY THE HATCHET',
          rule: {
            "monday": [ 15, 5, 13, 7 ],
            "tuesday": [ 14, 4, 12, 6 ],
            "wednesday": [ 13, 3, 11, 5 ],
            "thursday": [ 12, 2, 10, 4 ],
            "saturday": [ 16, 6, 14, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1361123475/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://piglet.bandcamp.com/album/lava-land',
          a_string: 'lava land by piglet',
          rule: {
            "monday": [ 16, 6, 14, 8 ],
            "tuesday": [ 15, 5, 13, 7 ],
            "wednesday": [ 14, 4, 12, 6 ],
            "thursday": [ 13, 3, 11, 5 ],
            "saturday": [ 12, 2, 10, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1476472941/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sawce.bandcamp.com/album/sawce-ep',
          a_string: 'SAWCE EP by SAWCE',
          rule: {
            "monday": [ 12, 2, 10, 4 ],
            "tuesday": [ 16, 6, 14, 8 ],
            "wednesday": [ 15, 5, 13, 7 ],
            "thursday": [ 14, 4, 12, 6 ],
            "saturday": [ 13, 3, 11, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=552970852/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fesband.bandcamp.com/album/you-do-you',
          a_string: 'You Do You by FES',
          rule: {
            "monday": [ 14, 4, 12, 6 ],
            "tuesday": [ 13, 3, 11, 5 ],
            "wednesday": [ 17, 7, 15, 9 ],
            "thursday": [ 16, 6, 14, 8 ],
            "saturday": [ 15, 5, 13, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1594680436/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wildthrone.bandcamp.com/album/blood-maker',
          a_string: 'Blood Maker by Wild Throne',
          rule: {
            "monday": [ 15, 5, 13, 8 ],
            "tuesday": [ 14, 4, 12, 6 ],
            "wednesday": [ 13, 3, 11, 5 ],
            "thursday": [ 17, 7, 15, 9 ],
            "saturday": [ 16, 6, 14, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2469060273/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mmim.bandcamp.com/album/dork-soul',
          a_string: 'Dork Soul by meet me in montauk',
          rule: {
            "monday": [ 16, 6, 14, 8 ],
            "tuesday": [ 15, 5, 13, 8 ],
            "wednesday": [ 14, 4, 12, 6 ],
            "thursday": [ 13, 3, 11, 5 ],
            "saturday": [ 17, 7, 15, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2893156702/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://realsportsboys.bandcamp.com/album/demon-daze',
          a_string: 'demon daze by sports.',
          rule: {
            "monday": [ 17, 7, 15, 9 ],
            "tuesday": [ 16, 6, 14, 8 ],
            "wednesday": [ 15, 5, 13, 8 ],
            "thursday": [ 14, 4, 12, 6 ],
            "saturday": [ 13, 3, 11, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=593645822/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mammothprog.bandcamp.com/album/progenies-2012-2016-compilation',
          a_string: 'Progenies (2012-2016 Compilation) by Mammoth',
          rule: {
            "monday": [ 13, 3, 11, 5 ],
            "tuesday": [ 17, 7, 15, 9 ],
            "wednesday": [ 16, 6, 14, 8 ],
            "thursday": [ 15, 5, 13, 8 ],
            "saturday": [ 14, 4, 12, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=465682061/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mammothprog.bandcamp.com/album/deviations',
          a_string: 'Deviations by Mammoth',
          rule: {
            "monday": [ 14, 4, 12, 6 ],
            "tuesday": [ 13, 3, 11, 5 ],
            "wednesday": [ 17, 7, 15, 9 ],
            "thursday": [ 16, 6, 14, 8 ],
            "saturday": [ 15, 5, 13, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3031709378/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mammothprog.bandcamp.com/album/innate',
          a_string: 'Innate by Mammoth',
          rule: {
            "monday": [ 15, 5, 13, 8 ],
            "tuesday": [ 14, 4, 12, 6 ],
            "wednesday": [ 13, 3, 11, 5 ],
            "thursday": [ 17, 7, 15, 9 ],
            "saturday": [ 16, 6, 14, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=288637167/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://psychiclemon.bandcamp.com/album/frequency-rhythm-distortion-delay',
          a_string: 'Frequency Rhythm Distortion Delay by Psychic Lemon',
          rule: {
            "monday": [ 17, 7, 15, 9 ],
            "tuesday": [ 16, 6, 14, 9 ],
            "wednesday": [ 15, 5, 13, 7 ],
            "thursday": [ 14, 4, 12, 6 ],
            "saturday": [ 18, 8, 16, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1732794380/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://psychiclemon.bandcamp.com/album/psychic-lemon',
          a_string: 'Psychic Lemon by Psychic Lemon',
          rule: {
            "monday": [ 18, 8, 16, 10 ],
            "tuesday": [ 17, 7, 15, 9 ],
            "wednesday": [ 16, 6, 14, 9 ],
            "thursday": [ 15, 5, 13, 7 ],
            "saturday": [ 14, 4, 12, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3900460578/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sleepingpeople.bandcamp.com/album/sleeping-people',
          a_string: 'Sleeping People by Sleeping People',
          rule: {
            "monday": [ 14, 4, 12, 6 ],
            "tuesday": [ 18, 8, 16, 10 ],
            "wednesday": [ 17, 7, 15, 9 ],
            "thursday": [ 16, 6, 14, 9 ],
            "saturday": [ 15, 5, 13, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('september_musics_id_seq', (SELECT MAX(id) FROM september_musics));");
    });
};
