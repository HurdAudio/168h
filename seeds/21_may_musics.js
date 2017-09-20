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
        },
        {
          id: 22,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2853205985/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ilusorecords.bandcamp.com/album/extremophile',
          a_string: 'Extremophile by Dominic Lash Quartet',
          rule: {
            "monday": [ 8, 14, 21, 3 ],
            "tuesday": [ 7, 13, 20, 2 ],
            "wednesday": [ 6, 12, 19, 1 ],
            "thursday": [ 5, 11, 18, 31 ],
            "saturday": [ 4, 10, 17, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=639343003/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://donnachacostello.bandcamp.com/album/mouvements',
          a_string: 'Mouvements by Donnacha Costello',
          rule: {
            "monday": [ 4, 10, 17, 30 ],
            "tuesday": [ 8, 14, 21, 3 ],
            "wednesday": [ 7, 13, 20, 2 ],
            "thursday": [ 6, 12, 19, 1 ],
            "saturday": [ 5, 11, 18, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1753601677/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://natevans.bandcamp.com/album/coyoteways',
          a_string: 'Coyoteways by Nat Evans',
          rule: {
            "monday": [ 5, 11, 18, 31 ],
            "tuesday": [ 4, 10, 17, 30 ],
            "wednesday": [ 8, 14, 21, 3 ],
            "thursday": [ 7, 13, 20, 2 ],
            "saturday": [ 6, 12, 19, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=412747050/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newfocusrecordings.bandcamp.com/album/marcos-balter-aesopica',
          a_string: 'Marcos Balter: Aesopica by International Contemporary Ensemble, Claire Chase, Ryan Muncy',
          rule: {
            "monday": [ 6, 12, 19, 1 ],
            "tuesday": [ 5, 11, 18, 31 ],
            "wednesday": [ 4, 10, 17, 30 ],
            "thursday": [ 8, 14, 21, 3 ],
            "saturday": [ 7, 13, 20, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2007713521/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newfocusrecordings.bandcamp.com/album/r-we-who-r-we',
          a_string: 'R WE WHO R WE by R WE WHO R WE: Ted Hearne, vocals, vocal processing Philip White, mixer feedback, vocal processing',
          rule: {
            "monday": [ 7, 13, 20, 2 ],
            "tuesday": [ 6, 12, 19, 1 ],
            "wednesday": [ 5, 11, 18, 31 ],
            "thursday": [ 4, 10, 17, 30 ],
            "saturday": [ 8, 14, 21, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=314662615/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newfocusrecordings.bandcamp.com/album/nicholas-dieugenio-and-mimi-solomon-into-the-silence',
          a_string: 'Nicholas DiEugenio and Mimi Solomon: Into the Silence by Nicholas DiEugenio and Mimi Solomon',
          rule: {
            "monday": [ 8, 14, 21, 3 ],
            "tuesday": [ 7, 13, 20, 2 ],
            "wednesday": [ 6, 12, 19, 1 ],
            "thursday": [ 5, 11, 18, 31 ],
            "saturday": [ 4, 10, 17, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3096869906/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://garethdavisfrances-marieuitti.bandcamp.com/album/gramercy',
          a_string: 'Gramercy by Gareth Davis &amp; Frances-Marie Uitti',
          rule: {
            "monday": [ 5, 11, 18, 31 ],
            "tuesday": [ 9, 15, 22, 4 ],
            "wednesday": [ 8, 14, 21, 3 ],
            "thursday": [ 7, 13, 20, 2 ],
            "saturday": [ 6, 12, 19, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3273592205/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sluchaj.bandcamp.com/album/thunder',
          a_string: 'Thunder by Agustí Fernández / Frances Marie Uitti / Joel Ryan',
          rule: {
            "monday": [ 6, 12, 19, 1 ],
            "tuesday": [ 5, 11, 18, 31 ],
            "wednesday": [ 9, 15, 22, 4 ],
            "thursday": [ 8, 14, 21, 3 ],
            "saturday": [ 7, 13, 20, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2041730779/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aishaorazbayeva.bandcamp.com/album/the-hand-gallery',
          a_string: 'The Hand Gallery by Aisha Orazbayeva',
          rule: {
            "monday": [ 7, 13, 20, 2 ],
            "tuesday": [ 6, 12, 19, 1 ],
            "wednesday": [ 5, 11, 18, 31 ],
            "thursday": [ 9, 15, 22, 4 ],
            "saturday": [ 8, 14, 21, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1931904327/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://leboeufbrothers.bandcamp.com/album/imaginist',
          a_string: 'imaginist by Le Boeuf Brothers + JACK Quartet',
          rule: {
            "monday": [ 8, 14, 21, 3 ],
            "tuesday": [ 7, 13, 20, 2 ],
            "wednesday": [ 6, 12, 19, 1 ],
            "thursday": [ 5, 11, 18, 31 ],
            "saturday": [ 9, 15, 22, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=503991784/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nilsfrahm.bandcamp.com/album/wintermusik',
          a_string: 'Wintermusik by Nils Frahm',
          rule: {
            "monday": [ 9, 15, 22, 4 ],
            "tuesday": [ 8, 14, 21, 3 ],
            "wednesday": [ 7, 13, 20, 2 ],
            "thursday": [ 6, 12, 19, 1 ],
            "saturday": [ 5, 11, 18, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3802551089/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://christinesouthworth.bandcamp.com/album/christine-southworth-string-quartets',
          a_string: 'Christine Southworth String Quartets by Kronos Quartet, Calder Quartet, Gamelan Elektrika, Face the Music',
          rule: {
            "monday": [ 5, 11, 18, 31 ],
            "tuesday": [ 9, 15, 22, 4 ],
            "wednesday": [ 8, 14, 21, 3 ],
            "thursday": [ 7, 13, 20, 2 ],
            "saturday": [ 6, 12, 19, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3947190276/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://soave.bandcamp.com/album/arturo-st-lteri-e-il-pavone-parl-alla-luna',
          a_string: 'Arturo Stàlteri - ...e il pavone parlò alla Luna by soave',
          rule: {
            "monday": [ 6, 12, 19, 1 ],
            "tuesday": [ 5, 11, 18, 31 ],
            "wednesday": [ 9, 15, 22, 4 ],
            "thursday": [ 8, 14, 21, 3 ],
            "saturday": [ 7, 13, 20, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=95732423/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://clarkerobinson.bandcamp.com/album/49th-birthday-album',
          a_string: '49th Birthday Album by Clarke Robinson',
          rule: {
            "monday": [ 8, 14, 21, 3 ],
            "tuesday": [ 7, 13, 20, 2 ],
            "wednesday": [ 6, 12, 19, 1 ],
            "thursday": [ 10, 16, 23, 5 ],
            "saturday": [ 9, 15, 22, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2848499200/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://weirdearrecords.bandcamp.com/album/oh-baby-my-acoustica',
          a_string: 'Oh Baby / My Acoustica by Trumpet Trumpet Synthesizer / Horaflora',
          rule: {
            "monday": [ 9, 15, 22, 4 ],
            "tuesday": [ 8, 14, 21, 3 ],
            "wednesday": [ 7, 13, 20, 2 ],
            "thursday": [ 6, 12, 19, 1 ],
            "saturday": [ 10, 16, 23, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=331011142/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sentieriselvaggi.bandcamp.com/album/ac-dc',
          a_string: 'AC/DC by Sentieri Selvaggi',
          rule: {
            "monday": [ 10, 16, 23, 5 ],
            "tuesday": [ 9, 15, 22, 4 ],
            "wednesday": [ 8, 14, 21, 3 ],
            "thursday": [ 7, 13, 20, 2 ],
            "saturday": [ 6, 12, 19, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1072730020/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://homenormal.bandcamp.com/album/dietro-a-un-vetro',
          a_string: 'Dietro a un vetro by Giulio Fagiolini',
          rule: {
            "monday": [ 6, 12, 19, 1 ],
            "tuesday": [ 10, 16, 23, 5 ],
            "wednesday": [ 9, 15, 22, 4 ],
            "thursday": [ 8, 14, 21, 3 ],
            "saturday": [ 7, 13, 20, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'avant garde/new music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1876175985/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zeitkratzer.bandcamp.com/album/serbian-war-songs',
          a_string: 'Serbian War Songs by zeitkratzer / SVETLANA SPAJIC / DRAGANA TOMIĆ  / OBRAD MILIC',
          rule: {
            "monday": [ 7, 13, 20, 2 ],
            "tuesday": [ 6, 12, 19, 1 ],
            "wednesday": [ 10, 16, 23, 5 ],
            "thursday": [ 9, 15, 22, 4 ],
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
