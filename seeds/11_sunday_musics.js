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
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=959487973/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'https://bandcamp.com/EmbeddedPlayer/album=959487973/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          a_string: 'Discipline 27-11 by Sun Ra',
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
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('sunday_musics_id_seq', (SELECT MAX(id) FROM sunday_musics));");
    });
};
