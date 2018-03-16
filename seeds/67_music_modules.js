
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
        },
        {
          id: 13,
          user_author_id: 1,
          theme: 'Indie Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=322408342/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://firstbasetapes.bandcamp.com/album/big',
          a_string: 'Big by Cuckoo',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_author_id: 1,
          theme: 'Indie Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3024661243/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://dentapes.bandcamp.com/album/like-music',
          a_string: 'Like Music by Miscomings',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_author_id: 1,
          theme: 'Indie Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1641983838/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://icarustheowl.bandcamp.com/album/rearm-circuits',
          a_string: 'Rearm Circuits by Icarus The Owl',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_author_id: 1,
          theme: 'Indie Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1540001085/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://vasudeva.bandcamp.com/album/no-clearance',
          a_string: 'No Clearance by Vasudeva',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_author_id: 1,
          theme: 'Indie Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2966941764/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newcandys.bandcamp.com/album/stars-reach-the-abyss',
          a_string: 'Stars Reach The Abyss by New Candys',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_author_id: 1,
          theme: 'Indie Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3035269069/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pile.bandcamp.com/album/dripping',
          a_string: 'Dripping by Pile',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_author_id: 1,
          theme: 'Indie Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3683436485/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://beachslang.bandcamp.com/album/everything-matters-but-no-one-is-listening-quiet-slang',
          a_string: 'Everything Matters But No One Is Listening [Quiet Slang] by Beach Slang',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_author_id: 1,
          theme: 'Indie Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3681084012/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theragamuffinsindia.bandcamp.com/album/tell-me-2',
          a_string: 'Tell Me by The Ragamuffins India',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_author_id: 1,
          theme: 'Indie Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3344047965/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://humansoundsrecords.bandcamp.com/album/changes',
          a_string: 'Changes by VACATIONS',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_author_id: 1,
          theme: 'Indie Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2615623740/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://123astronaut.bandcamp.com/album/the-friction',
          a_string: '',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_author_id: 1,
          theme: 'Indie Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2519204064/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://habibitheband.bandcamp.com/album/cardamom-garden',
          a_string: 'Cardamom Garden by Habibi',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_author_id: 1,
          theme: 'Indie Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2403148736/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://editors.bandcamp.com/album/violence',
          a_string: 'Violence by Editors',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_author_id: 1,
          theme: 'Indie Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3117146276/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thewavepictures.bandcamp.com/album/brushes-with-happiness',
          a_string: 'Brushes With Happiness by The Wave Pictures',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_author_id: 1,
          theme: 'Indie Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=100871804/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ratkidcool.bandcamp.com/album/year-of-the-rat',
          a_string: 'Year Of The Rat by Rat Kid Cool',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_author_id: 1,
          theme: 'Indie Rock',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=687815232/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://snailmailbaltimore.bandcamp.com/album/habit',
          a_string: 'Habit by Snail Mail',
          public: true,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('music_modules_id_seq', (SELECT MAX(id) FROM music_modules));");
    });
};
