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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
          theme: 'Avant Garde/New Music',
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
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=867626409/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://adriankingwell.bandcamp.com/album/babylon',
          a_string: 'babylon by Adrian Kingwell',
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
          id: 41,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=1724237696/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shop.diatribe.ie/album/for-violin-and-electronics',
          a_string: 'For Violin and Electronics by Darragh Morgan',
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
          id: 42,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=644646204/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shop.diatribe.ie/album/stargazer',
          a_string: 'Stargazer by Ensemble Ériu',
          rule: {
            "monday": [ 11, 17, 24, 6 ],
            "tuesday": [ 10, 16, 23, 5 ],
            "wednesday": [ 9, 15, 22, 4 ],
            "thursday": [ 8, 14, 21, 3 ],
            "saturday": [ 7, 13, 20, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2823942019/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://subjamlabel.bandcamp.com/album/infinite-loop',
          a_string: 'Infinite Loop by Wang Fan',
          rule: {
            "monday": [ 7, 13, 20, 2 ],
            "tuesday": [ 11, 17, 24, 6 ],
            "wednesday": [ 10, 16, 23, 5 ],
            "thursday": [ 9, 15, 22, 4 ],
            "saturday": [ 8, 14, 21, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=286075715/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://subjamlabel.bandcamp.com/album/tropoi',
          a_string: 'Tropoi by Olaf Hochherz',
          rule: {
            "monday": [ 8, 14, 21, 3 ],
            "tuesday": [ 7, 13, 20, 2 ],
            "wednesday": [ 11, 17, 24, 6 ],
            "thursday": [ 10, 16, 23, 5 ],
            "saturday": [ 9, 15, 22, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2199662800/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://subjamlabel.bandcamp.com/album/bottom',
          a_string: 'Bottom by Goh Lee Kwang',
          rule: {
            "monday": [ 9, 15, 22, 4 ],
            "tuesday": [ 8, 14, 21, 3 ],
            "wednesday": [ 7, 13, 20, 2 ],
            "thursday": [ 11, 17, 24, 6 ],
            "saturday": [ 10, 16, 23, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2060426740/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://erratum.bandcamp.com/album/cathedrale-de-strasbourg',
          a_string: 'CATHEDRALE DE STRASBOURG by CHARLEMAGNE PALESTINE',
          rule: {
            "monday": [ 10, 16, 23, 5 ],
            "tuesday": [ 9, 15, 22, 4 ],
            "wednesday": [ 8, 14, 21, 3 ],
            "thursday": [ 7, 13, 20, 2 ],
            "saturday": [ 11, 17, 24, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3821231848/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://erratum.bandcamp.com/album/fill-my-body-with-flowers-and-rice',
          a_string: 'Fill My Body With Flowers And Rice by ALICE KEMP',
          rule: {
            "monday": [ 11, 17, 24, 6 ],
            "tuesday": [ 10, 16, 23, 5 ],
            "wednesday": [ 9, 15, 22, 4 ],
            "thursday": [ 8, 14, 21, 3 ],
            "saturday": [ 7, 13, 20, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=174824813/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://erratum.bandcamp.com/album/the-last-man-in-europe',
          a_string: 'THE LAST MAN IN EUROPE by ZBIGNIEW KARKOWSKI',
          rule: {
            "monday": [ 7, 13, 20, 2 ],
            "tuesday": [ 11, 17, 24, 6 ],
            "wednesday": [ 10, 16, 23, 5 ],
            "thursday": [ 9, 15, 22, 4 ],
            "saturday": [ 8, 14, 21, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4363051/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rainbowbridge.bandcamp.com/album/international-exports-and-the-reasons',
          a_string: 'International Exports And The Reasons by Posset/Pregnant Spore',
          rule: {
            "monday": [ 9, 15, 22, 4 ],
            "tuesday": [ 8, 14, 21, 3 ],
            "wednesday": [ 12, 18, 25, 7 ],
            "thursday": [ 11, 17, 24, 6 ],
            "saturday": [ 10, 16, 23, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2060810605/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://accidentdutravail.bandcamp.com/album/boucles',
          a_string: 'boucles by Accident du Travail',
          rule: {
            "monday": [ 10, 16, 23, 5 ],
            "tuesday": [ 9, 15, 22, 4 ],
            "wednesday": [ 8, 14, 21, 3 ],
            "thursday": [ 12, 18, 25, 7 ],
            "saturday": [ 11, 17, 24, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1136447753/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://1631recordings.bandcamp.com/album/disarm',
          a_string: 'Disarm by Tristan Eckerson',
          rule: {
            "monday": [ 11, 17, 24, 6 ],
            "tuesday": [ 10, 16, 23, 5 ],
            "wednesday": [ 9, 15, 22, 4 ],
            "thursday": [ 8, 14, 21, 3 ],
            "saturday": [ 12, 18, 25, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=416228483/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hospitalhill.bandcamp.com/album/prayer-for-nil',
          a_string: 'PRAYER FOR NIL by Jessica Aszodi',
          rule: {
            "monday": [ 12, 18, 25, 7 ],
            "tuesday": [ 11, 17, 24, 6 ],
            "wednesday": [ 10, 16, 23, 5 ],
            "thursday": [ 9, 15, 22, 4 ],
            "saturday": [ 8, 14, 21, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1513204624/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kcinsound.bandcamp.com/album/onset',
          a_string: 'ONSET by Kcin',
          rule: {
            "monday": [ 8, 14, 21, 3 ],
            "tuesday": [ 12, 18, 25, 7 ],
            "wednesday": [ 11, 17, 24, 6 ],
            "thursday": [ 10, 16, 23, 5 ],
            "saturday": [ 9, 15, 22, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=938441147/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://machinefabriek.bandcamp.com/album/fight-score',
          a_string: 'FIGHT score by Machinefabriek',
          rule: {
            "monday": [ 9, 15, 22, 4 ],
            "tuesday": [ 8, 14, 21, 3 ],
            "wednesday": [ 12, 18, 25, 7 ],
            "thursday": [ 11, 17, 24, 6 ],
            "saturday": [ 10, 16, 23, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2161332920/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jakeschepps.bandcamp.com/album/an-evening-in-the-village-the-music-of-b-la-bart-k',
          a_string: 'An Evening in the Village: The Music of Béla Bartók by Jake Schepps',
          rule: {
            "monday": [ 10, 16, 23, 5 ],
            "tuesday": [ 9, 15, 22, 4 ],
            "wednesday": [ 8, 14, 21, 3 ],
            "thursday": [ 12, 18, 25, 7 ],
            "saturday": [ 11, 17, 24, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1822899403/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thomasandrewdoyle.bandcamp.com/album/incineration-ceremony',
          a_string: 'Incineration Ceremony by Thomas Andrew Doyle',
          rule: {
            "monday": [ 12, 18, 25, 7 ],
            "tuesday": [ 11, 17, 24, 6 ],
            "wednesday": [ 10, 16, 23, 5 ],
            "thursday": [ 9, 15, 22, 4 ],
            "saturday": [ 13, 19, 26, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1302408382/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://modernarecords.bandcamp.com/album/chapitre-ii',
          a_string: 'Chapitre II by Tambour',
          rule: {
            "monday": [ 13, 19, 26, 8 ],
            "tuesday": [ 12, 18, 25, 7 ],
            "wednesday": [ 11, 17, 24, 6 ],
            "thursday": [ 10, 16, 23, 5 ],
            "saturday": [ 9, 15, 22, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2299067940/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://populistrecords.bandcamp.com/album/daniel-corral-refractions',
          a_string: 'Daniel Corral // Refractions by Daniel Corral, Jeremy Kerner, Isaura String Quartet',
          rule: {
            "monday": [ 9, 15, 22, 4 ],
            "tuesday": [ 13, 19, 26, 8 ],
            "wednesday": [ 12, 18, 25, 7 ],
            "thursday": [ 11, 17, 24, 6 ],
            "saturday": [ 10, 16, 23, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2469736947/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ellenarkbro.bandcamp.com/album/for-organ-and-brass',
          a_string: 'For organ and brass by Ellen Arkbro',
          rule: {
            "monday": [ 10, 16, 23, 5 ],
            "tuesday": [ 9, 15, 22, 4 ],
            "wednesday": [ 13, 19, 26, 8 ],
            "thursday": [ 12, 18, 25, 7 ],
            "saturday": [ 11, 17, 24, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2425378851/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thecaretaker.bandcamp.com/album/everywhere-at-the-end-of-time',
          a_string: 'Everywhere at the end of time by The Caretaker',
          rule: {
            "monday": [ 11, 17, 24, 6 ],
            "tuesday": [ 10, 16, 23, 5 ],
            "wednesday": [ 9, 15, 22, 4 ],
            "thursday": [ 13, 19, 26, 8 ],
            "saturday": [ 12, 18, 25, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=260794481/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fabriziopaterlinirecords.com/album/secret-book-2',
          a_string: 'Secret Book by Fabrizio Paterlini',
          rule: {
            "monday": [ 12, 18, 25, 7 ],
            "tuesday": [ 11, 17, 24, 6 ],
            "wednesday": [ 10, 16, 23, 5 ],
            "thursday": [ 9, 15, 22, 4 ],
            "saturday": [ 13, 19, 26, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1144294824/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newamsterdamrecords.bandcamp.com/album/petits-art-facts',
          a_string: 'Petits Artéfacts by Nick Photinos',
          rule: {
            "monday": [ 13, 19, 26, 8 ],
            "tuesday": [ 12, 18, 25, 7 ],
            "wednesday": [ 11, 17, 24, 6 ],
            "thursday": [ 10, 16, 23, 5 ],
            "saturday": [ 9, 15, 22, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3930220839/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://modernarecords.bandcamp.com/album/festen',
          a_string: 'Festen by Manos Milonakis',
          rule: {
            "monday": [ 10, 16, 23, 5 ],
            "tuesday": [ 14, 20, 27, 9 ],
            "wednesday": [ 13, 19, 26, 8 ],
            "thursday": [ 12, 18, 25, 7 ],
            "saturday": [ 11, 17, 24, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1682739570/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kara-liscoverdale.bandcamp.com/album/a-480',
          a_string: 'A 480 by Kara-Lis Coverdale',
          rule: {
            "monday": [ 11, 17, 24, 6 ],
            "tuesday": [ 10, 16, 23, 5 ],
            "wednesday": [ 14, 20, 27, 9 ],
            "thursday": [ 13, 19, 26, 8 ],
            "saturday": [ 12, 18, 25, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1766634517/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tonelist.bandcamp.com/album/small-worlds',
          a_string: 'Small Worlds by Quiver',
          rule: {
            "monday": [ 12, 18, 25, 7 ],
            "tuesday": [ 11, 17, 24, 6 ],
            "wednesday": [ 10, 16, 23, 5 ],
            "thursday": [ 14, 20, 27, 9 ],
            "saturday": [ 13, 19, 26, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4150244094/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://party-dozen.bandcamp.com/album/the-living-man-2',
          a_string: 'The Living Man by Party Dozen',
          rule: {
            "monday": [ 13, 19, 26, 8 ],
            "tuesday": [ 12, 18, 25, 7 ],
            "wednesday": [ 11, 17, 24, 6 ],
            "thursday": [ 10, 16, 23, 5 ],
            "saturday": [ 14, 20, 27, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1364428371/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://leerosevere.bandcamp.com/album/all-these-simple-things',
          a_string: 'All These Simple Things by Lee Rosevere',
          rule: {
            "monday": [ 14, 20, 27, 9 ],
            "tuesday": [ 13, 19, 26, 8 ],
            "wednesday": [ 12, 18, 25, 7 ],
            "thursday": [ 11, 17, 24, 6 ],
            "saturday": [ 10, 16, 23, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=111574093/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://feederrecordings.bandcamp.com/album/somewhere-far-away',
          a_string: 'Somewhere Far Away by Other People',
          rule: {
            "monday": [ 10, 16, 23, 5 ],
            "tuesday": [ 14, 20, 27, 9 ],
            "wednesday": [ 13, 19, 26, 8 ],
            "thursday": [ 12, 18, 25, 7 ],
            "saturday": [ 11, 17, 24, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3217615456/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eileanrec.bandcamp.com/album/erasures-and-displacements',
          a_string: 'Erasures and Displacements by Bill Seaman',
          rule: {
            "monday": [ 11, 17, 24, 6 ],
            "tuesday": [ 10, 16, 23, 5 ],
            "wednesday": [ 14, 20, 27, 9 ],
            "thursday": [ 13, 19, 26, 8 ],
            "saturday": [ 12, 18, 25, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=140233520/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://stefanwesolowski.bandcamp.com/album/rite-of-the-end',
          a_string: 'Rite Of The End by Stefan Wesołowski',
          rule: {
            "monday": [ 13, 19, 26, 8 ],
            "tuesday": [ 12, 18, 25, 7 ],
            "wednesday": [ 11, 17, 24, 6 ],
            "thursday": [ 15, 21, 28, 10 ],
            "saturday": [ 14, 20, 27, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2529425976/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://alexmincek.bandcamp.com/album/torrent',
          a_string: 'Torrent by Alex Mincek',
          rule: {
            "monday": [ 14, 20, 27, 9 ],
            "tuesday": [ 13, 19, 26, 8 ],
            "wednesday": [ 12, 18, 25, 7 ],
            "thursday": [ 11, 17, 24, 6 ],
            "saturday": [ 15, 21, 28, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=681093799/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newfocusrecordings.bandcamp.com/album/cartography',
          a_string: 'Cartography by Mariel Roberts',
          rule: {
            "monday": [ 15, 21, 28, 10 ],
            "tuesday": [ 14, 20, 27, 9 ],
            "wednesday": [ 13, 19, 26, 8 ],
            "thursday": [ 12, 18, 25, 7 ],
            "saturday": [ 11, 17, 24, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4083577322/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rqtn.bandcamp.com/album/passenger',
          a_string: 'Passenger by RQTN',
          rule: {
            "monday": [ 11, 17, 24, 6 ],
            "tuesday": [ 15, 21, 28, 10 ],
            "wednesday": [ 14, 20, 27, 9 ],
            "thursday": [ 13, 19, 26, 8 ],
            "saturday": [ 12, 18, 25, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=244004016/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tilmanrobinson.bandcamp.com/album/deer-heart',
          a_string: 'Deer Heart by Tilman Robinson',
          rule: {
            "monday": [ 12, 18, 25, 7 ],
            "tuesday": [ 11, 17, 24, 6 ],
            "wednesday": [ 15, 21, 28, 10 ],
            "thursday": [ 14, 20, 27, 9 ],
            "saturday": [ 13, 19, 26, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1790746888/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://brunosanfilippo.bandcamp.com/album/inside-life',
          a_string: 'Inside Life by Bruno Sanfilippo',
          rule: {
            "monday": [ 13, 19, 26, 8 ],
            "tuesday": [ 12, 18, 25, 7 ],
            "wednesday": [ 11, 17, 24, 6 ],
            "thursday": [ 15, 21, 28, 10 ],
            "saturday": [ 14, 20, 27, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=260637206/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://brunosanfilippo.bandcamp.com/album/claroscuro-2',
          a_string: 'ClarOscuro by Bruno Sanfilippo',
          rule: {
            "monday": [ 14, 20, 27, 9 ],
            "tuesday": [ 13, 19, 26, 8 ],
            "wednesday": [ 12, 18, 25, 7 ],
            "thursday": [ 11, 17, 24, 6 ],
            "saturday": [ 15, 21, 28, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1144787081/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dmitry-evgrafov.bandcamp.com/album/comprehension-of-light',
          a_string: 'Comprehension of Light by Dmitry Evgrafov',
          rule: {
            "monday": [ 16, 22, 29, 11 ],
            "tuesday": [ 15, 21, 28, 10 ],
            "wednesday": [ 14, 20, 27, 9 ],
            "thursday": [ 13, 19, 26, 8 ],
            "saturday": [ 12, 18, 25, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2761995487/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://1631recordings.bandcamp.com/album/escapism',
          a_string: 'Escapism by Library Tapes',
          rule: {
            "monday": [ 12, 18, 25, 7 ],
            "tuesday": [ 16, 22, 29, 11 ],
            "wednesday": [ 15, 21, 28, 10 ],
            "thursday": [ 14, 20, 27, 9 ],
            "saturday": [ 13, 19, 26, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4115508360/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lindenkillam.bandcamp.com/album/5-dollar-medicine',
          a_string: '$5 Dollar Medicine by Linden Killam',
          rule: {
            "monday": [ 13, 19, 26, 8 ],
            "tuesday": [ 12, 18, 25, 7 ],
            "wednesday": [ 16, 22, 29, 11 ],
            "thursday": [ 15, 21, 28, 10 ],
            "saturday": [ 14, 20, 27, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=2290658552/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shop.diatribe.ie/album/all-soundings-are-true',
          a_string: 'All Soundings are True by Caoimhín Ó Raghallaigh / Garth Knox',
          rule: {
            "monday": [ 14, 20, 27, 9 ],
            "tuesday": [ 13, 19, 26, 8 ],
            "wednesday": [ 12, 18, 25, 7 ],
            "thursday": [ 16, 22, 29, 11 ],
            "saturday": [ 15, 21, 28, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=644646204/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shop.diatribe.ie/album/stargazer',
          a_string: 'Stargazer by Ensemble Ériu',
          rule: {
            "monday": [ 15, 21, 28, 10 ],
            "tuesday": [ 14, 20, 27, 9 ],
            "wednesday": [ 13, 19, 26, 8 ],
            "thursday": [ 12, 18, 25, 7 ],
            "saturday": [ 16, 22, 29, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=493692770/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://benfrost.bandcamp.com/album/by-the-throat',
          a_string: 'BY THE THROAT by Ben Frost',
          rule: {
            "monday": [ 16, 22, 29, 11 ],
            "tuesday": [ 15, 21, 28, 10 ],
            "wednesday": [ 14, 20, 27, 9 ],
            "thursday": [ 13, 19, 26, 8 ],
            "saturday": [ 12, 18, 25, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1686158765/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://williambasinski.bandcamp.com/album/the-disintegration-loops',
          a_string: 'The Disintegration Loops by William Basinski',
          rule: {
            "monday": [ 12, 18, 25, 7 ],
            "tuesday": [ 16, 22, 29, 11 ],
            "wednesday": [ 15, 21, 28, 10 ],
            "thursday": [ 14, 20, 27, 9 ],
            "saturday": [ 13, 19, 26, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3745542189/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://soave.bandcamp.com/album/riccardo-sinigaglia-riflessi',
          a_string: 'Riccardo Sinigaglia - Riflessi by soave',
          rule: {
            "monday": [ 14, 20, 27, 9 ],
            "tuesday": [ 13, 19, 26, 8 ],
            "wednesday": [ 17, 23, 30, 12 ],
            "thursday": [ 16, 22, 29, 11 ],
            "saturday": [ 15, 21, 28, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=985775283/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nickvasallo.bandcamp.com/album/let-the-machines-do-it-for-us',
          a_string: 'let the machines do it for us by Nick Vasallo',
          rule: {
            "monday": [ 15, 21, 28, 10 ],
            "tuesday": [ 14, 20, 27, 9 ],
            "wednesday": [ 13, 19, 26, 8 ],
            "thursday": [ 17, 23, 30, 12 ],
            "saturday": [ 16, 22, 29, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1787015233/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nnatapes.bandcamp.com/album/evrly-mvsic',
          a_string: '&#39;EVRLY MVSIC&#39; by Patrick Higgins &amp; Josh Modney',
          rule: {
            "monday": [ 16, 22, 29, 11 ],
            "tuesday": [ 15, 21, 28, 10 ],
            "wednesday": [ 14, 20, 27, 9 ],
            "thursday": [ 13, 19, 26, 8 ],
            "saturday": [ 17, 23, 30, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2930669060/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://leabertucci.bandcamp.com/album/all-that-is-solid-melts-into-air',
          a_string: '&#39;All That Is Solid Melts Into Air&#39; by Lea Bertucci',
          rule: {
            "monday": [ 17, 23, 30, 12 ],
            "tuesday": [ 16, 22, 29, 11 ],
            "wednesday": [ 15, 21, 28, 10 ],
            "thursday": [ 14, 20, 27, 9 ],
            "saturday": [ 13, 19, 26, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2628390025/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hewaseatenbyowls.bandcamp.com/album/chorus-30-from-blues-for-the-hitchhiking-dead-2',
          a_string: 'Chorus 30 From Blues For The Hitchhiking Dead by He Was Eaten By Owls',
          rule: {
            "monday": [ 13, 19, 26, 8 ],
            "tuesday": [ 17, 23, 30, 12 ],
            "wednesday": [ 16, 22, 29, 11 ],
            "thursday": [ 15, 21, 28, 10 ],
            "saturday": [ 14, 20, 27, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=588602477/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://johnathanarce.bandcamp.com/album/sonic-landscapes-a-collection-of-improvisations',
          a_string: 'Sonic Landscapes (A Collection of Improvisations) by Johnathan Arce',
          rule: {
            "monday": [ 14, 20, 27, 9 ],
            "tuesday": [ 13, 19, 26, 8 ],
            "wednesday": [ 17, 23, 30, 12 ],
            "thursday": [ 16, 22, 29, 11 ],
            "saturday": [ 15, 21, 28, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3288210412/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://liammulligan.bandcamp.com/album/couldnt-sleep',
          a_string: 'couldn&#39;t sleep. by Liam Mulligan',
          rule: {
            "monday": [ 15, 21, 28, 10 ],
            "tuesday": [ 14, 20, 27, 9 ],
            "wednesday": [ 13, 19, 26, 8 ],
            "thursday": [ 17, 23, 30, 12 ],
            "saturday": [ 16, 22, 29, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1269075320/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://castleintimeorchestra.bandcamp.com/album/castle-in-time-2',
          a_string: 'Castle in time by Castle in Time Orchestra',
          rule: {
            "monday": [ 17, 23, 30, 12 ],
            "tuesday": [ 16, 22, 29, 11 ],
            "wednesday": [ 15, 21, 28, 10 ],
            "thursday": [ 14, 20, 27, 9 ],
            "saturday": [ 18, 24, 31, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=436754044/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fancymusic.bandcamp.com/album/present-continuous',
          a_string: 'Present Continuous by Priot Ensemble',
          rule: {
            "monday": [ 18, 24, 31, 13 ],
            "tuesday": [ 17, 23, 30, 12 ],
            "wednesday": [ 16, 22, 29, 11 ],
            "thursday": [ 15, 21, 28, 10 ],
            "saturday": [ 14, 20, 27, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2632839892/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://meerenai.bandcamp.com/album/pheromone',
          a_string: 'Pheromone by Meerenai Shim',
          rule: {
            "monday": [ 14, 20, 27, 9 ],
            "tuesday": [ 18, 24, 31, 13 ],
            "wednesday": [ 17, 23, 30, 12 ],
            "thursday": [ 16, 22, 29, 11 ],
            "saturday": [ 15, 21, 28, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=55331850/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dockstader.bandcamp.com/album/apocalypse',
          a_string: 'Apocalypse by Tod Dockstader',
          rule: {
            "monday": [ 15, 21, 28, 10 ],
            "tuesday": [ 14, 20, 27, 9 ],
            "wednesday": [ 18, 24, 31, 13 ],
            "thursday": [ 17, 23, 30, 12 ],
            "saturday": [ 16, 22, 29, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=682090054/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://modernarecords.bandcamp.com/album/piano-quartet-1',
          a_string: 'Piano Quartet #1 by Kirill Chernegin',
          rule: {
            "monday": [ 16, 22, 29, 11 ],
            "tuesday": [ 15, 21, 28, 10 ],
            "wednesday": [ 14, 20, 27, 9 ],
            "thursday": [ 18, 24, 31, 13 ],
            "saturday": [ 17, 23, 30, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/track=2568384470/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://modernarecords.bandcamp.com/track/homeless',
          a_string: 'Homeless by Snorri Hallgrímsson',
          rule: {
            "monday": [ 17, 23, 30, 12 ],
            "tuesday": [ 16, 22, 29, 11 ],
            "wednesday": [ 15, 21, 28, 10 ],
            "thursday": [ 14, 20, 27, 9 ],
            "saturday": [ 18, 24, 31, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2057178573/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://williamrobin.bandcamp.com/album/between-dawn-and-the-day',
          a_string: 'Between Dawn And The Day by William Robin',
          rule: {
            "monday": [ 18, 24, 31, 13 ],
            "tuesday": [ 17, 23, 30, 12 ],
            "wednesday": [ 16, 22, 29, 11 ],
            "thursday": [ 15, 21, 28, 10 ],
            "saturday": [ 14, 20, 27, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1329552134/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://joshuamastel.bandcamp.com/album/codextempore',
          a_string: 'codextempore by Joshua Mastel',
          rule: {
            "monday": [ 15, 21, 28, 10 ],
            "tuesday": [ 19, 25, 1, 14 ],
            "wednesday": [ 18, 24, 31, 13 ],
            "thursday": [ 17, 23, 30, 12 ],
            "saturday": [ 16, 22, 29, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2472194527/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://julianbroadhurstmetalpm.bandcamp.com/album/4523-metal-percussion-solo-in-eleven-parts',
          a_string: '45&#39;23 - Metal Percussion Solo in eleven parts by Julian Broadhurst',
          rule: {
            "monday": [ 16, 22, 29, 11 ],
            "tuesday": [ 15, 21, 28, 10 ],
            "wednesday": [ 19, 25, 1, 14 ],
            "thursday": [ 18, 24, 31, 13 ],
            "saturday": [ 17, 23, 30, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1513168489/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gatesritual.bandcamp.com/album/deliverer-redeemer',
          a_string: 'Deliverer / Redeemer by Gates',
          rule: {
            "monday": [ 17, 23, 30, 12 ],
            "tuesday": [ 16, 22, 29, 11 ],
            "wednesday": [ 15, 21, 28, 10 ],
            "thursday": [ 19, 25, 1, 14 ],
            "saturday": [ 18, 24, 31, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1735658668/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gatesritual.bandcamp.com/album/viscera',
          a_string: 'Viscera by Gates',
          rule: {
            "monday": [ 18, 24, 31, 13 ],
            "tuesday": [ 17, 23, 30, 12 ],
            "wednesday": [ 16, 22, 29, 11 ],
            "thursday": [ 15, 21, 28, 10 ],
            "saturday": [ 19, 25, 1, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1297023178/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gatesritual.bandcamp.com/album/this-door-is-forbidden',
          a_string: 'This Door Is Forbidden by Gates',
          rule: {
            "monday": [ 19, 25, 1, 14 ],
            "tuesday": [ 18, 24, 31, 13 ],
            "wednesday": [ 17, 23, 30, 12 ],
            "thursday": [ 16, 22, 29, 11 ],
            "saturday": [ 15, 21, 28, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2961934392/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cejero.bandcamp.com/album/switches',
          a_string: 'Switches by Aaron Dilloway',
          rule: {
            "monday": [ 15, 21, 28, 10 ],
            "tuesday": [ 19, 25, 1, 14 ],
            "wednesday": [ 18, 24, 31, 13 ],
            "thursday": [ 17, 23, 30, 12 ],
            "saturday": [ 16, 22, 29, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1747961455/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cejero.bandcamp.com/album/br-nsh-j-puncak',
          a_string: 'Brønshøj (Puncak) by Senyawa',
          rule: {
            "monday": [ 16, 22, 29, 11 ],
            "tuesday": [ 15, 21, 28, 10 ],
            "wednesday": [ 19, 25, 1, 14 ],
            "thursday": [ 18, 24, 31, 13 ],
            "saturday": [ 17, 23, 30, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3648618995/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cejero.bandcamp.com/album/on-small-differences-in-sensation',
          a_string: 'On Small Differences in Sensation by Eric Frye',
          rule: {
            "monday": [ 18, 24, 31, 13 ],
            "tuesday": [ 17, 23, 30, 12 ],
            "wednesday": [ 16, 22, 29, 11 ],
            "thursday": [ 20, 26, 2, 15 ],
            "saturday": [ 19, 25, 1, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4112588236/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://soave.bandcamp.com/album/giusto-pio-motore-immobile',
          a_string: 'Giusto Pio - Motore immobile by soave',
          rule: {
            "monday": [ 19, 25, 1, 14 ],
            "tuesday": [ 18, 24, 31, 13 ],
            "wednesday": [ 17, 23, 30, 12 ],
            "thursday": [ 16, 22, 29, 11 ],
            "saturday": [ 20, 26, 2, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1013983222/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nostalgiedelaboue.bandcamp.com/album/rien-ni-personne-volume-ii-iii',
          a_string: 'Rien Ni Personne ~volume II &amp; III by Various Artists',
          rule: {
            "monday": [ 20, 26, 2, 15 ],
            "tuesday": [ 19, 25, 1, 14 ],
            "wednesday": [ 18, 24, 31, 13 ],
            "thursday": [ 17, 23, 30, 12 ],
            "saturday": [ 16, 22, 29, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2537286394/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nostalgiedelaboue.bandcamp.com/album/dossier-bordeaux-2017',
          a_string: 'Dossier Bordeaux 2017 by Various Artists',
          rule: {
            "monday": [ 16, 22, 29, 11 ],
            "tuesday": [ 20, 26, 2, 15 ],
            "wednesday": [ 19, 25, 1, 14 ],
            "thursday": [ 18, 24, 31, 13 ],
            "saturday": [ 17, 23, 30, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=489770131/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rainingyu.bandcamp.com/album/the-lost-memory',
          a_string: 'The Lost Memory by Raining Yu',
          rule: {
            "monday": [ 17, 23, 30, 12 ],
            "tuesday": [ 16, 22, 29, 11 ],
            "wednesday": [ 20, 26, 2, 15 ],
            "thursday": [ 19, 25, 1, 14 ],
            "saturday": [ 18, 24, 31, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=212349308/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rachelgraffcomposer.bandcamp.com/album/sketching-the-rain',
          a_string: 'sketching the rain by Rachel Graff',
          rule: {
            "monday": [ 18, 24, 31, 13 ],
            "tuesday": [ 17, 23, 30, 12 ],
            "wednesday": [ 16, 22, 29, 11 ],
            "thursday": [ 20, 26, 2, 15 ],
            "saturday": [ 19, 25, 1, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2019114802/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://andrewball.bandcamp.com/album/forbidden-languages',
          a_string: 'Forbidden Languages by Andrew Ball',
          rule: {
            "monday": [ 19, 25, 1, 14 ],
            "tuesday": [ 18, 24, 31, 13 ],
            "wednesday": [ 17, 23, 30, 12 ],
            "thursday": [ 16, 22, 29, 11 ],
            "saturday": [ 20, 26, 2, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3942672415/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://edmundwelles.bandcamp.com/album/live-at-old-first-church-october-6-2006',
          a_string: 'Live at Old First Church, October 6, 2006 by Edmund Welles: the bass clarinet quartet',
          rule: {
            "monday": [ 21, 27, 3, 16 ],
            "tuesday": [ 20, 26, 2, 15 ],
            "wednesday": [ 19, 25, 1, 14 ],
            "thursday": [ 18, 24, 31, 13 ],
            "saturday": [ 17, 23, 30, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=402816290/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://crumpler.bandcamp.com/album/stravinsky-three-pieces-for-clarinet-orchestral-suite',
          a_string: 'Stravinsky: Three Pieces for Clarinet (Orchestral Suite) by Bryan A. Crumpler, Composer/Orchestrator',
          rule: {
            "monday": [ 17, 23, 30, 12 ],
            "tuesday": [ 21, 27, 3, 16 ],
            "wednesday": [ 20, 26, 2, 15 ],
            "thursday": [ 19, 25, 1, 14 ],
            "saturday": [ 18, 24, 31, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3441416336/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kevinkastningmarkwingfield.bandcamp.com/album/the-line-to-three',
          a_string: 'The Line to Three by Kevin Kastning &amp; Mark Wingfield',
          rule: {
            "monday": [ 18, 24, 31, 13 ],
            "tuesday": [ 17, 23, 30, 12 ],
            "wednesday": [ 21, 27, 3, 16 ],
            "thursday": [ 20, 26, 2, 15 ],
            "saturday": [ 19, 25, 1, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=778726411/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://populistrecords.bandcamp.com/album/ashley-walters-sweet-anxiety',
          a_string: 'Ashley Walters // Sweet Anxiety by Ashley Walters',
          rule: {
            "monday": [ 19, 25, 1, 14 ],
            "tuesday": [ 18, 24, 31, 13 ],
            "wednesday": [ 17, 23, 30, 12 ],
            "thursday": [ 21, 27, 3, 16 ],
            "saturday": [ 20, 26, 2, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4240103389/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://populistrecords.bandcamp.com/album/nicholas-deyoe-for-duane',
          a_string: 'Nicholas Deyoe // for Duane by Nicholas Deyoe',
          rule: {
            "monday": [ 20, 26, 2, 15 ],
            "tuesday": [ 19, 25, 1, 14 ],
            "wednesday": [ 18, 24, 31, 13 ],
            "thursday": [ 17, 23, 30, 12 ],
            "saturday": [ 21, 27, 3, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'Avant Garde/New Music',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1683986704/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://weighter.bandcamp.com/album/unfinished-variations-for-jed-speare',
          a_string: 'Unfinished  Variations (for Jed Speare) by Morgan Evans-Weiler',
          rule: {
            "monday": [ 21, 27, 3, 16 ],
            "tuesday": [ 20, 26, 2, 15 ],
            "wednesday": [ 19, 25, 1, 14 ],
            "thursday": [ 18, 24, 31, 13 ],
            "saturday": [ 17, 23, 30, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('may_musics_id_seq', (SELECT MAX(id) FROM may_musics));");
    });
};
