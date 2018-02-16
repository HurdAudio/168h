'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('march_musics').del()
    .then(function () {
      // Inserts seed entries
      return knex('march_musics').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4119708928/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newamsterdamrecords.bandcamp.com/album/krai',
          a_string: 'Край (Krai) by Olga Bell',
          rule: {
            "monday": [4, 10, 16, 24],
            "tuesday": [3, 9, 15, 23],
            "wednesday": [2, 8, 14, 22],
            "thursday": [1, 7, 13, 21],
            "saturday": [5, 11, 17, 25]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=51640814/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://missymazzoli.bandcamp.com/album/vespers-for-a-new-dark-age',
          a_string: 'Vespers for a New Dark Age by Missy Mazzoli, Victoire, Glenn Kotche, Lorna Dune',
          rule: {
            "monday": [5, 11, 17, 25],
            "tuesday": [4, 10, 16, 24],
            "wednesday": [3, 9, 15, 23],
            "thursday": [2, 8, 14, 22],
            "saturday": [1, 7, 13, 21]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3714052139/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jodyredhage.bandcamp.com/album/of-minutiae-and-memory',
          a_string: 'of minutiae and memory by Jody Redhage',
          rule: {
            "monday": [1, 7, 13, 21],
            "tuesday": [5, 11, 17, 25],
            "wednesday": [4, 10, 16, 24],
            "thursday": [3, 9, 15, 23],
            "saturday": [2, 8, 14, 22]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1439897988/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://intaktrec.bandcamp.com/album/lonelyville',
          a_string: 'Lonelyville by Sylvie Courvoisier',
          rule: {
            "monday": [2, 8, 14, 22],
            "tuesday": [1, 7, 13, 21],
            "wednesday": [5, 11, 17, 25],
            "thursday": [4, 10, 16, 24],
            "saturday": [3, 9, 15, 23]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=784569706/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://intaktrec.bandcamp.com/album/passagio',
          a_string: 'Passagio by Sylvie Courvoisier, Joëlle Léandre, Susie Ibarra',
          rule: {
            "monday": [3, 9, 15, 23],
            "tuesday": [2, 8, 14, 22],
            "wednesday": [1, 7, 13, 21],
            "thursday": [5, 11, 17, 25],
            "saturday": [4, 10, 16, 24]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=513818594/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://firehouse12records.com/album/life-carries-me-this-way',
          a_string: 'Life Carries Me This Way by Myra Melford',
          rule: {
            "monday": [4, 10, 16, 24],
            "tuesday": [3, 9, 15, 23],
            "wednesday": [2, 8, 14, 22],
            "thursday": [1, 7, 13, 21],
            "saturday": [5, 11, 17, 25]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1989500445/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ditzner.bandcamp.com/album/free-flight',
          a_string: 'free flight by MARILYN CRISPELL, ERWIN DITZNER, SEBASTIAN GRAMSS',
          rule: {
            "monday": [6, 12, 18, 26],
            "tuesday": [5, 11, 17, 25],
            "wednesday": [4, 10, 16, 24],
            "thursday": [3, 9, 15, 23],
            "saturday": [2, 8, 14, 22]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1807806451/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ayler-records.bandcamp.com/album/can-you-hear-me',
          a_string: 'Can You Hear Me? by Joëlle Léandre',
          rule: {
            "monday": [2, 8, 14, 22],
            "tuesday": [6, 12, 18, 26],
            "wednesday": [5, 11, 17, 25],
            "thursday": [4, 10, 16, 24],
            "saturday": [3, 9, 15, 23]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2104549245/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bocian.bandcamp.com/album/scrumptious-sabotage',
          a_string: 'Scrumptious Sabotage by Ikue Mori &amp; Maja S.K. Ratkje',
          rule: {
            "monday": [3, 9, 15, 23],
            "tuesday": [2, 8, 14, 22],
            "wednesday": [6, 12, 18, 26],
            "thursday": [5, 11, 17, 25],
            "saturday": [4, 10, 16, 24]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1527382468/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lindaoh.bandcamp.com/album/sun-pictures',
          a_string: 'Sun Pictures by Linda Oh',
          rule: {
            "monday": [4, 10, 16, 24],
            "tuesday": [3, 9, 15, 23],
            "wednesday": [2, 8, 14, 22],
            "thursday": [6, 12, 18, 26],
            "saturday": [5, 11, 17, 25]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3065200155/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aphoniarecordings.bandcamp.com/album/sub-rosa',
          a_string: 'sub-Rosa by Amy Denio',
          rule: {
            "monday": [5, 11, 17, 25],
            "tuesday": [4, 10, 16, 24],
            "wednesday": [3, 9, 15, 23],
            "thursday": [2, 8, 14, 22],
            "saturday": [6, 12, 18, 26]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1571887307/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://amydenio.bandcamp.com/album/make-it-funky-god-2',
          a_string: 'Make It Funky God by The Billy Tipton Memorial Sax Quartet',
          rule: {
            "monday": [6, 12, 18, 26],
            "tuesday": [5, 11, 17, 25],
            "wednesday": [4, 10, 16, 24],
            "thursday": [3, 9, 15, 23],
            "saturday": [2, 8, 14, 22]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3001875899/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://infrequentseams.bandcamp.com/album/mzm',
          a_string: 'MZM by Miya Masaoka, Zeena Parkins, Myra Melford',
          rule: {
            "monday": [ 2, 8, 14, 22 ],
            "tuesday": [ 6, 12, 18, 26 ],
            "wednesday": [ 5, 11, 17, 25 ],
            "thursday": [ 4, 10, 16, 24 ],
            "saturday": [ 3, 9, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=769961488/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://conniecrothersvirgdzurinkotwo-pianoquintet.bandcamp.com/album/connie-crothers-virg-dzurinko-two-piano-quintet',
          a_string: 'Connie Crothers/Virg Dzurinko Two-Piano Quintet by Connie Crothers/Virg Dzurinko Two-Piano Quintet',
          rule: {
            "monday": [ 4, 10, 16, 24 ],
            "tuesday": [ 3, 9, 15, 23 ],
            "wednesday": [ 7, 13, 19, 27 ],
            "thursday": [ 6, 12, 18, 26 ],
            "saturday": [ 5, 11, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1288456079/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lydialunch.bandcamp.com/album/retrovirus',
          a_string: 'Retrovirus by Lydia Lunch',
          rule: {
            "monday": [ 5, 11, 17, 25 ],
            "tuesday": [ 4, 10, 16, 24 ],
            "wednesday": [ 3, 9, 15, 23 ],
            "thursday": [ 7, 13, 19, 27 ],
            "saturday": [ 6, 12, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1981644578/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zeenaparkins.bandcamp.com/album/three-harps-tuning-forks-electronics-2',
          a_string: 'Three Harps, Tuning Forks &amp; Electronics by Zeena Parkins',
          rule: {
            "monday": [ 6, 12, 18, 26 ],
            "tuesday": [ 5, 11, 17, 25 ],
            "wednesday": [ 4, 10, 16, 24 ],
            "thursday": [ 3, 9, 15, 23 ],
            "saturday": [ 7, 13, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3762222841/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://leonelkaplan.bandcamp.com/album/silo',
          a_string: 'Silo by Audrey Chen, Leonel Kaplan, Nate Wooley',
          rule: {
            "monday": [ 7, 13, 19, 27 ],
            "tuesday": [ 6, 12, 18, 26 ],
            "wednesday": [ 5, 11, 17, 25 ],
            "thursday": [ 4, 10, 16, 24 ],
            "saturday": [ 3, 9, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=414719190/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://inexhaustibleeditions.bandcamp.com/album/scoriacon',
          a_string: 'Scoriacon by Réplica: Birgit Ulher / Felipe Araya',
          rule: {
            "monday": [ 3, 9, 15, 23 ],
            "tuesday": [ 7, 13, 19, 27 ],
            "wednesday": [ 6, 12, 18, 26 ],
            "thursday": [ 5, 11, 17, 25 ],
            "saturday": [ 4, 10, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2553087840/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://amydenio.bandcamp.com/album/birthing-chair-blues',
          a_string: 'Birthing Chair Blues by Amy Denio / Spoot Music',
          rule: {
            "monday": [ 4, 10, 16, 24 ],
            "tuesday": [ 3, 9, 15, 23 ],
            "wednesday": [ 7, 13, 19, 27 ],
            "thursday": [ 6, 12, 18, 26 ],
            "saturday": [ 5, 11, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1251608128/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://missymazzoli.bandcamp.com/album/song-from-the-uproar',
          a_string: 'Song From the Uproar by Missy Mazzoli, Abigail Fischer, and NOW Ensemble',
          rule: {
            "monday": [ 5, 11, 17, 25 ],
            "tuesday": [ 4, 10, 16, 24 ],
            "wednesday": [ 3, 9, 15, 23 ],
            "thursday": [ 7, 13, 19, 27 ],
            "saturday": [ 6, 12, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3264313737/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://avamendozamusic.bandcamp.com/album/quit-your-unnatural-ways',
          a_string: 'Quit Your Unnatural Ways by Ava Mendoza &amp; Nick Tamburro',
          rule: {
            "monday": [ 7, 13, 19, 27 ],
            "tuesday": [ 6, 12, 18, 26 ],
            "wednesday": [ 5, 11, 17, 25 ],
            "thursday": [ 4, 10, 16, 24 ],
            "saturday": [ 8, 14, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1924932317/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rectangle-records.bandcamp.com/album/dire-du-dire',
          a_string: 'Dire du dire by Joëlle Léandre',
          rule: {
            "monday": [ 8, 14, 20, 28 ],
            "tuesday": [ 7, 13, 19, 27 ],
            "wednesday": [ 6, 12, 18, 26 ],
            "thursday": [ 5, 11, 17, 25 ],
            "saturday": [ 4, 10, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=2248117061/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://firehouse12records.com/album/the-whole-tree-gone',
          a_string: 'The Whole Tree Gone by Myra Melford&#39;s Be Bread',
          rule: {
            "monday": [ 4, 10, 16, 24 ],
            "tuesday": [ 8, 14, 20, 28 ],
            "wednesday": [ 7, 13, 19, 27 ],
            "thursday": [ 6, 12, 18, 26 ],
            "saturday": [ 5, 11, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3990709858/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://maryhalvorson.bandcamp.com/album/away-with-you',
          a_string: 'Away With You by Mary Halvorson',
          rule: {
            "monday": [ 5, 11, 17, 25 ],
            "tuesday": [ 4, 10, 16, 24 ],
            "wednesday": [ 8, 14, 20, 28 ],
            "thursday": [ 7, 13, 19, 27 ],
            "saturday": [ 6, 12, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3449127882/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://longsongrecords.bandcamp.com/album/duet',
          a_string: 'DUET by Satoko Fujii, Joe Fonda',
          rule: {
            "monday": [ 6, 12, 18, 26 ],
            "tuesday": [ 5, 11, 17, 25 ],
            "wednesday": [ 4, 10, 16, 24 ],
            "thursday": [ 8, 14, 20, 28 ],
            "saturday": [ 7, 13, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3989473477/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rovasaxophonequartet.bandcamp.com/album/an-alligator-in-your-wallet',
          a_string: 'An Alligator in Your Wallet by Rova Sax Quartet + Satoko Fujii + Orkestrova',
          rule: {
            "monday": [ 7, 13, 19, 27 ],
            "tuesday": [ 6, 12, 18, 26 ],
            "wednesday": [ 5, 11, 17, 25 ],
            "thursday": [ 4, 10, 16, 24 ],
            "saturday": [ 8, 14, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2665408563/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://amydenio.bandcamp.com/album/tone-dogs-ankety-low-day',
          a_string: 'Tone Dogs: Ankety Low Day by Amy Denio / Spoot Music',
          rule: {
            "monday": [ 8, 14, 20, 28 ],
            "tuesday": [ 7, 13, 19, 27 ],
            "wednesday": [ 6, 12, 18, 26 ],
            "thursday": [ 5, 11, 17, 25 ],
            "saturday": [ 4, 10, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=379150300/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://finderskeepersrecords.bandcamp.com/album/buchla-concerts-1975',
          a_string: 'Buchla Concerts 1975 by Suzanne Ciani',
          rule: {
            "monday": [ 5, 11, 17, 25 ],
            "tuesday": [ 9, 15, 21, 29 ],
            "wednesday": [ 8, 14, 20, 28 ],
            "thursday": [ 7, 13, 19, 27 ],
            "saturday": [ 6, 12, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2173569023/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://franreed.bandcamp.com/album/soop-kitchen',
          a_string: 'Soop Kitchen by Fran Reed',
          rule: {
            "monday": [ 6, 12, 18, 26 ],
            "tuesday": [ 5, 11, 17, 25 ],
            "wednesday": [ 9, 15, 21, 29 ],
            "thursday": [ 8, 14, 20, 28 ],
            "saturday": [ 7, 13, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2960999910/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://senufoeditions.bandcamp.com/album/geelriandre-arthesis',
          a_string: 'Geelriandre / Arthesis by Eliane Radigue',
          rule: {
            "monday": [ 7, 13, 19, 27 ],
            "tuesday": [ 6, 12, 18, 26 ],
            "wednesday": [ 5, 11, 17, 25 ],
            "thursday": [ 9, 15, 21, 29 ],
            "saturday": [ 8, 14, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=64459792/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://janelleppin.bandcamp.com/album/american-god',
          a_string: 'American God by Mellow Diamond',
          rule: {
            "monday": [ 8, 14, 20, 28 ],
            "tuesday": [ 7, 13, 19, 27 ],
            "wednesday": [ 6, 12, 18, 26 ],
            "thursday": [ 5, 11, 17, 25 ],
            "saturday": [ 9, 15, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3182866185/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://darktree.bandcamp.com/album/en-corps',
          a_string: 'En Corps by Eve Risser • Benjamin Duboc • Edward Perraud',
          rule: {
            "monday": [ 9, 15, 21, 29 ],
            "tuesday": [ 8, 14, 20, 28 ],
            "wednesday": [ 7, 13, 19, 27 ],
            "thursday": [ 6, 12, 18, 26 ],
            "saturday": [ 5, 11, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2614010070/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://soundanatomy.bandcamp.com/album/hiss-and-viscera',
          a_string: 'Hiss and Viscera by Audrey Chen &amp; Richard Scott',
          rule: {
            "monday": [ 5, 11, 17, 25 ],
            "tuesday": [ 9, 15, 21, 29 ],
            "wednesday": [ 8, 14, 20, 28 ],
            "thursday": [ 7, 13, 19, 28 ],
            "saturday": [ 6, 12, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1696851893/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://unseenworlds.bandcamp.com/album/the-expanding-universe',
          a_string: 'The Expanding Universe by Laurie Spiegel',
          rule: {
            "monday": [ 6, 12, 18, 26 ],
            "tuesday": [ 5, 11, 17, 25 ],
            "wednesday": [ 9, 15, 21, 29 ],
            "thursday": [ 8, 14, 20, 28 ],
            "saturday": [ 7, 13, 19, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3639273125/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://unseenworlds.bandcamp.com/album/the-death-of-don-juan',
          a_string: 'The Death of Don Juan by Elodie Lauten',
          rule: {
            "monday": [ 8, 14, 20, 29 ],
            "tuesday": [ 7, 13, 19, 27 ],
            "wednesday": [ 6, 12, 18, 26 ],
            "thursday": [ 10, 16, 22, 30 ],
            "saturday": [ 9, 15, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1241345468/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://biancaaviaz.bandcamp.com/album/arco-iris',
          a_string: 'Arco-Iris by Bianca Aviaz',
          rule: {
            "monday": [ 9, 15, 21, 29 ],
            "tuesday": [ 8, 14, 20, 29 ],
            "wednesday": [ 7, 13, 19, 27 ],
            "thursday": [ 6, 12, 18, 26 ],
            "saturday": [ 10, 16, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2532295302/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://konvojrecords.bandcamp.com/album/squid-police',
          a_string: 'Squid Police by Lotte Anker &amp; Jakob Riis',
          rule: {
            "monday": [ 10, 16, 22, 30 ],
            "tuesday": [ 9, 15, 21, 29 ],
            "wednesday": [ 8, 14, 20, 29 ],
            "thursday": [ 7, 13, 19, 27 ],
            "saturday": [ 6, 12, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1707925128/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ideologicorgan.bandcamp.com/album/ghil',
          a_string: 'Ghil by Okkyung Lee',
          rule: {
            "monday": [ 6, 12, 18, 26 ],
            "tuesday": [ 10, 16, 22, 30 ],
            "wednesday": [ 9, 15, 21, 29 ],
            "thursday": [ 8, 14, 20, 29 ],
            "saturday": [ 7, 13, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2569024353/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://intlanthem.bandcamp.com/album/not-living-in-fear',
          a_string: 'Not Living in Fear by Hear in Now (Mazz Swift, Tomeka Reid, Silvia Bolognesi)',
          rule: {
            "monday": [ 7, 13, 19, 27 ],
            "tuesday": [ 6, 12, 18, 26 ],
            "wednesday": [ 10, 16, 22, 30 ],
            "thursday": [ 9, 15, 21, 29 ],
            "saturday": [ 8, 14, 20, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=243232998/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://janelleppin.bandcamp.com/album/mellow-diamond',
          a_string: 'Mellow Diamond by Janel Leppin',
          rule: {
            "monday": [ 8, 14, 20, 29 ],
            "tuesday": [ 7, 13, 19, 27 ],
            "wednesday": [ 6, 12, 18, 26 ],
            "thursday": [ 10, 16, 22, 30 ],
            "saturday": [ 9, 15, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3942018341/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://liminalsoundseries.bandcamp.com/album/susan-alcorn-21415',
          a_string: 'Susan Alcorn 2.14.15 by Liminal Sound Series',
          rule: {
            "monday": [ 9, 15, 21, 29 ],
            "tuesday": [ 8, 14, 20, 29 ],
            "wednesday": [ 7, 13, 19, 27 ],
            "thursday": [ 6, 12, 18, 26 ],
            "saturday": [ 10, 16, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2550162340/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://marissanadler.bandcamp.com/album/marissa-nadler',
          a_string: 'Marissa Nadler by Marissa Nadler',
          rule: {
            "monday": [ 11, 17, 23, 31 ],
            "tuesday": [ 10, 16, 22, 30 ],
            "wednesday": [ 9, 15, 21, 30 ],
            "thursday": [ 8, 14, 20, 28 ],
            "saturday": [ 7, 13, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4221021472/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hollyherndon.bandcamp.com/album/platform',
          a_string: 'Platform by Holly Herndon',
          rule: {
            "monday": [ 7, 13, 19, 27 ],
            "tuesday": [ 11, 17, 23, 31 ],
            "wednesday": [ 10, 16, 22, 30 ],
            "thursday": [ 9, 15, 21, 30 ],
            "saturday": [ 8, 14, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2090833281/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://laurelhalo.bandcamp.com/album/laurel-halo-dust-hdblp036',
          a_string: 'Laurel Halo: Dust (HDBLP036) by Laurel Halo',
          rule: {
            "monday": [ 8, 14, 20, 28 ],
            "tuesday": [ 7, 13, 19, 27 ],
            "wednesday": [ 11, 17, 23, 31 ],
            "thursday": [ 10, 16, 22, 30 ],
            "saturday": [ 9, 15, 21, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2765736108/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jlin.bandcamp.com/album/black-origami',
          a_string: 'Black Origami by Jlin',
          rule: {
            "monday": [ 9, 15, 21, 30 ],
            "tuesday": [ 8, 14, 20, 28 ],
            "wednesday": [ 7, 13, 19, 27 ],
            "thursday": [ 11, 17, 23, 31 ],
            "saturday": [ 10, 16, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2412125441/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://laubrock-intakt.bandcamp.com/album/serpentines',
          a_string: 'Serpentines by Ingrid Laubrock',
          rule: {
            "monday": [ 10, 16, 22, 30 ],
            "tuesday": [ 9, 15, 21, 30 ],
            "wednesday": [ 8, 14, 20, 28 ],
            "thursday": [ 7, 13, 19, 27 ],
            "saturday": [ 11, 17, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4017614520/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jessicapavone.bandcamp.com/album/walking-sleeping-breathing',
          a_string: 'Walking, Sleeping, Breathing by Jessica Pavone',
          rule: {
            "monday": [ 11, 17, 23, 31 ],
            "tuesday": [ 10, 16, 22, 30 ],
            "wednesday": [ 9, 15, 21, 30 ],
            "thursday": [ 8, 14, 20, 28 ],
            "saturday": [ 7, 13, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1050554170/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://krisdavis.bandcamp.com/album/duopoly',
          a_string: 'Duopoly by Kris Davis',
          rule: {
            "monday": [ 7, 13, 19, 27 ],
            "tuesday": [ 11, 17, 23, 31 ],
            "wednesday": [ 10, 16, 22, 30 ],
            "thursday": [ 9, 15, 21, 30 ],
            "saturday": [ 8, 14, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=787965443/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://parishurley.bandcamp.com/album/the-sketch-series-1',
          a_string: 'THE SKETCH SERIES__1 by Paris Hurley',
          rule: {
            "monday": [ 9, 15, 21, 29 ],
            "tuesday": [ 8, 14, 20, 28 ],
            "wednesday": [ 12, 18, 24, 1 ],
            "thursday": [ 11, 17, 23, 31 ],
            "saturday": [ 10, 16, 22, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2252879736/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://amydenio.bandcamp.com/album/tiptons-sax-quartet-cookbook',
          a_string: 'Tiptons Sax Quartet: COOKBOOK by Amy Denio / Spoot Music',
          rule: {
            "monday": [ 10, 16, 22, 31 ],
            "tuesday": [ 9, 15, 21, 29 ],
            "wednesday": [ 8, 14, 20, 28 ],
            "thursday": [ 12, 18, 24, 1 ],
            "saturday": [ 11, 17, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2034543457/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://triodakali-kronosquartet.bandcamp.com/album/ladilikan',
          a_string: 'Ladilikan by Trio Da Kali and Kronos Quartet',
          rule: {
            "monday": [ 11, 17, 23, 31 ],
            "tuesday": [ 10, 16, 22, 31 ],
            "wednesday": [ 9, 15, 21, 29 ],
            "thursday": [ 8, 14, 20, 28 ],
            "saturday": [ 12, 18, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=24344286/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kalmanovitch.bandcamp.com/album/heart-mountain-myra-melford-tanya-kalmanovitch',
          a_string: 'Heart Mountain // Myra Melford + Tanya Kalmanovitch by Myra Melford and Tanya Kalmanovitch',
          rule: {
            "monday": [ 12, 18, 24, 1 ],
            "tuesday": [ 11, 17, 23, 31 ],
            "wednesday": [ 10, 16, 22, 31 ],
            "thursday": [ 9, 15, 21, 29 ],
            "saturday": [ 8, 14, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1145363017/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zara-mcfarlane.bandcamp.com/album/arise',
          a_string: 'Arise by Zara Mcfarlane',
          rule: {
            "monday": [ 8, 14, 20, 28 ],
            "tuesday": [ 12, 18, 24, 1 ],
            "wednesday": [ 11, 17, 23, 31 ],
            "thursday": [ 10, 16, 22, 31 ],
            "saturday": [ 9, 15, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4034378625/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://janelleppin.bandcamp.com/album/songs-for-voice-and-mellotron',
          a_string: 'Songs for Voice and Mellotron by Janel Leppin',
          rule: {
            "monday": [ 9, 15, 21, 29 ],
            "tuesday": [ 8, 14, 20, 28 ],
            "wednesday": [ 12, 18, 24, 1 ],
            "thursday": [ 11, 17, 23, 31 ],
            "saturday": [ 10, 16, 22, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1625068785/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lydialunch.bandcamp.com/album/hangover-hotel',
          a_string: 'Hangover Hotel by Lydia Lunch',
          rule: {
            "monday": [ 10, 16, 22, 31 ],
            "tuesday": [ 9, 15, 21, 29 ],
            "wednesday": [ 8, 14, 20, 28 ],
            "thursday": [ 12, 18, 24, 1 ],
            "saturday": [ 11, 17, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3060445668/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sephinello.bandcamp.com/album/flame',
          a_string: 'Flame by Sephine Llo',
          rule: {
            "monday": [ 12, 18, 24, 1 ],
            "tuesday": [ 11, 17, 23, 1 ],
            "wednesday": [ 10, 16, 22, 30 ],
            "thursday": [ 9, 15, 21, 29 ],
            "saturday": [ 13, 19, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4016065555/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aphoniarecordings.bandcamp.com/album/natricinae',
          a_string: 'natricinae by Dancing for the Flesh',
          rule: {
            "monday": [ 13, 19, 25, 2 ],
            "tuesday": [ 12, 18, 24, 1 ],
            "wednesday": [ 11, 17, 23, 1 ],
            "thursday": [ 10, 16, 22, 30 ],
            "saturday": [ 9, 15, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1386012059/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://victoire.bandcamp.com/album/cathedral-city',
          a_string: 'Cathedral City by Victoire',
          rule: {
            "monday": [ 9, 15, 21, 29 ],
            "tuesday": [ 13, 19, 25, 2 ],
            "wednesday": [ 12, 18, 24, 1 ],
            "thursday": [ 11, 17, 23, 1 ],
            "saturday": [ 10, 16, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=827414202/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://anasilvera.bandcamp.com/album/the-aviary',
          a_string: 'The Aviary by Ana Silvera',
          rule: {
            "monday": [ 10, 16, 22, 30 ],
            "tuesday": [ 9, 15, 21, 29 ],
            "wednesday": [ 13, 19, 25, 2 ],
            "thursday": [ 12, 18, 24, 1 ],
            "saturday": [ 11, 17, 23, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=1485264710/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://music.sofiatalvik.com/album/the-owls-are-not-what-they-seem',
          a_string: 'The Owls Are Not What They Seem by Sofia Talvik',
          rule: {
            "monday": [ 11, 17, 23, 1 ],
            "tuesday": [ 10, 16, 22, 30 ],
            "wednesday": [ 9, 15, 21, 29 ],
            "thursday": [ 13, 19, 25, 2 ],
            "saturday": [ 12, 18, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=749764053/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://torihandsleytrio.bandcamp.com/album/tori-handsley-trio',
          a_string: 'TORI HANDSLEY TRIO by TORI HANDSLEY TRIO',
          rule: {
            "monday": [ 12, 18, 24, 1 ],
            "tuesday": [ 11, 17, 23, 1 ],
            "wednesday": [ 10, 16, 22, 30 ],
            "thursday": [ 9, 15, 21, 29 ],
            "saturday": [ 13, 19, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=806085606/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nerijamusic.bandcamp.com/album/n-rija-ep',
          a_string: 'NÉRIJA EP by NÉRIJA',
          rule: {
            "monday": [ 13, 19, 25, 2 ],
            "tuesday": [ 12, 18, 24, 1 ],
            "wednesday": [ 11, 17, 23, 1 ],
            "thursday": [ 10, 16, 22, 30 ],
            "saturday": [ 9, 15, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2712715838/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://xeniarubinos.bandcamp.com/album/black-terry-cat',
          a_string: 'Black Terry Cat by Xenia Rubinos',
          rule: {
            "monday": [ 10, 16, 22, 30 ],
            "tuesday": [ 14, 20, 26, 3 ],
            "wednesday": [ 13, 19, 25, 2 ],
            "thursday": [ 12, 18, 24, 2 ],
            "saturday": [ 11, 17, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3555060177/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://yullippe.bandcamp.com/album/lys',
          a_string: 'Lys by Yullippe',
          rule: {
            "monday": [ 11, 17, 23, 31 ],
            "tuesday": [ 10, 16, 22, 30 ],
            "wednesday": [ 14, 20, 26, 3 ],
            "thursday": [ 13, 19, 25, 2 ],
            "saturday": [ 12, 18, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=37961648/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mapledeathrecords.bandcamp.com/album/contravveleno',
          a_string: 'Contravveleno by Havah',
          rule: {
            "monday": [ 12, 18, 24, 2 ],
            "tuesday": [ 11, 17, 23, 31 ],
            "wednesday": [ 10, 16, 22, 30 ],
            "thursday": [ 14, 20, 26, 3 ],
            "saturday": [ 13, 19, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3641669032/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chaptermusic.bandcamp.com/album/second-of-spring',
          a_string: 'Second Of Spring by Beaches',
          rule: {
            "monday": [ 13, 19, 25, 2 ],
            "tuesday": [ 12, 18, 24, 2 ],
            "wednesday": [ 11, 17, 23, 31 ],
            "thursday": [ 10, 16, 22, 30 ],
            "saturday": [ 14, 20, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=1901731418/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://music.zoekeating.com/album/into-the-trees',
          a_string: 'Into The Trees by Zoe Keating',
          rule: {
            "monday": [ 14, 20, 26, 3 ],
            "tuesday": [ 13, 19, 25, 2 ],
            "wednesday": [ 12, 18, 24, 2 ],
            "thursday": [ 11, 17, 23, 31 ],
            "saturday": [ 10, 16, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=3432380151/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://music.zoekeating.com/album/one-cello-x-16-natoma',
          a_string: 'One Cello x 16: Natoma by Zoe Keating',
          rule: {
            "monday": [ 10, 16, 22, 30 ],
            "tuesday": [ 14, 20, 26, 3 ],
            "wednesday": [ 13, 19, 25, 2 ],
            "thursday": [ 12, 18, 24, 2 ],
            "saturday": [ 11, 17, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2635428819/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://waitingroomrecords.bandcamp.com/album/subnormal-girls-diy-post-punk-1979-1983-volume-1',
          a_string: 'SUBNORMAL GIRLS - DIY/POST PUNK 1979-1983 - VOLUME 1 by SUBNORMAL GIRLS',
          rule: {
            "monday": [ 11, 17, 23, 31 ],
            "tuesday": [ 10, 16, 22, 30 ],
            "wednesday": [ 14, 20, 26, 3 ],
            "thursday": [ 13, 19, 25, 2 ],
            "saturday": [ 12, 18, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3571627808/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://commonholly.bandcamp.com/album/playing-house-2',
          a_string: 'Playing House by Common Holly',
          rule: {
            "monday": [ 13, 19, 25, 3 ],
            "tuesday": [ 12, 18, 24, 1 ],
            "wednesday": [ 11, 17, 23, 31 ],
            "thursday": [ 15, 21, 27, 4 ],
            "saturday": [ 14, 20, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1020001840/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://julienbaker.bandcamp.com/album/sprained-ankle-3',
          a_string: 'Sprained Ankle by Julien Baker',
          rule: {
            "monday": [ 14, 20, 26, 3 ],
            "tuesday": [ 13, 19, 25, 3 ],
            "wednesday": [ 12, 18, 24, 1 ],
            "thursday": [ 11, 17, 23, 31 ],
            "saturday": [ 15, 21, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2791496554/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://paulineoliveros1.bandcamp.com/album/dunrobin-sonic-gems',
          a_string: 'Dunrobin Sonic Gems by Deep Listening Band',
          rule: {
            "monday": [ 15, 21, 27, 4 ],
            "tuesday": [ 14, 20, 26, 3 ],
            "wednesday": [ 13, 19, 25, 3 ],
            "thursday": [ 12, 18, 24, 1 ],
            "saturday": [ 11, 17, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2763598205/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://melaniedebiasio.bandcamp.com/album/lilies',
          a_string: 'Lilies by Melanie De Biasio',
          rule: {
            "monday": [ 11, 17, 23, 31 ],
            "tuesday": [ 15, 21, 27, 4 ],
            "wednesday": [ 14, 20, 26, 3 ],
            "thursday": [ 13, 19, 25, 3 ],
            "saturday": [ 12, 18, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2670324524/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zara-mcfarlane.bandcamp.com/album/if-you-knew-her-2',
          a_string: 'If You Knew Her by Zara Mcfarlane',
          rule: {
            "monday": [ 12, 18, 24, 1 ],
            "tuesday": [ 11, 17, 23, 31 ],
            "wednesday": [ 15, 21, 27, 4 ],
            "thursday": [ 14, 20, 26, 3 ],
            "saturday": [ 13, 19, 25, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1336511343/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://racheltherrien.bandcamp.com/album/why-dont-you-try-wdyt',
          a_string: 'Why Don&#39;t You Try (WDYT) by Rachel Therrien Quintet',
          rule: {
            "monday": [ 13, 19, 25, 3 ],
            "tuesday": [ 12, 18, 24, 1 ],
            "wednesday": [ 11, 17, 23, 31 ],
            "thursday": [ 15, 21, 27, 4 ],
            "saturday": [ 14, 20, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3559103663/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kaitlynaureliasmith.bandcamp.com/album/the-kid',
          a_string: 'The Kid by Kaitlyn Aurelia Smith',
          rule: {
            "monday": [ 14, 20, 26, 3 ],
            "tuesday": [ 13, 19, 25, 3 ],
            "wednesday": [ 12, 18, 24, 1 ],
            "thursday": [ 11, 17, 23, 31 ],
            "saturday": [ 15, 21, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3987451963/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://linguaignota.bandcamp.com/album/all-bitches-die',
          a_string: 'ALL BITCHES DIE by LINGUA IGNOTA',
          rule: {
            "monday": [ 16, 22, 28, 5 ],
            "tuesday": [ 15, 21, 27, 4 ],
            "wednesday": [ 14, 20, 26, 4 ],
            "thursday": [ 13, 19, 25, 2 ],
            "saturday": [ 12, 18, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3891158978/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chelseawolfe.bandcamp.com/album/hiss-spun',
          a_string: 'Hiss Spun by CHELSEA WOLFE',
          rule: {
            "monday": [ 12, 18, 24, 1 ],
            "tuesday": [ 16, 22, 28, 5 ],
            "wednesday": [ 15, 21, 27, 4 ],
            "thursday": [ 14, 20, 26, 4 ],
            "saturday": [ 13, 19, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2510087450/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tiftmerritt.bandcamp.com/album/stitch-of-the-world-deluxe-edition',
          a_string: 'Stitch of the World (Deluxe Edition) by Tift Merritt',
          rule: {
            "monday": [ 13, 19, 25, 2 ],
            "tuesday": [ 12, 18, 24, 1 ],
            "wednesday": [ 16, 22, 28, 5 ],
            "thursday": [ 15, 21, 27, 4 ],
            "saturday": [ 14, 20, 26, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=217442972/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://greyegg.bandcamp.com/album/albumen',
          a_string: 'Albumen by Grey Egg',
          rule: {
            "monday": [ 14, 20, 26, 4 ],
            "tuesday": [ 13, 19, 25, 2 ],
            "wednesday": [ 12, 18, 24, 1 ],
            "thursday": [ 16, 22, 28, 5 ],
            "saturday": [ 15, 21, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1633715698/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://greyegg.bandcamp.com/album/indoor-ski',
          a_string: 'Indoor Ski by Grey Egg',
          rule: {
            "monday": [ 15, 21, 27, 4  ],
            "tuesday": [ 14, 20, 26, 4 ],
            "wednesday": [ 13, 19, 25, 2 ],
            "thursday": [ 12, 18, 24, 1 ],
            "saturday": [ 16, 22, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=581844588/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lawitches.bandcamp.com/album/l-a-witch-2',
          a_string: 'L.A. WITCH by L.A. WITCH',
          rule: {
            "monday": [ 16, 22, 28, 5 ],
            "tuesday": [ 15, 21, 27, 4 ],
            "wednesday": [ 14, 20, 26, 4 ],
            "thursday": [ 13, 19, 25, 2 ],
            "saturday": [ 12, 18, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3414326465/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thecoathangers.bandcamp.com/album/parasite',
          a_string: 'Parasite by The Coathangers',
          rule: {
            "monday": [ 12, 18, 24, 1 ],
            "tuesday": [ 16, 22, 28, 5 ],
            "wednesday": [ 15, 21, 27, 4 ],
            "thursday": [ 14, 20, 26, 4 ],
            "saturday": [ 13, 19, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1857300793/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://xirecords.bandcamp.com/album/body-music',
          a_string: 'Body Music by Ellen Fullman',
          rule: {
            "monday": [ 14, 20, 26, 3 ],
            "tuesday": [ 13, 19, 25, 2 ],
            "wednesday": [ 17, 23, 29, 6 ],
            "thursday": [ 16, 22, 28, 5 ],
            "saturday": [ 15, 21, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/track=1509868074/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zamilskaofficial.bandcamp.com/track/closer',
          a_string: 'Closer by ZAMILSKA',
          rule: {
            "monday": [ 15, 21, 27, 5 ],
            "tuesday": [ 14, 20, 26, 3 ],
            "wednesday": [ 13, 19, 25, 2 ],
            "thursday": [ 17, 23, 29, 6 ],
            "saturday": [ 16, 22, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2641447131/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://blackesteverblack.bandcamp.com/album/you-know-what-its-like',
          a_string: 'You Know What It&#39;s Like by CARLA DAL FORNO',
          rule: {
            "monday": [ 16, 22, 28, 5 ],
            "tuesday": [ 15, 21, 27, 5 ],
            "wednesday": [ 14, 20, 26, 3 ],
            "thursday": [ 13, 19, 25, 2 ],
            "saturday": [ 17, 23, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3814644699/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jennyhval.bandcamp.com/album/blood-bitch',
          a_string: 'Blood Bitch by Jenny Hval',
          rule: {
            "monday": [ 17, 23, 29, 6 ],
            "tuesday": [ 16, 22, 28, 5 ],
            "wednesday": [ 15, 21, 27, 5 ],
            "thursday": [ 14, 20, 26, 3 ],
            "saturday": [ 13, 19, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2391212862/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nadahelshazly.bandcamp.com/album/ahwar',
          a_string: 'Ahwar by Nadah El Shazly',
          rule: {
            "monday": [ 13, 19, 25, 2 ],
            "tuesday": [ 17, 23, 29, 6 ],
            "wednesday": [ 16, 22, 28, 5 ],
            "thursday": [ 15, 21, 27, 5 ],
            "saturday": [ 14, 20, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2708727396/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bullythemusic.bandcamp.com/album/losing',
          a_string: 'Losing by Bully',
          rule: {
            "monday": [ 14, 20, 26, 3 ],
            "tuesday": [ 13, 19, 25, 2 ],
            "wednesday": [ 17, 23, 29, 6 ],
            "thursday": [ 16, 22, 28, 5 ],
            "saturday": [ 15, 21, 27, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3308242175/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://courtneybarnett.bandcamp.com/album/sometimes-i-sit-and-think-and-sometimes-i-just-sit',
          a_string: 'sometimes i sit and think, and sometimes i just sit by courtney barnett',
          rule: {
            "monday": [ 15, 21, 27, 5 ],
            "tuesday": [ 14, 20, 26, 3 ],
            "wednesday": [ 13, 19, 25, 2 ],
            "thursday": [ 17, 23, 29, 6 ],
            "saturday": [ 16, 22, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2305625765/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://xirecords.bandcamp.com/album/celestial-fires',
          a_string: 'Celestial Fires by Mary Jane Leach',
          rule: {
            "monday": [ 17, 23, 29, 6 ],
            "tuesday": [ 16, 22, 28, 6 ],
            "wednesday": [ 15, 21, 27, 4 ],
            "thursday": [ 14, 20, 26, 3 ],
            "saturday": [ 18, 24, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=896547347/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://xirecords.bandcamp.com/album/simoom',
          a_string: 'Simoom by Lois V Vierk',
          rule: {
            "monday": [ 18, 24, 30, 7 ],
            "tuesday": [ 17, 23, 29, 6 ],
            "wednesday": [ 16, 22, 28, 6 ],
            "thursday": [ 15, 21, 27, 4 ],
            "saturday": [ 14, 20, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2444727940/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sarah-elizabeth-charles.bandcamp.com/album/free-of-form',
          a_string: 'Free Of Form by Sarah Elizabeth Charles',
          rule: {
            "monday": [ 14, 20, 26, 3 ],
            "tuesday": [ 18, 24, 30, 7 ],
            "wednesday": [ 17, 23, 29, 6 ],
            "thursday": [ 16, 22, 28, 6 ],
            "saturday": [ 15, 21, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2196055513/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://racheltherrien.bandcamp.com/album/pensamiento-proyecto-colombia',
          a_string: 'Pensamiento: Proyecto Colombia by Rachel Therrien',
          rule: {
            "monday": [ 15, 21, 27, 4 ],
            "tuesday": [ 14, 20, 26, 3 ],
            "wednesday": [ 18, 24, 30, 7 ],
            "thursday": [ 17, 23, 29, 6 ],
            "saturday": [ 16, 22, 28, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2412671703/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ayumiishito.bandcamp.com/album/view-from-a-little-cave',
          a_string: 'View From A Little Cave by Ayumi Ishito',
          rule: {
            "monday": [ 16, 22, 28, 6 ],
            "tuesday": [ 15, 21, 27, 4 ],
            "wednesday": [ 14, 20, 26, 3 ],
            "thursday": [ 18, 24, 30, 7 ],
            "saturday": [ 17, 23, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1824113199/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://laurenleejazzproject.bandcamp.com/album/the-consciousness-test-2',
          a_string: 'The Consciousness Test by Lauren Lee &quot;Space Jazz&quot; Trio',
          rule: {
            "monday": [ 17, 23, 29, 6 ],
            "tuesday": [ 16, 22, 28, 6 ],
            "wednesday": [ 15, 21, 27, 4 ],
            "thursday": [ 14, 20, 26, 3 ],
            "saturday": [ 18, 24, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1898158998/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fperecs.bandcamp.com/album/mandorla-awakening-ii-emerging-worlds',
          a_string: 'Mandorla Awakening II: Emerging Worlds by Nicole Mitchell',
          rule: {
            "monday": [ 18, 24, 30, 7 ],
            "tuesday": [ 17, 23, 29, 6 ],
            "wednesday": [ 16, 22, 28, 6 ],
            "thursday": [ 15, 21, 27, 4 ],
            "saturday": [ 14, 20, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1009721373/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fperecs.bandcamp.com/album/intergalactic-beings',
          a_string: 'Intergalactic Beings by Nicole Mitchell&#39;s Black Earth Ensemble',
          rule: {
            "monday": [ 15, 21, 27, 4 ],
            "tuesday": [ 19, 25, 31, 8 ],
            "wednesday": [ 18, 24, 30, 7 ],
            "thursday": [ 17, 23, 29, 7 ],
            "saturday": [ 16, 22, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=3367325553/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://firehouse12records.com/album/xenogenesis-suite',
          a_string: 'Xenogenesis Suite by Nicole Mitchell&#39;s Black Earth Ensemble',
          rule: {
            "monday": [ 16, 22, 28, 5 ],
            "tuesday": [ 15, 21, 27, 4 ],
            "wednesday": [ 19, 25, 31, 8 ],
            "thursday": [ 18, 24, 30, 7 ],
            "saturday": [ 17, 23, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1784041014/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lydialunch.bandcamp.com/album/brutal-measures',
          a_string: 'Brutal Measures by Lydia Lunch and Weasel Walter',
          rule: {
            "monday": [ 17, 23, 29, 7 ],
            "tuesday": [ 16, 22, 28, 5 ],
            "wednesday": [ 15, 21, 27, 4 ],
            "thursday": [ 19, 25, 31, 8 ],
            "saturday": [ 18, 24, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4250172799/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://emaband.bandcamp.com/album/exile-in-the-outer-ring',
          a_string: 'Exile In The Outer Ring by EMA',
          rule: {
            "monday": [ 18, 24, 30, 7 ],
            "tuesday": [ 17, 23, 29, 7 ],
            "wednesday": [ 16, 22, 28, 5 ],
            "thursday": [ 15, 21, 27, 4 ],
            "saturday": [ 19, 25, 31, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1644131755/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theseshen.bandcamp.com/album/the-seshen',
          a_string: 'The Seshen by The Seshen',
          rule: {
            "monday": [ 19, 25, 31, 8 ],
            "tuesday": [ 18, 24, 30, 7 ],
            "wednesday": [ 17, 23, 29, 7 ],
            "thursday": [ 16, 22, 28, 5 ],
            "saturday": [ 15, 21, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=547011702/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gommegomme.bandcamp.com/album/hiss',
          a_string: 'Hiss by Gomme',
          rule: {
            "monday": [ 15, 21, 27, 4 ],
            "tuesday": [ 19, 25, 31, 8 ],
            "wednesday": [ 18, 24, 30, 7 ],
            "thursday": [ 17, 23, 29, 7 ],
            "saturday": [ 16, 22, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3119809886/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dangerrecords.bandcamp.com/album/dr-029-mary-bell-lp-sold-out',
          a_string: 'DR-029 // Mary Bell (LP) // sold out by MARY BELL',
          rule: {
            "monday": [ 16, 22, 28, 5 ],
            "tuesday": [ 15, 21, 27, 4 ],
            "wednesday": [ 19, 25, 31, 8 ],
            "thursday": [ 18, 24, 30, 7 ],
            "saturday": [ 17, 23, 29, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3499262377/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eeriewandabbib.bandcamp.com/album/hum',
          a_string: 'Hum by Eerie Wanda',
          rule: {
            "monday": [ 18, 24, 30, 8 ],
            "tuesday": [ 17, 23, 29, 6 ],
            "wednesday": [ 16, 22, 28, 5 ],
            "thursday": [ 20, 26, 1, 9 ],
            "saturday": [ 19, 25, 31, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2102278697/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://carolinemckenzie.bandcamp.com/album/the-drowning-of-ophelia',
          a_string: 'the drowning of ophelia by Caroline McKenzie',
          rule: {
            "monday": [ 19, 25, 31, 8 ],
            "tuesday": [ 18, 24, 30, 8 ],
            "wednesday": [ 17, 23, 29, 6 ],
            "thursday": [ 16, 22, 28, 5 ],
            "saturday": [ 20, 26, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=480935350/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kellymoran.bandcamp.com/album/optimist',
          a_string: 'optimist by kelly moran',
          rule: {
            "monday": [ 20, 26, 1, 9 ],
            "tuesday": [ 19, 25, 31, 8 ],
            "wednesday": [ 18, 24, 30, 8 ],
            "thursday": [ 17, 23, 29, 6 ],
            "saturday": [ 16, 22, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3281387428/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lunaabunassar.bandcamp.com/album/-',
          a_string: 'אספר לך  أحكيلِك by Luna Abu Nassar',
          rule: {
            "monday": [ 16, 22, 28, 5 ],
            "tuesday": [ 20, 26, 1, 9 ],
            "wednesday": [ 19, 25, 31, 8 ],
            "thursday": [ 18, 24, 30, 8 ],
            "saturday": [ 17, 23, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=737380834/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zolajesus.bandcamp.com/album/okovi',
          a_string: 'Okovi by Zola Jesus',
          rule: {
            "monday": [ 17, 23, 29, 6 ],
            "tuesday": [ 16, 22, 28, 5 ],
            "wednesday": [ 20, 26, 1, 9 ],
            "thursday": [ 19, 25, 31, 8 ],
            "saturday": [ 18, 24, 30, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3091200220/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chelseawolfe.bandcamp.com/album/abyss',
          a_string: 'Abyss by CHELSEA WOLFE',
          rule: {
            "monday": [ 18, 24, 30, 8 ],
            "tuesday": [ 17, 23, 29, 6 ],
            "wednesday": [ 16, 22, 28, 5 ],
            "thursday": [ 20, 26, 1, 9 ],
            "saturday": [ 19, 25, 31, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4122221096/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://emmaruthrundle.bandcamp.com/album/marked-for-death',
          a_string: 'Marked For Death by Emma Ruth Rundle',
          rule: {
            "monday": [ 19, 25, 31, 8 ],
            "tuesday": [ 18, 24, 30, 8 ],
            "wednesday": [ 17, 23, 29, 6 ],
            "thursday": [ 16, 22, 28, 5 ],
            "saturday": [ 20, 26, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1894361972/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sudanarchives.bandcamp.com/album/sudan-archives',
          a_string: 'Sudan Archives by Sudan Archives',
          rule: {
            "monday": [ 21, 27, 2, 10 ],
            "tuesday": [ 20, 26, 1, 9 ],
            "wednesday": [ 19, 25, 31, 9 ],
            "thursday": [ 18, 24, 30, 7 ],
            "saturday": [ 17, 23, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2820382927/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://waxahatchee.bandcamp.com/album/out-in-the-storm',
          a_string: 'Out in the Storm by Waxahatchee',
          rule: {
            "monday": [ 17, 23, 29, 6 ],
            "tuesday": [ 21, 27, 2, 10 ],
            "wednesday": [ 20, 26, 1, 9 ],
            "thursday": [ 19, 25, 31, 9 ],
            "saturday": [ 18, 24, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4186464351/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://caseydienel.bandcamp.com/album/imitation-of-a-woman-to-love',
          a_string: 'Imitation Of A Woman To Love by Casey Dienel',
          rule: {
            "monday": [ 18, 24, 30, 7 ],
            "tuesday": [ 17, 23, 29, 6 ],
            "wednesday": [ 21, 27, 2, 10 ],
            "thursday": [ 20, 26, 1, 9 ],
            "saturday": [ 19, 25, 31, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2276699715/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://yazzahmed.bandcamp.com/album/la-saboteuse-2',
          a_string: 'La Saboteuse by Yazz Ahmed',
          rule: {
            "monday": [ 19, 25, 31, 9 ],
            "tuesday": [ 18, 24, 30, 7 ],
            "wednesday": [ 17, 23, 29, 6 ],
            "thursday": [ 21, 27, 2, 10 ],
            "saturday": [ 20, 26, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1235529255/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tica-douglas-tl.bandcamp.com/album/our-lady-star-of-the-sea-help-and-protect-us',
          a_string: 'Our Lady Star of the Sea, Help and Protect Us by Tica Douglas',
          rule: {
            "monday": [ 20, 26, 1, 9 ],
            "tuesday": [ 19, 25, 31, 9 ],
            "wednesday": [ 18, 24, 30, 7 ],
            "thursday": [ 17, 23, 29, 6 ],
            "saturday": [ 21, 27, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2967472899/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kaitlynaureliasmith.bandcamp.com/album/frkwys-vol-13-sunergy',
          a_string: 'FRKWYS Vol. 13: Sunergy by Kaitlyn Aurelia Smith &amp; Suzanne Ciani',
          rule: {
            "monday": [ 21, 27, 2, 10 ],
            "tuesday": [ 20, 26, 1, 9 ],
            "wednesday": [ 19, 25, 31, 9 ],
            "thursday": [ 18, 24, 30, 7 ],
            "saturday": [ 17, 23, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1996930221/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://juliawolfemusic.bandcamp.com/album/anthracite-fields',
          a_string: 'Anthracite Fields by Julia Wolfe ft. Bang on a Can All-Stars &amp; Choir of Trinity Wall Street',
          rule: {
            "monday": [ 17, 23, 29, 6 ],
            "tuesday": [ 21, 27, 2, 10 ],
            "wednesday": [ 20, 26, 1, 9 ],
            "thursday": [ 19, 25, 31, 9 ],
            "saturday": [ 18, 24, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2053619610/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kellymoran.bandcamp.com/album/bloodroot',
          a_string: 'bloodroot by kelly moran',
          rule: {
            "monday": [ 19, 25, 31, 8 ],
            "tuesday": [ 18, 24, 30, 7 ],
            "wednesday": [ 22, 28, 3, 11 ],
            "thursday": [ 21, 27, 2, 10 ],
            "saturday": [ 20, 26, 1, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2278856669/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deliagonzalez.bandcamp.com/album/horse-follows-darkness',
          a_string: 'Horse Follows Darkness by Delia Gonzalez',
          rule: {
            "monday": [ 20, 26, 1, 10 ],
            "tuesday": [ 19, 25, 31, 8 ],
            "wednesday": [ 18, 24, 30, 7 ],
            "thursday": [ 22, 28, 3, 11 ],
            "saturday": [ 21, 27, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4268123099/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://blush.bandcamp.com/album/blush',
          a_string: 'Blush by Blush',
          rule: {
            "monday": [ 21, 27, 2, 10 ],
            "tuesday": [ 20, 26, 1, 10 ],
            "wednesday": [ 19, 25, 31, 8 ],
            "thursday": [ 18, 24, 30, 7 ],
            "saturday": [ 22, 28, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=956878438/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://krisdelmhorst.bandcamp.com/album/the-wild',
          a_string: 'The Wild by Kris Delmhorst',
          rule: {
            "monday": [ 22, 28, 3, 11 ],
            "tuesday": [ 21, 27, 2, 10 ],
            "wednesday": [ 20, 26, 1, 10 ],
            "thursday": [ 19, 25, 31, 8 ],
            "saturday": [ 18, 24, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=414875454/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://adriannelenker.bandcamp.com/album/hours-were-the-birds',
          a_string: 'Hours Were The Birds by Adrianne Lenker',
          rule: {
            "monday": [ 18, 24, 30, 7 ],
            "tuesday": [ 22, 28, 3, 11 ],
            "wednesday": [ 21, 27, 2, 10 ],
            "thursday": [ 20, 26, 1, 10 ],
            "saturday": [ 19, 25, 31, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3542745491/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://amydenio.bandcamp.com/album/the-big-embrace-2',
          a_string: 'The Big Embrace by Amy Denio / Spoot Music',
          rule: {
            "monday": [ 19, 25, 31, 8 ],
            "tuesday": [ 18, 24, 30, 7 ],
            "wednesday": [ 22, 28, 3, 11 ],
            "thursday": [ 21, 27, 2, 10 ],
            "saturday": [ 20, 26, 1, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2027131940/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://amydenio.bandcamp.com/album/tone-dogs-live-in-haarlem-nl-1988',
          a_string: 'Tone Dogs live in Haarlem, NL 1988 by Tone Dogs',
          rule: {
            "monday": [ 20, 26, 1, 10 ],
            "tuesday": [ 19, 25, 31, 8 ],
            "wednesday": [ 18, 24, 30, 7 ],
            "thursday": [ 22, 28, 3, 11 ],
            "saturday": [ 21, 27, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2939560090/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lakuta.bandcamp.com/album/brothers-sisters',
          a_string: 'Brothers &amp; Sisters by Lakuta',
          rule: {
            "monday": [ 22, 28, 3, 11 ],
            "tuesday": [ 21, 27, 2, 11 ],
            "wednesday": [ 19, 26, 1, 9 ],
            "thursday": [ 19, 25, 31, 8 ],
            "saturday": [ 23, 29, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3786226534/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://colleencolleen.bandcamp.com/album/a-flame-my-love-a-frequency',
          a_string: 'A flame my love, a frequency by Colleen',
          rule: {
            "monday": [ 23, 29, 4, 12 ],
            "tuesday": [ 22, 28, 3, 11 ],
            "wednesday": [ 21, 27, 2, 11 ],
            "thursday": [ 19, 26, 1, 9 ],
            "saturday": [ 19, 25, 31, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2951317684/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://colleencolleen.bandcamp.com/album/captain-of-none',
          a_string: 'Captain of None by Colleen',
          rule: {
            "monday": [ 19, 25, 31, 8 ],
            "tuesday": [ 23, 29, 4, 12 ],
            "wednesday": [ 22, 28, 3, 11 ],
            "thursday": [ 21, 27, 2, 11 ],
            "saturday": [ 19, 26, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=279034998/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://colleencolleen.bandcamp.com/album/the-weighing-of-the-heart',
          a_string: 'The Weighing of the Heart by Colleen',
          rule: {
            "monday": [ 19, 26, 1, 9 ],
            "tuesday": [ 19, 25, 31, 8 ],
            "wednesday": [ 23, 29, 4, 12 ],
            "thursday": [ 22, 28, 3, 11 ],
            "saturday": [ 21, 27, 2, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 130,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=707583338/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dangerrecords.bandcamp.com/album/upcoming-dr-033-p-m-s-7',
          a_string: 'UPCOMING: DR-033 // P.M.S. (7&quot;) by P.M.S.',
          rule: {
            "monday": [ 21, 27, 2, 11 ],
            "tuesday": [ 19, 26, 1, 9 ],
            "wednesday": [ 19, 25, 31, 8 ],
            "thursday": [ 23, 29, 4, 12 ],
            "saturday": [ 22, 28, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 131,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3202582703/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lydialunch.bandcamp.com/album/honeymoon-in-red',
          a_string: 'Honeymoon In Red by Lydia Lunch',
          rule: {
            "monday": [ 22, 28, 3, 11 ],
            "tuesday": [ 21, 27, 2, 11 ],
            "wednesday": [ 19, 26, 1, 9 ],
            "thursday": [ 19, 25, 31, 8 ],
            "saturday": [ 23, 29, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 132,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4126138709/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ctatsu.bandcamp.com/album/fear-is-the-world',
          a_string: 'Fear is the World by Atariame',
          rule: {
            "monday": [ 23, 29, 4, 12 ],
            "tuesday": [ 22, 28, 3, 11 ],
            "wednesday": [ 21, 27, 2, 11 ],
            "thursday": [ 19, 26, 1, 9 ],
            "saturday": [ 19, 25, 31, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 133,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=358818633/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newfocusrecordings.bandcamp.com/album/dalia-raudonikyt-with-solitarius',
          a_string: 'Dalia Raudonikytė With: Solitarius by Dalia Raudonikytė With',
          rule: {
            "monday": [ 20, 26, 1, 9 ],
            "tuesday": [ 24, 30, 5, 13 ],
            "wednesday": [ 23, 29, 4, 12 ],
            "thursday": [ 22, 28, 3, 12 ],
            "saturday": [ 20, 27, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 134,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2742156133/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://musicinspireschange.bandcamp.com/album/who-me',
          a_string: 'Who Me? by LAPS',
          rule: {
            "monday": [ 20, 27, 2, 10 ],
            "tuesday": [ 20, 26, 1, 9 ],
            "wednesday": [ 24, 30, 5, 13 ],
            "thursday": [ 23, 29, 4, 12 ],
            "saturday": [ 22, 28, 3, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 135,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4045754053/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://night-school.bandcamp.com/album/if-i-cant-handle-me-at-my-best-you-dont-deserve-you-at-your-worst-2',
          a_string: 'If I Can&#39;t Handle Me At My Best, You Don&#39;t Deserve You At Your Worst by Helena Celle',
          rule: {
            "monday": [ 22, 28, 3, 12 ],
            "tuesday": [ 20, 27, 2, 10 ],
            "wednesday": [ 20, 26, 1, 9 ],
            "thursday": [ 24, 30, 5, 13 ],
            "saturday": [ 23, 29, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 136,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4164804002/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://yazzahmed.bandcamp.com/album/finding-my-way-home',
          a_string: 'Finding My Way Home by Yazz Ahmed',
          rule: {
            "monday": [ 23, 29, 4, 12 ],
            "tuesday": [ 22, 28, 3, 12 ],
            "wednesday": [ 20, 27, 2, 10 ],
            "thursday": [ 20, 26, 1, 9 ],
            "saturday": [ 24, 30, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 137,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3764976327/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://diamandagalas.bandcamp.com/album/all-the-way-2',
          a_string: 'All the Way by Diamanda Galás',
          rule: {
            "monday": [ 24, 30, 5, 13 ],
            "tuesday": [ 23, 29, 4, 12 ],
            "wednesday": [ 22, 28, 3, 12 ],
            "thursday": [ 20, 27, 2, 10 ],
            "saturday": [ 20, 26, 1, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 138,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3970618485/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://annabelleeband.bandcamp.com/album/wallflowers',
          a_string: 'Wallflowers by Annabel Lee',
          rule: {
            "monday": [ 20, 26, 1, 9 ],
            "tuesday": [ 24, 30, 5, 13 ],
            "wednesday": [ 23, 29, 4, 12 ],
            "thursday": [ 22, 28, 3, 12 ],
            "saturday": [ 20, 27, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 139,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2930669060/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://leabertucci.bandcamp.com/album/all-that-is-solid-melts-into-air',
          a_string: '&#39;All That Is Solid Melts Into Air&#39; by Lea Bertucci',
          rule: {
            "monday": [ 20, 27, 2, 10 ],
            "tuesday": [ 20, 26, 1, 9 ],
            "wednesday": [ 24, 30, 5, 13 ],
            "thursday": [ 23, 29, 4, 12 ],
            "saturday": [ 22, 28, 3, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 140,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=319984039/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://noumenalloom.bandcamp.com/album/333-drill',
          a_string: '$3.33 - DRILL by $3.33',
          rule: {
            "monday": [ 23, 29, 4, 13 ],
            "tuesday": [ 21, 28, 3, 11 ],
            "wednesday": [ 21, 27, 2, 10 ],
            "thursday": [ 25, 31, 6, 14 ],
            "saturday": [ 24, 30, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 141,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2690413612/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fortevilfruit.bandcamp.com/album/oreing',
          a_string: 'Oreing by Ailbhe Nic Oireachtaigh',
          rule: {
            "monday": [ 24, 30, 5, 13 ],
            "tuesday": [ 23, 29, 4, 13 ],
            "wednesday": [ 21, 28, 3, 11 ],
            "thursday": [ 21, 27, 2, 10 ],
            "saturday": [ 25, 31, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 142,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=790891236/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://volarrecords.bandcamp.com/album/susan-tv-girls-7-ep-limited-red-vinyl',
          a_string: 'Susan - TV Girls 7&quot; EP LIMITED RED VINYL by susan',
          rule: {
            "monday": [ 25, 31, 6, 14 ],
            "tuesday": [ 24, 30, 5, 13 ],
            "wednesday": [ 23, 29, 4, 13 ],
            "thursday": [ 21, 28, 3, 11 ],
            "saturday": [ 21, 27, 2, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 143,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2368719112/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://retrosynthrecords.bandcamp.com/album/ladies-of-synth-volume-2',
          a_string: 'Ladies of Synth - Volume 2 by 48 Track VA Compilation',
          rule: {
            "monday": [ 21, 27, 2, 10 ],
            "tuesday": [ 25, 31, 6, 14 ],
            "wednesday": [ 24, 30, 5, 13 ],
            "thursday": [ 23, 29, 4, 13 ],
            "saturday": [ 21, 28, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 144,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1281820826/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://volarrecords.bandcamp.com/album/susan-never-enough-limited-blue-lp',
          a_string: 'Susan - Never Enough LIMITED BLUE LP by Susan',
          rule: {
            "monday": [ 21, 28, 3, 11 ],
            "tuesday": [ 21, 27, 2, 10 ],
            "wednesday": [ 25, 31, 6, 14 ],
            "thursday": [ 24, 30, 5, 13 ],
            "saturday": [ 23, 29, 4, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 145,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2179620921/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jessicaackerley.bandcamp.com/album/coalesce',
          a_string: 'Coalesce by Jessica Ackerley Trio',
          rule: {
            "monday": [ 23, 29, 4, 13 ],
            "tuesday": [ 21, 28, 3, 11 ],
            "wednesday": [ 21, 27, 2, 10 ],
            "thursday": [ 25, 31, 6, 14 ],
            "saturday": [ 24, 30, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 146,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4203696644/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://helenscarsdale.bandcamp.com/album/the-story-surrounds-us',
          a_string: 'the story surrounds us by kate carr',
          rule: {
            "monday": [ 24, 30, 5, 13 ],
            "tuesday": [ 23, 29, 4, 13 ],
            "wednesday": [ 21, 28, 3, 11 ],
            "thursday": [ 21, 27, 2, 10 ],
            "saturday": [ 25, 31, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 147,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1066471974/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dregenevieve.bandcamp.com/album/strangely-free',
          a_string: 'Strangely Free by Dre Genevieve',
          rule: {
            "monday": [ 26, 1, 7, 15 ],
            "tuesday": [ 25, 31, 6, 14 ],
            "wednesday": [ 24, 30, 5, 14 ],
            "thursday": [ 22, 29, 4, 12 ],
            "saturday": [ 22, 28, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 148,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2680258136/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://funknacaixa.bandcamp.com/album/bad-ista-ep',
          a_string: 'Bad$ista EP by Bad$ista',
          rule: {
            "monday": [ 22, 28, 3, 11 ],
            "tuesday": [ 26, 1, 7, 15 ],
            "wednesday": [ 25, 31, 6, 14 ],
            "thursday": [ 24, 30, 5, 14 ],
            "saturday": [ 22, 29, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 149,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1189907578/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://panalrecords.bandcamp.com/album/kamila-govorcin-el-mundo-pnl16',
          a_string: 'Kamila Govorcin - El Mundo [#PNL16] by Panal Records',
          rule: {
            "monday": [ 22, 29, 4, 12 ],
            "tuesday": [ 22, 28, 3, 11 ],
            "wednesday": [ 26, 1, 7, 15 ],
            "thursday": [ 25, 31, 6, 14 ],
            "saturday": [ 24, 30, 5, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 150,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/track=3720774709/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://catnapp.bandcamp.com/track/flame-bitch-prod-x-dabow',
          a_string: 'Flame Bitch prod x Dabow by CATNAPP',
          rule: {
            "monday": [ 24, 30, 5, 14 ],
            "tuesday": [ 22, 29, 4, 12 ],
            "wednesday": [ 22, 28, 3, 11 ],
            "thursday": [ 26, 1, 7, 15 ],
            "saturday": [ 25, 31, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 151,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3140356033/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://viviankrist.bandcamp.com/album/cold-sun',
          a_string: 'Cold Sun by VIVIANKRIST',
          rule: {
            "monday": [ 25, 31, 6, 14 ],
            "tuesday": [ 24, 30, 5, 14 ],
            "wednesday": [ 22, 29, 4, 12 ],
            "thursday": [ 22, 28, 3, 11 ],
            "saturday": [ 26, 1, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 152,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3767548441/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://risaripa.bandcamp.com/album/tokyo',
          a_string: 'Tokyo by risaripa x viviankrist',
          rule: {
            "monday": [ 26, 1, 7, 15 ],
            "tuesday": [ 25, 31, 6, 14 ],
            "wednesday": [ 24, 30, 5, 14 ],
            "thursday": [ 22, 29, 4, 12 ],
            "saturday": [ 22, 28, 3, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 153,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3636947880/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://viviankrist.bandcamp.com/album/oslo-risaripa-x-viviankrist',
          a_string: 'Oslo - risaripa x viviankrist by Viviankrist x risaripa',
          rule: {
            "monday": [ 22, 28, 3, 11 ],
            "tuesday": [ 26, 1, 7, 15 ],
            "wednesday": [ 25, 31, 6, 14 ],
            "thursday": [ 24, 30, 5, 14 ],
            "saturday": [ 22, 29, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 154,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=187272660/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://finderskeepersrecords.bandcamp.com/album/lixiviation',
          a_string: 'Lixiviation by Suzanne Ciani',
          rule: {
            "monday": [ 23, 30, 5, 13 ],
            "tuesday": [ 23, 29, 4, 12 ],
            "wednesday": [ 27, 2, 8, 16 ],
            "thursday": [ 26, 1, 7, 15 ],
            "saturday": [ 25, 31, 6, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 155,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2966559078/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://finderskeepersrecords.bandcamp.com/album/paint-a-lady',
          a_string: 'Paint A Lady by Susan Christie',
          rule: {
            "monday": [ 25, 31, 6, 15 ],
            "tuesday": [ 23, 30, 5, 13 ],
            "wednesday": [ 23, 29, 4, 12 ],
            "thursday": [ 27, 2, 8, 16 ],
            "saturday": [ 26, 1, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 156,
          user_id: 1,
          theme: 'Women\'s History Month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4070860491/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://finderskeepersrecords.bandcamp.com/album/the-silver-globe-the-amber-light',
          a_string: 'The Silver Globe &amp; The Amber Light by Jane Weaver',
          rule: {
            "monday": [ 26, 1, 7, 15 ],
            "tuesday": [ 25, 31, 6, 15 ],
            "wednesday": [ 23, 30, 5, 13 ],
            "thursday": [ 23, 29, 4, 12 ],
            "saturday": [ 27, 2, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('march_musics_id_seq', (SELECT MAX(id) FROM march_musics));");
    });
};
