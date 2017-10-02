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
        },
        {
          id: 4,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1215305700/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/lofoten-deadhead',
          a_string: 'Lofoten Deadhead by Nurse With Wound',
          rule: {
            "monday": [ 6, 16, 26, 29 ],
            "tuesday": [ 5, 15, 25, 28 ],
            "wednesday": [ 9, 19, 29, 1 ],
            "thursday": [ 8, 18, 28, 31 ],
            "saturday": [ 7, 17, 27, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3708541054/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://locrian.bandcamp.com/album/infinite-dissolution',
          a_string: 'Infinite Dissolution by Locrian',
          rule: {
            "monday": [ 7, 17, 27, 30 ],
            "tuesday": [ 6, 16, 26, 29 ],
            "wednesday": [ 5, 15, 25, 28 ],
            "thursday": [ 9, 19, 29, 1 ],
            "saturday": [ 8, 18, 28, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3338179255/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mamiffer.bandcamp.com/album/statu-nascendi-japanese-bonus-disc',
          a_string: 'Statu Nascendi (Japanese Bonus Disc) by Mamiffer',
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
          id: 7,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3899828666/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/dark-fat',
          a_string: 'Dark Fat by Nurse With Wound',
          rule: {
            "monday": [ 10, 20, 30, 2 ],
            "tuesday": [ 9, 19, 29, 1 ],
            "wednesday": [ 8, 18, 28, 31 ],
            "thursday": [ 7, 17, 27, 30 ],
            "saturday": [ 6, 16, 26, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1395969956/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://expander.bandcamp.com/album/laws-of-power',
          a_string: 'Laws of Power by EXPANDER',
          rule: {
            "monday": [ 6, 16, 26, 29 ],
            "tuesday": [ 10, 20, 30, 2 ],
            "wednesday": [ 9, 19, 29, 1 ],
            "thursday": [ 8, 18, 28, 31 ],
            "saturday": [ 7, 17, 27, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1680348550/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cavemancult.bandcamp.com/album/rituals-of-savagery',
          a_string: 'RITUALS OF SAVAGERY by CAVEMAN CULT',
          rule: {
            "monday": [ 7, 17, 27, 30 ],
            "tuesday": [ 6, 16, 26, 29 ],
            "wednesday": [ 10, 20, 30, 2 ],
            "thursday": [ 9, 19, 29, 1 ],
            "saturday": [ 8, 18, 28, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=423189070/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/automating-volume-one',
          a_string: 'Automating Volume One by Nurse With Wound',
          rule: {
            "monday": [ 8, 18, 28, 31 ],
            "tuesday": [ 7, 17, 27, 30 ],
            "wednesday": [ 6, 16, 26, 29 ],
            "thursday": [ 10, 20, 30, 2 ],
            "saturday": [ 9, 19, 29, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4251755056/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://candlelightrecordsuk.bandcamp.com/album/reverence',
          a_string: 'Reverence by Emperor',
          rule: {
            "monday": [ 9, 19, 29, 1 ],
            "tuesday": [ 8, 18, 28, 31 ],
            "wednesday": [ 7, 17, 27, 30 ],
            "thursday": [ 6, 16, 26, 29 ],
            "saturday": [ 10, 20, 30, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2218492553/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://i-voidhangerrecords.bandcamp.com/album/infamata',
          a_string: 'Infamata by SHEIDIM',
          rule: {
            "monday": [ 10, 20, 30, 2 ],
            "tuesday": [ 9, 19, 29, 1 ],
            "wednesday": [ 8, 18, 28, 31 ],
            "thursday": [ 7, 17, 27, 30 ],
            "saturday": [ 6, 16, 26, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1384948701/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/a-sucked-orange',
          a_string: 'A Sucked Orange by Nurse With Wound',
          rule: {
            "monday": [ 6, 16, 26, 29 ],
            "tuesday": [ 10, 20, 30, 2 ],
            "wednesday": [ 9, 19, 29, 1 ],
            "thursday": [ 8, 18, 28, 31 ],
            "saturday": [ 7, 17, 27, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2561425467/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://seriousbeak.bandcamp.com/album/huxwhukw-2',
          a_string: 'Huxwhukw by Serious Beak',
          rule: {
            "monday": [ 8, 18, 28, 31 ],
            "tuesday": [ 7, 17, 27, 30 ],
            "wednesday": [ 11, 21, 31, 3 ],
            "thursday": [ 10, 20, 30, 2 ],
            "saturday": [ 9, 19, 29, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=506985205/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://viakurushimi.bandcamp.com/album/kurushimi',
          a_string: 'Kurushimi by Kurushimi',
          rule: {
            "monday": [ 9, 19, 29, 1 ],
            "tuesday": [ 8, 18, 28, 31 ],
            "wednesday": [ 7, 17, 27, 30 ],
            "thursday": [ 11, 21, 31, 3 ],
            "saturday": [ 10, 20, 30, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1252178260/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/simple-headphone-mind',
          a_string: 'Simple Headphone Mind by Nurse With Wound',
          rule: {
            "monday": [ 10, 20, 30, 2 ],
            "tuesday": [ 9, 19, 29, 1 ],
            "wednesday": [ 8, 18, 28, 31 ],
            "thursday": [ 7, 17, 27, 30 ],
            "saturday": [ 11, 21, 31, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=221334160/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://howlinggiant.bandcamp.com/album/black-hole-space-wizard-part-2',
          a_string: 'Black Hole Space Wizard: Part 2 by Howling Giant',
          rule: {
            "monday": [ 11, 21, 31, 3 ],
            "tuesday": [ 10, 20, 30, 2 ],
            "wednesday": [ 9, 19, 29, 1 ],
            "thursday": [ 8, 18, 28, 31 ],
            "saturday": [ 7, 17, 27, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1330913740/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://spaceslug.bandcamp.com/album/time-travel-dilemma',
          a_string: 'Time Travel Dilemma by Spaceslug',
          rule: {
            "monday": [ 7, 17, 27, 30 ],
            "tuesday": [ 11, 21, 31, 3 ],
            "wednesday": [ 10, 20, 30, 2 ],
            "thursday": [ 9, 19, 29, 1 ],
            "saturday": [ 8, 18, 28, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=120112218/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thrillingliving.bandcamp.com/album/12',
          a_string: '12&quot; by gSp',
          rule: {
            "monday": [ 8, 18, 28, 31 ],
            "tuesday": [ 7, 17, 27, 30 ],
            "wednesday": [ 11, 21, 31, 3 ],
            "thursday": [ 10, 20, 30, 2 ],
            "saturday": [ 9, 19, 29, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3894989615/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://massmediarecords.bandcamp.com/album/collection',
          a_string: 'Collection by Cemetery',
          rule: {
            "monday": [ 9, 19, 29, 1 ],
            "tuesday": [ 8, 18, 28, 31 ],
            "wednesday": [ 7, 17, 27, 30 ],
            "thursday": [ 11, 21, 31, 3 ],
            "saturday": [ 10, 20, 30, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2251088645/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://internalautonomy.bandcamp.com/album/ferox',
          a_string: 'Ferox by Internal Autonomy',
          rule: {
            "monday": [ 11, 21, 31, 3 ],
            "tuesday": [ 10, 20, 30, 2 ],
            "wednesday": [ 9, 19, 29, 1 ],
            "thursday": [ 8, 18, 28, 31 ],
            "saturday": [ 11, 22, 1, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('october_musics_id_seq', (SELECT MAX(id) FROM october_musics));");
    });
};
