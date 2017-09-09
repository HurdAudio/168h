'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('may_musics').del()
    .then(function () {
      // Inserts seed entries
      return knex('may_musics').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2926666832/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newfocusrecordings.bandcamp.com/album/hushers',
          a_string: 'Hushers by Quince Contemporary Vocal Ensemble',
          rule: {
            "monday": [ 4, 10, 17, 30 ],
            "tuesday": [ 3, 9, 16, 29 ],
            "wednesday": [ 2, 8, 15, 28 ],
            "thursday": [ 1, 7, 14, 27 ],
            "saturday": [ 5, 11, 18, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4179012292/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://karlrecords.bandcamp.com/album/la-l-gende-deer',
          a_string: 'La Légende d&#39;Eer by IANNIS XENAKIS',
          rule: {
            "monday": [ 5, 11, 18, 31 ],
            "tuesday": [ 4, 10, 17, 30 ],
            "wednesday": [ 3, 9, 16, 29 ],
            "thursday": [ 2, 8, 15, 28 ],
            "saturday": [ 1, 7, 14, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=45299544/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://karlrecords.bandcamp.com/album/complete-song-books',
          a_string: 'Complete Song Books by JOHN CAGE, REINHOLD FRIEDL',
          rule: {
            "monday": [ 1, 7, 14, 27 ],
            "tuesday": [ 5, 11, 18, 31 ],
            "wednesday": [ 4, 10, 17, 30 ],
            "thursday": [ 3, 9, 16, 29 ],
            "saturday": [ 2, 8, 15, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2824493515/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zeitkratzer.bandcamp.com/album/karlheinz-stockhausen-old-school',
          a_string: 'Karlheinz Stockhausen [old school] by zeitkratzer',
          rule: {
            "monday": [ 2, 8, 15, 28 ],
            "tuesday": [ 1, 7, 14, 27 ],
            "wednesday": [ 5, 11, 18, 31 ],
            "thursday": [ 4, 10, 17, 30 ],
            "saturday": [ 3, 9, 16, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1635773245/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://idmtheftable.bandcamp.com/album/leaving-the-keyboard-that-plays-itself-down-by-the-river-between-2-30-and-3-30-am-august-3rd-2017',
          a_string: 'Leaving the keyboard that plays itself down by the river between 2:30 and 3:30 AM August 3rd 2017 by id m theft able',
          rule: {
            "monday": [ 3, 9, 16, 29 ],
            "tuesday": [ 2, 8, 15, 28 ],
            "wednesday": [ 1, 7, 14, 27 ],
            "thursday": [ 5, 11, 18, 31 ],
            "saturday": [ 4, 10, 17, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1468997469/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://babel-label.bandcamp.com/album/karlheinz-stockhausen-tierkreis',
          a_string: 'KARLHEINZ STOCKHAUSEN TIERKREIS by BRUNO HEINEN SEXTET',
          rule: {
            "monday": [ 4, 10, 17, 30 ],
            "tuesday": [ 3, 9, 16, 29 ],
            "wednesday": [ 2, 8, 15, 28 ],
            "thursday": [ 1, 7, 14, 27 ],
            "saturday": [ 5, 11, 18, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2631696285/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://joseperez.bandcamp.com/album/el-piano-del-siglo-xx',
          a_string: 'El piano del Siglo XX by José María Pérez',
          rule: {
            "monday": [ 6, 12, 19, 1 ],
            "tuesday": [ 5, 11, 18, 31 ],
            "wednesday": [ 4, 10, 17, 30 ],
            "thursday": [ 3, 9, 16, 29 ],
            "saturday": [ 2, 8, 15, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=518491629/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://streifenjunko.bandcamp.com/album/sval-torv',
          a_string: 'Sval torv by Streifenjunko',
          rule: {
            "monday": [ 2, 8, 15, 28 ],
            "tuesday": [ 6, 12, 19, 1 ],
            "wednesday": [ 5, 11, 18, 31 ],
            "thursday": [ 4, 10, 17, 30 ],
            "saturday": [ 3, 9, 16, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2224588625/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nilsfrahm.bandcamp.com/album/music-for-the-motion-picture-victoria-bonus-track-version',
          a_string: 'Music for the Motion Picture Victoria (Bonus Track Version) by Nils Frahm',
          rule: {
            "monday": [ 3, 9, 16, 29 ],
            "tuesday": [ 2, 8, 15, 28 ],
            "wednesday": [ 6, 12, 19, 1 ],
            "thursday": [ 5, 11, 18, 31 ],
            "saturday": [ 4, 10, 17, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4206764672/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eljardindeorlando.bandcamp.com/album/festival-de-m-sica-del-siglo-xx',
          a_string: 'Festival de música del siglo XX by Juan Carlos Paz; Edgar Varèse; Francisco Fröpfl; Alban Berg',
          rule: {
            "monday": [ 4, 10, 17, 30 ],
            "tuesday": [ 3, 9, 16, 29 ],
            "wednesday": [ 2, 8, 15, 28 ],
            "thursday": [ 6, 12, 19, 1 ],
            "saturday": [ 5, 11, 18, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=981965785/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://alarmwillsound.bandcamp.com/album/alarm-will-sound-presents-modernists',
          a_string: 'Alarm Will Sound presents Modernists by Alarm Will Sound',
          rule: {
            "monday": [ 5, 11, 18, 31 ],
            "tuesday": [ 4, 10, 17, 30 ],
            "wednesday": [ 3, 9, 16, 29 ],
            "thursday": [ 2, 8, 15, 28 ],
            "saturday": [ 6, 12, 19, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2373284975/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://alarmwillsound.bandcamp.com/album/a-rhythmia',
          a_string: 'a/rhythmia by Alarm Will Sound',
          rule: {
            "monday": [ 6, 12, 19, 1 ],
            "tuesday": [ 5, 11, 18, 31 ],
            "wednesday": [ 4, 10, 17, 30 ],
            "thursday": [ 3, 9, 16, 29 ],
            "saturday": [ 2, 8, 15, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=588183065/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://finderskeepersrecords.bandcamp.com/album/mal-fices',
          a_string: 'Maléfices by Pierre Henry',
          rule: {
            "monday": [ 2, 8, 15, 28 ],
            "tuesday": [ 6, 12, 19, 1 ],
            "wednesday": [ 5, 11, 18, 31 ],
            "thursday": [ 4, 10, 17, 30 ],
            "saturday": [ 3, 9, 16, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1435388351/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://forcednostalgia.bandcamp.com/album/submerged-vessels-and-other-stories',
          a_string: 'Submerged Vessels And Other Stories by Vazz',
          rule: {
            "monday": [ 4, 10, 17, 30 ],
            "tuesday": [ 3, 9, 16, 29 ],
            "wednesday": [ 7, 13, 20, 2 ],
            "thursday": [ 6, 12, 19, 1 ],
            "saturday": [ 5, 11, 18, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=13695074/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://forcednostalgia.bandcamp.com/album/sombrero-fallout-2',
          a_string: 'Sombrero Fallout by Pump',
          rule: {
            "monday": [ 5, 11, 18, 31 ],
            "tuesday": [ 4, 10, 17, 30 ],
            "wednesday": [ 3, 9, 16, 29 ],
            "thursday": [ 7, 13, 20, 2 ],
            "saturday": [ 6, 12, 19, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3033247197/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bangonacan.bandcamp.com/album/bang-on-a-can-meets-kyaw-kyaw-naing',
          a_string: 'Bang on a Can Meets Kyaw Kyaw Naing by Bang on a Can',
          rule: {
            "monday": [ 6, 12, 19, 1 ],
            "tuesday": [ 5, 11, 18, 31 ],
            "wednesday": [ 4, 10, 17, 30 ],
            "thursday": [ 3, 9, 16, 29 ],
            "saturday": [ 7, 13, 20, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1935970520/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hakanai.bandcamp.com/album/hakanai',
          a_string: 'Hakanai by Hakanai',
          rule: {
            "monday": [ 7, 13, 20, 2 ],
            "tuesday": [ 6, 12, 19, 1 ],
            "wednesday": [ 5, 11, 18, 31 ],
            "thursday": [ 4, 10, 17, 30 ],
            "saturday": [ 3, 9, 16, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1808973990/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gizehrecords.bandcamp.com/album/through-the-sparkle',
          a_string: 'Through the Sparkle by Astrïd &amp; Rachel Grimes',
          rule: {
            "monday": [ 3, 9, 16, 29 ],
            "tuesday": [ 7, 13, 20, 2 ],
            "wednesday": [ 6, 12, 19, 1 ],
            "thursday": [ 5, 11, 18, 31 ],
            "saturday": [ 4, 10, 17, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2430724552/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ronminis.bandcamp.com/album/-',
          a_string: 'נקודת אור by Ron Minis',
          rule: {
            "monday": [ 4, 10, 17, 30 ],
            "tuesday": [ 3, 9, 16, 29 ],
            "wednesday": [ 7, 13, 20, 2 ],
            "thursday": [ 6, 12, 19, 1 ],
            "saturday": [ 5, 11, 18, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2033214861/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://highmoss.bandcamp.com/album/north-towards-ever',
          a_string: 'North Towards Ever by Haworth Hodgkinson',
          rule: {
            "monday": [ 5, 11, 18, 31 ],
            "tuesday": [ 4, 10, 17, 30 ],
            "wednesday": [ 3, 9, 16, 29 ],
            "thursday": [ 7, 13, 20, 2 ],
            "saturday": [ 6, 12, 19, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1899744312/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://discusmusic.bandcamp.com/album/theta-two-47cd',
          a_string: 'Theta Two - 47CD by Orchestra Of The Upper Atmosphere',
          rule: {
            "monday": [ 7, 13, 20, 2 ],
            "tuesday": [ 6, 12, 19, 1 ],
            "wednesday": [ 5, 11, 18, 31 ],
            "thursday": [ 4, 10, 17, 30 ],
            "saturday": [ 8, 14, 21, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('may_musics_id_seq', (SELECT MAX(id) FROM may_musics));");
    });
};
