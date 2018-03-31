'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('december_tiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('december_tiles').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'Snow',
          type: 'default',
          src_string: '../img/december_tiles/5342733777_083fee0263_b.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#82858E',
          color_medium: '#A7AEB8',
          color_light: '#D0D1D6',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'Snow',
          type: 'week',
          src_string: '../img/december_tiles/snow-texture--14.jpg',
          repeat_value: 'no-repeat',
          size_value: '190%',
          color_dark: '#7C7A87',
          color_medium: '#958F94',
          color_light: '#E4DFCF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'Snow',
          type: 'mtwt',
          src_string: '../img/december_tiles/9479e7d7b1fa6fe9beea06fabf05cd9f.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#A4B4C4',
          color_medium: '#E0E4ED',
          color_light: '#F3F8FB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'Snow',
          type: 'friday',
          src_string: '../img/december_tiles/snow_texture_2_by_arctic_stock.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#677C9B',
          color_medium: '#97A3A3',
          color_light: '#D0CBB5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Snow',
          type: 'saturday',
          src_string: '../img/december_tiles/snow-651409_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '156%',
          color_dark: '#4A5B75',
          color_medium: '#D1B99F',
          color_light: '#F5E6CB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Snow',
          type: 'sunday',
          src_string: '../img/december_tiles/snow-705109_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#040402',
          color_medium: '#717276',
          color_light: '#D4D5D0',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Snow',
          type: 'holiday',
          src_string: '../img/december_tiles/night-1033150_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#130016',
          color_medium: '#655268',
          color_light: '#FFFFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Snow',
          type: 'week',
          src_string: '../img/december_tiles/austria-88739_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#040E17',
          color_medium: '#4D90BD',
          color_light: '#EEDCD4',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Snow',
          type: 'friday',
          src_string: '../img/december_tiles/snow-landscape-986916_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#0E0C17',
          color_medium: '#6C778B',
          color_light: '#C5C4C9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Snow',
          type: 'saturday',
          src_string: '../img/december_tiles/sedrun-2356548_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#364566',
          color_medium: '#6E7A94',
          color_light: '#EEF4F2',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Snow',
          type: 'sunday',
          src_string: '../img/december_tiles/foot-16491_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#50595E',
          color_medium: '#587087',
          color_light: '#CDCDCD',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Snow',
          type: 'holiday',
          src_string: '../img/december_tiles/snowflake-1596983_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '143%',
          color_dark: '#141414',
          color_medium: '#282828',
          color_light: '#DDDDDD',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Snow',
          type: 'week',
          src_string: '../img/december_tiles/trail-586804_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#012862',
          color_medium: '#556888',
          color_light: '#DCE5E8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Snow',
          type: 'friday',
          src_string: '../img/december_tiles/path-1753194_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#6C778D',
          color_medium: '#3B7AA5',
          color_light: '#B4B5B1',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Snow',
          type: 'saturday',
          src_string: '../img/december_tiles/sweden-110175_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#0B080F',
          color_medium: '#8A6D8B',
          color_light: '#F6FBF6',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Snow',
          type: 'sunday',
          src_string: '../img/december_tiles/winter-2085829_1280.jpg',
          repeat_value: 'no-repeat',
          size_value: '180%',
          color_dark: '#010301',
          color_medium: '#58738B',
          color_light: '#FEFEFC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Snow',
          type: 'holiday',
          src_string: '../img/december_tiles/snowflakes-1933485_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#19242A',
          color_medium: '#346585',
          color_light: '#C2CBD0',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Snow',
          type: 'week',
          src_string: '../img/december_tiles/winter-2435148_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '180%',
          color_dark: '#28263E',
          color_medium: '#4F5055',
          color_light: '#C5C1B6',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Snow',
          type: 'friday',
          src_string: '../img/december_tiles/lapland-2984828_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '152%',
          color_dark: '#1D1E22',
          color_medium: '#768CAC',
          color_light: '#FFF9DD',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Snow',
          type: 'saturday',
          src_string: '../img/december_tiles/lavicky-1635602_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#1A141E',
          color_medium: '#9F8972',
          color_light: '#E2E3E8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Snow',
          type: 'sunday',
          src_string: '../img/december_tiles/arctic-139394_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#1A051E',
          color_medium: '#B44707',
          color_light: '#FCFEF0',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Snow',
          type: 'holiday',
          src_string: '../img/december_tiles/ice-crystal-222272_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#060606',
          color_medium: '#2F8345',
          color_light: '#FFF60C',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Snow',
          type: 'week',
          src_string: '../img/december_tiles/greenland-1962998_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#164563',
          color_medium: '#557C8D',
          color_light: '#DED9C9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Snow',
          type: 'friday',
          src_string: '../img/december_tiles/roadway-1081719_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '145%',
          color_dark: '#30323E',
          color_medium: '#A3A8B7',
          color_light: '#F1F2F6',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Snow',
          type: 'saturday',
          src_string: '../img/december_tiles/wintry-2068298_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '180%',
          color_dark: '#5F6B77',
          color_medium: '#9DA9B5',
          color_light: '#C3CAD2',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Snow',
          type: 'sunday',
          src_string: '../img/december_tiles/wintry-590190_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '180%',
          color_dark: '#161F24',
          color_medium: '#336EB2',
          color_light: '#BCBAC1',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Snow',
          type: 'holiday',
          src_string: '../img/december_tiles/ball-2995735_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#090C09',
          color_medium: '#636F51',
          color_light: '#FEFEFE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Snow',
          type: 'week',
          src_string: '../img/december_tiles/snow-3012197_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#212315',
          color_medium: '#80AEBE',
          color_light: '#FBFFFD',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Snow',
          type: 'friday',
          src_string: '../img/december_tiles/snow-covered-270296_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#0A0A08',
          color_medium: '#40698A',
          color_light: '#FBFBFC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Snow',
          type: 'saturday',
          src_string: '../img/december_tiles/hay-bales-1614929_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#002058',
          color_medium: '#2A6AB1',
          color_light: '#E9E4EA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Snow',
          type: 'sunday',
          src_string: '../img/december_tiles/landscape-2905031_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#1D2B3B',
          color_medium: '#8DACC0',
          color_light: '#F7EBD3',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Snow',
          type: 'holiday',
          src_string: '../img/december_tiles/snowflake-297136_640.png',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#258277',
          color_medium: '#7FE4D6',
          color_light: '#FFFFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Snow',
          type: 'week',
          src_string: '../img/december_tiles/snow-1131605_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#14130E',
          color_medium: '#606163',
          color_light: '#F6F5F0',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('december_tiles_id_seq', (SELECT MAX(id) FROM december_tiles));");
    });
};
