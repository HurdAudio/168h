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
        },
        {
          id: 37,
          user_id: 1,
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
          theme: 'women\'s history month',
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
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('march_musics_id_seq', (SELECT MAX(id) FROM march_musics));");
    });
};
