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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('march_musics_id_seq', (SELECT MAX(id) FROM march_musics));");
    });
};
