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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
          source: 'bandcamp',
          src_string: 'src="https://bandcamp.com/EmbeddedPlayer/album=952221414/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
          theme: 'american mavericks',
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
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('january_musics_id_seq', (SELECT MAX(id) FROM january_musics));");
    });
};
