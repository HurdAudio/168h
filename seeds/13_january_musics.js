'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('january_musics').del()
    .then(function () {
      // Inserts seed entries
      return knex('january_musics').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'american mavericks',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4061994166/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://icebreakermusic.bandcamp.com/album/cranial-pavement',
          a_string: 'Cranial Pavement by Icebreaker',
          rule: {
            "monday": "[ 1, 5, 7, 11]",
            "tuesday": "[3, 7, 9, 13]",
            "wednesday": "[5, 9, 11, 15]",
            "thursday": "[7, 11, 13, 16]",
            "saturday": "[10, 14, 16, 19]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'american mavericks',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3225313691/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://johnlutheradams.bandcamp.com/album/become-ocean',
          a_string: 'Become Ocean by John Luther Adams',
          rule: {
            "monday": "[ 10, 14, 16, 19]",
            "tuesday": "[1, 5, 7, 11]",
            "wednesday": "[3, 7, 9, 13]",
            "thursday": "[5, 9, 11, 15]",
            "saturday": "[7, 14, 16, 19]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'american mavericks',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3309731678/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://michaelgordonmusic.bandcamp.com/album/dystopia',
          a_string: 'Dystopia by Michael Gordon',
          rule: {
            "monday": "[ 7, 14, 16, 19]",
            "tuesday": "[10, 14, 16, 19]",
            "wednesday": "[1, 5, 7, 11]",
            "thursday": "[3, 7, 9, 13]",
            "saturday": "[5, 9, 11, 15]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'american mavericks',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=1694219055/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shop.avantmedia.org/album/cage-unlocked',
          a_string: 'Cage, Unlocked by John Cage',
          rule: {
            "monday": "[ 5, 9, 11, 15]",
            "tuesday": "[7, 14, 16, 19]",
            "wednesday": "[10, 14, 16, 19]",
            "thursday": "[1, 5, 7, 11]",
            "saturday": "[7, 14, 16, 15]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'american mavericks',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=4102887759/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shop.avantmedia.org/album/voices-sine-waves',
          a_string: 'Voices  + Sine Waves by Randy Gibson',
          rule: {
            "monday": "[ 7, 14, 16, 15]",
            "tuesday": "[10, 14, 16, 19]",
            "wednesday": "[1, 5, 7, 11]",
            "thursday": "[7, 14, 16, 15]",
            "saturday": "[5, 9, 11, 15]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'american mavericks',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1493146789/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://juliawolfemusic.bandcamp.com/album/the-string-quartets',
          a_string: 'The String Quartets by Julia Wolfe',
          rule: {
            "monday": "[ 5, 9, 11, 15]",
            "tuesday": "[1, 5, 7, 11]",
            "wednesday": "[7, 14, 16, 15]",
            "thursday": "[5, 9, 11, 15]",
            "saturday": "[7, 14, 16, 15]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'american mavericks',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2996579334/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://prawnshocker.bandcamp.com/album/charles-ives-orchestral-set-no-2',
          a_string: 'Charles Ives - Orchestral Set no. 2 by Prawnshocker',
          rule: {
            "monday": "[ 7, 14, 16, 15]",
            "tuesday": "[5, 9, 11, 16]",
            "wednesday": "[1, 5, 7, 11]",
            "thursday": "[7, 14, 16, 15]",
            "saturday": "[5, 9, 11, 15]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'american mavericks',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2951262651/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://johnlutheradams.bandcamp.com/album/canticles-of-the-holy-wind',
          a_string: 'Canticles of the Holy Wind by John Luther Adams &amp; The Crossing',
          rule: {
            "monday": "[ 6, 10, 12, 16]",
            "tuesday": "[8, 15, 17, 16]",
            "wednesday": "[6, 10, 12, 17]",
            "thursday": "[2, 6, 8, 12]",
            "saturday": "[8, 15, 17, 16]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'american mavericks',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4151449444/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bangonacan.bandcamp.com/album/in-c',
          a_string: 'In C by Bang on a Can All-Stars',
          rule: {
            "monday": "[ 8, 15, 17, 16]",
            "tuesday": "[6, 10, 12, 16]",
            "wednesday": "[8, 15, 17, 16]",
            "thursday": "[6, 10, 12, 17]",
            "saturday": "[2, 6, 8, 12]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'american mavericks',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2877878179/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://idischidiangelica.bandcamp.com/album/angelica-music',
          a_string: 'Angelica Music by Christian Wolff',
          rule: {
            "monday": "[ 2, 6, 8, 12]",
            "tuesday": "[8, 15, 17, 16]",
            "wednesday": "[6, 10, 12, 16]",
            "thursday": "[8, 15, 17, 16]",
            "saturday": "[6, 10, 12, 17]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'american mavericks',
          source: 'bandcamp',
          src_string: 'src="https://bandcamp.com/EmbeddedPlayer/album=952221414/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pauline-oliveros.bandcamp.com/album/water-above-sky-below-now',
          a_string: 'Water Above Sky Below Now by Pauline Oliveros and Ione',
          rule: {
            "monday": "[ 6, 10, 12, 17]",
            "tuesday": "[2, 6, 8, 12]",
            "wednesday": "[8, 15, 17, 16]",
            "thursday": "[6, 10, 12, 16]",
            "saturday": "[8, 15, 17, 16]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'american mavericks',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3243291892/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://quatuorbozzini-actuellecd.bandcamp.com/album/john-cage-four',
          a_string: 'John Cage: Four by Quatuor Bozzini',
          rule: {
            "monday": "[ 8, 15, 17, 16]",
            "tuesday": "[6, 10, 12, 17]",
            "wednesday": "[2, 6, 8, 12]",
            "thursday": "[8, 15, 17, 16]",
            "saturday": "[6, 10, 12, 16]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'american mavericks',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4131036755/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://davidlangmusic.bandcamp.com/album/the-national-anthems',
          a_string: 'the national anthems by David Lang &amp; L.A. Master Chorale',
          rule: {
            "monday": "[ 6, 10, 12, 16]",
            "tuesday": "[8, 15, 17, 16]",
            "wednesday": "[6, 10, 12, 17]",
            "thursday": "[2, 6, 8, 12]",
            "saturday": "[8, 15, 17, 16]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'american mavericks',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3676445445/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://foommusic.bandcamp.com/album/pythagorean-dream',
          a_string: 'Pythagorean Dream by Rhys Chatham',
          rule: {
            "monday": "[ 9, 16, 18, 17]",
            "tuesday": "[7, 11, 13, 17]",
            "wednesday": "[9, 16, 18, 17]",
            "thursday": "[7, 11, 13, 18]",
            "saturday": "[3, 7, 9, 13]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'american mavericks',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1904975454/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://unseenworlds.bandcamp.com/album/daytime-viewing',
          a_string: 'Daytime Viewing by Jacqueline Humbert &amp; David Rosenboom',
          rule: {
            "monday": "[ 3, 7, 9, 13]",
            "tuesday": "[9, 16, 18, 17]",
            "wednesday": "[7, 11, 13, 17]",
            "thursday": "[9, 16, 18, 17]",
            "saturday": "[7, 11, 13, 18]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('january_musics_id_seq', (SELECT MAX(id) FROM january_musics));");
    });
};
