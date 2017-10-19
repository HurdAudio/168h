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
            "saturday": [ 12, 22, 1, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1209444808/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://relapsealumni.bandcamp.com/album/a-deleted-symphony-for-the-beaten-down',
          a_string: 'A Deleted Symphony for the Beaten Down by Soilent Green',
          rule: {
            "monday": [ 12, 22, 1, 4 ],
            "tuesday": [ 11, 21, 31, 3 ],
            "wednesday": [ 10, 20, 30, 2 ],
            "thursday": [ 9, 19, 29, 1 ],
            "saturday": [ 8, 18, 28, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4008720429/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cloakroom.bandcamp.com/album/time-well',
          a_string: 'Time Well by Cloakroom',
          rule: {
            "monday": [ 8, 18, 28, 31 ],
            "tuesday": [ 12, 22, 1, 4 ],
            "wednesday": [ 11, 21, 31, 3 ],
            "thursday": [ 10, 20, 30, 2 ],
            "saturday": [ 9, 19, 29, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=795143880/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nothing.bandcamp.com/album/tired-of-tomorrow-deluxe-version',
          a_string: 'Tired of Tomorrow (Deluxe Version) by Nothing',
          rule: {
            "monday": [ 9, 19, 29, 1 ],
            "tuesday": [ 8, 18, 28, 31 ],
            "wednesday": [ 12, 22, 1, 4 ],
            "thursday": [ 11, 21, 31, 3 ],
            "saturday": [ 10, 20, 30, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1752700917/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://comacozer.bandcamp.com/album/kalos-eidos-skopeo',
          a_string: 'KALOS EIDOS SKOPEO by COMACOZER',
          rule: {
            "monday": [ 10, 20, 30, 2 ],
            "tuesday": [ 9, 19, 29, 1 ],
            "wednesday": [ 8, 18, 28, 31 ],
            "thursday": [ 12, 22, 1, 4 ],
            "saturday": [ 11, 21, 31, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3101404654/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theblackheartdeathcult.bandcamp.com/album/black-rainbow-ep',
          a_string: 'Black Rainbow - EP by The Black Heart Death Cult',
          rule: {
            "monday": [ 11, 21, 31, 3 ],
            "tuesday": [ 10, 20, 30, 2 ],
            "wednesday": [ 9, 19, 29, 1 ],
            "thursday": [ 8, 18, 28, 31 ],
            "saturday": [ 12, 22, 1, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=749486697/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://mtmountain.bandcamp.com/album/cosmos-terros',
          a_string: 'Cosmos Terros by Mt. Mountain',
          rule: {
            "monday": [ 12, 22, 1, 4 ],
            "tuesday": [ 11, 21, 31, 3 ],
            "wednesday": [ 10, 20, 30, 2 ],
            "thursday": [ 9, 19, 29, 1 ],
            "saturday": [ 8, 18, 28, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3966029014/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/bar-maldoror',
          a_string: 'Bar Maldoror by Nurse With Wound',
          rule: {
            "monday": [ 9, 19, 29, 1 ],
            "tuesday": [ 13, 23, 2, 5 ],
            "wednesday": [ 12, 22, 1, 4 ],
            "thursday": [ 11, 21, 31, 3 ],
            "saturday": [ 10, 20, 30, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=343477112/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bellwitch.bandcamp.com/album/four-phantoms',
          a_string: 'Four Phantoms by BELL WITCH',
          rule: {
            "monday": [ 10, 20, 30, 2 ],
            "tuesday": [ 9, 19, 29, 1 ],
            "wednesday": [ 13, 23, 2, 5 ],
            "thursday": [ 12, 22, 1, 4 ],
            "saturday": [ 11, 21, 31, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=302569069/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://no-solace.bandcamp.com/album/exercises-in-futility-lp-2015',
          a_string: 'Exercises in futility LP 2015 by Mgła',
          rule: {
            "monday": [ 11, 21, 31, 3 ],
            "tuesday": [ 10, 20, 30, 2 ],
            "wednesday": [ 9, 19, 29, 1 ],
            "thursday": [ 13, 23, 2, 5 ],
            "saturday": [ 12, 22, 1, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=989167209/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wrmlst.bandcamp.com/album/the-feral-wisdom',
          a_string: 'The Feral Wisdom by Wormlust',
          rule: {
            "monday": [ 12, 22, 1, 4 ],
            "tuesday": [ 11, 21, 31, 3 ],
            "wednesday": [ 10, 20, 30, 2 ],
            "thursday": [ 9, 19, 29, 1 ],
            "saturday": [ 13, 23, 2, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4280095474/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://amputatedveinrecords.bandcamp.com/album/propagation-of-the-foul',
          a_string: 'Propagation Of The Foul by Fatuous Rump',
          rule: {
            "monday": [ 13, 23, 2, 5 ],
            "tuesday": [ 12, 22, 1, 4 ],
            "wednesday": [ 11, 21, 31, 3 ],
            "thursday": [ 10, 20, 30, 2 ],
            "saturday": [ 9, 19, 29, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=644408023/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theanaesthete.bandcamp.com/album/utopioid',
          a_string: 'Utopioid by Rosetta',
          rule: {
            "monday": [ 9, 19, 29, 1 ],
            "tuesday": [ 13, 23, 2, 5 ],
            "wednesday": [ 12, 22, 1, 4 ],
            "thursday": [ 11, 21, 31, 3 ],
            "saturday": [ 10, 20, 30, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3339473640/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/the-surveillance-lounge',
          a_string: 'The Surveillance Lounge by Nurse With Wound',
          rule: {
            "monday": [ 10, 20, 30, 2 ],
            "tuesday": [ 9, 19, 29, 1 ],
            "wednesday": [ 13, 23, 2, 5 ],
            "thursday": [ 12, 22, 1, 4 ],
            "saturday": [ 11, 21, 31, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3300944452/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://melkbelly.bandcamp.com/album/nothing-valley',
          a_string: 'Nothing Valley by Melkbelly',
          rule: {
            "monday": [ 12, 22, 1, 4 ],
            "tuesday": [ 11, 21, 31, 3 ],
            "wednesday": [ 10, 20, 30, 2 ],
            "thursday": [ 14, 24, 3, 6 ],
            "saturday": [ 13, 23, 2, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1914812463/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ghostkillerentertainment.bandcamp.com/album/disney-goes-hardcore',
          a_string: 'Disney Goes Hardcore by Ghost Killer Entertainment',
          rule: {
            "monday": [ 13, 23, 2, 5 ],
            "tuesday": [ 12, 22, 1, 4 ],
            "wednesday": [ 11, 21, 31, 3 ],
            "thursday": [ 10, 20, 30, 2 ],
            "saturday": [ 14, 24, 3, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2006216280/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://pyrrhonband.bandcamp.com/album/what-passes-for-survival',
          a_string: 'What Passes For Survival by Pyrrhon',
          rule: {
            "monday": [ 14, 24, 3, 6 ],
            "tuesday": [ 13, 23, 2, 5 ],
            "wednesday": [ 12, 22, 1, 4 ],
            "thursday": [ 11, 21, 31, 3 ],
            "saturday": [ 10, 20, 30, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1182895266/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://profoundlorerecords.bandcamp.com/album/infrared-horizon',
          a_string: 'Infrared Horizon by ARTIFICIAL BRAIN',
          rule: {
            "monday": [ 10, 20, 30, 2 ],
            "tuesday": [ 14, 24, 3, 6 ],
            "wednesday": [ 13, 23, 2, 5 ],
            "thursday": [ 12, 22, 1, 4 ],
            "saturday": [ 11, 21, 31, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'hardcore punk, metal and nurse with wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3897774988/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://deathspellomega.bandcamp.com/album/the-synarchy-of-molten-bones',
          a_string: 'The Synarchy of Molten Bones by Deathspell Omega',
          rule: {
            "monday": [ 11, 21, 31, 3 ],
            "tuesday": [ 10, 20, 30, 2 ],
            "wednesday": [ 14, 24, 3, 6 ],
            "thursday": [ 13, 23, 2, 5 ],
            "saturday": [ 12, 22, 1, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('october_musics_id_seq', (SELECT MAX(id) FROM october_musics));");
    });
};
