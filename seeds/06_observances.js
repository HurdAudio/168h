'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('observances').del()
    .then(function () {
      // Inserts seed entries
      return knex('observances').insert([
        {
          id: 1,
          user_id: 1,
          name: 'Hari Kunzru (author), born 1969',
          color: '#95A9A2',
          picture: './img/authors/harikunzru.jpg',
          day_of: new Date ('1969-01-01'),
          is_annual: true,
          art_override: false,
          music_override: false,
          override_content: null,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          name: 'Umberto Eco (author), born 1932',
          color: '#013800',
          picture: './img/authors/umbertoeco.jpg',
          day_of: new Date ('1932-01-05'),
          is_annual: true,
          art_override: false,
          music_override: false,
          override_content: null,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          name: 'Myra Melford (pianist/composer), born 1957',
          color: '#772700',
          picture: './img/musicians/myramelford.jpg',
          day_of: new Date ('1957-01-05'),
          is_annual: true,
          art_override: false,
          music_override: true,
          override_content: {
            "sources": "[ 'bandcamp', 'bandcamp', 'bandcamp', 'bandcamp', 'bandcamp', 'bandcamp', 'bandcamp' ]",
            "src_strings": "[ 'http://bandcamp.com/EmbeddedPlayer/album=513818594/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/album=1047124071/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'http://bandcamp.com/EmbeddedPlayer/album=2248117061/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/album=24344286/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/album=3367370805/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/album=115737162/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/album=3815170227/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/' ]",
            "href_strings": "[ 'http://firehouse12records.com/album/life-carries-me-this-way', 'http://myramelford.bandcamp.com/album/myra-melford-live-at-the-stone-ep', 'http://firehouse12records.com/album/the-whole-tree-gone', 'http://kalmanovitch.bandcamp.com/album/heart-mountain-myra-melford-tanya-kalmanovitch', 'http://stevenlugerner.bandcamp.com/album/for-we-have-heard-2', 'http://stevenlugerner.bandcamp.com/album/these-are-the-words', 'http://babel-label.bandcamp.com/album/big-air' ]",
            "a_strings": "[ 'Life Carries Me This Way by Myra Melford', 'Myra Melford Live at The Stone EP by Myra Melford', 'The Whole Tree Gone by Myra Melford\'s Be Bread', 'Heart Mountain // Myra Melford + Tanya Kalmanovitch by Myra Melford and Tanya Kalmanovitch', 'For We Have Heard by Steven Lugerner, Darren Johnston, Myra Melford, Matt Wilson', 'These Are The Words by Steven Lugerner, Darren Johnston, Myra Melford, Matt Wilson', 'BIG AIR by CHRIS BATCHELOR &amp; STEVE BUCKLEY &amp; MYRA MELFORD &amp; OREN MARSHALL &amp; JIM BLACK' ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          name: 'Paul Dresher (guitarist/composer), born 1951',
          color: '#FFFED6',
          picture: './img/musicians/pauldresher.jpg',
          day_of: new Date ('1951-01-08'),
          is_annual: true,
          art_override: false,
          music_override: true,
          override_content: {
            "sources": "[ 'bandcamp', 'bandcamp', 'bandcamp', 'bandcamp', 'bandcamp', 'bandcamp', 'bandcamp', 'bandcamp', 'bandcamp', 'bandcamp', 'bandcamp', 'bandcamp' ]",
            "src_strings": "[ 'https://bandcamp.com/EmbeddedPlayer/album=3898641133/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/album=3832029168/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/album=4097795533/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/album=1819061201/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/album=349671626/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/album=2501753800/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/album=3388073217/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/album=1869433139/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/album=1635723857/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/album=2083774422/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/album=478099629/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/album=910320182/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/' ]",
            "href_strings": "[ 'http://minmax.bandcamp.com/album/slipping-glimpse', 'http://minmax.bandcamp.com/album/the-tyrant-cd', 'http://minmax.bandcamp.com/album/light-moves', 'http://minmax.bandcamp.com/album/dark-blue-circumstance', 'http://minmax.bandcamp.com/album/sound-stage', 'http://minmax.bandcamp.com/album/the-gates', 'http://minmax.bandcamp.com/album/banana-humberto', 'http://minmax.bandcamp.com/album/opposites-attract', 'http://minmax.bandcamp.com/album/pioneer', 'http://minmax.bandcamp.com/album/slow-fire', 'http://minmax.bandcamp.com/album/this-same-temple', 'http://minmax.bandcamp.com/album/power-failure' ]",
            "a_strings": "[ 'Slipping Glimpse by music composed by Paul Dresher', 'The Tyrant CD by Paul Dresher, John Duykers (tenor)', 'Light Moves by music composed by Paul Dresher', 'Dark Blue Circumstance by Paul Dresher Ensemble', 'Sound Stage by Conceived and Composed by Paul Dresher', 'The Gates by composed by Paul Dresher', 'Banana Humberto by Terry Riley with the Paul Dresher Ensemble', 'Opposites Attract by Paul Dresher &amp; Ned Rothenberg', 'Pioneer by Paul Dresher', 'Slow Fire by Paul Dresher Ensemble with Rinde Eckert', 'This Same Temple by Paul Dresher Ensemble', 'Power Failure by Paul Dresher Ensemble' ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          name: 'David Lang (composer), born 1957',
          color: '#2D1D27',
          picture: './img/musicians/davidlang.jpg',
          day_of: new Date ('1957-01-08'),
          is_annual: true,
          art_override: false,
          music_override: true,
          override_content: {
            "sources": "[ 'bandcamp', 'bandcamp', 'bandcamp', 'bandcamp', 'bandcamp', 'bandcamp', 'bandcamp', 'bandcamp', 'bandcamp', 'bandcamp', 'bandcamp', 'bandcamp', 'bandcamp', 'bandcamp' ]",
            "src_strings": "[ 'https://bandcamp.com/EmbeddedPlayer/album=2755599631/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/track=3039488694/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/album=4131036755/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/track=542031401/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/album=2611713493/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/album=721122785/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/album=3359809677/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/album=1119757581/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/album=1876800928/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/album=2285693996/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/album=377560238/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/album=3300116832/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/track=1764449857/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/album=3969406589/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/' ]",
            "href_strings": "[ 'http://davidlangmusic.bandcamp.com/album/thorn', 'http://davidlangmusic.bandcamp.com/track/forced-march', 'http://davidlangmusic.bandcamp.com/album/the-national-anthems', 'http://davidlangmusic.bandcamp.com/track/miracle-ear', 'http://davidlangmusic.bandcamp.com/album/the-difficulty-of-crossing-a-field', 'http://davidlangmusic.bandcamp.com/album/death-speaks', 'http://davidlangmusic.bandcamp.com/album/this-was-written-by-hand', 'http://davidlangmusic.bandcamp.com/album/elevated', 'http://davidlangmusic.bandcamp.com/album/love-fail', 'http://davidlangmusic.bandcamp.com/album/the-woodmans', 'http://davidlangmusic.bandcamp.com/album/child', 'http://davidlangmusic.bandcamp.com/album/the-passing-measures', 'http://davidlangmusic.bandcamp.com/track/when-we-were-children', 'http://davidlangmusic.bandcamp.com/album/untitled' ]",
            "a_strings": "[ 'thorn by Molly Barth', 'forced march by Crash Ensemble', 'the national anthems by David Lang &amp; L.A. Master Chorale', 'miracle ear by David Lang', 'the difficulty of crossing a field by David Lang, Mac Wellman, Harlem String Quartet, Beverly O&#39;Regan Thiele', 'death speaks by David Lang', 'this was written by hand by David Lang', 'elevated by David Lang', 'love fail by David Lang ft. Anonymous 4', 'The Woodmans by David Lang', 'child by David Lang', 'the passing measures by David Lang', 'when we were children by David Lang', 'Untitled by David Lang' ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          name: 'Morton Feldman (composer), born 1926',
          color: '#D4D4D4',
          picture: './img/musicians/mortonfeldman.jpg',
          day_of: new Date ('1926-01-12'),
          is_annual: true,
          art_override: false,
          music_override: false,
          override_content: null,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          name: 'Haruki Murakami (author), born 1949',
          color: '#365CCB',
          picture: './img/authors/harukimurakami.jpg',
          day_of: new Date ('1949-01-12'),
          is_annual: true,
          art_override: false,
          music_override: false,
          override_content: null,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          name: 'Martin Irigoyen (guitarist/composer), born 1977',
          color: '#4FB9B4',
          picture: './img/musicians/MartinIrigoyen.jpg',
          day_of: new Date ('1977-01-14'),
          is_annual: true,
          art_override: false,
          music_override: false,
          override_content: null,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          name: 'Robert Filliou (artist), born 1926',
          color: '#747474',
          picture: './img/artists/RobertFilliou.jpg',
          day_of: new Date ('1926-01-17'),
          is_annual: true,
          art_override: true,
          music_override: false,
          override_content: {
            "img_paths": "[ '.img/artists/filliou01.jpg', '.img/artists/filliou02.jpg', '.img/artists/filliou03.jpg' ]",
            "titles": "[ 'Main d\'artiste', 'Raining Cats and Dogs', 'Musique télépathique n° 5' ]",
            "artists": "[ 'Robert Filliou', 'Robert Filliou', 'Robert Filliou' ]",
            "years": "[ '1967', '1969', '1978' ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          name: 'Edward Feigenbaum (computer scientist), born 1936',
          color: '#B5ABAF',
          picture: './img/maths/EdwardFeigenbaum.jpg',
          day_of: new Date ('1936-01-20'),
          is_annual: true,
          art_override: false,
          music_override: false,
          override_content: null,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          name: 'Antonio Gramsci (communist/theorist), born 1891',
          color: '#F17D71',
          picture: './img/dissent/antoniogransci.png',
          day_of: new Date ('1891-01-22'),
          is_annual: true,
          art_override: false,
          music_override: false,
          override_content: null,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          name: 'John Luther Adams (composer), born 1953',
          color: '#0F89DA',
          picture: './img/musicians/johnlutheradams.jpg',
          day_of: new Date ('1953-01-23'),
          is_annual: true,
          art_override: false,
          music_override: true,
          override_content: {
            "sources": "[ 'bandcamp', 'bandcamp', 'bandcamp', 'bandcamp', 'bandcamp' ]",
            "src_strings": "[ 'https://bandcamp.com/EmbeddedPlayer/album=2951262651/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/album=2278108239/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/album=3225313691/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/album=2594763072/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/album=1247105358/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/' ]",
            "href_strings": "[ 'http://johnlutheradams.bandcamp.com/album/canticles-of-the-holy-wind', 'http://johnlutheradams.bandcamp.com/album/ilimaq', 'http://johnlutheradams.bandcamp.com/album/become-ocean', 'http://johnlutheradams.bandcamp.com/album/inuksuit', 'http://johnlutheradams.bandcamp.com/album/the-mathematics-of-resonant-bodies' ]",
            "a_strings": "[ 'Canticles of the Holy Wind by John Luther Adams &amp; The Crossing', 'Ilimaq by John Luther Adams &amp; Glenn Kotche', 'Become Ocean by John Luther Adams', 'Inuksuit by John Luther Adams', 'The Mathematics of Resonant Bodies by John Luther Adams' ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          name: 'Luigi Nono (composer), born 1924',
          color: '#3F3F3D',
          picture: './img/musicians/luiginono.jpg',
          day_of: new Date ('1924-01-29'),
          is_annual: true,
          art_override: false,
          music_override: false,
          override_content: null,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          name: 'Ahmed Abdul-Malik (bassist/oud), born 1927',
          color: '#75332E',
          picture: './img/musicians/ahmedabdulmalik.jpg',
          day_of: new Date ('1927-01-30'),
          is_annual: true,
          art_override: false,
          music_override: false,
          override_content: null,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          name: 'Derek Bailey (guitar), born 1930',
          color: '#747474',
          picture: './img/musicians/derekbailey.png',
          day_of: new Date ('1930-01-30'),
          is_annual: true,
          art_override: false,
          music_override: true,
          override_content: {
            "sources": "[ 'bandcamp', 'bandcamp', 'bandcamp', 'bandcamp', 'bandcamp', 'bandcamp' ]",
            "src_strings": "[ 'https://bandcamp.com/EmbeddedPlayer/album=3095361778/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/album=3456138416/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/album=4026532112/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/album=884792575/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/album=910494640/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/album=3784386760/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/' ]",
            "href_strings": "[ 'http://rectangle-records.bandcamp.com/album/this-guitar', 'http://scatterarchive.bandcamp.com/album/drop-me-off-at-96th', 'http://brucesfingers.bandcamp.com/album/the-complete-15th-august-2001', 'http://pantonmusic.bandcamp.com/album/derek-bailey-plus-one-music-ensemble', 'http://ictusrecords.bandcamp.com/album/drops', 'http://johnbutcher1.bandcamp.com/album/scrutables' ]",
            "a_strings": "[ 'This Guitar by Derek Bailey', 'drop me off at 96th by Derek Bailey', 'The Complete 15th August 2001 by Derek Bailey &amp; Simon H. Fell', 'Derek Bailey Plus One Music Ensemble by Derek Bailey and David Panton', 'Drops by Andrea Centazzo and Derek Bailey', 'SCRUTABLES by Derek Bailey, John Butcher &amp; Gino Robair' ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('observances_id_seq', (SELECT MAX(id) FROM observances));");
    });
};
