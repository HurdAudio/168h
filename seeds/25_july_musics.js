'use strict'
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('july_musics').del()
    .then(function () {
      // Inserts seed entries
      return knex('july_musics').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3711027961/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deerhoof.bandcamp.com/album/bibidi-babidi-boo-2',
          a_string: 'Bibidi Babidi Boo by Deerhoof',
          rule: {
            "monday": [ 1, 3, 7, 15 ],
            "tuesday": [ 31, 2, 6, 14 ],
            "wednesday": [ 30, 1, 5, 13 ],
            "thursday": [ 29, 31, 4, 12 ],
            "saturday": [ 2, 4, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4271325896/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://julianmayorga.bandcamp.com/album/superm-n-y-los-tapires',
          a_string: 'Supermán y los tapires by Julián Mayorga',
          rule: {
            "monday": [ 2, 4, 8, 16 ],
            "tuesday": [ 1, 3, 7, 15 ],
            "wednesday": [ 31, 2, 6, 14 ],
            "thursday": [ 30, 1, 5, 13 ],
            "saturday": [ 29, 31, 4, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2719222096/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fraternaltwin.bandcamp.com/album/homeworlding',
          a_string: 'Homeworlding by Fraternal Twin',
          rule: {
            "monday": [ 29, 31, 4, 12 ],
            "tuesday": [ 2, 4, 8, 16 ],
            "wednesday": [ 1, 3, 7, 15 ],
            "thursday": [ 31, 2, 6, 14 ],
            "saturday": [ 30, 1, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2161883254/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dva2.bandcamp.com/album/nipomo',
          a_string: 'http://dva2.bandcamp.com/album/nipomo',
          rule: {
            "monday": [ 30, 1, 5, 13 ],
            "tuesday": [ 29, 31, 4, 12 ],
            "wednesday": [ 2, 4, 8, 16 ],
            "thursday": [ 1, 3, 7, 15 ],
            "saturday": [ 31, 2, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=602852303/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dama-libra.bandcamp.com/album/claw',
          a_string: 'Claw by Dama/Libra',
          rule: {
            "monday": [ 31, 2, 6, 14 ],
            "tuesday": [ 30, 1, 5, 13 ],
            "wednesday": [ 29, 31, 4, 12 ],
            "thursday": [ 2, 4, 8, 16 ],
            "saturday": [ 1, 3, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=928201781/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://antiquatedfuture.bandcamp.com/album/recurring-chasms',
          a_string: 'Recurring Chasms by The Washboard Abs',
          rule: {
            "monday": [ 1, 3, 7, 15 ],
            "tuesday": [ 31, 2, 6, 14 ],
            "wednesday": [ 30, 1, 5, 13 ],
            "thursday": [ 29, 31, 4, 12 ],
            "saturday": [ 2, 4, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4260001278/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://arabonradar.bandcamp.com/album/zodiac-zoo',
          a_string: 'Zodiac Zoo by Made In Mexico (features Jeff Schneider on guitar)',
          rule: {
            "monday": [ 3, 5, 9, 17 ],
            "tuesday": [ 2, 4, 8, 16 ],
            "wednesday": [ 1, 3, 7, 15 ],
            "thursday": [ 31, 2, 6, 14 ],
            "saturday": [ 30, 1, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=371755631/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://skingraftrecords.bandcamp.com/album/turbo-mattress',
          a_string: 'Turbo Mattress by The Chinese Stars',
          rule: {
            "monday": [ 30, 1, 5, 13 ],
            "tuesday": [ 3, 5, 9, 17 ],
            "wednesday": [ 2, 4, 8, 16 ],
            "thursday": [ 1, 3, 7, 15 ],
            "saturday": [ 31, 2, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3467243048/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://skingraftrecords.bandcamp.com/album/ruins-alone',
          a_string: 'Ruins Alone by Ruins Alone',
          rule: {
            "monday": [ 31, 2, 6, 14 ],
            "tuesday": [ 30, 1, 5, 13 ],
            "wednesday": [ 3, 5, 9, 17 ],
            "thursday": [ 2, 4, 8, 16 ],
            "saturday": [ 1, 3, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1474790758/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deerhoof.bandcamp.com/album/la-isla-bonita',
          a_string: 'La Isla Bonita by Deerhoof',
          rule: {
            "monday": [ 1, 3, 7, 15 ],
            "tuesday": [ 31, 2, 6, 14 ],
            "wednesday": [ 30, 1, 5, 13 ],
            "thursday": [ 3, 5, 9, 17 ],
            "saturday": [ 2, 4, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1217250207/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fakebuildings.bandcamp.com/album/primitive-advertising-3',
          a_string: 'Primitive Advertising by Fake Buildings',
          rule: {
            "monday": [ 2, 4, 8, 16 ],
            "tuesday": [ 1, 3, 7, 15 ],
            "wednesday": [ 31, 2, 6, 14 ],
            "thursday": [ 30, 1, 5, 13 ],
            "saturday": [ 3, 5, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2946865467/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ztapes.bandcamp.com/album/saint-molly',
          a_string: 'Saint Molly by Fox Academy',
          rule: {
            "monday": [ 3, 5, 9, 17 ],
            "tuesday": [ 2, 4, 8, 16 ],
            "wednesday": [ 1, 3, 7, 15 ],
            "thursday": [ 31, 2, 6, 14 ],
            "saturday": [ 30, 1, 5, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1147182159/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sleeppartypeople.bandcamp.com/album/lingering',
          a_string: 'Lingering by Sleep Party People',
          rule: {
            "monday": [ 30, 1, 5, 13 ],
            "tuesday": [ 3, 5, 9, 17 ],
            "wednesday": [ 2, 4, 8, 16 ],
            "thursday": [ 1, 3, 7, 15 ],
            "saturday": [ 31, 2, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3252101447/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://badafrorecords.bandcamp.com/album/turn-on-tune-in-fuck-off',
          a_string: 'Turn On Tune In Fuck Off by Dragontears',
          rule: {
            "monday": [ 1, 3, 7, 15 ],
            "tuesday": [ 31, 2, 6, 14 ],
            "wednesday": [ 4, 6, 10, 18 ],
            "thursday": [ 3, 5, 9, 17 ],
            "saturday": [ 2, 4, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3236961161/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://howlinggiant.bandcamp.com/album/black-hole-space-wizard-part-1',
          a_string: 'Black Hole Space Wizard: Part 1 by Howling Giant',
          rule: {
            "monday": [ 2, 4, 8, 16 ],
            "tuesday": [ 1, 3, 7, 15 ],
            "wednesday": [ 31, 2, 6, 14 ],
            "thursday": [ 4, 6, 10, 18 ],
            "saturday": [ 3, 5, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1280447735/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dva2.bandcamp.com/album/hu',
          a_string: 'HU by Dva',
          rule: {
            "monday": [ 3, 5, 9, 17 ],
            "tuesday": [ 2, 4, 8, 16 ],
            "wednesday": [ 1, 3, 7, 15 ],
            "thursday": [ 31, 2, 6, 14 ],
            "saturday": [ 4, 6, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3565451903/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bsmrocks.bandcamp.com/album/health',
          a_string: 'Health by Alpha Male Tea Party',
          rule: {
            "monday": [ 4, 6, 10, 18 ],
            "tuesday": [ 3, 5, 9, 17 ],
            "wednesday": [ 2, 4, 8, 16 ],
            "thursday": [ 1, 3, 7, 15 ],
            "saturday": [ 31, 2, 6, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4231337207/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bsmrocks.bandcamp.com/album/twin-galaxies',
          a_string: 'Twin Galaxies by Delta Sleep',
          rule: {
            "monday": [ 31, 2, 6, 14 ],
            "tuesday": [ 4, 6, 10, 18 ],
            "wednesday": [ 3, 5, 9, 17 ],
            "thursday": [ 2, 4, 8, 16 ],
            "saturday": [ 1, 3, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1799431156/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deerhoof.bandcamp.com/album/friend-opportunity-2',
          a_string: 'Friend Opportunity by Deerhoof',
          rule: {
            "monday": [ 1, 3, 7, 15 ],
            "tuesday": [ 31, 2, 6, 14 ],
            "wednesday": [ 4, 6, 10, 18 ],
            "thursday": [ 3, 5, 9, 17 ],
            "saturday": [ 2, 4, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3989667233/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://xiuxiu.bandcamp.com/album/forget',
          a_string: 'FORGET by Xiu Xiu',
          rule: {
            "monday": [ 2, 4, 8, 16 ],
            "tuesday": [ 1, 3, 7, 15 ],
            "wednesday": [ 31, 2, 6, 14 ],
            "thursday": [ 4, 6, 10, 18 ],
            "saturday": [ 3, 5, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2465859575/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ofmontreal.bandcamp.com/album/rune-husk',
          a_string: 'Rune Husk by of Montreal',
          rule: {
            "monday": [ 4, 6, 10, 18 ],
            "tuesday": [ 3, 5, 9, 17 ],
            "wednesday": [ 2, 4, 8, 16 ],
            "thursday": [ 1, 3, 7, 15 ],
            "saturday": [ 5, 7, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1217143493/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dirtyprojectors.bandcamp.com/album/the-getty-address',
          a_string: 'The Getty Address by Dirty Projectors',
          rule: {
            "monday": [ 5, 7, 11, 19 ],
            "tuesday": [ 4, 6, 10, 18 ],
            "wednesday": [ 3, 5, 9, 17 ],
            "thursday": [ 2, 4, 8, 16 ],
            "saturday": [ 1, 3, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2154819870/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://vampire-weekend.bandcamp.com/album/vampire-weekend',
          a_string: 'Vampire Weekend by Vampire Weekend',
          rule: {
            "monday": [ 1, 3, 7, 15 ],
            "tuesday": [ 5, 7, 11, 19 ],
            "wednesday": [ 4, 6, 10, 18 ],
            "thursday": [ 3, 5, 9, 17 ],
            "saturday": [ 2, 4, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3355136315/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hidrogenesse.bandcamp.com/album/hidrogenesse-versus-the-hidden-cameras',
          a_string: 'Hidrogenesse versus The Hidden Cameras by Hidrogenesse versus The Hidden Cameras',
          rule: {
            "monday": [ 2, 4, 8, 16 ],
            "tuesday": [ 1, 3, 7, 15 ],
            "wednesday": [ 5, 7, 11, 19 ],
            "thursday": [ 4, 6, 10, 18 ],
            "saturday": [ 3, 5, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2880046892/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cloudbecomesyourhand.bandcamp.com/album/rest-in-fleas',
          a_string: 'Rest In Fleas by cloud becomes your hand',
          rule: {
            "monday": [ 3, 5, 9, 17 ],
            "tuesday": [ 2, 4, 8, 16 ],
            "wednesday": [ 1, 3, 7, 15 ],
            "thursday": [ 5, 7, 11, 19 ],
            "saturday": [ 4, 6, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3520683750/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://guerillatoss.bandcamp.com/album/gt-ultra',
          a_string: 'GT ULTRA by Guerilla Toss',
          rule: {
            "monday": [ 4, 6, 10, 18 ],
            "tuesday": [ 3, 5, 9, 17 ],
            "wednesday": [ 2, 4, 8, 16 ],
            "thursday": [ 1, 3, 7, 15 ],
            "saturday": [ 5, 7, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3831309651/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://palmnewyork.bandcamp.com/album/trading-basics',
          a_string: 'Trading Basics by Palm',
          rule: {
            "monday": [ 5, 7, 11, 19 ],
            "tuesday": [ 4, 6, 10, 18 ],
            "wednesday": [ 3, 5, 9, 17 ],
            "thursday": [ 2, 4, 8, 16 ],
            "saturday": [ 1, 3, 7, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2173121410/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/chrome-black-gold',
          a_string: 'Chrome Black Gold by Chrome Hoof',
          rule: {
            "monday": [ 2, 4, 8, 16 ],
            "tuesday": [ 6, 8, 12, 20 ],
            "wednesday": [ 5, 7, 11, 19 ],
            "thursday": [ 4, 6, 10, 18 ],
            "saturday": [ 3, 5, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3470289651/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kiln-audio.bandcamp.com/album/meadow-watt',
          a_string: 'meadow:watt by KILN',
          rule: {
            "monday": [ 3, 5, 9, 17 ],
            "tuesday": [ 2, 4, 8, 16 ],
            "wednesday": [ 6, 8, 12, 20 ],
            "thursday": [ 5, 7, 11, 19 ],
            "saturday": [ 4, 6, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2695757310/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chiheihatakeyama.bandcamp.com/album/mirage',
          a_string: 'Mirage by Chihei Hatakeyama',
          rule: {
            "monday": [ 4, 6, 10, 18  ],
            "tuesday": [ 3, 5, 9, 17 ],
            "wednesday": [ 2, 4, 8, 16 ],
            "thursday": [ 6, 8, 12, 20 ],
            "saturday": [ 5, 7, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4098074003/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sleeppartypeople.bandcamp.com/album/floating',
          a_string: 'Floating by Sleep Party People',
          rule: {
            "monday": [ 5, 7, 11, 19 ],
            "tuesday": [ 4, 6, 10, 18 ],
            "wednesday": [ 3, 5, 9, 17 ],
            "thursday": [ 2, 4, 8, 16 ],
            "saturday": [ 6, 8, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=877964550/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://johnny2fingers.bandcamp.com/album/green-door-sessions',
          a_string: 'Green Door Sessions by Johnny 2 Fingers &amp; the Deformities',
          rule: {
            "monday": [ 6, 8, 12, 20 ],
            "tuesday": [ 5, 7, 11, 19 ],
            "wednesday": [ 4, 6, 10, 18 ],
            "thursday": [ 3, 5, 9, 17 ],
            "saturday": [ 2, 4, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=262799965/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shilparay.bandcamp.com/album/door-girl',
          a_string: 'Door Girl by Shilpa Ray',
          rule: {
            "monday": [ 6, 8, 12, 20 ],
            "tuesday": [ 5, 7, 11, 19 ],
            "wednesday": [ 4, 6, 10, 18 ],
            "thursday": [ 3, 5, 9, 17 ],
            "saturday": [ 2, 4, 8, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3819428635/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deerhoof.bandcamp.com/album/apple-o',
          a_string: 'Apple O&#39; by Deerhoof',
          rule: {
            "monday": [ 2, 4, 8, 16 ],
            "tuesday": [ 6, 8, 12, 20 ],
            "wednesday": [ 5, 7, 11, 19 ],
            "thursday": [ 4, 6, 10, 18 ],
            "saturday": [ 3, 5, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=565792550/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dreamcatalogue.bandcamp.com/album/--18',
          a_string: '新しい日の誕生 by 2814',
          rule: {
            "monday": [ 4, 6, 10, 18 ],
            "tuesday": [ 3, 5, 9, 17 ],
            "wednesday": [ 7, 9, 13, 21 ],
            "thursday": [ 6, 8, 12, 20 ],
            "saturday": [ 5, 7, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3050659632/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ericcopeland.bandcamp.com/album/goofballs',
          a_string: 'Goofballs by Eric Copeland',
          rule: {
            "monday": [ 5, 7, 11, 19 ],
            "tuesday": [ 4, 6, 10, 18 ],
            "wednesday": [ 3, 5, 9, 17 ],
            "thursday": [ 7, 9, 13, 21 ],
            "saturday": [ 6, 8, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1670100583/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deerhoof.bandcamp.com/album/fever-121614',
          a_string: 'Fever 121614 by Deerhoof',
          rule: {
            "monday": [ 6, 8, 12, 20 ],
            "tuesday": [ 5, 7, 11, 19 ],
            "wednesday": [ 4, 6, 10, 18 ],
            "thursday": [ 3, 5, 9, 17 ],
            "saturday": [ 7, 9, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4103317405/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tendonlevey.bandcamp.com/album/countertorch',
          a_string: 'Countertorch by Tendon Levey',
          rule: {
            "monday": [ 7, 9, 13, 21 ],
            "tuesday": [ 6, 8, 12, 20 ],
            "wednesday": [ 5, 7, 11, 19 ],
            "thursday": [ 4, 6, 10, 18 ],
            "saturday": [ 3, 5, 9, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3219900620/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hardrubberorchestra.bandcamp.com/album/crush',
          a_string: 'Crush by John Korsrud&#39;s Hard Rubber Orchestra',
          rule: {
            "monday": [ 3, 5, 9, 17 ],
            "tuesday": [ 7, 9, 13, 21 ],
            "wednesday": [ 6, 8, 12, 20 ],
            "thursday": [ 5, 7, 11, 19 ],
            "saturday": [ 4, 6, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4209349782/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theasteroidbelt.bandcamp.com/album/do-whats-right',
          a_string: 'Do Whats Right by The Asteroid Belt',
          rule: {
            "monday": [ 4, 6, 10, 18 ],
            "tuesday": [ 3, 5, 9, 17 ],
            "wednesday": [ 7, 9, 13, 21 ],
            "thursday": [ 6, 8, 12, 20 ],
            "saturday": [ 5, 7, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=420421917/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://naxatras.bandcamp.com/album/naxatras',
          a_string: 'Naxatras by Naxatras',
          rule: {
            "monday": [ 5, 7, 11, 19 ],
            "tuesday": [ 4, 6, 10, 18 ],
            "wednesday": [ 3, 5, 9, 17 ],
            "thursday": [ 7, 9, 13, 21 ],
            "saturday": [ 6, 8, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=688807833/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tuber.bandcamp.com/album/desert-overcrowded',
          a_string: 'Desert Overcrowded by Tuber',
          rule: {
            "monday": [ 7, 9, 13, 21 ],
            "tuesday": [ 6, 8, 12, 20 ],
            "wednesday": [ 5, 7, 11, 19 ],
            "thursday": [ 4, 6, 10, 18 ],
            "saturday": [ 8, 10, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2229168204/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lostbayouramblers.bandcamp.com/album/mammoth-waltz',
          a_string: 'Mammoth Waltz by Lost Bayou Ramblers',
          rule: {
            "monday": [ 8, 10, 14, 22 ],
            "tuesday": [ 7, 9, 13, 21 ],
            "wednesday": [ 6, 8, 12, 20 ],
            "thursday": [ 5, 7, 11, 19 ],
            "saturday": [ 4, 6, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=767238702/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://satelliteyoung.bandcamp.com/album/satellite-young',
          a_string: 'Satellite Young by Satellite Young',
          rule: {
            "monday": [ 4, 6, 10, 18 ],
            "tuesday": [ 8, 10, 14, 22 ],
            "wednesday": [ 7, 9, 13, 21 ],
            "thursday": [ 6, 8, 12, 20 ],
            "saturday": [ 5, 7, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=99843590/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://perturbator.bandcamp.com/album/the-uncanny-valley',
          a_string: 'The Uncanny Valley by PERTURBATOR',
          rule: {
            "monday": [ 5, 7, 11, 19 ],
            "tuesday": [ 4, 6, 10, 18 ],
            "wednesday": [ 8, 10, 14, 22 ],
            "thursday": [ 7, 9, 13, 21 ],
            "saturday": [ 6, 8, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=287335279/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dva2.bandcamp.com/album/botanicula',
          a_string: 'BOTANICULA by Dva',
          rule: {
            "monday": [ 6, 8, 12, 20 ],
            "tuesday": [ 5, 7, 11, 19 ],
            "wednesday": [ 4, 6, 10, 18 ],
            "thursday": [ 8, 10, 14, 22 ],
            "saturday": [ 7, 9, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=360780966/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://store.floex.cz/album/machinarium-soundtrack',
          a_string: 'Machinarium Soundtrack by Tomáš Dvořák',
          rule: {
            "monday": [ 7, 9, 13, 21 ],
            "tuesday": [ 6, 8, 12, 20 ],
            "wednesday": [ 5, 7, 11, 19 ],
            "thursday": [ 4, 6, 10, 18 ],
            "saturday": [ 8, 10, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1427988416/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cocofunka.bandcamp.com/album/ch-caro',
          a_string: 'Chúcaro by Cocofunka',
          rule: {
            "monday": [ 8, 10, 14, 22 ],
            "tuesday": [ 7, 9, 13, 21 ],
            "wednesday": [ 6, 8, 12, 20 ],
            "thursday": [ 5, 7, 11, 19 ],
            "saturday": [ 4, 6, 10, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3300944452/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://melkbelly.bandcamp.com/album/nothing-valley',
          a_string: 'Nothing Valley by Melkbelly',
          rule: {
            "monday": [ 5, 7, 11, 19 ],
            "tuesday": [ 9, 11, 15, 23 ],
            "wednesday": [ 8, 10, 14, 22 ],
            "thursday": [ 7, 9, 13, 21 ],
            "saturday": [ 6, 7, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3035269069/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'https://bandcamp.com/EmbeddedPlayer/album=3035269069/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          a_string: 'dripping by Pile',
          rule: {
            "monday": [ 6, 7, 12, 20 ],
            "tuesday": [ 5, 7, 11, 19 ],
            "wednesday": [ 9, 11, 15, 23 ],
            "thursday": [ 8, 10, 14, 22 ],
            "saturday": [ 7, 9, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3619728831/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fathistorymonth.bandcamp.com/album/bad-history-month',
          a_string: 'Bad History Month by Fat History Month',
          rule: {
            "monday": [ 7, 9, 13, 21 ],
            "tuesday": [ 6, 7, 12, 20 ],
            "wednesday": [ 5, 7, 11, 19 ],
            "thursday": [ 9, 11, 15, 23 ],
            "saturday": [ 8, 10, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3956752732/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuneiformrecords.bandcamp.com/album/ghost-surveillance',
          a_string: 'Ghost Surveillance by Algernon',
          rule: {
            "monday": [ 8, 10, 14, 22 ],
            "tuesday": [ 7, 9, 13, 21 ],
            "wednesday": [ 6, 7, 12, 20 ],
            "thursday": [ 5, 7, 11, 19 ],
            "saturday": [  ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1327765972/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://helloskinny.bandcamp.com/album/revolutions',
          a_string: 'Revolutions by Hello Skinny',
          rule: {
            "monday": [ 9, 11, 15, 23 ],
            "tuesday": [ 8, 10, 14, 22 ],
            "wednesday": [ 7, 9, 13, 21 ],
            "thursday": [ 6, 7, 12, 20 ],
            "saturday": [ 5, 7, 11, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2898603439/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://meltyourselfdown.bandcamp.com/album/melt-yourself-down',
          a_string: 'Melt Yourself Down by Melt Yourself Down',
          rule: {
            "monday": [ 5, 7, 11, 19 ],
            "tuesday": [ 9, 11, 15, 23 ],
            "wednesday": [ 8, 10, 14, 22 ],
            "thursday": [ 7, 9, 13, 21 ],
            "saturday": [ 6, 7, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1326694238/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://durant.bandcamp.com/album/dimensi-n-d',
          a_string: 'Dimensión_D by Durant',
          rule: {
            "monday": [ 6, 7, 12, 20 ],
            "tuesday": [ 5, 7, 11, 19 ],
            "wednesday": [ 9, 11, 15, 23 ],
            "thursday": [ 8, 10, 14, 22 ],
            "saturday": [ 7, 9, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3672765699/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://r-ch-v.bandcamp.com/album/hypnosys',
          a_string: 'HYPNOSYS by Upgrayedd Smurphy',
          rule: {
            "monday": [ 8, 10, 14, 22 ],
            "tuesday": [ 7, 8, 13, 21 ],
            "wednesday": [ 6, 8, 12, 20 ],
            "thursday": [ 10, 12, 16, 24 ],
            "saturday": [ 9, 11, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=22561417/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://orangemilkrecords.bandcamp.com/album/soft-channel',
          a_string: 'Soft Channel by Giant Claw',
          rule: {
            "monday": [ 9, 11, 15, 23 ],
            "tuesday": [ 8, 10, 14, 22 ],
            "wednesday": [ 7, 8, 13, 21 ],
            "thursday": [ 6, 8, 12, 20 ],
            "saturday": [ 10, 12, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=45679449/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://emptymty.bandcamp.com/album/tacos-al-vaporwave',
          a_string: 'Tacos Al Vaporwave by Sentidos Apuestos',
          rule: {
            "monday": [ 10, 12, 16, 24 ],
            "tuesday": [ 9, 11, 15, 23 ],
            "wednesday": [ 8, 10, 14, 22 ],
            "thursday": [ 7, 8, 13, 21 ],
            "saturday": [ 6, 8, 12, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1356105338/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://acidbat.bandcamp.com/album/lupercalia',
          a_string: 'Lupercalia by Acidbat',
          rule: {
            "monday": [ 6, 8, 12, 20 ],
            "tuesday": [ 10, 12, 16, 24 ],
            "wednesday": [ 9, 11, 15, 23 ],
            "thursday": [ 8, 10, 14, 22 ],
            "saturday": [ 7, 8, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=372118778/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://churchfire.bandcamp.com/album/pussy-blood',
          a_string: 'pussy blood by church fire',
          rule: {
            "monday": [ 7, 8, 13, 21 ],
            "tuesday": [ 6, 8, 12, 20 ],
            "wednesday": [ 10, 12, 16, 24 ],
            "thursday": [ 9, 11, 15, 23 ],
            "saturday": [ 8, 10, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1369389152/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bongwishbbib.bandcamp.com/album/bong-wish-ep',
          a_string: 'Bong Wish EP by Bong Wish',
          rule: {
            "monday": [ 8, 10, 14, 22 ],
            "tuesday": [ 7, 8, 13, 21 ],
            "wednesday": [ 6, 8, 12, 20 ],
            "thursday": [ 10, 12, 16, 24 ],
            "saturday": [ 9, 11, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4220190943/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://spacecaptainofficial.bandcamp.com/album/all-flowers-in-time',
          a_string: 'All Flowers In Time by Space Captain',
          rule: {
            "monday": [ 9, 11, 15, 23 ],
            "tuesday": [ 8, 10, 14, 22 ],
            "wednesday": [ 7, 8, 13, 21 ],
            "thursday": [ 6, 8, 12, 20 ],
            "saturday": [ 10, 12, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1111516104/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jonbap.bandcamp.com/album/yesterdays-homily',
          a_string: 'Yesterday&#39;s Homily by Jon Bap',
          rule: {
            "monday": [ 11, 13, 17, 25 ],
            "tuesday": [ 10, 12, 16, 24 ],
            "wednesday": [ 9, 11, 15, 23 ],
            "thursday": [ 8, 9, 14, 22 ],
            "saturday": [ 7, 9, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2586212974/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fineforest.bandcamp.com/album/wannabewithu',
          a_string: 'wannabewithu by Cuco',
          rule: {
            "monday": [ 7, 9, 13, 21 ],
            "tuesday": [ 11, 13, 17, 25 ],
            "wednesday": [ 10, 12, 16, 24 ],
            "thursday": [ 9, 11, 15, 23 ],
            "saturday": [ 8, 9, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1062515144/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thezephyrbones.bandcamp.com/album/secret-place',
          a_string: 'Secret Place by The Zephyr Bones',
          rule: {
            "monday": [ 8, 9, 14, 22 ],
            "tuesday": [ 7, 9, 13, 21 ],
            "wednesday": [ 11, 13, 17, 25 ],
            "thursday": [ 10, 12, 16, 24 ],
            "saturday": [ 9, 11, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2138740185/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fantasticabastidas.bandcamp.com/album/time-portal',
          a_string: 'Time Portal by Bastidas!',
          rule: {
            "monday": [ 9, 11, 15, 23 ],
            "tuesday": [ 8, 9, 14, 22 ],
            "wednesday": [ 7, 9, 13, 21 ],
            "thursday": [ 11, 13, 17, 25 ],
            "saturday": [ 10, 12, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1622777037/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://acid-mess.bandcamp.com/album/ii',
          a_string: 'II by Acid Mess',
          rule: {
            "monday": [ 10, 12, 16, 24 ],
            "tuesday": [ 9, 11, 15, 23 ],
            "wednesday": [ 8, 9, 14, 22 ],
            "thursday": [ 7, 9, 13, 21 ],
            "saturday": [ 11, 13, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=558676569/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sergeantthunderhoof.bandcamp.com/album/ride-of-the-hoof',
          a_string: 'Ride Of The Hoof by Sergeant Thunderhoof',
          rule: {
            "monday": [ 11, 13, 17, 25 ],
            "tuesday": [ 10, 12, 16, 24 ],
            "wednesday": [ 9, 11, 15, 23 ],
            "thursday": [ 8, 9, 14, 22 ],
            "saturday": [ 7, 9, 13, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4154098583/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://elephanttreeband.bandcamp.com/album/elephant-tree',
          a_string: 'Elephant Tree by Elephant Tree',
          rule: {
            "monday": [ 7, 9, 13, 21 ],
            "tuesday": [ 11, 13, 17, 25 ],
            "wednesday": [ 10, 12, 16, 24 ],
            "thursday": [ 9, 11, 15, 23 ],
            "saturday": [ 8, 9, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2455120945/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://crooked-man.bandcamp.com/album/crooked-man-2xlp',
          a_string: 'Crooked Man 2xLP by Crooked Man',
          rule: {
            "monday": [ 9, 10, 15, 23 ],
            "tuesday": [ 8, 10, 14, 22 ],
            "wednesday": [ 12, 14, 18, 26 ],
            "thursday": [ 11, 13, 17, 25 ],
            "saturday": [ 10, 12, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2662097331/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deliagonzalez.bandcamp.com/album/hidden-song-ep',
          a_string: 'Hidden Song EP by Delia Gonzalez',
          rule: {
            "monday": [ 10, 12, 16, 24 ],
            "tuesday": [ 9, 10, 15, 23 ],
            "wednesday": [ 8, 10, 14, 22 ],
            "thursday": [ 12, 14, 18, 26 ],
            "saturday": [ 11, 13, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3889725135/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nhkyxkoyxen.bandcamp.com/album/exit-entrance',
          a_string: 'Exit Entrance by NHK',
          rule: {
            "monday": [ 11, 13, 17, 25 ],
            "tuesday": [ 10, 12, 16, 24 ],
            "wednesday": [ 9, 10, 15, 23 ],
            "thursday": [ 8, 10, 14, 22 ],
            "saturday": [ 12, 14, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=326280549/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kittykittytuna.bandcamp.com/album/kitty-kitty-tuna',
          a_string: 'Kitty Kitty Tuna by Kitty Kitty Tuna',
          rule: {
            "monday": [ 12, 14, 18, 26 ],
            "tuesday": [ 11, 13, 17, 25 ],
            "wednesday": [ 10, 12, 16, 24 ],
            "thursday": [ 9, 10, 15, 23 ],
            "saturday": [ 8, 10, 14, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1272704842/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://apneu.bandcamp.com/album/mixed-feelings',
          a_string: 'Mixed Feelings by Apneu',
          rule: {
            "monday": [ 8, 10, 14, 22 ],
            "tuesday": [ 12, 14, 18, 26 ],
            "wednesday": [ 11, 13, 17, 25 ],
            "thursday": [ 10, 12, 16, 24 ],
            "saturday": [ 9, 10, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1668690885/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thesweetreleaseofdeath.bandcamp.com/album/the-sweet-release-of-death-2',
          a_string: 'The Sweet Release of Death by The Sweet Release Of Death',
          rule: {
            "monday": [ 9, 10, 15, 23 ],
            "tuesday": [ 8, 10, 14, 22 ],
            "wednesday": [ 12, 14, 18, 26 ],
            "thursday": [ 11, 13, 17, 25 ],
            "saturday": [ 10, 12, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1997614797/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://boredoms.bandcamp.com/album/sab-se-purani-bab',
          a_string: 'SAB SE PURANI BAB by SAICOBAB',
          rule: {
            "monday": [ 10, 12, 16, 24 ],
            "tuesday": [ 9, 10, 15, 23 ],
            "wednesday": [ 8, 10, 14, 22 ],
            "thursday": [ 12, 14, 18, 26 ],
            "saturday": [ 11, 13, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2822080657/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://boredoms.bandcamp.com/album/super-roots-9',
          a_string: 'Super Roots 9 by Boredoms',
          rule: {
            "monday": [ 12, 14, 18, 26 ],
            "tuesday": [ 11, 13, 17, 25 ],
            "wednesday": [ 10, 11, 16, 24 ],
            "thursday": [ 9, 11, 15, 23 ],
            "saturday": [ 13, 15, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1207169486/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deerhoof.bandcamp.com/album/cover-band',
          a_string: 'Cover Band by Cover Band',
          rule: {
            "monday": [ 13, 15, 19, 27 ],
            "tuesday": [ 12, 14, 18, 26 ],
            "wednesday": [ 11, 13, 17, 25 ],
            "thursday": [ 10, 11, 16, 24 ],
            "saturday": [ 9, 11, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1915377227/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://esmerine.bandcamp.com/album/mechanics-of-dominion',
          a_string: 'Mechanics Of Dominion by Esmerine',
          rule: {
            "monday": [ 9, 11, 15, 23 ],
            "tuesday": [ 13, 15, 19, 27 ],
            "wednesday": [ 12, 14, 18, 26 ],
            "thursday": [ 11, 13, 17, 25 ],
            "saturday": [ 10, 11, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3091200220/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://chelseawolfe.bandcamp.com/album/abyss',
          a_string: 'Abyss by CHELSEA WOLFE',
          rule: {
            "monday": [ 10, 11, 16, 24 ],
            "tuesday": [ 9, 11, 15, 23 ],
            "wednesday": [ 13, 15, 19, 27 ],
            "thursday": [ 12, 14, 18, 26 ],
            "saturday": [ 11, 13, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4022394178/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deafheavens.bandcamp.com/album/sunbather',
          a_string: 'Sunbather by deafheaven',
          rule: {
            "monday": [ 11, 13, 17, 25 ],
            "tuesday": [ 10, 11, 16, 24 ],
            "wednesday": [ 9, 11, 15, 23 ],
            "thursday": [ 13, 15, 19, 27 ],
            "saturday": [ 12, 14, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1714333262/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deerhoof.bandcamp.com/album/the-man-the-king-the-girl',
          a_string: 'The Man, The King, The Girl by Deerhoof',
          rule: {
            "monday": [ 12, 14, 18, 26 ],
            "tuesday": [ 11, 13, 17, 25 ],
            "wednesday": [ 10, 11, 16, 24 ],
            "thursday": [ 9, 11, 15, 23 ],
            "saturday": [ 13, 15, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1516871805/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://romanticstates.bandcamp.com/album/corduroy-in-italy',
          a_string: 'Corduroy In Italy by Romantic States',
          rule: {
            "monday": [ 13, 15, 19, 27 ],
            "tuesday": [ 12, 14, 18, 26 ],
            "wednesday": [ 11, 13, 17, 25 ],
            "thursday": [ 10, 11, 16, 24 ],
            "saturday": [ 9, 11, 15, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=996945265/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://umen.bandcamp.com/album/u-men',
          a_string: 'U-Men by U-Men',
          rule: {
            "monday": [ 10, 12, 16, 24 ],
            "tuesday": [ 14, 16, 20, 28 ],
            "wednesday": [ 13, 15, 19, 27 ],
            "thursday": [ 12, 14, 18, 26 ],
            "saturday": [ 11, 12, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3696947829/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shabazzpalaces.bandcamp.com/album/quazarz-born-on-a-gangster-star',
          a_string: 'Quazarz: Born on a Gangster Star by Shabazz Palaces',
          rule: {
            "monday": [ 11, 12, 17, 25 ],
            "tuesday": [ 10, 12, 16, 24 ],
            "wednesday": [ 14, 16, 20, 28 ],
            "thursday": [ 13, 15, 19, 27 ],
            "saturday": [ 12, 14, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1009899070/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hausumountain.bandcamp.com/album/drip-mental',
          a_string: 'Drip Mental by Fire-Toolz',
          rule: {
            "monday": [ 12, 14, 18, 26 ],
            "tuesday": [ 11, 12, 17, 25 ],
            "wednesday": [ 10, 12, 16, 24 ],
            "thursday": [ 14, 16, 20, 28 ],
            "saturday": [ 13, 15, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3513002519/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://michellezauner.bandcamp.com/album/psychopomp-2',
          a_string: 'Psychopomp by Japanese Breakfast',
          rule: {
            "monday": [ 13, 15, 19, 27 ],
            "tuesday": [ 12, 14, 18, 26 ],
            "wednesday": [ 11, 12, 17, 25 ],
            "thursday": [ 10, 12, 16, 24 ],
            "saturday": [ 14, 16, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2179974400/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://agentbla.bandcamp.com/album/agent-bl',
          a_string: 'Agent blå by Agent Blå',
          rule: {
            "monday": [ 14, 16, 20, 28 ],
            "tuesday": [ 13, 15, 19, 27 ],
            "wednesday": [ 12, 14, 18, 26 ],
            "thursday": [ 11, 12, 17, 25 ],
            "saturday": [ 10, 12, 16, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=664087412/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://fatherdaughterrecords.bandcamp.com/album/uncontrollable-salvation',
          a_string: 'Uncontrollable Salvation by Pardoner',
          rule: {
            "monday": [ 10, 12, 16, 24 ],
            "tuesday": [ 14, 16, 20, 28 ],
            "wednesday": [ 13, 15, 19, 27 ],
            "thursday": [ 12, 14, 18, 26 ],
            "saturday": [ 11, 12, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1747651969/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://laetitiasadier.bandcamp.com/album/find-me-finding-you',
          a_string: 'Find Me Finding You by Laetitia Sadier',
          rule: {
            "monday": [ 11, 12, 17, 25 ],
            "tuesday": [ 10, 12, 16, 24 ],
            "wednesday": [ 14, 16, 20, 28 ],
            "thursday": [ 13, 15, 19, 27 ],
            "saturday": [ 12, 14, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4250172799/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://emaband.bandcamp.com/album/exile-in-the-outer-ring',
          a_string: 'Exile In The Outer Ring by EMA',
          rule: {
            "monday": [ 13, 15, 19, 27 ],
            "tuesday": [ 12, 13, 18, 26 ],
            "wednesday": [ 11, 13, 17, 25 ],
            "thursday": [ 15, 17, 21, 29 ],
            "saturday": [ 14, 16, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1204311381/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://alvvays.bandcamp.com/album/antisocialites',
          a_string: 'Antisocialites by Alvvays',
          rule: {
            "monday": [ 14, 16, 20, 28 ],
            "tuesday": [ 13, 15, 19, 27 ],
            "wednesday": [ 12, 13, 18, 26 ],
            "thursday": [ 11, 13, 17, 25 ],
            "saturday": [ 15, 17, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2359781516/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://astronautico.bandcamp.com/album/lrain',
          a_string: 'L&#39;Rain by L&#39;Rain',
          rule: {
            "monday": [ 15, 17, 21, 29 ],
            "tuesday": [ 14, 16, 20, 28 ],
            "wednesday": [ 13, 15, 19, 27 ],
            "thursday": [ 12, 13, 18, 26 ],
            "saturday": [ 11, 13, 17, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3262808055/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ibibiosoundmachine.bandcamp.com/album/uyai',
          a_string: 'Uyai by Ibibio Sound Machine',
          rule: {
            "monday": [ 11, 13, 17, 25 ],
            "tuesday": [ 15, 17, 21, 29 ],
            "wednesday": [ 14, 16, 20, 28 ],
            "thursday": [ 13, 15, 19, 27 ],
            "saturday": [ 12, 13, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2718698487/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ryanpower.bandcamp.com/album/they-sell-doomsday',
          a_string: '&#39;They Sell Doomsday&#39; by Ryan Power',
          rule: {
            "monday": [ 12, 13, 18, 26 ],
            "tuesday": [ 11, 13, 17, 25 ],
            "wednesday": [ 15, 17, 21, 29 ],
            "thursday": [ 14, 16, 20, 28 ],
            "saturday": [ 13, 15, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1125014485/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theimpalers.bandcamp.com/album/cellar-dweller-lp',
          a_string: 'Cellar Dweller LP by Impalers',
          rule: {
            "monday": [ 13, 15, 19, 27 ],
            "tuesday": [ 12, 13, 18, 26 ],
            "wednesday": [ 11, 13, 17, 25 ],
            "thursday": [ 15, 17, 21, 29 ],
            "saturday": [ 14, 16, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=881160943/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://yellowmaskcxllective.bandcamp.com/album/when-daffi-attacks',
          a_string: 'When Daffi Attacks by Jeremiah Jae',
          rule: {
            "monday": [ 14, 16, 20, 28 ],
            "tuesday": [ 13, 15, 19, 27 ],
            "wednesday": [ 12, 13, 18, 26 ],
            "thursday": [ 11, 13, 17, 25 ],
            "saturday": [ 15, 17, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2893042838/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://charlybliss.bandcamp.com/album/guppy',
          a_string: 'Guppy by Charly Bliss',
          rule: {
            "monday": [ 16, 18, 22, 30 ],
            "tuesday": [ 15, 17, 21, 29 ],
            "wednesday": [ 14, 16, 20, 28 ],
            "thursday": [ 13, 14, 19, 27 ],
            "saturday": [ 12, 14, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1235529255/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tica-douglas-tl.bandcamp.com/album/our-lady-star-of-the-sea-help-and-protect-us',
          a_string: 'Our Lady Star of the Sea, Help and Protect Us by Tica Douglas',
          rule: {
            "monday": [ 12, 14, 18, 26 ],
            "tuesday": [ 16, 18, 22, 30 ],
            "wednesday": [ 15, 17, 21, 29 ],
            "thursday": [ 14, 16, 20, 28 ],
            "saturday": [ 13, 14, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2729824247/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://samuelhallkvist.bandcamp.com/album/variety-of-rhythm',
          a_string: 'Variety of Rhythm by Samuel Hällkvist',
          rule: {
            "monday": [ 13, 14, 19, 27 ],
            "tuesday": [ 12, 14, 18, 26 ],
            "wednesday": [ 16, 18, 22, 30 ],
            "thursday": [ 15, 17, 21, 29 ],
            "saturday": [ 14, 16, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4250828814/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://weaves.bandcamp.com/album/wide-open-lp',
          a_string: 'Wide Open (LP) by Weaves',
          rule: {
            "monday": [ 14, 16, 20, 28 ],
            "tuesday": [ 13, 14, 19, 27 ],
            "wednesday": [ 12, 14, 18, 26 ],
            "thursday": [ 16, 18, 22, 30 ],
            "saturday": [ 15, 17, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3211309162/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://klanggalerie.bandcamp.com/album/13th-anniversary-show-live-in-the-usa',
          a_string: '13th Anniversary Show - Live In The USA by THE RESIDENTS',
          rule: {
            "monday": [ 15, 17, 21, 29 ],
            "tuesday": [ 14, 16, 20, 28 ],
            "wednesday": [ 13, 14, 19, 27 ],
            "thursday": [ 12, 14, 18, 26 ],
            "saturday": [ 16, 18, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3925700802/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dva2.bandcamp.com/album/caligari',
          a_string: 'Caligari by Dva',
          rule: {
            "monday": [ 16, 18, 22, 30 ],
            "tuesday": [ 15, 17, 21, 29 ],
            "wednesday": [ 14, 16, 20, 28 ],
            "thursday": [ 13, 14, 19, 27 ],
            "saturday": [ 12, 14, 18, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=2398889685/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://store.floex.cz/album/zorya',
          a_string: 'Zorya by Floex',
          rule: {
            "monday": [ 12, 14, 18, 26 ],
            "tuesday": [ 16, 18, 22, 30 ],
            "wednesday": [ 15, 17, 21, 29 ],
            "thursday": [ 14, 16, 20, 28 ],
            "saturday": [ 13, 14, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1088181693/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://orbitstern.bandcamp.com/album/ude-i-skoven-inde-i-byen',
          a_string: 'Ude i Skoven, Inde i Byen by Orbit Stern',
          rule: {
            "monday": [ 14, 15, 20, 28 ],
            "tuesday": [ 13, 15, 19, 27 ],
            "wednesday": [ 17, 19, 23, 31 ],
            "thursday": [ 16, 18, 22, 30 ],
            "saturday": [ 15, 17, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1821351093/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://filthyhuns.bandcamp.com/album/forever-beast',
          a_string: 'Forever Beast by Filthy Huns',
          rule: {
            "monday": [ 15, 17, 21, 29 ],
            "tuesday": [ 14, 15, 20, 28 ],
            "wednesday": [ 13, 15, 19, 27 ],
            "thursday": [ 17, 19, 23, 31 ],
            "saturday": [ 16, 18, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=331787994/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://orangemilkrecords.bandcamp.com/album/pharma',
          a_string: 'Pharma by Nmesh',
          rule: {
            "monday": [ 16, 18, 22, 30 ],
            "tuesday": [ 15, 17, 21, 29 ],
            "wednesday": [ 14, 15, 20, 28 ],
            "thursday": [ 13, 15, 19, 27 ],
            "saturday": [ 17, 19, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=711491144/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shop.bornbadrecords.net/album/dakhla-sahara-session',
          a_string: 'DAKHLA - SAHARA - SESSION by GROUP DOUEH &amp; CHEVEU',
          rule: {
            "monday": [ 17, 19, 23, 31 ],
            "tuesday": [ 16, 18, 22, 30 ],
            "wednesday": [ 15, 17, 21, 29 ],
            "thursday": [ 14, 15, 20, 28 ],
            "saturday": [ 13, 15, 19, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3738901307/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wharfcatrecords.bandcamp.com/album/bye-bye-berta',
          a_string: 'Bye Bye Berta by Palberta',
          rule: {
            "monday": [ 13, 15, 19, 27 ],
            "tuesday": [ 17, 19, 23, 31 ],
            "wednesday": [ 16, 18, 22, 30 ],
            "thursday": [ 15, 17, 21, 29 ],
            "saturday": [ 14, 15, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4189769649/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wharfcatrecords.bandcamp.com/album/the-floating-world',
          a_string: 'The Floating World by Wet Hair',
          rule: {
            "monday": [ 14, 15, 20, 28 ],
            "tuesday": [ 13, 15, 19, 27 ],
            "wednesday": [ 17, 19, 23, 31 ],
            "thursday": [ 16, 18, 22, 30 ],
            "saturday": [ 15, 17, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4172472486/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wharfcatrecords.bandcamp.com/album/honey-new-moody-judy',
          a_string: 'Honey - New Moody Judy by Honey',
          rule: {
            "monday": [ 15, 17, 21, 29 ],
            "tuesday": [ 14, 15, 20, 28 ],
            "wednesday": [ 13, 15, 19, 27 ],
            "thursday": [ 17, 19, 23, 31 ],
            "saturday": [ 16, 18, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3770315567/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deerhoof.bandcamp.com/album/deerhoof-vs-evil',
          a_string: 'Deerhoof vs. Evil by Deerhoof',
          rule: {
            "monday": [ 17, 19, 23, 31 ],
            "tuesday": [ 16, 18, 22, 30 ],
            "wednesday": [ 15, 16, 21, 29 ],
            "thursday": [ 14, 16, 20, 28 ],
            "saturday": [ 18, 20, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3268928749/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://laluz.bandcamp.com/album/weirdo-shrine',
          a_string: 'Weirdo Shrine by La Luz',
          rule: {
            "monday": [ 18, 20, 24, 1 ],
            "tuesday": [ 17, 19, 23, 31 ],
            "wednesday": [ 16, 18, 22, 30 ],
            "thursday": [ 15, 16, 21, 29 ],
            "saturday": [ 14, 16, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=100373839/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://outsideworld.bandcamp.com/album/war-war',
          a_string: 'War &amp; War by Outside World',
          rule: {
            "monday": [ 14, 16, 20, 28 ],
            "tuesday": [ 18, 20, 24, 1 ],
            "wednesday": [ 17, 19, 23, 31 ],
            "thursday": [ 16, 18, 22, 30 ],
            "saturday": [ 15, 16, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2695348918/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://comacinema.bandcamp.com/album/loss-memory-2',
          a_string: 'Loss Memory by Coma Cinema',
          rule: {
            "monday": [ 15, 16, 21, 29 ],
            "tuesday": [ 14, 16, 20, 28 ],
            "wednesday": [ 18, 20, 24, 1 ],
            "thursday": [ 17, 19, 23, 31 ],
            "saturday": [ 16, 18, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2088398940/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://erototox.bandcamp.com/album/barricades',
          a_string: 'Barricades by Franck Vigroux',
          rule: {
            "monday": [ 16, 18, 22, 30 ],
            "tuesday": [ 15, 16, 21, 29 ],
            "wednesday": [ 14, 16, 20, 28 ],
            "thursday": [ 18, 20, 24, 1 ],
            "saturday": [ 17, 19, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=591683757/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hahafits.bandcamp.com/album/all-belief-is-paradise',
          a_string: 'All Belief is Paradise by Fits',
          rule: {
            "monday": [ 17, 19, 23, 31 ],
            "tuesday": [ 16, 18, 22, 30 ],
            "wednesday": [ 15, 16, 21, 29 ],
            "thursday": [ 14, 16, 20, 28 ],
            "saturday": [ 18, 20, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=3333685211/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bandcamp.for-tune.pl/album/mazurki',
          a_string: 'Mazurki by Marcin Masecki',
          rule: {
            "monday": [ 18, 20, 24, 1 ],
            "tuesday": [ 17, 19, 23, 31 ],
            "wednesday": [ 16, 18, 22, 30 ],
            "thursday": [ 15, 16, 21, 29 ],
            "saturday": [ 14, 16, 20, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1835923031/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://busdriver-thumbs.bandcamp.com/album/thumbs-2',
          a_string: 'Thumbs by Busdriver',
          rule: {
            "monday": [ 15, 17, 21, 29 ],
            "tuesday": [ 19, 21, 25, 2 ],
            "wednesday": [ 18, 20, 24, 1 ],
            "thursday": [ 17, 19, 23, 31 ],
            "saturday": [ 16, 17, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1117381002/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://blankspell.bandcamp.com/album/4-track-demo',
          a_string: '4-track demo by BLANK SPELL',
          rule: {
            "monday": [ 16, 17, 22, 30 ],
            "tuesday": [ 15, 17, 21, 29 ],
            "wednesday": [ 19, 21, 25, 2 ],
            "thursday": [ 18, 20, 24, 1 ],
            "saturday": [ 17, 19, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1101430676/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://larkingrimm.bandcamp.com/album/chasing-an-illusion-2',
          a_string: 'Chasing an Illusion by Larkin Grimm',
          rule: {
            "monday": [ 17, 19, 23, 31 ],
            "tuesday": [ 16, 17, 22, 30 ],
            "wednesday": [ 15, 17, 21, 29 ],
            "thursday": [ 19, 21, 25, 2 ],
            "saturday": [ 18, 20, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1876571167/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cuddlemagic.bandcamp.com/album/ashes-axis',
          a_string: 'Ashes/Axis by Cuddle Magic',
          rule: {
            "monday": [ 18, 20, 24, 1 ],
            "tuesday": [ 17, 19, 23, 31 ],
            "wednesday": [ 16, 17, 22, 30 ],
            "thursday": [ 15, 17, 21, 29 ],
            "saturday": [ 19, 21, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1698642337/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pcworship.bandcamp.com/album/buried-wish',
          a_string: 'Buried Wish by PC Worship',
          rule: {
            "monday": [ 19, 21, 25, 2 ],
            "tuesday": [ 18, 20, 24, 1 ],
            "wednesday": [ 17, 19, 23, 31 ],
            "thursday": [ 16, 17, 22, 30 ],
            "saturday": [ 15, 17, 21, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3835148881/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://godunknownrecords.bandcamp.com/album/henge-s-t-12-vinyl',
          a_string: 'Henge - S/T  12&quot; Vinyl by Henge',
          rule: {
            "monday": [ 15, 17, 21, 29 ],
            "tuesday": [ 19, 21, 25, 2 ],
            "wednesday": [ 18, 20, 24, 1 ],
            "thursday": [ 17, 19, 23, 31 ],
            "saturday": [ 16, 17, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1384227129/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://boxrecordsshop.bandcamp.com/album/dandelion-sauce-of-the-ancients',
          a_string: 'Dandelion Sauce Of  The Ancients by Terminal Cheesecake',
          rule: {
            "monday": [ 16, 17, 22, 30 ],
            "tuesday": [ 15, 17, 21, 29 ],
            "wednesday": [ 19, 21, 25, 2 ],
            "thursday": [ 18, 20, 24, 1 ],
            "saturday": [ 17, 19, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2667199015/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gnod.bandcamp.com/album/mirror',
          a_string: 'Mirror by GNOD',
          rule: {
            "monday": [ 18, 20, 24, 1 ],
            "tuesday": [ 17, 18, 23, 31 ],
            "wednesday": [ 16, 18, 22, 30 ],
            "thursday": [ 20, 22, 26, 3 ],
            "saturday": [ 19, 21, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3195185275/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://joan-as-policewoman.bandcamp.com/album/damned-devotion',
          a_string: 'Damned Devotion by Joan As Policewoman',
          rule: {
            "monday": [ 19, 21, 25, 2 ],
            "tuesday": [ 18, 20, 24, 1 ],
            "wednesday": [ 17, 18, 23, 31 ],
            "thursday": [ 16, 18, 22, 30 ],
            "saturday": [ 20, 22, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1503174799/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ought.bandcamp.com/album/room-inside-the-world',
          a_string: 'Room Inside the World by Ought',
          rule: {
            "monday": [ 20, 22, 26, 3 ],
            "tuesday": [ 19, 21, 25, 2 ],
            "wednesday": [ 18, 20, 24, 1 ],
            "thursday": [ 17, 18, 23, 31 ],
            "saturday": [ 16, 18, 22, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=917780450/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hominidsounds.bandcamp.com/album/shame-spiral',
          a_string: 'Shame Spiral by USA Nails',
          rule: {
            "monday": [ 16, 18, 22, 30 ],
            "tuesday": [ 20, 22, 26, 3 ],
            "wednesday": [ 19, 21, 25, 2 ],
            "thursday": [ 18, 20, 24, 1 ],
            "saturday": [ 17, 18, 23, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 130,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2880677590/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://carseatheadrest.bandcamp.com/album/twin-fantasy-2',
          a_string: 'Twin Fantasy by Car Seat Headrest',
          rule: {
            "monday": [ 17, 18, 23, 31 ],
            "tuesday": [ 16, 18, 22, 30 ],
            "wednesday": [ 20, 22, 26, 3 ],
            "thursday": [ 19, 21, 25, 2 ],
            "saturday": [ 18, 20, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 131,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1539341107/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://burntones.bandcamp.com/album/last-draft-in-different-rooms',
          a_string: 'Last Draft in Different Rooms by Burnt Ones',
          rule: {
            "monday": [ 18, 20, 24, 1 ],
            "tuesday": [ 17, 18, 23, 31 ],
            "wednesday": [ 16, 18, 22, 30 ],
            "thursday": [ 20, 22, 26, 3 ],
            "saturday": [ 19, 21, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 132,
          user_id: 1,
          theme: 'Commercially Viable Genres',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1278820781/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ransomnoterecords.bandcamp.com/album/pinned',
          a_string: 'PINNED by C.A.R.',
          rule: {
            "monday": [ 19, 21, 25, 2 ],
            "tuesday": [ 18, 20, 24, 1 ],
            "wednesday": [ 17, 18, 23, 31 ],
            "thursday": [ 16, 18, 22, 30 ],
            "saturday": [ 20, 22, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('july_musics_id_seq', (SELECT MAX(id) FROM july_musics));");
    });
};
