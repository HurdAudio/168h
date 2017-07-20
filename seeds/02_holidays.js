'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('holidays').del()
    .then(function () {
      // Inserts seed entries
      return knex('holidays').insert([
        {
          id: 1,
          user_id: 1,
          name: 'New Year\'s Day',
          color: '#ffd376',
          picture: './img/holidays/newyears01.jpg',
          day_of: new Date('2018-01-01'),
          is_annual: true,
          art_override: true,
          music_override: true,
          override_content: {
            "img_paths": "[ './img/holidays/newyears02.jpg', './img/holidays/newyears03.jpg', './img/holidays/newyears04.jpg', './img/holidays/newyears05.jpg', './img/holidays/newyears06.jpg', './img/holidays/newyears07.jpg', './img/holidays/newyears08.jpg', './img/holidays/newyears09.jpg', './img/holidays/newyears10.jpg', './img/holidays/newyears11.jpg', './img/holidays/newyears12.jpg', './img/holidays/newyears13.jpg', './img/holidays/newyears14.jpg', './img/holidays/newyears15.jpg', './img/holidays/newyears16.jpg', './img/holidays/newyears17.jpg', './img/holidays/newyears18.jpg', './img/holidays/newyears19.jpg', './img/holidays/newyears20.jpg', './img/holidays/newyears21.jpg', './img/holidays/newyears22.jpg', './img/holidays/newyears23.jpg' ]",
            "titles": "[ 'New Year\'s Days of the Teahouse Ogi-ya', 'Merry Christmas & Happy New Year', 'New Year\'s Greeting Card', 'New Year\'s Greeting Card', 'Pupils, bringing thank to Stroganov, on the occasion of New Year', 'Courtesan\`s Entourage at New Year\`s Festival', 'Old and New Year. Cover-Table Calendar for 1905', 'A New Year\'s Nocturne, New York', 'Happy New Year', 'Happy New Year', 'Happy New Year', 'Happy New Year', 'Happy New Year', 'Happy New Year', 'Father Frost Carries the New-Year Tree', 'Father Frost Carries the New-Year Tree', 'New Years New Moon', 'Crane, Turtle and Pine - New Year\'s Greeting Card', 'Planting the New Year\'s Pine', 'New Year Greetings', 'New Year\'s Day Swimmers', 'NEW YEAR\'S SNOW' ]",
            "artists": "[ 'Katsushika Hokusai', 'M.C. Escher', 'M.C. Escher', 'M.C. Escher', 'Orest Kiprensky', 'Kitagawa Utamaro', 'Konstantin Somov', 'Childe Hassam', 'Raphael Kirchner', 'Raphael Kirchner', 'Raphael Kirchner', 'Raphael Kirchner', 'Raphael Kirchner', 'Raphael Kirchner', 'Maria Primachenko', 'Maria Primachenko', 'Theodor Severin Kittelsen', 'Unichi Hiratsuka', 'Keisai Eisen', 'Jef Aerosol', 'Andreas Gursky', 'Eric Ravilious' ]",
            "years": "[ '1808 - 1812', '1961', '1947', '1949', '1804', '1782 - 1788', '1904', '1892', '1899', '1899', '1899', '1899', '1899', '1912', '1960', '1967', 'XIX-XX cent.', '1931', 'XIX cent.', '1986', '1988', '1938' ]",
            "sources": "[ 'bandcamp', 'bandcamp' ]",
            "src_strings": "[ 'https://bandcamp.com/EmbeddedPlayer/album=2780623605/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/', 'https://bandcamp.com/EmbeddedPlayer/album=753061970/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/' ]",
            "href_strings": "[ 'http://matthewryanandhammock.bandcamp.com/album/like-new-years-day', 'http://mattaddis.bandcamp.com/album/new-years-day-e-p' ]",
            "a_strings": "[ 'Like New Year\'s Day by Matthew Ryan & Hammock', 'New Year\'s Day (E.P.) by matt addis' ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          name: 'Martin Luther King Day',
          color: '#87654B',
          picture: '',
          day_of: new Date('2018-01-15'),
          is_annual: false,
          rule: "['january', 'monday', 3 ]",
          art_override: true,
          music_override: true,
          override_content: {
            "img_paths": "[]",
            "titles": "[]",
            "artists": "[]",
            "years": "[]",
            "sources": "[]",
            "src_strings": "[]",
            "a_strings": "[]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('holidays_id_seq', (SELECT MAX(id) FROM holidays));");
    });
};
