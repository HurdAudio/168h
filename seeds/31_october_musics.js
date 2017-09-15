'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('october_musics').del()
    .then(function () {
      // Inserts seed entries
      return knex('october_musics').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=395425664/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/thunder-perfect-mind-deluxe',
          a_string: 'Thunder Perfect Mind Deluxe by Nurse With Wound',
          rule: {
            "monday": [ 8, 18, 28, 31 ],
            "tuesday": [ 7, 17, 27, 30 ],
            "wednesday": [ 6, 16, 26, 29 ],
            "thursday": [ 5, 15, 25, 28 ],
            "saturday": [ 9, 19, 29, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1384487254/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://carbomb.bandcamp.com/album/meta',
          a_string: 'Meta by Car Bomb',
          rule: {
            "monday": [ 9, 19, 29, 1 ],
            "tuesday": [ 8, 18, 28, 31 ],
            "wednesday": [ 7, 17, 27, 30 ],
            "thursday": [ 6, 16, 26, 29 ],
            "saturday": [ 5, 15, 25, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3706973039/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nomeansnomusic.bandcamp.com/album/the-worldhood-of-the-world-as-such',
          a_string: 'The Worldhood Of The World (As Such) by Nomeansno',
          rule: {
            "monday": [ 5, 15, 25, 28 ],
            "tuesday": [ 9, 19, 29, 1 ],
            "wednesday": [ 8, 18, 28, 31 ],
            "thursday": [ 7, 17, 27, 30 ],
            "saturday": [ 6, 16, 26, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('october_musics_id_seq', (SELECT MAX(id) FROM october_musics));");
    });
};
