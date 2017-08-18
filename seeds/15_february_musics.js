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
            "monday": "[ 2, 6, 8, 12]",
            "tuesday": "[4, 8, 10, 14]",
            "wednesday": "[6, 10, 12, 16]",
            "thursday": "[8, 12, 14, 18]",
            "saturday": "[11, 15, 17, 20]"
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
            "monday": "[ 11, 15, 17, 20]",
            "tuesday": "[2, 6, 8, 12]",
            "wednesday": "[4, 8, 10, 14]",
            "thursday": "[6, 10, 12, 16]",
            "saturday": "[8, 12, 14, 18]"
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
            "monday": "[ 8, 12, 14, 18]",
            "tuesday": "[11, 15, 17, 20]",
            "wednesday": "[2, 6, 8, 12]",
            "thursday": "[4, 8, 10, 14]",
            "saturday": "[6, 10, 12, 16]"
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
            "monday": "[ 6, 10, 12, 16]",
            "tuesday": "[8, 12, 14, 18]",
            "wednesday": "[11, 15, 17, 20]",
            "thursday": "[2, 6, 8, 12]",
            "saturday": "[4, 8, 10, 14]"
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
            "monday": "[ 4, 8, 10, 14]",
            "tuesday": "[6, 10, 12, 16]",
            "wednesday": "[8, 12, 14, 18]",
            "thursday": "[11, 15, 17, 20]",
            "saturday": "[2, 6, 8, 12]"
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
            "monday": "[ 2, 6, 8, 12]",
            "tuesday": "[4, 8, 10, 14]",
            "wednesday": "[6, 10, 12, 16]",
            "thursday": "[18, 12, 14, 19]",
            "saturday": "[11, 15, 17, 20]"
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
            "monday": "[ 12, 16, 18, 21]",
            "tuesday": "[3, 7, 9, 13]",
            "wednesday": "[5, 9, 11, 15]",
            "thursday": "[7, 11, 13, 17]",
            "saturday": "[19, 13, 15, 20]"
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
            "monday": "[ 19, 13, 15, 20]",
            "tuesday": "[12, 16, 18, 21]",
            "wednesday": "[3, 7, 9, 13]",
            "thursday": "[5, 9, 11, 15]",
            "saturday": "[7, 11, 13, 17]"
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
            "monday": "[ 7, 11, 13, 17]",
            "tuesday": "[19, 13, 15, 20]",
            "wednesday": "12, 16, 18, 21]",
            "thursday": "[3, 7, 9, 13]",
            "saturday": "[5, 9, 11, 15]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('february_musics_id_seq', (SELECT MAX(id) FROM february_musics));");
    });
};
