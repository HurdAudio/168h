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
            "monday": "[ 15, 6, 12, 18 ]",
            "tuesday": "[ 30, 5, 11, 17 ]",
            "wednesday": "[ 29, 4, 10, 16 ]",
            "thursday": "[ 28, 3, 9, 15 ]",
            "friday": "[ 27, 2, 8, 14 ]",
            "saturday": "[ 26, 1, 7, 13 ]",
            "sunday": "[ 1, 7, 13, 19 ]"
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
            "monday": "[ 1, 7, 13, 19 ]",
            "tuesday": "[ 15, 6, 12, 18 ]",
            "wednesday": "[ 30, 5, 11, 17 ]",
            "thursday": "[ 29, 4, 10, 16]",
            "friday": "[ 28, 3, 9, 15 ]",
            "saturday": "[ 27, 2, 8, 14 ]",
            "sunday": "[ 26, 1, 7, 13 ]"
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
            "monday": "[ 26, 1, 7, 13 ]",
            "tuesday": "[ 1, 7, 13, 19 ]",
            "wednesday": "[ 15, 6, 12, 18 ]",
            "thursday": "[ 30, 5, 11, 17]",
            "friday": "[ 29, 4, 10, 16 ]",
            "saturday": "[ 28, 3, 9, 15 ]",
            "sunday": "[ 27, 2, 8, 14 ]"
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
            "monday": "[ 27, 2, 8, 14 ]",
            "tuesday": "[ 26, 1, 7, 13 ]",
            "wednesday": "[ 1, 7, 13, 19 ]",
            "thursday": "[ 15, 6, 12, 18]",
            "friday": "[ 30, 5, 11, 17 ]",
            "saturday": "[ 29, 4, 10, 16 ]",
            "sunday": "[ 28, 3, 9, 15 ]"
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
            "monday": "[ 28, 3, 9, 15 ]",
            "tuesday": "[ 27, 2, 8, 14 ]",
            "wednesday": "[ 26, 1, 7, 13 ]",
            "thursday": "[ 1, 7, 13, 19]",
            "friday": "[ 15, 6, 12, 18 ]",
            "saturday": "[ 30, 5, 11, 17 ]",
            "sunday": "[ 29, 4, 10, 16 ]"
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
            "monday": "[ 29, 4, 10, 16 ]",
            "tuesday": "[ 28, 3, 9, 15 ]",
            "wednesday": "[ 27, 2, 8, 14 ]",
            "thursday": "[ 26, 1, 7, 13 ]",
            "friday": "[ 1, 7, 13, 19 ]",
            "saturday": "[ 15, 6, 12, 18 ]",
            "sunday": "[ 30, 5, 11, 17 ]"
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
            "monday": "[ 30, 6, 12, 18 ]",
            "tuesday": "[ 30, 5, 11, 17 ]",
            "wednesday": "[ 29, 4, 10, 16 ]",
            "thursday": "[ 28, 3, 9, 15 ]",
            "friday": "[ 27, 2, 8, 14 ]",
            "saturday": "[ 2, 8, 14, 20 ]",
            "sunday": "[ 16, 7, 13, 19 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'baseball',
          img_path: './img/april/holland-gallery-alex-rodriguez-steven-baseball-art.jpg',
          title: 'Alex Rodriguez Baseball',
          artist: 'Stephen Holland',
          year: 'XXI cent.',
          rule: {
            "monday": "[ 16, 7, 13, 19 ]",
            "tuesday": "[ 30, 6, 12, 18 ]",
            "wednesday": "[ 30, 5, 11, 17 ]",
            "thursday": "[ 29, 4, 10, 16 ]",
            "friday": "[ 28, 3, 9, 15 ]",
            "saturday": "[ 27, 2, 8, 14 ]",
            "sunday": "[ 2, 8, 14, 20 ]"
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
            "monday": "[ 2, 8, 14, 20 ]",
            "tuesday": "[ 16, 7, 13, 19 ]",
            "wednesday": "[ 30, 6, 12, 18 ]",
            "thursday": "[ 30, 5, 11, 17 ]",
            "friday": "[ 29, 4, 10, 16 ]",
            "saturday": "[ 28, 3, 9, 15 ]",
            "sunday": "[ 27, 2, 8, 14 ]"
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
            "monday": "[ 27, 2, 8, 14 ]",
            "tuesday": "[ 2, 8, 14, 20 ]",
            "wednesday": "[ 16, 7, 13, 19 ]",
            "thursday": "[ 30, 6, 12, 18 ]",
            "friday": "[ 30, 5, 11, 17 ]",
            "saturday": "[ 29, 4, 10, 16 ]",
            "sunday": "[ 28, 3, 9, 15 ]"
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
            "monday": "[ 28, 3, 9, 15 ]",
            "tuesday": "[ 27, 2, 8, 14 ]",
            "wednesday": "[ 2, 8, 14, 20 ]",
            "thursday": "[ 16, 7, 13, 19 ]",
            "friday": "[ 30, 6, 12, 18 ]",
            "saturday": "[ 30, 5, 11, 17 ]",
            "sunday": "[ 29, 4, 10, 16 ]"
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
            "monday": "[ 29, 4, 10, 16 ]",
            "tuesday": "[ 28, 3, 9, 15 ]",
            "wednesday": "[ 27, 2, 8, 14 ]",
            "thursday": "[ 2, 8, 14, 20 ]",
            "friday": "[ 16, 7, 13, 19 ]",
            "saturday": "[ 30, 6, 12, 18 ]",
            "sunday": "[ 30, 5, 11, 17 ]"
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
            "monday": "[ 30, 5, 11, 17 ]",
            "tuesday": "[ 29, 4, 10, 16 ]",
            "wednesday": "[ 28, 3, 9, 15 ]",
            "thursday": "[ 27, 2, 8, 14 ]",
            "friday": "[ 2, 8, 14, 20 ]",
            "saturday": "[ 16, 7, 13, 19 ]",
            "sunday": "[ 1, 6, 12, 18 ]"
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
            "monday": "[ 2, 7, 13, 19 ]",
            "tuesday": "[ 1, 5, 12, 18 ]",
            "wednesday": "[ 30, 5, 11, 17 ]",
            "thursday": "[ 29, 4, 10, 16 ]",
            "friday": "[ 28, 3, 9, 15 ]",
            "saturday": "[ 3, 9, 15, 21 ]",
            "sunday": "[ 17, 8, 14, 20 ]"
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
            "monday": "[ 17, 8, 14, 20 ]",
            "tuesday": "[ 2, 7, 13, 19 ]",
            "wednesday": "[ 1, 5, 12, 18 ]",
            "thursday": "[ 30, 5, 11, 17 ]",
            "friday": "[ 29, 4, 10, 16 ]",
            "saturday": "[ 28, 3, 9, 15 ]",
            "sunday": "[ 3, 9, 15, 21 ]"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('april_arts_id_seq', (SELECT MAX(id) FROM april_arts));");
    });
};
