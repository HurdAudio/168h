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
          theme: 'commercially viable genre',
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
          theme: 'commercially viable genre',
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
          theme: 'commercially viable genre',
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
          theme: 'commercially viable genre',
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
          theme: 'commercially viable genre',
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
          theme: 'commercially viable genre',
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
          theme: 'commercially viable genre',
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
          theme: 'commercially viable genre',
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
          theme: 'commercially viable genre',
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
          theme: 'commercially viable genre',
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
          theme: 'commercially viable genre',
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
          theme: 'commercially viable genre',
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
          theme: 'commercially viable genre',
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
          theme: 'commercially viable genre',
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
          theme: 'commercially viable genre',
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
          theme: 'commercially viable genre',
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
          theme: 'commercially viable genre',
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
          theme: 'commercially viable genre',
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
          theme: 'commercially viable genre',
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
          theme: 'commercially viable genre',
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
          theme: 'commercially viable genre',
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
          theme: 'commercially viable genre',
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
          theme: 'commercially viable genre',
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
          theme: 'commercially viable genre',
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
          theme: 'commercially viable genre',
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
          theme: 'commercially viable genre',
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
          theme: 'commercially viable genre',
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
          theme: 'commercially viable genre',
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
          theme: 'commercially viable genre',
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
          theme: 'commercially viable genre',
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
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('july_musics_id_seq', (SELECT MAX(id) FROM july_musics));");
    });
};
