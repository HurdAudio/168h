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
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4061994166/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://icebreakermusic.bandcamp.com/album/cranial-pavement',
          a_string: 'Cranial Pavement by Icebreaker',
          rule: {
            "monday": [ 1, 5, 7, 11],
            "tuesday": [3, 7, 9, 13],
            "wednesday": [5, 9, 11, 15],
            "thursday": [7, 11, 13, 16],
            "saturday": [10, 14, 16, 19]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3225313691/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://johnlutheradams.bandcamp.com/album/become-ocean',
          a_string: 'Become Ocean by John Luther Adams',
          rule: {
            "monday": [ 10, 14, 16, 19],
            "tuesday": [1, 5, 7, 11],
            "wednesday": [3, 7, 9, 13],
            "thursday": [5, 9, 11, 15],
            "saturday": [7, 14, 16, 19]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3309731678/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://michaelgordonmusic.bandcamp.com/album/dystopia',
          a_string: 'Dystopia by Michael Gordon',
          rule: {
            "monday": [ 7, 14, 16, 19],
            "tuesday": [10, 14, 16, 19],
            "wednesday": [1, 5, 7, 11],
            "thursday": [3, 7, 9, 13],
            "saturday": [5, 9, 11, 15]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=1694219055/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shop.avantmedia.org/album/cage-unlocked',
          a_string: 'Cage, Unlocked by John Cage',
          rule: {
            "monday": [ 5, 9, 11, 15],
            "tuesday": [7, 14, 16, 19],
            "wednesday": [10, 14, 16, 19],
            "thursday": [1, 5, 7, 11],
            "saturday": [7, 14, 16, 15]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=4102887759/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shop.avantmedia.org/album/voices-sine-waves',
          a_string: 'Voices  + Sine Waves by Randy Gibson',
          rule: {
            "monday": [ 7, 14, 16, 15],
            "tuesday": [10, 14, 16, 19],
            "wednesday": [1, 5, 7, 11],
            "thursday": [7, 14, 16, 15],
            "saturday": [5, 9, 11, 15]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1493146789/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://juliawolfemusic.bandcamp.com/album/the-string-quartets',
          a_string: 'The String Quartets by Julia Wolfe',
          rule: {
            "monday": [ 5, 9, 11, 15],
            "tuesday": [1, 5, 7, 11],
            "wednesday": [7, 14, 16, 15],
            "thursday": [5, 9, 11, 15],
            "saturday": [7, 14, 16, 15]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2996579334/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://prawnshocker.bandcamp.com/album/charles-ives-orchestral-set-no-2',
          a_string: 'Charles Ives - Orchestral Set no. 2 by Prawnshocker',
          rule: {
            "monday": [ 7, 14, 16, 15],
            "tuesday": [5, 9, 11, 16],
            "wednesday": [1, 5, 7, 11],
            "thursday": [7, 14, 16, 15],
            "saturday": [5, 9, 11, 15]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2951262651/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://johnlutheradams.bandcamp.com/album/canticles-of-the-holy-wind',
          a_string: 'Canticles of the Holy Wind by John Luther Adams &amp; The Crossing',
          rule: {
            "monday": [ 6, 10, 12, 16],
            "tuesday": [8, 15, 17, 16],
            "wednesday": [6, 10, 12, 17],
            "thursday": [2, 6, 8, 12],
            "saturday": [8, 15, 17, 16]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4151449444/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bangonacan.bandcamp.com/album/in-c',
          a_string: 'In C by Bang on a Can All-Stars',
          rule: {
            "monday": [ 8, 15, 17, 16],
            "tuesday": [6, 10, 12, 16],
            "wednesday": [8, 15, 17, 16],
            "thursday": [6, 10, 12, 17],
            "saturday": [2, 6, 8, 12]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2877878179/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://idischidiangelica.bandcamp.com/album/angelica-music',
          a_string: 'Angelica Music by Christian Wolff',
          rule: {
            "monday": [ 2, 6, 8, 12],
            "tuesday": [8, 15, 17, 16],
            "wednesday": [6, 10, 12, 16],
            "thursday": [8, 15, 17, 16],
            "saturday": [6, 10, 12, 17]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=952221414/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pauline-oliveros.bandcamp.com/album/water-above-sky-below-now',
          a_string: 'Water Above Sky Below Now by Pauline Oliveros and Ione',
          rule: {
            "monday": [ 6, 10, 12, 17],
            "tuesday": [2, 6, 8, 12],
            "wednesday": [8, 15, 17, 16],
            "thursday": [6, 10, 12, 16],
            "saturday": [8, 15, 17, 16]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3243291892/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://quatuorbozzini-actuellecd.bandcamp.com/album/john-cage-four',
          a_string: 'John Cage: Four by Quatuor Bozzini',
          rule: {
            "monday": [ 8, 15, 17, 16],
            "tuesday": [6, 10, 12, 17],
            "wednesday": [2, 6, 8, 12],
            "thursday": [8, 15, 17, 16],
            "saturday": [6, 10, 12, 16]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4131036755/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://davidlangmusic.bandcamp.com/album/the-national-anthems',
          a_string: 'the national anthems by David Lang &amp; L.A. Master Chorale',
          rule: {
            "monday": [ 6, 10, 12, 16],
            "tuesday": [8, 15, 17, 16],
            "wednesday": [6, 10, 12, 17],
            "thursday": [2, 6, 8, 12],
            "saturday": [8, 15, 17, 16]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3676445445/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://foommusic.bandcamp.com/album/pythagorean-dream',
          a_string: 'Pythagorean Dream by Rhys Chatham',
          rule: {
            "monday": [ 9, 16, 18, 17],
            "tuesday": [7, 11, 13, 17],
            "wednesday": [9, 16, 18, 17],
            "thursday": [7, 11, 13, 18],
            "saturday": [3, 7, 9, 13]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1904975454/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://unseenworlds.bandcamp.com/album/daytime-viewing',
          a_string: 'Daytime Viewing by Jacqueline Humbert &amp; David Rosenboom',
          rule: {
            "monday": [ 3, 7, 9, 13],
            "tuesday": [9, 16, 18, 17],
            "wednesday": [7, 11, 13, 17],
            "thursday": [9, 16, 18, 17],
            "saturday": [7, 11, 13, 18]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1247105358/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://johnlutheradams.bandcamp.com/album/the-mathematics-of-resonant-bodies',
          a_string: 'The Mathematics of Resonant Bodies by John Luther Adams',
          rule: {
            "monday": [ 7, 11, 13, 18],
            "tuesday": [3, 7, 9, 13],
            "wednesday": [9, 16, 18, 17],
            "thursday": [7, 11, 13, 17],
            "saturday": [9, 16, 18, 17]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3228057692/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bangonacan.bandcamp.com/album/music-in-5ths-two-pages',
          a_string: 'Music in 5ths/Two Pages by Bang on a Can All-Stars',
          rule: {
            "monday": [ 9, 16, 18, 17],
            "tuesday": [7, 11, 13, 18],
            "wednesday": [3, 7, 9, 13],
            "thursday": [9, 16, 18, 17],
            "saturday": [7, 11, 13, 17]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3376465769/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sopercussion.bandcamp.com/album/steve-reich-drumming',
          a_string: 'Steve Reich: Drumming by So Percussion',
          rule: {
            "monday": [ 7, 11, 13, 17],
            "tuesday": [9, 16, 18, 17],
            "wednesday": [7, 11, 13, 18],
            "thursday": [3, 7, 9, 13],
            "saturday": [9, 16, 18, 17]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3901965012/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://karlrecords.bandcamp.com/album/silver-apples-of-the-moon',
          a_string: 'Silver Apples Of The Moon by MORTON SUBOTNICK',
          rule: {
            "monday": [ 9, 16, 18, 17],
            "tuesday": [7, 11, 13, 17],
            "wednesday": [9, 16, 18, 17],
            "thursday": [7, 11, 13, 18],
            "saturday": [3, 7, 9, 13]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=566335179/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://calderquartet.bandcamp.com/album/terry-riley-two-early-works',
          a_string: 'Terry Riley - Two Early Works by Calder Quartet',
          rule: {
            "monday": [ 3, 7, 9, 13],
            "tuesday": [9, 16, 18, 17],
            "wednesday": [7, 11, 13, 17],
            "thursday": [9, 16, 18, 17],
            "saturday": [7, 11, 13, 18]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2440156746/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://opengraveswithstuartdempster.bandcamp.com/album/flightpatterns-2',
          a_string: 'flightpatterns by Open Graves with Stuart Dempster',
          rule: {
            "monday": [ 8, 12, 14, 19],
            "tuesday": [4, 8, 10, 14],
            "wednesday": [10, 17, 19, 18],
            "thursday": [8, 12, 14, 18],
            "saturday": [10, 17, 19, 18]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2278108239/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://johnlutheradams.bandcamp.com/album/ilimaq',
          a_string: 'Ilimaq by John Luther Adams &amp; Glenn Kotche',
          rule: {
            "monday": [ 10, 17, 19, 18],
            "tuesday": [8, 12, 14, 19],
            "wednesday": [4, 8, 10, 14],
            "thursday": [10, 17, 19, 18],
            "saturday": [8, 12, 14, 18]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3693055811/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zeitkratzer.bandcamp.com/album/james-tenney-old-school',
          a_string: 'James Tenney [old school] by zeitkratzer',
          rule: {
            "monday": [ 8, 12, 14, 18],
            "tuesday": [10, 17, 19, 18],
            "wednesday": [8, 12, 14, 19],
            "thursday": [4, 8, 10, 14],
            "saturday": [10, 17, 19, 18]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4040307402/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sarahhennies.bandcamp.com/album/still-and-moving-lines-of-silence-in-families-of-hyperbolas',
          a_string: 'Still and Moving Lines of Silence In Families of Hyperbolas by Alvin Lucier',
          rule: {
            "monday": [ 10, 17, 19, 18],
            "tuesday": [8, 12, 14, 18],
            "wednesday": [10, 17, 19, 18],
            "thursday": [8, 12, 14, 19],
            "saturday": [4, 8, 10, 14]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1856637749/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://parlourtapes.bandcamp.com/album/diligence-is-to-magic-as-progress-is-to-flight',
          a_string: 'DILIGENCE IS TO MAGIC AS PROGRESS IS TO FLIGHT by Katherine Young, Austin Wulliman, Ensemble Dal Niente',
          rule: {
            "monday": [ 4, 8, 10, 14],
            "tuesday": [10, 17, 19, 18],
            "wednesday": [8, 12, 14, 18],
            "thursday": [10, 17, 19, 18],
            "saturday": [8, 12, 14, 19]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3535429355/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://michaelvincentwaller.bandcamp.com/album/the-south-shore-4',
          a_string: 'The South Shore by Michael Vincent Waller',
          rule: {
            "monday": [ 8, 12, 14, 19],
            "tuesday": [4, 8, 10, 14],
            "wednesday": [10, 17, 19, 18],
            "thursday": [8, 12, 14, 18],
            "saturday": [10, 17, 19, 18]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2971922029/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://starkland.bandcamp.com/album/from-a-to-z',
          a_string: 'From A to Z by compilation',
          rule: {
            "monday": [ 10, 17, 19, 18],
            "tuesday": [8, 12, 14, 19],
            "wednesday": [4, 8, 10, 14],
            "thursday": [10, 17, 19, 18],
            "saturday": [8, 12, 14, 18]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2801425194/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tobytwining.bandcamp.com/album/eurydice',
          a_string: 'Eurydice by Toby Twining',
          rule: {
            "monday": [ 9, 13, 15, 19 ],
            "tuesday": [ 11, 18, 20, 19 ],
            "wednesday": [ 9, 13, 15, 20 ],
            "thursday": [ 5, 9, 11, 15 ],
            "saturday": [ 11, 18, 20, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4040906099/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://brycedessner.bandcamp.com/album/music-for-wood-and-strings-performed-by-so-percussion',
          a_string: 'Music for Wood and Strings performed by So Percussion by Bryce Dessner',
          rule: {
            "monday": [ 11, 18, 20, 19 ],
            "tuesday": [ 9, 13, 15, 19 ],
            "wednesday": [ 11, 18, 20, 19 ],
            "thursday": [ 9, 13, 15, 20 ],
            "saturday": [ 5, 9, 11, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2107418158/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newfocusrecordings.bandcamp.com/album/transient-canvas',
          a_string: 'Transient Canvas by Transient Canvas',
          rule: {
            "monday": [ 5, 9, 11, 15 ],
            "tuesday": [ 11, 18, 20, 19 ],
            "wednesday": [ 9, 13, 15, 19 ],
            "thursday": [ 11, 18, 20, 19 ],
            "saturday": [ 9, 13, 15, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2070829749/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://idischidiangelica.bandcamp.com/album/lazy-afternoon-among-the-crocodiles',
          a_string: 'Lazy Afternoon Among the Crocodiles by Terry Riley/Stefano Scodanibbio',
          rule: {
            "monday": [ 9, 13, 15, 20 ],
            "tuesday": [ 15, 9, 11, 15 ],
            "wednesday": [ 11, 18, 20, 19 ],
            "thursday": [ 9, 13, 15, 19 ],
            "saturday": [ 11, 18, 20, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3505415038/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bethtuba.bandcamp.com/album/still',
          a_string: 'Still by Beth McDonald',
          rule: {
            "monday": [ 11, 18, 20, 19 ],
            "tuesday": [ 9, 13, 15, 20 ],
            "wednesday": [ 15, 9, 11, 15 ],
            "thursday": [ 11, 18, 20, 19 ],
            "saturday": [ 9, 13, 15, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1134084309/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jasperstringquartet.bandcamp.com/album/unbound',
          a_string: 'Unbound by Jasper String Quartet',
          rule: {
            "monday": [ 9, 13, 15, 19 ],
            "tuesday": [ 11, 18, 20, 19 ],
            "wednesday": [ 19, 13, 15, 20 ],
            "thursday": [ 15, 9, 11, 15 ],
            "saturday": [ 11, 18, 20, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2594763072/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://johnlutheradams.bandcamp.com/album/inuksuit',
          a_string: 'Inuksuit by John Luther Adams',
          rule: {
            "monday": [ 11, 18, 20, 19 ],
            "tuesday": [ 9, 13, 15, 19 ],
            "wednesday": [ 11, 18, 20, 19 ],
            "thursday": [ 19, 13, 15, 20 ],
            "saturday": [ 15, 9, 11, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=674817097/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newamsterdamrecords.bandcamp.com/album/not-two',
          a_string: 'Not Two by Amir ElSaffar / Rivers of Sound',
          rule: {
            "monday": [ 16, 10, 12, 16 ],
            "tuesday": [ 12, 19, 21, 20 ],
            "wednesday": [ 10, 14, 16, 20 ],
            "thursday": [ 12, 19, 21, 20 ],
            "saturday": [ 20, 14, 16, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2077421539/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nostalgicsynchronic.bandcamp.com/album/nostalgic-synchronic-etudes-for-prepared-digital-piano',
          a_string: 'Nostalgic Synchronic: Etudes for Prepared Digital Piano by Dan Trueman (performed by Adam Sliwinski)',
          rule: {
            "monday": [ 20, 14, 16, 21 ],
            "tuesday": [ 16, 10, 12, 16 ],
            "wednesday": [ 12, 19, 21, 20 ],
            "thursday": [ 10, 14, 16, 20 ],
            "saturday": [ 12, 19, 21, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2687508128/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://michaelgordonmusic.bandcamp.com/album/timber',
          a_string: 'Timber by Michael Gordon',
          rule: {
            "monday": [ 12, 19, 21, 20 ],
            "tuesday": [ 20, 14, 16, 21 ],
            "wednesday": [ 16, 10, 12, 16 ],
            "thursday": [ 12, 19, 21, 20 ],
            "saturday": [ 10, 14, 16, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2115639627/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dalnientedeerhoof.bandcamp.com/album/balter-saunier',
          a_string: 'Balter / Saunier by Dal Niente &amp; Deerhoof',
          rule: {
            "monday": [ 10, 14, 16, 20 ],
            "tuesday": [ 12, 19, 21, 20 ],
            "wednesday": [ 20, 14, 16, 21 ],
            "thursday": [ 16, 10, 12, 16 ],
            "saturday": [ 12, 19, 21, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=314662615/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newfocusrecordings.bandcamp.com/album/nicholas-dieugenio-and-mimi-solomon-into-the-silence',
          a_string: 'Nicholas DiEugenio and Mimi Solomon: Into the Silence by Nicholas DiEugenio and Mimi Solomon',
          rule: {
            "monday": [ 12, 19, 21, 20 ],
            "tuesday": [ 10, 14, 16, 20 ],
            "wednesday": [ 12, 19, 21, 20 ],
            "thursday": [ 20, 14, 16, 21 ],
            "saturday": [ 16, 10, 12, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=137747104/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mattsmiley.bandcamp.com/album/2012-open-space-festival-of-new-music-john-cage',
          a_string: '2012 Open Space Festival of New Music: John Cage by MTM + The UNC Scratch Music Orchestra',
          rule: {
            "monday": [ 16, 10, 12, 16 ],
            "tuesday": [ 12, 19, 21, 20 ],
            "wednesday": [ 10, 14, 16, 20 ],
            "thursday": [ 12, 19, 21, 20 ],
            "saturday": [ 20, 14, 16, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4208840544/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://karlrecords.bandcamp.com/album/the-wild-bull',
          a_string: 'The Wild Bull by MORTON SUBOTNICK',
          rule: {
            "monday": [ 20, 14, 16, 21 ],
            "tuesday": [ 16, 10, 12, 16 ],
            "wednesday": [ 12, 19, 21, 20 ],
            "thursday": [ 10, 14, 16, 20 ],
            "saturday": [ 12, 19, 21, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1011216190/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cantaloupemusic.bandcamp.com/album/revelation',
          a_string: 'Revelation by Michael Harrison',
          rule: {
            "monday": [ 13, 20, 22, 21 ],
            "tuesday": [ 21, 15, 17, 22 ],
            "wednesday": [ 17, 11, 13, 1 ],
            "thursday": [ 13, 20, 22, 21 ],
            "saturday": [ 11, 15, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=136079918/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://juliawolfemusic.bandcamp.com/album/steel-hammer',
          a_string: 'Steel Hammer by Julia Wolfe ft. Bang on a Can All-Stars &amp; Trio Mediaeval',
          rule: {
            "monday": [ 11, 15, 17, 21 ],
            "tuesday": [ 13, 20, 22, 21 ],
            "wednesday": [ 21, 15, 17, 22 ],
            "thursday": [ 17, 11, 13, 1 ],
            "saturday": [ 13, 20, 22, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1728663263/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bunitamarcus.bandcamp.com/album/favorite-works-from-the-1980s',
          a_string: 'Favorite Works from the 1980&#39;s by Bunita Marcus',
          rule: {
            "monday": [ 13, 20, 22, 21 ],
            "tuesday": [ 11, 15, 17, 21 ],
            "wednesday": [ 13, 20, 22, 21 ],
            "thursday": [ 21, 15, 17, 22 ],
            "saturday": [ 17, 11, 13, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3851191522/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://randallholt.bandcamp.com/album/inside-the-kingdom-of-splendor-and-madness',
          a_string: 'Inside the Kingdom of Splendor and Madness by Randall Holt',
          rule: {
            "monday": [ 17, 11, 13, 1 ],
            "tuesday": [ 13, 20, 22, 21 ],
            "wednesday": [ 11, 15, 17, 21 ],
            "thursday": [ 13, 20, 22, 21 ],
            "saturday": [ 21, 15, 17, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2393287899/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rhyschatham.bandcamp.com/album/outdoor-spell-2',
          a_string: 'Outdoor Spell by Rhys Chatham',
          rule: {
            "monday": [ 21, 15, 17, 22 ],
            "tuesday": [ 17, 11, 13, 1 ],
            "wednesday": [ 13, 20, 22, 21 ],
            "thursday": [ 11, 15, 17, 21 ],
            "saturday": [ 13, 20, 22, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=405648307/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://anechoicmedia.bandcamp.com/album/bluecube',
          a_string: 'blueCube( ) by Kim Cascone',
          rule: {
            "monday": [ 13, 20, 22, 21 ],
            "tuesday": [ 21, 15, 17, 22 ],
            "wednesday": [ 17, 11, 13, 1 ],
            "thursday": [ 13, 20, 22, 21 ],
            "saturday": [ 11, 15, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2312517878/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thessalonians.bandcamp.com/album/solaristics',
          a_string: 'Solaristics by Thessalonians',
          rule: {
            "monday": [ 11, 15, 17, 21 ],
            "tuesday": [ 13, 20, 22, 21 ],
            "wednesday": [ 21, 15, 17, 22 ],
            "thursday": [ 17, 11, 13, 1 ],
            "saturday": [ 13, 20, 22, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=3597114623/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://eaux.ro/album/omert',
          a_string: 'Omertà by Rrose x Tujurikkuja',
          rule: {
            "monday": [ 14, 21, 23, 22 ],
            "tuesday": [ 12, 16, 18, 22 ],
            "wednesday": [ 14, 21, 23, 22 ],
            "thursday": [ 22, 16, 18, 23 ],
            "saturday": [ 18, 12, 14, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2929129774/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://unseenworlds.bandcamp.com/album/satie-slowly',
          a_string: 'Satie Slowly by Philip Corner',
          rule: {
            "monday": [ 18, 12, 14, 2 ],
            "tuesday": [ 14, 21, 23, 22 ],
            "wednesday": [ 12, 16, 18, 22 ],
            "thursday": [ 14, 21, 23, 22 ],
            "saturday": [ 22, 16, 18, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1021630657/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://unseenworlds.bandcamp.com/album/electronic-music-from-the-seventies-and-eighties',
          a_string: 'Electronic Music from the Seventies and Eighties by Carl Stone',
          rule: {
            "monday": [ 22, 16, 18, 23 ],
            "tuesday": [ 18, 12, 14, 2 ],
            "wednesday": [ 14, 21, 23, 22 ],
            "thursday": [ 12, 16, 18, 22 ],
            "saturday": [ 14, 21, 23, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2542953025/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://trystero.bandcamp.com/album/perfect-lives-the-park',
          a_string: 'Perfect Lives: The Park by Robert Ashley',
          rule: {
            "monday": [ 14, 21, 23, 22 ],
            "tuesday": [ 22, 16, 18, 23 ],
            "wednesday": [ 18, 12, 14, 2 ],
            "thursday": [ 14, 21, 23, 22 ],
            "saturday": [ 12, 16, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1796086025/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://trystero.bandcamp.com/album/living-room',
          a_string: 'Living Room by Trystero',
          rule: {
            "monday": [ 12, 16, 18, 22 ],
            "tuesday": [ 14, 21, 23, 22 ],
            "wednesday": [ 22, 16, 18, 23 ],
            "thursday": [ 18, 12, 14, 2 ],
            "saturday": [ 14, 21, 23, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1975731649/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bazantar.bandcamp.com/album/blood-and-holywater-2',
          a_string: 'Blood and Holywater by Mark Deutsch',
          rule: {
            "monday": [ 14, 21, 23, 22 ],
            "tuesday": [ 12, 16, 18, 22 ],
            "wednesday": [ 14, 21, 23, 22 ],
            "thursday": [ 22, 16, 18, 23 ],
            "saturday": [ 18, 12, 14, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/track=3442178856/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lisamoore.bandcamp.com/track/sonatra-by-michael-gordon',
          a_string: '&quot;Sonatra&quot; by Michael Gordon by Lisa Moore, piano',
          rule: {
            "monday": [ 18, 12, 14, 2 ],
            "tuesday": [ 14, 21, 23, 22 ],
            "wednesday": [ 12, 16, 18, 22 ],
            "thursday": [ 14, 21, 23, 22 ],
            "saturday": [ 22, 16, 18, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3809571461/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cantaloupemusic.bandcamp.com/album/time-loops',
          a_string: 'Time Loops by Michael Harrison &amp; Maya Beiser',
          rule: {
            "monday": [ 23, 17, 19, 24 ],
            "tuesday": [ 19, 13, 15, 3 ],
            "wednesday": [ 15, 22, 24, 23 ],
            "thursday": [ 13, 17, 19, 23 ],
            "saturday": [ 15, 22, 24, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4060482110/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ensembleetal.bandcamp.com/album/the-slow-reveal',
          a_string: 'The Slow Reveal by ensemble, et al.',
          rule: {
            "monday": [ 15, 22, 24, 23 ],
            "tuesday": [ 23, 17, 19, 24 ],
            "wednesday": [ 19, 13, 15, 3 ],
            "thursday": [ 15, 22, 24, 23 ],
            "saturday": [ 13, 17, 19, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3625848699/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lisamoore.bandcamp.com/album/piano-etudes-and-a-dream-by-hannah-lash',
          a_string: 'Piano Etudes and a Dream by Hannah Lash by Lisa Moore, piano',
          rule: {
            "monday": [ 13, 17, 19, 23 ],
            "tuesday": [ 15, 22, 24, 23 ],
            "wednesday": [ 23, 17, 19, 24 ],
            "thursday": [ 19, 13, 15, 3 ],
            "saturday": [ 15, 22, 24, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2097578068/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://n5md.bandcamp.com/album/seafaring',
          a_string: 'Seafaring by Last Days',
          rule: {
            "monday": [ 15, 22, 24, 23 ],
            "tuesday": [ 13, 17, 19, 23 ],
            "wednesday": [ 15, 22, 24, 23 ],
            "thursday": [ 23, 17, 19, 24 ],
            "saturday": [ 19, 13, 15, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3488538009/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://benbabbitt.bandcamp.com/album/kentucky-route-zero-act-ii',
          a_string: 'Kentucky Route Zero- Act II by Ben Babbitt',
          rule: {
            "monday": [ 19, 13, 15, 3 ],
            "tuesday": [ 15, 22, 24, 23 ],
            "wednesday": [ 13, 17, 19, 23 ],
            "thursday": [ 15, 22, 24, 23 ],
            "saturday": [ 23, 17, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3489930462/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tobytwining.bandcamp.com/album/chrysalid-requiem-2',
          a_string: 'Chrysalid Requiem by Toby Twining',
          rule: {
            "monday": [ 23, 17, 19, 24 ],
            "tuesday": [ 19, 13, 15, 3 ],
            "wednesday": [ 15, 22, 24, 23 ],
            "thursday": [ 13, 17, 19, 23 ],
            "saturday": [ 15, 22, 24, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4022937516/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tedhearne.bandcamp.com/album/sound-from-the-bench-2',
          a_string: 'Sound from the Bench by Ted Hearne &amp; The Crossing',
          rule: {
            "monday": [ 15, 22, 24, 23 ],
            "tuesday": [ 23, 17, 19, 24 ],
            "wednesday": [ 19, 13, 15, 3 ],
            "thursday": [ 15, 22, 24, 23 ],
            "saturday": [ 13, 17, 19, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=988142525/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cantaloupemusic.bandcamp.com/album/threads',
          a_string: 'Threads by So Percussion &amp; Paul Lansky',
          rule: {
            "monday": [ 14, 18, 20, 24 ],
            "tuesday": [ 16, 23, 25, 24 ],
            "wednesday": [ 24, 18, 20, 25 ],
            "thursday": [ 20, 14, 16, 4 ],
            "saturday": [ 16, 23, 25, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2425687750/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://brooklynyouthchorus.bandcamp.com/album/black-mountain-songs',
          a_string: 'Black Mountain Songs by Brooklyn Youth Chorus',
          rule: {
            "monday": [ 16, 23, 25, 24 ],
            "tuesday": [ 14, 18, 20, 24 ],
            "wednesday": [ 16, 23, 25, 24 ],
            "thursday": [ 24, 18, 20, 25 ],
            "saturday": [ 20, 14, 16, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3361243335/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nowensemble.bandcamp.com/album/awake-2',
          a_string: 'Awake by NOW Ensemble',
          rule: {
            "monday": [ 20, 14, 16, 4 ],
            "tuesday": [ 16, 23, 25, 24 ],
            "wednesday": [ 14, 18, 20, 24 ],
            "thursday": [ 16, 23, 25, 24 ],
            "saturday": [ 24, 18, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2321323404/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://alarmwillsound.bandcamp.com/album/steve-reich-tehillim-the-desert-music',
          a_string: 'Steve Reich: Tehillim &amp;The Desert Music by Alarm Will Sound &amp; Ossia',
          rule: {
            "monday": [ 24, 18, 20, 25 ],
            "tuesday": [ 20, 14, 16, 4 ],
            "wednesday": [ 16, 23, 25, 24 ],
            "thursday": [ 14, 18, 20, 24 ],
            "saturday": [ 16, 23, 25, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2843949395/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/the-continuing-story-of-counterpoint-parts-1-4-8-complete',
          a_string: 'The Continuing Story of Counterpoint Parts 1-4+8 (Complete) by David Borden / Mother Mallard',
          rule: {
            "monday": [ 16, 23, 25, 24 ],
            "tuesday": [ 24, 18, 20, 25 ],
            "wednesday": [ 20, 14, 16, 4 ],
            "thursday": [ 16, 23, 25, 24 ],
            "saturday": [ 14, 18, 20, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1975746660/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/for',
          a_string: 'For by The Claudia Quintet',
          rule: {
            "monday": [ 14, 18, 20, 24 ],
            "tuesday": [ 16, 23, 25, 24 ],
            "wednesday": [ 24, 18, 20, 25 ],
            "thursday": [ 20, 14, 16, 4 ],
            "saturday": [ 16, 23, 25, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3640489591/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/1970-1973',
          a_string: '1970-1973 by Mother Mallard&#39;s Portable Masterpiece Co.',
          rule: {
            "monday": [ 16, 23, 25, 24 ],
            "tuesday": [ 14, 18, 20, 24 ],
            "wednesday": [ 16, 23, 25, 24 ],
            "thursday": [ 24, 18, 20, 25 ],
            "saturday": [ 20, 14, 16, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3169532022/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://alvinlucier.bandcamp.com/album/still-and-moving-lines',
          a_string: 'Still and Moving Lines by Alvin Lucier',
          rule: {
            "monday": [ 21, 15, 17, 5 ],
            "tuesday": [ 17, 24, 26, 25 ],
            "wednesday": [ 15, 19, 21, 25 ],
            "thursday": [ 17, 24, 26, 25 ],
            "saturday": [ 25, 19, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=699195872/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chriswelcome.bandcamp.com/album/selected-chamber-works-2011-2015',
          a_string: 'Selected Chamber Works: 2011-2015 by Chris Welcome',
          rule: {
            "monday": [ 25, 19, 21, 26 ],
            "tuesday": [ 21, 15, 17, 5 ],
            "wednesday": [ 17, 24, 26, 25 ],
            "thursday": [ 15, 19, 21, 25 ],
            "saturday": [ 17, 24, 26, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3581604249/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jonathanzorn.bandcamp.com/album/and-perforation',
          a_string: 'And Perforation by Jonathan Zorn',
          rule: {
            "monday": [ 17, 24, 26, 25 ],
            "tuesday": [ 25, 19, 21, 26 ],
            "wednesday": [ 21, 15, 17, 5 ],
            "thursday": [ 17, 24, 26, 25 ],
            "saturday": [ 15, 19, 21, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3475745204/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cantaloupemusic.bandcamp.com/album/zippo-songs',
          a_string: 'Zippo Songs by Cantaloupe Music',
          rule: {
            "monday": [ 15, 19, 21, 25 ],
            "tuesday": [ 17, 24, 26, 25 ],
            "wednesday": [ 25, 19, 21, 26 ],
            "thursday": [ 21, 15, 17, 5 ],
            "saturday": [ 17, 24, 26, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4115830382/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lisamoore.bandcamp.com/album/lightning-slingers-and-dead-ringers',
          a_string: 'Lightning Slingers and Dead Ringers by Lisa Moore and Annie Gosfield',
          rule: {
            "monday": [ 17, 24, 26, 25 ],
            "tuesday": [ 15, 19, 21, 25 ],
            "wednesday": [ 17, 24, 26, 25 ],
            "thursday": [ 25, 19, 21, 26 ],
            "saturday": [ 21, 15, 17, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=953844037/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jonathanzorn.bandcamp.com/album/language-as-dust',
          a_string: 'Language as Dust by Jonathan Zorn',
          rule: {
            "monday": [ 21, 15, 17, 5 ],
            "tuesday": [ 17, 24, 26, 25 ],
            "wednesday": [ 15, 19, 21, 25 ],
            "thursday": [ 17, 24, 26, 25 ],
            "saturday": [ 25, 19, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2085894503/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nicomuhly.bandcamp.com/album/drones',
          a_string: 'Drones by Nico Muhly',
          rule: {
            "monday": [ 25, 19, 21, 26 ],
            "tuesday": [ 21, 15, 17, 5 ],
            "wednesday": [ 17, 24, 26, 25 ],
            "thursday": [ 15, 19, 21, 25 ],
            "saturday": [ 17, 24, 26, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2667946205/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://valgeir.bandcamp.com/album/architecture-of-loss',
          a_string: 'Architecture of Loss by Valgeir Sigurðsson',
          rule: {
            "monday": [ 18, 25, 27, 26 ],
            "tuesday": [ 26, 20, 22, 27 ],
            "wednesday": [ 22, 16, 18, 6 ],
            "thursday": [ 18, 25, 27, 26 ],
            "saturday": [ 16, 20, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2799098735/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zeitkratzer.bandcamp.com/album/alvin-lucier-old-school',
          a_string: 'Alvin Lucier [old school] by zeitkratzer',
          rule: {
            "monday": [ 16, 20, 22, 26 ],
            "tuesday": [ 18, 25, 27, 26 ],
            "wednesday": [ 26, 20, 22, 27 ],
            "thursday": [ 22, 16, 18, 6 ],
            "saturday": [ 18, 25, 27, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3587405953/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jaceclayton.bandcamp.com/album/the-julius-eastman-memory-depot',
          a_string: 'The Julius Eastman Memory Depot by Jace Clayton',
          rule: {
            "monday": [ 18, 25, 27, 26 ],
            "tuesday": [ 16, 20, 22, 26 ],
            "wednesday": [ 18, 25, 27, 26 ],
            "thursday": [ 26, 20, 22, 27 ],
            "saturday": [ 22, 16, 18, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3445780043/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://katrinaballads.bandcamp.com/album/katrina-ballads',
          a_string: 'Katrina Ballads by Ted Hearne',
          rule: {
            "monday": [ 22, 16, 18, 6 ],
            "tuesday": [ 18, 25, 27, 26 ],
            "wednesday": [ 16, 20, 22, 26 ],
            "thursday": [ 18, 25, 27, 26 ],
            "saturday": [ 26, 20, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3685033168/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://danielwohl.bandcamp.com/album/corps-exquis',
          a_string: 'Corps Exquis by Daniel Wohl &amp; TRANSIT',
          rule: {
            "monday": [ 26, 20, 22, 27 ],
            "tuesday": [ 22, 16, 18, 6 ],
            "wednesday": [ 18, 25, 27, 26 ],
            "thursday": [ 16, 20, 22, 26 ],
            "saturday": [ 18, 25, 27, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4020678438/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://zstheband.bandcamp.com/album/xe',
          a_string: 'Xe by Zs',
          rule: {
            "monday": [ 18, 25, 27, 26 ],
            "tuesday": [ 26, 20, 22, 27 ],
            "wednesday": [ 22, 16, 18, 6 ],
            "thursday": [ 18, 25, 27, 26 ],
            "saturday": [ 16, 20, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1462164011/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gregfox.bandcamp.com/album/the-gradual-progression',
          a_string: 'The Gradual Progression by Greg Fox',
          rule: {
            "monday": [ 16, 20, 22, 26 ],
            "tuesday": [ 18, 25, 27, 26 ],
            "wednesday": [ 26, 20, 22, 27 ],
            "thursday": [ 22, 16, 18, 6 ],
            "saturday": [ 18, 25, 27, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=838601098/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bannedproduction.bandcamp.com/album/two-pieces-two-decades-apart',
          a_string: 'Two Pieces, Two Decades Apart by Gino Robair',
          rule: {
            "monday": [ 19, 26, 27, 28 ],
            "tuesday": [ 17, 21, 23, 27 ],
            "wednesday": [ 19, 26, 28, 27 ],
            "thursday": [ 27, 21, 23, 28 ],
            "saturday": [ 23, 17, 19, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2327158320/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pauldresher.bandcamp.com/album/casa-vecchia',
          a_string: 'Casa Vecchia by Paul Dresher',
          rule: {
            "monday": [ 23, 17, 19, 7 ],
            "tuesday": [ 19, 26, 27, 28 ],
            "wednesday": [ 17, 21, 23, 27 ],
            "thursday": [ 19, 26, 28, 27 ],
            "saturday": [ 27, 21, 23, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=305668920/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://meerenai.bandcamp.com/album/the-art-of-noise',
          a_string: 'The Art of Noise by Meerenai Shim',
          rule: {
            "monday": [ 27, 21, 23, 28 ],
            "tuesday": [ 23, 17, 19, 7 ],
            "wednesday": [ 19, 26, 27, 28 ],
            "thursday": [ 17, 21, 23, 27 ],
            "saturday": [ 19, 26, 28, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2632839892/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://meerenai.bandcamp.com/album/pheromone',
          a_string: 'Pheromone by Meerenai Shim',
          rule: {
            "monday": [ 19, 26, 28, 27 ],
            "tuesday": [ 27, 21, 23, 28 ],
            "wednesday": [ 23, 17, 19, 7 ],
            "thursday": [ 19, 26, 27, 28 ],
            "saturday": [ 17, 21, 23, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3942372913/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://michaelgordonmusic.bandcamp.com/album/trance',
          a_string: 'Trance by Michael Gordon',
          rule: {
            "monday": [ 17, 21, 23, 27 ],
            "tuesday": [ 19, 26, 28, 27 ],
            "wednesday": [ 27, 21, 23, 28 ],
            "thursday": [ 23, 17, 19, 7 ],
            "saturday": [ 19, 26, 27, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2344800006/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://alarmwillsound.bandcamp.com/album/canzonas-americanas',
          a_string: 'Canzonas Americanas by Alarm Will Sound',
          rule: {
            "monday": [ 19, 26, 27, 28 ],
            "tuesday": [ 17, 21, 23, 27 ],
            "wednesday": [ 19, 26, 28, 27 ],
            "thursday": [ 27, 21, 23, 28 ],
            "saturday": [ 23, 17, 19, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=248286087/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wordsplusdreams.bandcamp.com/album/stereo',
          a_string: 'STEREO by Patrick Higgins',
          rule: {
            "monday": [ 23, 17, 19, 7 ],
            "tuesday": [ 19, 26, 27, 28 ],
            "wednesday": [ 17, 21, 23, 27 ],
            "thursday": [ 19, 26, 28, 27 ],
            "saturday": [ 27, 21, 23, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1142483214/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://infraction.bandcamp.com/album/echo-park',
          a_string: 'Echo Park by Willamette',
          rule: {
            "monday": [ 28, 22, 24, 29 ],
            "tuesday": [ 19, 26, 27, 28 ],
            "wednesday": [ 20, 27, 28, 29 ],
            "thursday": [ 18, 22, 24, 28 ],
            "saturday": [ 20, 27, 29, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2027508874/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://scissortail.bandcamp.com/album/ozark-dream',
          a_string: 'Ozark Dream by The New Honey Shade',
          rule: {
            "monday": [ 20, 27, 29, 28 ],
            "tuesday": [ 28, 22, 24, 29 ],
            "wednesday": [ 19, 26, 27, 28 ],
            "thursday": [ 20, 27, 28, 29 ],
            "saturday": [ 18, 22, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2375111690/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://greggskloff.bandcamp.com/album/the-eye-is-the-egg',
          a_string: 'The eye is the egg by Gregg Skloff',
          rule: {
            "monday": [ 18, 22, 24, 28 ],
            "tuesday": [ 20, 27, 29, 28 ],
            "wednesday": [ 28, 22, 24, 29 ],
            "thursday": [ 19, 26, 27, 28 ],
            "saturday": [ 20, 27, 28, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1835738773/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://xirecords.bandcamp.com/album/unforeseen-events',
          a_string: 'Unforeseen Events by David Behrman',
          rule: {
            "monday": [ 20, 27, 28, 29 ],
            "tuesday": [ 18, 22, 24, 28 ],
            "wednesday": [ 20, 27, 29, 28 ],
            "thursday": [ 28, 22, 24, 29 ],
            "saturday": [ 19, 26, 27, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4102516921/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://xirecords.bandcamp.com/album/fingering-an-idea',
          a_string: 'Fingering An Idea by David Watson',
          rule: {
            "monday": [ 19, 26, 27, 28 ],
            "tuesday": [ 20, 27, 28, 29 ],
            "wednesday": [ 18, 22, 24, 28 ],
            "thursday": [ 20, 27, 29, 28 ],
            "saturday": [ 28, 22, 24, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3087503069/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://xirecords.bandcamp.com/album/logos-works',
          a_string: 'Logos Works by Logos Duo (Moniek Darge / Godfried-Willem Raes )',
          rule: {
            "monday": [ 28, 22, 24, 29 ],
            "tuesday": [ 19, 26, 27, 28 ],
            "wednesday": [ 20, 27, 28, 29 ],
            "thursday": [ 18, 22, 24, 28 ],
            "saturday": [ 20, 27, 29, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=801757654/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tedhearne.bandcamp.com/album/the-law-of-mosaics',
          a_string: 'The Law of Mosaics by A Far Cry',
          rule: {
            "monday": [ 20, 27, 29, 28 ],
            "tuesday": [ 28, 22, 24, 29 ],
            "wednesday": [ 19, 26, 27, 28 ],
            "thursday": [ 20, 27, 28, 29 ],
            "saturday": [ 18, 22, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1978442588/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://philipwhite.bandcamp.com/album/the-way-the-rocks-hold-the-current-iii',
          a_string: 'The Way the Rocks Hold the Current (III) by Philip White',
          rule: {
            "monday": [ 19, 23, 25, 29 ],
            "tuesday": [ 21, 28, 30, 29 ],
            "wednesday": [ 29, 23, 25, 30 ],
            "thursday": [ 20, 27, 28, 29 ],
            "saturday": [ 21, 28, 29, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2299067940/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://populistrecords.bandcamp.com/album/daniel-corral-refractions',
          a_string: 'Daniel Corral // Refractions by Daniel Corral, Jeremy Kerner, Isaura String Quartet',
          rule: {
            "monday": [ 19, 23, 25, 29 ],
            "tuesday": [ 21, 28, 30, 29 ],
            "wednesday": [ 29, 23, 25, 30 ],
            "thursday": [ 20, 27, 28, 29 ],
            "saturday": [ 21, 28, 29, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1469135419/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://paulineoliveros1.bandcamp.com/album/tosca-salad',
          a_string: 'Tosca Salad by Deep Listening Band',
          rule: {
            "monday": [ 21, 28, 29, 30 ],
            "tuesday": [ 19, 23, 25, 29 ],
            "wednesday": [ 21, 28, 30, 29 ],
            "thursday": [ 29, 23, 25, 30 ],
            "saturday": [ 20, 27, 28, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=791025018/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://paulineoliveros1.bandcamp.com/album/springs',
          a_string: 'Springs by Pauline Oliveros/Andrew Deutsch',
          rule: {
            "monday": [ 20, 27, 28, 29 ],
            "tuesday": [ 21, 28, 29, 30 ],
            "wednesday": [ 19, 23, 25, 29 ],
            "thursday": [ 21, 28, 30, 29 ],
            "saturday": [ 29, 23, 25, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3967941489/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shinkoyo.bandcamp.com/album/music-of-shinkoyo',
          a_string: 'Music of Shinkoyo by SHINKOYO',
          rule: {
            "monday": [ 29, 23, 25, 30 ],
            "tuesday": [ 20, 27, 28, 29 ],
            "wednesday": [ 21, 28, 29, 30 ],
            "thursday": [ 19, 23, 25, 29 ],
            "saturday": [ 21, 28, 30, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2227378303/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://xirecords.bandcamp.com/album/toot',
          a_string: 'TOOT! by Charlie Morrow',
          rule: {
            "monday": [ 21, 28, 30, 29 ],
            "tuesday": [ 29, 23, 25, 30 ],
            "wednesday": [ 20, 27, 28, 29 ],
            "thursday": [ 21, 28, 29, 30 ],
            "saturday": [ 19, 23, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2696170312/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://benfrost.bandcamp.com/album/the-centre-cannot-hold',
          a_string: 'The Centre Cannot Hold by Ben Frost',
          rule: {
            "monday": [ 19, 23, 25, 29 ],
            "tuesday": [ 21, 28, 30, 29 ],
            "wednesday": [ 29, 23, 25, 30 ],
            "thursday": [ 20, 27, 28, 29 ],
            "saturday": [ 21, 28, 29, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2887721505/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://valgeir.bandcamp.com/album/draumalandi',
          a_string: 'Draumalandið by Valgeir Sigurðsson',
          rule: {
            "monday": [ 22, 29, 30, 31 ],
            "tuesday": [ 20, 24, 26, 30 ],
            "wednesday": [ 22, 29, 31, 30 ],
            "thursday": [ 30, 24, 26, 31 ],
            "saturday": [ 21, 28, 29, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2396290360/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mexiqueen.bandcamp.com/album/singles',
          a_string: 'singles by mexiqueen',
          rule: {
            "monday": [ 21, 28, 29, 30 ],
            "tuesday": [ 22, 29, 30, 31 ],
            "wednesday": [ 20, 24, 26, 30 ],
            "thursday": [ 22, 29, 31, 30 ],
            "saturday": [ 30, 24, 26, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1117739737/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thomasburritt.bandcamp.com/album/groundlines',
          a_string: 'Groundlines by Thomas Burritt',
          rule: {
            "monday": [ 30, 24, 26, 31 ],
            "tuesday": [ 21, 28, 29, 30 ],
            "wednesday": [ 22, 29, 30, 31 ],
            "thursday": [ 20, 24, 26, 30 ],
            "saturday": [ 22, 29, 31, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1696851893/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://unseenworlds.bandcamp.com/album/the-expanding-universe',
          a_string: 'The Expanding Universe by Laurie Spiegel',
          rule: {
            "monday": [ 22, 29, 31, 30 ],
            "tuesday": [ 30, 24, 26, 31 ],
            "wednesday": [ 21, 28, 29, 30 ],
            "thursday": [ 22, 29, 30, 31 ],
            "saturday": [ 20, 24, 26, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2967383451/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lesq.bandcamp.com/album/blunt-objects',
          a_string: 'Blunt Objects by Low End String Quartet',
          rule: {
            "monday": [ 20, 24, 26, 30 ],
            "tuesday": [ 22, 29, 31, 30 ],
            "wednesday": [ 30, 24, 26, 31 ],
            "thursday": [ 21, 28, 29, 30 ],
            "saturday": [ 22, 29, 30, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4227688948/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jonathanmatis.bandcamp.com/album/on-the-inevitability-of-loss',
          a_string: 'On the inevitability of loss by Jonathan Matis',
          rule: {
            "monday": [ 22, 29, 30, 31 ],
            "tuesday": [ 20, 24, 26, 30 ],
            "wednesday": [ 22, 29, 31, 30 ],
            "thursday": [ 30, 24, 26, 31 ],
            "saturday": [ 21, 28, 29, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3092382909/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rodhamilton.bandcamp.com/album/atitl-n-2',
          a_string: 'Atitlán by Rod Hamilton',
          rule: {
            "monday": [ 21, 28, 29, 30 ],
            "tuesday": [ 22, 29, 30, 31 ],
            "wednesday": [ 20, 24, 26, 30 ],
            "thursday": [ 22, 29, 31, 30 ],
            "saturday": [ 30, 24, 26, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3526851245/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://edmundwelles.bandcamp.com/album/tooth-claw',
          a_string: 'Tooth &amp; Claw by Edmund Welles: the bass clarinet quartet',
          rule: {
            "monday": [ 31, 25, 27, 1 ],
            "tuesday": [ 22, 29, 30, 31 ],
            "wednesday": [ 23, 30, 31, 1 ],
            "thursday": [ 21, 25, 27, 31 ],
            "saturday": [ 23, 30, 32, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1090957847/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nicomuhlyarchive.bandcamp.com/album/object-songs',
          a_string: 'Object Songs by Nico Muhly &amp; Maira Kalman',
          rule: {
            "monday": [ 23, 30, 32, 31 ],
            "tuesday": [ 31, 25, 27, 1 ],
            "wednesday": [ 22, 29, 30, 31 ],
            "thursday": [ 23, 30, 31, 1 ],
            "saturday": [ 21, 25, 27, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3262368151/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://coreydargel.bandcamp.com/album/ok-its-not-ok',
          a_string: 'OK It&#39;s Not OK by Corey Dargel',
          rule: {
            "monday": [ 21, 25, 27, 31 ],
            "tuesday": [ 23, 30, 32, 31 ],
            "wednesday": [ 31, 25, 27, 1 ],
            "thursday": [ 22, 29, 30, 31 ],
            "saturday": [ 23, 30, 31, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1759038092/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://xirecords.bandcamp.com/album/sinopah',
          a_string: 'Sinopah by Annea Lockwood/Ruth Anderson',
          rule: {
            "monday": [ 23, 30, 31, 1 ],
            "tuesday": [ 21, 25, 27, 31 ],
            "wednesday": [ 23, 30, 32, 31 ],
            "thursday": [ 31, 25, 27, 1 ],
            "saturday": [ 22, 29, 30, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3618095188/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://xirecords.bandcamp.com/album/flying-vegetables-of-the-apocalypse',
          a_string: 'Flying Vegetables of the Apocalypse by Guy Klucevsek',
          rule: {
            "monday": [ 22, 29, 30, 31 ],
            "tuesday": [ 23, 30, 31, 1 ],
            "wednesday": [ 21, 25, 27, 31 ],
            "thursday": [ 23, 30, 32, 31 ],
            "saturday": [ 31, 25, 27, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=938127030/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://xirecords.bandcamp.com/album/privacy-issues-droneworks-1996-2009',
          a_string: 'Privacy Issues (droneworks 1996 - 2009) by David First',
          rule: {
            "monday": [ 31, 25, 27, 1 ],
            "tuesday": [ 22, 29, 30, 31 ],
            "wednesday": [ 23, 30, 31, 1 ],
            "thursday": [ 21, 25, 27, 31 ],
            "saturday": [ 23, 30, 32, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3726473539/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://edoryan.bandcamp.com/album/the-yoke-of-summer-fugues-for-string-trio',
          a_string: 'The Yoke of Summer, fugues for String Trio by Edo Ryan',
          rule: {
            "monday": [ 23, 30, 32, 31 ],
            "tuesday": [ 31, 25, 27, 1 ],
            "wednesday": [ 22, 29, 30, 31 ],
            "thursday": [ 23, 30, 31, 1 ],
            "saturday": [ 21, 25, 27, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3002569069/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://saul-conrad.bandcamp.com/album/requiem',
          a_string: 'Requiem by Saul Conrad',
          rule: {
            "monday": [ 28, 4, 5, 6 ],
            "tuesday": [ 27, 3, 4, 5 ],
            "wednesday": [ 26, 2, 3, 4 ],
            "thursday": [ 25, 1, 2, 3 ],
            "saturday": [ 24, 31, 1, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3512686422/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://williamjaysydeman.bandcamp.com/album/music-for-percussion',
          a_string: 'Music for Percussion by William Jay Sydeman',
          rule: {
            "monday": [ 24, 31, 1, 2 ],
            "tuesday": [ 28, 4, 5, 6 ],
            "wednesday": [ 27, 3, 4, 5 ],
            "thursday": [ 26, 2, 3, 4 ],
            "saturday": [ 25, 1, 2, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3840169248/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theparlourtrick.bandcamp.com/album/a-blessed-unrest',
          a_string: 'A Blessed Unrest by The Parlour Trick',
          rule: {
            "monday": [ 25, 1, 2, 3 ],
            "tuesday": [ 24, 31, 1, 2 ],
            "wednesday": [ 28, 4, 5, 6 ],
            "thursday": [ 27, 3, 4, 5 ],
            "saturday": [ 26, 2, 3, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1826682391/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jherekbischoff.bandcamp.com/album/cistern',
          a_string: 'Cistern by Jherek Bischoff',
          rule: {
            "monday": [ 26, 2, 3, 4 ],
            "tuesday": [ 25, 1, 2, 3 ],
            "wednesday": [ 24, 31, 1, 2 ],
            "thursday": [ 28, 4, 5, 6 ],
            "saturday": [ 27, 3, 4, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4205936085/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chrismoriarty.bandcamp.com/album/something-great',
          a_string: 'Something Great by Chris Moriarty',
          rule: {
            "monday": [ 27, 3, 4, 5 ],
            "tuesday": [ 26, 2, 3, 4 ],
            "wednesday": [ 25, 1, 2, 3 ],
            "thursday": [ 24, 31, 1, 2 ],
            "saturday": [ 28, 4, 5, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2619942067/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://yarnwire.bandcamp.com/album/yarn-wire-currents-vol-3',
          a_string: 'Yarn/Wire/Currents Vol. 3 by Yarn/Wire',
          rule: {
            "monday": [ 28, 4, 5, 6 ],
            "tuesday": [ 27, 3, 4, 5 ],
            "wednesday": [ 26, 2, 3, 4 ],
            "thursday": [ 25, 1, 2, 3 ],
            "saturday": [ 24, 31, 1, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1830995350/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://yarnwire.bandcamp.com/album/yarn-wire-currents-vol-0',
          a_string: 'Yarn/Wire/Currents Vol. 0 by Yarn/Wire',
          rule: {
            "monday": [ 24, 31, 1, 2 ],
            "tuesday": [ 28, 4, 5, 6 ],
            "wednesday": [ 27, 3, 4, 5 ],
            "thursday": [ 26, 2, 3, 4 ],
            "saturday": [ 25, 1, 2, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1017533349/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://yarnwire.bandcamp.com/album/yarn-wire-currents-vol-4',
          a_string: 'Yarn/Wire/Currents Vol. 4 by Yarn/Wire',
          rule: {
            "monday": [ 26, 2, 3, 4 ],
            "tuesday": [ 25, 1, 2, 3 ],
            "wednesday": [ 29, 5, 6, 7 ],
            "thursday": [ 28, 4, 5, 6 ],
            "saturday": [ 27, 3, 4, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=538474728/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://yarnwire.bandcamp.com/album/yarn-wire-currents-vol-2',
          a_string: 'Yarn/Wire/Currents Vol. 2 by Yarn/Wire',
          rule: {
            "monday": [ 27, 3, 4, 5 ],
            "tuesday": [ 26, 2, 3, 4 ],
            "wednesday": [ 25, 1, 2, 3 ],
            "thursday": [ 29, 5, 6, 7 ],
            "saturday": [ 28, 4, 5, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1803781875/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://yarnwire.bandcamp.com/album/yarn-wire-currents-vol-1',
          a_string: 'Yarn/Wire/Currents Vol. 1 by Yarn/Wire',
          rule: {
            "monday": [ 28, 4, 5, 6 ],
            "tuesday": [ 27, 3, 4, 5 ],
            "wednesday": [ 26, 2, 3, 4 ],
            "thursday": [ 25, 1, 2, 3 ],
            "saturday": [ 29, 5, 6, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3727720017/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://xirecords.bandcamp.com/album/music-for-88',
          a_string: 'Music for 88 by Tom Johnson',
          rule: {
            "monday": [ 29, 5, 6, 7 ],
            "tuesday": [ 28, 4, 5, 6 ],
            "wednesday": [ 27, 3, 4, 5 ],
            "thursday": [ 26, 2, 3, 4 ],
            "saturday": [ 25, 1, 2, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 130,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=483535213/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://xirecords.bandcamp.com/album/same-same',
          a_string: 'Same Same by Fast Forward',
          rule: {
            "monday": [ 25, 1, 2, 3 ],
            "tuesday": [ 29, 5, 6, 7 ],
            "wednesday": [ 28, 4, 5, 6 ],
            "thursday": [ 27, 3, 4, 5 ],
            "saturday": [ 26, 2, 3, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 131,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3658349218/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://worstward.bandcamp.com/album/the-landscape-of-memory',
          a_string: 'The Landscape of Memory by Ulaan Passerine',
          rule: {
            "monday": [ 26, 2, 3, 4 ],
            "tuesday": [ 25, 1, 2, 3 ],
            "wednesday": [ 29, 5, 6, 7 ],
            "thursday": [ 28, 4, 5, 6 ],
            "saturday": [ 27, 3, 4, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 132,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3041243412/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jeremiahcymerman.bandcamp.com/album/chaos-of-memory',
          a_string: 'Chaos of Memory by Bloodmist',
          rule: {
            "monday": [ 27, 3, 4, 5 ],
            "tuesday": [ 26, 2, 3, 4 ],
            "wednesday": [ 25, 1, 2, 3 ],
            "thursday": [ 29, 5, 6, 7 ],
            "saturday": [ 28, 4, 5, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 133,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=739310458/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sopercussion.bandcamp.com/album/amid-the-noise',
          a_string: 'Amid The Noise by So Percussion',
          rule: {
            "monday": [ 29, 5, 6, 7 ],
            "tuesday": [ 28, 4, 5, 6 ],
            "wednesday": [ 27, 3, 4, 5 ],
            "thursday": [ 26, 2, 3, 4 ],
            "saturday": [ 30, 6, 7, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 134,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=421524315/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sopercussion.bandcamp.com/album/treasure-state',
          a_string: 'Treasure State by So Percussion &amp; Matmos',
          rule: {
            "monday": [ 30, 6, 7, 8 ],
            "tuesday": [ 29, 5, 6, 7 ],
            "wednesday": [ 28, 4, 5, 6 ],
            "thursday": [ 27, 3, 4, 5 ],
            "saturday": [ 26, 2, 3, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 135,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=211854370/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://asphaltorchestra.bandcamp.com/album/asphalt-orchestra',
          a_string: 'Asphalt Orchestra by Asphalt Orchestra',
          rule: {
            "monday": [ 26, 2, 3, 4 ],
            "tuesday": [ 30, 6, 7, 8 ],
            "wednesday": [ 29, 5, 6, 7 ],
            "thursday": [ 28, 4, 5, 6 ],
            "saturday": [ 27, 3, 4, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 136,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2122993562/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://xirecords.bandcamp.com/album/memory-like-water',
          a_string: 'Memory Like Water by Matt Rogalsky',
          rule: {
            "monday": [ 27, 3, 4, 5 ],
            "tuesday": [ 26, 2, 3, 4 ],
            "wednesday": [ 30, 6, 7, 8 ],
            "thursday": [ 29, 5, 6, 7 ],
            "saturday": [ 28, 4, 5, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 137,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2624091698/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://xirecords.bandcamp.com/album/ypgpn',
          a_string: 'YPGPN by Phill Niblock',
          rule: {
            "monday": [ 28, 4, 5, 6 ],
            "tuesday": [ 27, 3, 4, 5 ],
            "wednesday": [ 26, 2, 3, 4 ],
            "thursday": [ 30, 6, 7, 8 ],
            "saturday": [ 29, 5, 6, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 138,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1179748458/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://williamryanfritch.bandcamp.com/album/new-words-for-old-wounds',
          a_string: 'New Words For Old Wounds by William Ryan Fritch',
          rule: {
            "monday": [ 29, 5, 6, 7 ],
            "tuesday": [ 28, 4, 5, 6 ],
            "wednesday": [ 27, 3, 4, 5 ],
            "thursday": [ 26, 2, 3, 4 ],
            "saturday": [ 30, 6, 7, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 139,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3264936666/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://catchwaveltd.bandcamp.com/album/heights-in-depths',
          a_string: 'Heights in Depths by Leo Svirsky',
          rule: {
            "monday": [ 30, 6, 7, 8 ],
            "tuesday": [ 29, 5, 6, 7 ],
            "wednesday": [ 28, 4, 5, 6 ],
            "thursday": [ 27, 3, 4, 5 ],
            "saturday": [ 26, 2, 3, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 140,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=681093799/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newfocusrecordings.bandcamp.com/album/cartography',
          a_string: 'Cartography by Mariel Roberts',
          rule: {
            "monday": [ 27, 3, 4, 5 ],
            "tuesday": [ 31, 7, 8, 9 ],
            "wednesday": [ 30, 6, 7, 8 ],
            "thursday": [ 29, 5, 6, 7 ],
            "saturday": [ 28, 4, 5, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 141,
          user_id: 1,
          theme: 'American Maverick Tradition',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1265381457/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newfocusrecordings.bandcamp.com/album/metafagote',
          a_string: 'Metafagote by Rebekah Heller',
          rule: {
            "monday": [ 28, 4, 5, 6 ],
            "tuesday": [ 27, 3, 4, 5 ],
            "wednesday": [ 31, 7, 8, 9 ],
            "thursday": [ 30, 6, 7, 8 ],
            "saturday": [ 29, 5, 6, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('january_musics_id_seq', (SELECT MAX(id) FROM january_musics));");
    });
};
