
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
        },
        {
          id: 4,
          user_author_id: 1,
          theme: 'Indie Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1611932435/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://vundabar.bandcamp.com/album/smell-smoke',
          a_string: 'Smell Smoke by Vundabar',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_author_id: 1,
          theme: 'Indie Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3758603850/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hovvdy.bandcamp.com/album/cranberry',
          a_string: 'Cranberry by Hovvdy',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_author_id: 1,
          theme: 'Indie Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1004331546/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://jeremyenigk.bandcamp.com/album/ghosts',
          a_string: 'Ghosts by Jeremy Enigk',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_author_id: 1,
          theme: 'Indie Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1984968782/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://runawaybrother.bandcamp.com/album/new-pocket',
          a_string: 'New Pocket by Runaway Brother',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_author_id: 1,
          theme: 'Indie Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3083814565/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pile.bandcamp.com/album/a-hairshirt-of-purpose',
          a_string: 'A Hairshirt of Purpose by Pile',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_author_id: 1,
          theme: 'Indie Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4055154654/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://beachslang.bandcamp.com/album/we-were-babies-we-were-dirtbags-quiet-slang',
          a_string: 'We Were Babies &amp; We Were Dirtbags [Quiet Slang] by Beach Slang',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_author_id: 1,
          theme: 'Indie Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1830452648/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://screamingfemales.bandcamp.com/album/all-at-once',
          a_string: 'All At Once by Screaming Females',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_author_id: 1,
          theme: 'Indie Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3335370651/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://kalmarks.bandcamp.com/album/universal-care',
          a_string: 'Universal Care by Kal Marks',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_author_id: 1,
          theme: 'Indie Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4012894310/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://tokyotaboo.bandcamp.com/album/6th-street-psychosis',
          a_string: '6th Street Psychosis by Tokyo Taboo',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('music_modules_id_seq', (SELECT MAX(id) FROM music_modules));");
    });
};
