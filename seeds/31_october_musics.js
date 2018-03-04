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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
          theme: 'Punk, Metal & Nurse with Wound',
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
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1712544940/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://employedtoserve.bandcamp.com/album/the-warmth-of-a-dying-sun-2',
          a_string: 'The Warmth Of A Dying Sun by Employed To Serve',
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
          id: 41,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2104766731/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ohhms.bandcamp.com/album/cold-2',
          a_string: 'Cold by OHHMS',
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
          id: 42,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1634325352/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://holyroarrecords.bandcamp.com/album/the-truth-in-our-bodies',
          a_string: 'The Truth in Our Bodies by Earth Moves',
          rule: {
            "monday": [ 15, 25, 4, 7 ],
            "tuesday": [ 14, 24, 3, 6 ],
            "wednesday": [ 13, 23, 2, 5 ],
            "thursday": [ 12, 22, 1, 4 ],
            "saturday": [ 11, 21, 1, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3929061907/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://darkdescentrecords.bandcamp.com/album/eroded-corridors-of-unbeing',
          a_string: 'Eroded Corridors of Unbeing by Spectral Voice',
          rule: {
            "monday": [ 11, 21, 1, 3 ],
            "tuesday": [ 15, 25, 4, 7 ],
            "wednesday": [ 14, 24, 3, 6 ],
            "thursday": [ 13, 23, 2, 5 ],
            "saturday": [ 12, 22, 1, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2158092846/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://misthyrming.bandcamp.com/album/s-ngvar-elds-og-rei-u',
          a_string: 'Söngvar elds og óreiðu by Misþyrming',
          rule: {
            "monday": [ 12, 22, 1, 4 ],
            "tuesday": [ 11, 21, 1, 3 ],
            "wednesday": [ 15, 25, 4, 7 ],
            "thursday": [ 14, 24, 3, 6 ],
            "saturday": [ 13, 23, 2, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4165913683/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://bellwitch.bandcamp.com/album/mirror-reaper',
          a_string: 'Mirror Reaper by Bell Witch',
          rule: {
            "monday": [ 13, 23, 2, 5 ],
            "tuesday": [ 12, 22, 1, 4 ],
            "wednesday": [ 11, 21, 1, 3 ],
            "thursday": [ 15, 25, 4, 7 ],
            "saturday": [ 14, 24, 3, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2418348675/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/shipwreck-radio-final-broadcasts',
          a_string: 'Shipwreck Radio: Final Broadcasts by Nurse With Wound',
          rule: {
            "monday": [ 14, 24, 3, 6 ],
            "tuesday": [ 13, 23, 2, 5 ],
            "wednesday": [ 12, 22, 1, 4 ],
            "thursday": [ 11, 21, 1, 3 ],
            "saturday": [ 15, 25, 4, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2660635769/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://gaywitchabortion.bandcamp.com/album/halo-of-flies-sessions',
          a_string: 'Halo of Flies Sessions by Gay Witch Abortion',
          rule: {
            "monday": [ 15, 25, 4, 7 ],
            "tuesday": [ 14, 24, 3, 6 ],
            "wednesday": [ 13, 23, 2, 5 ],
            "thursday": [ 12, 22, 1, 4 ],
            "saturday": [ 11, 21, 1, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1351521571/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://krallice.bandcamp.com/album/lo-m',
          a_string: 'Loüm by Krallice with Dave Edwardson',
          rule: {
            "monday": [ 11, 21, 1, 3 ],
            "tuesday": [ 15, 25, 4, 7 ],
            "wednesday": [ 14, 24, 3, 6 ],
            "thursday": [ 13, 23, 2, 5 ],
            "saturday": [ 12, 22, 1, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2258812329/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/creakiness',
          a_string: 'Creakiness by Nurse With Wound',
          rule: {
            "monday": [ 13, 23, 2, 5 ],
            "tuesday": [ 12, 22, 2, 4 ],
            "wednesday": [ 16, 26, 5, 8 ],
            "thursday": [ 15, 25, 4, 7 ],
            "saturday": [ 14, 24, 3, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2562196777/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ctts.bandcamp.com/album/as-the-roots-undo',
          a_string: 'As the Roots Undo by Circle Takes the Square',
          rule: {
            "monday": [ 14, 24, 3, 6 ],
            "tuesday": [ 13, 23, 2, 5 ],
            "wednesday": [ 12, 22, 2, 4 ],
            "thursday": [ 16, 26, 5, 8 ],
            "saturday": [ 15, 25, 4, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2298164209/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thickpisss.bandcamp.com/album/demo',
          a_string: 'Demo by Thick Piss',
          rule: {
            "monday": [ 15, 25, 4, 7 ],
            "tuesday": [ 14, 24, 3, 6 ],
            "wednesday": [ 13, 23, 2, 5 ],
            "thursday": [ 12, 22, 2, 4 ],
            "saturday": [ 16, 26, 5, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=765292961/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://modernbaseballpa.bandcamp.com/album/sports-2',
          a_string: 'Sports by Modern Baseball',
          rule: {
            "monday": [ 16, 26, 5, 8 ],
            "tuesday": [ 15, 25, 4, 7 ],
            "wednesday": [ 14, 24, 3, 6 ],
            "thursday": [ 13, 23, 2, 5 ],
            "saturday": [ 12, 22, 2, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=845311748/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lame-orecords.bandcamp.com/album/lowercase-roses-ep',
          a_string: 'Lowercase Roses EP by Lowercase Roses',
          rule: {
            "monday": [ 12, 22, 2, 4 ],
            "tuesday": [ 16, 26, 5, 8 ],
            "wednesday": [ 15, 25, 4, 7 ],
            "thursday": [ 14, 24, 3, 6 ],
            "saturday": [ 13, 23, 2, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1663129501/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://whereismarietta.bandcamp.com/album/as-it-were',
          a_string: 'As It Were by Marietta',
          rule: {
            "monday": [ 13, 23, 2, 5 ],
            "tuesday": [ 12, 22, 2, 4 ],
            "wednesday": [ 16, 26, 5, 8 ],
            "thursday": [ 15, 25, 4, 7 ],
            "saturday": [ 14, 24, 3, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2136943119/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lumpythedumpers.bandcamp.com/album/those-pickled-fuckers"',
          a_string: 'Those Pickled Fuckers by Lumpy &amp; The Dumpers',
          rule: {
            "monday": [ 14, 24, 3, 6 ],
            "tuesday": [ 13, 23, 2, 5 ],
            "wednesday": [ 12, 22, 2, 4 ],
            "thursday": [ 16, 26, 5, 8 ],
            "saturday": [ 15, 25, 4, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2737163036/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://petitepdx.bandcamp.com/album/ii',
          a_string: 'II by Petite',
          rule: {
            "monday": [ 16, 26, 5, 8 ],
            "tuesday": [ 15, 25, 4, 7 ],
            "wednesday": [ 14, 24, 3, 6 ],
            "thursday": [ 13, 23, 3, 5 ],
            "saturday": [ 17, 27, 6, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2622430888/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://smokingroom-label.bandcamp.com/album/s-t-2',
          a_string: 'S/T by Ecstasy',
          rule: {
            "monday": [ 17, 27, 6, 9 ],
            "tuesday": [ 16, 26, 5, 8 ],
            "wednesday": [ 15, 25, 4, 7 ],
            "thursday": [ 14, 24, 3, 6 ],
            "saturday": [ 13, 23, 3, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1351946248/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://cannibalcorpse.bandcamp.com/album/red-before-black',
          a_string: 'Red Before Black by Cannibal Corpse',
          rule: {
            "monday": [ 13, 23, 3, 5 ],
            "tuesday": [ 17, 27, 6, 9 ],
            "wednesday": [ 16, 26, 5, 8 ],
            "thursday": [ 15, 25, 4, 7 ],
            "saturday": [ 14, 24, 3, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=482198708/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://legendry.bandcamp.com/album/dungeon-crawler',
          a_string: 'Dungeon Crawler by Legendry',
          rule: {
            "monday": [ 14, 24, 3, 6 ],
            "tuesday": [ 13, 23, 3, 5 ],
            "wednesday": [ 17, 27, 6, 9 ],
            "thursday": [ 16, 26, 5, 8 ],
            "saturday": [ 15, 25, 4, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3204709921/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://i-voidhangerrecords.bandcamp.com/album/the-crowning-quietus',
          a_string: 'The Crowning Quietus by INCONCESSUS LUX LUCIS',
          rule: {
            "monday": [ 15, 25, 4, 7 ],
            "tuesday": [ 14, 24, 3, 6 ],
            "wednesday": [ 13, 23, 3, 5 ],
            "thursday": [ 17, 27, 6, 9 ],
            "saturday": [ 16, 26, 5, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3792658459/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://abysmalsounds.bandcamp.com/album/crone',
          a_string: 'Crone by Crone',
          rule: {
            "monday": [ 16, 26, 5, 8 ],
            "tuesday": [ 15, 25, 4, 7 ],
            "wednesday": [ 14, 24, 3, 6 ],
            "thursday": [ 13, 23, 3, 5 ],
            "saturday": [ 17, 27, 6, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2518658681/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ritualmist.bandcamp.com/album/demo-2017',
          a_string: 'Demo 2017 by Ritual Mist',
          rule: {
            "monday": [ 17, 27, 6, 9 ],
            "tuesday": [ 16, 26, 5, 8 ],
            "wednesday": [ 15, 25, 4, 7 ],
            "thursday": [ 14, 24, 3, 6 ],
            "saturday": [ 13, 23, 3, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2990469977/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ancientdoommetal.bandcamp.com/album/abraxas',
          a_string: 'Abraxas by Ancient',
          rule: {
            "monday": [ 13, 23, 3, 5 ],
            "tuesday": [ 17, 27, 6, 9 ],
            "wednesday": [ 16, 26, 5, 8 ],
            "thursday": [ 15, 25, 4, 7 ],
            "saturday": [ 14, 24, 3, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1603210969/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/a-handjob-from-the-laughing-policeman',
          a_string: 'A handjob from the laughing policeman by Nurse With Wound',
          rule: {
            "monday": [ 14, 24, 3, 6 ],
            "tuesday": [ 13, 23, 3, 5 ],
            "wednesday": [ 17, 27, 6, 9 ],
            "thursday": [ 16, 26, 5, 8 ],
            "saturday": [ 15, 25, 4, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2893280889/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/who-can-i-turn-to-stereo',
          a_string: 'Who Can I Turn To Stereo by Nurse With Wound',
          rule: {
            "monday": [ 15, 25, 4, 7 ],
            "tuesday": [ 14, 24, 3, 6 ],
            "wednesday": [ 13, 23, 3, 5 ],
            "thursday": [ 17, 27, 6, 9 ],
            "saturday": [ 16, 26, 5, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2244444763/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/stereo-wastelands',
          a_string: 'Stereo Wastelands by Nurse With Wound',
          rule: {
            "monday": [ 16, 26, 5, 8 ],
            "tuesday": [ 15, 25, 4, 7 ],
            "wednesday": [ 14, 24, 3, 6 ],
            "thursday": [ 13, 23, 3, 5 ],
            "saturday": [ 17, 27, 6, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=586986555/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://omniatl.bandcamp.com/album/multi-task',
          a_string: 'Multi-task by Omni',
          rule: {
            "monday": [ 17, 27, 6, 9 ],
            "tuesday": [ 16, 26, 5, 8 ],
            "wednesday": [ 15, 25, 4, 7 ],
            "thursday": [ 14, 24, 3, 6 ],
            "saturday": [ 13, 23, 3, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2240770784/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://protomartyr.bandcamp.com/album/relatives-in-descent',
          a_string: 'Relatives In Descent by Protomartyr',
          rule: {
            "monday": [ 13, 23, 3, 5 ],
            "tuesday": [ 17, 27, 6, 9 ],
            "wednesday": [ 16, 26, 5, 8 ],
            "thursday": [ 15, 25, 4, 7 ],
            "saturday": [ 14, 24, 3, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2909394141/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://carseatheadrest.bandcamp.com/album/starving-while-living',
          a_string: 'Starving While Living by Car Seat Headrest',
          rule: {
            "monday": [ 14, 24, 3, 6 ],
            "tuesday": [ 13, 23, 3, 5 ],
            "wednesday": [ 17, 27, 6, 9 ],
            "thursday": [ 16, 26, 5, 8 ],
            "saturday": [ 15, 25, 4, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2556597098/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://limpwrist.bandcamp.com/album/facades',
          a_string: 'Facades by Limp Wrist',
          rule: {
            "monday": [ 16, 26, 5, 8 ],
            "tuesday": [ 15, 25, 4, 7 ],
            "wednesday": [ 14, 24, 4, 6 ],
            "thursday": [ 18, 28, 7, 10 ],
            "saturday": [ 17, 27, 6, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4037673616/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://haramharam.bandcamp.com/album/when-you-have-won-you-have-lost',
          a_string: '>بس ربحت, خسرت &quot;When You Have Won, You Have Lost&quot; by HARAM',
          rule: {
            "monday": [ 17, 27, 6, 9 ],
            "tuesday": [ 16, 26, 5, 8 ],
            "wednesday": [ 15, 25, 4, 7 ],
            "thursday": [ 14, 24, 4, 6 ],
            "saturday": [ 18, 28, 7, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'http://bandcamp.com/EmbeddedPlayer/album=919329377/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://listen.20buckspin.com/album/curse-of-conception',
          a_string: 'Curse Of Conception by Spirit Adrift',
          rule: {
            "monday": [ 18, 28, 7, 10 ],
            "tuesday": [ 17, 27, 6, 9 ],
            "wednesday": [ 16, 26, 5, 8 ],
            "thursday": [ 15, 25, 4, 7 ],
            "saturday": [ 14, 24, 4, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4268244820/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://profoundlorerecords.bandcamp.com/album/heartless',
          a_string: 'Heartless by PALLBEARER',
          rule: {
            "monday": [ 14, 24, 4, 6 ],
            "tuesday": [ 18, 28, 7, 10 ],
            "wednesday": [ 17, 27, 6, 9 ],
            "thursday": [ 16, 26, 5, 8 ],
            "saturday": [ 15, 25, 4, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1791932081/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://i-voidhangerrecords.bandcamp.com/album/a-subtler-kind-of-light',
          a_string: 'A Subtler Kind Of Light by LOCUST LEAVES',
          rule: {
            "monday": [ 15, 25, 4, 7 ],
            "tuesday": [ 14, 24, 4, 6 ],
            "wednesday": [ 18, 28, 7, 10 ],
            "thursday": [ 17, 27, 6, 9 ],
            "saturday": [ 16, 26, 5, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4120711825/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wildwing.bandcamp.com/album/doomed-ii-repeat',
          a_string: 'Doomed II Repeat by Wild Wing',
          rule: {
            "monday": [ 16, 26, 5, 8 ],
            "tuesday": [ 15, 25, 4, 7 ],
            "wednesday": [ 14, 24, 4, 6 ],
            "thursday": [ 18, 28, 7, 10 ],
            "saturday": [ 17, 27, 6, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1434612023/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://squalus.bandcamp.com/album/the-great-fish',
          a_string: 'The Great Fish by Squalus',
          rule: {
            "monday": [ 17, 27, 6, 9 ],
            "tuesday": [ 16, 26, 5, 8 ],
            "wednesday": [ 15, 25, 4, 7 ],
            "thursday": [ 14, 24, 4, 6 ],
            "saturday": [ 18, 28, 7, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2290990145/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://walpyrgus.bandcamp.com/album/walpyrgus-nights',
          a_string: 'Walpyrgus Nights by Walpyrgus',
          rule: {
            "monday": [ 19, 29, 8, 11 ],
            "tuesday": [ 18, 28, 7, 10 ],
            "wednesday": [ 17, 27, 6, 9 ],
            "thursday": [ 16, 26, 5, 8 ],
            "saturday": [ 15, 25, 5, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3798671361/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://incantation666.bandcamp.com/album/profane-nexus',
          a_string: 'Profane Nexus by Incantation',
          rule: {
            "monday": [ 15, 25, 5, 7 ],
            "tuesday": [ 19, 29, 8, 11 ],
            "wednesday": [ 18, 28, 7, 10 ],
            "thursday": [ 17, 27, 6, 9 ],
            "saturday": [ 16, 26, 5, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=279769716/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://yelloweyes.bandcamp.com/album/immersion-trench-reverie',
          a_string: 'Immersion Trench Reverie by Yellow Eyes',
          rule: {
            "monday": [ 16, 26, 5, 8 ],
            "tuesday": [ 15, 25, 5, 7 ],
            "wednesday": [ 19, 29, 8, 11 ],
            "thursday": [ 18, 28, 7, 10 ],
            "saturday": [ 17, 27, 6, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1774896739/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://attic-vanrecords.bandcamp.com/album/sanctimonious',
          a_string: 'Sanctimonious by Attic',
          rule: {
            "monday": [ 17, 27, 6, 9 ],
            "tuesday": [ 16, 26, 5, 8 ],
            "wednesday": [ 15, 25, 5, 7 ],
            "thursday": [ 19, 29, 8, 11 ],
            "saturday": [ 18, 28, 7, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1464044653/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://powertripsl.bandcamp.com/album/nightmare-logic',
          a_string: 'Nightmare Logic by Power Trip',
          rule: {
            "monday": [ 18, 28, 7, 10 ],
            "tuesday": [ 17, 27, 6, 9 ],
            "wednesday": [ 16, 26, 5, 8 ],
            "thursday": [ 15, 25, 5, 7 ],
            "saturday": [ 19, 29, 8, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1139063092/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://palbertapalberta.bandcamp.com/album/bye-bye-berta',
          a_string: 'Bye Bye Berta by Palberta',
          rule: {
            "monday": [ 19, 29, 8, 11 ],
            "tuesday": [ 18, 28, 7, 10 ],
            "wednesday": [ 17, 27, 6, 9 ],
            "thursday": [ 16, 26, 5, 8 ],
            "saturday": [ 15, 25, 5, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2391212504/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ironlungpv.bandcamp.com/album/bitter-bitter-lp-lungs-093',
          a_string: 'Bitter Bitter LP (LUNGS-093) by BEHAVIOR',
          rule: {
            "monday": [ 15, 25, 5, 7 ],
            "tuesday": [ 19, 29, 8, 11 ],
            "wednesday": [ 18, 28, 7, 10 ],
            "thursday": [ 17, 27, 6, 9 ],
            "saturday": [ 16, 26, 5, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2730123572/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://peterperrett.bandcamp.com/album/how-the-west-was-won',
          a_string: 'How The West Was Won by Peter Perrett',
          rule: {
            "monday": [ 17, 27, 6, 9 ],
            "tuesday": [ 16, 26, 6, 8 ],
            "wednesday": [ 20, 30, 9, 12 ],
            "thursday": [ 19, 29, 8, 11 ],
            "saturday": [ 18, 28, 7, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2730560919/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://thrillingliving.bandcamp.com/album/is-toxic-to-pigs-ep',
          a_string: '&quot;...Is Toxic to Pigs??&quot; EP by Xylitol',
          rule: {
            "monday": [ 18, 28, 7, 10 ],
            "tuesday": [ 17, 27, 6, 9 ],
            "wednesday": [ 16, 26, 6, 8 ],
            "thursday": [ 20, 30, 9, 12 ],
            "saturday": [ 19, 29, 8, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3145862487/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://haramharam.bandcamp.com/album/what-do-you-see',
          a_string: 'شو بتشوف؟ &quot;What Do You See?&quot; by HARAM',
          rule: {
            "monday": [ 19, 29, 8, 11 ],
            "tuesday": [ 18, 28, 7, 10 ],
            "wednesday": [ 17, 27, 6, 9 ],
            "thursday": [ 16, 26, 6, 8 ],
            "saturday": [ 20, 30, 9, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1082864402/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://rankxerox.bandcamp.com/album/m-y-t-h-ep',
          a_string: 'M.Y.T.H. EP by Rank/Xerox',
          rule: {
            "monday": [ 20, 30, 9, 12 ],
            "tuesday": [ 19, 29, 8, 11 ],
            "wednesday": [ 18, 28, 7, 10 ],
            "thursday": [ 17, 27, 6, 9 ],
            "saturday": [ 16, 26, 6, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=747829000/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lavidaesunmus.bandcamp.com/album/s-t-mlp-2',
          a_string: 'S/T MLP by Straightjacket Nation',
          rule: {
            "monday": [ 16, 26, 6, 8 ],
            "tuesday": [ 20, 30, 9, 12 ],
            "wednesday": [ 19, 29, 8, 11 ],
            "thursday": [ 18, 28, 7, 10 ],
            "saturday": [ 17, 27, 6, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3353914414/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://derangedrecords.bandcamp.com/album/machine-response',
          a_string: 'Machine Response by CAREER SUICIDE',
          rule: {
            "monday": [ 17, 27, 6, 9 ],
            "tuesday": [ 16, 26, 6, 8 ],
            "wednesday": [ 20, 30, 9, 12 ],
            "thursday": [ 19, 29, 8, 11 ],
            "saturday": [ 18, 28, 7, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=510235755/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://institute.bandcamp.com/album/subordination',
          a_string: 'Subordination by Institute',
          rule: {
            "monday": [ 18, 28, 7, 10 ],
            "tuesday": [ 17, 27, 6, 9 ],
            "wednesday": [ 16, 26, 6, 8 ],
            "thursday": [ 20, 30, 9, 12 ],
            "saturday": [ 19, 29, 8, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4069180029/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://wharfcatrecords.bandcamp.com/album/night-bully-ep',
          a_string: 'Night Bully EP by Urochromes',
          rule: {
            "monday": [ 20, 30, 9, 12 ],
            "tuesday": [ 19, 29, 8, 11 ],
            "wednesday": [ 18, 28, 7, 10 ],
            "thursday": [ 17, 27, 7, 9 ],
            "saturday": [ 21, 31, 10, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1806423715/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://powertripsl.bandcamp.com/album/manifest-decimation-2',
          a_string: 'Manifest Decimation by Power Trip',
          rule: {
            "monday": [ 21, 31, 10, 13 ],
            "tuesday": [ 20, 30, 9, 12 ],
            "wednesday": [ 19, 29, 8, 11 ],
            "thursday": [ 18, 28, 7, 10 ],
            "saturday": [ 17, 27, 7, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2354284763/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/natal-moonies',
          a_string: 'Natal Moonies by Nurse With Wound',
          rule: {
            "monday": [ 17, 27, 7, 9 ],
            "tuesday": [ 21, 31, 10, 13 ],
            "wednesday": [ 20, 30, 9, 12 ],
            "thursday": [ 19, 29, 8, 11 ],
            "saturday": [ 18, 28, 7, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4279901466/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://alastordoom.bandcamp.com/album/black-magic-2',
          a_string: 'Black Magic by Alastor',
          rule: {
            "monday": [ 18, 28, 7, 10 ],
            "tuesday": [ 17, 27, 7, 9 ],
            "wednesday": [ 21, 31, 10, 13 ],
            "thursday": [ 20, 30, 9, 12 ],
            "saturday": [ 19, 29, 8, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=502658108/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://egypt1.bandcamp.com/album/cracks-and-lines',
          a_string: 'CRACKS AND LINES by EGYPT',
          rule: {
            "monday": [ 19, 29, 8, 11 ],
            "tuesday": [ 18, 28, 7, 10 ],
            "wednesday": [ 17, 27, 7, 9 ],
            "thursday": [ 21, 31, 10, 13 ],
            "saturday": [ 20, 30, 9, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2796246848/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://beholdtheelder.bandcamp.com/album/reflections-of-a-floating-world',
          a_string: 'Reflections of a Floating World by Elder',
          rule: {
            "monday": [ 20, 30, 9, 12 ],
            "tuesday": [ 19, 29, 8, 11 ],
            "wednesday": [ 18, 28, 7, 10 ],
            "thursday": [ 17, 27, 7, 9 ],
            "saturday": [ 21, 31, 10, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3881729205/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://sabotagerecords.bandcamp.com/album/dead-hero-la-vida-continua-lp',
          a_string: 'Dead Hero - La Vida Continua LP by sabotagerecords',
          rule: {
            "monday": [ 21, 31, 10, 13 ],
            "tuesday": [ 20, 30, 9, 12 ],
            "wednesday": [ 19, 29, 8, 11 ],
            "thursday": [ 18, 28, 7, 10 ],
            "saturday": [ 17, 27, 7, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3707752074/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://christvswarhol.bandcamp.com/album/dissent-digital-download',
          a_string: 'Dissent [digital download] by Christ vs. Warhol',
          rule: {
            "monday": [ 18, 28, 8, 10 ],
            "tuesday": [ 22, 1, 11, 14 ],
            "wednesday": [ 21, 31, 10, 13 ],
            "thursday": [ 20, 30, 9, 12 ],
            "saturday": [ 19, 29, 8, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1269939090/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://occultwhispersrecords.bandcamp.com/album/night-voices-volume-1',
          a_string: 'Night Voices: Volume 1 by Occult Whispers Records',
          rule: {
            "monday": [ 19, 29, 8, 11 ],
            "tuesday": [ 18, 28, 8, 10 ],
            "wednesday": [ 22, 1, 11, 14 ],
            "thursday": [ 21, 31, 10, 13 ],
            "saturday": [ 20, 30, 9, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=803644549/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://blood-music.bandcamp.com/album/air',
          a_string: 'Air by Astronoid',
          rule: {
            "monday": [ 20, 30, 9, 12 ],
            "tuesday": [ 19, 29, 8, 11 ],
            "wednesday": [ 18, 28, 8, 10 ],
            "thursday": [ 22, 1, 11, 14 ],
            "saturday": [ 21, 31, 10, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3426839249/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://blood-music.bandcamp.com/album/eschaton-m-moire',
          a_string: 'Eschaton Mémoire by Chaos Moon',
          rule: {
            "monday": [ 21, 31, 10, 13 ],
            "tuesday": [ 20, 30, 9, 12 ],
            "wednesday": [ 19, 29, 8, 11 ],
            "thursday": [ 18, 28, 8, 10 ],
            "saturday": [ 22, 1, 11, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1542160429/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://blood-music.bandcamp.com/album/polygondwanaland',
          a_string: 'Polygondwanaland by King Gizzard &amp; The Lizard Wizard',
          rule: {
            "monday": [ 22, 1, 11, 14 ],
            "tuesday": [ 21, 31, 10, 13 ],
            "wednesday": [ 20, 30, 9, 12 ],
            "thursday": [ 19, 29, 8, 11 ],
            "saturday": [ 18, 28, 8, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4216975482/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lavidaesunmus.bandcamp.com/album/un-ltimo-ultrasonido-naci-y-muri-en-barcelona-mlp',
          a_string: 'Un Último Ultrasonido Nació Y Murió En Barcelona MLP by Barcelona',
          rule: {
            "monday": [ 18, 28, 8, 10 ],
            "tuesday": [ 22, 1, 11, 14 ],
            "wednesday": [ 21, 31, 10, 13 ],
            "thursday": [ 20, 30, 9, 12 ],
            "saturday": [ 19, 29, 8, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3620062917/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://heterofobiamx.bandcamp.com/album/eres-tan-guapo-3',
          a_string: 'Eres Tan Guapo by Heterofobia',
          rule: {
            "monday": [ 19, 29, 8, 11 ],
            "tuesday": [ 18, 28, 8, 10 ],
            "wednesday": [ 22, 1, 11, 14 ],
            "thursday": [ 21, 31, 10, 13 ],
            "saturday": [ 20, 30, 9, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1459946767/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://erstetheketontraeger.bandcamp.com/album/ett-039-dau-yflin-drepa-drepa-ep',
          a_string: 'ETT - 039 - DAUÐYFLIN - DREPA DREPA EP by DAUÐYFLIN',
          rule: {
            "monday": [ 21, 31, 10, 13 ],
            "tuesday": [ 20, 30, 9, 12 ],
            "wednesday": [ 19, 29, 9, 11 ],
            "thursday": [ 23, 2, 12, 15 ],
            "saturday": [ 22, 1, 11, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2796432822/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://hamferd.bandcamp.com/album/t-msins-likam',
          a_string: 'Támsins Likam by Hamferð',
          rule: {
            "monday": [ 22, 1, 11, 14 ],
            "tuesday": [ 21, 31, 10, 13 ],
            "wednesday": [ 20, 30, 9, 12 ],
            "thursday": [ 19, 29, 9, 11 ],
            "saturday": [ 23, 2, 12, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=682659331/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://shoppingfc.bandcamp.com/album/the-official-body',
          a_string: 'The Official Body by Shopping',
          rule: {
            "monday": [ 23, 2, 12, 15 ],
            "tuesday": [ 22, 1, 11, 14 ],
            "wednesday": [ 21, 31, 10, 13 ],
            "thursday": [ 20, 30, 9, 12 ],
            "saturday": [ 19, 29, 9, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1036201888/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://comus.bandcamp.com/album/out-of-the-coma',
          a_string: 'Out Of The Coma by Comus',
          rule: {
            "monday": [ 19, 29, 9, 11 ],
            "tuesday": [ 23, 2, 12, 15 ],
            "wednesday": [ 22, 1, 11, 14 ],
            "thursday": [ 21, 31, 10, 13 ],
            "saturday": [ 20, 30, 9, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=7518368/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://ayearinthecountry.bandcamp.com/album/the-forest-the-wald-2',
          a_string: 'The Forest / The Wald by A Year In The Country',
          rule: {
            "monday": [ 20, 30, 9, 12 ],
            "tuesday": [ 19, 29, 9, 11 ],
            "wednesday": [ 23, 2, 12, 15 ],
            "thursday": [ 22, 1, 11, 14 ],
            "saturday": [ 21, 31, 10, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=3619179189/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://current931.bandcamp.com/album/all-the-pretty-little-horses',
          a_string: 'All The Pretty Little Horses by Current 93',
          rule: {
            "monday": [ 21, 31, 10, 13 ],
            "tuesday": [ 20, 30, 9, 12 ],
            "wednesday": [ 19, 29, 9, 11 ],
            "thursday": [ 23, 2, 12, 15 ],
            "saturday": [ 22, 1, 11, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1506281696/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://theheartwoodinstitute.bandcamp.com/album/witchcraft-70',
          a_string: 'Witchcraft &#39;70 by The Heartwood Institute',
          rule: {
            "monday": [ 22, 1, 11, 14 ],
            "tuesday": [ 21, 31, 10, 13 ],
            "wednesday": [ 20, 30, 9, 12 ],
            "thursday": [ 19, 29, 9, 11 ],
            "saturday": [ 23, 2, 12, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=368681962/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://newcircle.bandcamp.com/album/memento',
          a_string: 'Memento by New Circle',
          rule: {
            "monday": [ 24, 3, 13, 16 ],
            "tuesday": [ 23, 2, 12, 15 ],
            "wednesday": [ 22, 1, 11, 14 ],
            "thursday": [ 21, 31, 10, 13 ],
            "saturday": [ 20, 30, 10, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1654600730/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://petitepdx.bandcamp.com/album/petite',
          a_string: 'Petite by Petite',
          rule: {
            "monday": [ 20, 30, 10, 12 ],
            "tuesday": [ 24, 3, 13, 16 ],
            "wednesday": [ 23, 2, 12, 15 ],
            "thursday": [ 22, 1, 11, 14 ],
            "saturday": [ 21, 31, 10, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=197622367/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://lumpythedumpers.bandcamp.com/album/huff-my-sack',
          a_string: 'Huff My Sack by Lumpy &amp; The Dumpers',
          rule: {
            "monday": [ 21, 31, 10, 13 ],
            "tuesday": [ 20, 30, 10, 12 ],
            "wednesday": [ 24, 3, 13, 16 ],
            "thursday": [ 23, 2, 12, 15 ],
            "saturday": [ 22, 1, 11, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2174839893/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/acts-of-senseless-beauty-santoor-lena-bicycle',
          a_string: 'Acts Of Senseless Beauty / Santoor Lena Bicycle by Nurse With Wound',
          rule: {
            "monday": [ 22, 1, 11, 14 ],
            "tuesday": [ 21, 31, 10, 13 ],
            "wednesday": [ 20, 30, 10, 12 ],
            "thursday": [ 24, 3, 13, 16 ],
            "saturday": [ 23, 2, 12, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=4070610304/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/alice-the-goon',
          a_string: 'Alice The Goon by Nurse With Wound',
          rule: {
            "monday": [ 23, 2, 12, 15 ],
            "tuesday": [ 22, 1, 11, 14 ],
            "wednesday": [ 21, 31, 10, 13 ],
            "thursday": [ 20, 30, 10, 12 ],
            "saturday": [ 24, 3, 13, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=738927664/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://nursewithwound1.bandcamp.com/album/lumbs-sister',
          a_string: 'Lumb&#39;s Sister by Nurse With Wound',
          rule: {
            "monday": [ 24, 3, 13, 16 ],
            "tuesday": [ 23, 2, 12, 15 ],
            "wednesday": [ 22, 1, 11, 14 ],
            "thursday": [ 21, 31, 10, 13 ],
            "saturday": [ 20, 30, 10, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1860152868/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://keysoforthanc.bandcamp.com/album/dush-agh-golnauk',
          a_string: 'Dush agh Golnauk by Keys of Orthanc',
          rule: {
            "monday": [ 20, 30, 10, 12 ],
            "tuesday": [ 24, 3, 13, 16 ],
            "wednesday": [ 23, 2, 12, 15 ],
            "thursday": [ 22, 1, 11, 14 ],
            "saturday": [ 21, 31, 10, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=38645880/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://darkdescentrecords.bandcamp.com/album/where-all-hope-fades',
          a_string: 'Where All Hope Fades by Ataraxy',
          rule: {
            "monday": [ 22, 1, 11, 14 ],
            "tuesday": [ 21, 31, 11, 13 ],
            "wednesday": [ 25, 4, 14, 17 ],
            "thursday": [ 24, 3, 13, 16 ],
            "saturday": [ 23, 2, 12, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=2094904391/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://visigothofficial.bandcamp.com/album/conquerors-oath',
          a_string: 'Conqueror&#39;s Oath by Visigoth',
          rule: {
            "monday": [ 23, 2, 12, 15 ],
            "tuesday": [ 22, 1, 11, 14 ],
            "wednesday": [ 21, 31, 11, 13 ],
            "thursday": [ 25, 4, 14, 17 ],
            "saturday": [ 24, 3, 13, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1243795483/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://agoniarecords.bandcamp.com/album/interregnum',
          a_string: 'Interregnum by Usurpress',
          rule: {
            "monday": [ 24, 3, 13, 16 ],
            "tuesday": [ 23, 2, 12, 15 ],
            "wednesday": [ 22, 1, 11, 14 ],
            "thursday": [ 21, 31, 11, 13 ],
            "saturday": [ 25, 4, 14, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=952348529/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://divideanddissolve.bandcamp.com/album/abomination',
          a_string: 'ABOMINATION by Divide and Dissolve',
          rule: {
            "monday": [ 25, 4, 14, 17 ],
            "tuesday": [ 24, 3, 13, 16 ],
            "wednesday": [ 23, 2, 12, 15 ],
            "thursday": [ 22, 1, 11, 14 ],
            "saturday": [ 21, 31, 11, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'Punk, Metal & Nurse with Wound',
          source: 'bandcamp',
          src_string: 'https://bandcamp.com/EmbeddedPlayer/album=1519543028/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',
          href_string: 'http://keijihaino.bandcamp.com/album/watashi-dake',
          a_string: 'Watashi Dake? by Keiji Haino',
          rule: {
            "monday": [ 21, 31, 11, 13 ],
            "tuesday": [ 25, 4, 14, 17 ],
            "wednesday": [ 24, 3, 13, 16 ],
            "thursday": [ 23, 2, 12, 15 ],
            "saturday": [ 22, 1, 11, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('october_musics_id_seq', (SELECT MAX(id) FROM october_musics));");
    });
};
