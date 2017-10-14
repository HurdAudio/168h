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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
          theme: 'baseball',
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
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('april_arts_id_seq', (SELECT MAX(id) FROM april_arts));");
    });
};
