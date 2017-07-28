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
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('friday_musics_id_seq', (SELECT MAX(id) FROM friday_musics));");
    });
};
