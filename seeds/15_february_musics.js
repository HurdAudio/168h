'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('february_musics').del()
    .then(function () {
      // Inserts seed entries
      return knex('february_musics').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=942444799/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://albertayler.bandcamp.com/album/albert-ayler-bells-prophecy-expanded-edition-2-disc',
          a_string: 'Albert Ayler: Bells &amp; Prophecy: Expanded Edition (2 Disc) by Albert Ayler',
          rule: {
            "monday": [ 2, 6, 8, 12],
            "tuesday": [4, 8, 10, 14],
            "wednesday": [6, 10, 12, 16],
            "thursday": [8, 12, 14, 18],
            "saturday": [11, 15, 17, 20]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2711475853/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://caligolarecords.bandcamp.com/album/quartet-mestre-2008',
          a_string: '«Quartet (Mestre) 2008» by Anthony Braxton',
          rule: {
            "monday": [ 11, 15, 17, 20],
            "tuesday": [2, 6, 8, 12],
            "wednesday": [4, 8, 10, 14],
            "thursday": [6, 10, 12, 16],
            "saturday": [8, 12, 14, 18]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3933485247/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://henrygrimes.bandcamp.com/album/the-call',
          a_string: 'The Call by Henry Grimes',
          rule: {
            "monday": [ 8, 12, 14, 18],
            "tuesday": [11, 15, 17, 20],
            "wednesday": [2, 6, 8, 12],
            "thursday": [4, 8, 10, 14],
            "saturday": [6, 10, 12, 16]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=1930485249/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://firehouse12records.com/album/9-compositions-iridium-2006',
          a_string: '9 Compositions (Iridium) 2006 by Anthony Braxton',
          rule: {
            "monday": [ 6, 10, 12, 16],
            "tuesday": [8, 12, 14, 18],
            "wednesday": [11, 15, 17, 20],
            "thursday": [2, 6, 8, 12],
            "saturday": [4, 8, 10, 14]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=3415041672/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://firehouse12records.com/album/that-not',
          a_string: 'that / not by Tyshawn Sorey',
          rule: {
            "monday": [ 4, 8, 10, 14],
            "tuesday": [6, 10, 12, 16],
            "wednesday": [8, 12, 14, 18],
            "thursday": [11, 15, 17, 20],
            "saturday": [2, 6, 8, 12]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=872497733/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bangonacan.bandcamp.com/album/a-ballad-for-many',
          a_string: 'A Ballad For Many by Bang On A Can &amp; Don Byron',
          rule: {
            "monday": [ 2, 6, 8, 12],
            "tuesday": [4, 8, 10, 14],
            "wednesday": [6, 10, 12, 16],
            "thursday": [18, 12, 14, 19],
            "saturday": [11, 15, 17, 20]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2602402062/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ornettecoleman.bandcamp.com/album/town-hall-1962',
          a_string: 'Town Hall 1962 by Ornette Coleman',
          rule: {
            "monday": [ 12, 16, 18, 21],
            "tuesday": [3, 7, 9, 13],
            "wednesday": [5, 9, 11, 15],
            "thursday": [7, 11, 13, 17],
            "saturday": [19, 13, 15, 20]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=211079057/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://williamhookerheartofthesun.bandcamp.com/album/heart-of-the-sun',
          a_string: 'Heart of the Sun by William Hooker',
          rule: {
            "monday": [ 19, 13, 15, 20],
            "tuesday": [12, 16, 18, 21],
            "wednesday": [3, 7, 9, 13],
            "thursday": [5, 9, 11, 15],
            "saturday": [7, 11, 13, 17]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2654159831/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eremiterecords.bandcamp.com/album/blue-winter',
          a_string: 'Blue Winter by Fred Anderson, Hamid Drake, William Parker',
          rule: {
            "monday": [ 7, 11, 13, 17],
            "tuesday": [19, 13, 15, 20],
            "wednesday": [12, 16, 18, 21],
            "thursday": [3, 7, 9, 13],
            "saturday": [5, 9, 11, 15]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=3807849704/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunnysidezone.com/album/proximity',
          a_string: 'Proximity by Andrew Cyrille &amp; Bill McHenry',
          rule: {
            "monday": [ 5, 9, 11, 15],
            "tuesday": [ 7, 11, 13, 17],
            "wednesday": [ 19, 13, 15, 20],
            "thursday": [ 12, 16, 18, 21],
            "saturday": [ 3, 7, 9, 13]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3122607953/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tanksounds.bandcamp.com/album/bardo-tank',
          a_string: 'BARDO TANK by Ron Miles',
          rule: {
            "monday": [ 3, 7, 9, 13],
            "tuesday": [ 5, 9, 11, 15],
            "wednesday": [ 7, 11, 13, 17],
            "thursday": [ 19, 13, 15, 20],
            "saturday": [ 12, 16, 18, 21]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1859384950/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/ten-freedom-summers-2',
          a_string: 'Ten Freedom Summers by Wadada Leo Smith',
          rule: {
            "monday": [ 12, 16, 18, 21],
            "tuesday": [ 3, 7, 9, 13],
            "wednesday": [ 5, 9, 11, 15],
            "thursday": [ 7, 11, 13, 17],
            "saturday": [ 19, 13, 15, 20]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3006941689/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://destination-out.bandcamp.com/album/the-complete-in-berlin-88-box-set',
          a_string: 'THE COMPLETE IN BERLIN &#39;88 (BOX SET) by CECIL TAYLOR',
          rule: {
            "monday": [ 19, 13, 15, 20],
            "tuesday": [ 12, 16, 18, 21],
            "wednesday": [ 3, 7, 9, 13],
            "thursday": [ 5, 9, 11, 15],
            "saturday": [ 7, 11, 13, 17]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=836618089/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://oliverlake.bandcamp.com/album/lake-tchicai-osgood-westergaard',
          a_string: 'Lake | Tchicai | Osgood | Westergaard by Oliver Lake, John Tchaicai, Kresten Osgood, Jonas Westergaard',
          rule: {
            "monday": [ 8, 12, 14, 18],
            "tuesday": [ 20, 14, 16, 21],
            "wednesday": [ 13, 17, 19, 22],
            "thursday": [ 4, 8, 10, 14],
            "saturday": [ 6, 10, 12, 16]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1318856636/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://caribouband.bandcamp.com/album/caribou-vibration-ensemble-featuring-marshall-allen',
          a_string: 'Caribou Vibration Ensemble Featuring Marshall Allen by Caribou Vibration Ensemble',
          rule: {
            "monday": [ 6, 10, 12, 16],
            "tuesday": [ 8, 12, 14, 18],
            "wednesday": [ 20, 14, 16, 21],
            "thursday": [ 13, 17, 19, 22],
            "saturday": [ 4, 8, 10, 14]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2383996781/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://noahhoward.bandcamp.com/album/noah-howard-quartet',
          a_string: 'Noah Howard Quartet by Noah Howard',
          rule: {
            "monday": [ 4, 8, 10, 14],
            "tuesday": [ 6, 10, 12, 16],
            "wednesday": [ 8, 12, 14, 18],
            "thursday": [ 20, 14, 16, 21],
            "saturday": [ 13, 17, 19, 22]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=362621699/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ronnieboykins.bandcamp.com/album/the-will-come-is-now',
          a_string: 'The Will Come Is Now by Ronnie Boykins',
          rule: {
            "monday": [13, 17, 19, 22],
            "tuesday": [ 4, 8, 10, 14],
            "wednesday": [ 6, 10, 12, 16],
            "thursday": [ 8, 12, 14, 18],
            "saturday": [ 20, 14, 16, 21]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=840979423/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://franklowe.bandcamp.com/album/the-loweski',
          a_string: 'The Loweski by Frank Lowe',
          rule: {
            "monday": [20, 14, 16, 21],
            "tuesday": [ 13, 17, 19, 22],
            "wednesday": [ 4, 8, 10, 14],
            "thursday": [ 6, 10, 12, 16],
            "saturday": [ 8, 12, 14, 18]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3516001583/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://destination-out.bandcamp.com/album/berlin-skyscraper',
          a_string: 'Berlin Skyscraper by BUTCH MORRIS',
          rule: {
            "monday": [ 8, 12, 14, 18],
            "tuesday": [ 20, 14, 16, 21],
            "wednesday": [ 13, 17, 19, 22],
            "thursday": [ 4, 8, 10, 14],
            "saturday": [ 6, 10, 12, 16]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=771456059/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://destination-out.bandcamp.com/album/portrait',
          a_string: 'Portrait by SAM RIVERS',
          rule: {
            "monday": [ 6, 10, 12, 16],
            "tuesday": [ 8, 12, 14, 18],
            "wednesday": [ 20, 14, 16, 21],
            "thursday": [ 13, 17, 19, 22],
            "saturday": [ 4, 8, 10, 14]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1717215428/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://destination-out.bandcamp.com/album/nailed',
          a_string: 'Nailed by CECIL TAYLOR',
          rule: {
            "monday": [ 5, 9, 11, 15],
            "tuesday": [ 7, 11, 13, 17],
            "wednesday": [ 9, 13, 15, 19],
            "thursday": [ 21, 15, 17, 22],
            "saturday": [ 14, 18, 20, 23]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=541207510/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eremiterecords.bandcamp.com/album/spirit-house',
          a_string: 'Spirit House by Jemeel Moondoc &amp; The Jus Grew Orchestra',
          rule: {
            "monday": [ 14, 18, 20, 23],
            "tuesday": [ 5, 9, 11, 15],
            "wednesday": [ 7, 11, 13, 17],
            "thursday": [ 9, 13, 15, 19],
            "saturday": [ 21, 15, 17, 22]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1011163605/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eremiterecords.bandcamp.com/album/captain-of-the-deep',
          a_string: 'Captain of the Deep by Denis Charles',
          rule: {
            "monday": [ 21, 15, 17, 22],
            "tuesday": [ 14, 18, 20, 23],
            "wednesday": [ 5, 9, 11, 15],
            "thursday": [ 7, 11, 13, 17],
            "saturday": [ 9, 13, 15, 19]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1823302346/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eremiterecords.bandcamp.com/album/new-world-pygmies',
          a_string: 'New World Pygmies by Jemeel Moondoc &amp; William Parker',
          rule: {
            "monday": [ 9, 13, 15, 19],
            "tuesday": [ 21, 15, 17, 22],
            "wednesday": [ 14, 18, 20, 23],
            "thursday": [ 5, 9, 11, 15],
            "saturday": [ 7, 11, 13, 17]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1659727331/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://f-a-t-a-k-a.bandcamp.com/album/tangle',
          a_string: 'Tangle by John Butcher, Thomas Lehn, Matthew Shipp',
          rule: {
            "monday": [ 7, 11, 13, 17],
            "tuesday": [ 9, 13, 15, 19],
            "wednesday": [ 21, 15, 17, 22],
            "thursday": [ 14, 18, 20, 23],
            "saturday": [ 5, 9, 11, 15]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4181318941/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tourdebras.bandcamp.com/album/matana-roberts-sam-shalabi-nicolas-caloia-feldspar',
          a_string: 'Matana Roberts, Sam Shalabi, Nicolas Caloia - Feldspar by Matana Roberts (sax alto), Sam Shalabi (guitare électrique), Nicolas Caloia (contrebasse)',
          rule: {
            "monday": [ 5, 9, 11, 15],
            "tuesday": [ 7, 11, 13, 17],
            "wednesday": [ 9, 13, 15, 19],
            "thursday": [ 21, 15, 17, 22],
            "saturday": [ 14, 18, 20, 23]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2169487895/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://destination-out.bandcamp.com/album/fractured-dimensions',
          a_string: 'Fractured  Dimensions by WILLIAM PARKER',
          rule: {
            "monday": [ 14, 18, 20, 23],
            "tuesday": [ 5, 9, 11, 15],
            "wednesday": [ 7, 11, 13, 17],
            "thursday": [ 9, 13, 15, 19],
            "saturday": [ 21, 15, 17, 22]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2692661850/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://marionbrown.bandcamp.com/album/why-not',
          a_string: 'Why Not by Marion Brown',
          rule: {
            "monday": [ 22, 16, 18, 24],
            "tuesday": [ 15, 19, 21, 24],
            "wednesday": [ 6, 10, 12, 16],
            "thursday": [ 8, 12, 14, 18],
            "saturday": [ 10, 14, 16, 20]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=194836613/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pharoahsanders.bandcamp.com/album/pharoah-sanders-quintet',
          a_string: 'Pharoah Sanders Quintet by Pharoah Sanders',
          rule: {
            "monday": [ 10, 14, 16, 20],
            "tuesday": [ 22, 16, 18, 24],
            "wednesday": [ 15, 19, 21, 24],
            "thursday": [ 6, 10, 12, 16],
            "saturday": [ 8, 12, 14, 18]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2978623574/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://marzettewatts.bandcamp.com/album/and-company',
          a_string: 'And Company by Marzette Watts',
          rule: {
            "monday": [ 8, 12, 14, 18],
            "tuesday": [ 10, 14, 16, 20],
            "wednesday": [ 22, 16, 18, 24],
            "thursday": [ 15, 19, 21, 24],
            "saturday": [ 6, 10, 12, 16]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=624313275/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eremiterecords.bandcamp.com/album/the-all-star-game',
          a_string: 'The All Star Game by Marshall Allen, Hamid Drake, Kidd Jordan, William Parker, Alan Silva',
          rule: {
            "monday": [ 6, 10, 12, 16],
            "tuesday": [ 8, 12, 14, 18],
            "wednesday": [ 10, 14, 16, 20],
            "thursday": [ 22, 16, 18, 24],
            "saturday": [ 15, 19, 21, 24]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4092995023/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eremiterecords.bandcamp.com/album/bobs-pink-cadillac',
          a_string: 'Bob&#39;s Pink Cadillac by William Parker',
          rule: {
            "monday": [ 5, 19, 21, 24],
            "tuesday": [ 6, 10, 12, 16],
            "wednesday": [ 8, 12, 14, 18],
            "thursday": [ 10, 14, 16, 20],
            "saturday": [ 22, 16, 18, 24]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=740688057/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eremiterecords.bandcamp.com/album/new-world-pygmies-ii',
          a_string: 'New World Pygmies II by Jemeel Moondoc &amp; William Parker with Hamid Drake',
          rule: {
            "monday": [ 22, 16, 18, 24],
            "tuesday": [ 5, 19, 21, 24],
            "wednesday": [ 6, 10, 12, 16],
            "thursday": [ 8, 12, 14, 18],
            "saturday": [ 10, 14, 16, 20]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3411340270/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ayler-records.bandcamp.com/album/ode-to-albert-ayler',
          a_string: 'Ode to Albert Ayler by Mark O&#39;Leary &amp; Sunny Murray',
          rule: {
            "monday": [ 10, 14, 16, 20],
            "tuesday": [ 22, 16, 18, 24],
            "wednesday": [ 5, 19, 21, 24],
            "thursday": [ 6, 10, 12, 16],
            "saturday": [ 8, 12, 14, 18]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=872217913/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eremiterecords.bandcamp.com/album/we-are-not-at-the-opera',
          a_string: 'We Are Not At The Opera by Sunny Murray &amp; Sabir Mateen',
          rule: {
            "monday": [ 9, 13, 15, 19],
            "tuesday": [ 11, 15, 17, 21],
            "wednesday": [ 23, 17, 19, 25],
            "thursday": [ 6, 20, 22, 25],
            "saturday": [ 7, 11, 13, 17]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2696818120/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eremiterecords.bandcamp.com/album/drum-dance-to-the-motherland',
          a_string: 'Drum Dance to the Motherland by Khan Jamal Creative Arts Ensemble',
          rule: {
            "monday": [ 7, 11, 13, 17],
            "tuesday": [ 9, 13, 15, 19],
            "wednesday": [ 11, 15, 17, 21],
            "thursday": [ 23, 17, 19, 25],
            "saturday": [ 6, 20, 22, 25]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3436708453/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://franklowe.bandcamp.com/album/black-beings',
          a_string: 'Black Beings by Frank Lowe',
          rule: {
            "monday": [ 6, 20, 22, 25],
            "tuesday": [ 7, 11, 13, 17],
            "wednesday": [ 9, 13, 15, 19],
            "thursday": [ 11, 15, 17, 21],
            "saturday": [ 23, 17, 19, 25]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3182862440/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aumfidelity.bandcamp.com/album/live-in-santanna-arresi-2004',
          a_string: 'Live in Sant&#39;Anna Arresi, 2004 by David S. Ware &amp; Matthew Shipp',
          rule: {
            "monday": [ 23, 17, 19, 25],
            "tuesday": [ 6, 20, 22, 25],
            "wednesday": [ 7, 11, 13, 17],
            "thursday": [ 9, 13, 15, 19],
            "saturday": [ 11, 15, 17, 21]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1768578986/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aumfidelity.bandcamp.com/album/live-in-new-york-2010',
          a_string: 'Live in New York, 2010 by David S. Ware Trio',
          rule: {
            "monday": [ 11, 15, 17, 21],
            "tuesday": [ 23, 17, 19, 25],
            "wednesday": [ 6, 20, 22, 25],
            "thursday": [ 7, 11, 13, 17],
            "saturday": [ 9, 13, 15, 19]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1211209639/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mellowyellowlive.bandcamp.com/album/dollar-brand-abdullah-ibrahim-with-don-cherry-carlos-ward-in-berlin-1972',
          a_string: 'DOLLAR BRAND (Abdullah Ibrahim) with Don Cherry, Carlos Ward  in Berlin 1972 by DOLLAR BRAND (Abdullah Ibrahim)',
          rule: {
            "monday": [ 9, 13, 15, 19],
            "tuesday": [ 11, 15, 17, 21],
            "wednesday": [ 23, 17, 19, 25],
            "thursday": [ 6, 20, 22, 25],
            "saturday": [ 7, 11, 13, 17]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1160806144/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://safarrepublique.bandcamp.com/album/safar-republique',
          a_string: 'Safar Republique by Safar Republique',
          rule: {
            "monday": [ 7, 11, 13, 17 ],
            "tuesday": [ 9, 13, 15, 19 ],
            "wednesday": [ 11, 15, 17, 21 ],
            "thursday": [ 23, 17, 19, 25 ],
            "saturday": [ 6, 20, 2, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1173944759/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hotcasarecords.bandcamp.com/album/african-woman',
          a_string: 'African Woman by King Bucknor Jr &amp; AfroDisk Beat 79',
          rule: {
            "monday": [ 7, 21, 2, 26 ],
            "tuesday": [ 8, 12, 14, 18 ],
            "wednesday": [ 10, 14, 16, 20 ],
            "thursday": [ 12, 16, 18, 22 ],
            "saturday": [ 24, 18, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=619498598/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://artensembleofchicago.bandcamp.com/album/non-cognitive-aspects-of-the-city-live-at-iridium',
          a_string: 'Non-Cognitive Aspects of the City - Live at Iridium by Art Ensemble of Chicago',
          rule: {
            "monday": [ 24, 18, 20, 26 ],
            "tuesday": [ 7, 21, 2, 26 ],
            "wednesday": [ 8, 12, 14, 18 ],
            "thursday": [ 10, 14, 16, 20 ],
            "saturday": [ 12, 16, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=267460253/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://caligolarecords.bandcamp.com/album/jazz-r-evolution',
          a_string: '«Jazz (R)evolution» by Baba Sissoko with Antonello Salis &amp; Famoudou Don Moye',
          rule: {
            "monday": [ 12, 16, 18, 22 ],
            "tuesday": [ 24, 18, 20, 26 ],
            "wednesday": [ 7, 21, 2, 26 ],
            "thursday": [ 8, 12, 14, 18 ],
            "saturday": [ 10, 14, 16, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1952058313/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tyshawn-sorey.bandcamp.com/album/verisimilitude',
          a_string: 'Verisimilitude by Tyshawn Sorey',
          rule: {
            "monday": [ 10, 14, 16, 20 ],
            "tuesday": [ 12, 16, 18, 22 ],
            "wednesday": [ 24, 18, 20, 26 ],
            "thursday": [ 7, 21, 2, 26 ],
            "saturday": [ 8, 12, 14, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2325637060/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://futuramarge.bandcamp.com/album/live-at-the-riverbop',
          a_string: 'Live At The Riverbop by Roy Haynes Quartet',
          rule: {
            "monday": [ 8, 12, 14, 18 ],
            "tuesday": [ 10, 14, 16, 20 ],
            "wednesday": [ 12, 16, 18, 22 ],
            "thursday": [ 24, 18, 20, 26 ],
            "saturday": [ 7, 21, 2, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3667949691/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mikereed1.bandcamp.com/album/flesh-bone',
          a_string: 'Flesh &amp; Bone by Mike Reed',
          rule: {
            "monday": [ 7, 21, 2, 26 ],
            "tuesday": [ 8, 12, 14, 18 ],
            "wednesday": [ 10, 14, 16, 20 ],
            "thursday": [ 12, 16, 18, 22 ],
            "saturday": [ 24, 18, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1165914647/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://joemcphee.bandcamp.com/album/the-watermelon-suite',
          a_string: 'The Watermelon Suite by Trio X',
          rule: {
            "monday": [ 24, 18, 20, 26 ],
            "tuesday": [ 7, 21, 2, 26 ],
            "wednesday": [ 8, 12, 14, 18 ],
            "thursday": [ 10, 14, 16, 20 ],
            "saturday": [ 12, 16, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2037657663/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://henrythreadgill.bandcamp.com/album/up-popped-the-two-lips',
          a_string: 'Up Popped The Two Lips by Henry Threadgill&#39;s Zooid',
          rule: {
            "monday": [ 13, 17, 19, 21 ],
            "tuesday": [ 25, 19, 21, 27 ],
            "wednesday": [ 8, 22, 3, 27 ],
            "thursday": [ 9, 13, 15, 19 ],
            "saturday": [ 11, 15, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1393903022/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://stevecoleman.bandcamp.com/album/harvesting-semblances-and-affinities',
          a_string: 'Harvesting Semblances and Affinities by Steve Coleman',
          rule: {
            "monday": [ 11, 15, 17, 21 ],
            "tuesday": [ 13, 17, 19, 21 ],
            "wednesday": [ 25, 19, 21, 27 ],
            "thursday": [ 8, 22, 3, 27 ],
            "saturday": [ 9, 13, 15, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2071939863/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pheeroanaklaff.bandcamp.com/album/live-at-the-fez',
          a_string: 'Live at the Fez by Pheeroan akLaff',
          rule: {
            "monday": [ 9, 13, 15, 19 ],
            "tuesday": [ 11, 15, 17, 21 ],
            "wednesday": [ 13, 17, 19, 21 ],
            "thursday": [ 25, 19, 21, 27 ],
            "saturday": [ 8, 22, 3, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1181445539/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'https://bandcamp.com/EmbeddedPlayer/album=1181445539/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          a_string: 'Love and Ghosts by Farmers By Nature : Gerald Cleaver / William Parker / Craig Taborn',
          rule: {
            "monday": [ 8, 22, 3, 27 ],
            "tuesday": [ 9, 13, 15, 19 ],
            "wednesday": [ 11, 15, 17, 21 ],
            "thursday": [ 13, 17, 19, 21 ],
            "saturday": [ 25, 19, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2300004674/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wadadaleosmith.bandcamp.com/album/saturn-conjunct-the-grand-canyon-in-a-sweet-embrace',
          a_string: 'Saturn, Conjunct the Grand Canyon in a Sweet Embrace by Wadada Leo Smith &amp; Anthony Braxton',
          rule: {
            "monday": [ 25, 19, 21, 27 ],
            "tuesday": [ 8, 22, 3, 27 ],
            "wednesday": [ 9, 13, 15, 19 ],
            "thursday": [ 11, 15, 17, 21 ],
            "saturday": [ 13, 17, 19, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=1781387528/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tuffcity.com/album/psychelphia',
          a_string: 'Psychelphia by Mary Jane Hooper',
          rule: {
            "monday": [ 13, 17, 19, 21 ],
            "tuesday": [ 25, 19, 21, 27 ],
            "wednesday": [ 8, 22, 3, 27 ],
            "thursday": [ 9, 13, 15, 19 ],
            "saturday": [ 11, 15, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=186878699/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://intaktrec.bandcamp.com/album/sequel-for-lester-bowie',
          a_string: 'Sequel (For Lester Bowie) by George Lewis',
          rule: {
            "monday": [ 11, 15, 17, 21 ],
            "tuesday": [ 13, 17, 19, 21 ],
            "wednesday": [ 25, 19, 21, 27 ],
            "thursday": [ 8, 22, 3, 27 ],
            "saturday": [ 9, 13, 15, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2809226534/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ghostnoterecords.bandcamp.com/album/def-trance-beat-modalities-of-rhythm',
          a_string: 'Def Trance Beat (Modalities of Rhythm) by Steve Coleman &amp; Five Elements',
          rule: {
            "monday": [ 10, 14, 16, 20 ],
            "tuesday": [ 12, 16, 18, 22 ],
            "wednesday": [ 14, 18, 20, 22 ],
            "thursday": [ 26, 20, 22, 28 ],
            "saturday": [ 9, 23, 4, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=3134492544/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bandcamp.for-tune.pl/album/quartet-warsaw-2012',
          a_string: 'Quartet (Warsaw) 2012 by Anthony Braxton',
          rule: {
            "monday": [ 9, 23, 4, 28 ],
            "tuesday": [ 10, 14, 16, 20 ],
            "wednesday": [ 12, 16, 18, 22 ],
            "thursday": [ 14, 18, 20, 22 ],
            "saturday": [ 26, 20, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=274380109/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://destination-out.bandcamp.com/album/burning-cloud-2',
          a_string: 'Burning Cloud by BUTCH MORRIS',
          rule: {
            "monday": [ 26, 20, 22, 28 ],
            "tuesday": [ 9, 23, 4, 28 ],
            "wednesday": [ 10, 14, 16, 20 ],
            "thursday": [ 12, 16, 18, 22 ],
            "saturday": [ 14, 18, 20, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4169089856/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jotongo.bandcamp.com/album/african-funk-experimentals-1968-1982-2017',
          a_string: 'African Funk Experimentals (1968-1982 + 2017) by Jo Tongo',
          rule: {
            "monday": [ 14, 18, 20, 22 ],
            "tuesday": [ 26, 20, 22, 28 ],
            "wednesday": [ 9, 23, 4, 28 ],
            "thursday": [ 10, 14, 16, 20 ],
            "saturday": [ 12, 16, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3765249079/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://maalemmahmoudgania.bandcamp.com/album/colours-of-the-night',
          a_string: 'Colours of the Night by Maalem Mahmoud Gania',
          rule: {
            "monday": [ 12, 16, 18, 22 ],
            "tuesday": [ 14, 18, 20, 22 ],
            "wednesday": [ 26, 20, 22, 28 ],
            "thursday": [ 9, 23, 4, 28 ],
            "saturday": [ 10, 14, 16, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2454365750/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://essoafrojamfunkbeat.bandcamp.com/album/juntos',
          a_string: 'Juntos by ¡Esso! Afrojam Funkbeat',
          rule: {
            "monday": [ 10, 14, 16, 20 ],
            "tuesday": [ 12, 16, 18, 22 ],
            "wednesday": [ 14, 18, 20, 22 ],
            "thursday": [ 26, 20, 22, 28 ],
            "saturday": [ 9, 23, 4, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=925922551/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pasteurlappe.bandcamp.com/album/na-man-pass-man',
          a_string: 'Na Man Pass Man by Pasteur Lappe',
          rule: {
            "monday": [ 9, 23, 4, 28 ],
            "tuesday": [ 10, 14, 16, 20 ],
            "wednesday": [ 12, 16, 18, 22 ],
            "thursday": [ 14, 18, 20, 22 ],
            "saturday": [ 26, 20, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3912228382/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sookie1.bandcamp.com/album/sookie',
          a_string: 'Sookie by Sookie',
          rule: {
            "monday": [ 27, 21, 23, 29 ],
            "tuesday": [ 10, 15, 17, 29 ],
            "wednesday": [ 11, 15, 17, 21 ],
            "thursday": [ 13, 17, 19, 23 ],
            "saturday": [ 15, 19, 21, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2051639327/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jazzheadrecords.bandcamp.com/album/hexis',
          a_string: 'Hexis by The Monash Art Ensemble with George Lewis',
          rule: {
            "monday": [ 15, 19, 21, 23 ],
            "tuesday": [ 27, 21, 23, 29 ],
            "wednesday": [ 10, 15, 17, 29 ],
            "thursday": [ 11, 15, 17, 21 ],
            "saturday": [ 13, 17, 19, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=701651663/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://billdixon.bandcamp.com/album/tapestries-for-small-orchestra',
          a_string: 'Tapestries for Small Orchestra by Bill Dixon',
          rule: {
            "monday": [ 13, 17, 19, 23 ],
            "tuesday": [ 15, 19, 21, 23 ],
            "wednesday": [ 27, 21, 23, 29 ],
            "thursday": [ 10, 15, 17, 29 ],
            "saturday": [ 11, 15, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1644073358/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://culturepower45.bandcamp.com/album/cp4507-fruition',
          a_string: 'CP4507: Fruition by Various Artist',
          rule: {
            "monday": [ 11, 15, 17, 21 ],
            "tuesday": [ 13, 17, 19, 23 ],
            "wednesday": [ 15, 19, 21, 23 ],
            "thursday": [ 27, 21, 23, 29 ],
            "saturday": [ 10, 15, 17, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3567174391/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://charlesbradley.bandcamp.com/album/changes',
          a_string: 'Changes by Charles Bradley',
          rule: {
            "monday": [ 10, 15, 17, 29 ],
            "tuesday": [ 11, 15, 17, 21 ],
            "wednesday": [ 13, 17, 19, 23 ],
            "thursday": [ 15, 19, 21, 23 ],
            "saturday": [ 27, 21, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1828909607/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sugarayrayford.bandcamp.com/album/the-world-that-we-live-in',
          a_string: 'The World That We Live In by SUGARAY RAYFORD',
          rule: {
            "monday": [ 27, 21, 23, 29 ],
            "tuesday": [ 10, 15, 17, 29 ],
            "wednesday": [ 11, 15, 17, 21 ],
            "thursday": [ 13, 17, 19, 23 ],
            "saturday": [ 15, 19, 21, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1402368525/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'https://bandcamp.com/EmbeddedPlayer/album=1402368525/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          a_string: 'EAST by IVY SOLE.',
          rule: {
            "monday": [ 15, 19, 21, 23 ],
            "tuesday": [ 27, 21, 23, 29 ],
            "wednesday": [ 10, 15, 17, 29 ],
            "thursday": [ 11, 15, 17, 21 ],
            "saturday": [ 13, 17, 19, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4279583872/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://parisdjs.bandcamp.com/album/africa-is-the-future',
          a_string: 'Africa Is The Future by Kologbo',
          rule: {
            "monday": [ 14, 18, 20, 24 ],
            "tuesday": [ 16, 20, 22, 24 ],
            "wednesday": [ 28, 22, 24, 1 ],
            "thursday": [ 11, 16, 18, 1 ],
            "saturday": [ 12, 16, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2874278163/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://muyiwakunnuji-osemako.bandcamp.com/album/mo-juba-o',
          a_string: 'Mo Juba O by Muyiwa Kunnuji &amp; OSEMAKO',
          rule: {
            "monday": [ 12, 16, 18, 22 ],
            "tuesday": [ 14, 18, 20, 24 ],
            "wednesday": [ 16, 20, 22, 24 ],
            "thursday": [ 28, 22, 24, 1 ],
            "saturday": [ 11, 16, 18, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1159025980/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://africaseven.bandcamp.com/album/du-mali-1',
          a_string: 'Du Mali by Sorry Bamba',
          rule: {
            "monday": [ 11, 16, 18, 1 ],
            "tuesday": [ 12, 16, 18, 22 ],
            "wednesday": [ 14, 18, 20, 24 ],
            "thursday": [ 16, 20, 22, 24 ],
            "saturday": [ 28, 22, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3110169150/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://charlesgayle.bandcamp.com/album/streets-2',
          a_string: 'Streets by Charles Gayle',
          rule: {
            "monday": [ 28, 22, 24, 1 ],
            "tuesday": [ 11, 16, 18, 1 ],
            "wednesday": [ 12, 16, 18, 22 ],
            "thursday": [ 14, 18, 20, 24 ],
            "saturday": [ 16, 20, 22, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1647596655/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://christianscott.bandcamp.com/album/the-emancipation-procrastination',
          a_string: 'The Emancipation Procrastination by Christian Scott aTunde Adjuah',
          rule: {
            "monday": [ 16, 20, 22, 24  ],
            "tuesday": [ 28, 22, 24, 1 ],
            "wednesday": [ 11, 16, 18, 1 ],
            "thursday": [ 12, 16, 18, 22 ],
            "saturday": [ 14, 18, 20, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2371693952/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mulatuastatke.bandcamp.com/album/mulatu-of-ethiopia',
          a_string: 'Mulatu Of Ethiopia by Mulatu Astatke',
          rule: {
            "monday": [ 14, 18, 20, 24 ],
            "tuesday": [ 16, 20, 22, 24 ],
            "wednesday": [ 28, 22, 24, 1 ],
            "thursday": [ 11, 16, 18, 1 ],
            "saturday": [ 12, 16, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2238702751/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aumfidelity.bandcamp.com/album/meditation-resurrection',
          a_string: 'Meditation / Resurrection by William Parker Quartets',
          rule: {
            "monday": [ 12, 16, 18, 22 ],
            "tuesday": [ 14, 18, 20, 24 ],
            "wednesday": [ 16, 20, 22, 24 ],
            "thursday": [ 28, 22, 24, 1 ],
            "saturday": [ 11, 16, 18, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3289661233/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jasonmoran.bandcamp.com/album/bangs',
          a_string: 'BANGS by Jason Moran',
          rule: {
            "monday": [ 12, 17, 19, 2 ],
            "tuesday": [ 13, 17, 19, 23 ],
            "wednesday": [ 15, 19, 21, 25 ],
            "thursday": [ 17, 21, 23, 25 ],
            "saturday": [ 29, 23, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=569598526/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dwighttrible.bandcamp.com/album/inspirations',
          a_string: 'Inspirations by Dwight Trible',
          rule: {
            "monday": [ 29, 23, 25, 2 ],
            "tuesday": [ 12, 17, 19, 2 ],
            "wednesday": [ 13, 17, 19, 23 ],
            "thursday": [ 15, 19, 21, 25 ],
            "saturday": [ 17, 21, 23, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2880737996/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://krsone.bandcamp.com/album/the-world-is-mind',
          a_string: 'The World Is MIND by KRS-One',
          rule: {
            "monday": [ 17, 21, 23, 25 ],
            "tuesday": [ 29, 23, 25, 2 ],
            "wednesday": [ 12, 17, 19, 2 ],
            "thursday": [ 13, 17, 19, 23 ],
            "saturday": [ 15, 19, 21, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4014717387/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://openmikeeagle360.bandcamp.com/album/brick-body-kids-still-daydream',
          a_string: 'Brick Body Kids Still Daydream by Open Mike Eagle',
          rule: {
            "monday": [ 15, 19, 21, 25 ],
            "tuesday": [ 17, 21, 23, 25 ],
            "wednesday": [ 29, 23, 25, 2 ],
            "thursday": [ 12, 17, 19, 2 ],
            "saturday": [ 13, 17, 19, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3725306141/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rockyriverabeatrock.bandcamp.com/album/gangster-of-love',
          a_string: 'Gangster of Love by Rocky Rivera',
          rule: {
            "monday": [ 13, 17, 19, 23 ],
            "tuesday": [ 15, 19, 21, 25 ],
            "wednesday": [ 17, 21, 23, 25 ],
            "thursday": [ 29, 23, 25, 2 ],
            "saturday": [ 12, 17, 19, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=480704933/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://spellling.bandcamp.com/album/pantheon-of-me-2',
          a_string: 'Pantheon Of Me by SPELLLING',
          rule: {
            "monday": [ 12, 17, 19, 2 ],
            "tuesday": [ 13, 17, 19, 23 ],
            "wednesday": [ 15, 19, 21, 25 ],
            "thursday": [ 17, 21, 23, 25 ],
            "saturday": [ 29, 23, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4118357594/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mosessumney.bandcamp.com/album/aromanticism',
          a_string: 'Aromanticism by Moses Sumney',
          rule: {
            "monday": [ 29, 23, 25, 2 ],
            "tuesday": [ 12, 17, 19, 2 ],
            "wednesday": [ 13, 17, 19, 23 ],
            "thursday": [ 15, 19, 21, 25 ],
            "saturday": [ 17, 21, 23, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1894361972/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sudanarchives.bandcamp.com/album/sudan-archives',
          a_string: 'Sudan Archives by Sudan Archives',
          rule: {
            "monday": [ 18, 22, 24, 26 ],
            "tuesday": [ 1, 24, 26, 3 ],
            "wednesday": [ 13, 18, 20, 3 ],
            "thursday": [ 14, 18, 20, 24 ],
            "saturday": [ 16, 20, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2070045191/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://aumfidelity.bandcamp.com/album/long-hidden-the-olmec-series',
          a_string: 'Long Hidden: The Olmec Series by William Parker',
          rule: {
            "monday": [ 16, 20, 22, 26 ],
            "tuesday": [ 18, 22, 24, 26 ],
            "wednesday": [ 1, 24, 26, 3 ],
            "thursday": [ 13, 18, 20, 3 ],
            "saturday": [ 14, 18, 20, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1400041100/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hot8brassband.bandcamp.com/album/rock-with-the-hot-8',
          a_string: 'Rock With The Hot 8 by Hot 8 Brass Band',
          rule: {
            "monday": [ 14, 18, 20, 24 ],
            "tuesday": [ 16, 20, 22, 26 ],
            "wednesday": [ 18, 22, 24, 26 ],
            "thursday": [ 1, 24, 26, 3 ],
            "saturday": [ 13, 18, 20, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=591803237/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://oddiseemmg.bandcamp.com/album/the-good-fight',
          a_string: 'The Good Fight by Oddisee',
          rule: {
            "monday": [ 13, 18, 20, 3 ],
            "tuesday": [ 14, 18, 20, 24 ],
            "wednesday": [ 16, 20, 22, 26 ],
            "thursday": [ 18, 22, 24, 26 ],
            "saturday": [ 1, 24, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=996132433/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rodneyp.bandcamp.com/album/gangster-chronicles-the-definitive-collection',
          a_string: 'Gangster Chronicles: The Definitive Collection by London Posse',
          rule: {
            "monday": [ 1, 24, 26, 3 ],
            "tuesday": [ 13, 18, 20, 3 ],
            "wednesday": [ 14, 18, 20, 24 ],
            "thursday": [ 16, 20, 22, 26 ],
            "saturday": [ 18, 22, 24, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3126264147/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mcmello.bandcamp.com/album/thoughts-released',
          a_string: 'Thoughts Released by M.C. Mell&#39;o',
          rule: {
            "monday": [ 18, 22, 24, 26 ],
            "tuesday": [ 1, 24, 26, 3 ],
            "wednesday": [ 13, 18, 20, 3 ],
            "thursday": [ 14, 18, 20, 24 ],
            "saturday": [ 16, 20, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=818947843/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://odweeyne.bandcamp.com/album/kicks-in-the-crates-vol-1-1990-1991-supa-phat-side',
          a_string: 'Kicks in the Crates Vol.1 - 1990/1991 - SUPA &amp; PHAT Side by Odweeyne of So Cracked Lab',
          rule: {
            "monday": [ 16, 20, 22, 26 ],
            "tuesday": [ 18, 22, 24, 26 ],
            "wednesday": [ 1, 24, 26, 3 ],
            "thursday": [ 13, 18, 20, 3 ],
            "saturday": [ 14, 18, 20, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1011432069/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://joemcphee.bandcamp.com/album/the-sugar-hill-suite',
          a_string: 'The Sugar Hill Suite by Trio X',
          rule: {
            "monday": [ 15, 19, 21, 25 ],
            "tuesday": [ 17, 21, 23, 27 ],
            "wednesday": [ 19, 23, 25, 27 ],
            "thursday": [ 2, 25, 27, 4 ],
            "saturday": [ 14, 19, 21, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2092770861/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://marcuslewisband.bandcamp.com/album/facing-east',
          a_string: 'Facing East by Marcus Lewis',
          rule: {
            "monday": [ 14, 19, 21, 4 ],
            "tuesday": [ 15, 19, 21, 25 ],
            "wednesday": [ 17, 21, 23, 27 ],
            "thursday": [ 19, 23, 25, 27 ],
            "saturday": [ 2, 25, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1019294942/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://joemcphee.bandcamp.com/album/angels-devils-and-haints',
          a_string: 'Angels, Devils and Haints by Joe McPhee',
          rule: {
            "monday": [ 2, 25, 27, 4 ],
            "tuesday": [ 14, 19, 21, 4 ],
            "wednesday": [ 15, 19, 21, 25 ],
            "thursday": [ 17, 21, 23, 27 ],
            "saturday": [ 19, 23, 25, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1111516104/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jonbap.bandcamp.com/album/yesterdays-homily',
          a_string: 'Yesterday&#39;s Homily by Jon Bap',
          rule: {
            "monday": [ 19, 23, 25, 27 ],
            "tuesday": [ 2, 25, 27, 4 ],
            "wednesday": [ 14, 19, 21, 4 ],
            "thursday": [ 15, 19, 21, 25 ],
            "saturday": [ 17, 21, 23, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=461963248/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/hamad-kalkaba-and-the-golden-sounds-1974-1975',
          a_string: 'Hamad Kalkaba and The Golden Sounds 1974-1975 by Hamad Kalkaba',
          rule: {
            "monday": [ 17, 21, 23, 27 ],
            "tuesday": [ 19, 23, 25, 27 ],
            "wednesday": [ 2, 25, 27, 4 ],
            "thursday": [ 14, 19, 21, 4 ],
            "saturday": [ 15, 19, 21, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1458926099/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://analogafrica.bandcamp.com/album/pop-makossa-the-invasive-dance-beat-of-cameroon-1976-1984',
          a_string: 'Pop Makossa - The Invasive Dance Beat of Cameroon 1976-1984 by Various',
          rule: {
            "monday": [ 15, 19, 21, 25 ],
            "tuesday": [ 17, 21, 23, 27 ],
            "wednesday": [ 19, 23, 25, 27 ],
            "thursday": [ 2, 25, 27, 4 ],
            "saturday": [ 14, 19, 21, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3250456230/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dubstorerecords.bandcamp.com/album/redman-international-digital-roots-dancehall-1985-to-1990-10-rare-singles-set',
          a_string: 'Redman International: Digital Roots Dancehall 1985 to 1990 - 10 Rare Singles Set by Dub Store Records',
          rule: {
            "monday": [ 14, 19, 21, 4 ],
            "tuesday": [ 15, 19, 21, 25 ],
            "wednesday": [ 17, 21, 23, 27 ],
            "thursday": [ 19, 23, 25, 27 ],
            "saturday": [ 2, 25, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=906862647/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pressuresounds.bandcamp.com/album/meet-the-people',
          a_string: 'Meet the People by Lloyd Parks &amp; We The People',
          rule: {
            "monday": [ 3, 26, 28, 5 ],
            "tuesday": [ 15, 20, 22, 5 ],
            "wednesday": [ 16, 20, 22, 26 ],
            "thursday": [ 18, 22, 24, 28 ],
            "saturday": [ 20, 24, 26, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1674138456/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dubsyndicate.bandcamp.com/album/displaced-masters',
          a_string: 'Displaced Masters by Dub Syndicate',
          rule: {
            "monday": [ 20, 24, 26, 28 ],
            "tuesday": [ 3, 26, 28, 5 ],
            "wednesday": [ 15, 20, 22, 5 ],
            "thursday": [ 16, 20, 22, 26 ],
            "saturday": [ 18, 22, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1255239549/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://willsessions.bandcamp.com/album/kindred-live',
          a_string: 'Kindred Live by Will Sessions',
          rule: {
            "monday": [ 18, 22, 24, 28 ],
            "tuesday": [ 20, 24, 26, 28 ],
            "wednesday": [ 3, 26, 28, 5 ],
            "thursday": [ 15, 20, 22, 5 ],
            "saturday": [ 16, 20, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1860158521/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://willsessions.bandcamp.com/album/deluxe',
          a_string: 'Deluxe by Will Sessions',
          rule: {
            "monday": [ 16, 20, 22, 26 ],
            "tuesday": [ 18, 22, 24, 28 ],
            "wednesday": [ 20, 24, 26, 28 ],
            "thursday": [ 3, 26, 28, 5 ],
            "saturday": [ 15, 20, 22, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3266419411/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kimtibbs.bandcamp.com/album/kim',
          a_string: 'KIM by Kim Tibbs',
          rule: {
            "monday": [ 15, 20, 22, 5 ],
            "tuesday": [ 16, 20, 22, 26 ],
            "wednesday": [ 18, 22, 24, 28 ],
            "thursday": [ 20, 24, 26, 28 ],
            "saturday": [ 3, 26, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=191922726/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://africanheadcharge.bandcamp.com/album/my-life-in-a-hole-in-the-ground',
          a_string: 'My Life In A Hole In The Ground by African Head Charge',
          rule: {
            "monday": [ 3, 26, 28, 5 ],
            "tuesday": [ 15, 20, 22, 5 ],
            "wednesday": [ 16, 20, 22, 26 ],
            "thursday": [ 18, 22, 24, 28 ],
            "saturday": [ 20, 24, 26, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2283578983/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://africanheadcharge.bandcamp.com/album/drastic-season',
          a_string: 'Drastic Season by African Head Charge',
          rule: {
            "monday": [ 20, 24, 26, 28 ],
            "tuesday": [ 3, 26, 28, 5 ],
            "wednesday": [ 15, 20, 22, 5 ],
            "thursday": [ 16, 20, 22, 26 ],
            "saturday": [ 18, 22, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'black history month',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=546702643/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://africanheadcharge.bandcamp.com/album/off-the-beaten-track',
          a_string: 'Off The Beaten Track by African Head Charge',
          rule: {
            "monday": [ 19, 23, 25, 29 ],
            "tuesday": [ 21, 25, 27, 29 ],
            "wednesday": [ 4, 27, 29, 6 ],
            "thursday": [ 16, 21, 23, 6 ],
            "saturday": [ 17, 21, 23, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('february_musics_id_seq', (SELECT MAX(id) FROM february_musics));");
    });
};
