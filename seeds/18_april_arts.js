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
          img_path: './img/april/Kadir-Nelson-low-and-away_1024x1024.jpeg',
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
        },
        {
          id: 186,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/baseball-wallpaper-16.jpg',
          title: 'Baseball Wallpaper',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 22, 27, 3, 9 ],
            "tuesday": [ 21, 26, 2, 8 ],
            "wednesday": [ 26, 2, 7, 14 ],
            "thursday": [ 10, 30, 6, 13 ],
            "friday": [ 25, 30, 6, 12 ],
            "saturday": [ 24, 28, 13, 11 ],
            "sunday": [ 23, 28, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 187,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/0020416d07f0b9477e932e48abfd36f6.jpg',
          title: 'Baseball Wallpaper',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 23, 28, 3, 9 ],
            "tuesday": [ 22, 27, 3, 9 ],
            "wednesday": [ 21, 26, 2, 8 ],
            "thursday": [ 26, 2, 7, 14 ],
            "friday": [ 10, 30, 6, 13 ],
            "saturday": [ 25, 30, 6, 12 ],
            "sunday": [ 24, 28, 13, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 188,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/b43f7d9959062c8144773dfff0922961.jpg',
          title: 'Baseball Wallpaper',
          artist: 'Wallpaper Cave',
          year: '?',
          rule: {
            "monday": [ 24, 28, 13, 11 ],
            "tuesday": [ 23, 28, 3, 9 ],
            "wednesday": [ 22, 27, 3, 9 ],
            "thursday": [ 21, 26, 2, 8 ],
            "friday": [ 26, 2, 7, 14 ],
            "saturday": [ 10, 30, 6, 13 ],
            "sunday": [ 25, 30, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 189,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/baseball-wallpaper-15.jpg',
          title: 'Baseball Wallpaper',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 26, 1, 7, 13 ],
            "tuesday": [ 25, 29, 14, 12 ],
            "wednesday": [ 24, 29, 4, 10 ],
            "thursday": [ 23, 28, 4, 10 ],
            "friday": [ 22, 27, 3, 9 ],
            "saturday": [ 27, 3, 8, 15 ],
            "sunday": [ 11, 1, 7, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 190,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/1987354a269fabe8a2731f2afad39fa9--baseball-art-baseball-batter.jpg',
          title: 'Baseball',
          artist: 'Ken Dubrowski',
          year: '?',
          rule: {
            "monday": [ 11, 1, 7, 14 ],
            "tuesday": [ 26, 1, 7, 13 ],
            "wednesday": [ 25, 29, 14, 12 ],
            "thursday": [ 24, 29, 4, 10 ],
            "friday": [ 23, 28, 4, 10 ],
            "saturday": [ 22, 27, 3, 9 ],
            "sunday": [ 27, 3, 8, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 191,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/sanpancho1.jpg',
          title: 'Giants mural at Bar San Pancho',
          artist: 'Sam Flores and Ronnie Buders',
          year: '2017',
          rule: {
            "monday": [ 27, 3, 8, 15 ],
            "tuesday": [ 11, 1, 7, 14 ],
            "wednesday": [ 26, 1, 7, 13 ],
            "thursday": [ 25, 29, 14, 12 ],
            "friday": [ 24, 29, 4, 10 ],
            "saturday": [ 23, 28, 4, 10 ],
            "sunday": [ 22, 27, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 192,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/2eb87eb315ca6b93aab65cb75cd1388b.jpg',
          title: 'Hand painted mural of Dodger Stadium on a 1940\'s era Baseball Glove ',
          artist: 'George Lopez',
          year: 'xxi cent.',
          rule: {
            "monday": [ 22, 27, 3, 9 ],
            "tuesday": [ 27, 3, 8, 15 ],
            "wednesday": [ 11, 1, 7, 14 ],
            "thursday": [ 26, 1, 7, 13 ],
            "friday": [ 25, 29, 14, 12 ],
            "saturday": [ 24, 29, 4, 10 ],
            "sunday": [ 23, 28, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 193,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/9786e5848eda6f14f335a056e955c663.jpg',
          title: 'Big Red Machine',
          artist: 'Mark Riedy',
          year: '1975',
          rule: {
            "monday": [ 23, 28, 4, 10 ],
            "tuesday": [ 22, 27, 3, 9 ],
            "wednesday": [ 27, 3, 8, 15 ],
            "thursday": [ 11, 1, 7, 14 ],
            "friday": [ 26, 1, 7, 13 ],
            "saturday": [ 25, 29, 14, 12 ],
            "sunday": [ 24, 29, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 194,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/e792499fe8a6327f17700a8174ef4de9--baseball-posters-baseball-art.jpg',
          title: 'Big Papi David Ortiz in Yankee Stadium',
          artist: 'Dave Olsen',
          year: 'xxi cent.',
          rule: {
            "monday": [ 24, 29, 4, 10 ],
            "tuesday": [ 23, 28, 4, 10 ],
            "wednesday": [ 22, 27, 3, 9 ],
            "thursday": [ 27, 3, 8, 15 ],
            "friday": [ 11, 1, 7, 14 ],
            "saturday": [ 26, 1, 7, 13 ],
            "sunday": [ 25, 29, 14, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 195,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/a97505ab779fae6f637415ae0c87b69e--baseball-field-baseball-art.jpg',
          title: '?',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 25, 29, 14, 12 ],
            "tuesday": [ 24, 29, 4, 10 ],
            "wednesday": [ 23, 28, 4, 10 ],
            "thursday": [ 22, 27, 3, 9 ],
            "friday": [ 27, 3, 8, 15 ],
            "saturday": [ 11, 1, 7, 14 ],
            "sunday": [ 26, 1, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 196,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/716N09142_7BFCQ.jpg',
          title: 'No Title(While He Lives...)',
          artist: 'Raymond Pettibon',
          year: '2006',
          rule: {
            "monday": [ 27, 2, 8, 14 ],
            "tuesday": [ 26, 30, 15, 13 ],
            "wednesday": [ 25, 30, 5, 11 ],
            "thursday": [ 24, 29, 5, 11 ],
            "friday": [ 23, 28, 4, 10 ],
            "saturday": [ 28, 4, 9, 16 ],
            "sunday": [ 12, 2, 8, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 197,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/1916-08-05-Saturday-Evening-Post-Norman-Rockwell-cover-Gramps-At-The-Plate-no-logo-400-Digimarc.jpg',
          title: 'Saturday Evening Post: Gramps at the Plate',
          artist: 'Norman Rockwell',
          year: '1916',
          rule: {
            "monday": [ 12, 2, 8, 15 ],
            "tuesday": [ 27, 2, 8, 14 ],
            "wednesday": [ 26, 30, 15, 13 ],
            "thursday": [ 25, 30, 5, 11 ],
            "friday": [ 24, 29, 5, 11 ],
            "saturday": [ 23, 28, 4, 10 ],
            "sunday": [ 28, 4, 9, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 198,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/baseball-glove-tommervik.jpg',
          title: 'Baseball Mitt Painting',
          artist: 'Tommervik',
          year: '2012',
          rule: {
            "monday": [ 28, 4, 9, 16 ],
            "tuesday": [ 12, 2, 8, 15 ],
            "wednesday": [ 27, 2, 8, 14 ],
            "thursday": [ 26, 30, 15, 13 ],
            "friday": [ 25, 30, 5, 11 ],
            "saturday": [ 24, 29, 5, 11 ],
            "sunday": [ 23, 28, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 199,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/99d51ed976a08760423bcf71f84cea85.jpg',
          title: 'Satchel Paige',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 23, 28, 4, 10 ],
            "tuesday": [ 28, 4, 9, 16 ],
            "wednesday": [ 12, 2, 8, 15 ],
            "thursday": [ 27, 2, 8, 14 ],
            "friday": [ 26, 30, 15, 13 ],
            "saturday": [ 25, 30, 5, 11 ],
            "sunday": [ 24, 29, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 200,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/sosa5x.jpg',
          title: 'Sammy Sosa',
          artist: 'PaulB',
          year: '1998',
          rule: {
            "monday": [ 24, 29, 5, 11 ],
            "tuesday": [ 23, 28, 4, 10 ],
            "wednesday": [ 28, 4, 9, 16 ],
            "thursday": [ 12, 2, 8, 15 ],
            "friday": [ 27, 2, 8, 14 ],
            "saturday": [ 26, 30, 15, 13 ],
            "sunday": [ 25, 30, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 201,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/ALC-Uniform-CWS.png',
          title: 'Chicago White Sox Uniforms',
          artist: '?',
          year: 'xxi cent.',
          rule: {
            "monday": [ 25, 30, 5, 11 ],
            "tuesday": [ 24, 29, 5, 11 ],
            "wednesday": [ 23, 28, 4, 10 ],
            "thursday": [ 28, 4, 9, 16 ],
            "friday": [ 12, 2, 8, 15 ],
            "saturday": [ 27, 2, 8, 14 ],
            "sunday": [ 26, 30, 15, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 202,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/joseAbreu.jpeg',
          title: 'Jose Abreu',
          artist: '?',
          year: 'xxi cent.',
          rule: {
            "monday": [ 26, 30, 15, 13 ],
            "tuesday": [ 25, 30, 5, 11 ],
            "wednesday": [ 24, 29, 5, 11 ],
            "thursday": [ 23, 28, 4, 10 ],
            "friday": [ 28, 4, 9, 16 ],
            "saturday": [ 12, 2, 8, 15 ],
            "sunday": [ 27, 2, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 203,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/rangers-white-sox-baseball.jpg',
          title: 'Former Negro Leaguer and White Sox player Minnie Minoso stands during the national anthem',
          artist: '?',
          year: '2013',
          rule: {
            "monday": [ 28, 3, 9, 15 ],
            "tuesday": [ 27, 1, 16, 14 ],
            "wednesday": [ 26, 1, 6, 12 ],
            "thursday": [ 25, 30, 6, 12 ],
            "friday": [ 24, 29, 5, 11 ],
            "saturday": [ 29, 5, 10, 17 ],
            "sunday": [ 13, 3, 9, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 204,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/26-Y-RIGHTS-master768.jpg',
          title: 'Guaranteed Rate Field',
          artist: '?',
          year: '2016',
          rule: {
            "monday": [ 13, 3, 9, 16 ],
            "tuesday": [ 28, 3, 9, 15 ],
            "wednesday": [ 27, 1, 16, 14 ],
            "thursday": [ 26, 1, 6, 12 ],
            "friday": [ 25, 30, 6, 12 ],
            "saturday": [ 24, 29, 5, 11 ],
            "sunday": [ 29, 5, 10, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 205,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/chicago-white-sox-ball.jpg',
          title: 'Chicago White Sox Ball',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 29, 5, 10, 17 ],
            "tuesday": [ 13, 3, 9, 16 ],
            "wednesday": [ 28, 3, 9, 15 ],
            "thursday": [ 27, 1, 16, 14 ],
            "friday": [ 26, 1, 6, 12 ],
            "saturday": [ 25, 30, 6, 12 ],
            "sunday": [ 24, 29, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 206,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/sfl-miami-marlins-giancarlo-stanton-mvp-favorite-blog-20150319.jpg',
          title: 'Miami Marlins: Giancarlo Stanton favored to win 2015 National League Most Valuable Player award',
          artist: 'Justin Edmonds',
          year: '2017',
          rule: {
            "monday": [ 24, 29, 5, 11 ],
            "tuesday": [ 29, 5, 10, 17 ],
            "wednesday": [ 13, 3, 9, 16 ],
            "thursday": [ 28, 3, 9, 15 ],
            "friday": [ 27, 1, 16, 14 ],
            "saturday": [ 26, 1, 6, 12 ],
            "sunday": [ 25, 30, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 207,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/miami_marlins_2012_uniforms_by_jayjaxon-d4ui8sm.jpg',
          title: 'Miami Marlins 2012 Uniforms',
          artist: '?',
          year: '2012',
          rule: {
            "monday": [ 25, 30, 6, 12 ],
            "tuesday": [ 24, 29, 5, 11 ],
            "wednesday": [ 29, 5, 10, 17 ],
            "thursday": [ 13, 3, 9, 16 ],
            "friday": [ 28, 3, 9, 15 ],
            "saturday": [ 27, 1, 16, 14 ],
            "sunday": [ 26, 1, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 208,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/wbc_1_ky7pnjyl_fwq9ondd.jpg',
          title: 'World Baseball Classic at Marlins Park',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 26, 1, 6, 12 ],
            "tuesday": [ 25, 30, 6, 12 ],
            "wednesday": [ 24, 29, 5, 11 ],
            "thursday": [ 29, 5, 10, 17 ],
            "friday": [ 13, 3, 9, 16 ],
            "saturday": [ 28, 3, 9, 15 ],
            "sunday": [ 27, 1, 16, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 209,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/cheap-miami-marlins-tickets.jpg',
          title: 'Giancarlo Stanton',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 27, 1, 16, 14 ],
            "tuesday": [ 26, 1, 6, 12 ],
            "wednesday": [ 25, 30, 6, 12 ],
            "thursday": [ 24, 29, 5, 11 ],
            "friday": [ 29, 5, 10, 17 ],
            "saturday": [ 13, 3, 9, 16 ],
            "sunday": [ 28, 3, 9, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 210,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/livan7-feature.jpg',
          title: 'Livan Hernandez',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 29, 4, 10, 16 ],
            "tuesday": [ 28, 2, 17, 15 ],
            "wednesday": [ 27, 2, 7, 13 ],
            "thursday": [ 26, 1, 7, 13 ],
            "friday": [ 25, 30, 6, 12 ],
            "saturday": [ 30, 6, 11, 18 ],
            "sunday": [ 14, 4, 10, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 211,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/eckersley_bobblehead_082617.png',
          title: 'Dennis Eckersley Bobblehead',
          artist: '?',
          year: '2017',
          rule: {
            "monday": [ 14, 4, 10, 17 ],
            "tuesday": [ 29, 4, 10, 16 ],
            "wednesday": [ 28, 2, 17, 15 ],
            "thursday": [ 27, 2, 7, 13 ],
            "friday": [ 26, 1, 7, 13 ],
            "saturday": [ 25, 30, 6, 12 ],
            "sunday": [ 30, 6, 11, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 212,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/OAK - Sonny Gray_0.jpg',
          title: 'Sonny Gray',
          artist: '?',
          year: '2016',
          rule: {
            "monday": [ 30, 6, 11, 18 ],
            "tuesday": [ 14, 4, 10, 17 ],
            "wednesday": [ 29, 4, 10, 16 ],
            "thursday": [ 28, 2, 17, 15 ],
            "friday": [ 27, 2, 7, 13 ],
            "saturday": [ 26, 1, 7, 13 ],
            "sunday": [ 25, 30, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 213,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Tunnel.jpg',
          title: 'A\'s Wallpaper',
          artist: '?',
          year: 'xxi cent.',
          rule: {
            "monday": [ 25, 30, 6, 12 ],
            "tuesday": [ 30, 6, 11, 18 ],
            "wednesday": [ 14, 4, 10, 17 ],
            "thursday": [ 29, 4, 10, 16 ],
            "friday": [ 28, 2, 17, 15 ],
            "saturday": [ 27, 2, 7, 13 ],
            "sunday": [ 26, 1, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 214,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Baseballs.jpg',
          title: 'Baseballs',
          artist: '?',
          year: 'xxi cent.',
          rule: {
            "monday": [ 26, 1, 7, 13 ],
            "tuesday": [ 25, 30, 6, 12 ],
            "wednesday": [ 30, 6, 11, 18 ],
            "thursday": [ 14, 4, 10, 17 ],
            "friday": [ 29, 4, 10, 16 ],
            "saturday": [ 28, 2, 17, 15 ],
            "sunday": [ 27, 2, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 215,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/ColiseumAisle.jpg',
          title: 'Coliseam Aisle',
          artist: '?',
          year: 'xxi cent.',
          rule: {
            "monday": [ 27, 2, 7, 13 ],
            "tuesday": [ 26, 1, 7, 13 ],
            "wednesday": [ 25, 30, 6, 12 ],
            "thursday": [ 30, 6, 11, 18 ],
            "friday": [ 14, 4, 10, 17 ],
            "saturday": [ 29, 4, 10, 16 ],
            "sunday": [ 28, 2, 17, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 216,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/9572234-mlb-chicago-cubs-at-pittsburgh-pirates.jpeg',
          title: 'John Jaso Hits for the Cycle',
          artist: 'Charles LeClaire',
          year: '2016',
          rule: {
            "monday": [ 28, 2, 17, 15 ],
            "tuesday": [ 27, 2, 7, 13 ],
            "wednesday": [ 26, 1, 7, 13 ],
            "thursday": [ 25, 30, 6, 12 ],
            "friday": [ 30, 6, 11, 18 ],
            "saturday": [ 14, 4, 10, 17 ],
            "sunday": [ 29, 4, 10, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 217,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Pittsburgh-Pirates-Russell-Martin-Home-Plate-Cubs.jpg',
          title: 'Russell Martin at Home Plate',
          artist: 'Charles Rex Arbogast',
          year: '2013',
          rule: {
            "monday": [ 30, 5, 11, 17 ],
            "tuesday": [ 29, 3, 18, 16 ],
            "wednesday": [ 28, 3, 8, 14 ],
            "thursday": [ 27, 2, 8, 14 ],
            "friday": [ 26, 1, 7, 13 ],
            "saturday": [ 1, 7, 12, 19 ],
            "sunday": [ 15, 5, 11, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 218,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/GettyImages-5322387461988602722.jpg',
          title: 'Andrew McCutchen',
          artist: '?',
          year: '2016',
          rule: {
            "monday": [ 15, 5, 11, 18 ],
            "tuesday": [ 30, 5, 11, 17 ],
            "wednesday": [ 29, 3, 18, 16 ],
            "thursday": [ 28, 3, 8, 14 ],
            "friday": [ 27, 2, 8, 14 ],
            "saturday": [ 26, 1, 7, 13 ],
            "sunday": [ 1, 7, 12, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 219,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/130729stlpitrt_1130-edit.jpg',
          title: 'Pirates Wallpaper',
          artist: '?',
          year: 'xxi cent.',
          rule: {
            "monday": [ 1, 7, 12, 19 ],
            "tuesday": [ 15, 5, 11, 18 ],
            "wednesday": [ 30, 5, 11, 17 ],
            "thursday": [ 29, 3, 18, 16 ],
            "friday": [ 28, 3, 8, 14 ],
            "saturday": [ 27, 2, 8, 14 ],
            "sunday": [ 26, 1, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 220,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Pittsburgh-Pirates-Image.jpg',
          title: 'Pittsburgh Pirates Image',
          artist: 'Billion Photos',
          year: 'xxi cent.',
          rule: {
            "monday": [ 26, 1, 7, 13 ],
            "tuesday": [ 1, 7, 12, 19 ],
            "wednesday": [ 15, 5, 11, 18 ],
            "thursday": [ 30, 5, 11, 17 ],
            "friday": [ 29, 3, 18, 16 ],
            "saturday": [ 28, 3, 8, 14 ],
            "sunday": [ 27, 2, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 221,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/donaldson1280-1040x572.jpg',
          title: 'Toronto Blue Jays slugger Josh Donaldson follows through on a home run ball.',
          artist: 'Mark Blinch',
          year: '2017',
          rule: {
            "monday": [ 27, 2, 8, 14 ],
            "tuesday": [ 26, 1, 7, 13 ],
            "wednesday": [ 1, 7, 12, 19 ],
            "thursday": [ 15, 5, 11, 18 ],
            "friday": [ 30, 5, 11, 17 ],
            "saturday": [ 29, 3, 18, 16 ],
            "sunday": [ 28, 3, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 222,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/a66320d3035fc80974ca13aaa4ebca8a.jpg',
          title: 'Blue Jays Logo on the Field',
          artist: 'Brand Thunder',
          year: 'xxi cent.',
          rule: {
            "monday": [ 28, 3, 8, 14 ],
            "tuesday": [ 27, 2, 8, 14 ],
            "wednesday": [ 26, 1, 7, 13 ],
            "thursday": [ 1, 7, 12, 19 ],
            "friday": [ 15, 5, 11, 18 ],
            "saturday": [ 30, 5, 11, 17 ],
            "sunday": [ 29, 3, 18, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 223,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/mlb-toronto-blue-jays-new-era-vintage-fitted-hat-cap-size-7-3-8-6a4fb0ed4d97d4938fff08fd9dc018fe.jpg',
          title: 'Blue Jays Vintage Fitted Hat',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 29, 3, 18, 16 ],
            "tuesday": [ 28, 3, 8, 14 ],
            "wednesday": [ 27, 2, 8, 14 ],
            "thursday": [ 26, 1, 7, 13 ],
            "friday": [ 1, 7, 12, 19 ],
            "saturday": [ 15, 5, 11, 18 ],
            "sunday": [ 30, 5, 11, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 224,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/joeybats.jpg',
          title: 'Joey Bats',
          artist: '?',
          year: 'xxi cent.',
          rule: {
            "monday": [ 1, 6, 12, 18 ],
            "tuesday": [ 30, 4, 19, 17 ],
            "wednesday": [ 29, 4, 9, 15 ],
            "thursday": [ 28, 3, 9, 15 ],
            "friday": [ 27, 2, 8, 14 ],
            "saturday": [ 2, 8, 13, 20 ],
            "sunday": [ 16, 6, 12, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 225,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Toronto_Blue_Jays_Fitted_Custom_Exclusive_Black_White_and_Red_C_grande.png',
          title: 'Toronto Blue Jays Fitted Custom Exclusive Black White and Red',
          artist: '?',
          year: 'xxi cent.',
          rule: {
            "monday": [ 16, 6, 12, 19 ],
            "tuesday": [ 1, 6, 12, 18 ],
            "wednesday": [ 30, 4, 19, 17 ],
            "thursday": [ 29, 4, 9, 15 ],
            "friday": [ 28, 3, 9, 15 ],
            "saturday": [ 27, 2, 8, 14 ],
            "sunday": [ 2, 8, 13, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 226,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/maricopa-county-files-dismiss-arizona-diamondbacks-lawsuit-chase-field.jpg',
          title: 'Chase Field',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 2, 8, 13, 20 ],
            "tuesday": [ 16, 6, 12, 19 ],
            "wednesday": [ 1, 6, 12, 18 ],
            "thursday": [ 30, 4, 19, 17 ],
            "friday": [ 29, 4, 9, 15 ],
            "saturday": [ 28, 3, 9, 15 ],
            "sunday": [ 27, 2, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 227,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/1461608009-mlb-diamondback-artist-tickets1.jpg',
          title: 'Arizona Diamondbacks Tickets and Upcoming Events',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 27, 2, 8, 14 ],
            "tuesday": [ 2, 8, 13, 20 ],
            "wednesday": [ 16, 6, 12, 19 ],
            "thursday": [ 1, 6, 12, 18 ],
            "friday": [ 30, 4, 19, 17 ],
            "saturday": [ 29, 4, 9, 15 ],
            "sunday": [ 28, 3, 9, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 228,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/arizona-diamondbacks-v-kansas-city-royals-db984f5f89aebf07.jpg',
          title: 'Zack Greinke of the Diamondbacks',
          artist: 'Brian Davidson',
          year: '2017',
          rule: {
            "monday": [ 28, 3, 9, 15 ],
            "tuesday": [ 27, 2, 8, 14 ],
            "wednesday": [ 2, 8, 13, 20 ],
            "thursday": [ 16, 6, 12, 19 ],
            "friday": [ 1, 6, 12, 18 ],
            "saturday": [ 30, 4, 19, 17 ],
            "sunday": [ 29, 4, 9, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 229,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/randy-johnson.jpg',
          title: 'Randy Johnson',
          artist: '?',
          year: 'xxi cent.',
          rule: {
            "monday": [ 29, 4, 9, 15 ],
            "tuesday": [ 28, 3, 9, 15 ],
            "wednesday": [ 27, 2, 8, 14 ],
            "thursday": [ 2, 8, 13, 20 ],
            "friday": [ 16, 6, 12, 19 ],
            "saturday": [ 1, 6, 12, 18 ],
            "sunday": [ 30, 4, 19, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 230,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/8526_arizona_diamondbacks-batting_practice-2016.png',
          title: 'Arizona Diamondbacks Logo',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 30, 4, 19, 17 ],
            "tuesday": [ 29, 4, 9, 15 ],
            "wednesday": [ 28, 3, 9, 15 ],
            "thursday": [ 27, 2, 8, 14 ],
            "friday": [ 2, 8, 13, 20 ],
            "saturday": [ 16, 6, 12, 19 ],
            "sunday": [ 1, 6, 12, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 231,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/lindor.jpg',
          title: 'Francisco Lindor #12 of the Cleveland Indians',
          artist: 'Jason Miller',
          year: '2017',
          rule: {
            "monday": [ 2, 7, 13, 19 ],
            "tuesday": [ 1, 5, 20, 18 ],
            "wednesday": [ 30, 5, 10, 16 ],
            "thursday": [ 29, 4, 10, 16 ],
            "friday": [ 28, 3, 9, 15 ],
            "saturday": [ 3, 9, 14, 21 ],
            "sunday": [ 17, 7, 13, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 232,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Screen-Shot-2017-03-05-at-9.31.30-PM.png',
          title: 'Cleveland 2017 Hype Video Screenshot',
          artist: '?',
          year: '2017',
          rule: {
            "monday": [ 17, 7, 13, 20 ],
            "tuesday": [ 2, 7, 13, 19 ],
            "wednesday": [ 1, 5, 20, 18 ],
            "thursday": [ 30, 5, 10, 16 ],
            "friday": [ 29, 4, 10, 16 ],
            "saturday": [ 28, 3, 9, 15 ],
            "sunday": [ 3, 9, 14, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 233,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Cleveland-Indians-Block-C-Video-Still-850x500.jpg',
          title: 'We\'re Under Way',
          artist: '?',
          year: '2016',
          rule: {
            "monday": [ 3, 9, 14, 21 ],
            "tuesday": [ 17, 7, 13, 20 ],
            "wednesday": [ 2, 7, 13, 19 ],
            "thursday": [ 1, 5, 20, 18 ],
            "friday": [ 30, 5, 10, 16 ],
            "saturday": [ 29, 4, 10, 16 ],
            "sunday": [ 28, 3, 9, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 234,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/tmg-article_default_mobile.jpg',
          title: 'Cleveland Against the World',
          artist: 'Erik Drost',
          year: '2016',
          rule: {
            "monday": [ 28, 3, 9, 15 ],
            "tuesday": [ 3, 9, 14, 21 ],
            "wednesday": [ 17, 7, 13, 20 ],
            "thursday": [ 2, 7, 13, 19 ],
            "friday": [ 1, 5, 20, 18 ],
            "saturday": [ 30, 5, 10, 16 ],
            "sunday": [ 29, 4, 10, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 235,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/640X400-iNDIANS-1.png',
          title: 'Cleveland Indains',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 29, 4, 10, 16 ],
            "tuesday": [ 28, 3, 9, 15 ],
            "wednesday": [ 3, 9, 14, 21 ],
            "thursday": [ 17, 7, 13, 20 ],
            "friday": [ 2, 7, 13, 19 ],
            "saturday": [ 1, 5, 20, 18 ],
            "sunday": [ 30, 5, 10, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 236,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/USATSI_8518249-1021x580.jpg',
          title: 'New York Mets',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 30, 5, 10, 16 ],
            "tuesday": [ 29, 4, 10, 16 ],
            "wednesday": [ 28, 3, 9, 15 ],
            "thursday": [ 3, 9, 14, 21 ],
            "friday": [ 17, 7, 13, 20 ],
            "saturday": [ 2, 7, 13, 19 ],
            "sunday": [ 1, 5, 20, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 237,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/GettyImages-142807062.jpg',
          title: 'Citi Field in New York City',
          artist: 'Nick Laham',
          year: '2017',
          rule: {
            "monday": [ 1, 5, 20, 18 ],
            "tuesday": [ 30, 5, 10, 16 ],
            "wednesday": [ 29, 4, 10, 16 ],
            "thursday": [ 28, 3, 9, 15 ],
            "friday": [ 3, 9, 14, 21 ],
            "saturday": [ 17, 7, 13, 20 ],
            "sunday": [ 2, 7, 13, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 238,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/848091742-new-york-mets-v-atlanta-braves.jpg.jpg',
          title: 'New York Mets rebuild must wait until the pitching depth is gone',
          artist: '?',
          year: '2017',
          rule: {
            "monday": [ 3, 8, 14, 20 ],
            "tuesday": [ 2, 6, 21, 19 ],
            "wednesday": [ 1, 6, 11, 17 ],
            "thursday": [ 30, 5, 11, 17 ],
            "friday": [ 29, 4, 10, 16 ],
            "saturday": [ 4, 10, 15, 22 ],
            "sunday": [ 18, 8, 14, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 239,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/mets-balloons-new-york-mets-balloons-2__24933.1477753603.386.513.gif',
          title: 'New York Mets Balloon',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 18, 8, 14, 21 ],
            "tuesday": [ 3, 8, 14, 20 ],
            "wednesday": [ 2, 6, 21, 19 ],
            "thursday": [ 1, 6, 11, 17 ],
            "friday": [ 30, 5, 11, 17 ],
            "saturday": [ 29, 4, 10, 16 ],
            "sunday": [ 4, 10, 15, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 240,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/gettyimages-609579824-1.jpg',
          title: 'Jose Reyes #7 of the New York Mets jogs to the dugout before the game against the Atlanta Braves at Citi Field on September 21, 2016 in New York City',
          artist: 'Al Bello',
          year: '2016',
          rule: {
            "monday": [ 4, 10, 15, 22 ],
            "tuesday": [ 18, 8, 14, 21 ],
            "wednesday": [ 3, 8, 14, 20 ],
            "thursday": [ 2, 6, 21, 19 ],
            "friday": [ 1, 6, 11, 17 ],
            "saturday": [ 30, 5, 11, 17 ],
            "sunday": [ 29, 4, 10, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 241,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/cheap-seattle-mariners-tickets.jpg',
          title: 'Nelson Cruz',
          artist: '?',
          year: 'xxi cent.',
          rule: {
            "monday": [ 29, 4, 10, 16 ],
            "tuesday": [ 4, 10, 15, 22 ],
            "wednesday": [ 18, 8, 14, 21 ],
            "thursday": [ 3, 8, 14, 20 ],
            "friday": [ 2, 6, 21, 19 ],
            "saturday": [ 1, 6, 11, 17 ],
            "sunday": [ 30, 5, 11, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 242,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/bannerx.jpg',
          title: 'Safeco Field',
          artist: '?',
          year: 'xxi cent.',
          rule: {
            "monday": [ 30, 5, 11, 17 ],
            "tuesday": [ 29, 4, 10, 16 ],
            "wednesday": [ 4, 10, 15, 22 ],
            "thursday": [ 18, 8, 14, 21 ],
            "friday": [ 3, 8, 14, 20 ],
            "saturday": [ 2, 6, 21, 19 ],
            "sunday": [ 1, 6, 11, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 243,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/FelixHernandez.jpeg',
          title: 'Felix Hernandez',
          artist: '?',
          year: '2017',
          rule: {
            "monday": [ 1, 6, 11, 17 ],
            "tuesday": [ 30, 5, 11, 17 ],
            "wednesday": [ 29, 4, 10, 16 ],
            "thursday": [ 4, 10, 15, 22 ],
            "friday": [ 18, 8, 14, 21 ],
            "saturday": [ 3, 8, 14, 20 ],
            "sunday": [ 2, 6, 21, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 244,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/hwl.jpeg',
          title: 'Seattle Mariners New Era 2017 MLB Diamond Era Spring Training 59FIFTY Cap',
          artist: '?',
          year: '2017',
          rule: {
            "monday": [ 2, 6, 21, 19 ],
            "tuesday": [ 1, 6, 11, 17 ],
            "wednesday": [ 30, 5, 11, 17 ],
            "thursday": [ 29, 4, 10, 16 ],
            "friday": [ 4, 10, 15, 22 ],
            "saturday": [ 18, 8, 14, 21 ],
            "sunday": [ 3, 8, 14, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 245,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/seattle-mariners-safeco-field.jpg',
          title: 'Seattle Mariners Safeco Field',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 4, 9, 15, 21 ],
            "tuesday": [ 3, 7, 22, 20 ],
            "wednesday": [ 2, 7, 12, 18 ],
            "thursday": [ 1, 6, 12, 18 ],
            "friday": [ 30, 5, 11, 17 ],
            "saturday": [ 5, 11, 16, 23 ],
            "sunday": [ 19, 9, 15, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 246,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/9575371-mlb-cincinnati-reds-at-st.-louis-cardinals.jpeg',
          title: 'St. Louis Cardinals starting pitcher Alex Reyes (61) celebrates with catcher Yadier Molina (4) after getting the final out of the sixth inning against the Cincinnati Reds during the sixth inning at Busch Stadium',
          artist: 'Jeff Curry',
          year: '2016',
          rule: {
            "monday": [ 19, 9, 15, 22 ],
            "tuesday": [ 4, 9, 15, 21 ],
            "wednesday": [ 3, 7, 22, 20 ],
            "thursday": [ 2, 7, 12, 18 ],
            "friday": [ 1, 6, 12, 18 ],
            "saturday": [ 30, 5, 11, 17 ],
            "sunday": [ 5, 11, 16, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 247,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/cardinals-astros-videoSmall.jpg',
          title: 'Cardinals Astros',
          artist: '?',
          year: '2017',
          rule: {
            "monday": [ 5, 11, 16, 23 ],
            "tuesday": [ 19, 9, 15, 22 ],
            "wednesday": [ 4, 9, 15, 21 ],
            "thursday": [ 3, 7, 22, 20 ],
            "friday": [ 2, 7, 12, 18 ],
            "saturday": [ 1, 6, 12, 18 ],
            "sunday": [ 30, 5, 11, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 248,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/59df5070925e32f5ed6893f5.jpeg',
          title: 'St. Louis Cardinals',
          artist: 'Getty Images',
          year: '2017',
          rule: {
            "monday": [ 30, 5, 11, 17 ],
            "tuesday": [ 5, 11, 16, 23 ],
            "wednesday": [ 19, 9, 15, 22 ],
            "thursday": [ 4, 9, 15, 21 ],
            "friday": [ 3, 7, 22, 20 ],
            "saturday": [ 2, 7, 12, 18 ],
            "sunday": [ 1, 6, 12, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 249,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/LWOOD_STLOUIS_CARDINALS_TICKETS.jpg',
          title: '2017 St. Louis Cardinals Tickets',
          artist: '?',
          year: '2017',
          rule: {
            "monday": [ 1, 6, 12, 18 ],
            "tuesday": [ 30, 5, 11, 17 ],
            "wednesday": [ 5, 11, 16, 23 ],
            "thursday": [ 19, 9, 15, 22 ],
            "friday": [ 4, 9, 15, 21 ],
            "saturday": [ 3, 7, 22, 20 ],
            "sunday": [ 2, 7, 12, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 250,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/cheap-st-louis-cardinals-tickets.jpg',
          title: 'Cheap St. Louis Cardinals Tickets',
          artist: '?',
          year: '2017',
          rule: {
            "monday": [ 2, 7, 12, 18 ],
            "tuesday": [ 1, 6, 12, 18 ],
            "wednesday": [ 30, 5, 11, 17 ],
            "thursday": [ 5, 11, 16, 23 ],
            "friday": [ 19, 9, 15, 22 ],
            "saturday": [ 4, 9, 15, 21 ],
            "sunday": [ 3, 7, 22, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 251,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/1966-baltimore-orioles-mlb-world-series-champions-patch.jpg',
          title: 'Baltimore Orioles MLB World Series Champions Patch',
          artist: '?',
          year: '1966',
          rule: {
            "monday": [ 3, 7, 22, 20 ],
            "tuesday": [ 2, 7, 12, 18 ],
            "wednesday": [ 1, 6, 12, 18 ],
            "thursday": [ 30, 5, 11, 17 ],
            "friday": [ 5, 11, 16, 23 ],
            "saturday": [ 19, 9, 15, 22 ],
            "sunday": [ 4, 9, 15, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 252,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/ap_rays_orioles_baseball_57878578.jpg',
          title: 'Adam Jones',
          artist: 'Gail Burton',
          year: '2013',
          rule: {
            "monday": [ 5, 10, 16, 22 ],
            "tuesday": [ 4, 8, 23, 21 ],
            "wednesday": [ 3, 8, 13, 19 ],
            "thursday": [ 2, 7, 13, 19 ],
            "friday": [ 1, 6, 12, 18 ],
            "saturday": [ 6, 12, 17, 24 ],
            "sunday": [ 20, 10, 16, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 253,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/1-baltimore-3-camden-yards-1038x692.jpg',
          title: 'Oriole Park at Camden Yards',
          artist: '?',
          year: 'xxi Cent.',
          rule: {
            "monday": [ 20, 10, 16, 23 ],
            "tuesday": [ 5, 10, 16, 22 ],
            "wednesday": [ 4, 8, 23, 21 ],
            "thursday": [ 3, 8, 13, 19 ],
            "friday": [ 2, 7, 13, 19 ],
            "saturday": [ 1, 6, 12, 18 ],
            "sunday": [ 6, 12, 17, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 254,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/USATSI_10008255.jpg',
          title: 'Zach Britton',
          artist: 'Patrick McDermott',
          year: '2017',
          rule: {
            "monday": [ 6, 12, 17, 24 ],
            "tuesday": [ 20, 10, 16, 23 ],
            "wednesday": [ 5, 10, 16, 22 ],
            "thursday": [ 4, 8, 23, 21 ],
            "friday": [ 3, 8, 13, 19 ],
            "saturday": [ 2, 7, 13, 19 ],
            "sunday": [ 1, 6, 12, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 255,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Former-MLB-great-Baltimore-Orioles-legend-Lee-May-dead-at-74.jpg',
          title: 'Lee May',
          artist: '?',
          year: 'xx cent.',
          rule: {
            "monday": [ 1, 6, 12, 18 ],
            "tuesday": [ 6, 12, 17, 24 ],
            "wednesday": [ 20, 10, 16, 23 ],
            "thursday": [ 5, 10, 16, 22 ],
            "friday": [ 4, 8, 23, 21 ],
            "saturday": [ 3, 8, 13, 19 ],
            "sunday": [ 2, 7, 13, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 256,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/arenado.jpg',
          title: 'Nolan Arenado',
          artist: '?',
          year: '2017',
          rule: {
            "monday": [ 2, 7, 13, 19 ],
            "tuesday": [ 1, 6, 12, 18 ],
            "wednesday": [ 6, 12, 17, 24 ],
            "thursday": [ 20, 10, 16, 23 ],
            "friday": [ 5, 10, 16, 22 ],
            "saturday": [ 4, 8, 23, 21 ],
            "sunday": [ 3, 8, 13, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 257,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/imagesRockies.jpeg',
          title: 'Charlie Blackmon',
          artist: '?',
          year: '2017',
          rule: {
            "monday": [ 3, 8, 13, 19 ],
            "tuesday": [ 2, 7, 13, 19 ],
            "wednesday": [ 1, 6, 12, 18 ],
            "thursday": [ 6, 12, 17, 24 ],
            "friday": [ 20, 10, 16, 23 ],
            "saturday": [ 5, 10, 16, 22 ],
            "sunday": [ 4, 8, 23, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 258,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/arizona-diamondbacks-v-colorado-rockies-20150624-034348-954.jpg',
          title: '?',
          artist: '?',
          year: '2016',
          rule: {
            "monday": [ 4, 8, 23, 21 ],
            "tuesday": [ 3, 8, 13, 19 ],
            "wednesday": [ 2, 7, 13, 19 ],
            "thursday": [ 1, 6, 12, 18 ],
            "friday": [ 6, 12, 17, 24 ],
            "saturday": [ 20, 10, 16, 23 ],
            "sunday": [ 5, 10, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 259,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Colorado-Rockies-CR-Logo-Neon-Sign-Custom-Neon-Signs-24-24.jpg',
          title: 'Colorado Rockies Logo Neon Sign',
          artist: '?',
          year: 'xxi cent.',
          rule: {
            "monday": [ 6, 11, 17, 23 ],
            "tuesday": [ 5, 9, 24, 22 ],
            "wednesday": [ 4, 9, 14, 20 ],
            "thursday": [ 3, 8, 14, 20 ],
            "friday": [ 2, 7, 13, 19 ],
            "saturday": [ 7, 13, 18, 25 ],
            "sunday": [ 21, 11, 17, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 260,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Ian-Desmond-With-Colorado-Rockies-900x440.jpg',
          title: 'Ian Desmond',
          artist: '?',
          year: 'xxi cent.',
          rule: {
            "monday": [ 21, 11, 17, 24 ],
            "tuesday": [ 6, 11, 17, 23 ],
            "wednesday": [ 5, 9, 24, 22 ],
            "thursday": [ 4, 9, 14, 20 ],
            "friday": [ 3, 8, 14, 20 ],
            "saturday": [ 2, 7, 13, 19 ],
            "sunday": [ 7, 13, 18, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 261,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/7958_detroit_tigers-partial-1994.png',
          title: 'Detroit Tigers Logo',
          artist: '?',
          year: 'xx cent.',
          rule: {
            "monday": [ 7, 13, 18, 25 ],
            "tuesday": [ 21, 11, 17, 24 ],
            "wednesday": [ 6, 11, 17, 23 ],
            "thursday": [ 5, 9, 24, 22 ],
            "friday": [ 4, 9, 14, 20 ],
            "saturday": [ 3, 8, 14, 20 ],
            "sunday": [ 2, 7, 13, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 262,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/tigersDownload.jpeg',
          title: 'A general view of Tiger Stadium prior to the final baseball game played at the 87 year old Tiger Stadium ',
          artist: 'Andy Patton',
          year: '1999',
          rule: {
            "monday": [ 2, 7, 13, 19 ],
            "tuesday": [ 7, 13, 18, 25 ],
            "wednesday": [ 21, 11, 17, 24 ],
            "thursday": [ 6, 11, 17, 23 ],
            "friday": [ 5, 9, 24, 22 ],
            "saturday": [ 4, 9, 14, 20 ],
            "sunday": [ 3, 8, 14, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 263,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/636204332289688144-AP-Twins-Tigers-Baseball-MIP.jpg',
          title: 'Detroit Tigers Ian Kinsler, left, and J.D. Martinez celebrate a home run against the Minnesota Twins',
          artist: 'Paul Sancya',
          year: '2016',
          rule: {
            "monday": [ 3, 8, 14, 20 ],
            "tuesday": [ 2, 7, 13, 19 ],
            "wednesday": [ 7, 13, 18, 25 ],
            "thursday": [ 21, 11, 17, 24 ],
            "friday": [ 6, 11, 17, 23 ],
            "saturday": [ 5, 9, 24, 22 ],
            "sunday": [ 4, 9, 14, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 264,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/9168774-mlb-spring-training-tampa-bay-rays-at-detroit-tigers.jpeg',
          title: 'Umpires meet with managers before the game between the Detroit Tigers and the Tampa Bay Rays at Joker Marchant Stadium',
          artist: 'Butch Dill',
          year: '2016',
          rule: {
            "monday": [ 4, 9, 14, 20 ],
            "tuesday": [ 3, 8, 14, 20 ],
            "wednesday": [ 2, 7, 13, 19 ],
            "thursday": [ 7, 13, 18, 25 ],
            "friday": [ 21, 11, 17, 24 ],
            "saturday": [ 6, 11, 17, 23 ],
            "sunday": [ 5, 9, 24, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 265,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/636549192341708572-TIGERS-022218-KD-18.jpg',
          title: 'Detroit Tigers catcher James McCann bats against Florida Southern',
          artist: 'Kirthmon F. Dozier',
          year: '2018',
          rule: {
            "monday": [ 5, 9, 24, 22 ],
            "tuesday": [ 4, 9, 14, 20 ],
            "wednesday": [ 3, 8, 14, 20 ],
            "thursday": [ 2, 7, 13, 19 ],
            "friday": [ 7, 13, 18, 25 ],
            "saturday": [ 21, 11, 17, 24 ],
            "sunday": [ 6, 11, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 266,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/9991015-mlb-philadelphia-phillies-at-cincinnati-reds.jpeg',
          title: 'Philadelphia Phillies third baseman Maikel Franco (7) slides in safe under the tag of Cincinnati Reds catcher Tucker Barnhart (16) during the first inning at Great American Ball Park',
          artist: 'Frank Victores',
          year: '2017',
          rule: {
            "monday": [ 7, 12, 18, 24 ],
            "tuesday": [ 6, 10, 25, 23 ],
            "wednesday": [ 5, 10, 15, 21 ],
            "thursday": [ 4, 9, 15, 21 ],
            "friday": [ 3, 8, 14, 20 ],
            "saturday": [ 8, 14, 19, 26 ],
            "sunday": [ 22, 12, 18, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 267,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/50781261-expos-v-phillies.jpg',
          title: 'Phillies',
          artist: 'Jamie Squire',
          year: '?',
          rule: {
            "monday": [ 22, 12, 18, 25 ],
            "tuesday": [ 7, 12, 18, 24 ],
            "wednesday": [ 6, 10, 25, 23 ],
            "thursday": [ 5, 10, 15, 21 ],
            "friday": [ 4, 9, 15, 21 ],
            "saturday": [ 3, 8, 14, 20 ],
            "sunday": [ 8, 14, 19, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 268,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/1890Phillies.jpg',
          title: '1890 Phillies',
          artist: '?',
          year: '1890',
          rule: {
            "monday": [ 8, 14, 19, 26 ],
            "tuesday": [ 22, 12, 18, 25 ],
            "wednesday": [ 7, 12, 18, 24 ],
            "thursday": [ 6, 10, 25, 23 ],
            "friday": [ 5, 10, 15, 21 ],
            "saturday": [ 4, 9, 15, 21 ],
            "sunday": [ 3, 8, 14, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 269,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/phillywordart-philadelphiaphillies-chaseutley-poster.jpg',
          title: 'Chase Utley',
          artist: 'Daniel Duffy',
          year: '2008',
          rule: {
            "monday": [ 3, 8, 14, 20 ],
            "tuesday": [ 8, 14, 19, 26 ],
            "wednesday": [ 22, 12, 18, 25 ],
            "thursday": [ 7, 12, 18, 24 ],
            "friday": [ 6, 10, 25, 23 ],
            "saturday": [ 5, 10, 15, 21 ],
            "sunday": [ 4, 9, 15, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 270,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/phillimg.jpeg',
          title: 'Hector Neris',
          artist: '?',
          year: '2017',
          rule: {
            "monday": [ 4, 9, 15, 21 ],
            "tuesday": [ 3, 8, 14, 20 ],
            "wednesday": [ 8, 14, 19, 26 ],
            "thursday": [ 22, 12, 18, 25 ],
            "friday": [ 7, 12, 18, 24 ],
            "saturday": [ 6, 10, 25, 23 ],
            "sunday": [ 5, 10, 15, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 271,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Will+Middlebrooks+Texas+Rangers+v+Los+Angeles+Lr2RVXe6pUIl.jpg',
          title: 'Will Middlebrooks #15 of the Texas Rangers',
          artist: 'Jayne Kamin-Oncea',
          year: '2017',
          rule: {
            "monday": [ 5, 10, 15, 21 ],
            "tuesday": [ 4, 9, 15, 21 ],
            "wednesday": [ 3, 8, 14, 20 ],
            "thursday": [ 8, 14, 19, 26 ],
            "friday": [ 22, 12, 18, 25 ],
            "saturday": [ 7, 12, 18, 24 ],
            "sunday": [ 6, 10, 25, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 272,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/russell-wilson-spring-training-15.jpg',
          title: 'Russell Wilson flashes some leather for the Rangers during drills',
          artist: '?',
          year: '2014',
          rule: {
            "monday": [ 6, 10, 25, 23 ],
            "tuesday": [ 5, 10, 15, 21 ],
            "wednesday": [ 4, 9, 15, 21 ],
            "thursday": [ 3, 8, 14, 20 ],
            "friday": [ 8, 14, 19, 26 ],
            "saturday": [ 22, 12, 18, 25 ],
            "sunday": [ 7, 12, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 273,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/ArlingtonFlags.jpeg',
          title: 'Texas Rangers Pre-game',
          artist: '?',
          year: 'xxi cent.',
          rule: {
            "monday": [ 8, 13, 19, 25 ],
            "tuesday": [ 7, 11, 26, 24 ],
            "wednesday": [ 6, 11, 16, 22 ],
            "thursday": [ 5, 10, 16, 22 ],
            "friday": [ 4, 9, 15, 21 ],
            "saturday": [ 9, 15, 20, 27 ],
            "sunday": [ 23, 13, 19, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 274,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/rangersstorms01.jpg',
          title: 'Texas Storms',
          artist: '?',
          year: '2016',
          rule: {
            "monday": [ 23, 13, 19, 26 ],
            "tuesday": [ 8, 13, 19, 25 ],
            "wednesday": [ 7, 11, 26, 24 ],
            "thursday": [ 6, 11, 16, 22 ],
            "friday": [ 5, 10, 16, 22 ],
            "saturday": [ 4, 9, 15, 21 ],
            "sunday": [ 9, 15, 20, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 275,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/TRANGE.jpg',
          title: 'Pudge and Juan',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 9, 15, 20, 27 ],
            "tuesday": [ 23, 13, 19, 26 ],
            "wednesday": [ 8, 13, 19, 25 ],
            "thursday": [ 7, 11, 26, 24 ],
            "friday": [ 6, 11, 16, 22 ],
            "saturday": [ 5, 10, 16, 22 ],
            "sunday": [ 4, 9, 15, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 276,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/chicago-cubs-world-series-win-game-7-theo-epstein.jpg',
          title: 'Members of the Chicago Cubs celebrate defeating the Cleveland Indians in Game 7 of the 2016 World Series at Progressive Field on Wednesday, November 2, 2016 in Cleveland, Ohio.',
          artist: 'Ron Vesely',
          year: '2016',
          rule: {
            "monday": [ 4, 9, 15, 21 ],
            "tuesday": [ 9, 15, 20, 27 ],
            "wednesday": [ 23, 13, 19, 26 ],
            "thursday": [ 8, 13, 19, 25 ],
            "friday": [ 7, 11, 26, 24 ],
            "saturday": [ 6, 11, 16, 22 ],
            "sunday": [ 5, 10, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 277,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/rs-chicago-cubs-246b3da2-d822-453a-9a68-f6beea6d1a29.jpg',
          title: 'Chicago Cubs third baseman Kris Bryant',
          artist: 'Jonathan Daniel',
          year: '2016',
          rule: {
            "monday": [ 5, 10, 16, 22 ],
            "tuesday": [ 4, 9, 15, 21 ],
            "wednesday": [ 9, 15, 20, 27 ],
            "thursday": [ 23, 13, 19, 26 ],
            "friday": [ 8, 13, 19, 25 ],
            "saturday": [ 7, 11, 26, 24 ],
            "sunday": [ 6, 11, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 278,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/usa_today_10154900.jpg',
          title: 'Chicago Cubs Celebrate Victory',
          artist: 'Mark J. Rebilas',
          year: '2017',
          rule: {
            "monday": [ 6, 11, 16, 22 ],
            "tuesday": [ 5, 10, 16, 22 ],
            "wednesday": [ 4, 9, 15, 21 ],
            "thursday": [ 9, 15, 20, 27 ],
            "friday": [ 23, 13, 19, 26 ],
            "saturday": [ 8, 13, 19, 25 ],
            "sunday": [ 7, 11, 26, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 279,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/MW-EZ251_Cubs_I_ZG_20161102061036.jpg',
          title: 'Chicago Cubs outfielder Ben Zobrist scores a run after colliding with Cleveland Indians catcher Roberto Perez in Game 6 of the 2016 World Series.',
          artist: '?',
          year: '2016',
          rule: {
            "monday": [ 7, 11, 26, 24 ],
            "tuesday": [ 6, 11, 16, 22 ],
            "wednesday": [ 5, 10, 16, 22 ],
            "thursday": [ 4, 9, 15, 21 ],
            "friday": [ 9, 15, 20, 27 ],
            "saturday": [ 23, 13, 19, 26 ],
            "sunday": [ 8, 13, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 280,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/cubsfield.jpeg',
          title: 'Wrigley Field',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 9, 14, 20, 26 ],
            "tuesday": [ 8, 12, 27, 25 ],
            "wednesday": [ 7, 12, 17, 23 ],
            "thursday": [ 6, 11, 17, 23 ],
            "friday": [ 5, 10, 16, 22 ],
            "saturday": [ 10, 16, 21, 28 ],
            "sunday": [ 24, 14, 20, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 281,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/redsox1.jpg',
          title: 'Friday Night Out, Boston Red Sox Theme',
          artist: '?',
          year: '2018',
          rule: {
            "monday": [ 24, 14, 20, 27 ],
            "tuesday": [ 9, 14, 20, 26 ],
            "wednesday": [ 8, 12, 27, 25 ],
            "thursday": [ 7, 12, 17, 23 ],
            "friday": [ 6, 11, 17, 23 ],
            "saturday": [ 5, 10, 16, 22 ],
            "sunday": [ 10, 16, 21, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 282,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/ortiz-goat.jpg',
          title: '34 Reasons David Ortiz Is the Greatest Red Sox Player Ever',
          artist: 'Getty Images',
          year: '2016',
          rule: {
            "monday": [ 10, 16, 21, 28 ],
            "tuesday": [ 24, 14, 20, 27 ],
            "wednesday": [ 9, 14, 20, 26 ],
            "thursday": [ 8, 12, 27, 25 ],
            "friday": [ 7, 12, 17, 23 ],
            "saturday": [ 6, 11, 17, 23 ],
            "sunday": [ 5, 10, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 283,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/usa_today_9913780.0.jpg',
          title: 'Tzu-Wei Lin, INF, Boston Red Sox',
          artist: 'Reinhold Matay',
          year: '2016',
          rule: {
            "monday": [ 5, 10, 16, 22 ],
            "tuesday": [ 10, 16, 21, 28 ],
            "wednesday": [ 24, 14, 20, 27 ],
            "thursday": [ 9, 14, 20, 26 ],
            "friday": [ 8, 12, 27, 25 ],
            "saturday": [ 7, 12, 17, 23 ],
            "sunday": [ 6, 11, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 284,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/david-price-96043e1f2c9ddd8d.jpg',
          title: 'Boston Red Sox\'s David Price reacts after striking out Houston Astros\' George Springer to retire the side with the bases loaded in the seventh inning Saturday',
          artist: 'Michael Dwyer',
          year: '2017',
          rule: {
            "monday": [ 6, 11, 17, 23 ],
            "tuesday": [ 5, 10, 16, 22 ],
            "wednesday": [ 10, 16, 21, 28 ],
            "thursday": [ 24, 14, 20, 27 ],
            "friday": [ 9, 14, 20, 26 ],
            "saturday": [ 8, 12, 27, 25 ],
            "sunday": [ 7, 12, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 285,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/bostonDugout.jpeg',
          title: 'Rain drops are seen on the Boston Red Sox dugout before game four of the American League Division Series between the Houston Astros and the Boston Red Sox at Fenway Park',
          artist: 'Tim Bradbury',
          year: '2017',
          rule: {
            "monday": [ 7, 12, 17, 23 ],
            "tuesday": [ 6, 11, 17, 23 ],
            "wednesday": [ 5, 10, 16, 22 ],
            "thursday": [ 10, 16, 21, 28 ],
            "friday": [ 24, 14, 20, 27 ],
            "saturday": [ 9, 14, 20, 26 ],
            "sunday": [ 8, 12, 27, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 286,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Royals_Dodgers_Baseball_69236-eb103.jpg',
          title: 'Clayton Kershaw is a singular talent, the Dodgers have been powered by the back end of their roster.',
          artist: 'Mark J. Terrill',
          year: '2017',
          rule: {
            "monday": [ 8, 12, 27, 25 ],
            "tuesday": [ 7, 12, 17, 23 ],
            "wednesday": [ 6, 11, 17, 23 ],
            "thursday": [ 5, 10, 16, 22 ],
            "friday": [ 10, 16, 21, 28 ],
            "saturday": [ 24, 14, 20, 27 ],
            "sunday": [ 9, 14, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 287,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/San+Francisco+Giants+v+Los+Angeles+Dodgers+LrTDcNFok7ml.jpg',
          title: 'Yasiel Puig #66 of the Los Angeles Dodgers flips his bat in the air as he reacts to popping up to left field for the last out of the fourth inning against the San Francisco Giants at Dodger Stadium.',
          artist: 'Stephen Dunn',
          year: '2017',
          rule: {
            "monday": [ 10, 15, 21, 27 ],
            "tuesday": [ 9, 13, 28, 26 ],
            "wednesday": [ 8, 13, 18, 24 ],
            "thursday": [ 7, 12, 18, 24 ],
            "friday": [ 6, 11, 17, 23 ],
            "saturday": [ 11, 17, 22, 29 ],
            "sunday": [ 25, 15, 21, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 288,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/8521459-mlb-seattle-mariners-at-los-angeles-dodgers.jpeg',
          title: 'Los Angeles, CA, USA; Los Angeles Dodgers line up for the National Anthem to commemorate Jackie Robinson Day before the game against the Seattle Mariners at Dodger Stadium. ',
          artist: 'Jayne Kamin',
          year: '2015',
          rule: {
            "monday": [ 25, 15, 21, 28 ],
            "tuesday": [ 10, 15, 21, 27 ],
            "wednesday": [ 9, 13, 28, 26 ],
            "thursday": [ 8, 13, 18, 24 ],
            "friday": [ 7, 12, 18, 24 ],
            "saturday": [ 6, 11, 17, 23 ],
            "sunday": [ 11, 17, 22, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 289,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/maxresdefault (1).jpg',
          title: 'Exploring Los Angeles Dodgers Baseball Stadium',
          artist: 'Adam the Woo',
          year: '2016',
          rule: {
            "monday": [ 11, 17, 22, 29 ],
            "tuesday": [ 25, 15, 21, 28 ],
            "wednesday": [ 10, 15, 21, 27 ],
            "thursday": [ 9, 13, 28, 26 ],
            "friday": [ 8, 13, 18, 24 ],
            "saturday": [ 7, 12, 18, 24 ],
            "sunday": [ 6, 11, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 290,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Pee-Wee-Reese-Jackie-Robinson-LA-Dodgers-640x497.jpg',
          title: 'Members of the 1954 Brooklyn Dodgers baseball team pose in the dugout.',
          artist: 'Hulton Archive/Getty Images',
          year: '1954',
          rule: {
            "monday": [ 6, 11, 17, 23 ],
            "tuesday": [ 11, 17, 22, 29 ],
            "wednesday": [ 25, 15, 21, 28 ],
            "thursday": [ 10, 15, 21, 27 ],
            "friday": [ 9, 13, 28, 26 ],
            "saturday": [ 8, 13, 18, 24 ],
            "sunday": [ 7, 12, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 291,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/855351308-kansas-city-royals-v-new-york-yankeesjpg.jpg',
          title: '20 Bold Predictions for the 2018 Royals',
          artist: 'Jim McIsaac',
          year: '2018',
          rule: {
            "monday": [ 7, 12, 18, 24 ],
            "tuesday": [ 6, 11, 17, 23 ],
            "wednesday": [ 11, 17, 22, 29 ],
            "thursday": [ 25, 15, 21, 28 ],
            "friday": [ 10, 15, 21, 27 ],
            "saturday": [ 9, 13, 28, 26 ],
            "sunday": [ 8, 13, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 292,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/151102003254-20-ws-game-five-1101-exlarge-169.jpg',
          title: 'World Series 2015: Royals vs. Mets',
          artist: '?',
          year: '2015',
          rule: {
            "monday": [ 8, 13, 18, 24 ],
            "tuesday": [ 7, 12, 18, 24 ],
            "wednesday": [ 6, 11, 17, 23 ],
            "thursday": [ 11, 17, 22, 29 ],
            "friday": [ 25, 15, 21, 28 ],
            "saturday": [ 10, 15, 21, 27 ],
            "sunday": [ 9, 13, 28, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 293,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/KYUB4LM6J5HWBI7GZLW3KHJ6WM.jpg',
          title: 'Yordano Ventura of the Kansas City Royals',
          artist: 'Allen J. Schaben',
          year: '2016',
          rule: {
            "monday": [ 9, 13, 28, 26 ],
            "tuesday": [ 8, 13, 18, 24 ],
            "wednesday": [ 7, 12, 18, 24 ],
            "thursday": [ 6, 11, 17, 23 ],
            "friday": [ 11, 17, 22, 29 ],
            "saturday": [ 25, 15, 21, 28 ],
            "sunday": [ 10, 15, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 294,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/tiSH4RB.jpg',
          title: 'Kansas City Royals Concept Uniforms',
          artist: '?',
          year: '2014',
          rule: {
            "monday": [ 11, 16, 22, 28 ],
            "tuesday": [ 10, 14, 29, 27 ],
            "wednesday": [ 9, 14, 19, 25 ],
            "thursday": [ 8, 13, 19, 25 ],
            "friday": [ 7, 12, 18, 24 ],
            "saturday": [ 12, 18, 23, 30 ],
            "sunday": [ 26, 16, 22, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 295,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/1989_Kansas_City_Royals_away_uniform.jpg',
          title: '1989 Kansas City Royals Away Uniform',
          artist: '?',
          year: '?',
          rule: {
            "monday": [ 26, 16, 22, 29 ],
            "tuesday": [ 11, 16, 22, 28 ],
            "wednesday": [ 10, 14, 29, 27 ],
            "thursday": [ 9, 14, 19, 25 ],
            "friday": [ 8, 13, 19, 25 ],
            "saturday": [ 7, 12, 18, 24 ],
            "sunday": [ 12, 18, 23, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 296,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/9969765-mlb-spring-training-washington-nationals-at-houston-astros.jpeg',
          title: 'Washington Nationals',
          artist: '?',
          year: '2017',
          rule: {
            "monday": [ 12, 18, 23, 30 ],
            "tuesday": [ 26, 16, 22, 29 ],
            "wednesday": [ 11, 16, 22, 28 ],
            "thursday": [ 10, 14, 29, 27 ],
            "friday": [ 9, 14, 19, 25 ],
            "saturday": [ 8, 13, 19, 25 ],
            "sunday": [ 7, 12, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 297,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/usa_today_9998409.0.jpg',
          title: 'Old face Ryan Zimmerman could be new catalyst for Washington Nationals in 2017',
          artist: 'Bill Streicher',
          year: '2017',
          rule: {
            "monday": [ 7, 12, 18, 24 ],
            "tuesday": [ 12, 18, 23, 30 ],
            "wednesday": [ 26, 16, 22, 29 ],
            "thursday": [ 11, 16, 22, 28 ],
            "friday": [ 10, 14, 29, 27 ],
            "saturday": [ 9, 14, 19, 25 ],
            "sunday": [ 8, 13, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 298,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/860269764-divisional-round-washington-nationals-v-chicago-cubs-game-four.jpg',
          title: 'What went right, what went wrong, and what are the top priorities for the Washington Nationals this offseason?',
          artist: '?',
          year: '2017',
          rule: {
            "monday": [ 8, 13, 19, 25 ],
            "tuesday": [ 7, 12, 18, 24 ],
            "wednesday": [ 12, 18, 23, 30 ],
            "thursday": [ 26, 16, 22, 29 ],
            "friday": [ 11, 16, 22, 28 ],
            "saturday": [ 10, 14, 29, 27 ],
            "sunday": [ 9, 14, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 299,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Nationals_Bryce-Harper15733_0.jpg',
          title: 'Nationals Bryce Harper',
          artist: '?',
          year: '2017',
          rule: {
            "monday": [ 9, 14, 19, 25 ],
            "tuesday": [ 8, 13, 19, 25 ],
            "wednesday": [ 7, 12, 18, 24 ],
            "thursday": [ 12, 18, 23, 30 ],
            "friday": [ 26, 16, 22, 29 ],
            "saturday": [ 11, 16, 22, 28 ],
            "sunday": [ 10, 14, 29, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 300,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/AR-171008987.jpg',
          title: 'Washington Nationals\' Ryan Zimmerman spreads his arms after hitting a three-run home run off Chicago Cubs relief pitcher Mike Montgomery (38) during the eighth inning in Game 2 of baseball\'s National League division series, at Nationals Park',
          artist: '?',
          year: '2017',
          rule: {
            "monday": [ 10, 14, 29, 27 ],
            "tuesday": [ 9, 14, 19, 25 ],
            "wednesday": [ 8, 13, 19, 25 ],
            "thursday": [ 7, 12, 18, 24 ],
            "friday": [ 12, 18, 23, 30 ],
            "saturday": [ 26, 16, 22, 29 ],
            "sunday": [ 11, 16, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 301,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/636451787640126370-USP-MLB-WORLD-SERIES-HOUSTON-ASTROS-AT-LOS-ANGELE-95023141.JPG',
          title: 'Astros win first World Series championship in franchise history',
          artist: '?',
          year: '2017',
          rule: {
            "monday": [ 12, 17, 23, 29 ],
            "tuesday": [ 11, 15, 30, 28 ],
            "wednesday": [ 10, 15, 20, 26 ],
            "thursday": [ 9, 14, 20, 26 ],
            "friday": [ 8, 13, 19, 25 ],
            "saturday": [ 13, 19, 24, 1 ],
            "sunday": [ 27, 17, 23, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 302,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/ALW-Uniform-HOU.png',
          title: 'Houston Atros Uniform',
          artist: '?',
          year: 'xxi cent.',
          rule: {
            "monday": [ 27, 17, 23, 30 ],
            "tuesday": [ 12, 17, 23, 29 ],
            "wednesday": [ 11, 15, 30, 28 ],
            "thursday": [ 10, 15, 20, 26 ],
            "friday": [ 9, 14, 20, 26 ],
            "saturday": [ 8, 13, 19, 25 ],
            "sunday": [ 13, 19, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 303,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/springer_0422150_3bf1136a-d6b7-1879-c00ed6d3ea4b1689.jpg',
          title: 'George Springer',
          artist: '?',
          year: '2017',
          rule: {
            "monday": [ 13, 19, 24, 1 ],
            "tuesday": [ 27, 17, 23, 30 ],
            "wednesday": [ 12, 17, 23, 29 ],
            "thursday": [ 11, 15, 30, 28 ],
            "friday": [ 10, 15, 20, 26 ],
            "saturday": [ 9, 14, 20, 26 ],
            "sunday": [ 8, 13, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 304,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/2534731_630x354.jpg',
          title: 'Houston Astros\' Jose Altuve scores the game-winning run past New York Yankees catcher Gary Sanchez during the ninth inning of Game 2',
          artist: 'David J. Phillip',
          year: '2017',
          rule: {
            "monday": [ 8, 13, 19, 25 ],
            "tuesday": [ 13, 19, 24, 1 ],
            "wednesday": [ 27, 17, 23, 30 ],
            "thursday": [ 12, 17, 23, 29 ],
            "friday": [ 11, 15, 30, 28 ],
            "saturday": [ 10, 15, 20, 26 ],
            "sunday": [ 9, 14, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 305,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/IX5232PMUZCTZDEHYHYGK5OYV4.jpg',
          title: 'Minute Maid Park and its retractable roof is ready for Games 3, 4 and 5 of the World Series.',
          artist: 'Larry W. Smith',
          year: '2017',
          rule: {
            "monday": [ 9, 14, 20, 26 ],
            "tuesday": [ 8, 13, 19, 25 ],
            "wednesday": [ 13, 19, 24, 1 ],
            "thursday": [ 27, 17, 23, 30 ],
            "friday": [ 12, 17, 23, 29 ],
            "saturday": [ 11, 15, 30, 28 ],
            "sunday": [ 10, 15, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 306,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/reds654567654.jpg',
          title: 'Cincinnatti Reds',
          artist: '?',
          year: '2015',
          rule: {
            "monday": [ 10, 15, 20, 26 ],
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
          id: 307,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/cincinnati-reds-lose-three-in-a-row-to-san-francisco-giants.jpg',
          title: 'Joey Votto #19 of the Cincinnati Reds reacts after striking out against the San Francisco Giants in Game Five of the National League Division Series at Great American Ball Park on October 11, 2012 in Cincinnati, Ohio.',
          artist: ' Jonathan Daniel',
          year: '2012',
          rule: {
            "monday": [ 11, 15, 30, 28 ],
            "tuesday": [ 10, 15, 20, 26 ],
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
          id: 308,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/gettyimages-528551302.jpg',
          title: 'Unfortunate',
          artist: 'Joe Robbins',
          year: '2016',
          rule: {
            "monday": [ 13, 18, 24, 30 ],
            "tuesday": [ 12, 16, 1, 29 ],
            "wednesday": [ 11, 16, 21, 27 ],
            "thursday": [ 10, 15, 21, 27 ],
            "friday": [ 9, 14, 20, 26 ],
            "saturday": [ 14, 20, 25, 2 ],
            "sunday": [ 28, 18, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 309,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/2F665049766%2F960x0.jpg',
          title: 'The Cincinnati Reds are a young enough team that the 2017 season must be hitting reset and taking a step back.',
          artist: 'Andy Lyons',
          year: '2017',
          rule: {
            "monday": [ 28, 18, 24, 1 ],
            "tuesday": [ 13, 18, 24, 30 ],
            "wednesday": [ 12, 16, 1, 29 ],
            "thursday": [ 11, 16, 21, 27 ],
            "friday": [ 10, 15, 21, 27 ],
            "saturday": [ 9, 14, 20, 26 ],
            "sunday": [ 14, 20, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 310,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/0318_cincinnati-reds_400x280.jpg',
          title: 'Cincinnati Reds',
          artist: '?',
          year: '2011',
          rule: {
            "monday": [ 14, 20, 25, 2 ],
            "tuesday": [ 28, 18, 24, 1 ],
            "wednesday": [ 13, 18, 24, 30 ],
            "thursday": [ 12, 16, 1, 29 ],
            "friday": [ 11, 16, 21, 27 ],
            "saturday": [ 10, 15, 21, 27 ],
            "sunday": [ 9, 14, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 311,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/BBIB474.png',
          title: 'New York Yankees',
          artist: 'Getty Images',
          year: 'xxi cent.',
          rule: {
            "monday": [ 9, 14, 20, 26 ],
            "tuesday": [ 14, 20, 25, 2 ],
            "wednesday": [ 28, 18, 24, 1 ],
            "thursday": [ 13, 18, 24, 30 ],
            "friday": [ 12, 16, 1, 29 ],
            "saturday": [ 11, 16, 21, 27 ],
            "sunday": [ 10, 15, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 312,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/9484510-mlb-tampa-bay-rays-new-york-yankees.jpg',
          title: 'Yanee Stadium',
          artist: '?',
          year: 'xxi cent.',
          rule: {
            "monday": [ 10, 15, 21, 27 ],
            "tuesday": [ 9, 14, 20, 26 ],
            "wednesday": [ 14, 20, 25, 2 ],
            "thursday": [ 28, 18, 24, 1 ],
            "friday": [ 13, 18, 24, 30 ],
            "saturday": [ 12, 16, 1, 29 ],
            "sunday": [ 11, 16, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 313,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/1_Sx08uBDOBZcW3H4Mz16_rw.jpeg',
          title: '1939 Yankees',
          artist: '?',
          year: '1939',
          rule: {
            "monday": [ 11, 16, 21, 27 ],
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
          id: 314,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/usa_today_10354368.0.jpg',
          title: 'Yankees 2017 Postseason',
          artist: 'Robert Deutsch',
          year: '2017',
          rule: {
            "monday": [ 12, 16, 1, 29 ],
            "tuesday": [ 11, 16, 21, 27 ],
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
          id: 315,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/1949-new-york-yankees-world-series-champions-patch.jpg',
          title: '1949 New York Yankees World Series Champions Patch',
          artist: '?',
          year: '1949',
          rule: {
            "monday": [ 14, 19, 25, 1 ],
            "tuesday": [ 13, 17, 2, 30 ],
            "wednesday": [ 12, 17, 22, 28 ],
            "thursday": [ 11, 16, 22, 28 ],
            "friday": [ 10, 15, 21, 27 ],
            "saturday": [ 15, 21, 26, 3 ],
            "sunday": [ 29, 19, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 316,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/p19etn4pss1gfrlnb1dh812bf1v1k3.jpg',
          title: 'San Diego Padres',
          artist: 'Denis Poroy',
          year: '2014',
          rule: {
            "monday": [ 29, 19, 25, 2 ],
            "tuesday": [ 14, 19, 25, 1 ],
            "wednesday": [ 13, 17, 2, 30 ],
            "thursday": [ 12, 17, 22, 28 ],
            "friday": [ 11, 16, 22, 28 ],
            "saturday": [ 10, 15, 21, 27 ],
            "sunday": [ 15, 21, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 317,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/san_diego_padres_logo-1967.gif',
          title: 'San Diego Padres Logo 1967',
          artist: '?',
          year: '1967',
          rule: {
            "monday": [ 15, 21, 26, 3 ],
            "tuesday": [ 29, 19, 25, 2 ],
            "wednesday": [ 14, 19, 25, 1 ],
            "thursday": [ 13, 17, 2, 30 ],
            "friday": [ 12, 17, 22, 28 ],
            "saturday": [ 11, 16, 22, 28 ],
            "sunday": [ 10, 15, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 318,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/SDHosmer.jpg',
          title: 'Eric Hosmer of the San Diego Padres',
          artist: 'USA Sports',
          year: '2018',
          rule: {
            "monday": [ 10, 15, 21, 27 ],
            "tuesday": [ 15, 21, 26, 3 ],
            "wednesday": [ 29, 19, 25, 2 ],
            "thursday": [ 14, 19, 25, 1 ],
            "friday": [ 13, 17, 2, 30 ],
            "saturday": [ 12, 17, 22, 28 ],
            "sunday": [ 11, 16, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 319,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Petco1200x600.jpg',
          title: 'Petco Park',
          artist: '?',
          year: 'xxi cent.',
          rule: {
            "monday": [ 11, 16, 22, 28 ],
            "tuesday": [ 10, 15, 21, 27 ],
            "wednesday": [ 15, 21, 26, 3 ],
            "thursday": [ 29, 19, 25, 2 ],
            "friday": [ 14, 19, 25, 1 ],
            "saturday": [ 13, 17, 2, 30 ],
            "sunday": [ 12, 17, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 320,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/822799972.0.jpg',
          title: 'Kyle Lloyd, RHP, San Diego Padres',
          artist: 'Denis Poroy',
          year: '2017',
          rule: {
            "monday": [ 12, 17, 22, 28 ],
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
          id: 321,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/10048887-mlb-oakland-athletics-at-minnesota-twins-850x560.jpeg',
          title: 'May 4, 2017; Minneapolis, MN, USA; The Minnesota Twins logo in center field during a game against the Oakland Athletics at Target Field.',
          artist: 'Brad Rempel',
          year: '2017',
          rule: {
            "monday": [ 13, 17, 2, 30 ],
            "tuesday": [ 12, 17, 22, 28 ],
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
          id: 322,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/9515096-mlb-chicago-white-sox-at-minnesota-twins-850x560.jpeg',
          title: 'Sep 2, 2016; Minneapolis, MN, USA; A general view at Target Field during the third inning between the Minnesota Twins and the Chicago White Sox.',
          artist: 'Jeffrey Becker',
          year: '2016',
          rule: {
            "monday": [ 15, 20, 26, 2 ],
            "tuesday": [ 14, 18, 3, 1 ],
            "wednesday": [ 13, 18, 23, 29 ],
            "thursday": [ 12, 17, 23, 29 ],
            "friday": [ 11, 16, 22, 28 ],
            "saturday": [ 16, 22, 27, 4 ],
            "sunday": [ 30, 20, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 323,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/10018330-mlb-minnesota-twins-at-detroit-tigers-850x560.jpeg',
          title: 'Apr 13, 2017; Detroit, MI, USA; Minnesota Twins hat and glove in the dugout during the game against the Minnesota Twins at Comerica Park',
          artist: 'Rick Osentoski',
          year: '2017',
          rule: {
            "monday": [ 30, 20, 26, 3 ],
            "tuesday": [ 15, 20, 26, 2 ],
            "wednesday": [ 14, 18, 3, 1 ],
            "thursday": [ 13, 18, 23, 29 ],
            "friday": [ 12, 17, 23, 29 ],
            "saturday": [ 11, 16, 22, 28 ],
            "sunday": [ 16, 22, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 324,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/AP_16274035565168-1775x1254.jpg',
          title: 'Logan Morrison is not the final piece to an expertly crafted jigsaw puzzle of a roster for the Minnesota Twins',
          artist: 'Derek Wetmore',
          year: '2018',
          rule: {
            "monday": [ 16, 22, 27, 4 ],
            "tuesday": [ 30, 20, 26, 3 ],
            "wednesday": [ 15, 20, 26, 2 ],
            "thursday": [ 14, 18, 3, 1 ],
            "friday": [ 13, 18, 23, 29 ],
            "saturday": [ 12, 17, 23, 29 ],
            "sunday": [ 11, 16, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 325,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Minnesota-Twins-Home-Plate-Boxes.jpg',
          title: 'Minnesota Twins Home Plate Boxes',
          artist: '?',
          year: '2016',
          rule: {
            "monday": [ 11, 16, 22, 28 ],
            "tuesday": [ 16, 22, 27, 4 ],
            "wednesday": [ 30, 20, 26, 3 ],
            "thursday": [ 15, 20, 26, 2 ],
            "friday": [ 14, 18, 3, 1 ],
            "saturday": [ 13, 18, 23, 29 ],
            "sunday": [ 12, 17, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 326,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/10017771-mlb-san-diego-padres-at-atlanta-braves.jpeg',
          title: 'Atlanta Braves first baseman Freddie Freeman (5) gets high fives in the dugout after hitting a game tying home run against the St. Louis Cardinals during the eighth inning at SunTrust Park',
          artist: 'Dale Zanine',
          year: '2017',
          rule: {
            "monday": [ 12, 17, 23, 29 ],
            "tuesday": [ 11, 16, 22, 28 ],
            "wednesday": [ 16, 22, 27, 4 ],
            "thursday": [ 30, 20, 26, 3 ],
            "friday": [ 15, 20, 26, 2 ],
            "saturday": [ 14, 18, 3, 1 ],
            "sunday": [ 13, 18, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 327,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/atlanta_braves_17-uai-1350x900.jpg',
          title: 'Custom LED Baseball',
          artist: 'Dimensional Innovations',
          year: '2017',
          rule: {
            "monday": [ 13, 18, 23, 29 ],
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
          id: 328,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/0429-braves-101001philliesbraves-005_1200xx2400-1350-0-124.jpg',
          title: 'The Atlanta Braves will be back on FOX Sports South and FOX Sports Southeast this season',
          artist: '?',
          year: '2018',
          rule: {
            "monday": [ 14, 18, 3, 1 ],
            "tuesday": [ 13, 18, 23, 29 ],
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
          id: 329,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/atlanta_braves_2012_uniforms_by_jayjaxon-d4ui793.png',
          title: 'Atlanta Braves 2012 Uniforms',
          artist: 'Jay Jaxon',
          year: '2012',
          rule: {
            "monday": [ 16, 21, 27, 3 ],
            "tuesday": [ 15, 19, 4, 2 ],
            "wednesday": [ 14, 19, 24, 30 ],
            "thursday": [ 13, 18, 24, 30 ],
            "friday": [ 12, 17, 23, 29 ],
            "saturday": [ 17, 23, 28, 5 ],
            "sunday": [ 1, 21, 27, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 330,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/jarvis-1968.jpg',
          title: 'Pat Jarvis',
          artist: '?',
          year: '1968',
          rule: {
            "monday": [ 1, 21, 27, 3 ],
            "tuesday": [ 16, 21, 27, 3 ],
            "wednesday": [ 15, 19, 4, 2 ],
            "thursday": [ 14, 19, 24, 30 ],
            "friday": [ 13, 18, 24, 30 ],
            "saturday": [ 12, 17, 23, 29 ],
            "sunday": [ 17, 23, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 331,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/BBpnEZB.png',
          title: 'Los Angeles Angels of Anaheim',
          artist: 'Getty Images',
          year: 'xxi cent.',
          rule: {
            "monday": [ 17, 23, 28, 5 ],
            "tuesday": [ 1, 21, 27, 3 ],
            "wednesday": [ 16, 21, 27, 3 ],
            "thursday": [ 15, 19, 4, 2 ],
            "friday": [ 14, 19, 24, 30 ],
            "saturday": [ 13, 18, 24, 30 ],
            "sunday": [ 12, 17, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 332,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/1460915140-angels-artists-tickets.jpg',
          title: 'Los Angeles Angels of Anaheim Tickets and Upcoming Events',
          artist: '?',
          year: 'xxi cent.',
          rule: {
            "monday": [ 12, 17, 23, 29 ],
            "tuesday": [ 17, 23, 28, 5 ],
            "wednesday": [ 1, 21, 27, 3 ],
            "thursday": [ 16, 21, 27, 3 ],
            "friday": [ 15, 19, 4, 2 ],
            "saturday": [ 14, 19, 24, 30 ],
            "sunday": [ 13, 18, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 333,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/0316_shohei_ohtani.jpg',
          title: 'Shohei Ohtani',
          artist: 'USA Today',
          year: '2018',
          rule: {
            "monday": [ 13, 18, 24, 30 ],
            "tuesday": [ 12, 17, 23, 29 ],
            "wednesday": [ 17, 23, 28, 5 ],
            "thursday": [ 1, 21, 27, 3 ],
            "friday": [ 16, 21, 27, 3 ],
            "saturday": [ 15, 19, 4, 2 ],
            "sunday": [ 14, 19, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 334,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/chris-coghlan-mike-trout-mlb-spring-training-oakland-athletics-los-angeles-angels-1.jpg',
          title: 'Chris Coghlan of the Oakland Athletics Throws Over Mike Trout of the Los Angeles Angels',
          artist: '?',
          year: 'xxi cent.',
          rule: {
            "monday": [ 14, 19, 24, 30 ],
            "tuesday": [ 13, 18, 24, 30 ],
            "wednesday": [ 12, 17, 23, 29 ],
            "thursday": [ 17, 23, 28, 5 ],
            "friday": [ 1, 21, 27, 3 ],
            "saturday": [ 16, 21, 27, 3 ],
            "sunday": [ 15, 19, 4, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 335,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/DHZ16091344_Mariners_at_Angels.jpg',
          title: 'Mike Trout/Albert Pujols',
          artist: 'Brian Rothmuller',
          year: '2017',
          rule: {
            "monday": [ 15, 19, 4, 2 ],
            "tuesday": [ 14, 19, 24, 30 ],
            "wednesday": [ 13, 18, 24, 30 ],
            "thursday": [ 12, 17, 23, 29 ],
            "friday": [ 17, 23, 28, 5 ],
            "saturday": [ 1, 21, 27, 3 ],
            "sunday": [ 16, 21, 27, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 336,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/usp_mlb__miami_marlins_at_milwaukee_brewers_92068013.jpg',
          title: 'Corey Knebel',
          artist: 'Ted Berg',
          year: '2017',
          rule: {
            "monday": [ 16, 21, 27, 3 ],
            "tuesday": [ 15, 19, 4, 2 ],
            "wednesday": [ 14, 19, 24, 30 ],
            "thursday": [ 13, 18, 24, 30 ],
            "friday": [ 12, 17, 23, 29 ],
            "saturday": [ 17, 23, 28, 5 ],
            "sunday": [ 1, 21, 27, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 337,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Brewers_Ryan-Braun13590_0.jpg',
          title: 'Ryan Braun',
          artist: 'Athlon Sports',
          year: '2017',
          rule: {
            "monday": [ 1, 21, 27, 3 ],
            "tuesday": [ 16, 21, 27, 3 ],
            "wednesday": [ 15, 19, 4, 2 ],
            "thursday": [ 14, 19, 24, 30 ],
            "friday": [ 13, 18, 24, 30 ],
            "saturday": [ 12, 17, 23, 29 ],
            "sunday": [ 17, 23, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 338,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Milwaukee-Brewers-Primary-1978-1993-Logo-MLB-Neon-Sign-Neon-Sign.jpg',
          title: 'Milwaukee Brewers Primary 1978 1993 Logo MLB Neon Sign Neon Sign',
          artist: '?',
          year: 'xxi cent.',
          rule: {
            "monday": [ 17, 23, 28, 5 ],
            "tuesday": [ 1, 21, 27, 3 ],
            "wednesday": [ 16, 21, 27, 3 ],
            "thursday": [ 15, 19, 4, 2 ],
            "friday": [ 14, 19, 24, 30 ],
            "saturday": [ 13, 18, 24, 30 ],
            "sunday": [ 12, 17, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 339,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Milwaukee-Brewers-Jesus-Aguilars-blast-dooms-St-Louis-Cardinals.jpg',
          title: 'Jesus Aguilar and the Milwaukee Brewers topped the St. Louis Cardinals on Thursday',
          artist: 'Kevin Dietsch',
          year: '2017',
          rule: {
            "monday": [ 13, 18, 24, 30 ],
            "tuesday": [ 18, 24, 29, 6 ],
            "wednesday": [ 2, 22, 28, 4 ],
            "thursday": [ 17, 22, 28, 4 ],
            "friday": [ 16, 20, 5, 3 ],
            "saturday": [ 15, 20, 25, 1 ],
            "sunday": [ 14, 19, 25, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 340,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Aaron Henry MB75-B_HS_NBLMcWilliams_0.jpg',
          title: 'The Braves Trade Henry Aaron to the Brewers',
          artist: '?',
          year: 'xx cent.',
          rule: {
            "monday": [ 14, 19, 25, 1 ],
            "tuesday": [ 13, 18, 24, 30 ],
            "wednesday": [ 18, 24, 29, 6 ],
            "thursday": [ 2, 22, 28, 4 ],
            "friday": [ 17, 22, 28, 4 ],
            "saturday": [ 16, 20, 5, 3 ],
            "sunday": [ 15, 20, 25, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 341,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/r-generic-tampa-bay-rays-w_35298566_ver1.0_640_360.jpg',
          title: 'Tampa Bay Rays',
          artist: '?',
          year: '2018',
          rule: {
            "monday": [ 15, 20, 25, 1 ],
            "tuesday": [ 14, 19, 25, 1 ],
            "wednesday": [ 13, 18, 24, 30 ],
            "thursday": [ 18, 24, 29, 6 ],
            "friday": [ 2, 22, 28, 4 ],
            "saturday": [ 17, 22, 28, 4 ],
            "sunday": [ 16, 20, 5, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 342,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/629d5763b643314238f28a863d6f3a3b.jpg',
          title: 'Tampa Bay Rays Ball',
          artist: '?',
          year: 'xxi cent.',
          rule: {
            "monday": [ 16, 20, 5, 3 ],
            "tuesday": [ 15, 20, 25, 1 ],
            "wednesday": [ 14, 19, 25, 1 ],
            "thursday": [ 13, 18, 24, 30 ],
            "friday": [ 18, 24, 29, 6 ],
            "saturday": [ 2, 22, 28, 4 ],
            "sunday": [ 17, 22, 28, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 343,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Boston+Red+Sox+v+Tampa+Bay+Rays+bvxRO1zyceKl.jpg',
          title: 'Mookie Betts #50 of the Boston Red Sox steals second base in front of second baseman Joey Wendle #18 of the Tampa Bay Rays during the first inning of a game on April 1, 2018 at Tropicana Field in St. Petersburg, Florida',
          artist: 'Brian Blanco',
          year: '2018',
          rule: {
            "monday": [ 18, 21, 29, 5 ],
            "tuesday": [ 17, 21, 6, 4 ],
            "wednesday": [ 16, 21, 26, 2 ],
            "thursday": [ 15, 20, 26, 2 ],
            "friday": [ 14, 19, 25, 1 ],
            "saturday": [ 19, 25, 30, 7 ],
            "sunday": [ 3, 23, 29, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 344,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/tampa_bay_rays_2012_uniforms_by_jayjaxon-d4ui9cm.png',
          title: 'Tampa Bay Rays 2012 Uniforms',
          artist: 'Jay Jaxon',
          year: '2012',
          rule: {
            "monday": [ 3, 23, 29, 5 ],
            "tuesday": [ 18, 21, 29, 5 ],
            "wednesday": [ 17, 21, 6, 4 ],
            "thursday": [ 16, 21, 26, 2 ],
            "friday": [ 15, 20, 26, 2 ],
            "saturday": [ 14, 19, 25, 1 ],
            "sunday": [ 19, 25, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 345,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/twins-rays-baseball.jpg',
          title: 'Tampa Bay Rays\' Johnny Field scores the winning run when Minnesota Twins relief pitcher Zach Duke dropped the ball on a play at first base.',
          artist: 'Chris O\'Meara',
          year: '2018',
          rule: {
            "monday": [ 19, 25, 30, 7 ],
            "tuesday": [ 3, 23, 29, 5 ],
            "wednesday": [ 18, 21, 29, 5 ],
            "thursday": [ 17, 21, 6, 4 ],
            "friday": [ 16, 21, 26, 2 ],
            "saturday": [ 15, 20, 26, 2 ],
            "sunday": [ 14, 19, 25, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 346,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/images.jpeg',
          title: 'AT&T Park',
          artist: 'Dan Donnelly',
          year: '2016',
          rule: {
            "monday": [ 14, 19, 25, 1 ],
            "tuesday": [ 19, 25, 30, 7 ],
            "wednesday": [ 3, 23, 29, 5 ],
            "thursday": [ 18, 21, 29, 5 ],
            "friday": [ 17, 21, 6, 4 ],
            "saturday": [ 16, 21, 26, 2 ],
            "sunday": [ 15, 20, 26, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 347,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/cheap-san-francisco-giants-tickets.jpg',
          title: 'Buster Posey',
          artist: 'unknown artist',
          year: '2018',
          rule: {
            "monday": [ 15, 20, 26, 2 ],
            "tuesday": [ 15, 20, 26, 2 ],
            "wednesday": [ 14, 19, 25, 1 ],
            "thursday": [ 19, 25, 30, 7 ],
            "friday": [ 3, 23, 29, 5 ],
            "saturday": [ 18, 21, 29, 5 ],
            "sunday": [ 17, 21, 6, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 348,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/RMLB02GIANTS-2.jpg',
          title: 'San Francisco National League Championship Ring',
          artist: 'unknown artist',
          year: '2002',
          rule: {
            "monday": [ 17, 21, 6, 4 ],
            "tuesday": [ 15, 20, 26, 2 ],
            "wednesday": [ 15, 20, 26, 2 ],
            "thursday": [ 14, 19, 25, 1 ],
            "friday": [ 19, 25, 30, 7 ],
            "saturday": [ 3, 23, 29, 5 ],
            "sunday": [ 18, 21, 29, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 349,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/giants-angels-baseball_25874203_8320151.jpg',
          title: 'San Francisco Giants starting pitcher Johnny Cueto celebrates after the sixth inning',
          artist: 'Chris Carlson',
          year: '2018',
          rule: {
            "monday": [ 18, 21, 29, 5 ],
            "tuesday": [ 17, 21, 6, 4 ],
            "wednesday": [ 15, 20, 26, 2 ],
            "thursday": [ 15, 20, 26, 2 ],
            "friday": [ 14, 19, 25, 1 ],
            "saturday": [ 19, 25, 30, 7 ],
            "sunday": [ 3, 23, 29, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 350,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/920x920.jpg',
          title: 'Andrew McCutchen #22 of the San Francisco Giants leaves the dugout prior to a game against the Chicago Cubs',
          artist: 'Alex Trautwig',
          year: '2018',
          rule: {
            "monday": [ 4, 24, 30, 6 ],
            "tuesday": [ 19, 22, 30, 6 ],
            "wednesday": [ 18, 22, 7, 5 ],
            "thursday": [ 16, 21, 27, 3 ],
            "friday": [ 16, 21, 27, 3 ],
            "saturday": [ 15, 20, 26, 2 ],
            "sunday": [ 20, 26, 1, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 351,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/abstract-baseball-david-g-paul.jpg',
          title: 'Abstract Baseball',
          artist: 'David G. Paul',
          year: '2012',
          rule: {
            "monday": [ 20, 26, 1, 8 ],
            "tuesday": [ 4, 24, 30, 6 ],
            "wednesday": [ 19, 22, 30, 6 ],
            "thursday": [ 18, 22, 7, 5 ],
            "friday": [ 16, 21, 27, 3 ],
            "saturday": [ 16, 21, 27, 3 ],
            "sunday": [ 15, 20, 26, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 352,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/ruth.jpg',
          title: 'Ruth',
          artist: 'Jeff Suntala',
          year: '?',
          rule: {
            "monday": [ 15, 20, 26, 2 ],
            "tuesday": [ 20, 26, 1, 8 ],
            "wednesday": [ 4, 24, 30, 6 ],
            "thursday": [ 19, 22, 30, 6 ],
            "friday": [ 18, 22, 7, 5 ],
            "saturday": [ 16, 21, 27, 3 ],
            "sunday": [ 16, 21, 27, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 353,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/833234b0b939dd2303f1641ffda0e1c3--baseball-pics-baseball-teams.jpg',
          title: 'Jimmie Foxx',
          artist: 'Bruce Stark',
          year: '?',
          rule: {
            "monday": [ 16, 21, 27, 3 ],
            "tuesday": [ 15, 20, 26, 2 ],
            "wednesday": [ 20, 26, 1, 8 ],
            "thursday": [ 4, 24, 30, 6 ],
            "friday": [ 19, 22, 30, 6 ],
            "saturday": [ 18, 22, 7, 5 ],
            "sunday": [ 16, 21, 27, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 354,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/il_fullxfull.768320959_1kdp.jpg',
          title: 'Jose Altuve',
          artist: 'Jim Petrillo',
          year: '2018',
          rule: {
            "monday": [ 16, 21, 27, 3 ],
            "tuesday": [ 16, 21, 27, 3 ],
            "wednesday": [ 15, 20, 26, 2 ],
            "thursday": [ 20, 26, 1, 8 ],
            "friday": [ 4, 24, 30, 6 ],
            "saturday": [ 19, 22, 30, 6 ],
            "sunday": [ 18, 22, 7, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 355,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/e557bbb4f55f7c1d895f595efd0554f9.jpg',
          title: 'Greatest All Stars',
          artist: 'Jamie Cooper',
          year: '2018',
          rule: {
            "monday": [ 18, 22, 7, 5 ],
            "tuesday": [ 16, 21, 27, 3 ],
            "wednesday": [ 16, 21, 27, 3 ],
            "thursday": [ 15, 20, 26, 2 ],
            "friday": [ 20, 26, 1, 8 ],
            "saturday": [ 4, 24, 30, 6 ],
            "sunday": [ 19, 22, 30, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 356,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/baseball-speed-facts.jpg',
          title: 'Baseball Speed Facts',
          artist: 'JT Moore',
          year: '2018',
          rule: {
            "monday": [ 19, 22, 30, 6 ],
            "tuesday": [ 18, 22, 7, 5 ],
            "wednesday": [ 16, 21, 27, 3 ],
            "thursday": [ 16, 21, 27, 3 ],
            "friday": [ 15, 20, 26, 2 ],
            "saturday": [ 20, 26, 1, 8 ],
            "sunday": [ 4, 24, 30, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 357,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/minnesota-twins-baseball-team-vintage-logo-recycled-license-plate-art-design-turnpike.jpg',
          title: 'Minnesota Twins Baseball Team Vintage Logo Recycled License Plate Art',
          artist: 'Design Turnpike',
          year: '2015',
          rule: {
            "monday": [ 5, 25, 1, 7 ],
            "tuesday": [ 20, 23, 1, 7 ],
            "wednesday": [ 19, 23, 8, 6 ],
            "thursday": [ 17, 22, 28, 4 ],
            "friday": [ 17, 22, 28, 4 ],
            "saturday": [ 16, 21, 27, 3 ],
            "sunday": [ 21, 27, 2, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 358,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/baltimore-orioles-vintage-baseball-logo-license-plate-art-design-turnpike.jpg',
          title: 'Baltimore Orioles Vintage Baseball Logo License Plate Art',
          artist: 'Design Turnpike',
          year: '2014',
          rule: {
            "monday": [ 21, 27, 2, 9 ],
            "tuesday": [ 5, 25, 1, 7 ],
            "wednesday": [ 20, 23, 1, 7 ],
            "thursday": [ 19, 23, 8, 6 ],
            "friday": [ 17, 22, 28, 4 ],
            "saturday": [ 17, 22, 28, 4 ],
            "sunday": [ 16, 21, 27, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 359,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Baseball_Memorabilla_3-1312826720m.jpg',
          title: 'Baseball Memorabilla 3',
          artist: 'Romy Galicia',
          year: '2007',
          rule: {
            "monday": [ 16, 21, 27, 3 ],
            "tuesday": [ 21, 27, 2, 9 ],
            "wednesday": [ 5, 25, 1, 7 ],
            "thursday": [ 20, 23, 1, 7 ],
            "friday": [ 19, 23, 8, 6 ],
            "saturday": [ 17, 22, 28, 4 ],
            "sunday": [ 17, 22, 28, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 360,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/IMG_2122-e1518800662710.jpg',
          title: 'unknown title',
          artist: 'Joni Peters',
          year: '?',
          rule: {
            "monday": [ 17, 22, 28, 4 ],
            "tuesday": [ 16, 21, 27, 3 ],
            "wednesday": [ 21, 27, 2, 9 ],
            "thursday": [ 5, 25, 1, 7 ],
            "friday": [ 20, 23, 1, 7 ],
            "saturday": [ 19, 23, 8, 6 ],
            "sunday": [ 17, 22, 28, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 361,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/baseball_painting_two.jpg',
          title: 'Baseball Two',
          artist: 'Dan Nolan',
          year: '2009',
          rule: {
            "monday": [ 17, 22, 28, 4 ],
            "tuesday": [ 17, 22, 28, 4 ],
            "wednesday": [ 16, 21, 27, 3 ],
            "thursday":[ 21, 27, 2, 9 ],
            "friday":  [ 5, 25, 1, 7 ],
            "saturday": [ 20, 23, 1, 7 ],
            "sunday": [ 19, 23, 8, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 362,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/455478553.jpg',
          title: 'Baseball Doodles Background',
          artist: 'mecaleha',
          year: '?',
          rule: {
            "monday": [ 19, 23, 8, 6 ],
            "tuesday": [ 17, 22, 28, 4 ],
            "wednesday": [ 17, 22, 28, 4 ],
            "thursday": [ 16, 21, 27, 3 ],
            "friday": [ 21, 27, 2, 9 ],
            "saturday": [ 5, 25, 1, 7 ],
            "sunday": [ 20, 23, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 363,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/excellent-baseball-pictures-to-print-patent-wall-decor-art.jpg',
          title: 'Baseball Patent',
          artist: '?',
          year: '1924',
          rule: {
            "monday": [ 20, 23, 1, 7 ],
            "tuesday": [ 19, 23, 8, 6 ],
            "wednesday": [ 17, 22, 28, 4 ],
            "thursday": [ 17, 22, 28, 4 ],
            "friday": [ 16, 21, 27, 3 ],
            "saturday": [ 21, 27, 2, 9 ],
            "sunday": [ 5, 25, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 364,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/abstract-baseball-player-vintage-illustration-vector.jpg',
          title: 'Vector illustration of abstract baseball player,',
          artist: 'Vecteezy',
          year: '?',
          rule: {
            "monday": [ 6, 26, 2, 8 ],
            "tuesday": [ 21, 24, 2, 8 ],
            "wednesday": [ 20, 24, 9, 7 ],
            "thursday": [ 18, 23, 29, 5 ],
            "friday": [ 18, 23, 29, 5 ],
            "saturday": [ 17, 22, 28, 4 ],
            "sunday": [ 22, 28, 3, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 365,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/baseball-and-penuts-clinton-hobart.jpg',
          title: 'Baseball and Peanuts',
          artist: 'Clinton Hobart',
          year: '2012',
          rule: {
            "monday": [ 22, 28, 3, 10 ],
            "tuesday": [ 6, 26, 2, 8 ],
            "wednesday": [ 21, 24, 2, 8 ],
            "thursday": [ 20, 24, 9, 7 ],
            "friday": [ 18, 23, 29, 5 ],
            "saturday": [ 18, 23, 29, 5 ],
            "sunday": [ 17, 22, 28, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 366,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/1aCobbWagner.jpg',
          title: 'Ty Cobb and Honus Wagner',
          artist: 'Jon Oye',
          year: 'c.1980',
          rule: {
            "monday": [ 17, 22, 28, 4 ],
            "tuesday": [ 22, 28, 3, 10 ],
            "wednesday": [ 6, 26, 2, 8 ],
            "thursday": [ 21, 24, 2, 8 ],
            "friday": [ 20, 24, 9, 7 ],
            "saturday": [ 18, 23, 29, 5 ],
            "sunday": [ 18, 23, 29, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 367,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/1aDiMag.jpg',
          title: 'Joe DiMaggio',
          artist: 'Jon Oye',
          year: 'c.1980',
          rule: {
            "monday": [ 18, 23, 29, 5 ],
            "tuesday": [ 17, 22, 28, 4 ],
            "wednesday": [ 22, 28, 3, 10 ],
            "thursday": [ 6, 26, 2, 8 ],
            "friday": [ 21, 24, 2, 8 ],
            "saturday": [ 20, 24, 9, 7 ],
            "sunday": [ 18, 23, 29, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 368,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/1aloushrp.JPG',
          title: 'Lou Brock ',
          artist: 'Jon Oye',
          year: 'c.1980',
          rule: {
            "monday": [ 18, 23, 29, 5 ],
            "tuesday": [ 18, 23, 29, 5 ],
            "wednesday": [ 17, 22, 28, 4 ],
            "thursday": [ 22, 28, 3, 10 ],
            "friday": [ 6, 26, 2, 8 ],
            "saturday": [ 21, 24, 2, 8 ],
            "sunday": [ 20, 24, 9, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 369,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/1Jackie.jpg',
          title: 'Jackie Robinson',
          artist: 'Jon Oye',
          year: '2012',
          rule: {
            "monday": [ 20, 24, 9, 7 ],
            "tuesday": [ 18, 23, 29, 5 ],
            "wednesday": [ 18, 23, 29, 5 ],
            "thursday": [ 17, 22, 28, 4 ],
            "friday": [ 22, 28, 3, 10 ],
            "saturday": [ 6, 26, 2, 8 ],
            "sunday": [ 21, 24, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 370,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/1aStantheMan1.jpg',
          title: 'Stan "The Man" Musial',
          artist: 'Jon Oye',
          year: '1985',
          rule: {
            "monday": [ 21, 24, 2, 8 ],
            "tuesday": [ 20, 24, 9, 7 ],
            "wednesday": [ 18, 23, 29, 5 ],
            "thursday": [ 18, 23, 29, 5 ],
            "friday": [ 17, 22, 28, 4 ],
            "saturday": [ 22, 28, 3, 10 ],
            "sunday": [ 6, 26, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 371,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/clipart-baseball-15-j-baseball-clip-art-free-printable-clipart-images-2.jpg',
          title: 'Unique Clipart Baseball Design',
          artist: 'clipartix',
          year: '?',
          rule: {
            "monday": [ 7, 27, 3, 9 ],
            "tuesday": [ 22, 25, 3, 9 ],
            "wednesday": [ 21, 25, 10, 8 ],
            "thursday": [ 19, 24, 30, 6 ],
            "friday": [ 19, 24, 30, 6 ],
            "saturday": [ 18, 23, 29, 5 ],
            "sunday": [ 23, 29, 4, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 372,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/albert_pujols_mvp_baseball_art_by_esportsart.jpg',
          title: 'Albert Pujols MVP',
          artist: 'esportsart',
          year: '?',
          rule: {
            "monday": [ 23, 29, 4, 11 ],
            "tuesday": [ 7, 27, 3, 9 ],
            "wednesday": [ 22, 25, 3, 9 ],
            "thursday": [ 21, 25, 10, 8 ],
            "friday": [ 19, 24, 30, 6 ],
            "saturday": [ 19, 24, 30, 6 ],
            "sunday": [ 18, 23, 29, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 373,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/baseball_poster_by_bigrdesign-d3b77m4.jpg',
          title: 'Baseball Poster',
          artist: 'Ryan Shaffer',
          year: '2011',
          rule: {
            "monday": [ 18, 23, 29, 5 ],
            "tuesday": [ 23, 29, 4, 11 ],
            "wednesday": [ 7, 27, 3, 9 ],
            "thursday": [ 22, 25, 3, 9 ],
            "friday": [ 21, 25, 10, 8 ],
            "saturday": [ 19, 24, 30, 6 ],
            "sunday": [ 19, 24, 30, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 374,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/baseball___tilt_shift_by_zantaff-d332xml.jpg',
          title: 'Baseball - tilt shift',
          artist: 'Buehler',
          year: '2011',
          rule: {
            "monday": [ 19, 24, 30, 6 ],
            "tuesday": [ 18, 23, 29, 5 ],
            "wednesday": [ 23, 29, 4, 11 ],
            "thursday": [ 7, 27, 3, 9 ],
            "friday": [ 22, 25, 3, 9 ],
            "saturday": [ 21, 25, 10, 8 ],
            "sunday": [ 19, 24, 30, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 375,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/softball_by_superdino.jpg',
          title: 'Softball',
          artist: 'Steph',
          year: '2009',
          rule: {
            "monday": [ 19, 24, 30, 6 ],
            "tuesday": [ 19, 24, 30, 6 ],
            "wednesday": [ 18, 23, 29, 5 ],
            "thursday": [ 23, 29, 4, 11 ],
            "friday": [ 7, 27, 3, 9 ],
            "saturday": [ 22, 25, 3, 9 ],
            "sunday": [ 21, 25, 10, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 376,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/82224e36902eca36b95c8341ab87afc8.jpg',
          title: 'Don Drysdale. LA Dodgers',
          artist: 'Bill Purdom',
          year: '?',
          rule: {
            "monday": [ 21, 25, 10, 8 ],
            "tuesday": [ 19, 24, 30, 6 ],
            "wednesday": [ 19, 24, 30, 6 ],
            "thursday": [ 18, 23, 29, 5 ],
            "friday": [ 23, 29, 4, 11 ],
            "saturday": [ 7, 27, 3, 9 ],
            "sunday": [ 22, 25, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 377,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/11442377b5d63e3be48701bc5cb7003a.jpg',
          title: 'Brooks Robinson',
          artist: 'Bill Purdom',
          year: '?',
          rule: {
            "monday": [ 22, 25, 3, 9 ],
            "tuesday": [ 21, 25, 10, 8 ],
            "wednesday": [ 19, 24, 30, 6 ],
            "thursday": [ 19, 24, 30, 6 ],
            "friday": [ 18, 23, 29, 5 ],
            "saturday": [ 23, 29, 4, 11 ],
            "sunday": [ 7, 27, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 378,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Ty-Cobb-on-Third.jpg',
          title: 'Ty Cobb on Third',
          artist: 'Bill Purdom',
          year: '?',
          rule: {
            "monday": [ 8, 28, 4, 10 ],
            "tuesday": [ 23, 26, 4, 10 ],
            "wednesday": [ 22, 26, 11, 9 ],
            "thursday": [ 20, 25, 1, 7 ],
            "friday": [ 20, 25, 1, 7 ],
            "saturday": [ 19, 24, 30, 6 ],
            "sunday": [ 24, 30, 5, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 379,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Lince920x920.jpg',
          title: 'our 2010 World Champions San Francisco Giants',
          artist: 'Mark Ulriksen',
          year: '2010',
          rule: {
            "monday": [ 24, 30, 5, 12 ],
            "tuesday": [ 8, 28, 4, 10 ],
            "wednesday": [ 23, 26, 4, 10 ],
            "thursday": [ 22, 26, 11, 9 ],
            "friday": [ 20, 25, 1, 7 ],
            "saturday": [ 20, 25, 1, 7 ],
            "sunday": [ 19, 24, 30, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 380,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/coach-newton-painting.jpg',
          title: 'Coach Newton',
          artist: 'title unknown',
          year: '?',
          rule: {
            "monday": [ 19, 24, 30, 6 ],
            "tuesday": [ 24, 30, 5, 12 ],
            "wednesday": [ 8, 28, 4, 10 ],
            "thursday": [ 23, 26, 4, 10 ],
            "friday": [ 22, 26, 11, 9 ],
            "saturday": [ 20, 25, 1, 7 ],
            "sunday": [ 20, 25, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 381,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/1aVintageCards.JPG',
          title: 'Rogers Hornsby, Joe Medwick, Johnny Mize',
          artist: 'Jon Oye',
          year: 'circa late 1980\'s ',
          rule: {
            "monday": [ 20, 25, 1, 7 ],
            "tuesday": [ 19, 24, 30, 6 ],
            "wednesday": [ 24, 30, 5, 12 ],
            "thursday": [ 8, 28, 4, 10 ],
            "friday": [ 23, 26, 4, 10 ],
            "saturday": [ 22, 26, 11, 9 ],
            "sunday": [ 20, 25, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 382,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/4749f273080a7f450eb671d303638984--baseball-art-baseball-games.jpg',
          title: 'Baseball Sketch',
          artist: 'John Conrad Berkey',
          year: '?',
          rule: {
            "monday": [ 20, 25, 1, 7 ],
            "tuesday": [ 20, 25, 1, 7 ],
            "wednesday": [ 19, 24, 30, 6 ],
            "thursday": [ 24, 30, 5, 12 ],
            "friday": [ 8, 28, 4, 10 ],
            "saturday": [ 23, 26, 4, 10 ],
            "sunday": [ 22, 26, 11, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 383,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/56b9f3c5fa1dc4cd5fab8ae46925d788.jpg',
          title: 'The Winning Run',
          artist: 'Vincent Civiletti',
          year: '?',
          rule: {
            "monday": [ 22, 26, 11, 9 ],
            "tuesday": [ 20, 25, 1, 7 ],
            "wednesday": [ 20, 25, 1, 7 ],
            "thursday": [ 19, 24, 30, 6 ],
            "friday": [ 24, 30, 5, 12 ],
            "saturday": [ 8, 28, 4, 10 ],
            "sunday": [ 23, 26, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 384,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Lefty_Grove.jpg',
          title: 'Lefty Grove',
          artist: 'Arthur K. Miller',
          year: '1935',
          rule: {
            "monday": [ 23, 26, 4, 10 ],
            "tuesday": [ 22, 26, 11, 9 ],
            "wednesday": [ 20, 25, 1, 7 ],
            "thursday": [ 20, 25, 1, 7 ],
            "friday": [ 19, 24, 30, 6 ],
            "saturday": [ 24, 30, 5, 12 ],
            "sunday": [ 8, 28, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 385,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Winter_Blues.jpg',
          title: 'Fenway Winter Blues',
          artist: 'Mark Waitkus',
          year: '?',
          rule: {
            "monday": [ 9, 29, 5, 11 ],
            "tuesday": [ 24, 27, 5, 11 ],
            "wednesday": [ 23, 27, 12, 10 ],
            "thursday": [ 21, 26, 2, 8 ],
            "friday": [ 21, 26, 2, 8 ],
            "saturday": [ 20, 25, 1, 7 ],
            "sunday": [ 25, 1, 6, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 386,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/historic-baseball.png',
          title: 'Mariners Stock Photo',
          artist: 'artist unknown',
          year: 'xxi cent.',
          rule: {
            "monday": [ 25, 1, 6, 13 ],
            "tuesday": [ 9, 29, 5, 11 ],
            "wednesday": [ 24, 27, 5, 11 ],
            "thursday": [ 23, 27, 12, 10 ],
            "friday": [ 21, 26, 2, 8 ],
            "saturday": [ 21, 26, 2, 8 ],
            "sunday": [ 20, 25, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 387,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/13_04376v.jpg',
          title: 'Men playing baseball',
          artist: 'Library of Congress',
          year: '1921',
          rule: {
            "monday": [ 20, 25, 1, 7 ],
            "tuesday": [ 25, 1, 6, 13 ],
            "wednesday": [ 9, 29, 5, 11 ],
            "thursday": [ 24, 27, 5, 11 ],
            "friday": [ 23, 27, 12, 10 ],
            "saturday": [ 21, 26, 2, 8 ],
            "sunday": [ 21, 26, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 388,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Baseball-Lou-Gehrig6802.1.jpg',
          title: 'Lou Gehrig',
          artist: 'unknown artist',
          year: '?',
          rule: {
            "monday": [ 21, 26, 2, 8 ],
            "tuesday": [ 20, 25, 1, 7 ],
            "wednesday": [ 25, 1, 6, 13 ],
            "thursday": [ 9, 29, 5, 11 ],
            "friday": [ 24, 27, 5, 11 ],
            "saturday": [ 23, 27, 12, 10 ],
            "sunday": [ 21, 26, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 389,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Hank-Greenberg-hitting-a-third-inning-homer-against-the-Philadelphia-Phillies-April-29-1947.jpg',
          title: 'Hank Greenberg Hitting a Third Inning Homer Against the Philadelphia Phillies',
          artist: 'unknown artist',
          year: '1947',
          rule: {
            "monday": [ 21, 26, 2, 8 ],
            "tuesday": [ 21, 26, 2, 8 ],
            "wednesday": [ 20, 25, 1, 7 ],
            "thursday": [ 25, 1, 6, 13 ],
            "friday": [ 9, 29, 5, 11 ],
            "saturday": [ 24, 27, 5, 11 ],
            "sunday": [ 23, 27, 12, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 390,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/13527u_Photistoric_HD_LOC.jpg',
          title: 'Mathewson of N.Y. Nat.',
          artist: 'Paul Thompson',
          year: '1910',
          rule: {
            "monday": [ 23, 27, 12, 10 ],
            "tuesday": [ 21, 26, 2, 8 ],
            "wednesday": [ 21, 26, 2, 8 ],
            "thursday": [ 20, 25, 1, 7 ],
            "friday": [ 25, 1, 6, 13 ],
            "saturday": [ 9, 29, 5, 11 ],
            "sunday": [ 24, 27, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 391,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/emirates.jpg',
          title: 'Emirates steals the show with the Los Angeles Dodgers',
          artist: 'Emirates Marketing',
          year: '2016',
          rule: {
            "monday": [ 24, 27, 5, 11 ],
            "tuesday": [ 23, 27, 12, 10 ],
            "wednesday": [ 21, 26, 2, 8 ],
            "thursday": [ 21, 26, 2, 8 ],
            "friday": [ 20, 25, 1, 7 ],
            "saturday": [ 25, 1, 6, 13 ],
            "sunday": [ 9, 29, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 392,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/baseball-pixel-art-pixel-art-baseball-bat-ball-pixel-8bit.jpg',
          title: 'Baseball Pixel Art',
          artist: 'Brik',
          year: 'xxi cent.',
          rule: {
            "monday": [ 10, 30, 6, 12 ],
            "tuesday": [ 25, 28, 6, 12 ],
            "wednesday": [ 24, 28, 13, 11 ],
            "thursday": [ 22, 27, 3, 9 ],
            "friday": [ 22, 27, 3, 9 ],
            "saturday": [ 21, 26, 2, 8 ],
            "sunday": [ 26, 2, 7, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 393,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Kadir-Nelson-kansas-city-dugout_1024x1024.jpeg',
          title: 'Kansas City Dugout',
          artist: 'Kadir Nelson',
          year: 'xx cent.',
          rule: {
            "monday": [ 26, 2, 7, 14 ],
            "tuesday": [ 10, 30, 6, 12 ],
            "wednesday": [ 25, 28, 6, 12 ],
            "thursday": [ 24, 28, 13, 11 ],
            "friday": [ 22, 27, 3, 9 ],
            "saturday": [ 22, 27, 3, 9 ],
            "sunday": [ 21, 26, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 394,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/baseball-wall-art-baseball-wall-art-detail-baseball-wall-art-amazon.jpg',
          title: 'Baseball Wall Art',
          artist: 'Magic Malgarve',
          year: '2018',
          rule: {
            "monday": [ 21, 26, 2, 8 ],
            "tuesday": [ 26, 2, 7, 14 ],
            "wednesday": [ 10, 30, 6, 12 ],
            "thursday": [ 25, 28, 6, 12 ],
            "friday": [ 24, 28, 13, 11 ],
            "saturday": [ 22, 27, 3, 9 ],
            "sunday": [ 22, 27, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 395,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/stilllife-andrew-pacheco.jpg',
          title: 'Baseball Still Life',
          artist: 'Andrew Pacheco',
          year: 'xxi cent.',
          rule: {
            "monday": [ 22, 27, 3, 9 ],
            "tuesday": [ 21, 26, 2, 8 ],
            "wednesday": [ 26, 2, 7, 14 ],
            "thursday": [ 10, 30, 6, 12 ],
            "friday": [ 25, 28, 6, 12 ],
            "saturday": [ 24, 28, 13, 11 ],
            "sunday": [ 22, 27, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 396,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/Montreal-street-art-Mural-Fest-baseball-player-artist-Fluke-RoarLoud.net_.jpg',
          title: 'Jackie Robinson',
          artist: 'Fluke Roar Loud',
          year: '2017',
          rule: {
            "monday": [ 22, 27, 3, 9 ],
            "tuesday": [ 22, 27, 3, 9 ],
            "wednesday": [ 21, 26, 2, 8 ],
            "thursday": [ 26, 2, 7, 14 ],
            "friday": [ 10, 30, 6, 12 ],
            "saturday": [ 25, 28, 6, 12 ],
            "sunday": [ 24, 28, 13, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 397,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/sintex-tigers-graffiti-1-600x322.jpg',
          title: 'Go Tigers!',
          artist: 'Sintex',
          year: '2013',
          rule: {
            "monday": [ 24, 28, 13, 11 ],
            "tuesday": [ 22, 27, 3, 9 ],
            "wednesday": [ 22, 27, 3, 9 ],
            "thursday": [ 21, 26, 2, 8 ],
            "friday": [ 26, 2, 7, 14 ],
            "saturday": [ 10, 30, 6, 12 ],
            "sunday": [ 25, 28, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 398,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/IMAG1256.jpg',
          title: 'Pirates Street Art',
          artist: 'unknown artist',
          year: '2011',
          rule: {
            "monday": [ 25, 28, 6, 12 ],
            "tuesday": [ 24, 28, 13, 11 ],
            "wednesday": [ 22, 27, 3, 9 ],
            "thursday": [ 22, 27, 3, 9 ],
            "friday": [ 21, 26, 2, 8 ],
            "saturday": [ 26, 2, 7, 14 ],
            "sunday": [ 10, 30, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 399,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/33615802-33615802.jpg',
          title: 'Baseball Mural',
          artist: 'Justin Quell',
          year: '2015',
          rule: {
            "monday": [ 11, 1, 7, 13 ],
            "tuesday": [ 26, 29, 7, 13 ],
            "wednesday": [ 25, 29, 14, 12 ],
            "thursday": [ 23, 28, 4, 10 ],
            "friday": [ 23, 28, 4, 10 ],
            "saturday": [ 22, 27, 3, 9 ],
            "sunday": [ 27, 3, 8, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 400,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/wall-art-for-sale-throw-the-baseball-canvas-wall-art-sale-wall-art-sale-sydney.jpg',
          title: 'Throw the Baseball',
          artist: 'Aaron Christensen',
          year: 'xxi cent.',
          rule: {
            "monday": [ 27, 3, 8, 15 ],
            "tuesday": [ 11, 1, 7, 13 ],
            "wednesday": [ 26, 29, 7, 13 ],
            "thursday": [ 25, 29, 14, 12 ],
            "friday": [ 23, 28, 4, 10 ],
            "saturday": [ 23, 28, 4, 10 ],
            "sunday": [ 22, 27, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 401,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/chicago-white-sox-team-colors.jpg',
          title: 'Chicago White Sox Team Colors',
          artist: 'unknown',
          year: '2017',
          rule: {
            "monday": [ 22, 27, 3, 9 ],
            "tuesday": [ 27, 3, 8, 15 ],
            "wednesday": [ 11, 1, 7, 13 ],
            "thursday": [ 26, 29, 7, 13 ],
            "friday": [ 25, 29, 14, 12 ],
            "saturday": [ 23, 28, 4, 10 ],
            "sunday": [ 23, 28, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 402,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/fworksSox.jpeg',
          title: 'Comiskey Park Fireworks Minimalist Art',
          artist: 'mlb shop',
          year: '2018',
          rule: {
            "monday": [ 23, 28, 4, 10 ],
            "tuesday": [ 22, 27, 3, 9 ],
            "wednesday": [ 27, 3, 8, 15 ],
            "thursday": [ 11, 1, 7, 13 ],
            "friday": [ 26, 29, 7, 13 ],
            "saturday": [ 25, 29, 14, 12 ],
            "sunday": [ 23, 28, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 403,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/2219737-NPWEZPQK-7.jpg',
          title: 'Chicago White Sox 1917',
          artist: 'Toby Towers',
          year: '2017',
          rule: {
            "monday": [ 23, 28, 4, 10 ],
            "tuesday": [ 23, 28, 4, 10 ],
            "wednesday": [ 22, 27, 3, 9 ],
            "thursday": [ 27, 3, 8, 15 ],
            "friday": [ 11, 1, 7, 13 ],
            "saturday": [ 26, 29, 7, 13 ],
            "sunday": [ 25, 29, 14, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 404,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/9-16-1919-whitesoxteam.jpg',
          title: '1919 White Sox Team',
          artist: 'unknown artist',
          year: '1919',
          rule: {
            "monday": [ 25, 29, 14, 12 ],
            "tuesday": [ 23, 28, 4, 10 ],
            "wednesday": [ 23, 28, 4, 10 ],
            "thursday": [ 22, 27, 3, 9 ],
            "friday": [ 27, 3, 8, 15 ],
            "saturday": [ 11, 1, 7, 13 ],
            "sunday": [ 26, 29, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 405,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/L9okw6B8yIqVsia5.jpg',
          title: 'Crowd Goes Wild',
          artist: 'M. Samantha',
          year: '2015',
          rule: {
            "monday": [ 26, 29, 7, 13 ],
            "tuesday": [ 25, 29, 14, 12 ],
            "wednesday": [ 23, 28, 4, 10 ],
            "thursday": [ 23, 28, 4, 10 ],
            "friday": [ 22, 27, 3, 9 ],
            "saturday": [ 27, 3, 8, 15 ],
            "sunday": [ 11, 1, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 406,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/0000250836.JPG',
          title: 'Miami Marlins Mascots',
          artist: 'unknown artist',
          year: '2015',
          rule: {
            "monday": [ 12, 2, 8, 14 ],
            "tuesday": [ 27, 30, 8, 14 ],
            "wednesday": [ 26, 30, 15, 13 ],
            "thursday": [ 24, 29, 5, 11 ],
            "friday": [ 24, 29, 5, 11 ],
            "saturday": [ 23, 28, 4, 10 ],
            "sunday": [ 28, 4, 9, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 407,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/usa-today-9273525.0.jpg',
          title: 'Dee Gordon',
          artist: 'Gary A. Vasquez',
          year: '2017',
          rule: {
            "monday": [ 28, 4, 9, 16 ],
            "tuesday": [ 12, 2, 8, 14 ],
            "wednesday": [ 27, 30, 8, 14 ],
            "thursday": [ 26, 30, 15, 13 ],
            "friday": [ 24, 29, 5, 11 ],
            "saturday": [ 24, 29, 5, 11 ],
            "sunday": [ 23, 28, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 408,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/405d7a33422745.5605dbae74761.jpg',
          title: 'Miami Marlins Brand Identity',
          artist: 'Behance',
          year: '2012',
          rule: {
            "monday": [ 23, 28, 4, 10 ],
            "tuesday": [ 28, 4, 9, 16 ],
            "wednesday": [ 12, 2, 8, 14 ],
            "thursday": [ 27, 30, 8, 14 ],
            "friday": [ 26, 30, 15, 13 ],
            "saturday": [ 24, 29, 5, 11 ],
            "sunday": [ 24, 29, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 409,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/marlins16.jpeg',
          title: 'Fans at Marlins Park in Little Havana pay tribute in September 2016 to their idol, Miami Marlins pitcher Jose Fernandez, who died in a boat accident.',
          artist: 'Pedro Portal',
          year: '2016',
          rule: {
            "monday": [ 24, 29, 5, 11 ],
            "tuesday": [ 23, 28, 4, 10 ],
            "wednesday": [ 28, 4, 9, 16 ],
            "thursday": [ 12, 2, 8, 14 ],
            "friday": [ 27, 30, 8, 14 ],
            "saturday": [ 26, 30, 15, 13 ],
            "sunday": [ 24, 29, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 410,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/fced7864-a226-48a3-a816-635dcdad555f.jpg',
          title: 'Miami Marlins\' Ichiro Suzuki',
          artist: 'Lynne Sladky',
          year: '2017',
          rule: {
            "monday": [ 24, 29, 5, 11 ],
            "tuesday": [ 24, 29, 5, 11 ],
            "wednesday": [ 23, 28, 4, 10 ],
            "thursday": [ 28, 4, 9, 16 ],
            "friday": [ 12, 2, 8, 14 ],
            "saturday": [ 27, 30, 8, 14 ],
            "sunday": [ 26, 30, 15, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 411,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/c3a8f7ce6506fae6b9f503037baa25f9--baseball-signs-oakland-baseball.jpg',
          title: 'Baseball Signs: Oakland Baseball',
          artist: 'unknown artist',
          year: 'xx cent.',
          rule: {
            "monday": [ 26, 30, 15, 13 ],
            "tuesday": [ 24, 29, 5, 11 ],
            "wednesday": [ 24, 29, 5, 11 ],
            "thursday": [ 23, 28, 4, 10 ],
            "friday": [ 28, 4, 9, 16 ],
            "saturday": [ 12, 2, 8, 14 ],
            "sunday": [ 27, 30, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 412,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/587712074-612x612.jpg',
          title: 'Sonny Gray #54 of the Oakland Athletics',
          artist: 'Michael Zagaris',
          year: '2016',
          rule: {
            "monday": [ 27, 30, 8, 14 ],
            "tuesday": [ 26, 30, 15, 13 ],
            "wednesday": [ 24, 29, 5, 11 ],
            "thursday": [ 24, 29, 5, 11 ],
            "friday": [ 23, 28, 4, 10 ],
            "saturday": [ 28, 4, 9, 16 ],
            "sunday": [ 12, 2, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 413,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/AsThumb.jpeg',
          title: 'Oakland Athletics Sports Art Print',
          artist: 'unknown artist',
          year: 'xxi cent.',
          rule: {
            "monday": [ 13, 3, 9, 15 ],
            "tuesday": [ 28, 1, 9, 15 ],
            "wednesday": [ 27, 1, 16, 14 ],
            "thursday": [ 24, 30, 6, 12 ],
            "friday": [ 25, 30, 6, 12 ],
            "saturday": [ 24, 29, 5, 11 ],
            "sunday": [ 29, 5, 10, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 414,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/ed71d39aa83f4d60a9a2aa5757e00ff2.jpg',
          title: 'Oakland Athletics\' mascots representing former A\'s pitchers Dennis Eckersley upper left, and Rollie Fingers',
          artist: 'Ben Margot',
          year: '2017',
          rule: {
            "monday": [ 29, 5, 10, 17 ],
            "tuesday": [ 13, 3, 9, 15 ],
            "wednesday": [ 28, 1, 9, 15 ],
            "thursday": [ 27, 1, 16, 14 ],
            "friday": [ 24, 30, 6, 12 ],
            "saturday": [ 25, 30, 6, 12 ],
            "sunday": [ 24, 29, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 415,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/3-Oakland-Athletics-MLB-Cooperstown-Hat-For-Yeezy-2-Glow-In-The-Dark-Custom-New-Era-Snapback-With-Gray-Under-Visor-950-9fifty-Snapback-3.jpg',
          title: 'Oakland Athletics Logo',
          artist: 'unknown artist',
          year: 'xx cent.',
          rule: {
            "monday": [ 24, 29, 5, 11 ],
            "tuesday": [ 29, 5, 10, 17 ],
            "wednesday": [ 13, 3, 9, 15 ],
            "thursday": [ 28, 1, 9, 15 ],
            "friday": [ 27, 1, 16, 14 ],
            "saturday": [ 24, 30, 6, 12 ],
            "sunday": [ 25, 30, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 416,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/pittsburgh-pirates-art-joe-hamilton.jpg',
          title: 'Pittsburgh Pirates Art',
          artist: 'Joe Hamilton',
          year: '2016',
          rule: {
            "monday": [ 25, 30, 6, 12 ],
            "tuesday": [ 24, 29, 5, 11 ],
            "wednesday": [ 29, 5, 10, 17 ],
            "thursday": [ 13, 3, 9, 15 ],
            "friday": [ 28, 1, 9, 15 ],
            "saturday": [ 27, 1, 16, 14 ],
            "sunday": [ 24, 30, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 417,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/pittsburgh-pirates-poster-art-florian-rodarte.jpg',
          title: 'Pittsburgh Pirates Poster Art',
          artist: 'Florian Rodarte',
          year: '2014',
          rule: {
            "monday": [ 24, 30, 6, 12 ],
            "tuesday": [ 25, 30, 6, 12 ],
            "wednesday": [ 24, 29, 5, 11 ],
            "thursday": [ 29, 5, 10, 17 ],
            "friday": [ 13, 3, 9, 15 ],
            "saturday": [ 28, 1, 9, 15 ],
            "sunday": [ 27, 1, 16, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 418,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/6f46caa307319edbbdeb0810c6c04fae--baseball-art-baseball-stuff.jpg',
          title: 'Pittsburgh Pirates MLB Baseball Art Print',
          artist: 'Paul Waner',
          year: '?',
          rule: {
            "monday": [ 27, 1, 16, 14 ],
            "tuesday": [ 24, 30, 6, 12 ],
            "wednesday": [ 25, 30, 6, 12 ],
            "thursday": [ 24, 29, 5, 11 ],
            "friday": [ 29, 5, 10, 17 ],
            "saturday": [ 13, 3, 9, 15 ],
            "sunday": [ 28, 1, 9, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 419,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/1-andrew-mccutchen-pittsburgh-pirates-art-joe-hamilton.jpg',
          title: 'Andrew Mccutchen Pittsburgh Pirates Art',
          artist: 'Joe Hamilton',
          year: '2016',
          rule: {
            "monday": [ 28, 1, 9, 15 ],
            "tuesday": [ 27, 1, 16, 14 ],
            "wednesday": [ 24, 30, 6, 12 ],
            "thursday": [ 25, 30, 6, 12 ],
            "friday": [ 24, 29, 5, 11 ],
            "saturday": [ 29, 5, 10, 17 ],
            "sunday": [ 13, 3, 9, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 420,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/pittsburgh-pirates-1492178210.jpg',
          title: 'Pittsburgh Pirates',
          artist: 'Gregg Hinlicky',
          year: '2012',
          rule: {
            "monday": [ 14, 4, 10, 16 ],
            "tuesday": [ 29, 2, 10, 16 ],
            "wednesday": [ 28, 2, 17, 15 ],
            "thursday": [ 25, 1, 7, 13 ],
            "friday": [ 26, 1, 7, 13 ],
            "saturday": [ 25, 30, 6, 12 ],
            "sunday": [ 30, 6, 11, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 421,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/1hCC_BlueJaysArt_0727___Gallery.jpg',
          title: 'Bleeding Blue',
          artist: 'Samara Marlee',
          year: '2017',
          rule: {
            "monday": [ 30, 6, 11, 18 ],
            "tuesday": [ 14, 4, 10, 16 ],
            "wednesday": [ 29, 2, 10, 16 ],
            "thursday": [ 28, 2, 17, 15 ],
            "friday": [ 25, 1, 7, 13 ],
            "saturday": [ 26, 1, 7, 13 ],
            "sunday": [ 25, 30, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 422,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/bleeding-blue-art-exhibit-toronto-768x576.jpg',
          title: 'Bleeding Blue',
          artist: 'Samara Marlee',
          year: '2017',
          rule: {
            "monday": [ 25, 30, 6, 12 ],
            "tuesday": [ 30, 6, 11, 18 ],
            "wednesday": [ 14, 4, 10, 16 ],
            "thursday": [ 29, 2, 10, 16 ],
            "friday": [ 28, 2, 17, 15 ],
            "saturday": [ 25, 1, 7, 13 ],
            "sunday": [ 26, 1, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 423,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/bleeding-blue-exhibit-1.jpg',
          title: 'Bleeding Blue',
          artist: 'Samara Marlee',
          year: '2017',
          rule: {
            "monday": [ 26, 1, 7, 13 ],
            "tuesday": [ 25, 30, 6, 12 ],
            "wednesday": [ 30, 6, 11, 18 ],
            "thursday": [ 14, 4, 10, 16 ],
            "friday": [ 29, 2, 10, 16 ],
            "saturday": [ 28, 2, 17, 15 ],
            "sunday": [ 25, 1, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 424,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/bleeding-blue-exhibit-2.jpg',
          title: 'Bleeding Blue',
          artist: 'Samara Marlee',
          year: '2017',
          rule: {
            "monday": [ 25, 1, 7, 13 ],
            "tuesday": [ 26, 1, 7, 13 ],
            "wednesday": [ 25, 30, 6, 12 ],
            "thursday": [ 30, 6, 11, 18 ],
            "friday": [ 14, 4, 10, 16 ],
            "saturday": [ 29, 2, 10, 16 ],
            "sunday": [ 28, 2, 17, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 425,
          user_id: 1,
          theme: 'Baseball',
          img_path: './img/april/JDWalkoff.gif',
          title: 'JD Walkoff',
          artist: 'artist unknown',
          year: '2016',
          rule: {
            "monday": [ 28, 2, 17, 15 ],
            "tuesday": [ 25, 1, 7, 13 ],
            "wednesday": [ 26, 1, 7, 13 ],
            "thursday": [ 25, 30, 6, 12 ],
            "friday": [ 30, 6, 11, 18 ],
            "saturday": [ 14, 4, 10, 16 ],
            "sunday": [ 29, 2, 10, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('april_arts_id_seq', (SELECT MAX(id) FROM april_arts));");
    });
};
