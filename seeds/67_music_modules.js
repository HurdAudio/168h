
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('music_modules').del()
    .then(function () {
      // Inserts seed entries
      return knex('music_modules').insert([
        {
          id: 1,
          user_author_id: 1,
          theme: 'Indie Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=165611748/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lalalangue.bandcamp.com/album/ululations',
          a_string: 'Ululations by Lalalangue',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_author_id: 1,
          theme: 'Indie Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3397650792/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://post-trash.bandcamp.com/album/post-trash-volume-three',
          a_string: 'Post-Trash: Volume Three by post-trash',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_author_id: 1,
          theme: 'Indie Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2944535468/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://beachslang.bandcamp.com/album/a-loud-bash-of-teenage-feelings',
          a_string: 'A Loud Bash of Teenage Feelings by Beach Slang',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('music_modules_id_seq', (SELECT MAX(id) FROM music_modules));");
    });
};
