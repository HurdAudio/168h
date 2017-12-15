'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('april_arts').del()
    .then(function () {
      // Inserts seed entries
      return knex('april_arts').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/america-baseball.jpg',
          title: 'America (Baseball)',
          artist: 'R. B. Kitaj',
          year: 'XX - XXI cent.',
          rule: {
            "monday": [ 15, 6, 12, 18 ],
            "tuesday": [ 30, 5, 11, 17 ],
            "wednesday": [ 29, 4, 10, 16 ],
            "thursday": [ 28, 3, 9, 15 ],
            "friday": [ 27, 2, 8, 14 ],
            "saturday": [ 26, 1, 7, 13 ],
            "sunday": [ 1, 7, 13, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/raggedy-ann-with-baseball-1971.jpg',
          title: 'Raggedy Ann with Baseball',
          artist: 'Charles Bell',
          year: '1971',
          rule: {
            "monday": [ 1, 7, 13, 19 ],
            "tuesday": [ 15, 6, 12, 18 ],
            "wednesday": [ 30, 5, 11, 17 ],
            "thursday": [ 29, 4, 10, 16],
            "friday": [ 28, 3, 9, 15 ],
            "saturday": [ 27, 2, 8, 14 ],
            "sunday": [ 26, 1, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/baseball-vs-progress.jpg',
          title: 'Baseball vs Progress',
          artist: 'Norman Rockwell',
          year: 'XX cent.',
          rule: {
            "monday": [ 26, 1, 7, 13 ],
            "tuesday": [ 1, 7, 13, 19 ],
            "wednesday": [ 15, 6, 12, 18 ],
            "thursday": [ 30, 5, 11, 17],
            "friday": [ 29, 4, 10, 16 ],
            "saturday": [ 28, 3, 9, 15 ],
            "sunday": [ 27, 2, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/manzanar-baseball-1943.jpg',
          title: 'Manzanar Baseball',
          artist: 'Ansel Adams',
          year: '1943',
          rule: {
            "monday": [ 27, 2, 8, 14 ],
            "tuesday": [ 26, 1, 7, 13 ],
            "wednesday": [ 1, 7, 13, 19 ],
            "thursday": [ 15, 6, 12, 18],
            "friday": [ 30, 5, 11, 17 ],
            "saturday": [ 29, 4, 10, 16 ],
            "sunday": [ 28, 3, 9, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/baseball.jpg',
          title: 'Baseball',
          artist: 'Hiro Yamagata',
          year: 'XX cent.',
          rule: {
            "monday": [ 28, 3, 9, 15 ],
            "tuesday": [ 27, 2, 8, 14 ],
            "wednesday": [ 26, 1, 7, 13 ],
            "thursday": [ 1, 7, 13, 19],
            "friday": [ 15, 6, 12, 18 ],
            "saturday": [ 30, 5, 11, 17 ],
            "sunday": [ 29, 4, 10, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/baseball-players-practicing-1875.jpg',
          title: 'Baseball Players Practicing',
          artist: 'Thomas Eakins',
          year: '1875',
          rule: {
            "monday": [ 29, 4, 10, 16 ],
            "tuesday": [ 28, 3, 9, 15 ],
            "wednesday": [ 27, 2, 8, 14 ],
            "thursday": [ 26, 1, 7, 13 ],
            "friday": [ 1, 7, 13, 19 ],
            "saturday": [ 15, 6, 12, 18 ],
            "sunday": [ 30, 5, 11, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/folk-art-american-flag-and-baseball-mitt-garry-gay.jpg',
          title: 'Folk Art American Flag And Baseball Mitt',
          artist: 'Garry Gay',
          year: 'XX cent.',
          rule: {
            "monday": [ 30, 6, 12, 18 ],
            "tuesday": [ 30, 5, 11, 17 ],
            "wednesday": [ 29, 4, 10, 16 ],
            "thursday": [ 28, 3, 9, 15 ],
            "friday": [ 27, 2, 8, 14 ],
            "saturday": [ 2, 8, 14, 20 ],
            "sunday": [ 16, 7, 13, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/holland-gallery-alex-rodriguez-steven-baseball-art.jpeg',
          title: 'Alex Rodriguez Baseball',
          artist: 'Stephen Holland',
          year: 'XXI cent.',
          rule: {
            "monday": [ 16, 7, 13, 19 ],
            "tuesday": [ 30, 6, 12, 18 ],
            "wednesday": [ 30, 5, 11, 17 ],
            "thursday": [ 29, 4, 10, 16 ],
            "friday": [ 28, 3, 9, 15 ],
            "saturday": [ 27, 2, 8, 14 ],
            "sunday": [ 2, 8, 14, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/american-baseball-garry-gay.jpg',
          title: 'American Baseball',
          artist: 'Garry Gay',
          year: 'XX - XXI Cent.',
          rule: {
            "monday": [ 2, 8, 14, 20 ],
            "tuesday": [ 16, 7, 13, 19 ],
            "wednesday": [ 30, 6, 12, 18 ],
            "thursday": [ 30, 5, 11, 17 ],
            "friday": [ 29, 4, 10, 16 ],
            "saturday": [ 28, 3, 9, 15 ],
            "sunday": [ 27, 2, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/28f0098012fff59d1d91df64b6713aa1--dodgers-baseball-baseball-players.jpg',
          title: 'Jackie Robinson',
          artist: 'Graig Kreindler',
          year: 'XX - XXI Cent.',
          rule: {
            "monday": [ 27, 2, 8, 14 ],
            "tuesday": [ 2, 8, 14, 20 ],
            "wednesday": [ 16, 7, 13, 19 ],
            "thursday": [ 30, 6, 12, 18 ],
            "friday": [ 30, 5, 11, 17 ],
            "saturday": [ 29, 4, 10, 16 ],
            "sunday": [ 28, 3, 9, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/sketch-CWS_9bfddcca-8e4d-4430-84d8-d93cfb43f4ec_grande.jpg',
          title: 'Guaranteed Rate Field',
          artist: 'S. Preston',
          year: '2017',
          rule: {
            "monday": [ 28, 3, 9, 15 ],
            "tuesday": [ 27, 2, 8, 14 ],
            "wednesday": [ 2, 8, 14, 20 ],
            "thursday": [ 16, 7, 13, 19 ],
            "friday": [ 30, 6, 12, 18 ],
            "saturday": [ 30, 5, 11, 17 ],
            "sunday": [ 29, 4, 10, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/crosley10951.jpg',
          title: 'Crosley Field, Cincinnati',
          artist: 'Historical Photograph',
          year: 'xx Cent.',
          rule: {
            "monday": [ 29, 4, 10, 16 ],
            "tuesday": [ 28, 3, 9, 15 ],
            "wednesday": [ 27, 2, 8, 14 ],
            "thursday": [ 2, 8, 14, 20 ],
            "friday": [ 16, 7, 13, 19 ],
            "saturday": [ 30, 6, 12, 18 ],
            "sunday": [ 30, 5, 11, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/il_fullxfull.386018171_nznr_05d79c35-9ac2-4cb9-b5fe-4f346c852fec_grande.jpeg',
          title: 'Chicago White Sox Canvas',
          artist: 'Holy Cow Canvas Studios',
          year: 'xx - xxi Cent.',
          rule: {
            "monday": [ 30, 5, 11, 17 ],
            "tuesday": [ 29, 4, 10, 16 ],
            "wednesday": [ 28, 3, 9, 15 ],
            "thursday": [ 27, 2, 8, 14 ],
            "friday": [ 2, 8, 14, 20 ],
            "saturday": [ 16, 7, 13, 19 ],
            "sunday": [ 1, 6, 12, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/pointillism_2005_chicago_white_sox_world_series_by_negativesanction-d4nthm5.png',
          title: 'Pointillism 2005 Chicago White Sox World Series',
          artist: 'NegativeSanction',
          year: '2012 - 2017',
          rule: {
            "monday": [ 2, 7, 13, 19 ],
            "tuesday": [ 1, 5, 12, 18 ],
            "wednesday": [ 30, 5, 11, 17 ],
            "thursday": [ 29, 4, 10, 16 ],
            "friday": [ 28, 3, 9, 15 ],
            "saturday": [ 3, 9, 15, 21 ],
            "sunday": [ 17, 8, 14, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/chicago-white-sox-us-cellular-field-flag-digitally-painted-david-haskett.jpg',
          title: 'Chicago White Sox Us Cellular Field Flag',
          artist: 'David Haskett',
          year: '2015',
          rule: {
            "monday": [ 17, 8, 14, 20 ],
            "tuesday": [ 2, 7, 13, 19 ],
            "wednesday": [ 1, 5, 12, 18 ],
            "thursday": [ 30, 5, 11, 17 ],
            "friday": [ 29, 4, 10, 16 ],
            "saturday": [ 28, 3, 9, 15 ],
            "sunday": [ 3, 9, 15, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/pic_mia_marlins_park.jpg',
          title: 'Minimalist Marlins Park Poster Variant 1',
          artist: 'S. Preston',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 3, 9, 15, 21 ],
            "tuesday": [ 17, 8, 14, 20 ],
            "wednesday": [ 2, 7, 13, 19 ],
            "thursday": [ 1, 5, 21, 18 ],
            "friday": [ 30, 5, 11, 17 ],
            "saturday": [ 29, 4, 10, 16 ],
            "sunday": [ 28, 3, 9, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/giancarlo-stanton-miami-marlins-pixel-art-3-joe-hamilton.jpg',
          title: 'Giancarlo Stanton Miami Marlins Pixel Art',
          artist: 'Joe Hamilton',
          year: '2017',
          rule: {
            "monday": [ 28, 3, 9, 15 ],
            "tuesday": [ 3, 9, 15, 21 ],
            "wednesday": [ 17, 8, 14, 20 ],
            "thursday": [ 2, 7, 13, 19 ],
            "friday": [ 1, 5, 21, 18 ],
            "saturday": [ 30, 5, 11, 17 ],
            "sunday": [ 29, 4, 10, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/7a119829143321.55e622eeb2d7f.png',
          title: 'Dee Gordon / Miami Marlins',
          artist: 'Jose Maria Ruiz',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 29, 4, 10, 16 ],
            "tuesday": [ 28, 3, 9, 15 ],
            "wednesday": [ 3, 9, 15, 21 ],
            "thursday": [ 17, 8, 14, 20 ],
            "friday": [ 2, 7, 13, 19 ],
            "saturday": [ 1, 5, 21, 18 ],
            "sunday": [ 30, 5, 11, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/il_570xN.638270473_fxy9.jpg',
          title: 'Miami Marlins Sugar Skull',
          artist: 'MYantz',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 30, 5, 11, 17 ],
            "tuesday": [ 29, 4, 10, 16 ],
            "wednesday": [ 28, 3, 9, 15 ],
            "thursday": [ 3, 9, 15, 21 ],
            "friday": [ 17, 8, 14, 20 ],
            "saturday": [ 2, 7, 13, 19 ],
            "sunday": [ 1, 5, 21, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/marlinshomerun.jpg',
          title: 'Marlins Home Run Sculpture',
          artist: 'Red Grooms',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 1, 5, 21, 18 ],
            "tuesday": [ 30, 5, 11, 17 ],
            "wednesday": [ 29, 4, 10, 16 ],
            "thursday": [ 28, 3, 9, 15 ],
            "friday": [ 3, 9, 14, 21 ],
            "saturday": [ 17, 8, 14, 20 ],
            "sunday": [ 2, 7, 13, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/il_340x270.973649198_2b43.jpg',
          title: 'Oakland Colliseum',
          artist: 'ArchiGRAPH',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 3, 8, 14, 20 ],
            "tuesday": [ 2, 6, 22, 19 ],
            "wednesday": [ 1, 6, 12, 18 ],
            "thursday": [ 30, 5, 11, 17 ],
            "friday": [ 29, 4, 10, 16 ],
            "saturday": [ 4, 10, 15, 22 ],
            "sunday": [ 18, 9, 15, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Elephant Man-east oakland.jpg',
          title: 'A\'s Artist',
          artist: 'RMA',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 18, 9, 15, 21 ],
            "tuesday": [ 3, 8, 14, 20 ],
            "wednesday": [ 2, 6, 22, 19 ],
            "thursday": [ 1, 6, 12, 18 ],
            "friday": [ 30, 5, 11, 17 ],
            "saturday": [ 29, 4, 10, 16 ],
            "sunday": [ 4, 10, 15, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/il_570xN.389675523_rdae.jpg',
          title: 'Oakland A\'s Painting',
          artist: 'Justin Patten',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 4, 10, 15, 22 ],
            "tuesday": [ 18, 9, 15, 21 ],
            "wednesday": [ 3, 8, 14, 20 ],
            "thursday": [ 2, 6, 22, 19 ],
            "friday": [ 1, 6, 12, 18 ],
            "saturday": [ 30, 5, 11, 17 ],
            "sunday": [ 29, 4, 10, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/As+on+deck+circle.jpeg',
          title: 'A\'s On Deck Circle',
          artist: 'Muneesh Jain',
          year: '2013',
          rule: {
            "monday": [ 29, 4, 10, 16 ],
            "tuesday": [ 4, 10, 15, 22 ],
            "wednesday": [ 18, 9, 15, 21 ],
            "thursday": [ 3, 8, 14, 20 ],
            "friday": [ 2, 6, 22, 19 ],
            "saturday": [ 1, 6, 12, 18 ],
            "sunday": [ 30, 5, 11, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Oakland-Athletics_01.jpg',
          title: 'Oakland Athletics Baseball',
          artist: 'Dowdle Folk Art',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 30, 5, 11, 17 ],
            "tuesday": [ 29, 4, 10, 16 ],
            "wednesday": [ 4, 10, 15, 22 ],
            "thursday": [ 18, 9, 15, 21 ],
            "friday": [ 3, 8, 14, 20 ],
            "saturday": [ 2, 6, 22, 19 ],
            "sunday": [ 1, 6, 12, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Truisilo_PNC_Park_p32_large.jpg',
          title: 'PNC Park',
          artist: 'Trusilo',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 1, 6, 12, 18 ],
            "tuesday": [ 30, 5, 11, 17 ],
            "wednesday": [ 29, 4, 10, 16 ],
            "thursday": [ 4, 10, 15, 22 ],
            "friday": [ 18, 9, 15, 21 ],
            "saturday": [ 3, 8, 14, 20 ],
            "sunday": [ 2, 6, 22, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/spring-sunset-from-the-roberto-clemente-bridge-joseph-heh.jpg',
          title: 'PNC Park Sunset From The Roberto Clemente Bridge, Pittsburgh, Pennsylvania, USA',
          artist: 'Joseph Heh',
          year: '2015',
          rule: {
            "monday": [ 2, 6, 22, 19 ],
            "tuesday": [ 1, 6, 12, 18 ],
            "wednesday": [ 30, 5, 11, 17 ],
            "thursday": [ 29, 4, 10, 16 ],
            "friday": [ 4, 10, 15, 22 ],
            "saturday": [ 18, 9, 15, 21 ],
            "sunday": [ 3, 8, 14, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Clemente.jpg',
          title: 'excerpted from: Clemente - Graphic Novel',
          artist: 'Wilfred Santiago',
          year: '2017',
          rule: {
            "monday": [ 4, 9, 15, 21 ],
            "tuesday": [ 3, 7, 23, 20 ],
            "wednesday": [ 2, 7, 13, 19 ],
            "thursday": [ 1, 6, 12, 18 ],
            "friday": [ 30, 5, 11, 17 ],
            "saturday": [ 5, 11, 16, 23 ],
            "sunday": [ 19, 10, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/lsp-ppbm60dd.jpg',
          title: 'The Road to the 1960 World Series',
          artist: 'Daniel Duffy',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 19, 10, 16, 22 ],
            "tuesday": [ 4, 9, 15, 21 ],
            "wednesday": [ 3, 7, 23, 20 ],
            "thursday": [ 2, 7, 13, 19 ],
            "friday": [ 1, 6, 12, 18 ],
            "saturday": [ 30, 5, 11, 17 ],
            "sunday": [ 5, 11, 16, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Baseball painting Honus Wagner Pittsburgh Pirates.jpg',
          title: 'THE FLYING DUTCHMAN',
          artist: 'John Robertson',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 5, 11, 16, 23 ],
            "tuesday": [ 19, 10, 16, 22 ],
            "wednesday": [ 4, 9, 15, 21 ],
            "thursday": [ 3, 7, 23, 20 ],
            "friday": [ 2, 7, 13, 19 ],
            "saturday": [ 1, 6, 12, 18 ],
            "sunday": [ 30, 5, 11, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/6732492143_b84b2b6617.jpg',
          title: 'The Audience',
          artist: 'Michael Snow',
          year: '1989',
          rule: {
            "monday": [ 30, 5, 11, 17 ],
            "tuesday": [ 5, 11, 16, 23 ],
            "wednesday": [ 19, 10, 16, 22 ],
            "thursday": [ 4, 9, 15, 21 ],
            "friday": [ 3, 7, 23, 20 ],
            "saturday": [ 2, 7, 13, 19 ],
            "sunday": [ 1, 6, 12, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/jays.jpg',
          title: 'My Love/Hate Relationship with the Blue Jays\' Success',
          artist: 'unknown',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 1, 6, 12, 18 ],
            "tuesday": [ 30, 5, 11, 17 ],
            "wednesday": [ 5, 11, 16, 23 ],
            "thursday": [ 19, 10, 16, 22 ],
            "friday": [ 4, 9, 15, 21 ],
            "saturday": [ 3, 7, 23, 20 ],
            "sunday": [ 2, 7, 13, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Kennth-Lochhead-Top-o-the-9th-e1444413105840-803x603.jpg',
          title: 'Top of the 9th',
          artist: 'Kenneth Lochhead',
          year: 'xx Cent.',
          rule: {
            "monday": [ 2, 7, 13, 19 ],
            "tuesday": [ 1, 6, 12, 18 ],
            "wednesday": [ 30, 5, 11, 17 ],
            "thursday": [ 5, 11, 16, 23 ],
            "friday": [ 19, 10, 16, 22 ],
            "saturday": [ 4, 9, 15, 21 ],
            "sunday": [ 3, 7, 23, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/DavidPdone4.gif',
          title: 'David Price',
          artist: 'Chris Ripley',
          year: '2015',
          rule: {
            "monday": [ 3, 7, 23, 20 ],
            "tuesday": [ 2, 7, 13, 19 ],
            "wednesday": [ 1, 6, 12, 18 ],
            "thursday": [ 30, 5, 11, 17 ],
            "friday": [ 5, 11, 16, 23 ],
            "saturday": [ 19, 10, 16, 22 ],
            "sunday": [ 4, 9, 15, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/pillaraldsg5-300x236.gif',
          title: 'Jason Pillard',
          artist: 'Chris Ripley',
          year: '2016',
          rule: {
            "monday": [ 5, 10, 16, 22 ],
            "tuesday": [ 4, 8, 24, 21 ],
            "wednesday": [ 3, 8, 14, 20 ],
            "thursday": [ 2, 7, 13, 19 ],
            "friday": [ 1, 6, 12, 18 ],
            "saturday": [ 6, 12, 17, 24 ],
            "sunday": [ 20, 10, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/chase-field-2015-line-drawing-c-h-apperson.jpg',
          title: 'Chase Field 2015 Line Drawing',
          artist: 'C H Apperson',
          year: '2015',
          rule: {
            "monday": [ 20, 10, 17, 23 ],
            "tuesday": [ 5, 10, 16, 22 ],
            "wednesday": [ 4, 8, 24, 21 ],
            "thursday": [ 3, 8, 14, 20 ],
            "friday": [ 2, 7, 13, 19 ],
            "saturday": [ 1, 6, 12, 18 ],
            "sunday": [ 6, 12, 17, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/13690449_G.jpg',
          title: 'Chase Field',
          artist: 'unknown',
          year: '2017',
          rule: {
            "monday": [ 6, 12, 17, 24 ],
            "tuesday": [ 20, 10, 17, 23 ],
            "wednesday": [ 5, 10, 16, 22 ],
            "thursday": [ 4, 8, 24, 21 ],
            "friday": [ 3, 8, 14, 20 ],
            "saturday": [ 2, 7, 13, 19 ],
            "sunday": [ 1, 6, 12, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/310e39a77c37e89a4adffec980080079--baseball-art-arizona-diamondbacks.jpg',
          title: 'Paul Goldschmidt',
          artist: 'Behance',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 1, 6, 12, 18 ],
            "tuesday": [ 6, 12, 17, 24 ],
            "wednesday": [ 20, 10, 17, 23 ],
            "thursday": [ 5, 10, 16, 22 ],
            "friday": [ 4, 8, 24, 21 ],
            "saturday": [ 3, 8, 14, 20 ],
            "sunday": [ 2, 7, 13, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/671681606.jpg',
          title: 'Paul Goldschmidt #44 of the Arizona Diamondbacks bats against the Cleveland Indians',
          artist: 'Getty Images',
          year: '2016',
          rule: {
            "monday": [ 2, 7, 13, 19 ],
            "tuesday": [ 1, 6, 12, 18 ],
            "wednesday": [ 6, 12, 17, 24 ],
            "thursday": [ 20, 10, 17, 23 ],
            "friday": [ 5, 10, 16, 22 ],
            "saturday": [ 4, 8, 24, 21 ],
            "sunday": [ 3, 8, 14, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Arizona-Diamondbacks_01.jpg',
          title: 'Arizona Diamondbacks',
          artist: 'Dowdle',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 3, 8, 14, 20 ],
            "tuesday": [ 2, 7, 13, 19 ],
            "wednesday": [ 1, 6, 12, 18 ],
            "thursday": [ 6, 12, 17, 24 ],
            "friday": [ 20, 10, 17, 23 ],
            "saturday": [ 5, 10, 16, 22 ],
            "sunday": [ 4, 8, 24, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/hit-and-run-frozen-in-time-fine-art-photography.jpg',
          title: 'Hit And Run',
          artist: 'Frozen in Time Fine Art Photography',
          year: '2013',
          rule: {
            "monday": [ 4, 8, 24, 21 ],
            "tuesday": [ 3, 8, 14, 20 ],
            "wednesday": [ 2, 7, 13, 19 ],
            "thursday": [ 1, 6, 12, 18 ],
            "friday": [ 6, 12, 17, 24 ],
            "saturday": [ 20, 10, 17, 23 ],
            "sunday": [ 5, 10, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/pic_cle_progressive_field.jpg',
          title: 'VARIANT 1: TOOTHBRUSH LIGHTS',
          artist: 'S. Preston',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 6, 11, 17, 23 ],
            "tuesday": [ 5, 9, 25, 22 ],
            "wednesday": [ 4, 9, 14, 21 ],
            "thursday": [ 3, 8, 14, 20 ],
            "friday": [ 2, 7, 13, 19 ],
            "saturday": [ 7, 13, 18, 25 ],
            "sunday": [ 21, 11, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Cleveland_Indians_Grady_Sizemore_c409_large.jpg',
          title: 'Cleveland Indians Grady Sizemore',
          artist: 'Skyline Pictures',
          year: '2006',
          rule: {
            "monday": [ 21, 11, 18, 24 ],
            "tuesday": [ 6, 11, 17, 23 ],
            "wednesday": [ 5, 9, 25, 22 ],
            "thursday": [ 4, 9, 14, 21 ],
            "friday": [ 3, 8, 14, 20 ],
            "saturday": [ 2, 7, 13, 19 ],
            "sunday": [ 7, 13, 18, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/kluber-1-hitter-1-710x434.png',
          title: 'Corey Kluber 1-hitter Cleveland Indians',
          artist: 'unknown',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 7, 13, 18, 25 ],
            "tuesday": [ 21, 11, 18, 24 ],
            "wednesday": [ 6, 11, 17, 23 ],
            "thursday": [ 5, 9, 25, 22 ],
            "friday": [ 4, 9, 14, 21 ],
            "saturday": [ 3, 8, 14, 20 ],
            "sunday": [ 2, 7, 13, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/2a205ca2-3b66-46de-90a3-b493f2b9bafc_lg.jpeg',
          title: '1937 Bob Feller Cleveland Indians',
          artist: 'Acme Newspictures',
          year: '1937',
          rule: {
            "monday": [ 2, 7, 13, 19 ],
            "tuesday": [ 7, 13, 18, 25 ],
            "wednesday": [ 21, 11, 18, 24 ],
            "thursday": [ 6, 11, 17, 23 ],
            "friday": [ 5, 9, 25, 22 ],
            "saturday": [ 4, 9, 14, 21 ],
            "sunday": [ 3, 8, 14, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Citi Field Never Looked So Good  Mets Merized Online.jpg',
          title: 'Citi Field Never Looked So Good',
          artist: 'Mets Merized Online',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 3, 8, 14, 20 ],
            "tuesday": [ 2, 7, 13, 19 ],
            "wednesday": [ 7, 13, 18, 25 ],
            "thursday": [ 21, 11, 18, 24 ],
            "friday": [ 6, 11, 17, 23 ],
            "saturday": [ 5, 9, 25, 22 ],
            "sunday": [ 4, 9, 14, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/CitiField-Panorama-from-the-Back-Row-in-Centerfiel_art.jpg',
          title: 'Citi Field Panorama from the Back Row in Centerfield',
          artist: 'Augies Panoramas Online',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 4, 9, 14, 21 ],
            "tuesday": [ 3, 8, 14, 20 ],
            "wednesday": [ 2, 7, 13, 19 ],
            "thursday": [ 7, 13, 18, 25 ],
            "friday": [ 21, 11, 18, 24 ],
            "saturday": [ 6, 11, 17, 23 ],
            "sunday": [ 5, 9, 25, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/new-yorker-june-3rd-1991-jb-handelsma.jpg',
          title: 'New Yorker, June 3rd, 1991',
          artist: 'J.B. Handelsman',
          year: '1991',
          rule: {
            "monday": [ 5, 9, 25, 22 ],
            "tuesday": [ 4, 9, 14, 21 ],
            "wednesday": [ 3, 8, 14, 20 ],
            "thursday": [ 2, 7, 13, 19 ],
            "friday": [ 7, 13, 18, 25 ],
            "saturday": [ 21, 11, 18, 24 ],
            "sunday": [ 6, 11, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/tumblr_ml0o1xXkix1rjm1abo1_1280.jpg',
          title: 'Tom Seaver New York Mets Watercolor',
          artist: 'Michael Pattison',
          year: '2013',
          rule: {
            "monday": [ 7, 12, 18, 24 ],
            "tuesday": [ 6, 10, 25, 23 ],
            "wednesday": [ 5, 10, 15, 22 ],
            "thursday": [ 4, 9, 15, 21 ],
            "friday": [ 3, 8, 14, 20 ],
            "saturday": [ 8, 14, 19, 26 ],
            "sunday": [ 22, 12, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/366_allen18art3.jpg',
          title: 'Home of the first Mets game - the Polo Grounds',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 22, 12, 19, 25 ],
            "tuesday": [ 7, 12, 18, 24 ],
            "wednesday": [ 6, 10, 25, 23 ],
            "thursday": [ 5, 10, 15, 22 ],
            "friday": [ 4, 9, 15, 21 ],
            "saturday": [ 3, 8, 14, 20 ],
            "sunday": [ 8, 14, 19, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/seattle-mariners.jpg',
          title: 'Safeco Field',
          artist: 'Kelly Walker',
          year: 'XXI Cent.',
          rule: {
            "monday": [ 8, 14, 19, 26 ],
            "tuesday": [ 22, 12, 19, 25 ],
            "wednesday": [ 7, 12, 18, 24 ],
            "thursday": [ 6, 10, 25, 23 ],
            "friday": [ 5, 10, 15, 22 ],
            "saturday": [ 4, 9, 15, 21 ],
            "sunday": [ 3, 8, 14, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/ph_niehaus_500x291.jpg',
          title: 'Dave Niehaus Statue',
          artist: 'Lou Cella',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 3, 8, 14, 20 ],
            "tuesday": [ 8, 14, 19, 26 ],
            "wednesday": [ 22, 12, 19, 25 ],
            "thursday": [ 7, 12, 18, 24 ],
            "friday": [ 6, 10, 25, 23 ],
            "saturday": [ 5, 10, 15, 22 ],
            "sunday": [ 4, 9, 15, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/robinson-cano-seattle-mariners-art-joe-hamilton.jpg',
          title: 'Robinson Cano Seattle Mariners',
          artist: 'Joe Hamilton',
          year: '2016',
          rule: {
            "monday": [ 4, 9, 15, 21 ],
            "tuesday": [ 3, 8, 14, 20 ],
            "wednesday": [ 8, 14, 19, 26 ],
            "thursday": [ 22, 12, 19, 25 ],
            "friday": [ 7, 12, 18, 24 ],
            "saturday": [ 6, 10, 25, 23 ],
            "sunday": [ 5, 10, 15, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/ken-griffey-jr-michael-pattison.jpg',
          title: 'Ken Griffey Jr.',
          artist: 'Michael Pattison',
          year: '2012',
          rule: {
            "monday": [ 5, 10, 15, 22 ],
            "tuesday": [ 4, 9, 15, 21 ],
            "wednesday": [ 3, 8, 14, 20 ],
            "thursday": [ 8, 14, 19, 26 ],
            "friday": [ 22, 12, 19, 25 ],
            "saturday": [ 7, 12, 18, 24 ],
            "sunday": [ 6, 10, 25, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/f8350c241a16ef5ceb2744cea2d5d702--baseball-art-caricature.jpg',
          title: 'Randy Johnson',
          artist: 'S. Preston',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 6, 10, 25, 23 ],
            "tuesday": [ 5, 10, 15, 22 ],
            "wednesday": [ 4, 9, 15, 21 ],
            "thursday": [ 3, 8, 14, 20 ],
            "friday": [ 8, 14, 19, 26 ],
            "saturday": [ 22, 12, 19, 25 ],
            "sunday": [ 7, 12, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/busch-stadium-st-louis-cardinals-black-white-ballpark-village-david-haskett.jpg',
          title: 'Busch Stadium St. Louis Cardinals',
          artist: 'David Haskett',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 8, 13, 19, 25 ],
            "tuesday": [ 7, 11, 26, 24 ],
            "wednesday": [ 6, 11, 16, 23 ],
            "thursday": [ 5, 10, 16, 22 ],
            "friday": [ 4, 9, 15, 21 ],
            "saturday": [ 9, 15, 20, 27 ],
            "sunday": [ 23, 13, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/il_340x270.1007953515_nd6d.jpg',
          title: 'Busch Stadium',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 23, 13, 20, 26 ],
            "tuesday": [ 8, 13, 19, 25 ],
            "wednesday": [ 7, 11, 26, 24 ],
            "thursday": [ 6, 11, 16, 23 ],
            "friday": [ 5, 10, 16, 22 ],
            "saturday": [ 4, 9, 15, 21 ],
            "sunday": [ 9, 15, 20, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/St-Louis-Cardinals_01.jpg',
          title: 'St. Louis Cardinals',
          artist: 'Dowdle',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 9, 15, 20, 27 ],
            "tuesday": [ 23, 13, 20, 26 ],
            "wednesday": [ 8, 13, 19, 25 ],
            "thursday": [ 7, 11, 26, 24 ],
            "friday": [ 6, 11, 16, 23 ],
            "saturday": [ 5, 10, 16, 22 ],
            "sunday": [ 4, 9, 15, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/BASEBALL-molina-Steven-Walden--3.jpg',
          title: 'St Louis Cardinals Yadier Molina',
          artist: 'Steven Walden',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 4, 9, 15, 21 ],
            "tuesday": [ 9, 15, 20, 27 ],
            "wednesday": [ 23, 13, 20, 26 ],
            "thursday": [ 8, 13, 19, 25 ],
            "friday": [ 7, 11, 26, 24 ],
            "saturday": [ 6, 11, 16, 23 ],
            "sunday": [ 5, 10, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/go-cards-st-louis-cardinals-2011-world-series-champions-dan-haraga.jpg',
          title: 'Go Cards!',
          artist: 'Dan Haraga',
          year: '2011',
          rule: {
            "monday": [ 5, 10, 16, 22 ],
            "tuesday": [ 4, 9, 15, 21 ],
            "wednesday": [ 9, 15, 20, 27 ],
            "thursday": [ 23, 13, 20, 26 ],
            "friday": [ 8, 13, 19, 25 ],
            "saturday": [ 7, 11, 26, 24 ],
            "sunday": [ 6, 11, 16, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Baltimore_Orioles_Cal_Ripken_Jr_ba39_large.jpg',
          title: 'Cal Ripken Jr.',
          artist: 'GL',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 6, 11, 16, 23 ],
            "tuesday": [ 5, 10, 16, 22 ],
            "wednesday": [ 4, 9, 15, 21 ],
            "thursday": [ 9, 15, 20, 27 ],
            "friday": [ 23, 13, 20, 26 ],
            "saturday": [ 8, 13, 19, 25 ],
            "sunday": [ 7, 11, 26, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/117df1280e537c30ae0b66a145277619--baltimore-orioles-art-prints.jpg',
          title: 'BROOKS ROBINSON BALTIMORE ORIOLES',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 7, 11, 26, 24 ],
            "tuesday": [ 6, 11, 16, 23 ],
            "wednesday": [ 5, 10, 16, 22 ],
            "thursday": [ 4, 9, 15, 21 ],
            "friday": [ 9, 15, 20, 27 ],
            "saturday": [ 23, 13, 20, 26 ],
            "sunday": [ 8, 13, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/IMG_61998.jpg',
          title: 'Baltimore Orioles Stadium Oriole Park at Camden Yards Baltimore',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 9, 14, 20, 26 ],
            "tuesday": [ 8, 12, 27, 25 ],
            "wednesday": [ 7, 12, 17, 24 ],
            "thursday": [ 6, 11, 17, 23 ],
            "friday": [ 5, 10, 16, 22 ],
            "saturday": [ 10, 16, 21, 28 ],
            "sunday": [ 24, 14, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/behind-the-plate-paul-mangold.jpg',
          title: 'Behind The Plate',
          artist: 'Paul Mangold',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 24, 14, 21, 27 ],
            "tuesday": [ 9, 14, 20, 26 ],
            "wednesday": [ 8, 12, 27, 25 ],
            "thursday": [ 7, 12, 17, 24 ],
            "friday": [ 6, 11, 17, 23 ],
            "saturday": [ 5, 10, 16, 22 ],
            "sunday": [ 10, 16, 21, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/OrioleParkatCamdenYards.jpg',
          title: 'Orioles Park at Camden Yards',
          artist: 'Max Mason',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 10, 16, 21, 28 ],
            "tuesday": [ 24, 14, 21, 27 ],
            "wednesday": [ 9, 14, 20, 26 ],
            "thursday": [ 8, 12, 27, 25 ],
            "friday": [ 7, 12, 17, 24 ],
            "saturday": [ 6, 11, 17, 23 ],
            "sunday": [ 5, 10, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/coors-field-mood-jessica-mcgraw.jpg',
          title: 'Coors Field Mood',
          artist: 'Jessica Brooks',
          year: '2012',
          rule: {
            "monday": [ 5, 10, 16, 22 ],
            "tuesday": [ 10, 16, 21, 28 ],
            "wednesday": [ 24, 14, 21, 27 ],
            "thursday": [ 9, 14, 20, 26 ],
            "friday": [ 8, 12, 27, 25 ],
            "saturday": [ 7, 12, 17, 24 ],
            "sunday": [ 6, 11, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Coors-Field--Colorado-Rockies_art.jpg',
          title: 'Coors Field - Colorado Rockies',
          artist: 'Ffooter',
          year: '2009',
          rule: {
            "monday": [ 6, 11, 17, 23 ],
            "tuesday": [ 5, 10, 16, 22 ],
            "wednesday": [ 10, 16, 21, 28 ],
            "thursday": [ 24, 14, 21, 27 ],
            "friday": [ 9, 14, 20, 26 ],
            "saturday": [ 8, 12, 27, 25 ],
            "sunday": [ 7, 12, 17, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Colorado-Rockies_01.jpg',
          title: 'Colorado Rockies',
          artist: 'Dowdle',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 7, 12, 17, 24 ],
            "tuesday": [ 6, 11, 17, 23 ],
            "wednesday": [ 5, 10, 16, 22 ],
            "thursday": [ 10, 16, 21, 28 ],
            "friday": [ 24, 14, 21, 27 ],
            "saturday": [ 9, 14, 20, 26 ],
            "sunday": [ 8, 12, 27, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/charlie-blackmon-colorado-rockies-pixel-art-5-joe-hamilton.jpg',
          title: 'Charlie Blackmon Colorado Rockies ',
          artist: 'Joe Hamilton',
          year: '2017',
          rule: {
            "monday": [ 8, 12, 27, 25 ],
            "tuesday": [ 7, 12, 17, 24 ],
            "wednesday": [ 6, 11, 17, 23 ],
            "thursday": [ 5, 10, 16, 22 ],
            "friday": [ 10, 16, 21, 28 ],
            "saturday": [ 24, 14, 21, 27 ],
            "sunday": [ 9, 14, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/142612572_master_1428446281702_16333606_ver1.0_640_480.jpg',
          title: 'The Player',
          artist: 'George Lundeen',
          year: '2005',
          rule: {
            "monday": [ 10, 15, 21, 27 ],
            "tuesday": [ 9, 13, 28, 26 ],
            "wednesday": [ 8, 13, 18, 25 ],
            "thursday": [ 7, 12, 18, 24 ],
            "friday": [ 6, 11, 17, 23 ],
            "saturday": [ 11, 17, 22, 29 ],
            "sunday": [ 25, 15, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/1-comerica-park-detroit-skyline-b-and-g-art.jpg',
          title: 'Comerica Park Detroit Skyline',
          artist: 'A And N Art',
          year: '2013',
          rule: {
            "monday": [ 25, 15, 22, 28 ],
            "tuesday": [ 10, 15, 21, 27 ],
            "wednesday": [ 9, 13, 28, 26 ],
            "thursday": [ 8, 13, 18, 25 ],
            "friday": [ 7, 12, 18, 24 ],
            "saturday": [ 6, 11, 17, 23 ],
            "sunday": [ 11, 17, 22, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/detroit001.jpg',
          title: 'Comerica Park Tiger',
          artist: 'Rukkus',
          year: '2015',
          rule: {
            "monday": [ 11, 17, 22, 29 ],
            "tuesday": [ 25, 15, 22, 28 ],
            "wednesday": [ 10, 15, 21, 27 ],
            "thursday": [ 9, 13, 28, 26 ],
            "friday": [ 8, 13, 18, 25 ],
            "saturday": [ 7, 12, 18, 24 ],
            "sunday": [ 6, 11, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/triple-crown-winner-detroit-tigers-miguel-cabrera-b-and-g-art.jpg',
          title: 'Triple Crown Winner Detroit Tigers Miguel Cabrera',
          artist: ' A And N Art',
          year: '2012',
          rule: {
            "monday": [ 6, 11, 17, 23 ],
            "tuesday": [ 11, 17, 22, 29 ],
            "wednesday": [ 25, 15, 22, 28 ],
            "thursday": [ 10, 15, 21, 27 ],
            "friday": [ 9, 13, 28, 26 ],
            "saturday": [ 8, 13, 18, 25 ],
            "sunday": [ 7, 12, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/il_340x270.637314895_9vaq.jpg',
          title: 'Detroit Tigers Justin Verlander',
          artist: 'Glicee Prints',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 7, 12, 18, 24 ],
            "tuesday": [ 6, 11, 17, 23 ],
            "wednesday": [ 11, 17, 22, 29 ],
            "thursday": [ 25, 15, 22, 28 ],
            "friday": [ 10, 15, 21, 27 ],
            "saturday": [ 9, 13, 28, 26 ],
            "sunday": [ 8, 13, 18, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/art-houtteman-detrit-tigers-pitcher.jpg',
          title: 'Art Houtteman Detroit Tigers Pitcher',
          artist: '?',
          year: '1950s',
          rule: {
            "monday": [ 8, 13, 18, 25 ],
            "tuesday": [ 7, 12, 18, 24 ],
            "wednesday": [ 6, 11, 17, 23 ],
            "thursday": [ 11, 17, 22, 29 ],
            "friday": [ 25, 15, 22, 28 ],
            "saturday": [ 10, 15, 21, 27 ],
            "sunday": [ 9, 13, 28, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/phillies_image.jpg',
          title: 'Citizens Bank Park',
          artist: 'Britt Miller',
          year: '2011',
          rule: {
            "monday": [ 9, 13, 28, 26 ],
            "tuesday": [ 8, 13, 18, 25 ],
            "wednesday": [ 7, 12, 18, 24 ],
            "thursday": [ 6, 11, 17, 23 ],
            "friday": [ 11, 17, 22, 29 ],
            "saturday": [ 25, 15, 22, 28 ],
            "sunday": [ 10, 15, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Double-Play-at-Citizens-Bank-Park_0.jpg',
          title: 'Double Play at Citizens Bank Park',
          artist: 'Max Mason',
          year: '2010',
          rule: {
            "monday": [ 11, 16, 22, 28 ],
            "tuesday": [ 10, 14, 29, 27 ],
            "wednesday": [ 9, 14, 19, 26 ],
            "thursday": [ 8, 13, 19, 25 ],
            "friday": [ 7, 12, 18, 24 ],
            "saturday": [ 12, 18, 23, 30 ],
            "sunday": [ 26, 16, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/701064b6085b0ee9d52cc7b1a2cbc05d.jpg',
          title: 'Mike Schmidt',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 26, 16, 23, 29 ],
            "tuesday": [ 11, 16, 22, 28 ],
            "wednesday": [ 10, 14, 29, 27 ],
            "thursday": [ 9, 14, 19, 26 ],
            "friday": [ 8, 13, 19, 25 ],
            "saturday": [ 7, 12, 18, 24 ],
            "sunday": [ 12, 18, 23, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/362f7aa3a6786fc85d6732c4adbee128.jpg',
          title: 'Phillies Vintage Player Art',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 12, 18, 23, 30 ],
            "tuesday": [ 26, 16, 23, 29 ],
            "wednesday": [ 11, 16, 22, 28 ],
            "thursday": [ 10, 14, 29, 27 ],
            "friday": [ 9, 14, 19, 26 ],
            "saturday": [ 8, 13, 19, 25 ],
            "sunday": [ 7, 12, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/1f89453b-01ac-4334-b701-fa4bf3e459bd_lg.jpeg',
          title: '1945 Jimmie Foxx Philadelphia Phillies',
          artist: 'WM. C Green',
          year: '1945',
          rule: {
            "monday": [ 7, 12, 18, 24 ],
            "tuesday": [ 12, 18, 23, 30 ],
            "wednesday": [ 26, 16, 23, 29 ],
            "thursday": [ 11, 16, 22, 28 ],
            "friday": [ 10, 14, 29, 27 ],
            "saturday": [ 9, 14, 19, 26 ],
            "sunday": [ 8, 13, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/ballpark_480x225.jpg',
          title: 'Globe Life Park in Arlington',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 8, 13, 19, 25 ],
            "tuesday": [ 7, 12, 18, 24 ],
            "wednesday": [ 12, 18, 23, 30 ],
            "thursday": [ 26, 16, 23, 29 ],
            "friday": [ 11, 16, 22, 28 ],
            "saturday": [ 10, 14, 29, 27 ],
            "sunday": [ 9, 14, 19, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/rangers_ballpark_in_arlington.jpg',
          title: 'Globe Life Park on Opening Day 2009',
          artist: 'Alan Garrison',
          year: '2009',
          rule: {
            "monday": [ 9, 14, 19, 26 ],
            "tuesday": [ 8, 13, 19, 25 ],
            "wednesday": [ 7, 12, 18, 24 ],
            "thursday": [ 12, 18, 23, 30 ],
            "friday": [ 26, 16, 23, 29 ],
            "saturday": [ 11, 16, 22, 28 ],
            "sunday": [ 10, 14, 29, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/b79ced3fe9d22a05cba2ed8fdad67aaf--sports-decor-sports-art.jpg',
          title: 'Texas Ranger catcher Pudge Rodriguez',
          artist: 'Robert Hurst',
          year: '?',
          rule: {
            "monday": [ 10, 14, 29, 27 ],
            "tuesday": [ 9, 14, 19, 26 ],
            "wednesday": [ 8, 13, 19, 25 ],
            "thursday": [ 7, 12, 18, 24 ],
            "friday": [ 12, 18, 23, 30 ],
            "saturday": [ 26, 16, 23, 29 ],
            "sunday": [ 11, 16, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/0811 Rangers art 2.jpeg',
          title: 'Texas Rangers: Joey Gallo',
          artist: 'Richard W. Rodriguez',
          year: '2017',
          rule: {
            "monday": [ 11, 16, 22, 28 ],
            "tuesday": [ 10, 14, 29, 27 ],
            "wednesday": [ 9, 14, 19, 26 ],
            "thursday": [ 8, 13, 19, 25 ],
            "friday": [ 7, 12, 18, 24 ],
            "saturday": [ 12, 18, 23, 30 ],
            "sunday": [ 26, 16, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Nolan-Ryan-Texas-Rangers-MLB-Art-by-E-L-Vela_art.jpg',
          title: 'Nolan Ryan, Texas Rangers',
          artist: 'E. L. Vela',
          year: '2011',
          rule: {
            "monday": [ 26, 16, 23, 29 ],
            "tuesday": [ 11, 16, 22, 28 ],
            "wednesday": [ 10, 14, 29, 27 ],
            "thursday": [ 9, 14, 19, 26 ],
            "friday": [ 8, 13, 19, 25 ],
            "saturday": [ 7, 12, 18, 24 ],
            "sunday": [ 12, 18, 23, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/wrigley_field_bricks___ivy_canvas_art.jpg',
          title: 'Wrigley Field Bricks & Ivy',
          artist: 'Holy Cow Canvas',
          year: 'XXI cent.',
          rule: {
            "monday": [ 12, 18, 23, 30 ],
            "tuesday": [ 26, 16, 23, 29 ],
            "wednesday": [ 11, 16, 22, 28 ],
            "thursday": [ 10, 14, 29, 27 ],
            "friday": [ 9, 14, 19, 26 ],
            "saturday": [ 8, 13, 19, 25 ],
            "sunday": [ 7, 12, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/wrigleygiclee.jpg',
          title: 'Wrigley Field',
          artist: 'Al Sorenson',
          year: '1945',
          rule: {
            "monday": [ 7, 12, 18, 24 ],
            "tuesday": [ 12, 18, 23, 30 ],
            "wednesday": [ 26, 16, 23, 29 ],
            "thursday": [ 11, 16, 22, 28 ],
            "friday": [ 10, 14, 29, 27 ],
            "saturday": [ 9, 14, 19, 26 ],
            "sunday": [ 8, 13, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/5d54152dc404252300a2e4810c90abe0--cubs-win-cubs-baseball.jpg',
          title: 'Chicago Cubs Painting',
          artist: 'Justin Patten',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 8, 13, 19, 25 ],
            "tuesday": [ 7, 12, 18, 24 ],
            "wednesday": [ 12, 18, 23, 30 ],
            "thursday": [ 26, 16, 23, 29 ],
            "friday": [ 11, 16, 22, 28 ],
            "saturday": [ 10, 14, 29, 27 ],
            "sunday": [ 9, 14, 19, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Angell-At-Last.jpg',
          title: 'The Cubs Win the World Series',
          artist: 'unknown',
          year: '?',
          rule: {
            "monday": [ 9, 14, 19, 26 ],
            "tuesday": [ 8, 13, 19, 25 ],
            "wednesday": [ 7, 12, 18, 24 ],
            "thursday": [ 12, 18, 23, 30 ],
            "friday": [ 26, 16, 23, 29 ],
            "saturday": [ 11, 16, 22, 28 ],
            "sunday": [ 10, 14, 29, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/jon-lester-chicago-cubs-dave-olsen.jpg',
          title: 'Jon Lester Chicago Cubs',
          artist: 'Dave Olsen',
          year: '2016',
          rule: {
            "monday": [ 10, 14, 29, 27 ],
            "tuesday": [ 9, 14, 19, 26 ],
            "wednesday": [ 8, 13, 19, 25 ],
            "thursday": [ 7, 12, 18, 24 ],
            "friday": [ 12, 18, 23, 30 ],
            "saturday": [ 26, 16, 23, 29 ],
            "sunday": [ 11, 16, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/1946444l.jpg',
          title: 'Fenway Park Centerfield',
          artist: 'Loretta Feeney',
          year: '2015',
          rule: {
            "monday": [ 12, 17, 23, 29 ],
            "tuesday": [ 11, 15, 30, 28 ],
            "wednesday": [ 10, 15, 20, 27 ],
            "thursday": [ 9, 14, 20, 26 ],
            "friday": [ 8, 13, 19, 25 ],
            "saturday": [ 13, 19, 24, 1 ],
            "sunday": [ 27, 17, 23, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/boston-red-sox-and-new-york-yankees-at-fenway-park-art-donna-doherty.jpg',
          title: 'Boston Red Sox And New York Yankees At Fenway Park',
          artist: 'Donna Doherty',
          year: '2014',
          rule: {
            "monday": [ 27, 17, 23, 30 ],
            "tuesday": [ 12, 17, 23, 29 ],
            "wednesday": [ 11, 15, 30, 28 ],
            "thursday": [ 10, 15, 20, 27 ],
            "friday": [ 9, 14, 20, 26 ],
            "saturday": [ 8, 13, 19, 25 ],
            "sunday": [ 13, 19, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/DO_3.jpg',
          title: 'David Ortiz',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 13, 19, 24, 1 ],
            "tuesday": [ 27, 17, 23, 30 ],
            "wednesday": [ 12, 17, 23, 29 ],
            "thursday": [ 11, 15, 30, 28 ],
            "friday": [ 10, 15, 20, 27 ],
            "saturday": [ 9, 14, 20, 26 ],
            "sunday": [ 8, 13, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Dave_Roberts_The_Steal.jpg',
          title: 'Dave Roberts the Steal',
          artist: 'Kris Borzilleri',
          year: '',
          rule: {
            "monday": [ 8, 13, 19, 25 ],
            "tuesday": [ 13, 19, 24, 1 ],
            "wednesday": [ 27, 17, 23, 30 ],
            "thursday": [ 12, 17, 23, 29 ],
            "friday": [ 11, 15, 30, 28 ],
            "saturday": [ 10, 15, 20, 27 ],
            "sunday": [ 9, 14, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/be7c7aaf9317726b4570ccdadffedc6c.jpg',
          title: 'Boston!',
          artist: 'Arabel',
          year: 'XXI cent.',
          rule: {
            "monday": [ 9, 14, 20, 26 ],
            "tuesday": [ 8, 13, 19, 25 ],
            "wednesday": [ 13, 19, 24, 1 ],
            "thursday": [ 27, 17, 23, 30 ],
            "friday": [ 12, 17, 23, 29 ],
            "saturday": [ 11, 15, 30, 28 ],
            "sunday": [ 10, 15, 20, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/dodger-stadium-mural.jpg',
          title: 'Dodger Stadium Mural',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 10, 15, 20, 27 ],
            "tuesday": [ 9, 14, 20, 26 ],
            "wednesday": [ 8, 13, 19, 25 ],
            "thursday": [ 13, 19, 24, 1 ],
            "friday": [ 27, 17, 23, 30 ],
            "saturday": [ 12, 17, 23, 29 ],
            "sunday": [ 11, 15, 30, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/il_340x270.1179884686_99qy.jpg',
          title: 'Dodger Stadium',
          artist: 'marzjr',
          year: 'xxi cent.',
          rule: {
            "monday": [ 11, 15, 30, 28 ],
            "tuesday": [ 10, 15, 20, 27 ],
            "wednesday": [ 9, 14, 20, 26 ],
            "thursday": [ 8, 13, 19, 25 ],
            "friday": [ 13, 19, 24, 1 ],
            "saturday": [ 27, 17, 23, 30 ],
            "sunday": [ 12, 17, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/KIRK-GIBSON_ART-2.jpg',
          title: 'Kirk Gibson Los Angeles Dodgers',
          artist: 'Canvas ART',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 13, 18, 24, 30 ],
            "tuesday": [ 12, 16, 1, 29 ],
            "wednesday": [ 11, 16, 21, 28 ],
            "thursday": [ 10, 15, 21, 27 ],
            "friday": [ 9, 14, 20, 26 ],
            "saturday": [ 14, 20, 25, 2 ],
            "sunday": [ 28, 18, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/la-dodgers-pitcher-sandy-koufax-1965-everett.jpg',
          title: 'L.A. Dodgers Pitcher Sandy Koufax',
          artist: 'Everett',
          year: '1965',
          rule: {
            "monday": [ 28, 18, 24, 1 ],
            "tuesday": [ 13, 18, 24, 30 ],
            "wednesday": [ 12, 16, 1, 29 ],
            "thursday": [ 11, 16, 21, 28 ],
            "friday": [ 10, 15, 21, 27 ],
            "saturday": [ 9, 14, 20, 26 ],
            "sunday": [ 14, 20, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/cubism-la-dodgers-baserunner-painting-tommervik.jpg',
          title: 'Cubism LA Dodgers Baserunner Painting',
          artist: 'Tommervik',
          year: '2011',
          rule: {
            "monday": [ 14, 20, 25, 2 ],
            "tuesday": [ 28, 18, 24, 1 ],
            "wednesday": [ 13, 18, 24, 30 ],
            "thursday": [ 12, 16, 1, 29 ],
            "friday": [ 11, 16, 21, 28 ],
            "saturday": [ 10, 15, 21, 27 ],
            "sunday": [ 9, 14, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/poi_gallery_image-image-f1c92a25-5f3c-4959-bf56-37cf3b350a95.jpg',
          title: 'Kauffman Stadium',
          artist: '?',
          year: '2015',
          rule: {
            "monday": [ 9, 14, 20, 26 ],
            "tuesday": [ 14, 20, 25, 2 ],
            "wednesday": [ 28, 18, 24, 1 ],
            "thursday": [ 13, 18, 24, 30 ],
            "friday": [ 12, 16, 1, 29 ],
            "saturday": [ 11, 16, 21, 28 ],
            "sunday": [ 10, 15, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/stealth-bomber-over-kauffman-stadium-raye-pond.jpg',
          title: 'Stealth Bomber Over Kauffman Stadium',
          artist: 'Raye Pond',
          year: '2013',
          rule: {
            "monday": [ 10, 15, 21, 27 ],
            "tuesday": [ 9, 14, 20, 26 ],
            "wednesday": [ 14, 20, 25, 2 ],
            "thursday": [ 28, 18, 24, 1 ],
            "friday": [ 13, 18, 24, 30 ],
            "saturday": [ 12, 16, 1, 29 ],
            "sunday": [ 11, 16, 21, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Royals-Mural-Complete-400x300.jpg',
          title: 'KC Royals World Series Mural',
          artist: 'William Rose',
          year: '2015',
          rule: {
            "monday": [ 11, 16, 21, 28 ],
            "tuesday": [ 10, 15, 21, 27 ],
            "wednesday": [ 9, 14, 20, 26 ],
            "thursday": [ 14, 20, 25, 2 ],
            "friday": [ 28, 18, 24, 1 ],
            "saturday": [ 13, 18, 24, 30 ],
            "sunday": [ 12, 16, 1, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/eric-hosmer-of-the-kansas-city-royals-dave-olsen.jpg',
          title: 'Eric Hosmer Of The Kansas City Royals',
          artist: 'Dave Olsen',
          year: '2015',
          rule: {
            "monday": [ 12, 16, 1, 29 ],
            "tuesday": [ 11, 16, 21, 28 ],
            "wednesday": [ 10, 15, 21, 27 ],
            "thursday": [ 9, 14, 20, 26 ],
            "friday": [ 14, 20, 25, 2 ],
            "saturday": [ 28, 18, 24, 1 ],
            "sunday": [ 13, 18, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/e23c9f851f1c347a0f899d9235ef262d.jpg',
          title: 'Kansas City Municipal Stadium In The 1950\'s',
          artist: 'Dwight Goss',
          year: 'XX - XXI cent.',
          rule: {
            "monday": [ 14, 19, 25, 1 ],
            "tuesday": [ 13, 17, 2, 30 ],
            "wednesday": [ 12, 17, 22, 29 ],
            "thursday": [ 11, 16, 22, 28 ],
            "friday": [ 10, 15, 21, 27 ],
            "saturday": [ 15, 21, 26, 3 ],
            "sunday": [ 29, 19, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Nationals Park-sm crop-001_0_0.jpg',
          title: 'Nationals Park, Washington D.C.',
          artist: 'Anonymous',
          year: '2010 - 2011',
          rule: {
            "monday": [ 29, 19, 25, 2 ],
            "tuesday": [ 14, 19, 25, 1 ],
            "wednesday": [ 13, 17, 2, 30 ],
            "thursday": [ 12, 17, 22, 29 ],
            "friday": [ 11, 16, 22, 28 ],
            "saturday": [ 10, 15, 21, 27 ],
            "sunday": [ 15, 21, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/2015-05-05-nationals-park-large.jpg',
          title: 'Nationals Park',
          artist: 'Joel Winstead',
          year: '2015',
          rule: {
            "monday": [ 15, 21, 26, 3 ],
            "tuesday": [ 29, 19, 25, 2 ],
            "wednesday": [ 14, 19, 25, 1 ],
            "thursday": [ 13, 17, 2, 30 ],
            "friday": [ 12, 17, 22, 29 ],
            "saturday": [ 11, 16, 22, 28 ],
            "sunday": [ 10, 15, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Stephen-Strasburg-Washington-Nationals-MLB-Fine-Art-Prints.jpg',
          title: 'Stephen Strasburg Washington Nationals',
          artist: 'VIP Sports Photos',
          year: 'XXI cent.',
          rule: {
            "monday": [ 10, 15, 21, 27 ],
            "tuesday": [ 15, 21, 26, 3 ],
            "wednesday": [ 29, 19, 25, 2 ],
            "thursday": [ 14, 19, 25, 1 ],
            "friday": [ 13, 17, 2, 30 ],
            "saturday": [ 12, 17, 22, 29 ],
            "sunday": [ 11, 16, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/d8aa8bc7c76d0017f2fb0b34fc88896e--baseball-teams-baseball-season.jpg',
          title: 'BRYCE HARPER Washington Nationals Baseball',
          artist: 'IslandCustomDesigns',
          year: 'XXI cent.',
          rule: {
            "monday": [ 11, 16, 22, 28 ],
            "tuesday": [ 10, 15, 21, 27 ],
            "wednesday": [ 15, 21, 26, 3 ],
            "thursday": [ 29, 19, 25, 2 ],
            "friday": [ 14, 19, 25, 1 ],
            "saturday": [ 13, 17, 2, 30 ],
            "sunday": [ 12, 17, 22, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/washington_nationals_2012_uniforms_by_jayjaxon-d4uia95.png',
          title: 'Washington Nationals 2012 Uniforms',
          artist: 'Jason Jaxon',
          year: '2012',
          rule: {
            "monday": [ 12, 17, 22, 29 ],
            "tuesday": [ 11, 16, 22, 28 ],
            "wednesday": [ 10, 15, 21, 27 ],
            "thursday": [ 15, 21, 26, 3 ],
            "friday": [ 29, 19, 25, 2 ],
            "saturday": [ 14, 19, 25, 1 ],
            "sunday": [ 13, 17, 2, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/minutemaidpark.jpg',
          title: 'Rebirth in Houston',
          artist: 'Bill Purdom',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 13, 17, 2, 30 ],
            "tuesday": [ 12, 17, 22, 29 ],
            "wednesday": [ 11, 16, 22, 28 ],
            "thursday": [ 10, 15, 21, 27 ],
            "friday": [ 15, 21, 26, 3 ],
            "saturday": [ 29, 19, 25, 2 ],
            "sunday": [ 14, 19, 25, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Press_Release_Photo_Astros.jpg',
          title: 'Press Release Stock Photo Houston Astros',
          artist: '?',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 15, 20, 26, 2 ],
            "tuesday": [ 14, 18, 3, 1 ],
            "wednesday": [ 13, 18, 23, 30 ],
            "thursday": [ 12, 17, 23, 29 ],
            "friday": [ 11, 16, 22, 28 ],
            "saturday": [ 16, 22, 27, 4 ],
            "sunday": [ 30, 20, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Bags.jpg',
          title: 'Jeff Bagwell',
          artist: 'DH Sports Art',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 30, 20, 26, 3 ],
            "tuesday": [ 15, 20, 26, 2 ],
            "wednesday": [ 14, 18, 3, 1 ],
            "thursday": [ 13, 18, 23, 30 ],
            "friday": [ 12, 17, 23, 29 ],
            "saturday": [ 11, 16, 22, 28 ],
            "sunday": [ 16, 22, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/RandyJohnsonAstro.jpg',
          title: 'Randy Johnson',
          artist: 'David J. Phillip',
          year: '1998',
          rule: {
            "monday": [ 16, 22, 27, 4 ],
            "tuesday": [ 30, 20, 26, 3 ],
            "wednesday": [ 15, 20, 26, 2 ],
            "thursday": [ 14, 18, 3, 1 ],
            "friday": [ 13, 18, 23, 30 ],
            "saturday": [ 12, 17, 23, 29 ],
            "sunday": [ 11, 16, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Dallas.jpg',
          title: 'Multiple Exposures of Dallas Keuchel',
          artist: 'Karen Warren',
          year: '2017',
          rule: {
            "monday": [ 11, 16, 22, 28 ],
            "tuesday": [ 16, 22, 27, 4 ],
            "wednesday": [ 30, 20, 26, 3 ],
            "thursday": [ 15, 20, 26, 2 ],
            "friday": [ 14, 18, 3, 1 ],
            "saturday": [ 13, 18, 23, 30 ],
            "sunday": [ 12, 17, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/1-cincinnati-reds-great-american-ball-park-david-long.jpg',
          title: 'Cincinnati Reds Great American Ball Park',
          artist: 'David Long',
          year: '2014',
          rule: {
            "monday": [ 12, 17, 23, 29 ],
            "tuesday": [ 11, 16, 22, 28 ],
            "wednesday": [ 16, 22, 27, 4 ],
            "thursday": [ 30, 20, 26, 3 ],
            "friday": [ 15, 20, 26, 2 ],
            "saturday": [ 14, 18, 3, 1 ],
            "sunday": [ 13, 18, 23, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/cincinnati-reds-great-american-ballpark-creative-6-black-white-david-haskett.jpg',
          title: 'Cincinnati Reds Great American Ballpark',
          artist: 'David Haskett',
          year: '2015',
          rule: {
            "monday": [ 13, 18, 23, 30 ],
            "tuesday": [ 12, 17, 23, 29 ],
            "wednesday": [ 11, 16, 22, 28 ],
            "thursday": [ 16, 22, 27, 4 ],
            "friday": [ 30, 20, 26, 3 ],
            "saturday": [ 15, 20, 26, 2 ],
            "sunday": [ 14, 18, 3, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/2.5.reds69-mosaic.jpg',
          title: '1975 Big Red Machine',
          artist: 'Mark Riedy',
          year: '?',
          rule: {
            "monday": [ 14, 18, 3, 1 ],
            "tuesday": [ 13, 18, 23, 30 ],
            "wednesday": [ 12, 17, 23, 29 ],
            "thursday": [ 11, 16, 22, 28 ],
            "friday": [ 16, 22, 27, 4 ],
            "saturday": [ 30, 20, 26, 3 ],
            "sunday": [ 15, 20, 26, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/3c1b208ffec3efc28bbfd0ed820a4432--baseball-art-sports-art.jpg',
          title: 'Eric Davis',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 16, 21, 27, 3 ],
            "tuesday": [ 15, 19, 4, 2 ],
            "wednesday": [ 14, 19, 24, 1 ],
            "thursday": [ 13, 18, 24, 30 ],
            "friday": [ 12, 17, 23, 29 ],
            "saturday": [ 17, 23, 28, 5 ],
            "sunday": [ 1, 21, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Art Jacobs 1939 4x6 300-228x228.jpg',
          title: 'Art Jacobs - 1939 Cincinnati Reds',
          artist: '?',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 1, 21, 27, 4 ],
            "tuesday": [ 16, 21, 27, 3 ],
            "wednesday": [ 15, 19, 4, 2 ],
            "thursday": [ 14, 19, 24, 1 ],
            "friday": [ 13, 18, 24, 30 ],
            "saturday": [ 12, 17, 23, 29 ],
            "sunday": [ 17, 23, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/yankee_stadium_night_painting.jpg',
          title: 'Yankee Stadium',
          artist: 'Dave Choate',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 17, 23, 28, 5 ],
            "tuesday": [ 1, 21, 27, 4 ],
            "wednesday": [ 16, 21, 27, 3 ],
            "thursday": [ 15, 19, 4, 2 ],
            "friday": [ 14, 19, 24, 1 ],
            "saturday": [ 13, 18, 24, 30 ],
            "sunday": [ 12, 17, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/malcolm-farley-limited-edition-giclee-hand-embellished-yankee-stadium-commemorative-edition-4.jpg',
          title: 'Yankee Stadium Commemorative Edition',
          artist: 'Malcolm Farley',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 12, 17, 23, 29 ],
            "tuesday": [ 17, 23, 28, 5 ],
            "wednesday": [ 1, 21, 27, 4 ],
            "thursday": [ 16, 21, 27, 3 ],
            "friday": [ 15, 19, 4, 2 ],
            "saturday": [ 14, 19, 24, 1 ],
            "sunday": [ 13, 18, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/mickey-mantle-new-york-yankees-legend.jpg',
          title: 'Mickey Mantle Poster',
          artist: 'Gianfranco Weiss',
          year: 'xx Cent.',
          rule: {
            "monday": [ 13, 18, 24, 30 ],
            "tuesday": [ 12, 17, 23, 29 ],
            "wednesday": [ 17, 23, 28, 5 ],
            "thursday": [ 1, 21, 27, 4 ],
            "friday": [ 16, 21, 27, 3 ],
            "saturday": [ 15, 19, 4, 2 ],
            "sunday": [ 14, 19, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/2806dd_066022461ee1466e93d53daa7ebbc9d4.jpg',
          title: 'Derek Jeter "Leading the Way"',
          artist: 'David Courson',
          year: '2010',
          rule: {
            "monday": [ 14, 19, 24, 1 ],
            "tuesday": [ 13, 18, 24, 30 ],
            "wednesday": [ 12, 17, 23, 29 ],
            "thursday": [ 17, 23, 28, 5 ],
            "friday": [ 1, 21, 27, 4 ],
            "saturday": [ 16, 21, 27, 3 ],
            "sunday": [ 15, 19, 4, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/2885114106_c6fa1af460_o.jpg',
          title: 'Mariano Rivera',
          artist: 'BernBabyBern',
          year: '2008',
          rule: {
            "monday": [ 15, 19, 4, 2 ],
            "tuesday": [ 14, 19, 24, 1 ],
            "wednesday": [ 13, 18, 24, 30 ],
            "thursday": [ 12, 17, 23, 29 ],
            "friday": [ 17, 23, 28, 5 ],
            "saturday": [ 1, 21, 27, 4 ],
            "sunday": [ 16, 21, 27, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/unnamed-3.jpg',
          title: 'PETCO Park',
          artist: 'Jason Edrys',
          year: '?',
          rule: {
            "monday": [ 17, 22, 28, 4 ],
            "tuesday": [ 16, 20, 5, 3 ],
            "wednesday": [ 15, 20, 25, 2 ],
            "thursday": [ 14, 19, 25, 1 ],
            "friday": [ 13, 18, 24, 30 ],
            "saturday": [ 18, 24, 29, 6 ],
            "sunday": [ 2, 22, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/petco-park-opening-day-shawn-everhart.jpg',
          title: 'Petoco Park Opening Day',
          artist: 'Shawn Everhart',
          year: '2012',
          rule: {
            "monday": [ 2, 22, 28, 5 ],
            "tuesday": [ 17, 22, 28, 4 ],
            "wednesday": [ 16, 20, 5, 3 ],
            "thursday": [ 15, 20, 25, 2 ],
            "friday": [ 14, 19, 25, 1 ],
            "saturday": [ 13, 18, 24, 30 ],
            "sunday": [ 18, 24, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/fbd6883d905cf00846010a5ffcc952ea--san-diego-padres-sports-logos.jpg',
          title: 'San Diego Padres Logo',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 18, 24, 29, 6 ],
            "tuesday": [ 2, 22, 28, 5 ],
            "wednesday": [ 17, 22, 28, 4 ],
            "thursday": [ 16, 20, 5, 3 ],
            "friday": [ 15, 20, 25, 2 ],
            "saturday": [ 14, 19, 25, 1 ],
            "sunday": [ 13, 18, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/23949964b6447179cbcf52b212a75a12--baseball-art-san-diego-padres.jpg',
          title: 'Tony Gwynn',
          artist: 'Stephen Fishwick',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 13, 18, 24, 30 ],
            "tuesday": [ 18, 24, 29, 6 ],
            "wednesday": [ 2, 22, 28, 5 ],
            "thursday": [ 17, 22, 28, 4 ],
            "friday": [ 16, 20, 5, 3 ],
            "saturday": [ 15, 20, 25, 2 ],
            "sunday": [ 14, 19, 25, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 130,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/dc05d1f915d2c591947cb143f40633b7.jpg',
          title: 'Dave Winfield, San Diego Padres',
          artist: 'Kadir Nelson',
          year: '?',
          rule: {
            "monday": [ 14, 19, 25, 1 ],
            "tuesday": [ 13, 18, 24, 30 ],
            "wednesday": [ 18, 24, 29, 6 ],
            "thursday": [ 2, 22, 28, 5 ],
            "friday": [ 17, 22, 28, 4 ],
            "saturday": [ 16, 20, 5, 3 ],
            "sunday": [ 15, 20, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 131,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/twins_e9dc84d0-26f2-402c-9e4e-cb13f374f6ba.jpg',
          title: 'Target Field - Home of the Twins',
          artist: 'Michael Birawer',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 15, 20, 25, 2 ],
            "tuesday": [ 14, 19, 25, 1 ],
            "wednesday": [ 13, 18, 24, 30 ],
            "thursday": [ 18, 24, 29, 6 ],
            "friday": [ 2, 22, 28, 5 ],
            "saturday": [ 17, 22, 28, 4 ],
            "sunday": [ 16, 20, 5, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 132,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/target-field-nick-peters.jpg',
          title: 'Target Field',
          artist: 'Nick Peters',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 16, 20, 5, 3 ],
            "tuesday": [ 15, 20, 25, 2 ],
            "wednesday": [ 14, 19, 25, 1 ],
            "thursday": [ 13, 18, 24, 30 ],
            "friday": [ 18, 24, 29, 6 ],
            "saturday": [ 2, 22, 28, 5 ],
            "sunday": [ 17, 22, 28, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 133,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/ee0a1153d5125cf73f25cbc60ae3aa48--baseball-posters-baseball-art.jpg',
          title: 'Minnesota Twins Harmon Killebrew "Killer"',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 18, 23, 29, 5 ],
            "tuesday": [ 17, 21, 6, 4 ],
            "wednesday": [ 16, 21, 26, 3 ],
            "thursday": [ 15, 20, 26, 2 ],
            "friday": [ 14, 19, 25, 1 ],
            "saturday": [ 19, 25, 30, 7 ],
            "sunday": [ 3, 23, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 134,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/2806dd_6a34d18660b14e19852ab5bc96ff657d-mv2.jpg_srz_981_380_85_2 (1).jpg',
          title: 'Minnesota Twins Byron Buxton',
          artist: 'David Courson',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 3, 23, 29, 6 ],
            "tuesday": [ 18, 23, 29, 5 ],
            "wednesday": [ 17, 21, 6, 4 ],
            "thursday": [ 16, 21, 26, 3 ],
            "friday": [ 15, 20, 26, 2 ],
            "saturday": [ 14, 19, 25, 1 ],
            "sunday": [ 19, 25, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 135,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Minnesota-Twins_01.jpg',
          title: 'Minnesota Twins',
          artist: 'Dowdle Folk Art',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 19, 25, 30, 7 ],
            "tuesday": [ 3, 23, 29, 6 ],
            "wednesday": [ 18, 23, 29, 5 ],
            "thursday": [ 17, 21, 6, 4 ],
            "friday": [ 16, 21, 26, 3 ],
            "saturday": [ 15, 20, 26, 2 ],
            "sunday": [ 14, 19, 25, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 136,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Screen-Shot-2015.png',
          title: 'Sun Trust Park',
          artist: '?',
          year: '2015',
          rule: {
            "monday": [ 14, 19, 25, 1 ],
            "tuesday": [ 19, 25, 30, 7 ],
            "wednesday": [ 3, 23, 29, 6 ],
            "thursday": [ 18, 23, 29, 5 ],
            "friday": [ 17, 21, 6, 4 ],
            "saturday": [ 16, 21, 26, 3 ],
            "sunday": [ 15, 20, 26, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 137,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/suntrust.park_.jpg',
          title: 'Sun Trust Park',
          artist: 'David Goldman',
          year: '2017',
          rule: {
            "monday": [ 15, 20, 26, 2 ],
            "tuesday": [ 14, 19, 25, 1 ],
            "wednesday": [ 19, 25, 30, 7 ],
            "thursday": [ 3, 23, 29, 6 ],
            "friday": [ 18, 23, 29, 5 ],
            "saturday": [ 17, 21, 6, 4 ],
            "sunday": [ 16, 21, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 138,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/atlanta_braves_uniform_display_by_jayjaxon.png',
          title: 'Atlanta Braves Uniform Display',
          artist: 'JayJaxon',
          year: '2010 - 2017',
          rule: {
            "monday": [ 16, 21, 26, 3 ],
            "tuesday": [ 15, 20, 26, 2 ],
            "wednesday": [ 14, 19, 25, 1 ],
            "thursday": [ 19, 25, 30, 7 ],
            "friday": [ 3, 23, 29, 6 ],
            "saturday": [ 18, 23, 29, 5 ],
            "sunday": [ 17, 21, 6, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 139,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/2229519.jpg',
          title: 'Freddie Freeman',
          artist: 'Michael Lee',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 17, 21, 6, 4 ],
            "tuesday": [ 16, 21, 26, 3 ],
            "wednesday": [ 15, 20, 26, 2 ],
            "thursday": [ 14, 19, 25, 1 ],
            "friday": [ 19, 25, 30, 7 ],
            "saturday": [ 3, 23, 29, 6 ],
            "sunday": [ 18, 23, 29, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 140,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/mlbf_1859795883_th_45.jpg',
          title: 'Atlanta Braves',
          artist: 'MLB Braves Official Site',
          year: '2017',
          rule: {
            "monday": [ 19, 24, 30, 6 ],
            "tuesday": [ 18, 22, 7, 5 ],
            "wednesday": [ 17, 22, 27, 4 ],
            "thursday": [ 16, 21, 27, 3 ],
            "friday": [ 15, 20, 26, 2 ],
            "saturday": [ 20, 26, 1, 8 ],
            "sunday": [ 4, 24, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 141,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/32ef9741e664c2704202bb21e0bc0f69.jpg',
          title: 'Angel Stadium in Anaheim',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 4, 24, 30, 7 ],
            "tuesday": [ 19, 24, 30, 6 ],
            "wednesday": [ 18, 22, 7, 5 ],
            "thursday": [ 17, 22, 27, 4 ],
            "friday": [ 16, 21, 27, 3 ],
            "saturday": [ 15, 20, 26, 2 ],
            "sunday": [ 20, 26, 1, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 142,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/kT85BXLpc.jpg',
          title: 'On Deck Circle',
          artist: 'The Halo Way',
          year: 'XXI cent.',
          rule: {
            "monday": [ 20, 26, 1, 8 ],
            "tuesday": [ 4, 24, 30, 7 ],
            "wednesday": [ 19, 24, 30, 6 ],
            "thursday": [ 18, 22, 7, 5 ],
            "friday": [ 17, 22, 27, 4 ],
            "saturday": [ 16, 21, 27, 3 ],
            "sunday": [ 15, 20, 26, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 143,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/IMG_420022.jpg',
          title: 'Los Angeles Angels Baseball',
          artist: '?',
          year: 'XXI cent.',
          rule: {
            "monday": [ 15, 20, 26, 2 ],
            "tuesday": [ 20, 26, 1, 8 ],
            "wednesday": [ 4, 24, 30, 7 ],
            "thursday": [ 19, 24, 30, 6 ],
            "friday": [ 18, 22, 7, 5 ],
            "saturday": [ 17, 22, 27, 4 ],
            "sunday": [ 16, 21, 27, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 144,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/US_baseball_blog_960x480_brick.jpg',
          title: 'Uber and the Los Angeles Angels of Anaheim',
          artist: '?',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 16, 21, 27, 3 ],
            "tuesday": [ 15, 20, 26, 2 ],
            "wednesday": [ 20, 26, 1, 8 ],
            "thursday": [ 4, 24, 30, 7 ],
            "friday": [ 19, 24, 30, 6 ],
            "saturday": [ 18, 22, 7, 5 ],
            "sunday": [ 17, 22, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 145,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/jEXwIYE.jpg',
          title: 'Earl Weaver Teaches the Art of Umpire Arguing',
          artist: '?',
          year: 'xx Cent.',
          rule: {
            "monday": [ 17, 22, 27, 4 ],
            "tuesday": [ 16, 21, 27, 3 ],
            "wednesday": [ 15, 20, 26, 2 ],
            "thursday": [ 20, 26, 1, 8 ],
            "friday": [ 4, 24, 30, 7 ],
            "saturday": [ 19, 24, 30, 6 ],
            "sunday": [ 18, 22, 7, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 146,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Miller-Park-FB2.jpg',
          title: 'Miller Park',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 18, 22, 7, 5 ],
            "tuesday": [ 17, 22, 27, 4 ],
            "wednesday": [ 16, 21, 27, 3 ],
            "thursday": [ 15, 20, 26, 2 ],
            "friday": [ 20, 26, 1, 8 ],
            "saturday": [ 4, 24, 30, 7 ],
            "sunday": [ 19, 24, 30, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 147,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/miller-park-milwaukee-wisconsin-mountain-dreams.jpg',
          title: 'Miller Park',
          artist: 'Mountain Dreams',
          year: '2016',
          rule: {
            "monday": [ 20, 25, 1, 7 ],
            "tuesday": [ 19, 23, 8, 6 ],
            "wednesday": [ 18, 23, 28, 5 ],
            "thursday": [ 17, 22, 28, 4 ],
            "friday": [ 16, 21, 27, 3 ],
            "saturday": [ 21, 27, 2, 9 ],
            "sunday": [ 5, 25, 1, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 148,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Brewers.jpg',
          title: 'Milwaukee Brewers',
          artist: 'Lindsay Frost',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 5, 25, 1, 8 ],
            "tuesday": [ 20, 25, 1, 7 ],
            "wednesday": [ 19, 23, 8, 6 ],
            "thursday": [ 18, 23, 28, 5 ],
            "friday": [ 17, 22, 28, 4 ],
            "saturday": [ 16, 21, 27, 3 ],
            "sunday": [ 21, 27, 2, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 149,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/milwaukee-brewers-miller-field.jpg',
          title: 'Miller Park and the Brewers',
          artist: 'Meg Taylor',
          year: '2017',
          rule: {
            "monday": [ 21, 27, 2, 9 ],
            "tuesday": [ 5, 25, 1, 8 ],
            "wednesday": [ 20, 25, 1, 7 ],
            "thursday": [ 19, 23, 8, 6 ],
            "friday": [ 18, 23, 28, 5 ],
            "saturday": [ 17, 22, 28, 4 ],
            "sunday": [ 16, 21, 27, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 150,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/3671386509cf48d849f8c53f5ff174ad--milwaukee-brewers-top-photo.jpg',
          title: 'Davis\' 2 HRs send Brewers over Reds',
          artist: '?',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 16, 21, 27, 3 ],
            "tuesday": [ 21, 27, 2, 9 ],
            "wednesday": [ 5, 25, 1, 8 ],
            "thursday": [ 20, 25, 1, 7 ],
            "friday": [ 19, 23, 8, 6 ],
            "saturday": [ 18, 23, 28, 5 ],
            "sunday": [ 17, 22, 28, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 151,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/stadium650.jpg',
          title: 'Jim Thome at Tampa Bay’s Tropicana Field',
          artist: 'Doug Benc',
          year: '2008',
          rule: {
            "monday": [ 17, 22, 28, 4 ],
            "tuesday": [ 16, 21, 27, 3 ],
            "wednesday": [ 21, 27, 2, 9 ],
            "thursday": [ 5, 25, 1, 8 ],
            "friday": [ 20, 25, 1, 7 ],
            "saturday": [ 19, 23, 8, 6 ],
            "sunday": [ 18, 23, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 152,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/f23c08835a02370e814cda365bb9b625.jpg',
          title: 'Tropicana Field - Home of the Tampa Bay Rays',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 18, 23, 28, 5 ],
            "tuesday": [ 17, 22, 28, 4 ],
            "wednesday": [ 16, 21, 27, 3 ],
            "thursday": [ 21, 27, 2, 9 ],
            "friday": [ 5, 25, 1, 8 ],
            "saturday": [ 20, 25, 1, 7 ],
            "sunday": [ 19, 23, 8, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 153,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Rays.jpg',
          title: 'Tampa Bay Rays',
          artist: 'Lindsay Frost',
          year: '?',
          rule: {
            "monday": [ 19, 23, 8, 6 ],
            "tuesday": [ 18, 23, 28, 5 ],
            "wednesday": [ 17, 22, 28, 4 ],
            "thursday": [ 16, 21, 27, 3 ],
            "friday": [ 21, 27, 2, 9 ],
            "saturday": [ 5, 25, 1, 8 ],
            "sunday": [ 20, 25, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 154,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Brent-Honeywell-Scouting-Report.jpg',
          title: 'Brent Honeywell',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 21, 26, 2, 8 ],
            "tuesday": [ 20, 24, 9, 7 ],
            "wednesday": [ 19, 24, 29, 6 ],
            "thursday": [ 18, 23, 29, 5 ],
            "friday": [ 17, 22, 28, 4 ],
            "saturday": [ 22, 28, 3, 10 ],
            "sunday": [ 6, 26, 2, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 155,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/AR-304029659.jpg',
          title: 'Tampa Bay Rays starting pitcher Chris Archer',
          artist: 'Will Vragovic',
          year: '2017',
          rule: {
            "monday": [ 6, 26, 2, 9 ],
            "tuesday": [ 21, 26, 2, 8 ],
            "wednesday": [ 20, 24, 9, 7 ],
            "thursday": [ 19, 24, 29, 6 ],
            "friday": [ 18, 23, 29, 5 ],
            "saturday": [ 17, 22, 28, 4 ],
            "sunday": [ 22, 28, 3, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 156,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/4c07febe632350102ea63ba2f335716d.jpg',
          title: '?',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 22, 28, 3, 10 ],
            "tuesday": [ 6, 26, 2, 9 ],
            "wednesday": [ 21, 26, 2, 8 ],
            "thursday": [ 20, 24, 9, 7 ],
            "friday": [ 19, 24, 29, 6 ],
            "saturday": [ 18, 23, 29, 5 ],
            "sunday": [ 17, 22, 28, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 157,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/att_park_by_ostrichzero-d2xl6p9.jpg',
          title: 'ATT Park',
          artist: 'OstrichZero',
          year: '2010 - 2017',
          rule: {
            "monday": [ 17, 22, 28, 4 ],
            "tuesday": [ 22, 28, 3, 10 ],
            "wednesday": [ 6, 26, 2, 9 ],
            "thursday": [ 21, 26, 2, 8 ],
            "friday": [ 20, 24, 9, 7 ],
            "saturday": [ 19, 24, 29, 6 ],
            "sunday": [ 18, 23, 29, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 158,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/San-Francisco-Giants_01.jpg',
          title: 'San Francisco Giants',
          artist: 'Dowdle Folk Art',
          year: 'xxi cent.',
          rule: {
            "monday": [ 18, 23, 29, 5 ],
            "tuesday": [ 17, 22, 28, 4 ],
            "wednesday": [ 22, 28, 3, 10 ],
            "thursday": [ 6, 26, 2, 9 ],
            "friday": [ 21, 26, 2, 8 ],
            "saturday": [ 20, 24, 9, 7 ],
            "sunday": [ 19, 24, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 159,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/1623917-7.jpg',
          title: 'San Francisco Giants',
          artist: 'Saatchi',
          year: '?',
          rule: {
            "monday": [ 19, 24, 29, 6 ],
            "tuesday": [ 18, 23, 29, 5 ],
            "wednesday": [ 17, 22, 28, 4 ],
            "thursday": [ 22, 28, 3, 10 ],
            "friday": [ 6, 26, 2, 9 ],
            "saturday": [ 21, 26, 2, 8 ],
            "sunday": [ 20, 24, 9, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 160,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/4d7bbe1c48d5da8c763b4a4fd1ee4819--giants-sf-giants-baseball.jpg',
          title: 'Buster Posey',
          artist: '?',
          year: 'xxi cent.',
          rule: {
            "monday": [ 20, 24, 9, 7 ],
            "tuesday": [ 19, 24, 29, 6 ],
            "wednesday": [ 18, 23, 29, 5 ],
            "thursday": [ 17, 22, 28, 4 ],
            "friday": [ 22, 28, 3, 10 ],
            "saturday": [ 6, 26, 2, 9 ],
            "sunday": [ 21, 26, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 161,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/strike-1949.jpg',
          title: 'Strike',
          artist: 'Jacob Lawrence',
          year: '1949',
          rule: {
            "monday": [ 22, 27, 3, 9 ],
            "tuesday": [ 21, 25, 10, 8 ],
            "wednesday": [ 20, 25, 30, 6 ],
            "thursday": [ 19, 24, 30, 6 ],
            "friday": [ 18, 23, 29, 5 ],
            "saturday": [ 23, 29, 4, 11 ],
            "sunday": [ 7, 27, 3, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 162,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Kadir-Nelson-mighty-josh_1024x1024.jpeg',
          title: 'Mighty Josh',
          artist: 'Kadir Nelson',
          year: 'xx cent.',
          rule: {
            "monday": [ 7, 27, 3, 10 ],
            "tuesday": [ 22, 27, 3, 9 ],
            "wednesday": [ 21, 25, 10, 8 ],
            "thursday": [ 20, 25, 30, 6 ],
            "friday": [ 19, 24, 30, 6 ],
            "saturday": [ 18, 23, 29, 5 ],
            "sunday": [ 23, 29, 4, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 163,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/WeOliveBaseball.jpg',
          title: 'We Olive Baseball',
          artist: 'Michael Godard',
          year: 'xxi cent.',
          rule: {
            "monday": [ 23, 29, 4, 11 ],
            "tuesday": [ 7, 27, 3, 10 ],
            "wednesday": [ 22, 27, 3, 9 ],
            "thursday": [ 21, 25, 10, 8 ],
            "friday": [ 20, 25, 30, 6 ],
            "saturday": [ 19, 24, 30, 6 ],
            "sunday": [ 18, 23, 29, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 164,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/cb607159dab941f5f2b3f0ee48751fe8--boston-sports-boston-baseball.jpg',
          title: '?',
          artist: '?',
          year: 'xx cent.',
          rule: {
            "monday": [ 18, 23, 29, 5 ],
            "tuesday": [ 23, 29, 4, 11 ],
            "wednesday": [ 7, 27, 3, 10 ],
            "thursday": [ 22, 27, 3, 9 ],
            "friday": [ 21, 25, 10, 8 ],
            "saturday": [ 20, 25, 30, 6 ],
            "sunday": [ 19, 24, 30, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 165,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/baseball-paintings.jpg',
          title: 'Abstract NY Baseball Outfielder',
          artist: 'Tommervik',
          year: '2010',
          rule: {
            "monday": [ 19, 24, 30, 6 ],
            "tuesday": [ 18, 23, 29, 5 ],
            "wednesday": [ 23, 29, 4, 11 ],
            "thursday": [ 7, 27, 3, 10 ],
            "friday": [ 22, 27, 3, 9 ],
            "saturday": [ 21, 25, 10, 8 ],
            "sunday": [ 20, 25, 30, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 166,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/b104c30f94ce537003ab52a31d211eda-e1449271871848.jpg',
          title: 'Topps 1955 Baseball Box',
          artist: '?',
          year: 'xx cent.',
          rule: {
            "monday": [ 20, 25, 30, 6 ],
            "tuesday": [ 19, 24, 30, 6 ],
            "wednesday": [ 18, 23, 29, 5 ],
            "thursday": [ 23, 29, 4, 11 ],
            "friday": [ 7, 27, 3, 10 ],
            "saturday": [ 22, 27, 3, 9 ],
            "sunday": [ 21, 25, 10, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 167,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/posed_slide.jpeg',
          title: 'Posed Slide',
          artist: '?',
          year: 'xix - xx cent.',
          rule: {
            "monday": [ 21, 25, 10, 8 ],
            "tuesday": [ 20, 25, 30, 6 ],
            "wednesday": [ 19, 24, 30, 6 ],
            "thursday": [ 18, 23, 29, 5 ],
            "friday": [ 23, 29, 4, 11 ],
            "saturday": [ 7, 27, 3, 10 ],
            "sunday": [ 22, 27, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 168,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/FreeVector-Baseball-Graphics.jpg',
          title: 'Batter',
          artist: 'ArtAmp.com',
          year: 'xxi cent.',
          rule: {
            "monday": [ 23, 28, 4, 10 ],
            "tuesday": [ 22, 26, 11, 9 ],
            "wednesday": [ 21, 26, 1, 7 ],
            "thursday": [ 20, 25, 1, 7 ],
            "friday": [ 19, 24, 30, 6 ],
            "saturday": [ 24, 30, 5, 12 ],
            "sunday": [ 8, 28, 4, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 169,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Vintage-Baseball-Player-Illustration.png',
          title: 'Vintage Baseball Player Illustration',
          artist: 'GDJ',
          year: '2015',
          rule: {
            "monday": [ 8, 28, 4, 11 ],
            "tuesday": [ 23, 28, 4, 10 ],
            "wednesday": [ 22, 26, 11, 9 ],
            "thursday": [ 21, 26, 1, 7 ],
            "friday": [ 20, 25, 1, 7 ],
            "saturday": [ 19, 24, 30, 6 ],
            "sunday": [ 24, 30, 5, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 170,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/13113230084_77bab2c4f7_o.jpg',
          title: '1967 CHI',
          artist: '?',
          year: '1967',
          rule: {
            "monday": [ 24, 30, 5, 12 ],
            "tuesday": [ 8, 28, 4, 11 ],
            "wednesday": [ 23, 28, 4, 10 ],
            "thursday": [ 22, 26, 11, 9 ],
            "friday": [ 21, 26, 1, 7 ],
            "saturday": [ 20, 25, 1, 7 ],
            "sunday": [ 19, 24, 30, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 171,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Sliding-Into-Third.jpg',
          title: 'Sliding Into Third',
          artist: 'C.F. Payne',
          year: 'xx - xxi cent.',
          rule: {
            "monday": [ 19, 24, 30, 6 ],
            "tuesday": [ 24, 30, 5, 12 ],
            "wednesday": [ 8, 28, 4, 11 ],
            "thursday": [ 23, 28, 4, 10 ],
            "friday": [ 22, 26, 11, 9 ],
            "saturday": [ 21, 26, 1, 7 ],
            "sunday": [ 20, 25, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 172,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/depositphotos_14134905-stock-illustration-baseball-sketch.jpg',
          title: 'Baseball Sketch',
          artist: 'Vector Illustration',
          year: 'xxi cent.',
          rule: {
            "monday": [ 20, 25, 1, 7 ],
            "tuesday": [ 19, 24, 30, 6 ],
            "wednesday": [ 24, 30, 5, 12 ],
            "thursday": [ 8, 28, 4, 11 ],
            "friday": [ 23, 28, 4, 10 ],
            "saturday": [ 22, 26, 11, 9 ],
            "sunday": [ 21, 26, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 173,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/tumblr_orz9g30t661rsc228o1_500.jpg',
          title: 'Casey at the Bat',
          artist: 'Katie Kelsky',
          year: '2017',
          rule: {
            "monday": [ 21, 26, 1, 7 ],
            "tuesday": [ 20, 25, 1, 7 ],
            "wednesday": [ 19, 24, 30, 6 ],
            "thursday": [ 24, 30, 5, 12 ],
            "friday": [ 8, 28, 4, 11 ],
            "saturday": [ 23, 28, 4, 10 ],
            "sunday": [ 22, 26, 11, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 174,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/sodkfjhsdkhf.gif',
          title: '?',
          artist: 'Greg Jezewski',
          year: '?',
          rule: {
            "monday": [ 22, 26, 11, 9 ],
            "tuesday": [ 21, 26, 1, 7 ],
            "wednesday": [ 20, 25, 1, 7 ],
            "thursday": [ 19, 24, 30, 6 ],
            "friday": [ 24, 30, 5, 12 ],
            "saturday": [ 8, 28, 4, 11 ],
            "sunday": [ 23, 28, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 175,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/0f787356ad9086ac02465e58bac69b50--baseball-art-sports-art.jpg',
          title: '?',
          artist: 'C.F. Payne',
          year: '?',
          rule: {
            "monday": [ 24, 29, 5, 11 ],
            "tuesday": [ 23, 27, 12, 10 ],
            "wednesday": [ 22, 27, 2, 8 ],
            "thursday": [ 21, 26, 2, 8 ],
            "friday": [ 20, 25, 1, 7 ],
            "saturday": [ 25, 1, 6, 13 ],
            "sunday": [ 9, 29, 5, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 176,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/g33.jpg',
          title: 'Baseball Dream VIII',
          artist: 'pop art canvas',
          year: '2013',
          rule: {
            "monday": [ 9, 29, 5, 12 ],
            "tuesday": [ 24, 29, 5, 11 ],
            "wednesday": [ 23, 27, 12, 10 ],
            "thursday": [ 22, 27, 2, 8 ],
            "friday": [ 21, 26, 2, 8 ],
            "saturday": [ 20, 25, 1, 7 ],
            "sunday": [ 25, 1, 6, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 177,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/main_1498256257-Yogi-Berra-Signed-Charles-Fazzino-Original-Hand-Painted-3D-Pop-Art-Baseball-with-Swarovski-Crystals-1-1-MLB-Hologram-Steiner-COA-PristineAuction.jpg',
          title: 'Yogi Berra',
          artist: 'Charles Fazzino',
          year: '1972',
          rule: {
            "monday": [ 25, 1, 6, 13 ],
            "tuesday": [ 9, 29, 5, 12 ],
            "wednesday": [ 24, 29, 5, 11 ],
            "thursday": [ 23, 27, 12, 10 ],
            "friday": [ 22, 27, 2, 8 ],
            "saturday": [ 21, 26, 2, 8 ],
            "sunday": [ 20, 25, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 178,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Jackie-Robinson-vintage-canvas-leinwand-ausmalen-paintbynumbers-popart-walldeco-acrylic-ausmalbild-portrait-interior-individuell-persönlich-personalized-originell-geschenkidee-hochzeitsgeschenk-400x284.jpg',
          title: 'Baseball player Jackie Robinson',
          artist: 'Paint 2B',
          year: 'xxi cent.',
          rule: {
            "monday": [ 20, 25, 1, 7 ],
            "tuesday": [ 25, 1, 6, 13 ],
            "wednesday": [ 9, 29, 5, 12 ],
            "thursday": [ 24, 29, 5, 11 ],
            "friday": [ 23, 27, 12, 10 ],
            "saturday": [ 22, 27, 2, 8 ],
            "sunday": [ 21, 26, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 179,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/ICA1211.jpg',
          title: 'USAIllinois, Chicago, Cubs, baseball Color Pop',
          artist: 'iCanvas',
          year: 'xxi cent.',
          rule: {
            "monday": [ 21, 26, 2, 8 ],
            "tuesday": [ 20, 25, 1, 7 ],
            "wednesday": [ 25, 1, 6, 13 ],
            "thursday": [ 9, 29, 5, 12 ],
            "friday": [ 24, 29, 5, 11 ],
            "saturday": [ 23, 27, 12, 10 ],
            "sunday": [ 22, 27, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 180,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Baseball-at-Night-Morris-Kantor-631.jpg',
          title: 'Baseball at Night',
          artist: 'Morris Kantor',
          year: '1934',
          rule: {
            "monday": [ 22, 27, 2, 8 ],
            "tuesday": [ 21, 26, 2, 8 ],
            "wednesday": [ 20, 25, 1, 7 ],
            "thursday": [ 25, 1, 6, 13 ],
            "friday": [ 9, 29, 5, 12 ],
            "saturday": [ 24, 29, 5, 11 ],
            "sunday": [ 23, 27, 12, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 181,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/clipart30.jpg',
          title: 'Baseball Clip Art',
          artist: '?',
          year: 'xx cent.',
          rule: {
            "monday": [ 23, 27, 12, 10 ],
            "tuesday": [ 22, 27, 2, 8 ],
            "wednesday": [ 21, 26, 2, 8 ],
            "thursday": [ 20, 25, 1, 7 ],
            "friday": [ 25, 1, 6, 13 ],
            "saturday": [ 9, 29, 5, 12 ],
            "sunday": [ 24, 29, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 182,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/10944181-standard.jpg',
          title: 'CC Sabathia',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 25, 30, 6, 12 ],
            "tuesday": [ 24, 28, 13, 11 ],
            "wednesday": [ 23, 28, 3, 9 ],
            "thursday": [ 22, 27, 3, 9 ],
            "friday": [ 21, 26, 2, 8 ],
            "saturday": [ 26, 2, 7, 14 ],
            "sunday": [ 10, 30, 6, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 183,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Kadir-Nelson-low-and-away_1024x1024.jpg',
          title: 'Low and Away',
          artist: 'Kadir Nelson',
          year: '?',
          rule: {
            "monday": [ 10, 30, 6, 13 ],
            "tuesday": [ 25, 30, 6, 12 ],
            "wednesday": [ 24, 28, 13, 11 ],
            "thursday": [ 23, 28, 3, 9 ],
            "friday": [ 22, 27, 3, 9 ],
            "saturday": [ 21, 26, 2, 8 ],
            "sunday": [ 26, 2, 7, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 184,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Generic-Baseball-Art-KL-01.jpg',
          title: 'Generic Baseball Art',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 26, 2, 7, 14 ],
            "tuesday": [ 10, 30, 6, 13 ],
            "wednesday": [ 25, 30, 6, 12 ],
            "thursday": [ 24, 28, 13, 11 ],
            "friday": [ 23, 28, 3, 9 ],
            "saturday": [ 22, 27, 3, 9 ],
            "sunday": [ 21, 26, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 185,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/the-legacy-of-moonlight-graham-mark-a-brown.jpg',
          title: 'The Legacy of Moonlight',
          artist: 'Mark A. Brown',
          year: '?',
          rule: {
            "monday": [ 21, 26, 2, 8 ],
            "tuesday": [ 26, 2, 7, 14 ],
            "wednesday": [ 10, 30, 6, 13 ],
            "thursday": [ 25, 30, 6, 12 ],
            "friday": [ 24, 28, 13, 11 ],
            "saturday": [ 23, 28, 3, 9 ],
            "sunday": [ 22, 27, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('april_arts_id_seq', (SELECT MAX(id) FROM april_arts));");
    });
};
