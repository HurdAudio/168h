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
        },
        {
          id: 28,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3173709007/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://caminanterecordings.bandcamp.com/album/merzdub',
          a_string: 'Merzdub by Jamie Saft / Merzbow',
          rule: {
            "monday": [ 8, 16, 1, 31 ],
            "tuesday": [ 12, 20, 5, 6 ],
            "wednesday": [ 11, 19, 4, 5 ],
            "thursday": [ 8, 16, 1, 31 ],
            "saturday": [ 9, 17, 2, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=585814970/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bleibmodern.bandcamp.com/album/antagonism-lp',
          a_string: 'Antagonism LP by Bleib Modern',
          rule: {
            "monday": [ 9, 17, 2, 1 ],
            "tuesday": [ 8, 16, 1, 31 ],
            "wednesday": [ 12, 20, 5, 6 ],
            "thursday": [ 11, 19, 4, 5 ],
            "saturday": [ 8, 16, 1, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4233208522/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://redvenicerecords.bandcamp.com/album/torturing-nurse-slave',
          a_string: 'Torturing Nurse - Slave by Torturing Nurse',
          rule: {
            "monday": [ 8, 16, 1, 31 ],
            "tuesday": [ 9, 17, 2, 1 ],
            "wednesday": [ 8, 16, 1, 31 ],
            "thursday": [ 12, 20, 5, 6 ],
            "saturday": [ 11, 19, 4, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=430240605/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wolf-eyes.bandcamp.com/album/time-of-clearing',
          a_string: 'Time Of Clearing by Wolf Eyes',
          rule: {
            "monday": [ 11, 19, 4, 5 ],
            "tuesday": [ 8, 16, 1, 31 ],
            "wednesday": [ 9, 17, 2, 1 ],
            "thursday": [ 8, 16, 1, 31 ],
            "saturday": [ 12, 20, 5, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1937172481/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kevindrumm.bandcamp.com/album/triangles',
          a_string: 'TRIANGLES by Kevin Drumm',
          rule: {
            "monday": [ 12, 20, 5, 6 ],
            "tuesday": [ 11, 19, 4, 5 ],
            "wednesday": [ 8, 16, 1, 31 ],
            "thursday": [ 9, 17, 2, 1 ],
            "saturday": [ 8, 16, 1, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1265430461/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://frozenreeds.bandcamp.com/album/joy-boy',
          a_string: 'Joy Boy by Julius Eastman',
          rule: {
            "monday": [ 8, 16, 1, 31 ],
            "tuesday": [ 12, 20, 5, 6 ],
            "wednesday": [ 11, 19, 4, 5 ],
            "thursday": [ 8, 16, 1, 31 ],
            "saturday": [ 9, 17, 2, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=154027505/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://djll.bandcamp.com/album/from-outhouse-to-icehouse',
          a_string: 'From Outhouse to Icehouse by Tom Djll/Ross Rabin',
          rule: {
            "monday": [ 9, 17, 2, 1 ],
            "tuesday": [ 8, 16, 1, 31 ],
            "wednesday": [ 12, 20, 5, 6 ],
            "thursday": [ 11, 19, 4, 5 ],
            "saturday": [ 8, 16, 1, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2131501157/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://timperkis.bandcamp.com/album/kinda-green',
          a_string: 'Kinda Green by Tim Perkis / Tom Djll',
          rule: {
            "monday": [ 9, 17, 2, 1 ],
            "tuesday": [ 10, 18, 3, 2 ],
            "wednesday": [ 14, 22, 4, 3 ],
            "thursday": [ 13, 21, 6, 7 ],
            "saturday": [ 12, 20, 5, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2498444657/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://timperkis.bandcamp.com/album/applied-cryptography',
          a_string: 'Applied Cryptography by Tim Perkis &amp; Scott Walton',
          rule: {
            "monday": [ 12, 20, 5, 6 ],
            "tuesday": [ 9, 17, 2, 1 ],
            "wednesday": [ 10, 18, 3, 2 ],
            "thursday": [ 14, 22, 4, 3 ],
            "saturday": [ 13, 21, 6, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=687005163/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newcandys.bandcamp.com/album/bleeding-magenta',
          a_string: 'Bleeding Magenta by New Candys',
          rule: {
            "monday": [ 13, 21, 6, 7 ],
            "tuesday": [ 12, 20, 5, 6 ],
            "wednesday": [ 9, 17, 2, 1 ],
            "thursday": [ 10, 18, 3, 2 ],
            "saturday": [ 14, 22, 4, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3538895410/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://damosuzukinetwork.bandcamp.com/album/the-swiftsure-session',
          a_string: 'The Swiftsure Session by Damo Suzuki&#39;s Network',
          rule: {
            "monday": [ 14, 22, 4, 3 ],
            "tuesday": [ 13, 21, 6, 7 ],
            "wednesday": [ 12, 20, 5, 6 ],
            "thursday": [ 9, 17, 2, 1 ],
            "saturday": [ 10, 18, 3, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2065289295/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://arrington.bandcamp.com/album/ten-thousand-tigers',
          a_string: 'Ten Thousand Tigers by Arrington de Dionyso and Thollem McDonas',
          rule: {
            "monday": [ 10, 18, 3, 2 ],
            "tuesday": [ 14, 22, 4, 3 ],
            "wednesday": [ 13, 21, 6, 7 ],
            "thursday": [ 12, 20, 5, 6 ],
            "saturday": [ 9, 17, 2, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=222549677/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wolf-eyes.bandcamp.com/album/always-wrong',
          a_string: 'Always Wrong by Wolf Eyes',
          rule: {
            "monday": [ 9, 17, 2, 1 ],
            "tuesday": [ 10, 18, 3, 2 ],
            "wednesday": [ 14, 22, 4, 3 ],
            "thursday": [ 13, 21, 6, 7 ],
            "saturday": [ 12, 20, 5, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3735682806/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wolf-eyes.bandcamp.com/album/live-frying-chicago-may-28-2004',
          a_string: 'Live Frying: Chicago May 28 2004 by Wolf Eyes',
          rule: {
            "monday": [ 12, 20, 5, 6 ],
            "tuesday": [ 9, 17, 2, 1 ],
            "wednesday": [ 10, 18, 3, 2 ],
            "thursday": [ 14, 22, 4, 3 ],
            "saturday": [ 13, 21, 6, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=673550151/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fiffdimension.bandcamp.com/album/in-the-non-idiomatic-idiom-in-norway',
          a_string: 'in the non-idiomatic idiom in Norway by fiffdimension',
          rule: {
            "monday": [ 14, 22, 7, 8 ],
            "tuesday": [ 13, 21, 6, 7 ],
            "wednesday": [ 10, 18, 3, 2 ],
            "thursday": [ 11, 19, 4, 3 ],
            "saturday": [ 15, 23, 5, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3081573552/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ligeiamare.bandcamp.com/album/trident',
          a_string: 'TriDenT by Farrell Lowe',
          rule: {
            "monday": [ 15, 23, 5, 4 ],
            "tuesday": [ 14, 22, 7, 8 ],
            "wednesday": [ 13, 21, 6, 7 ],
            "thursday": [ 10, 18, 3, 2 ],
            "saturday": [ 11, 19, 4, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=638723614/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ligeiamare.bandcamp.com/album/8-9',
          a_string: '8/9 by Ligeia Mare',
          rule: {
            "monday": [ 11, 19, 4, 3 ],
            "tuesday": [ 15, 23, 5, 4 ],
            "wednesday": [ 14, 22, 7, 8 ],
            "thursday": [ 13, 21, 6, 7 ],
            "saturday": [ 10, 18, 3, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3448762687/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ligeiamare.bandcamp.com/album/quill',
          a_string: 'Quill by BackChannel/Group',
          rule: {
            "monday": [ 10, 18, 3, 2 ],
            "tuesday": [ 11, 19, 4, 3 ],
            "wednesday": [ 15, 23, 5, 4 ],
            "thursday": [ 14, 22, 7, 8 ],
            "saturday": [ 13, 21, 6, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=997678320/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://killick.bandcamp.com/album/fac-a-d-e',
          a_string: 'fac(a/d)e by Thunder O(h)m!',
          rule: {
            "monday": [ 13, 21, 6, 7 ],
            "tuesday": [ 10, 18, 3, 2 ],
            "wednesday": [ 11, 19, 4, 3 ],
            "thursday": [ 15, 23, 5, 4 ],
            "saturday": [ 14, 22, 7, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1492914464/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://missincinatti.bandcamp.com/album/remove-not-the-ancient-landmarks',
          a_string: 'remove not the ancient landmarks by Missincinatti',
          rule: {
            "monday": [ 14, 22, 7, 8 ],
            "tuesday": [ 13, 21, 6, 7 ],
            "wednesday": [ 10, 18, 3, 2 ],
            "thursday": [ 11, 19, 4, 3 ],
            "saturday": [ 15, 23, 5, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2808496546/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jeffmcleod.bandcamp.com/album/under-dim-self',
          a_string: 'Under Dim Self by Jeff McLeod',
          rule: {
            "monday": [ 15, 23, 5, 4 ],
            "tuesday": [ 14, 22, 7, 8 ],
            "wednesday": [ 13, 21, 6, 7 ],
            "thursday": [ 10, 18, 3, 2 ],
            "saturday": [ 11, 19, 4, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2674951238/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hansonrecords.bandcamp.com/album/slicer',
          a_string: 'Slicer by Wolf Eyes',
          rule: {
            "monday": [ 12, 20, 5, 4 ],
            "tuesday": [ 16, 24, 6, 5 ],
            "wednesday": [ 15, 23, 8, 9 ],
            "thursday": [ 14, 22, 7, 8 ],
            "saturday": [ 11, 19, 4, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1356612729/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://glisteningexamples.bandcamp.com/album/this-is-what-i-do-volume-one',
          a_string: 'THIS IS WHAT I DO - VOLUME ONE by Jason Lescalleet',
          rule: {
            "monday": [ 11, 19, 4, 3 ],
            "tuesday": [ 12, 20, 5, 4 ],
            "wednesday": [ 16, 24, 6, 5 ],
            "thursday": [ 15, 23, 8, 9 ],
            "saturday": [ 14, 22, 7, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=774652819/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hansonrecords.bandcamp.com/album/songs-about-jason',
          a_string: 'Songs About Jason by Aaron Dilloway',
          rule: {
            "monday": [ 14, 22, 7, 8 ],
            "tuesday": [ 11, 19, 4, 3 ],
            "wednesday": [ 12, 20, 5, 4 ],
            "thursday": [ 16, 24, 6, 5 ],
            "saturday": [ 15, 23, 8, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2639669908/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://arrington.bandcamp.com/album/songs-of-psychic-fire-vol-i',
          a_string: 'Songs of Psychic Fire vol. I by Arrington de Dionyso and Thollem McDonas',
          rule: {
            "monday": [ 15, 23, 8, 9 ],
            "tuesday": [ 14, 22, 7, 8 ],
            "wednesday": [ 11, 19, 4, 3 ],
            "thursday": [ 12, 20, 5, 4 ],
            "saturday": [ 16, 24, 6, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3551969832/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tourdebras.bandcamp.com/album/chants-et-danses-vol-iii-with-strings',
          a_string: 'Chants et danses (Vol. III) ...with strings by René Lussier, Robert Marcel Lepage...et Quatuor Bozzini',
          rule: {
            "monday": [ 16, 24, 6, 5 ],
            "tuesday": [ 15, 23, 8, 9 ],
            "wednesday": [ 14, 22, 7, 8 ],
            "thursday": [ 11, 19, 4, 3 ],
            "saturday": [ 12, 20, 5, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3836116562/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tourdebras.bandcamp.com/album/malcolm-goldstein-thomas-lehn-web',
          a_string: 'Malcolm Goldstein  / Thomas Lehn (web) by Tour de Bras (records)',
          rule: {
            "monday": [ 12, 20, 5, 4 ],
            "tuesday": [ 16, 24, 6, 5 ],
            "wednesday": [ 15, 23, 8, 9 ],
            "thursday": [ 14, 22, 7, 8 ],
            "saturday": [ 11, 19, 4, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=487324111/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wolf-eyes.bandcamp.com/album/burnt-out-vol-1',
          a_string: 'Burnt-Out Vol 1 by Wolf Eyes',
          rule: {
            "monday": [ 11, 19, 4, 3 ],
            "tuesday": [ 12, 20, 5, 4 ],
            "wednesday": [ 16, 24, 6, 5 ],
            "thursday": [ 15, 23, 8, 9 ],
            "saturday": [ 14, 22, 7, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2933784511/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://glisteningexamples.bandcamp.com/album/the-invisible-curse',
          a_string: 'The Invisible Curse by Kevin Drumm and Jason Lescalleet',
          rule: {
            "monday": [ 15, 23, 8, 9 ],
            "tuesday": [ 12, 20, 5, 4 ],
            "wednesday": [ 13, 21, 6, 5 ],
            "thursday": [ 17, 25, 7, 6 ],
            "saturday": [ 16, 24, 9, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=149762818/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nmperign.bandcamp.com/album/love-me-two-times',
          a_string: 'Love Me Two Times by Nmperign/Jason Lescalleet',
          rule: {
            "monday": [ 16, 24, 9, 10 ],
            "tuesday": [ 15, 23, 8, 9 ],
            "wednesday": [ 12, 20, 5, 4 ],
            "thursday": [ 13, 21, 6, 5 ],
            "saturday": [ 17, 25, 7, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1739250324/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://endofthealphabetrecords.bandcamp.com/album/there-is-no-music-from-china',
          a_string: 'There Is No Music From China by Various (CHN)',
          rule: {
            "monday": [ 17, 25, 7, 6 ],
            "tuesday": [ 16, 24, 9, 10 ],
            "wednesday": [ 15, 23, 8, 9 ],
            "thursday": [ 12, 20, 5, 4 ],
            "saturday": [ 13, 21, 6, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1151820027/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gbjd.bandcamp.com/album/black-sheep',
          a_string: 'Black Sheep by Xiao Hong &amp; Xiao Xiao Hong',
          rule: {
            "monday": [ 13, 21, 6, 5 ],
            "tuesday": [ 17, 25, 7, 6 ],
            "wednesday": [ 16, 24, 9, 10 ],
            "thursday": [ 15, 23, 8, 9 ],
            "saturday": [ 12, 20, 5, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=955976567/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://notincatalog.bandcamp.com/album/not-in-catalog-debut-album',
          a_string: 'not in catalog debut album by 不在话下',
          rule: {
            "monday": [ 12, 20, 5, 4 ],
            "tuesday": [ 13, 21, 6, 5 ],
            "wednesday": [ 17, 25, 7, 6 ],
            "thursday": [ 16, 24, 9, 10 ],
            "saturday": [ 15, 23, 8, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2277502811/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://killick.bandcamp.com/album/never-stop-lovin',
          a_string: 'never stop lovin by Killick',
          rule: {
            "monday": [ 15, 23, 8, 9 ],
            "tuesday": [ 12, 20, 5, 4 ],
            "wednesday": [ 13, 21, 6, 5 ],
            "thursday": [ 17, 25, 7, 6 ],
            "saturday": [ 16, 24, 9, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=495289191/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kyledawkins.bandcamp.com/album/conasauga',
          a_string: 'Conasauga by Kyle Dawkins',
          rule: {
            "monday": [ 16, 24, 9, 10 ],
            "tuesday": [ 15, 23, 8, 9 ],
            "wednesday": [ 12, 20, 5, 4 ],
            "thursday": [ 13, 21, 6, 5 ],
            "saturday": [ 17, 25, 7, 6]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1013983222/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nostalgiedelaboue.bandcamp.com/album/rien-ni-personne-volume-ii-iii',
          a_string: 'Rien Ni Personne ~volume II &amp; III by Various Artists',
          rule: {
            "monday": [ 18, 26, 8, 7 ],
            "tuesday": [ 17, 25, 10, 11 ],
            "wednesday": [ 16, 24, 9, 10 ],
            "thursday": [ 13, 21, 6, 5 ],
            "saturday": [ 14, 22, 7, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2810799458/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ligeiamare.bandcamp.com/album/penumbra',
          a_string: 'Penumbra by J.A. Deane and Farrell Lowe',
          rule: {
            "monday": [ 14, 22, 7, 6 ],
            "tuesday": [ 18, 26, 8, 7 ],
            "wednesday": [ 17, 25, 10, 11 ],
            "thursday": [ 16, 24, 9, 10 ],
            "saturday": [ 13, 21, 6, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1046147047/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ligeiamare.bandcamp.com/album/mirages',
          a_string: 'Mirages by J.A. Deane and Farrell Lowe',
          rule: {
            "monday": [ 13, 21, 6, 5 ],
            "tuesday": [ 14, 22, 7, 6 ],
            "wednesday": [ 18, 26, 8, 7 ],
            "thursday": [ 17, 25, 10, 11 ],
            "saturday": [ 16, 24, 9, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3302633823/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://killick.bandcamp.com/album/broadcast-no-1',
          a_string: 'Broadcast No. 1 by Killick Hinds &amp; Scott Baxendale',
          rule: {
            "monday": [ 16, 24, 9, 10 ],
            "tuesday": [ 13, 21, 6, 5 ],
            "wednesday": [ 14, 22, 7, 6 ],
            "thursday": [ 18, 26, 8, 7 ],
            "saturday": [ 17, 25, 10, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4088072951/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mnoad.bandcamp.com/album/9-syllables',
          a_string: '(9) Syllables by Nate Wooley',
          rule: {
            "monday": [ 17, 25, 10, 11 ],
            "tuesday": [ 16, 24, 9, 10 ],
            "wednesday": [ 13, 21, 6, 5 ],
            "thursday": [ 14, 22, 7, 6 ],
            "saturday": [ 18, 26, 8, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3601429188/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mnoad.bandcamp.com/album/lyra',
          a_string: 'Lyra by Jean D.L. &amp; Karen Willems',
          rule: {
            "monday": [ 18, 26, 8, 7 ],
            "tuesday": [ 17, 25, 10, 11 ],
            "wednesday": [ 16, 24, 9, 10 ],
            "thursday": [ 13, 21, 6, 5 ],
            "saturday": [ 14, 22, 7, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'noise/non-idiomatic',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=314193732/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mnoad.bandcamp.com/album/polychoral',
          a_string: 'Polychoral by Nate Wooley',
          rule: {
            "monday": [ 14, 22, 7, 6 ],
            "tuesday": [ 18, 26, 8, 7 ],
            "wednesday": [ 17, 25, 10, 11 ],
            "thursday": [ 16, 24, 9, 10 ],
            "saturday": [ 13, 21, 6, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('august_musics_id_seq', (SELECT MAX(id) FROM august_musics));");
    });
};
