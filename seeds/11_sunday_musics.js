'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sunday_musics').del()
    .then(function () {
      // Inserts seed entries
      return knex('sunday_musics').insert([
        {
          id: 1,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2433643483/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunrastrut.bandcamp.com/album/singles',
          a_string: 'Singles by Sun Ra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2295729343/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/discipline-27-ii-remastered',
          a_string: 'Discipline 27-II (Remastered) by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=924944746/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunrastrut.bandcamp.com/album/in-some-far-place-roma-1977',
          a_string: 'In Some Far Place: Roma 1977 by Sun Ra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3437772679/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/-',
          a_string: 'НЕЖИТЬ: живьём в России by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2176417243/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/kannon-japanese-bonus-tracks',
          a_string: 'Kannon (Japanese bonus tracks) by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1334381257/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/kannon',
          a_string: 'Kannon by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1275911817/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunaraw.bandcamp.com/album/antwerp',
          a_string: 'ANTWERP by S. ARAW TRIO XIII',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=196676969/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunaraw.bandcamp.com/album/live-in-oslo',
          a_string: 'LIVE IN OSLO by SUN ARAW BAND XII',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=967234204/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunaraw.bandcamp.com/album/live-in-oto',
          a_string: 'LIVE IN OTO by SUN ARAW BAND XII',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=665089067/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/the-magic-city-stereo-remastered-cd-lp-digital',
          a_string: 'The Magic City [Stereo, Remastered—CD, LP, digital] by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=251281127/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/my-brother-the-wind-vol-1-expanded-remastered-cd-lp-digital',
          a_string: 'My Brother the Wind Vol. 1 [Expanded, Remastered—CD, LP, digital] by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3006057000/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/nuclear-war-ep',
          a_string: 'Nuclear War (EP) by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4170689308/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/terrestrials',
          a_string: 'Terrestrials by SUNN O))) &amp; ULVER',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3545221048/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/la-reh-012',
          a_string: 'LA REH 012 by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3481636908/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/rehearsal-demo-nov-11-2011',
          a_string: 'REHEARSAL DEMO NOV 11 2011 by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=77309917/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunaraw.bandcamp.com/album/live-roma',
          a_string: 'Live ROMA by SUN ARAW BAND X',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2943071476/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunaraw.bandcamp.com/album/two-from-the-desert-yucca-valley-2012',
          a_string: 'TWO FROM THE DESERT: YUCCA VALLEY 2012 by SUN ARAW BAND IX',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1816768686/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunaraw.bandcamp.com/album/formatting-formants-adelaide-2012',
          a_string: 'FORMATTING FORMANTS: ADELAIDE 2012 by SUN ARAW BAND V',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1771393784/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/thunder-of-the-gods',
          a_string: 'Thunder of the Gods by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2785484414/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/angels-and-demons-at-play',
          a_string: 'Angels and Demons at Play by Sun Ra &amp; His Myth Science Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2650606444/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/jazz-in-silhouette',
          a_string: 'Jazz in Silhouette by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2960431742/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/the-iron-soul-of-nothing',
          a_string: 'The Iron Soul Of Nothing by SUNN O))) meets NURSE WITH WOUND',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3791288013/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/agharti-live-09-10',
          a_string: 'Agharti Live 09-10 by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=877475247/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/che',
          a_string: 'Che by SUNN O))) &amp; PAN SONIC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3155153960/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunaraw.bandcamp.com/album/formatting-formants-brisbane-2012',
          a_string: 'FORMATTING FORMANTS: BRISBANE 2012 by SUN ARAW BAND V',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4126284411/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunaraw.bandcamp.com/album/belomancie',
          a_string: 'Belomancie by SUN ARAW',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3622239538/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunaraw.bandcamp.com/album/the-inner-treaty',
          a_string: 'The Inner Treaty by SUN ARAW',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3993577660/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/lanquidity',
          a_string: 'Lanquidity by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2314548278/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/cosmos-remastered',
          a_string: 'Cosmos (Remastered) by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=832284821/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/transitions-3-chicago-to-ny',
          a_string: 'Transitions 3: Chicago to NY by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=673845886/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/monoliths-dimensions',
          a_string: 'Monoliths &amp; Dimensions by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=725640763/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/grimmrobes-live-101008',
          a_string: '(初心) GrimmRobes Live 101008 by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2490312327/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/d-mkirke',
          a_string: 'Dømkirke by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2350225072/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunaraw.bandcamp.com/album/ancient-romans',
          a_string: 'Ancient Romans by SUN ARAW',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1350047369/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunarawmonofonus.bandcamp.com/album/houston-abstros',
          a_string: 'Houston Abstros by Sun Araw',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=458873983/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shop.mentalgroove.ch/album/geneva-hits',
          a_string: 'Geneva Hits by Sun Araw',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3591774769/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/paris-1983',
          a_string: 'Paris 1983 by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1416636650/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/supersonic-jazz',
          a_string: 'Supersonic Jazz by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2475374163/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/transitions-1-spaceship-bop-1955-57',
          a_string: 'Transitions 1: Spaceship Bop (1955-57) by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1222464894/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/oracle',
          a_string: 'Oracle by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3746528457/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/altar-3',
          a_string: 'Altar by SUNN O))) &amp; BORIS',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2436911937/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/la-mort-noir-dans-esch-alzette',
          a_string: 'La Mort Noir Dans Esch / Alzette by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=404307415/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://leavingrecords.bandcamp.com/album/livephreaxxx',
          a_string: 'LIVEPHREAXXX!!!! by Sun Araw &amp; Matthewdavid',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1000095990/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rvng.bandcamp.com/album/frkwys-vol-9-icon-give-thank',
          a_string: 'FRKWYS Vol. 9: ICON GIVE THANK by Sun Araw, M. Geddes Gengras &amp; The Congos',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2782890406/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hanginggardens.bandcamp.com/album/sun-araw-adam-willetts-hsp-13th-oct-10',
          a_string: 'Sun Araw / Adam Willetts (HSP 13th Oct &#39;10) by Hanging Gardens Live Recording',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1238054464/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/sun-ra-at-inter-media-arts-1991',
          a_string: 'Sun Ra at Inter-Media Arts, 1991 by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3383058051/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/we-travel-the-spaceways',
          a_string: 'We Travel the Spaceways by Sun Ra &amp; His Myth Science Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=998280022/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/the-antique-blacks',
          a_string: 'The Antique Blacks by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3338347705/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/angel-coma',
          a_string: 'Angel Coma by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3809344285/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/solstitium-fulminate',
          a_string: 'Solstitium Fulminate by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2641531432/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/black-one',
          a_string: 'Black One by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2096114417/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/cosmic-tones-for-mental-therapy',
          a_string: 'Cosmic Tones for Mental Therapy by Sun Ra &amp; His Myth Science Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4129311744/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/strange-strings',
          a_string: 'Strange Strings by Sun Ra &amp; His Astro Infinity Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2137446957/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/the-nubians-of-plutonia',
          a_string: 'The Nubians of Plutonia by Sun Ra &amp; His Myth Science Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2457032671/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/candlewolff-ov-thee-golden-chalice',
          a_string: 'Candlewolff ov Thee Golden Chalice by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=964036161/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/livewhite',
          a_string: 'LiveWhite by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2221113608/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/cromonolithic-remixes-for-an-iron-age',
          a_string: 'CroMonolithic remixes for an Iron Age by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3701421356/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/sun-ra-visits-planet-earth',
          a_string: 'Sun Ra Visits Planet Earth by Sun Ra &amp; His Solar Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1742618903/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/the-soul-vibrations-of-man',
          a_string: 'The Soul Vibrations of Man by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2135743045/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/the-sun-myth-african-chant',
          a_string: 'The Sun Myth (African Chant) by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3643903167/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/white2-2',
          a_string: 'White2 by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4040815164/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/lxndxn-subcamden-underworld-halloween-2003',
          a_string: 'LXNDXN Subcamden Underworld Hallo&#39;Ween 2003 by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3059679270/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/veils-it-white',
          a_string: 'Veils It White by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4106117897/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/atlantis',
          a_string: 'Atlantis by Sun Ra &amp; His Astro Infinity Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1715626612/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/the-other-side-of-the-sun',
          a_string: 'The Other Side of the Sun by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3107037590/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/when-angels-speak-of-love-1',
          a_string: 'When Angels Speak of Love by Sun Ra &amp; His Myth Science Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=416404446/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/white1',
          a_string: 'White1 by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1942556646/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/3-flight-of-the-behemoth',
          a_string: '3: Flight Of The Behemoth by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1909764967/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/void',
          a_string: 'ØØVOID by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1646063315/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/fate-in-a-pleasant-mood',
          a_string: 'Fate in a Pleasant Mood by Sun Ra &amp; His Myth Science Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1676995911/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/space-is-the-place',
          a_string: 'Space is the Place by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1988996577/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/god-is-more-than-love-can-ever-be',
          a_string: 'God Is More Than Love Can Ever Be by Sun Ra Trio',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2590283681/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/the-grimmrobe-demos-extended',
          a_string: 'The Grimmrobe Demos // extended by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1007055328/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/the-grimmrobe-demos',
          a_string: 'The Grimmrobe Demos by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3684598771/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/v-a-jukebox-buddha',
          a_string: 'v/a Jukebox Buddha by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1377191613/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/secrets-of-the-sun',
          a_string: 'Secrets of the Sun by Sun Ra &amp; His Solar Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3114909576/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/aurora-borealis',
          a_string: 'Aurora Borealis by Sun Ra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1696546492/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/interstellar-low-ways',
          a_string: 'Interstellar Low Ways by Sun Ra &amp; His Myth Science Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=792995710/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunn.bandcamp.com/album/v-a-does-your-cat-know-my-dog',
          a_string: 'v/a Does Your Cat Know My Dog? by SUNN O)))',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2926634934/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/astro-black',
          a_string: 'Astro Black by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1871811375/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/oblique-parallax',
          a_string: 'Oblique Parallax by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1615419447/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/dance-of-innocent-passion',
          a_string: 'Dance of Innocent Passion by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3375427058/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/ra-to-the-rescue',
          a_string: 'Ra to the Rescue by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2180361353/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/some-blues-but-not-the-kind-thats-blue',
          a_string: 'Some Blues But Not the Kind That&#39;s Blue by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2193298540/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/the-pit-inn-8-8-88',
          a_string: 'The Pit Inn 8-8-88 by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3186659650/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/omniverse',
          a_string: 'Omniverse by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=853939478/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/celestial-love',
          a_string: 'Celestial Love by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1520310624/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/the-night-of-the-purple-moon',
          a_string: 'The Night of the Purple Moon by Sun Ra &amp; His Intergalactic Infinity Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1645364615/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/universe-in-blue',
          a_string: 'Universe in Blue by Sun Ra &amp; His Blue Universe Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2571634935/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/a-fireside-chat-with-lucifer',
          a_string: 'A Fireside Chat with Lucifer by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1998133748/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/sunrise-in-different-dimensions',
          a_string: 'Sunrise in Different Dimensions by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1334536868/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/art-forms-of-dimensions-tomorrow',
          a_string: 'Art Forms of Dimensions Tomorrow by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3124006692/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/continuation-vol-1',
          a_string: 'Continuation, Vol. 1 by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=170117722/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/continuation-vol-2',
          a_string: 'Continuation, Vol. 2 by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3025274311/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/jazz-by-sun-ra',
          a_string: 'Jazz by Sun Ra by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4083741467/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/solo-piano-venice-1977',
          a_string: 'Solo Piano Venice 1977 by Sun Ra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2383747411/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/holiday-for-soul-dance',
          a_string: 'Holiday for Soul Dance by Sun Ra &amp; His Astro Infinity Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=808941928/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/monorails-and-satellites-vol-1',
          a_string: 'Monorails and Satellites, Vol. 1 by Sun Ra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1830657043/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/monorails-and-satellites-vol-2',
          a_string: 'Monorails and Satellites, Vol. 2 by Sun Ra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=339750118/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/beyond-the-purple-star-zone',
          a_string: 'Beyond the Purple Star Zone by Sun Ra &amp; His Omniverse Jet-Set Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=385566395/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/bad-and-beautiful',
          a_string: 'Bad and Beautiful by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2393368939/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/sound-sun-pleasure',
          a_string: 'Sound Sun Pleasure by Sun Ra &amp; His Astro Infinity Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=403882420/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/my-brother-the-wind-vol-2',
          a_string: 'My Brother the Wind, Vol. 2 by Sun Ra &amp; His Astro Infinity Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1465178228/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/when-sun-comes-out',
          a_string: 'When Sun Comes Out by Sun Ra &amp; His Myth Science Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/track=2676839104/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/track/i-roam-the-cosmos-premiere-release-1',
          a_string: 'I Roam the Cosmos (Premiere Release) by Sun Ra &amp; His Arkestra ft. June Tyson',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=990290852/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/other-planes-of-there',
          a_string: 'Other Planes of There by Sun Ra &amp; His Solar Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=199084412/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/sub-underground-1',
          a_string: 'Sub Underground #1 by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1065341575/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/voice-of-the-eternal-tomorrow',
          a_string: 'Voice of the Eternal Tomorrow by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2041491134/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/somewhere-else',
          a_string: 'Somewhere Else by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2867691408/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/purple-night',
          a_string: 'Purple Night by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=960535632/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/blue-delight',
          a_string: 'Blue Delight by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=406113001/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/st-lawrence-university-1966',
          a_string: 'St. Lawrence University, 1966 by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1032060848/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/sound-of-joy',
          a_string: 'Sound of Joy by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3304462233/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/new-steps',
          a_string: 'New Steps by Sun Ra Quartet ft. John Gilmore',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4211963194/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/kosmos-in-blue-a-john-gilmore-anthology-vol-1',
          a_string: 'Kosmos In Blue: A John Gilmore Anthology, Vol. 1 by The Sun Ra Arkestra ft. John Gilmore',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1868051994/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/blues-at-midnight-a-john-gilmore-anthology-vol-2',
          a_string: 'Blues at Midnight: A John Gilmore Anthology, Vol. 2 by The Sun Ra Arkestra ft. John Gilmore',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2226266054/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/sun-ra-exotica',
          a_string: 'Sun Ra Exotica by Sun Ra &amp; His Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3595797542/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunramusic.bandcamp.com/album/the-invisible-shield',
          a_string: 'The Invisible Shield by Sun Ra &amp; His Intergalactic Research Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2948277091/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunrastrut.bandcamp.com/album/disco-3000-complete-milan-concert-1978',
          a_string: 'Disco 3000 Complete Milan Concert 1978 by Sun Ra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=172434852/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunrastrut.bandcamp.com/album/horizon-live-in-cairo-egypt',
          a_string: 'Horizon - Live In Cairo Egypt by Sun Ra And His Intergalactic Myth Science Solar Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4011718519/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunrastrut.bandcamp.com/album/nidhamu-dark-myth-equation-visitation-live-in-cairo-egypt',
          a_string: 'Nidhamu &amp; Dark Myth Equation Visitation - Live in Cairo Egypt by Sun Ra And His Intergalactic Myth Science Solar Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=564815314/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunrastrut.bandcamp.com/album/media-dreams-complete-concert-milan-1978',
          a_string: 'Media Dreams Complete Concert  Milan 1978 by Sun Ra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1043906859/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunrastrut.bandcamp.com/album/on-jupiter',
          a_string: 'On Jupiter by Sun Ra And His Intergalactic Myth Science Solar Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=253336704/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunrastrut.bandcamp.com/album/sleeping-beauty',
          a_string: 'Sleeping Beauty. by Sun Ra And His Intergalactic Myth Science Solar Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3149899187/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunrastrut.bandcamp.com/album/space-aura',
          a_string: 'Space Aura by Sun Ra and His Band from Outer Space',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3477943547/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sunrastrut.bandcamp.com/album/the-paris-tapes-live-at-le-th-tre-du-ch-telet-1971',
          a_string: 'The Paris Tapes - Live At Le Théâtre Du Châtelet 1971 by Sun Ra And His Mythic Science Arkestra',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('sunday_musics_id_seq', (SELECT MAX(id) FROM sunday_musics));");
    });
};
