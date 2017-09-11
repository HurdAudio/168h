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
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('february_musics_id_seq', (SELECT MAX(id) FROM february_musics));");
    });
};
