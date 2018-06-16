'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('november_tiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('november_tiles').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'default',
          src_string: '../img/november_tiles/black-and-white-images-of-birds-3-widescreen-wallpaper.jpg',
          repeat_value: 'no-repeat',
          size_value: '130%',
          color_dark: '#323232',
          color_medium: '#A7A7A7',
          color_light: '#EBEBEB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'week',
          src_string: '../img/november_tiles/wave-2822857_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '105%',
          color_dark: '#4B4B4B',
          color_medium: '#FAFAFA',
          color_light: '#F7F7F7',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'mtwt',
          src_string: '../img/november_tiles/floor-tile-pattern-floor-tile-pattern.jpg',
          repeat_value: 'no-repeat',
          size_value: '105%',
          color_dark: '#171717',
          color_medium: '#BCBCBC',
          color_light: '#CFCFCF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'friday',
          src_string: '../img/november_tiles/stark-1891510_1280.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#030303',
          color_medium: '#9B9B9B',
          color_light: '#FEFEFE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'saturday',
          src_string: '../img/november_tiles/black-and-white-2703890_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '110%',
          color_dark: '#0E0E0E',
          color_medium: '#676767',
          color_light: '#C1C1C1',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'sunday',
          src_string: '../img/november_tiles/blue-1317256_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '110%',
          color_dark: '#4D90CD',
          color_medium: '#B1CDE8',
          color_light: '#DDE7F1',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'holiday',
          src_string: '../img/november_tiles/geometric-1562524_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#BF0000',
          color_medium: '#FF6597',
          color_light: '#FF97CA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'week',
          src_string: '../img/november_tiles/yerevan-6.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#141311',
          color_medium: '#90918C',
          color_light: '#C1C2C7',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'friday',
          src_string: '../img/november_tiles/3d-stone-wall-cladding-idea-boxy-natural-stone-mosaic-wall-tiles-creative-wall-cladding-installation-for-3d-effect-result-3d-feature-wall-3d-stone-tiles-natural-stone-wall-cladding-stone-mosaic-til-940x705.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#0C0A0C',
          color_medium: '#A4875D',
          color_light: '#EFD5AD',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'saturday',
          src_string: '../img/november_tiles/Pyramid_700x465._V352857426_.gif',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#242424',
          color_medium: '#3B3B3B',
          color_light: '#EBEBEB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'sunday',
          src_string: '../img/november_tiles/073b9b755dec5be95788cc46edb48950.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#171717',
          color_medium: '#4D4D4B',
          color_light: '#CACAC8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'holiday',
          src_string: '../img/november_tiles/monochromatic1.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#134019',
          color_medium: '#73AE76',
          color_light: '#FDFFF9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'week',
          src_string: '../img/november_tiles/01_torre-velasca-1956-58-bbpr-partnership-milano-early-september-2016_05.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#090909',
          color_medium: '#5E5C5D',
          color_light: '#C1C0BE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'friday',
          src_string: '../img/november_tiles/Gurkanwar-Singh-Bedi.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#292929',
          color_medium: '#474747',
          color_light: '#E4E4E4',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'saturday',
          src_string: '../img/november_tiles/BW_lead_photo.jpeg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#030303',
          color_medium: '#3E3E40',
          color_light: '#FDFDFD',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'sunday',
          src_string: '../img/november_tiles/FQ1608-33_Chevron_-_black_white_monochrome_5mm_stripe_width_160cm_cotton_fabric_2_large.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#020106',
          color_medium: '#D9D5A7',
          color_light: '#DAD5AE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'holiday',
          src_string: '../img/november_tiles/monochromatic-color-photography-victorian-expansive.jpg',
          repeat_value: 'no-repeat',
          size_value: '153%',
          color_dark: '#010123',
          color_medium: '#4672B3',
          color_light: '#CDD1DD',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'week',
          src_string: '../img/november_tiles/brutal.jpg',
          repeat_value: 'no-repeat',
          size_value: '170%',
          color_dark: '#716A5A',
          color_medium: '#BFB8A8',
          color_light: '#FFFFFB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'friday',
          src_string: '../img/november_tiles/lion_snake_sand_Chimera-313.png',
          repeat_value: 'no-repeat',
          size_value: '180%',
          color_dark: '#190914',
          color_medium: '#2E2C31',
          color_light: '#B9C0B9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'saturday',
          src_string: '../img/november_tiles/tumblr_p0lqrpaWA21qhoa53o9_1280.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#171717',
          color_medium: '#515151',
          color_light: '#E2E2E2',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'sunday',
          src_string: '../img/november_tiles/1974_PCG_155_GroupShow_Paintings_GClements_002.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#1A1A1A',
          color_medium: '#565656',
          color_light: '#E1E1E1',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'holiday',
          src_string: '../img/november_tiles/DSC_0065_s.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#200204',
          color_medium: '#D27202',
          color_light: '#E58201',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'week',
          src_string: '../img/november_tiles/brutalism_luxury_01.jpg',
          repeat_value: 'no-repeat',
          size_value: '145%',
          color_dark: '#010101',
          color_medium: '#7E7E7E',
          color_light: '#FEFEFE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'friday',
          src_string: '../img/november_tiles/il_340x270.1038130223_q5kf.jpg',
          repeat_value: 'no-repeat',
          size_value: '130%',
          color_dark: '#201B17',
          color_medium: '#6A584A',
          color_light: '#E5CAAF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'saturday',
          src_string: '../img/november_tiles/cle_john_whitmarsh_endgrain_ceramic_white_300-1024x682.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#39383A',
          color_medium: '#939194',
          color_light: '#E0DEE1',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'sunday',
          src_string: '../img/november_tiles/studio-room.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#040406',
          color_medium: '#716362',
          color_light: '#EAEBED',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'holiday',
          src_string: '../img/november_tiles/geometric-1556410_1920.png',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#AE00B1',
          color_medium: '#DB87DC',
          color_light: '#D9BADA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'week',
          src_string: '../img/november_tiles/building-1454527_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '153%',
          color_dark: '#010101',
          color_medium: '#B0B0B0',
          color_light: '#DFDFDF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'friday',
          src_string: '../img/november_tiles/trippyImg.jpeg',
          repeat_value: 'no-repeat',
          size_value: '180%',
          color_dark: '#040605',
          color_medium: '#747675',
          color_light: '#F8F8F8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'saturday',
          src_string: '../img/november_tiles/photo-728711.JPG',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#06070C',
          color_medium: '#6D687E',
          color_light: '#FEF6F4',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'sunday',
          src_string: '../img/november_tiles/Screen-Shot-2017-02-10-at-8.57.00-AM.png',
          repeat_value: 'no-repeat',
          size_value: '165%',
          color_dark: '#040000',
          color_medium: '#BD5520',
          color_light: '#FEFFFA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'holiday',
          src_string: '../img/november_tiles/monochrome-08.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#002F00',
          color_medium: '#A3B52D',
          color_light: '#DBE1D4',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'week',
          src_string: '../img/november_tiles/2016-03-24-15.45.23-1024x768.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#141321',
          color_medium: '#918668',
          color_light: '#F8F1E7',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'friday',
          src_string: '../img/november_tiles/7ca566e68278b2dad50ba7757de5876a.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#043537',
          color_medium: '#A4C5C0',
          color_light: '#F7F8F3',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'saturday',
          src_string: '../img/november_tiles/Mono-Landscape-Photo-Argentina-Jakub-Polomski-11ARC1087.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#152026',
          color_medium: '#758795',
          color_light: '#DFE4EC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'sunday',
          src_string: '../img/november_tiles/DV0RpwYXcAAgZWs.jpg',
          repeat_value: 'no-repeat',
          size_value: '120%',
          color_dark: '#161614',
          color_medium: '#7A7A7A',
          color_light: '#FAFAFA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'holiday',
          src_string: '../img/november_tiles/gallery-famous-monochromatic-paintings-drawings-art-gallery-home-design-famous-monochromatic-paintings-farmhouse-medium-the.jpg',
          repeat_value: 'no-repeat',
          size_value: '130%',
          color_dark: '#181321',
          color_medium: '#2D69B7',
          color_light: '#D1CFC4',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'week',
          src_string: '../img/november_tiles/nonagon-style-brutalist-architecture-structure-cement-window-perspective-building-1.jpg',
          repeat_value: 'no-repeat',
          size_value: '180%',
          color_dark: '#050704',
          color_medium: '#837654',
          color_light: '#C9C1AD',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'friday',
          src_string: '../img/november_tiles/4860d8d14ac9b97be53d966783068760.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#0C0C0C',
          color_medium: '#A4A5A0',
          color_light: '#F9FAFE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'saturday',
          src_string: '../img/november_tiles/example-of-a-monochromatic-photograph-icon-photography-school.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#010704',
          color_medium: '#70A9A2',
          color_light: '#ECECEC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'sunday',
          src_string: '../img/november_tiles/Monochromatic-art-3.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#333921',
          color_medium: '#BBDD6B',
          color_light: '#E6EDBE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'holiday',
          src_string: '../img/november_tiles/flower-designs-for-embroidery-bedroom-monochromatic-drawing-stone-general-contractors-ikea-youth-regarding-dream-birds-and-flowers-design-easy-drawings-bedrooms-at-living-room-colors-850x844.jpg',
          repeat_value: 'no-repeat',
          size_value: '105%',
          color_dark: '#030406',
          color_medium: '#00A41F',
          color_light: '#B9FCDE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'week',
          src_string: '../img/november_tiles/black-and-white-tips.jpg',
          repeat_value: 'no-repeat',
          size_value: '167%',
          color_dark: '#151515',
          color_medium: '#B5B5B5',
          color_light: '#FDFDFD',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'friday',
          src_string: '../img/november_tiles/pop-art.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#010280',
          color_medium: '#FF0082',
          color_light: '#FFFFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'saturday',
          src_string: '../img/november_tiles/sunlight-trees-landscape-white-black-monochrome-560628-wallhere.com.jpg',
          repeat_value: 'no-repeat',
          size_value: '163%',
          color_dark: '#1A1A1A',
          color_medium: '#454545',
          color_light: '#CFCFCF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'sunday',
          src_string: '../img/november_tiles/29417160_400719827007181_8946230798109900800_n.jpg',
          repeat_value: 'no-repeat',
          size_value: '110%',
          color_dark: '#131313',
          color_medium: '#A49A8E',
          color_light: '#FFFBE8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'holiday',
          src_string: '../img/november_tiles/daniel-spase-572387-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '153%',
          color_dark: '#202020',
          color_medium: '#55534F',
          color_light: '#CCC7C4',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Monochromatic',
          type: 'week',
          src_string: '../img/november_tiles/chuttersnap-210446-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#0D0C14',
          color_medium: '#E1E0DB',
          color_light: '#ECECEC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('november_tiles_id_seq', (SELECT MAX(id) FROM november_tiles));");
    });
};
