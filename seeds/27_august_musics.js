'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('august_musics').del()
    .then(function () {
      // Inserts seed entries
      return knex('august_musics').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3891162338/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wolf-eyes.bandcamp.com/album/no-hate',
          a_string: 'No Hate by Wolf Eyes',
          rule: {
            "monday": [ 7, 15, 31, 30 ],
            "tuesday": [ 6, 14, 30, 29 ],
            "wednesday": [ 5, 13, 29, 28 ],
            "thursday": [ 4, 12, 28, 27 ],
            "saturday": [ 8, 16, 1, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=970917910/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://elevatorbath.bandcamp.com/album/soundtrack-for-dislocation',
          a_string: 'soundtrack for dislocation by matt shoemaker',
          rule: {
            "monday": [ 8, 16, 1, 2 ],
            "tuesday": [ 7, 15, 31, 30 ],
            "wednesday": [ 6, 14, 30, 29 ],
            "thursday": [ 5, 13, 29, 28 ],
            "saturday": [ 4, 12, 28, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1170682572/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://elevatorbath.bandcamp.com/album/flammable-materials-from-foreign-lands',
          a_string: 'flammable materials from foreign lands by jim haynes',
          rule: {
            "monday": [ 4, 12, 28, 27 ],
            "tuesday": [ 8, 16, 1, 2 ],
            "wednesday": [ 7, 15, 31, 30 ],
            "thursday": [ 6, 14, 30, 29 ],
            "saturday": [ 5, 13, 29, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=309991513/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chondriticsound.bandcamp.com/album/trojan-self-image',
          a_string: 'Trojan Self Image by Shredded Nerve',
          rule: {
            "monday": [ 5, 13, 29, 28 ],
            "tuesday": [ 4, 12, 28, 27 ],
            "wednesday": [ 8, 16, 1, 2 ],
            "thursday": [ 7, 15, 31, 30 ],
            "saturday": [ 6, 14, 30, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2992995276/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://redvenicerecords.bandcamp.com/album/rvr0156-torturing-nurse-live-dvd',
          a_string: '[RVR0156] Torturing Nurse Live DVD by Torturing Nurse',
          rule: {
            "monday": [ 6, 14, 30, 29 ],
            "tuesday": [ 5, 13, 29, 28 ],
            "wednesday": [ 4, 12, 28, 27 ],
            "thursday": [ 8, 16, 1, 2 ],
            "saturday": [ 7, 15, 31, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1422793729/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://clppng.bandcamp.com/album/splendor-misery',
          a_string: 'Splendor &amp; Misery by clipping.',
          rule: {
            "monday": [ 7, 15, 31, 30 ],
            "tuesday": [ 6, 14, 30, 29 ],
            "wednesday": [ 5, 13, 29, 28 ],
            "thursday": [ 4, 12, 28, 27 ],
            "saturday": [ 8, 16, 1, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2308093458/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://killick.bandcamp.com/album/lave-worriers-intuitive-intonation-unquantifiable-rhythms-shamanistic-roygbiv',
          a_string: 'Lave Worriers: Intuitive Intonation, Unquantifiable Rhythms, &amp; Shamanistic ROYGBIV by Killick &amp; Monique',
          rule: {
            "monday": [ 9, 17, 2, 3 ],
            "tuesday": [ 8, 16, 1, 31 ],
            "wednesday": [ 7, 15, 31, 30 ],
            "thursday": [ 6, 14, 30, 29 ],
            "saturday": [ 5, 13, 29, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1253735900/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://idmtheftable.bandcamp.com/album/if-im-too-fat-for-you-why-dont-you-come-over-here-and-suck-out-all-the-fat',
          a_string: 'if I&#39;m too fat for you, why don&#39;t you come over here and suck out all the fat? by id m theft able',
          rule: {
            "monday": [ 5, 13, 29, 28 ],
            "tuesday": [ 9, 17, 2, 3 ],
            "wednesday": [ 8, 16, 1, 31 ],
            "thursday": [ 7, 15, 31, 30 ],
            "saturday": [ 6, 14, 30, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=648627486/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://djll.bandcamp.com/album/skin-tightener',
          a_string: 'skin tightener by William Winant - Camille Emaille - Tom Djll',
          rule: {
            "monday": [ 6, 14, 30, 29 ],
            "tuesday": [ 5, 13, 29, 28 ],
            "wednesday": [ 9, 17, 2, 3 ],
            "thursday": [ 8, 16, 1, 31 ],
            "saturday": [ 7, 15, 31, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3137693925/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wolf-eyes.bandcamp.com/album/burned-mind',
          a_string: 'Burned Mind by Wolf Eyes',
          rule: {
            "monday": [ 7, 15, 31, 30 ],
            "tuesday": [ 6, 14, 30, 29 ],
            "wednesday": [ 5, 13, 29, 28 ],
            "thursday": [ 9, 17, 2, 3 ],
            "saturday": [ 8, 16, 1, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=341125608/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://samrog.bandcamp.com/album/neon-amazon',
          a_string: 'Neon Amazon by Sam Rog',
          rule: {
            "monday": [ 8, 16, 1, 31 ],
            "tuesday": [ 7, 15, 31, 30 ],
            "wednesday": [ 6, 14, 30, 29 ],
            "thursday": [ 5, 13, 29, 28 ],
            "saturday": [ 9, 17, 2, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3298020341/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://trippyabacus.bandcamp.com/album/t-ra-p',
          a_string: 't/ra/p by Abacus',
          rule: {
            "monday": [ 9, 17, 2, 3 ],
            "tuesday": [ 8, 16, 1, 31 ],
            "wednesday": [ 7, 15, 31, 30 ],
            "thursday": [ 6, 14, 30, 29 ],
            "saturday": [ 5, 13, 29, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=482187387/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://black-dice.bandcamp.com/album/creature-comforts',
          a_string: 'Creature Comforts by Black Dice',
          rule: {
            "monday": [ 5, 13, 29, 28 ],
            "tuesday": [ 9, 17, 2, 3 ],
            "wednesday": [ 8, 16, 1, 31 ],
            "thursday": [ 7, 15, 31, 30 ],
            "saturday": [ 6, 14, 30, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=669718914/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://merzbow.bandcamp.com/album/dharma',
          a_string: 'Dharma by Merzbow',
          rule: {
            "monday": [ 7, 15, 31, 30 ],
            "tuesday": [ 6, 14, 30, 29 ],
            "wednesday": [ 10, 18, 3, 4 ],
            "thursday": [ 9, 17, 2, 1 ],
            "saturday": [ 8, 16, 1, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2432690131/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/chronolyse',
          a_string: 'Chronolyse by Richard Pinhas',
          rule: {
            "monday": [ 8, 16, 1, 31 ],
            "tuesday": [ 7, 15, 31, 30 ],
            "wednesday": [ 6, 14, 30, 29 ],
            "thursday": [ 10, 18, 3, 4 ],
            "saturday": [ 9, 17, 2, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=824963388/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://arrington.bandcamp.com/album/saturn-returns-2004',
          a_string: 'Saturn Returns (2004) by Arrington de Dionyso and Thollem McDonas',
          rule: {
            "monday": [ 9, 17, 2, 1 ],
            "tuesday": [ 8, 16, 1, 31 ],
            "wednesday": [ 7, 15, 31, 30 ],
            "thursday": [ 6, 14, 30, 29 ],
            "saturday": [ 10, 18, 3, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1112452603/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://instinctorecords.bandcamp.com/album/lumbobas-tube',
          a_string: 'Lumboba&#39;s Tube by Zom Zoms',
          rule: {
            "monday": [ 10, 18, 3, 4 ],
            "tuesday": [ 9, 17, 2, 1 ],
            "wednesday": [ 8, 16, 1, 31 ],
            "thursday": [ 7, 15, 31, 30 ],
            "saturday": [ 6, 14, 30, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2169340236/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://coldcave.bandcamp.com/album/cremations',
          a_string: 'Cremations by Cold Cave',
          rule: {
            "monday": [ 6, 14, 30, 29 ],
            "tuesday": [ 10, 18, 3, 4 ],
            "wednesday": [ 9, 17, 2, 1 ],
            "thursday": [ 8, 16, 1, 31 ],
            "saturday": [ 7, 15, 31, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2286701044/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wolf-eyes.bandcamp.com/album/wolf-eyes-burning-log-session-july-20th-2016',
          a_string: 'Wolf Eyes Burning Log session July 20th 2016 by Wolf Eyes',
          rule: {
            "monday": [ 7, 15, 31, 30 ],
            "tuesday": [ 6, 14, 30, 29 ],
            "wednesday": [ 10, 18, 3, 4 ],
            "thursday": [ 9, 17, 2, 1 ],
            "saturday": [ 8, 16, 1, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=783684778/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kevindrumm.bandcamp.com/album/artificial-organ',
          a_string: 'Artificial Organ by Kevin Drumm',
          rule: {
            "monday": [ 8, 16, 1, 31 ],
            "tuesday": [ 7, 15, 31, 30 ],
            "wednesday": [ 6, 14, 30, 29 ],
            "thursday": [ 10, 18, 3, 4 ],
            "saturday": [ 9, 17, 2, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=72989750/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://glisteningexamples.bandcamp.com/album/dissolution',
          a_string: 'Dissolution by Olivia Block',
          rule: {
            "monday": [ 10, 18, 3, 4 ],
            "tuesday": [ 7, 15, 31, 30 ],
            "wednesday": [ 8, 16, 1, 31 ],
            "thursday": [ 7, 15, 31, 30 ],
            "saturday": [ 11, 19, 4, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=920537162/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://idmtheftable.bandcamp.com/album/hangin-flaccid-like-a-wet-lilac',
          a_string: 'Hangin&#39; Flaccid Like a Wet Lilac by i&#39;d m thfft able',
          rule: {
            "monday": [ 11, 19, 4, 5 ],
            "tuesday": [ 10, 18, 3, 4 ],
            "wednesday": [ 7, 15, 31, 30 ],
            "thursday": [ 8, 16, 1, 31 ],
            "saturday": [ 7, 15, 31, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=946995988/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sipulijaska.bandcamp.com/album/algoritmi',
          a_string: 'Algoritmi by Sipulijaska',
          rule: {
            "monday": [ 7, 15, 31, 30 ],
            "tuesday": [ 11, 19, 4, 5 ],
            "wednesday": [ 10, 18, 3, 4 ],
            "thursday": [ 7, 15, 31, 30 ],
            "saturday": [ 8, 16, 1, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=563982890/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ambifunk.bandcamp.com/album/live-at-akusmata-helsinki-02112016',
          a_string: 'Live at Akusmata, Helsinki 02.11.2016 by Robert Jürjendal, Kaido Kirikmäe, Petri Kuljuntausta',
          rule: {
            "monday": [ 8, 16, 1, 31 ],
            "tuesday": [ 7, 15, 31, 30 ],
            "wednesday": [ 11, 19, 4, 5 ],
            "thursday": [ 10, 18, 3, 4 ],
            "saturday": [ 7, 15, 31, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3025660758/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://arrington.bandcamp.com/album/unheard-indonesia-vol-7-pancak-silat-situbondo',
          a_string: 'UNHEARD INDONESIA Vol. 7 Pancak Silat Situbondo by Arrington de Dionyso with Lima Jari Sakti Rasyit',
          rule: {
            "monday": [ 7, 15, 31, 30 ],
            "tuesday": [ 8, 16, 1, 31 ],
            "wednesday": [ 7, 15, 31, 30 ],
            "thursday": [ 11, 19, 4, 5 ],
            "saturday": [ 10, 18, 3, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3318145375/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jaccrecords.bandcamp.com/album/timeless',
          a_string: 'Timeless by Marcelo dos Reis &amp; Eve Risser',
          rule: {
            "monday": [ 10, 18, 3, 4 ],
            "tuesday": [ 7, 15, 31, 30 ],
            "wednesday": [ 8, 16, 1, 31 ],
            "thursday": [ 7, 15, 31, 30 ],
            "saturday": [ 11, 19, 4, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3146416018/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://joemorrisritiglacialeratic.bandcamp.com/album/likewise',
          a_string: 'Likewise by Stone House',
          rule: {
            "monday": [ 11, 19, 4, 5 ],
            "tuesday": [ 10, 18, 3, 4 ],
            "wednesday": [ 7, 15, 31, 30 ],
            "thursday": [ 8, 16, 1, 31 ],
            "saturday": [ 7, 15, 31, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('august_musics_id_seq', (SELECT MAX(id) FROM august_musics));");
    });
};
