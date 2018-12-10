'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('april_tiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('april_tiles').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'Water',
          type: 'default',
          src_string: '../img/april_tiles/banner-2143726_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '400%',
          color_dark: '#8C8C8E',
          color_medium: '#BDBDBF',
          color_light: '#FCFCFC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'Water',
          type: 'week',
          src_string: '../img/april_tiles/waterweek3.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#203855',
          color_medium: '#4572AA',
          color_light: '#78A1D0',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'Water',
          type: 'mtwt',
          src_string: '../img/april_tiles/sea-2055969_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '165%',
          color_dark: '#00304F',
          color_medium: '#6F8DC0',
          color_light: '#A8BAE1',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'Water',
          type: 'friday',
          src_string: '../img/april_tiles/water-1579915_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#00164E',
          color_medium: '#055FEE',
          color_light: '#CDDCFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Water',
          type: 'saturday',
          src_string: '../img/april_tiles/waves-circles-285359_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#120E1F',
          color_medium: '#2450E4',
          color_light: '#F9FAEC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Water',
          type: 'sunday',
          src_string: '../img/april_tiles/ripples-in-water.jpg',
          repeat_value: 'no-repeat',
          size_value: '190%',
          color_dark: '#032555',
          color_medium: '#4997BE',
          color_light: '#F8FAFA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Water',
          type: 'holiday',
          src_string: '../img/april_tiles/1813624294001_5488970555001_cq5-9044923698769408782preview-thumbnail.jpg',
          repeat_value: 'no-repeat',
          size_value: '200%',
          color_dark: '#242B34',
          color_medium: '#5683A4',
          color_light: '#E5EEF3',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Water',
          type: 'week',
          src_string: '../img/april_tiles/waterweek.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#0E486F',
          color_medium: '#237CC7',
          color_light: '#71B9F9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Water',
          type: 'friday',
          src_string: '../img/april_tiles/e-golden-water-6.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#568787',
          color_medium: '#8A988B',
          color_light: '#EDEAC0',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Water',
          type: 'saturday',
          src_string: '../img/april_tiles/wg037_water_patterns_1.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#052D95',
          color_medium: '#046DC0',
          color_light: '#7BB7E0',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Water',
          type: 'sunday',
          src_string: '../img/april_tiles/abstract-1283722_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '200%',
          color_dark: '#130E09',
          color_medium: '#D8610E',
          color_light: '#FDD749',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Water',
          type: 'sunday',
          src_string: '../img/april_tiles/drop-of-water-166735_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '165%',
          color_dark: '#261502',
          color_medium: '#FFA890',
          color_light: '#EAE5E7',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Water',
          type: 'week',
          src_string: '../img/april_tiles/waterweek2.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#011243',
          color_medium: '#326497',
          color_light: '#E8EAE9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Water',
          type: 'friday',
          src_string: '../img/april_tiles/water-1281109_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#132647',
          color_medium: '#548ECD',
          color_light: '#B6E4FF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Water',
          type: 'saturday',
          src_string: '../img/april_tiles/water-6300_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#0B1007',
          color_medium: '#0D1D1C',
          color_light: '#B5B7B6',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Water',
          type: 'sunday',
          src_string: '../img/april_tiles/kodaikanal-1292131_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#162022',
          color_medium: '#3B698A',
          color_light: '#699DC5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Water',
          type: 'holiday',
          src_string: '../img/april_tiles/duck-2396740_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#2D3D50',
          color_medium: '#9EA4A0',
          color_light: '#CDD2D2',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Water',
          type: 'week',
          src_string: '../img/april_tiles/water-975974_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#12130E',
          color_medium: '#6D6D6D',
          color_light: '#A0A0A2',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Water',
          type: 'friday',
          src_string: '../img/april_tiles/drip-101052_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#54750C',
          color_medium: '#7AA322',
          color_light: '#E0FD9D',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Water',
          type: 'saturday',
          src_string: '../img/april_tiles/air-bubbles-167821_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#1C2416',
          color_medium: '#425343',
          color_light: '#A5C0C9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Water',
          type: 'sunday',
          src_string: '../img/april_tiles/waters-616023_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#202520',
          color_medium: '#77B98B',
          color_light: '#E6FDE9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Water',
          type: 'holiday',
          src_string: '../img/april_tiles/swan-2084971_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#020609',
          color_medium: '#506674',
          color_light: '#CAD1D9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Water',
          type: 'week',
          src_string: '../img/april_tiles/pier-2478830_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#101417',
          color_medium: '#2F3438',
          color_light: '#FFFEBE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Water',
          type: 'friday',
          src_string: '../img/april_tiles/isar-2380400_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '200%',
          color_dark: '#31301C',
          color_medium: '#A6998B',
          color_light: '#D6DEE9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Water',
          type: 'saturday',
          src_string: '../img/april_tiles/wave-1836193_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#374F56',
          color_medium: '#6DAB8E',
          color_light: '#D7F2DB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Water',
          type: 'sunday',
          src_string: '../img/april_tiles/wave-1615846_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#031924',
          color_medium: '#2C5D7E',
          color_light: '#E9EAE5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Water',
          type: 'holiday',
          src_string: '../img/april_tiles/splash-1795776_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '175%',
          color_dark: '#101211',
          color_medium: '#645B5E',
          color_light: '#4BA594',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Water',
          type: 'week',
          src_string: '../img/april_tiles/seagull-677384_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '154%',
          color_dark: '#060800',
          color_medium: '#6A7A79',
          color_light: '#BDCAD0',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Water',
          type: 'friday',
          src_string: '../img/april_tiles/swimming-pool-111708_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '145%',
          color_dark: '#1C83B3',
          color_medium: '#1C96D0',
          color_light: '#FAFEF9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Water',
          type: 'saturday',
          src_string: '../img/april_tiles/beach-resort-390971_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#0F1013',
          color_medium: '#337583',
          color_light: '#F3F2E5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Water',
          type: 'sunday',
          src_string: '../img/april_tiles/spring-2559771_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#0E2E29',
          color_medium: '#11463B',
          color_light: '#D7D8DC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Water',
          type: 'holiday',
          src_string: '../img/april_tiles/sea-otter-1772039_1280.jpg',
          repeat_value: 'no-repeat',
          size_value: '153%',
          color_dark: '#110D13',
          color_medium: '#3F5E72',
          color_light: '#B4C7D8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Water',
          type: 'week',
          src_string: '../img/april_tiles/breakwater-461486_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#111611',
          color_medium: '#2264B8',
          color_light: '#E7F2F5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Water',
          type: 'friday',
          src_string: '../img/april_tiles/figure-1212808_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#0021C8',
          color_medium: '#0539FF',
          color_light: '#0D8DFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Water',
          type: 'saturday',
          src_string: '../img/april_tiles/water-658992_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#4E421F',
          color_medium: '#B8716F',
          color_light: '#FEFDF3',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Water',
          type: 'sunday',
          src_string: '../img/april_tiles/water-drop-1475166_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '200%',
          color_dark: '#212517',
          color_medium: '#9D8E01',
          color_light: '#F4FFE3',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Water',
          type: 'holiday',
          src_string: '../img/april_tiles/duck-123835_1280.jpg',
          repeat_value: 'no-repeat',
          size_value: '153%',
          color_dark: '#101012',
          color_medium: '#D3666A',
          color_light: '#D9DBDF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Water',
          type: 'week',
          src_string: '../img/april_tiles/sea-2597713_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#00001C',
          color_medium: '#0B2B7A',
          color_light: '#D4E3D9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Water',
          type: 'friday',
          src_string: '../img/april_tiles/nature-2573441_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#0C0F14',
          color_medium: '#979299',
          color_light: '#C9B7A3',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Water',
          type: 'saturday',
          src_string: '../img/april_tiles/water-1216600_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#181314',
          color_medium: '#56595D',
          color_light: '#A2A2A2',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Water',
          type: 'sunday',
          src_string: '../img/april_tiles/sunset-3156440_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '180%',
          color_dark: '#130001',
          color_medium: '#FDD262',
          color_light: '#FEFFD7',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Water',
          type: 'holiday',
          src_string: '../img/april_tiles/seagull-183626_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#080715',
          color_medium: '#314067',
          color_light: '#FEFEFE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Water',
          type: 'week',
          src_string: '../img/april_tiles/ozark-166113_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#070707',
          color_medium: '#345542',
          color_light: '#EFF0F2',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Water',
          type: 'friday',
          src_string: '../img/april_tiles/school-of-fish-1272678_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#14181D',
          color_medium: '#20C8ED',
          color_light: '#F8FEFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Water',
          type: 'saturday',
          src_string: '../img/april_tiles/wave-735853_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '145%',
          color_dark: '#032264',
          color_medium: '#4EA8CF',
          color_light: '#F9FAFC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Water',
          type: 'sunday',
          src_string: '../img/april_tiles/droplets-2422160_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#052750',
          color_medium: '#6796C2',
          color_light: '#EDFEFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Water',
          type: 'holiday',
          src_string: '../img/april_tiles/daisy-379370_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#060201',
          color_medium: '#9C9B53',
          color_light: '#FCFAEB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Water',
          type: 'week',
          src_string: '../img/april_tiles/pond-3234253_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#071603',
          color_medium: '#A2BE74',
          color_light: '#E4D5C5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Water',
          type: 'friday',
          src_string: '../img/april_tiles/sc-1541147_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#161616',
          color_medium: '#969C93',
          color_light: '#F9F7EB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Water',
          type: 'saturday',
          src_string: '../img/april_tiles/water-jet-266412_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#323E6F',
          color_medium: '#737FAF',
          color_light: '#A8B6DD',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Water',
          type: 'sunday',
          src_string: '../img/april_tiles/sunset-942101_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '152%',
          color_dark: '#000000',
          color_medium: '#BF7A34',
          color_light: '#FFED80',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Water',
          type: 'holiday',
          src_string: '../img/april_tiles/goldfish-945831_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#1F1C17',
          color_medium: '#F49F96',
          color_light: '#FFF45C',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Water',
          type: 'week',
          src_string: '../img/april_tiles/amsterdam-1973238_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#0D0C09',
          color_medium: '#48ACE0',
          color_light: '#FBFBFB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Water',
          type: 'friday',
          src_string: '../img/april_tiles/jong-marshes-458354-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#020E1A',
          color_medium: '#43A0C1',
          color_light: '#C6D8D4',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Water',
          type: 'saturday',
          src_string: '../img/april_tiles/leo-rivas-25956-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '151%',
          color_dark: '#031222',
          color_medium: '#76ADC5',
          color_light: '#FAF9F7',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Water',
          type: 'sunday',
          src_string: '../img/april_tiles/ant-rozetsky-226345-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#050D10',
          color_medium: '#717872',
          color_light: '#FCF9EC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Water',
          type: 'holiday',
          src_string: '../img/april_tiles/kyaw-tun-263670-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '163%',
          color_dark: '#08141E',
          color_medium: '#D69990',
          color_light: '#C7CFD4',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Water',
          type: 'week',
          src_string: '../img/april_tiles/matteo-catanese-400110-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '190%',
          color_dark: '#182329',
          color_medium: '#216A94',
          color_light: '#E8CFD4',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Water',
          type: 'friday',
          src_string: '../img/april_tiles/marco-ceschi-227401-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#030212',
          color_medium: '#32786D',
          color_light: '#FFF9F9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Water',
          type: 'saturday',
          src_string: '../img/april_tiles/fatima-fuentes-696809-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '145%',
          color_dark: '#0C261B',
          color_medium: '#54A5CA',
          color_light: '#F3F6FB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Water',
          type: 'sunday',
          src_string: '../img/april_tiles/osman-rana-729722-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#000506',
          color_medium: '#4D71B5',
          color_light: '#FBF9FE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Water',
          type: 'holiday',
          src_string: '../img/april_tiles/david-clode-341229-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '165%',
          color_dark: '#0F2147',
          color_medium: '#B2BE4E',
          color_light: '#9A979E',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Water',
          type: 'week',
          src_string: '../img/april_tiles/jason-leung-719219-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '156%',
          color_dark: '#000002',
          color_medium: '#FEAE47',
          color_light: '#9C9F93',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Water',
          type: 'friday',
          src_string: '../img/april_tiles/tomoko-uji-630443-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#121818',
          color_medium: '#3F3E39',
          color_light: '#B7C6CF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Water',
          type: 'saturday',
          src_string: '../img/april_tiles/jeremy-bishop-123463-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#084B3F',
          color_medium: '#329AC5',
          color_light: '#F3F3F4',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Water',
          type: 'sunday',
          src_string: '../img/april_tiles/gonard-fluit-269094-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#006696',
          color_medium: '#00A3B5',
          color_light: '#B3B3D0',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Water',
          type: 'holiday',
          src_string: '../img/april_tiles/jakob-owens-208998-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#152524',
          color_medium: '#00CFDB',
          color_light: '#F3F2EE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Water',
          type: 'week',
          src_string: '../img/april_tiles/anton-sulsky-126-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '157%',
          color_dark: '#221C1C',
          color_medium: '#3D1E03',
          color_light: '#FCFAFD',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Water',
          type: 'friday',
          src_string: '../img/april_tiles/stefan-gunnarsson-159330-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#091123',
          color_medium: '#3278F2',
          color_light: '#5EAFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Water',
          type: 'saturday',
          src_string: '../img/april_tiles/jean-gerber-633824-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#16353E',
          color_medium: '#0FD4DF',
          color_light: '#FBF1F2',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Water',
          type: 'sunday',
          src_string: '../img/april_tiles/ivan-bandura-537847-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#091E23',
          color_medium: '#4EA4B1',
          color_light: '#B3C1C1',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'Water',
          type: 'holiday',
          src_string: '../img/april_tiles/wembley-296066-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#05060B',
          color_medium: '#1C3CD5',
          color_light: '#C8CFF0',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'Water',
          type: 'week',
          src_string: '../img/april_tiles/greg-rakozy-79998-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#102717',
          color_medium: '#5082D1',
          color_light: '#F4F9FC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('april_tiles_id_seq', (SELECT MAX(id) FROM april_tiles));");
    });
};
