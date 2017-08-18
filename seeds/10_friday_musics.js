'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('friday_musics').del()
    .then(function () {
      // Inserts seed entries
      return knex('friday_musics').insert([
        {
          id: 1,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=772998962/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://felakuti.bandcamp.com/album/the-69-la-sessions',
          a_string: 'The &#39;69 LA Sessions by Fela Kuti',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1328207216/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://felakuti.bandcamp.com/album/live-with-ginger-baker-1971',
          a_string: 'Live with Ginger Baker (1971) by Fela Kuti',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=158950489/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://felakuti.bandcamp.com/album/london-scene-1971',
          a_string: 'London Scene (1971) by Fela Kuti',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2569410100/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://felakuti.bandcamp.com/album/open-close-1971',
          a_string: 'Open &amp; Close (1971) by Fela Kuti',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2780182337/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'href="http://felakuti.bandcamp.com/album/why-black-man-dey-suffer-1971',
          a_string: 'Why Black Man Dey Suffer (1971) by Fela Kuti',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3674441315/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://felakuti.bandcamp.com/album/shakara-1972',
          a_string: 'Shakara (1972) by Fela Kuti',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3674212828/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://felakuti.bandcamp.com/album/roforofo-fight-1972',
          a_string: 'Roforofo Fight (1972) by Fela Kuti',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3619221695/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://felakuti.bandcamp.com/album/afrodisiac-1972-73',
          a_string: 'Afrodisiac (1972/73) by Fela Kuti',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=264497188/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://felakuti.bandcamp.com/album/gentleman-1973',
          a_string: 'Gentleman (1973) by Fela Kuti',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3562573281/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://felakuti.bandcamp.com/album/confusion-1974',
          a_string: 'Confusion (1974) by Fela Kuti',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3441931376/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://felakuti.bandcamp.com/album/alagbon-close-1974-75',
          a_string: 'Alagbon Close (1974/75) by Fela Kuti',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3311866704/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://felakuti.bandcamp.com/album/he-miss-road-1975',
          a_string: 'He Miss Road (1975) by Fela Kuti',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2819844666/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://felakuti.bandcamp.com/album/expensive-shit-1975',
          a_string: 'Expensive Shit (1975) by Fela Kuti',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2463011513/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://felakuti.bandcamp.com/album/excuse-o-1975',
          a_string: 'Excuse-O (1975) by Fela Kuti',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1701778401/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://felakuti.bandcamp.com/album/monkey-banana-1975',
          a_string: 'Monkey Banana (1975) by Fela Kuti',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3592294609/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://felakuti.bandcamp.com/album/noise-for-vendor-mouth-1975',
          a_string: 'Noise For Vendor Mouth (1975) by Fela Kuti',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4065812114/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://felakuti.bandcamp.com/album/everything-scatter-1975',
          a_string: 'Everything Scatter (1975) by Fela Kuti',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2473343955/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://felakuti.bandcamp.com/album/ikoyi-blindness-1975',
          a_string: 'Ikoyi Blindness (1975) by Fela Kuti',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1366516094/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://felakuti.bandcamp.com/album/kalakuta-show-1976',
          a_string: 'Kalakuta Show (1976) by Fela Kuti',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'src="https://bandcamp.com/EmbeddedPlayer/album=4227166811/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://felakuti.bandcamp.com/album/yellow-fever-1976',
          a_string: 'Yellow Fever (1976) by Fela Kuti',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2971232088/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://felakuti.bandcamp.com/album/na-poi-1976',
          a_string: 'Na Poi (1976) by Fela Kuti',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=543307021/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://felakuti.bandcamp.com/album/unnecessary-begging-1976',
          a_string: 'Unnecessary Begging (1976) by Fela Kuti',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2264456273/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://felakuti.bandcamp.com/album/upside-down-1976',
          a_string: 'Upside Down (1976) by Fela Kuti',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=142442308/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://felakuti.bandcamp.com/album/zombie-1976-77',
          a_string: 'Zombie (1976/77) by Fela Kuti',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('friday_musics_id_seq', (SELECT MAX(id) FROM friday_musics));");
    });
};
