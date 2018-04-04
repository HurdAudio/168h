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
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3585669366/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://teramelos.bandcamp.com/album/drugs-complex',
          a_string: 'Drugs / Complex by Tera Melos',
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
        },
        {
          id: 94,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=145764687/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hella.bandcamp.com/album/theres-no-666-in-outer-space',
          a_string: 'There&#39;s No 666 In Outer Space by Hella',
          rule: {
            "monday": [ 15, 5, 13, 7 ],
            "tuesday": [ 14, 4, 12, 6 ],
            "wednesday": [ 18, 8, 16, 10 ],
            "thursday": [ 17, 7, 15, 9 ],
            "saturday": [ 16, 6, 14, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=399891782/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nometal.bandcamp.com/album/ours',
          a_string: 'ours by no metal in this battle',
          rule: {
            "monday": [ 16, 6, 14, 9 ],
            "tuesday": [ 15, 5, 13, 7 ],
            "wednesday": [ 14, 4, 12, 6 ],
            "thursday": [ 18, 8, 16, 10 ],
            "saturday": [ 17, 7, 15, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2355000521/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://perudo.bandcamp.com/album/2008-2012',
          a_string: '#2008-2012# by perudo beats',
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
          id: 97,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2784776990/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://galahad1.bandcamp.com/album/seas-of-change',
          a_string: 'Seas of Change by GALAHAD',
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
          id: 98,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3741607037/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://silentisland.bandcamp.com/album/equator',
          a_string: 'Equator by Silent Island',
          rule: {
            "monday": [ 15, 5, 13, 7 ],
            "tuesday": [ 19, 9, 17, 11 ],
            "wednesday": [ 18, 8, 16, 10 ],
            "thursday": [ 17, 7, 15, 10 ],
            "saturday": [ 16, 6, 14, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2271191775/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://silentisland.bandcamp.com/album/fall-of-oceans',
          a_string: 'Fall of Oceans by Silent Island',
          rule: {
            "monday": [ 16, 6, 14, 8 ],
            "tuesday": [ 15, 5, 13, 7 ],
            "wednesday": [ 19, 9, 17, 11 ],
            "thursday": [ 18, 8, 16, 10 ],
            "saturday": [ 17, 7, 15, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3922154208/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://diostrio.bandcamp.com/album/ii',
          a_string: 'II by dios trio',
          rule: {
            "monday": [ 17, 7, 15, 10 ],
            "tuesday": [ 16, 6, 14, 8 ],
            "wednesday": [ 15, 5, 13, 7 ],
            "thursday": [ 19, 9, 17, 11 ],
            "saturday": [ 18, 8, 16, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1579938297/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://teramelos.bandcamp.com/album/untitled-album',
          a_string: '(untitled album) by Tera Melos',
          rule: {
            "monday": [ 18, 8, 16, 10 ],
            "tuesday": [ 17, 7, 15, 10 ],
            "wednesday": [ 16, 6, 14, 8 ],
            "thursday": [ 15, 5, 13, 7 ],
            "saturday": [ 19, 9, 17, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=1372923139/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://superstardestroyer.co.uk/album/zero-worship',
          a_string: 'Zero Worship by Young Legionnaire',
          rule: {
            "monday": [ 19, 9, 17, 11 ],
            "tuesday": [ 18, 8, 16, 10 ],
            "wednesday": [ 17, 7, 15, 10 ],
            "thursday": [ 16, 6, 14, 8 ],
            "saturday": [ 15, 5, 13, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2164423763/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://talkingpoints.bandcamp.com/album/superposition',
          a_string: 'Superposition by Talking Points',
          rule: {
            "monday": [ 15, 5, 13, 7 ],
            "tuesday": [ 19, 9, 17, 11 ],
            "wednesday": [ 18, 8, 16, 10 ],
            "thursday": [ 17, 7, 15, 10 ],
            "saturday": [ 16, 6, 14, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1840296483/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://talkingpoints.bandcamp.com/album/leonard',
          a_string: 'Leonard by Talking Points',
          rule: {
            "monday": [ 16, 6, 14, 8 ],
            "tuesday": [ 15, 5, 13, 7 ],
            "wednesday": [ 19, 9, 17, 11 ],
            "thursday": [ 18, 8, 16, 10 ],
            "saturday": [ 17, 7, 15, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3502005287/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://claudespeeedmu.bandcamp.com/album/infinity-ultra',
          a_string: 'Infinity Ultra by Claude Speeed',
          rule: {
            "monday": [ 18, 8, 16, 11 ],
            "tuesday": [ 17, 7, 15, 9 ],
            "wednesday": [ 16, 6, 14, 8 ],
            "thursday": [ 20, 10, 18, 12 ],
            "saturday": [ 19, 9, 17, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1858548923/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dialeto.bandcamp.com/album/bart-k-in-rock',
          a_string: 'Bartók in Rock by Dialeto',
          rule: {
            "monday": [ 19, 9, 17, 11 ],
            "tuesday": [ 18, 8, 16, 11 ],
            "wednesday": [ 17, 7, 15, 9 ],
            "thursday": [ 16, 6, 14, 8 ],
            "saturday": [ 20, 10, 18, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2061777484/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://progshinerecords.bandcamp.com/album/le-a-en-vivo',
          a_string: 'Leña!!! En Vivo by El Trio',
          rule: {
            "monday": [ 20, 10, 18, 12 ],
            "tuesday": [ 19, 9, 17, 11 ],
            "wednesday": [ 18, 8, 16, 11 ],
            "thursday": [ 17, 7, 15, 9 ],
            "saturday": [ 16, 6, 14, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3092253416/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rodrigosanmartin.bandcamp.com/album/the-veil-is-broken-iii-coming-of-age',
          a_string: 'The Veil is Broken III: Coming of Age by Rodrigo San Martín',
          rule: {
            "monday": [ 16, 6, 14, 8 ],
            "tuesday": [ 20, 10, 18, 12 ],
            "wednesday": [ 19, 9, 17, 11 ],
            "thursday": [ 18, 8, 16, 11 ],
            "saturday": [ 17, 7, 15, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3121522144/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hollowran.bandcamp.com/album/thanks-your-welcome',
          a_string: 'Thanks Your Welcome by Hollow Ran',
          rule: {
            "monday": [ 17, 7, 15, 9 ],
            "tuesday": [ 16, 6, 14, 8 ],
            "wednesday": [ 20, 10, 18, 12 ],
            "thursday": [ 19, 9, 17, 11 ],
            "saturday": [ 18, 8, 16, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3818773844/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://themostbandct.bandcamp.com/album/important-things',
          a_string: 'Important Things by The Most',
          rule: {
            "monday": [ 18, 8, 16, 11 ],
            "tuesday": [ 17, 7, 15, 9 ],
            "wednesday": [ 16, 6, 14, 8 ],
            "thursday": [ 20, 10, 18, 12 ],
            "saturday": [ 19, 9, 17, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=607442058/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://whynona.bandcamp.com/album/ive-had-this-exact-dream-before',
          a_string: 'I&#39;ve Had This Exact Dream Before by Why Nona',
          rule: {
            "monday": [ 19, 9, 17, 11 ],
            "tuesday": [ 18, 8, 16, 11 ],
            "wednesday": [ 17, 7, 15, 9 ],
            "thursday": [ 16, 6, 14, 8 ],
            "saturday": [ 20, 10, 18, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=226157626/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://elephant-gym.bandcamp.com/album/work',
          a_string: 'Work by Elephant Gym',
          rule: {
            "monday": [ 21, 11, 19, 13 ],
            "tuesday": [ 20, 10, 18, 12 ],
            "wednesday": [ 19, 9, 17, 12 ],
            "thursday": [ 18, 8, 16, 10 ],
            "saturday": [ 17, 7, 15, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4131584606/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wobbler.bandcamp.com/album/from-silence-to-somewhere',
          a_string: 'From Silence to Somewhere by Wobbler',
          rule: {
            "monday": [ 17, 7, 15, 9 ],
            "tuesday": [ 21, 11, 19, 13 ],
            "wednesday": [ 20, 10, 18, 12 ],
            "thursday": [ 19, 9, 17, 12 ],
            "saturday": [ 18, 8, 16, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=881455537/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://elephant-gym.bandcamp.com/album/angle',
          a_string: 'Angle by Elephant Gym',
          rule: {
            "monday": [ 18, 8, 16, 10 ],
            "tuesday": [ 17, 7, 15, 9 ],
            "wednesday": [ 21, 11, 19, 13 ],
            "thursday": [ 20, 10, 18, 12 ],
            "saturday": [ 19, 9, 17, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1541339509/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pianosbecometheteeth.bandcamp.com/album/wait-for-love',
          a_string: 'Wait For Love by Pianos Become The Teeth',
          rule: {
            "monday": [ 19, 9, 17, 12 ],
            "tuesday": [ 18, 8, 16, 10 ],
            "wednesday": [ 17, 7, 15, 9 ],
            "thursday": [ 21, 11, 19, 13 ],
            "saturday": [ 20, 10, 18, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3408776844/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://welostthesea.bandcamp.com/album/departure-songs',
          a_string: 'Departure Songs by We Lost The Sea',
          rule: {
            "monday": [ 20, 10, 18, 12 ],
            "tuesday": [ 19, 9, 17, 12 ],
            "wednesday": [ 18, 8, 16, 10 ],
            "thursday": [ 17, 7, 15, 9 ],
            "saturday": [ 21, 11, 19, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=247730674/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://seasofyears.bandcamp.com/album/the-ever-shifting-fields',
          a_string: 'The Ever Shifting Fields by Seas of Years',
          rule: {
            "monday": [ 21, 11, 19, 13 ],
            "tuesday": [ 20, 10, 18, 12 ],
            "wednesday": [ 19, 9, 17, 12 ],
            "thursday": [ 18, 8, 16, 10 ],
            "saturday": [ 17, 7, 15, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3024617518/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://progshinerecords.bandcamp.com/album/dveri-dveri',
          a_string: 'Dveri! Dveri! by Orgia Pravednikov',
          rule: {
            "monday": [ 17, 7, 15, 9 ],
            "tuesday": [ 21, 11, 19, 13 ],
            "wednesday": [ 20, 10, 18, 12 ],
            "thursday": [ 19, 9, 17, 12 ],
            "saturday": [ 18, 8, 16, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2087303390/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://progshinerecords.bandcamp.com/album/oglashennyye-izydite',
          a_string: 'Oglashennyye Izydite by Orgia Pravednikov',
          rule: {
            "monday": [ 19, 9, 17, 11 ],
            "tuesday": [ 18, 8, 16, 10 ],
            "wednesday": [ 22, 12, 20, 14 ],
            "thursday": [ 21, 11, 19, 13 ],
            "saturday": [ 20, 10, 18, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4039095505/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://progshinerecords.bandcamp.com/album/nigredo',
          a_string: 'Nigredo by Sergey Kalugin',
          rule: {
            "monday": [ 20, 10, 18, 13 ],
            "tuesday": [ 19, 9, 17, 11 ],
            "wednesday": [ 18, 8, 16, 10 ],
            "thursday": [ 22, 12, 20, 14 ],
            "saturday": [ 21, 11, 19, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=33087511/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theeffects.bandcamp.com/album/eyes-to-the-light',
          a_string: 'Eyes to the Light by the EFFECTS',
          rule: {
            "monday": [ 21, 11, 19, 13 ],
            "tuesday": [ 20, 10, 18, 13 ],
            "wednesday": [ 19, 9, 17, 11 ],
            "thursday": [ 18, 8, 16, 10 ],
            "saturday": [ 22, 12, 20, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=664087412/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fatherdaughterrecords.bandcamp.com/album/uncontrollable-salvation',
          a_string: 'Uncontrollable Salvation by Pardoner',
          rule: {
            "monday": [ 22, 12, 20, 14 ],
            "tuesday": [ 21, 11, 19, 13 ],
            "wednesday": [ 20, 10, 18, 13 ],
            "thursday": [ 19, 9, 17, 11 ],
            "saturday": [ 18, 8, 16, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1179407136/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://perturbator.bandcamp.com/album/new-model',
          a_string: 'New Model by PERTURBATOR',
          rule: {
            "monday": [ 18, 8, 16, 10 ],
            "tuesday": [ 22, 12, 20, 14 ],
            "wednesday": [ 21, 11, 19, 13 ],
            "thursday": [ 20, 10, 18, 13 ],
            "saturday": [ 19, 9, 17, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3475887367/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aquaserge.bandcamp.com/album/laisse-a-tre',
          a_string: 'laisse ça être by Aquaserge',
          rule: {
            "monday": [ 19, 9, 17, 11 ],
            "tuesday": [ 18, 8, 16, 10 ],
            "wednesday": [ 22, 12, 20, 14 ],
            "thursday": [ 21, 11, 19, 13 ],
            "saturday": [ 20, 10, 18, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3373086101/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lasersedge.bandcamp.com/album/vision-and-ageless-light',
          a_string: 'Vision  And Ageless Light by Eye',
          rule: {
            "monday": [ 20, 10, 18, 13 ],
            "tuesday": [ 19, 9, 17, 11 ],
            "wednesday": [ 18, 8, 16, 10 ],
            "thursday": [ 22, 12, 20, 14 ],
            "saturday": [ 21, 11, 19, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3577738478/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://stabscotch.bandcamp.com/album/uncanny-valley',
          a_string: 'UNCANNY VALLEY by Stabscotch',
          rule: {
            "monday": [ 22, 12, 20, 14 ],
            "tuesday": [ 21, 11, 19, 14 ],
            "wednesday": [ 20, 10, 18, 12 ],
            "thursday": [ 19, 9, 17, 11 ],
            "saturday": [ 23, 13, 21, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3922754158/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aesthesys.bandcamp.com/album/achromata',
          a_string: 'Achromata by Aesthesys',
          rule: {
            "monday": [ 23, 13, 21, 15 ],
            "tuesday": [ 22, 12, 20, 14 ],
            "wednesday": [ 21, 11, 19, 14 ],
            "thursday": [ 20, 10, 18, 12 ],
            "saturday": [ 19, 9, 17, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=45687775/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://haircutchi.bandcamp.com/album/sometimes-now',
          a_string: 'Sometimes Now by Haircut',
          rule: {
            "monday": [ 19, 9, 17, 11 ],
            "tuesday": [ 23, 13, 21, 15 ],
            "wednesday": [ 22, 12, 20, 14 ],
            "thursday": [ 21, 11, 19, 14 ],
            "saturday": [ 20, 10, 18, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3370563065/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://0robor0.bandcamp.com/album/laughing-death',
          a_string: 'Laughing Death by OroborO',
          rule: {
            "monday": [ 20, 10, 18, 12 ],
            "tuesday": [ 19, 9, 17, 11 ],
            "wednesday": [ 23, 13, 21, 15 ],
            "thursday": [ 22, 12, 20, 14 ],
            "saturday": [ 21, 11, 19, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 130,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1913451900/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://moebius-official.bandcamp.com/album/blotch-remastered',
          a_string: 'Blotch (Remastered) by Moebius',
          rule: {
            "monday": [ 21, 11, 19, 14 ],
            "tuesday": [ 20, 10, 18, 12 ],
            "wednesday": [ 19, 9, 17, 11 ],
            "thursday": [ 23, 13, 21, 15 ],
            "saturday": [ 22, 12, 20, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 131,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3813390335/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://moebius-official.bandcamp.com/album/ding',
          a_string: 'Ding by Moebius',
          rule: {
            "monday": [ 22, 12, 20, 14 ],
            "tuesday": [ 21, 11, 19, 14 ],
            "wednesday": [ 20, 10, 18, 12 ],
            "thursday": [ 19, 9, 17, 11 ],
            "saturday": [ 23, 13, 21, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 132,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3015400796/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://moebius-official.bandcamp.com/album/kram',
          a_string: 'Kram by Moebius',
          rule: {
            "monday": [ 23, 13, 21, 15 ],
            "tuesday": [ 22, 12, 20, 14 ],
            "wednesday": [ 21, 11, 19, 14 ],
            "thursday": [ 20, 10, 18, 12 ],
            "saturday": [ 19, 9, 17, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 133,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1760340805/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://skingraftrecords.bandcamp.com/album/synchromysticism',
          a_string: 'Synchromysticism by Yowie',
          rule: {
            "monday": [ 20, 10, 18, 12 ],
            "tuesday": [ 24, 14, 22, 16 ],
            "wednesday": [ 23, 13, 21, 15 ],
            "thursday": [ 22, 12, 20, 15 ],
            "saturday": [ 21, 11, 19, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 134,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=890153798/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://skingraftrecords.bandcamp.com/album/face-of-collapse-special-edition',
          a_string: 'Face of Collapse: Special Edition by Dazzling Killmen',
          rule: {
            "monday": [ 21, 11, 19, 13 ],
            "tuesday": [ 20, 10, 18, 12 ],
            "wednesday": [ 24, 14, 22, 16 ],
            "thursday": [ 23, 13, 21, 15 ],
            "saturday": [ 22, 12, 20, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 135,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4130527482/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://skingraftrecords.bandcamp.com/album/when-in-vanitas',
          a_string: 'When In Vanitas... by Brise-Glace',
          rule: {
            "monday": [ 22, 12, 20, 15 ],
            "tuesday": [ 21, 11, 19, 13 ],
            "wednesday": [ 20, 10, 18, 12 ],
            "thursday": [ 24, 14, 22, 16 ],
            "saturday": [ 23, 13, 21, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 136,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=489072169/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kuumusic1.bandcamp.com/album/q',
          a_string: 'Q by Kuu',
          rule: {
            "monday": [ 23, 13, 21, 15 ],
            "tuesday": [ 22, 12, 20, 15 ],
            "wednesday": [ 21, 11, 19, 13 ],
            "thursday": [ 20, 10, 18, 12 ],
            "saturday": [ 24, 14, 22, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 137,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3680401426/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://formulavee.bandcamp.com/album/three-songs',
          a_string: 'Three Songs by We Dragons',
          rule: {
            "monday": [ 24, 14, 22, 16 ],
            "tuesday": [ 23, 13, 21, 15 ],
            "wednesday": [ 22, 12, 20, 15 ],
            "thursday": [ 21, 11, 19, 13 ],
            "saturday": [ 20, 10, 18, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 138,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2669357293/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://breakdownpanda.bandcamp.com/album/moronic-outbursts-2',
          a_string: 'Moronic Outbursts by BREAKDOWNPANDA',
          rule: {
            "monday": [ 20, 10, 18, 12 ],
            "tuesday": [ 24, 14, 22, 16 ],
            "wednesday": [ 23, 13, 21, 15 ],
            "thursday": [ 22, 12, 20, 15 ],
            "saturday": [ 21, 11, 19, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 139,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2995112499/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://instrumental-adj.bandcamp.com/album/a-series-of-disagreements',
          a_string: 'A Series Of Disagreements by Instrumental (adj.)',
          rule: {
            "monday": [ 21, 11, 19, 13 ],
            "tuesday": [ 20, 10, 18, 12 ],
            "wednesday": [ 24, 14, 22, 16 ],
            "thursday": [ 23, 13, 21, 15 ],
            "saturday": [ 22, 12, 20, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 140,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1471590927/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://instrumental-adj.bandcamp.com/album/reductio-ad-absurdum',
          a_string: 'Reductio ad Absurdum by Instrumental (adj.)',
          rule: {
            "monday": [ 23, 13, 21, 16 ],
            "tuesday": [ 22, 12, 20, 14 ],
            "wednesday": [ 21, 11, 19, 13 ],
            "thursday": [ 25, 15, 23, 17 ],
            "saturday": [ 24, 14, 22, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 141,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2657101561/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://themercurytree.bandcamp.com/album/countenance',
          a_string: 'Countenance by The Mercury Tree',
          rule: {
            "monday": [ 24, 14, 22, 16 ],
            "tuesday": [ 23, 13, 21, 16 ],
            "wednesday": [ 22, 12, 20, 14 ],
            "thursday": [ 21, 11, 19, 13 ],
            "saturday": [ 25, 15, 23, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 142,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1557122668/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://onlyloversrecords.bandcamp.com/album/polygondwanaland',
          a_string: 'Polygondwanaland by King Gizzard and the Lizard Wizard',
          rule: {
            "monday": [ 25, 15, 23, 17 ],
            "tuesday": [ 24, 14, 22, 16 ],
            "wednesday": [ 23, 13, 21, 16 ],
            "thursday": [ 22, 12, 20, 14 ],
            "saturday": [ 21, 11, 19, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 143,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1037461562/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thesunflowersmusic.bandcamp.com/album/castle-spell-2',
          a_string: 'Castle Spell by SUNFLOWERS',
          rule: {
            "monday": [ 21, 11, 19, 13 ],
            "tuesday": [ 25, 15, 23, 17 ],
            "wednesday": [ 24, 14, 22, 16 ],
            "thursday": [ 23, 13, 21, 16 ],
            "saturday": [ 22, 12, 20, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 144,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1025488984/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thesunflowersmusic.bandcamp.com/album/the-intergalactic-guide-to-find-the-red-cowboy',
          a_string: 'The Intergalactic Guide To Find The Red Cowboy by SUNFLOWERS',
          rule: {
            "monday": [ 22, 12, 20, 14 ],
            "tuesday": [ 21, 11, 19, 13 ],
            "wednesday": [ 25, 15, 23, 17 ],
            "thursday": [ 24, 14, 22, 16 ],
            "saturday": [ 23, 13, 21, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 145,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=402701780/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tortoise.bandcamp.com/album/tortoise',
          a_string: 'Tortoise by Tortoise',
          rule: {
            "monday": [ 23, 13, 21, 16 ],
            "tuesday": [ 22, 12, 20, 14 ],
            "wednesday": [ 21, 11, 19, 13 ],
            "thursday": [ 25, 15, 23, 17 ],
            "saturday": [ 24, 14, 22, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 146,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3704450036/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tortoise.bandcamp.com/album/millions-now-living-will-never-die',
          a_string: 'Millions Now Living Will Never Die by Tortoise',
          rule: {
            "monday": [ 24, 14, 22, 16 ],
            "tuesday": [ 23, 13, 21, 16 ],
            "wednesday": [ 22, 12, 20, 14 ],
            "thursday": [ 21, 11, 19, 13 ],
            "saturday": [ 25, 15, 23, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 147,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3449614673/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tortoise.bandcamp.com/album/tnt',
          a_string: 'TNT by Tortoise',
          rule: {
            "monday": [ 25, 15, 23, 17 ],
            "tuesday": [ 24, 14, 22, 16 ],
            "wednesday": [ 23, 13, 21, 16 ],
            "thursday": [ 22, 12, 20, 14 ],
            "saturday": [ 21, 11, 19, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 148,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3650502038/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tortoise.bandcamp.com/album/standards',
          a_string: 'Standards by Tortoise',
          rule: {
            "monday": [ 21, 11, 19, 13 ],
            "tuesday": [ 25, 15, 23, 17 ],
            "wednesday": [ 24, 14, 22, 16 ],
            "thursday": [ 23, 13, 21, 16 ],
            "saturday": [ 22, 12, 20, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 149,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1396897218/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tortoise.bandcamp.com/album/its-all-around-you',
          a_string: 'It&#39;s All Around You by Tortoise',
          rule: {
            "monday": [ 22, 12, 20, 14 ],
            "tuesday": [ 21, 11, 19, 13 ],
            "wednesday": [ 25, 15, 23, 17 ],
            "thursday": [ 24, 14, 22, 16 ],
            "saturday": [ 23, 13, 21, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 150,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4176811270/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tortoise.bandcamp.com/album/a-lazarus-taxon',
          a_string: 'A Lazarus Taxon by Tortoise',
          rule: {
            "monday": [ 23, 13, 21, 16 ],
            "tuesday": [ 22, 12, 20, 14 ],
            "wednesday": [ 21, 11, 19, 13 ],
            "thursday": [ 25, 15, 23, 17 ],
            "saturday": [ 24, 14, 22, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 151,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4061327368/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tortoise.bandcamp.com/album/beacons-of-ancestorship',
          a_string: 'Beacons of Ancestorship by Tortoise',
          rule: {
            "monday": [ 24, 14, 22, 16 ],
            "tuesday": [ 23, 13, 21, 16 ],
            "wednesday": [ 22, 12, 20, 14 ],
            "thursday": [ 21, 11, 19, 13 ],
            "saturday": [ 25, 15, 23, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 152,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=95070257/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tortoise.bandcamp.com/album/the-catastrophist',
          a_string: 'The Catastrophist by Tortoise',
          rule: {
            "monday": [ 25, 15, 23, 17 ],
            "tuesday": [ 24, 14, 22, 16 ],
            "wednesday": [ 23, 13, 21, 16 ],
            "thursday": [ 22, 12, 20, 14 ],
            "saturday": [ 21, 11, 19, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 153,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3227111390/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wobbler.bandcamp.com/album/rites-at-dawn',
          a_string: 'Rites At Dawn by Wobbler',
          rule: {
            "monday": [ 21, 11, 19, 13 ],
            "tuesday": [ 25, 15, 23, 17 ],
            "wednesday": [ 24, 14, 22, 16 ],
            "thursday": [ 23, 13, 21, 16 ],
            "saturday": [ 22, 12, 20, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 154,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1398604293/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hella.bandcamp.com/album/the-devil-isnt-red',
          a_string: 'The Devil Isn&#39;t Red by Hella',
          rule: {
            "monday": [ 23, 13, 21, 15 ],
            "tuesday": [ 22, 12, 20, 14 ],
            "wednesday": [ 26, 16, 24, 18 ],
            "thursday": [ 25, 15, 23, 17 ],
            "saturday": [ 24, 14, 22, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 155,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3478465787/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hella.bandcamp.com/album/hold-your-horse-is',
          a_string: 'Hold Your Horse Is by Hella',
          rule: {
            "monday": [ 24, 14, 22, 17 ],
            "tuesday": [ 23, 13, 21, 15 ],
            "wednesday": [ 22, 12, 20, 14 ],
            "thursday": [ 26, 16, 24, 18 ],
            "saturday": [ 25, 15, 23, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 156,
          user_id: 1,
          theme: 'Math Rock & Progressive Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3850134741/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://horselords.bandcamp.com/album/interventions',
          a_string: 'Interventions by Horse Lords',
          rule: {
            "monday": [ 25, 15, 23, 17 ],
            "tuesday": [ 24, 14, 22, 17 ],
            "wednesday": [ 23, 13, 21, 15 ],
            "thursday": [ 22, 12, 20, 14 ],
            "saturday": [ 26, 16, 24, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('september_musics_id_seq', (SELECT MAX(id) FROM september_musics));");
    });
};
