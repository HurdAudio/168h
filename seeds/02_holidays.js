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
          picture: './img/holidays/mlk.jpg',
          day_of: new Date('2018-01-15'),
          is_annual: false,
          rule: "['january', 'monday', 3 ]",
          art_override: true,
          music_override: true,
          override_content: {
            "img_paths": "[ './img/holidays/mkl01.jpg', './img/holidays/mkl02.jpg' ]",
            "titles": "[ 'Illustration from \'Elegie pour Martin Luther King\'', 'Hommage à Martin Luther King' ]",
            "artists": "[ 'Alfred Manessier', 'Alfred Manessier' ]",
            "years": "[ '1978', '1968' ]",
            "sources": "[ 'bandcamp' ]",
            "src_strings": "[ 'https://bandcamp.com/EmbeddedPlayer/album=1616135635/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/' ]",
            "href_strings": "[ 'http://youngpeakz.bandcamp.com/album/the-martin-luther-king' ]",
            "a_strings": "[ 'THE MARTIN LUTHER KING by PEAKZ' ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          name: 'Groundhog Day',
          color: '#5E3715',
          picture: './img/holidays/Groundhog-Day.jpg',
          day_of: new Date('2018-02-02'),
          is_annual: true,
          rule: null,
          art_override: false,
          music_override: false,
          override_content: null,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          name: 'Valentine\'s Day',
          color: '#ff0000',
          picture: './img/holidays/valentine01.jpg',
          day_of: new Date('2018-02-14'),
          is_annual: true,
          rule: null,
          art_override: true,
          music_override: false,
          override_content: {
            "img_paths": "[ './img/holidays/valentine02.jpg', './img/holidays/valentine03.jpg', './img/holidays/valentine04.jpg', './img/holidays/valentine05.jpg', './img/holidays/valentine06.jpg', './img/holidays/valentine07.jpg', './img/holidays/valentine08.jpg', './img/holidays/valentine09.jpg', './img/holidays/valentine10.jpg', './img/holidays/valentine11.jpg', './img/holidays/valentine12.jpg', './img/holidays/valentine13.jpg', './img/holidays/valentine14.jpg', './img/holidays/valentine15.jpg', './img/holidays/valentine16.jpg', './img/holidays/valentine17.jpg', './img/holidays/valentine18.jpg', './img/holidays/valentine19.jpg', './img/holidays/valentine20.jpg', './img/holidays/valentine21.jpg', './img/holidays/valentine22.jpg', './img/holidays/valentine23.jpg', './img/holidays/valentine24.jpg', './img/holidays/valentine25.jpg', './img/holidays/valentine26.jpg', './img/holidays/valentine27.jpg', './img/holidays/valentine28.jpg', './img/holidays/valentine29.jpg', './img/holidays/valentine30.jpg', './img/holidays/valentine31.jpg', './img/holidays/valentine32.jpg', './img/holidays/valentine33.jpg', './img/holidays/valentine34.jpg', './img/holidays/valentine35.jpg', './img/holidays/valentine36.jpg', './img/holidays/valentine37.jpg', './img/holidays/valentine38.jpg', './img/holidays/valentine39.jpg', './img/holidays/valentine40.jpg' ]",
            "titles": "[ 'Here we make love', 'Love', 'The Happy Lovers', 'The Confession of Love', 'The Happy Lovers', 'Lovers', 'Love Song by the New Moon', 'The lover', 'A green tree with lovers', 'Blue Lovers', 'Green Lovers', 'Bouquet with flying lovers', 'Grey Lovers', 'Lovers', 'Lovers in pink', 'Lovers in green', 'Lovers in the sky of Nice', 'Lovers near isba', 'Lovers in the Lilacs', 'Lovers under lilies', 'Lovers\' sky', 'Lovers over Sant Paul', 'Lovers near Bridge', 'Lovers Seated at the Foot of a Willow Tree', 'Observatory Time: The Lovers', 'Two Lovers, Arles (Fragment)', 'The Temple of Love', 'Lovers', 'Long Live Love', 'Two Nudes (Lovers)', 'After love', 'Lovers (The Hembusses)', 'Lovers (The kiss)', 'Love Thoughts', 'Chosen Love', 'Lovers', 'The Sun Embracing the Lover', 'The Lovers', 'Eternal Love' ]",
            "artists": "[ 'Paul Gauguin', 'Gustav Klimt', 'Gustave Courbet', 'Jean-Honore Fragonard', 'Jean-Honore Fragonard', 'Fernand Leger', 'Paul Klee', 'Paul Klee', 'Marc Chagall', 'Marc Chagall', 'Marc Chagall', 'Marc Chagall', 'Marc Chagall', 'Marc Chagall', 'Marc Chagall', 'Marc Chagall', 'Marc Chagall', 'Marc Chagall', 'Marc Chagall', 'Marc Chagall', 'Marc Chagall', 'Marc Chagall', 'Marc Chagall', 'Camille Pissarro', 'Man Ray', 'Vincent van Gogh', 'Edward Burne-Jones', 'Pablo Picasso', 'Max Ernst', 'Oskar Kokoschka', 'Marcel Duchamp', 'Ernst Ludwig Kirchner', 'Ernst Ludwig Kirchner', 'Raphael Kirchner', 'Robert Indiana', 'Otto Mueller', 'Joan Miro', 'Corneille', 'Wojciech Siudmak' ]",
            "years": "[ '1893', '1895', '1844', '1771', '1760 - 1765', 'XIX-XX cent.', '1939', '1938', '1980', '1914', '1915', '1947', '1917', 'XIX-XX cent.', '1916', '1917', '1964', '1980', '1930', '1925', '1957', '1970', '1948', '1901', '1936', '1888', 'XIX cent.', '1919', '1923', 'XIX-XX cent.', '1968', '1932', '1930', '1900', '1995', 'XIX-XX cent.', '1952', '1974' ,'?' ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          name: 'President\'s Day',
          color: '#BD0B0B',
          picture: './img/holidays/presidentsday.jpg',
          day_of: new Date('2018-02-19'),
          is_annual: false,
          rule: "['february', 'monday', 3 ]",
          art_override: false,
          music_override: false,
          override_content: null,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          name: 'Clean Out Your Computer Day',
          color: '#B3EDB2',
          picture: './img/holidays/cleancomputer.jpg',
          day_of: new Date('2018-02-12'),
          is_annual: false,
          rule: "['february', 'monday', 2 ]",
          art_override: false,
          music_override: false,
          override_content: null,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('holidays_id_seq', (SELECT MAX(id) FROM holidays));");
    });
};
