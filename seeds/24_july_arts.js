'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('july_arts').del()
    .then(function () {
      // Inserts seed entries
      return knex('july_arts').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-liberty-leading-the-people-1830.jpg',
          title: 'The Liberty Leading the People',
          artist: 'Eugene Delacroix',
          year: '1830',
          rule: {
            "monday": [ 2, 13, 24, 4 ],
            "tuesday": [ 1, 12, 23, 3 ],
            "wednesday": [ 31, 11, 22, 2 ],
            "thursday": [ 30, 10, 21, 1 ],
            "friday": [ 29, 9, 20, 31 ],
            "saturday": [ 28, 8, 19, 30 ],
            "sunday": [ 3, 14, 25, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/marie-antoinette-on-a-visit-to-medellin.jpg',
          title: 'Marie Antoinette on a Visit to Medellin',
          artist: 'Fernando Botero',
          year: '1990',
          rule: {
            "monday": [ 3, 14, 25, 5 ],
            "tuesday": [ 2, 13, 24, 4 ],
            "wednesday": [ 1, 12, 23, 3 ],
            "thursday": [ 31, 11, 22, 2 ],
            "friday": [ 30, 10, 21, 1 ],
            "saturday": [ 29, 9, 20, 31 ],
            "sunday": [ 28, 8, 19, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/louis-xvi-on-a-visit-to-medellin.jpg',
          title: 'Louis XVI on a Visit to Medellin',
          artist: 'Fernando Botero',
          year: '1990',
          rule: {
            "monday": [ 28, 8, 19, 30 ],
            "tuesday": [ 3, 14, 25, 5 ],
            "wednesday": [ 2, 13, 24, 4 ],
            "thursday": [ 1, 12, 23, 3 ],
            "friday": [ 31, 11, 22, 2 ],
            "saturday": [ 30, 10, 21, 1 ],
            "sunday": [ 29, 9, 20, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/bastille-1928.jpg',
          title: 'Bastille',
          artist: 'Konstantin Korovin',
          year: '1928',
          rule: {
            "monday": [ 29, 9, 20, 31 ],
            "tuesday": [ 28, 8, 19, 30 ],
            "wednesday": [ 3, 14, 25, 5 ],
            "thursday": [ 2, 13, 24, 4 ],
            "friday": [ 1, 12, 23, 3 ],
            "saturday": [ 31, 11, 22, 2 ],
            "sunday": [ 30, 10, 21, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/place-de-la-bastille-1.jpg',
          title: 'Place de la Bastille',
          artist: 'Edouard Cortes',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 30, 10, 21, 1 ],
            "tuesday": [ 29, 9, 20, 31 ],
            "wednesday": [ 28, 8, 19, 30 ],
            "thursday": [ 3, 14, 25, 5 ],
            "friday": [ 2, 13, 24, 4 ],
            "saturday": [ 1, 12, 23, 3 ],
            "sunday": [ 31, 11, 22, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/place-de-la-bastille.jpg',
          title: 'Place de la Bastille',
          artist: 'Gustave Loiseau',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 31, 11, 22, 2 ],
            "tuesday": [ 30, 10, 21, 1 ],
            "wednesday": [ 29, 9, 20, 31 ],
            "thursday": [ 28, 8, 19, 30 ],
            "friday": [ 3, 14, 25, 5 ],
            "saturday": [ 2, 13, 24, 4 ],
            "sunday": [ 1, 12, 23, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/at-la-bastille-portrait-of-jeanne-wenz-1889.jpg',
          title: 'At La Bastille (Portrait of Jeanne Wenz)',
          artist: 'Henri de Toulouse-Lautrec',
          year: '1889',
          rule: {
            "monday": [ 2, 13, 24, 4 ],
            "tuesday": [ 1, 12, 23, 3 ],
            "wednesday": [ 31, 11, 22, 2 ],
            "thursday": [ 30, 10, 21, 1 ],
            "friday": [ 29, 9, 20, 31 ],
            "saturday": [ 4, 15, 26, 6 ],
            "sunday": [ 3, 14, 25, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/place-de-la-bastille-3.jpg',
          title: 'Place de la Bastille',
          artist: 'Edouard Cortes',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 3, 14, 25, 5 ],
            "tuesday": [ 2, 13, 24, 4 ],
            "wednesday": [ 1, 12, 23, 3 ],
            "thursday": [ 31, 11, 22, 2 ],
            "friday": [ 30, 10, 21, 1 ],
            "saturday": [ 29, 9, 20, 31 ],
            "sunday": [ 4, 15, 26, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/bastille-flux-2007.jpg',
          title: 'Bastille Flux',
          artist: 'Gerard Fromanger',
          year: '2007',
          rule: {
            "monday": [ 4, 15, 26, 6 ],
            "tuesday": [ 3, 14, 25, 5 ],
            "wednesday": [ 2, 13, 24, 4 ],
            "thursday": [ 1, 12, 23, 3 ],
            "friday": [ 31, 11, 22, 2 ],
            "saturday": [ 30, 10, 21, 1 ],
            "sunday": [ 29, 9, 20, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/bastille-day-boulevard-rochechouart-paris.jpg',
          title: 'Bastille Day, Boulevard Rochechouart, Paris',
          artist: 'Childe Hassam',
          year: '1889',
          rule: {
            "monday": [ 29, 9, 20, 31 ],
            "tuesday": [ 4, 15, 26, 6 ],
            "wednesday": [ 3, 14, 25, 5 ],
            "thursday": [ 2, 13, 24, 4 ],
            "friday": [ 1, 12, 23, 3 ],
            "saturday": [ 31, 11, 22, 2 ],
            "sunday": [ 30, 10, 21, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/place-de-la-bastille-2.jpg',
          title: 'Place de la Bastille',
          artist: 'Edouard Cortes',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 30, 10, 21, 1 ],
            "tuesday": [ 29, 9, 20, 31 ],
            "wednesday": [ 4, 15, 26, 6 ],
            "thursday": [ 3, 14, 25, 5 ],
            "friday": [ 2, 13, 24, 4 ],
            "saturday": [ 1, 12, 23, 3 ],
            "sunday": [ 31, 11, 22, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/place-de-la-bastille-6.jpg',
          title: 'Place de la Bastille',
          artist: 'Edouard Cortes',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 31, 11, 22, 2 ],
            "tuesday": [ 30, 10, 21, 1 ],
            "wednesday": [ 29, 9, 20, 31 ],
            "thursday": [ 4, 15, 26, 6 ],
            "friday": [ 3, 14, 25, 5 ],
            "saturday": [ 2, 13, 24, 4 ],
            "sunday": [ 1, 12, 23, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/la-place-de-la-bastille-paris.jpg',
          title: 'La Place de la Bastille, Paris',
          artist: 'Edouard Cortes',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 1, 12, 23, 3 ],
            "tuesday": [ 31, 11, 22, 2 ],
            "wednesday": [ 30, 10, 21, 1 ],
            "thursday": [ 29, 9, 20, 31 ],
            "friday": [ 4, 15, 26, 6 ],
            "saturday": [ 3, 14, 25, 5 ],
            "sunday": [ 2, 13, 24, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/place-de-la-bastille-33.jpg',
          title: 'Place de la Bastille',
          artist: 'Edouard Cortes',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 3, 14, 25, 5 ],
            "tuesday": [ 2, 13, 24, 4 ],
            "wednesday": [ 1, 12, 23, 3 ],
            "thursday": [ 31, 11, 22, 2 ],
            "friday": [ 30, 10, 21, 1 ],
            "saturday": [ 5, 16, 27, 7 ],
            "sunday": [ 4, 15, 26, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/place-de-la-bastille-4.jpg',
          title: 'Place de la Bastille',
          artist: 'Edouard Cortes',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 4, 15, 26, 6 ],
            "tuesday": [ 3, 14, 25, 5 ],
            "wednesday": [ 2, 13, 24, 4 ],
            "thursday": [ 1, 12, 23, 3 ],
            "friday": [ 31, 11, 22, 2 ],
            "saturday": [ 30, 10, 21, 1 ],
            "sunday": [ 5, 16, 27, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/la-derniere-bastille.jpg',
          title: 'La Derniere Bastille',
          artist: 'Theophile Steinlen',
          year: 'XIX-XX cent.',
          rule: {
            "monday": [ 5, 16, 27, 7 ],
            "tuesday": [ 4, 15, 26, 6 ],
            "wednesday": [ 3, 14, 25, 5 ],
            "thursday": [ 2, 13, 24, 4 ],
            "friday": [ 1, 12, 23, 3 ],
            "saturday": [ 31, 11, 22, 2 ],
            "sunday": [ 30, 10, 21, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-dreams-in-the-witch-house-h-p-lovecraft-2016-1.jpg',
          title: 'the Dreams in the Witch House (H P Lovecraft )',
          artist: 'Kim Prisu',
          year: '2016',
          rule: {
            "monday": [ 30, 10, 21, 1 ],
            "tuesday": [ 5, 16, 27, 7 ],
            "wednesday": [ 4, 15, 26, 6 ],
            "thursday": [ 3, 14, 25, 5 ],
            "friday": [ 2, 13, 24, 4 ],
            "saturday": [ 1, 12, 23, 3 ],
            "sunday": [ 31, 11, 22, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/luthier-1997.jpg',
          title: 'Luthier',
          artist: 'Jerome Mesnager',
          year: '1997',
          rule: {
            "monday": [ 31, 11, 22, 2 ],
            "tuesday": [ 30, 10, 21, 1 ],
            "wednesday": [ 5, 16, 27, 7 ],
            "thursday": [ 4, 15, 26, 6 ],
            "friday": [ 3, 14, 25, 5 ],
            "saturday": [ 2, 13, 24, 4 ],
            "sunday": [ 1, 12, 23, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/untitled-2002-1.jpg',
          title: 'Untitled',
          artist: 'Moon Pil Shim',
          year: '2002',
          rule: {
            "monday": [ 1, 12, 23, 3 ],
            "tuesday": [ 31, 11, 22, 2 ],
            "wednesday": [ 30, 10, 21, 1 ],
            "thursday": [ 5, 16, 27, 7 ],
            "friday": [ 4, 15, 26, 6 ],
            "saturday": [ 3, 14, 25, 5 ],
            "sunday": [ 2, 13, 24, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/les-baronnes-130-x-162-2007.jpg',
          title: 'Les Baronnes',
          artist: 'Pietropoli Patrick',
          year: '2007',
          rule: {
            "monday": [ 2, 13, 24, 4 ],
            "tuesday": [ 1, 12, 23, 3 ],
            "wednesday": [ 31, 11, 22, 2 ],
            "thursday": [ 30, 10, 21, 1 ],
            "friday": [ 5, 16, 27, 7 ],
            "saturday": [ 4, 15, 26, 6 ],
            "sunday": [ 3, 14, 25, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/eurydice-n-19-1996.jpg',
          title: 'Eurydice n. 19',
          artist: 'Bracha L. Ettinger',
          year: '1996',
          rule: {
            "monday": [ 4, 15, 26, 6 ],
            "tuesday": [ 3, 14, 25, 5 ],
            "wednesday": [ 2, 13, 24, 4 ],
            "thursday": [ 1, 12, 23, 3 ],
            "friday": [ 31, 11, 22, 2 ],
            "saturday": [ 6, 17, 28, 8 ],
            "sunday": [ 5, 16, 27, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-oval-room-1967.jpg',
          title: 'The Oval Room',
          artist: 'Christian Boltanski',
          year: '1967',
          rule: {
            "monday": [ 5, 16, 27, 7 ],
            "tuesday": [ 4, 15, 26, 6 ],
            "wednesday": [ 3, 14, 25, 5 ],
            "thursday": [ 2, 13, 24, 4 ],
            "friday": [ 1, 12, 23, 3 ],
            "saturday": [ 31, 11, 22, 2 ],
            "sunday": [ 6, 17, 28, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/le-cri-1974.jpg',
          title: 'Le cri',
          artist: 'Ivan Tovar',
          year: '1974',
          rule: {
            "monday": [ 6, 17, 28, 8 ],
            "tuesday": [ 5, 16, 27, 7 ],
            "wednesday": [ 4, 15, 26, 6 ],
            "thursday": [ 3, 14, 25, 5 ],
            "friday": [ 2, 13, 24, 4 ],
            "saturday": [ 1, 12, 23, 3 ],
            "sunday": [ 31, 11, 22, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/ficelage-2.jpg',
          title: 'Ficelage',
          artist: 'Andre-Pierre Arnal',
          year: '?',
          rule: {
            "monday": [ 31, 11, 22, 2 ],
            "tuesday": [ 6, 17, 28, 8 ],
            "wednesday": [ 5, 16, 27, 7 ],
            "thursday": [ 4, 15, 26, 6 ],
            "friday": [ 3, 14, 25, 5 ],
            "saturday": [ 2, 13, 24, 4 ],
            "sunday": [ 1, 12, 23, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/peinture-acrylique-blanche-sur-tissu-ray-blanc-et-rouge-1970.jpg',
          title: 'Peinture acrylique blanche sur tissu rayé blanc et rouge',
          artist: 'Daniel Buren',
          year: '1970',
          rule: {
            "monday": [ 1, 12, 23, 3 ],
            "tuesday": [ 31, 11, 22, 2 ],
            "wednesday": [ 6, 17, 28, 8 ],
            "thursday": [ 5, 16, 27, 7 ],
            "friday": [ 4, 15, 26, 6 ],
            "saturday": [ 3, 14, 25, 5 ],
            "sunday": [ 2, 13, 24, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/imprints-of-a-no-50-paintbrush-repeated-at-regular-intervals-of-30-cm-1995.jpg',
          title: 'Imprints of a No. 50 Paintbrush Repeated at Regular Intervals of 30 cm.',
          artist: 'Niele Toroni',
          year: '1995',
          rule: {
            "monday": [ 2, 13, 24, 4 ],
            "tuesday": [ 1, 12, 23, 3 ],
            "wednesday": [ 31, 11, 22, 2 ],
            "thursday": [ 6, 17, 28, 8 ],
            "friday": [ 5, 16, 27, 7 ],
            "saturday": [ 4, 15, 26, 6 ],
            "sunday": [ 3, 14, 25, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/last-year-in-capri-exotic-title-1962.jpg',
          title: 'Last Year in Capri (exotic title)',
          artist: 'Martial Raysse',
          year: '1962',
          rule: {
            "monday": [ 3, 14, 25, 5 ],
            "tuesday": [ 2, 13, 24, 4 ],
            "wednesday": [ 1, 12, 23, 3 ],
            "thursday": [ 31, 11, 22, 2 ],
            "friday": [ 6, 17, 28, 8 ],
            "saturday": [ 5, 16, 27, 7 ],
            "sunday": [ 4, 15, 26, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/histoires-natturelles-1973.jpg',
          title: 'Histoires Natturelles',
          artist: 'Jorge Camacho',
          year: '1973',
          rule: {
            "monday": [ 5, 16, 27, 7 ],
            "tuesday": [ 4, 15, 26, 6 ],
            "wednesday": [ 3, 14, 25, 5 ],
            "thursday": [ 2, 13, 24, 4 ],
            "friday": [ 1, 12, 23, 3 ],
            "saturday": [ 7, 18, 29, 9 ],
            "sunday": [ 6, 17, 28, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/six-round-wooden-bars-1975.jpg',
          title: 'Six Round Wooden Bars',
          artist: 'Andre Cadere',
          year: '1975',
          rule: {
            "monday": [ 6, 17, 28, 8 ],
            "tuesday": [ 5, 16, 27, 7 ],
            "wednesday": [ 4, 15, 26, 6 ],
            "thursday": [ 3, 14, 25, 5 ],
            "friday": [ 2, 13, 24, 4 ],
            "saturday": [ 1, 12, 23, 3 ],
            "sunday": [ 7, 18, 29, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/1965-1-unknown-detail-of-detail-1.jpg',
          title: '1965 / 1 - ∞ / unknown detail of detail',
          artist: 'Roman Opalka',
          year: '1965',
          rule: {
            "monday": [ 7, 18, 29, 9 ],
            "tuesday": [ 6, 17, 28, 8 ],
            "wednesday": [ 5, 16, 27, 7 ],
            "thursday": [ 4, 15, 26, 6 ],
            "friday": [ 3, 14, 25, 5 ],
            "saturday": [ 2, 13, 24, 4 ],
            "sunday": [ 1, 12, 23, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/paris-review-1967.jpg',
          title: 'Paris Review',
          artist: 'Marisol Escobar',
          year: '1967',
          rule: {
            "monday": [ 1, 12, 23, 3 ],
            "tuesday": [ 7, 18, 29, 9 ],
            "wednesday": [ 6, 17, 28, 8 ],
            "thursday": [ 5, 16, 27, 7 ],
            "friday": [ 4, 15, 26, 6 ],
            "saturday": [ 3, 14, 25, 5 ],
            "sunday": [ 2, 13, 24, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/progression-1959.jpg',
          title: 'Progression',
          artist: 'Horacio Garcia-Rossi',
          year: '1959',
          rule: {
            "monday": [ 2, 13, 24, 4 ],
            "tuesday": [ 1, 12, 23, 3 ],
            "wednesday": [ 7, 18, 29, 9 ],
            "thursday": [ 6, 17, 28, 8 ],
            "friday": [ 5, 16, 27, 7 ],
            "saturday": [ 4, 15, 26, 6 ],
            "sunday": [ 3, 14, 25, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/don-quichotte-les-duegnes-1988.jpg',
          title: 'Don Quichotte: Les duegnes',
          artist: 'Bernard Buffet',
          year: '1988',
          rule: {
            "monday": [ 3, 14, 25, 5 ],
            "tuesday": [ 2, 13, 24, 4 ],
            "wednesday": [ 1, 12, 23, 3 ],
            "thursday": [ 7, 18, 29, 9 ],
            "friday": [ 6, 17, 28, 8 ],
            "saturday": [ 5, 16, 27, 7 ],
            "sunday": [ 4, 15, 26, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/unknown-title-1.jpg',
          title: 'unknown title',
          artist: 'Jacques Le Marechal',
          year: '?',
          rule: {
            "monday": [ 4, 15, 26, 6 ],
            "tuesday": [ 3, 14, 25, 5 ],
            "wednesday": [ 2, 13, 24, 4 ],
            "thursday": [ 1, 12, 23, 3 ],
            "friday": [ 7, 18, 29, 9 ],
            "saturday": [ 6, 17, 28, 8 ],
            "sunday": [ 5, 16, 27, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/dock-1991.jpg',
          title: 'Dock',
          artist: 'Louis Pons',
          year: '1991',
          rule: {
            "monday": [ 6, 17, 28, 8 ],
            "tuesday": [ 5, 16, 27, 7 ],
            "wednesday": [ 4, 15, 26, 6 ],
            "thursday": [ 3, 14, 25, 5 ],
            "friday": [ 2, 13, 24, 4 ],
            "saturday": [ 8, 19, 30, 10 ],
            "sunday": [ 7, 18, 29, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/cosmique-1972.jpg',
          title: 'Cosmique',
          artist: 'Jean Miotte',
          year: '1972',
          rule: {
            "monday": [ 7, 18, 29, 9 ],
            "tuesday": [ 6, 17, 28, 8 ],
            "wednesday": [ 5, 16, 27, 7 ],
            "thursday": [ 4, 15, 26, 6 ],
            "friday": [ 3, 14, 25, 5 ],
            "saturday": [ 2, 13, 24, 4 ],
            "sunday": [ 8, 19, 30, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/signals-series-2-1968.jpg',
          title: 'Signals (Series 2)',
          artist: 'Takis',
          year: '1968',
          rule: {
            "monday": [ 8, 19, 30, 10 ],
            "tuesday": [ 7, 18, 29, 9 ],
            "wednesday": [ 6, 17, 28, 8 ],
            "thursday": [ 5, 16, 27, 7 ],
            "friday": [ 4, 15, 26, 6 ],
            "saturday": [ 3, 14, 25, 5 ],
            "sunday": [ 2, 13, 24, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/deux-noirs-sur-raies-vertes-1981.jpg',
          title: 'Deux noirs sur Raies Vertes',
          artist: 'Francois Arnal',
          year: '1981',
          rule: {
            "monday": [ 2, 13, 24, 4 ],
            "tuesday": [ 8, 19, 30, 10 ],
            "wednesday": [ 7, 18, 29, 9 ],
            "thursday": [ 6, 17, 28, 8 ],
            "friday": [ 5, 16, 27, 7 ],
            "saturday": [ 4, 15, 26, 6 ],
            "sunday": [ 3, 14, 25, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/notes-par-deux-2003.jpg',
          title: 'Notes par Deux',
          artist: 'Genevieve Asse',
          year: '2003',
          rule: {
            "monday": [ 3, 14, 25, 5 ],
            "tuesday": [ 2, 13, 24, 4 ],
            "wednesday": [ 8, 19, 30, 10 ],
            "thursday": [ 7, 18, 29, 9 ],
            "friday": [ 6, 17, 28, 8 ],
            "saturday": [ 5, 16, 27, 7 ],
            "sunday": [ 4, 15, 26, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/etude-pour-hommage-a-claude-nicolas-ledoux-1959.jpg',
          title: 'Etude pour Hommage a Claude Nicolas Ledoux',
          artist: 'Jacques Busse',
          year: '1959',
          rule: {
            "monday": [ 4, 15, 26, 6 ],
            "tuesday": [ 3, 14, 25, 5 ],
            "wednesday": [ 2, 13, 24, 4 ],
            "thursday": [ 8, 19, 30, 10 ],
            "friday": [ 7, 18, 29, 9 ],
            "saturday": [ 6, 17, 28, 8 ],
            "sunday": [ 5, 16, 27, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/palais-royal-fountain-paris-1996.jpg',
          title: 'Palais Royal Fountain, Paris',
          artist: 'Pol Bury',
          year: '1996',
          rule: {
            "monday": [ 5, 16, 27, 7 ],
            "tuesday": [ 4, 15, 26, 6 ],
            "wednesday": [ 3, 14, 25, 5 ],
            "thursday": [ 2, 13, 24, 4 ],
            "friday": [ 8, 19, 30, 10 ],
            "saturday": [ 7, 18, 29, 9 ],
            "sunday": [ 6, 17, 28, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-necrophile-dedicated-to-sergeant-bertrand-1965.jpg',
          title: 'The Necrophile (dedicated to Sergeant Bertrand)',
          artist: 'Jean Benoit',
          year: '1965',
          rule: {
            "monday": [ 7, 17, 29, 9 ],
            "tuesday": [ 6, 17, 28, 8 ],
            "wednesday": [ 5, 16, 27, 7 ],
            "thursday": [ 4, 15, 26, 6 ],
            "friday": [ 3, 14, 25, 5 ],
            "saturday": [ 9, 20, 31, 11 ],
            "sunday": [ 8, 19, 30, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/apocalypse-du-printemps.jpg',
          title: 'Apocalypse du printemps',
          artist: 'Jean Messagier',
          year: '?',
          rule: {
            "monday": [ 8, 19, 30, 10 ],
            "tuesday": [ 7, 17, 29, 9 ],
            "wednesday": [ 6, 17, 28, 8 ],
            "thursday": [ 5, 16, 27, 7 ],
            "friday": [ 4, 15, 26, 6 ],
            "saturday": [ 3, 14, 25, 5 ],
            "sunday": [ 9, 20, 31, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/04-08-1993-1993.jpg',
          title: '04-08-1993',
          artist: 'Zao Wou-Ki',
          year: '1993',
          rule: {
            "monday": [ 9, 20, 31, 11 ],
            "tuesday": [ 8, 19, 30, 10 ],
            "wednesday": [ 7, 17, 29, 9 ],
            "thursday": [ 6, 17, 28, 8 ],
            "friday": [ 5, 16, 27, 7 ],
            "saturday": [ 4, 15, 26, 6 ],
            "sunday": [ 3, 14, 25, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/la-tour-eiffel-et-la-rue-de-la-manutention.jpg',
          title: 'La Tour Eiffel et la rue de la manutention',
          artist: 'Maurice Boitel',
          year: '?',
          rule: {
            "monday": [ 3, 14, 25, 5 ],
            "tuesday": [ 9, 20, 31, 11 ],
            "wednesday": [ 8, 19, 30, 10 ],
            "thursday": [ 7, 17, 29, 9 ],
            "friday": [ 6, 17, 28, 8 ],
            "saturday": [ 5, 16, 27, 7 ],
            "sunday": [  ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/les-voiles-1984.jpg',
          title: 'Les Voiles',
          artist: 'Carlos Nadal',
          year: '1984',
          rule: {
            "monday": [ 4, 15, 26, 6 ],
            "tuesday": [ 3, 14, 25, 5 ],
            "wednesday": [ 9, 20, 31, 11 ],
            "thursday": [ 8, 19, 30, 10 ],
            "friday": [ 7, 17, 29, 9 ],
            "saturday": [ 6, 17, 28, 8 ],
            "sunday": [ 5, 16, 27, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/defil-des-soldats-de-plomb-1970.jpg',
          title: 'Defilé des Soldats de Plomb',
          artist: 'Natalia Dumitresco',
          year: '1970',
          rule: {
            "monday": [ 5, 16, 27, 7 ],
            "tuesday": [ 4, 15, 26, 6 ],
            "wednesday": [ 3, 14, 25, 5 ],
            "thursday": [ 9, 20, 31, 11 ],
            "friday": [ 8, 19, 30, 10 ],
            "saturday": [ 7, 17, 29, 9 ],
            "sunday": [ 6, 17, 28, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/personnages-1964.jpg',
          title: 'Personnages',
          artist: 'Aurel Cojan',
          year: '1964',
          rule: {
            "monday": [ 6, 17, 28, 8 ],
            "tuesday": [ 5, 16, 27, 7 ],
            "wednesday": [ 4, 15, 26, 6 ],
            "thursday": [ 3, 14, 25, 5 ],
            "friday": [ 9, 20, 31, 11 ],
            "saturday": [ 8, 19, 30, 10 ],
            "sunday": [ 7, 17, 29, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/untitled-3.jpg',
          title: 'Untitled',
          artist: 'Wols',
          year: '?',
          rule: {
            "monday": [ 8, 18, 30, 10 ],
            "tuesday": [ 7, 18, 29, 9 ],
            "wednesday": [ 6, 17, 28, 8 ],
            "thursday": [ 5, 16, 27, 7 ],
            "friday": [ 4, 15, 26, 6 ],
            "saturday": [ 10, 21, 1, 12 ],
            "sunday": [ 9, 20, 31, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/fen-tre-toil-e-1962.jpg',
          title: 'Fenêtre étoilée',
          artist: 'Adrien Dax',
          year: '1962',
          rule: {
            "monday": [ 9, 20, 31, 11 ],
            "tuesday": [ 8, 18, 30, 10 ],
            "wednesday": [ 7, 18, 29, 9 ],
            "thursday": [ 6, 17, 28, 8 ],
            "friday": [ 5, 16, 27, 7 ],
            "saturday": [ 4, 15, 26, 6 ],
            "sunday": [ 10, 21, 1, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/echiquier-1971.jpg',
          title: 'Echiquier',
          artist: 'Aurelie Nemours',
          year: '1971',
          rule: {
            "monday": [ 10, 21, 1, 12 ],
            "tuesday": [ 9, 20, 31, 11 ],
            "wednesday": [ 8, 18, 30, 10 ],
            "thursday": [ 7, 18, 29, 9 ],
            "friday": [ 6, 17, 28, 8 ],
            "saturday": [ 5, 16, 27, 7 ],
            "sunday": [ 4, 15, 26, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/personnage-sur-fond-nocturne-toil.jpg',
          title: 'Personnage sur fond nocturne étoilé',
          artist: 'Gaston Chaissac',
          year: '?',
          rule: {
            "monday": [ 4, 15, 26, 6 ],
            "tuesday": [ 10, 21, 1, 12 ],
            "wednesday": [ 9, 20, 31, 11 ],
            "thursday": [ 8, 18, 30, 10 ],
            "friday": [ 7, 18, 29, 9 ],
            "saturday": [ 6, 17, 28, 8 ],
            "sunday": [ 5, 16, 27, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/terrasse-la-nuit-1986.jpg',
          title: 'Terrasse la nuit',
          artist: 'Jean Bertholle',
          year: '1986',
          rule: {
            "monday": [ 5, 16, 27, 7 ],
            "tuesday": [ 4, 15, 26, 6 ],
            "wednesday": [ 10, 21, 1, 12 ],
            "thursday": [ 9, 20, 31, 11 ],
            "friday": [ 8, 18, 30, 10 ],
            "saturday": [ 7, 18, 29, 9 ],
            "sunday": [ 6, 17, 28, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/rue-mouffetard-paris-1954.jpg',
          title: 'Rue Mouffetard, Paris',
          artist: 'Henri Cartier-Bresson',
          year: '1954',
          rule: {
            "monday": [ 6, 17, 28, 8 ],
            "tuesday": [ 5, 16, 27, 7 ],
            "wednesday": [ 4, 15, 26, 6 ],
            "thursday": [ 10, 21, 1, 12 ],
            "friday": [ 9, 20, 31, 11 ],
            "saturday": [ 8, 18, 30, 10 ],
            "sunday": [ 7, 18, 29, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/eau.jpg',
          title: 'Eau',
          artist: 'Dora Maar',
          year: '?',
          rule: {
            "monday": [ 7, 18, 29, 9 ],
            "tuesday": [ 6, 17, 28, 8 ],
            "wednesday": [ 5, 16, 27, 7 ],
            "thursday": [ 4, 15, 26, 6 ],
            "friday": [ 10, 21, 1, 12 ],
            "saturday": [ 9, 20, 31, 11 ],
            "sunday": [ 8, 18, 30, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/along-the-way-1969.jpg',
          title: 'Along the Way..',
          artist: 'Georges Hugnet',
          year: '1969',
          rule: {
            "monday": [ 9, 19, 31, 11 ],
            "tuesday": [ 8, 19, 30, 10 ],
            "wednesday": [ 7, 18, 29, 9 ],
            "thursday": [ 6, 17, 28, 8 ],
            "friday": [ 5, 16, 27, 7 ],
            "saturday": [ 11, 22, 2, 13 ],
            "sunday": [ 10, 21, 1, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/untitled(1).jpg',
          title: 'Untitled',
          artist: 'Pierre Tal-Coat',
          year: '?',
          rule: {
            "monday": [ 10, 21, 1, 12 ],
            "tuesday": [ 9, 19, 31, 11 ],
            "wednesday": [ 8, 19, 30, 10 ],
            "thursday": [ 7, 18, 29, 9 ],
            "friday": [ 6, 17, 28, 8 ],
            "saturday": [ 5, 16, 27, 7 ],
            "sunday": [ 11, 22, 2, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/lutte-as-ciel-1937.jpg',
          title: 'Lutte as Ciel',
          artist: 'John Ferren',
          year: '1937',
          rule: {
            "monday": [ 11, 22, 2, 13 ],
            "tuesday": [ 10, 21, 1, 12 ],
            "wednesday": [ 9, 19, 31, 11 ],
            "thursday": [ 8, 19, 30, 10 ],
            "friday": [ 7, 18, 29, 9 ],
            "saturday": [ 6, 17, 28, 8 ],
            "sunday": [ 5, 16, 27, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/loxos.jpg',
          title: 'Loxos',
          artist: 'Maurice Esteve',
          year: '?',
          rule: {
            "monday": [ 5, 16, 27, 7 ],
            "tuesday": [ 11, 22, 2, 13 ],
            "wednesday": [ 10, 21, 1, 12 ],
            "thursday": [ 9, 19, 31, 11 ],
            "friday": [ 8, 19, 30, 10 ],
            "saturday": [ 7, 18, 29, 9 ],
            "sunday": [ 6, 17, 28, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/beetles-1951.jpg',
          title: 'Beetles',
          artist: 'Germaine Richier',
          year: '1951',
          rule: {
            "monday": [ 6, 17, 28, 8 ],
            "tuesday": [ 5, 16, 27, 7 ],
            "wednesday": [ 11, 22, 2, 13 ],
            "thursday": [ 10, 21, 1, 12 ],
            "friday": [ 9, 19, 31, 11 ],
            "saturday": [ 8, 19, 30, 10 ],
            "sunday": [ 7, 18, 29, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/five-nudes-1950.jpg',
          title: 'Five Nudes',
          artist: 'Sanyu',
          year: '1950',
          rule: {
            "monday": [ 7, 18, 29, 9 ],
            "tuesday": [ 6, 17, 28, 8 ],
            "wednesday": [ 5, 16, 27, 7 ],
            "thursday": [ 11, 22, 2, 13 ],
            "friday": [ 10, 21, 1, 12 ],
            "saturday": [ 9, 19, 31, 11 ],
            "sunday": [ 8, 19, 30, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/hymne-1961.jpg',
          title: 'Hymne',
          artist: 'Michel Seuphor',
          year: '1961',
          rule: {
            "monday": [ 8, 19, 30, 10 ],
            "tuesday": [ 7, 18, 29, 9 ],
            "wednesday": [ 6, 17, 28, 8 ],
            "thursday": [ 5, 16, 27, 7 ],
            "friday": [ 11, 22, 2, 13 ],
            "saturday": [ 10, 21, 1, 12 ],
            "sunday": [ 9, 19, 31, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-kiss-1935.jpg',
          title: 'The Kiss',
          artist: 'Brassai',
          year: '1935',
          rule: {
            "monday": [ 10, 20, 1, 12 ],
            "tuesday": [ 9, 20, 31, 11 ],
            "wednesday": [ 8, 19, 29, 10 ],
            "thursday": [ 7, 18, 29, 9 ],
            "friday": [ 6, 17, 28, 8 ],
            "saturday": [ 12, 23, 3, 14 ],
            "sunday": [ 11, 22, 2, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/t-te-de-profil.jpg',
          title: 'Tête de profil',
          artist: 'Jean Fautrier',
          year: '?',
          rule: {
            "monday": [ 11, 22, 2, 13 ],
            "tuesday": [ 10, 20, 1, 12 ],
            "wednesday": [ 9, 20, 31, 11 ],
            "thursday": [ 8, 19, 29, 10 ],
            "friday": [ 7, 18, 29, 9 ],
            "saturday": [ 6, 17, 28, 8 ],
            "sunday": [ 12, 23, 3, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/couple-in-the-night.jpg',
          title: 'Couple in the night',
          artist: 'Andre Masson',
          year: '1958',
          rule: {
            "monday": [ 12, 23, 3, 14 ],
            "tuesday": [ 11, 22, 2, 13 ],
            "wednesday": [ 10, 20, 1, 12 ],
            "thursday": [ 9, 20, 31, 11 ],
            "friday": [ 8, 19, 29, 10 ],
            "saturday": [ 7, 18, 29, 9 ],
            "sunday": [ 6, 17, 28, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/panneaux-de-signalisation-de-chemin-de-fer-1918.jpg',
          title: 'Panneaux de signalisation de chemin de fer',
          artist: 'Jean Hugo',
          year: '1918',
          rule: {
            "monday": [ 6, 17, 28, 8 ],
            "tuesday": [ 12, 23, 3, 14 ],
            "wednesday": [ 11, 22, 2, 13 ],
            "thursday": [ 10, 20, 1, 12 ],
            "friday": [ 9, 20, 31, 11 ],
            "saturday": [ 8, 19, 29, 10 ],
            "sunday": [ 7, 18, 29, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/adoration.jpg',
          title: 'Adoration',
          artist: 'Erte',
          year: '?',
          rule: {
            "monday": [ 7, 18, 29, 9 ],
            "tuesday": [ 6, 17, 28, 8 ],
            "wednesday": [ 12, 23, 3, 14 ],
            "thursday": [ 11, 22, 2, 13 ],
            "friday": [ 10, 20, 1, 12 ],
            "saturday": [ 9, 20, 31, 11 ],
            "sunday": [ 8, 19, 29, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-guitar-player.jpg',
          title: 'The Guitar Player',
          artist: 'Ossip Zadkine',
          year: '1920',
          rule: {
            "monday": [ 8, 19, 29, 10 ],
            "tuesday": [ 7, 18, 29, 9 ],
            "wednesday": [ 6, 17, 28, 8 ],
            "thursday": [ 12, 23, 3, 14 ],
            "friday": [ 11, 22, 2, 13 ],
            "saturday": [ 10, 20, 1, 12 ],
            "sunday": [ 9, 20, 31, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/silence-ici-j-ordonne-nathalie-paley-en-sphinx-1932.jpg',
          title: 'Silence! Ici j’ordonne… (Nathalie Paley en sphinx)',
          artist: 'Jean Cocteau',
          year: '1932',
          rule: {
            "monday": [ 9, 20, 31, 11 ],
            "tuesday": [ 8, 19, 29, 10 ],
            "wednesday": [ 7, 18, 29, 9 ],
            "thursday": [ 6, 17, 28, 8 ],
            "friday": [ 12, 23, 3, 14 ],
            "saturday": [ 11, 22, 2, 13 ],
            "sunday": [ 10, 20, 1, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/still-life-1920.jpg',
          title: 'Still Life',
          artist: 'Le Corbusier',
          year: '1920',
          rule: {
            "monday": [ 11, 21, 2, 13 ],
            "tuesday": [ 10, 21, 1, 12 ],
            "wednesday": [ 9, 20, 30, 11 ],
            "thursday": [ 8, 19, 30, 10 ],
            "friday": [ 7, 18, 29, 9 ],
            "saturday": [ 13, 24, 4, 15 ],
            "sunday": [ 12, 23, 3, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/liberation-1944.jpg',
          title: 'Liberation',
          artist: 'Jules Lefranc',
          year: '1944',
          rule: {
            "monday": [ 12, 23, 3, 14 ],
            "tuesday": [ 11, 21, 2, 13 ],
            "wednesday": [ 10, 21, 1, 12 ],
            "thursday": [ 9, 20, 30, 11 ],
            "friday": [ 8, 19, 30, 10 ],
            "saturday": [ 7, 18, 29, 9 ],
            "sunday": [ 13, 24, 4, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/abstract-composition.jpg',
          title: 'Abstract Composition',
          artist: 'Jean Arp',
          year: '1915',
          rule: {
            "monday": [ 13, 24, 4, 15 ],
            "tuesday": [ 12, 23, 3, 14 ],
            "wednesday": [ 11, 21, 2, 13 ],
            "thursday": [ 10, 21, 1, 12 ],
            "friday": [ 9, 20, 30, 11 ],
            "saturday": [ 8, 19, 30, 10 ],
            "sunday": [ 7, 18, 29, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/chatting-1928.jpg',
          title: 'Chatting',
          artist: 'Lajos Tihanyi',
          year: '1928',
          rule: {
            "monday": [ 7, 18, 29, 9 ],
            "tuesday": [ 13, 24, 4, 15 ],
            "wednesday": [ 12, 23, 3, 14 ],
            "thursday": [ 11, 21, 2, 13 ],
            "friday": [ 10, 21, 1, 12 ],
            "saturday": [ 9, 20, 30, 11 ],
            "sunday": [ 8, 19, 30, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/eiffel-tower-1.jpg',
          title: 'Eiffel Tower',
          artist: 'Robert Delaunay',
          year: '1911',
          rule: {
            "monday": [ 8, 19, 30, 10 ],
            "tuesday": [ 7, 18, 29, 9 ],
            "wednesday": [ 13, 24, 4, 15 ],
            "thursday": [ 12, 23, 3, 14 ],
            "friday": [ 11, 21, 2, 13 ],
            "saturday": [ 10, 21, 1, 12 ],
            "sunday": [ 9, 20, 30, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/man-with-pipe-1919.jpg',
          title: 'Man with Pipe',
          artist: 'Henri Laurens',
          year: '1919',
          rule: {
            "monday": [ 9, 20, 30, 11 ],
            "tuesday": [ 8, 19, 30, 10 ],
            "wednesday": [ 7, 18, 29, 9 ],
            "thursday": [ 13, 24, 4, 15 ],
            "friday": [ 12, 23, 3, 14 ],
            "saturday": [ 11, 21, 2, 13 ],
            "sunday": [ 10, 21, 1, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/nude-with-a-newspaper-1921.jpg',
          title: 'Nude with a Newspaper',
          artist: 'Andre Dunoyer de Segonzac',
          year: '1921',
          rule: {
            "monday": [ 10, 21, 1, 12 ],
            "tuesday": [ 9, 20, 30, 11 ],
            "wednesday": [ 8, 19, 30, 10 ],
            "thursday": [ 7, 18, 29, 9 ],
            "friday": [ 13, 24, 4, 15 ],
            "saturday": [ 12, 23, 3, 14 ],
            "sunday": [ 11, 21, 2, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/nu-nude-1906.jpg',
          title: 'Nu (Nude)',
          artist: 'Jean Metzinger',
          year: '1906',
          rule: {
            "monday": [ 12, 22, 3, 14 ],
            "tuesday": [ 11, 22, 2, 13 ],
            "wednesday": [ 10, 21, 31, 12 ],
            "thursday": [ 9, 20, 31, 11 ],
            "friday": [ 8, 19, 30, 10 ],
            "saturday": [ 14, 25, 5, 16 ],
            "sunday": [ 13, 24, 4, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/figure-double-with-marine-background-1942.jpg',
          title: 'Figure double with marine background',
          artist: 'Georges Braque',
          year: '1942',
          rule: {
            "monday": [ 13, 24, 4, 15 ],
            "tuesday": [ 12, 22, 3, 14 ],
            "wednesday": [ 11, 22, 2, 13 ],
            "thursday": [ 10, 21, 31, 12 ],
            "friday": [ 9, 20, 31, 11 ],
            "saturday": [ 8, 19, 30, 10 ],
            "sunday": [ 14, 25, 5, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/la-danse-study-1920.jpg',
          title: 'La Danse (Study)',
          artist: 'Jean Dupas',
          year: '1920',
          rule: {
            "monday": [ 14, 25, 5, 16 ],
            "tuesday": [ 13, 24, 4, 15 ],
            "wednesday": [ 12, 22, 3, 14 ],
            "thursday": [ 11, 22, 2, 13 ],
            "friday": [ 10, 21, 31, 12 ],
            "saturday": [ 9, 20, 31, 11 ],
            "sunday": [ 8, 19, 30, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/woman-with-a-cat-1921.jpg',
          title: 'Woman with a Cat',
          artist: 'Fernand Leger',
          year: '1921',
          rule: {
            "monday": [ 8, 19, 30, 10 ],
            "tuesday": [ 14, 25, 5, 16 ],
            "wednesday": [ 13, 24, 4, 15 ],
            "thursday": [ 12, 22, 3, 14 ],
            "friday": [ 11, 22, 2, 13 ],
            "saturday": [ 10, 21, 31, 12 ],
            "sunday": [ 9, 20, 31, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/untitled.jpg',
          title: 'Untitled',
          artist: 'Leopold Survage',
          year: '?',
          rule: {
            "monday": [ 9, 20, 31, 11 ],
            "tuesday": [ 8, 19, 30, 10 ],
            "wednesday": [ 14, 25, 5, 16 ],
            "thursday": [ 13, 24, 4, 15 ],
            "friday": [ 12, 22, 3, 14 ],
            "saturday": [ 11, 22, 2, 13 ],
            "sunday": [ 10, 21, 31, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-window-overlooking-the-eiffel-tower-1920.jpg',
          title: 'The Window overlooking the Eiffel Tower',
          artist: 'Louis Marcoussis',
          year: '1920',
          rule: {
            "monday": [ 10, 21, 31, 12 ],
            "tuesday": [ 9, 20, 31, 11 ],
            "wednesday": [ 8, 19, 30, 10 ],
            "thursday": [ 14, 25, 5, 16 ],
            "friday": [ 13, 24, 4, 15 ],
            "saturday": [ 12, 22, 3, 14 ],
            "sunday": [ 11, 22, 2, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/visage-criant-a-la-grande-main-1941.jpg',
          title: 'Visage criant a la grande main',
          artist: 'Julio Gonzalez',
          year: '1941',
          rule: {
            "monday": [ 11, 22, 2, 13 ],
            "tuesday": [ 10, 21, 31, 12 ],
            "wednesday": [ 9, 20, 31, 11 ],
            "thursday": [ 8, 19, 30, 10 ],
            "friday": [ 14, 25, 5, 16 ],
            "saturday": [ 13, 24, 4, 15 ],
            "sunday": [ 12, 22, 3, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-kiss-1912.jpg',
          title: 'The Kiss',
          artist: 'Constantin Brancusi',
          year: '1912',
          rule: {
            "monday": [ 13, 23, 4, 15 ],
            "tuesday": [ 12, 23, 3, 14 ],
            "wednesday": [ 11, 22, 2, 13 ],
            "thursday": [ 10, 21, 1, 12 ],
            "friday": [ 9, 20, 31, 11 ],
            "saturday": [ 15, 26, 6, 17 ],
            "sunday": [ 14, 25, 5, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/41inbvimavl-sy450.jpg',
          title: 'Bitter Campari',
          artist: 'Leonetto Cappiello',
          year: '?',
          rule: {
            "monday": [ 14, 25, 5, 16 ],
            "tuesday": [ 13, 23, 4, 15 ],
            "wednesday": [ 12, 23, 3, 14 ],
            "thursday": [ 11, 22, 2, 13 ],
            "friday": [ 10, 21, 1, 12 ],
            "saturday": [ 9, 20, 31, 11 ],
            "sunday": [ 15, 26, 6, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/dada-portrait-of-berenice-abbott-1926.jpg',
          title: 'Dada Portrait of Berenice Abbott',
          artist: 'Elsa von Freytag-Loringhoven',
          year: '1926',
          rule: {
            "monday": [ 15, 26, 6, 17 ],
            "tuesday": [ 14, 25, 5, 16 ],
            "wednesday": [ 13, 23, 4, 15 ],
            "thursday": [ 12, 23, 3, 14 ],
            "friday": [ 11, 22, 2, 13 ],
            "saturday": [ 10, 21, 1, 12 ],
            "sunday": [ 9, 20, 31, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/triste-os-from-cirque-de-l-etoile-filante-1934.jpg',
          title: 'Triste Os from Cirque de l\'Etoile Filante',
          artist: 'Georges Rouault',
          year: '1934',
          rule: {
            "monday": [ 9, 20, 31, 11 ],
            "tuesday": [ 15, 26, 6, 17 ],
            "wednesday": [ 14, 25, 5, 16 ],
            "thursday": [ 13, 23, 4, 15 ],
            "friday": [ 12, 23, 3, 14 ],
            "saturday": [ 11, 22, 2, 13 ],
            "sunday": [ 10, 21, 1, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/nude-study-1908.jpg',
          title: 'Nude, Study',
          artist: 'Henri Matisse',
          year: '1908',
          rule: {
            "monday": [ 10, 21, 1, 12 ],
            "tuesday": [ 9, 20, 31, 11 ],
            "wednesday": [ 15, 26, 6, 17 ],
            "thursday": [ 14, 25, 5, 16 ],
            "friday": [ 13, 23, 4, 15 ],
            "saturday": [ 12, 23, 3, 14 ],
            "sunday": [ 11, 22, 2, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-reader.jpg',
          title: 'The Reader',
          artist: 'Edouard Vuillard',
          year: '1890',
          rule: {
            "monday": [ 11, 22, 2, 13 ],
            "tuesday": [ 10, 21, 1, 12 ],
            "wednesday": [ 9, 20, 31, 11 ],
            "thursday": [ 15, 26, 6, 17 ],
            "friday": [ 14, 25, 5, 16 ],
            "saturday": [ 13, 23, 4, 15 ],
            "sunday": [ 12, 23, 3, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/bathers-with-red-cow-1887.jpg',
          title: 'Bathers with Red Cow',
          artist: 'Emile Bernard',
          year: '1887',
          rule: {
            "monday": [ 12, 23, 3, 14 ],
            "tuesday": [ 11, 22, 2, 13 ],
            "wednesday": [ 10, 21, 1, 12 ],
            "thursday": [ 9, 20, 31, 11 ],
            "friday": [ 15, 26, 6, 17 ],
            "saturday": [ 14, 25, 5, 16 ],
            "sunday": [ 13, 23, 4, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/nude-woman-with-drapery-1919.jpg',
          title: 'Nude Woman with Drapery',
          artist: 'Suzanne Valadon',
          year: '1919',
          rule: {
            "monday": [ 14, 24, 5, 16 ],
            "tuesday": [ 13, 24, 4, 15 ],
            "wednesday": [ 12, 23, 3, 14 ],
            "thursday": [ 11, 22, 2, 13 ],
            "friday": [ 10, 21, 1, 12 ],
            "saturday": [ 16, 27, 7, 18 ],
            "sunday": [ 15, 26, 6, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/le-bouquet-de-feuilles.jpg',
          title: 'Le Bouquet de Feuilles',
          artist: 'Seraphine Louis',
          year: '?',
          rule: {
            "monday": [ 15, 26, 6, 17 ],
            "tuesday": [ 14, 24, 5, 16 ],
            "wednesday": [ 13, 24, 4, 15 ],
            "thursday": [ 12, 23, 3, 14 ],
            "friday": [ 11, 22, 2, 13 ],
            "saturday": [ 10, 21, 1, 12 ],
            "sunday": [ 16, 27, 7, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/femmes-de-plougastel-au-pardon-de-sainte-anne-la-palud-1903.jpg',
          title: 'Femmes de Plougastel au Pardon de Sainte-Anne-La-Palud',
          artist: 'Charles Cottet',
          year: '1903',
          rule: {
            "monday": [ 16, 27, 7, 18 ],
            "tuesday": [ 15, 26, 6, 17 ],
            "wednesday": [ 14, 24, 5, 16 ],
            "thursday": [ 13, 24, 4, 15 ],
            "friday": [ 12, 23, 3, 14 ],
            "saturday": [ 11, 22, 2, 13 ],
            "sunday": [ 10, 21, 1, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-transatlantic-leaving-port-1905.jpg',
          title: 'The Transatlantic leaving Port',
          artist: 'Maxime Maufra',
          year: '1905',
          rule: {
            "monday": [ 10, 21, 1, 12 ],
            "tuesday": [ 16, 27, 7, 18 ],
            "wednesday": [ 15, 26, 6, 17 ],
            "thursday": [ 14, 24, 5, 16 ],
            "friday": [ 13, 24, 4, 15 ],
            "saturday": [ 12, 23, 3, 14 ],
            "sunday": [ 11, 22, 2, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/gaudeamus-1890.jpg',
          title: 'Gaudeamus',
          artist: 'Theophile Steinlen',
          year: '1890',
          rule: {
            "monday": [ 11, 22, 2, 13 ],
            "tuesday": [ 10, 21, 1, 12 ],
            "wednesday": [ 16, 27, 7, 18 ],
            "thursday": [ 15, 26, 6, 17 ],
            "friday": [ 14, 24, 5, 16 ],
            "saturday": [ 13, 24, 4, 15 ],
            "sunday": [ 12, 23, 3, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/female-nude-1893.jpg',
          title: 'Female Nude',
          artist: 'Charles Maurin',
          year: '1893',
          rule: {
            "monday": [ 12, 23, 3, 14 ],
            "tuesday": [ 11, 22, 2, 13 ],
            "wednesday": [ 10, 21, 1, 12 ],
            "thursday": [ 16, 27, 7, 18 ],
            "friday": [ 15, 26, 6, 17 ],
            "saturday": [ 14, 24, 5, 16 ],
            "sunday": [ 13, 24, 4, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-guardian-of-turkeys-1881.jpg',
          title: 'The Guardian of Turkeys',
          artist: 'Charles Angrand',
          year: '1881',
          rule: {
            "monday": [ 13, 24, 4, 15 ],
            "tuesday": [ 12, 23, 3, 14 ],
            "wednesday": [ 11, 22, 2, 13 ],
            "thursday": [ 10, 21, 1, 12 ],
            "friday": [ 16, 27, 7, 18 ],
            "saturday": [ 15, 26, 6, 17 ],
            "sunday": [ 14, 24, 5, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-front-port.jpg',
          title: 'The Front Port',
          artist: 'Eva Gonzales',
          year: '?',
          rule: {
            "monday": [ 15, 26, 6, 17 ],
            "tuesday": [ 14, 25, 5, 16 ],
            "wednesday": [ 13, 24, 4, 15 ],
            "thursday": [ 12, 23, 3, 14 ],
            "friday": [ 11, 22, 2, 13 ],
            "saturday": [ 17, 28, 8, 19 ],
            "sunday": [ 16, 27, 7, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/regatta-at-argenteuil-1893.jpg',
          title: 'Regatta at Argenteuil',
          artist: 'Gustave Caillebotte',
          year: '1893',
          rule: {
            "monday": [ 16, 27, 7, 18 ],
            "tuesday": [ 15, 26, 6, 17 ],
            "wednesday": [ 14, 25, 5, 16 ],
            "thursday": [ 13, 24, 4, 15 ],
            "friday": [ 12, 23, 3, 14 ],
            "saturday": [ 11, 22, 2, 13 ],
            "sunday": [ 17, 28, 8, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/study-for-the-figure-of-the-source-at-the-paris-comic-opera-tude-pour-la-figure-de-la-source-l(1).jpg',
          title: 'Study for the figure of "Spring" at l\'Opéra-Comique, Paris',
          artist: 'Luc-Olivier Merson',
          year: '1920',
          rule: {
            "monday": [ 17, 28, 8, 19 ],
            "tuesday": [ 16, 27, 7, 18 ],
            "wednesday": [ 15, 26, 6, 17 ],
            "thursday": [ 14, 25, 5, 16 ],
            "friday": [ 13, 24, 4, 15 ],
            "saturday": [ 12, 23, 3, 14 ],
            "sunday": [ 11, 22, 2, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/vue-de-paris-1885.jpg',
          title: 'Vue de Paris',
          artist: 'Albert Dubois-Pillet',
          year: '1885',
          rule: {
            "monday": [ 11, 22, 2, 13 ],
            "tuesday": [ 17, 28, 8, 19 ],
            "wednesday": [ 16, 27, 7, 18 ],
            "thursday": [ 15, 26, 6, 17 ],
            "friday": [ 14, 25, 5, 16 ],
            "saturday": [ 13, 24, 4, 15 ],
            "sunday": [ 12, 23, 3, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/centennial-of-independence-1892.jpg',
          title: 'Centennial of Independence',
          artist: 'Henri Rousseau',
          year: '1892',
          rule: {
            "monday": [ 12, 23, 3, 14 ],
            "tuesday": [ 11, 22, 2, 13 ],
            "wednesday": [ 17, 28, 8, 19 ],
            "thursday": [ 16, 27, 7, 18 ],
            "friday": [ 15, 26, 6, 17 ],
            "saturday": [ 14, 25, 5, 16 ],
            "sunday": [ 13, 24, 4, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/flag-decorated-street-1906.jpg',
          title: 'Flag Decorated Street',
          artist: 'Pierre-Auguste Renoir',
          year: '1906',
          rule: {
            "monday": [ 13, 24, 4, 15 ],
            "tuesday": [ 12, 23, 3, 14 ],
            "wednesday": [ 11, 22, 2, 13 ],
            "thursday": [ 17, 28, 8, 19 ],
            "friday": [ 16, 27, 7, 18 ],
            "saturday": [ 15, 26, 6, 17 ],
            "sunday": [ 14, 25, 5, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/woman-with-an-umbrella-1880.jpg',
          title: 'Woman with an Umbrella',
          artist: 'Marie Bracquemond',
          year: '1880',
          rule: {
            "monday": [ 14, 25, 5, 16 ],
            "tuesday": [ 13, 24, 4, 15 ],
            "wednesday": [ 12, 23, 3, 14 ],
            "thursday": [ 11, 22, 2, 13 ],
            "friday": [ 17, 28, 8, 19 ],
            "saturday": [ 16, 27, 7, 18 ],
            "sunday": [ 15, 26, 6, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-duet-1897.jpg',
          title: 'The Duet',
          artist: 'Jehan Georges Vibert',
          year: '1897',
          rule: {
            "monday": [ 16, 27, 7, 18 ],
            "tuesday": [ 15, 26, 6, 17 ],
            "wednesday": [ 14, 25, 5, 16 ],
            "thursday": [ 13, 24, 4, 15 ],
            "friday": [ 12, 23, 3, 14 ],
            "saturday": [ 18, 29, 9, 20 ],
            "sunday": [ 17, 28, 8, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-feast-the-banquet-of-nebuchadnezzar.jpg',
          title: 'The Feast. The Banquet of Nebuchadnezzar',
          artist: 'Paul Cezanne',
          year: 'c.1870',
          rule: {
            "monday": [ 17, 28, 8, 19 ],
            "tuesday": [ 16, 27, 7, 18 ],
            "wednesday": [ 15, 26, 6, 17 ],
            "thursday": [ 14, 25, 5, 16 ],
            "friday": [ 13, 24, 4, 15 ],
            "saturday": [ 12, 23, 3, 14 ],
            "sunday": [ 18, 29, 9, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-ball.jpg',
          title: 'The Ball',
          artist: 'James Tissot',
          year: '1880',
          rule: {
            "monday": [ 18, 29, 9, 20 ],
            "tuesday": [ 17, 28, 8, 19 ],
            "wednesday": [ 16, 27, 7, 18 ],
            "thursday": [ 15, 26, 6, 17 ],
            "friday": [ 14, 25, 5, 16 ],
            "saturday": [ 13, 24, 4, 15 ],
            "sunday": [ 12, 23, 3, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/undine.jpg',
          title: 'Undine',
          artist: 'Henri Fantin-Latour',
          year: 'c.1896',
          rule: {
            "monday": [ 12, 23, 3, 14 ],
            "tuesday": [ 18, 29, 9, 20 ],
            "wednesday": [ 17, 28, 8, 19 ],
            "thursday": [ 16, 27, 7, 18 ],
            "friday": [ 15, 26, 6, 17 ],
            "saturday": [ 14, 25, 5, 16 ],
            "sunday": [ 13, 24, 4, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/paolo-and-francesca-da-rimini.jpg',
          title: 'Paolo and Francesca da Rimini',
          artist: 'Gustave Dore',
          year: '?',
          rule: {
            "monday": [ 13, 24, 4, 15 ],
            "tuesday": [ 12, 23, 3, 14 ],
            "wednesday": [ 18, 29, 9, 20 ],
            "thursday": [ 17, 28, 8, 19 ],
            "friday": [ 16, 27, 7, 18 ],
            "saturday": [ 15, 26, 6, 17 ],
            "sunday": [ 14, 25, 5, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/innenansicht-der-b-rse-handelsbeurs-von-antwerpen.jpg',
          title: 'Innenansicht der Börse (Handelsbeurs) von Antwerpen',
          artist: 'Maxime Lalanne',
          year: '?',
          rule: {
            "monday": [ 14, 25, 5, 16 ],
            "tuesday": [ 13, 24, 4, 15 ],
            "wednesday": [ 12, 23, 3, 14 ],
            "thursday": [ 18, 29, 9, 20 ],
            "friday": [ 17, 28, 8, 19 ],
            "saturday": [ 16, 27, 7, 18 ],
            "sunday": [ 15, 26, 6, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-heart-s-awakening-1892.jpg',
          title: 'he Heart\'s Awakening',
          artist: 'William-Adolphe Bouguereau',
          year: '1892',
          rule: {
            "monday": [ 15, 26, 6, 17 ],
            "tuesday": [ 14, 25, 5, 16 ],
            "wednesday": [ 13, 24, 4, 15 ],
            "thursday": [ 12, 23, 3, 14 ],
            "friday": [ 18, 29, 9, 20 ],
            "saturday": [ 17, 28, 8, 19 ],
            "sunday": [ 16, 27, 7, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/princess-pauline-metternich-on-the-beach.jpg',
          title: 'Princess Pauline Metternich on the Beach',
          artist: 'Eugene Boudin',
          year: 'c.1865',
          rule: {
            "monday": [ 17, 28, 8, 19 ],
            "tuesday": [ 16, 27, 7, 18 ],
            "wednesday": [ 15, 26, 6, 17 ],
            "thursday": [ 14, 25, 5, 16 ],
            "friday": [ 13, 24, 4, 15 ],
            "saturday": [ 19, 30, 10, 21 ],
            "sunday": [ 18, 29, 9, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/samson-and-delilah.jpg',
          title: 'Samson and Delilah',
          artist: 'Alexandre Cabanel',
          year: '1878',
          rule: {
            "monday": [ 18, 29, 9, 20 ],
            "tuesday": [ 17, 28, 8, 19 ],
            "wednesday": [ 16, 27, 7, 18 ],
            "thursday": [ 15, 26, 6, 17 ],
            "friday": [ 14, 25, 5, 16 ],
            "saturday": [ 13, 24, 4, 15 ],
            "sunday": [ 19, 30, 10, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/charles-meryon-archway-pont-n-tre-dame-1853.jpg',
          title: 'Archway, Pont Nôtre-dame, Paris',
          artist: 'Charles Meryon',
          year: '1853',
          rule: {
            "monday": [ 19, 30, 10, 21 ],
            "tuesday": [ 18, 29, 9, 20 ],
            "wednesday": [ 17, 28, 8, 19 ],
            "thursday": [ 16, 27, 7, 18 ],
            "friday": [ 15, 26, 6, 17 ],
            "saturday": [ 14, 25, 5, 16 ],
            "sunday": [ 13, 24, 4, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/apple-trees-in-blossom-1862.jpg',
          title: 'Apple Trees in Blossom',
          artist: 'Charles-Francois Daubigny',
          year: '1860 - 1862',
          rule: {
            "monday": [ 13, 24, 4, 15 ],
            "tuesday": [ 19, 30, 10, 21 ],
            "wednesday": [ 18, 29, 9, 20 ],
            "thursday": [ 17, 28, 8, 19 ],
            "friday": [ 16, 27, 7, 18 ],
            "saturday": [ 15, 26, 6, 17 ],
            "sunday": [ 14, 25, 5, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-knitting-shepherdess-1857.jpg',
          title: 'The Knitting Shepherdess',
          artist: 'Jean-Francois Millet',
          year: 'c.1856 - 1857',
          rule: {
            "monday": [ 14, 25, 5, 16 ],
            "tuesday": [ 13, 24, 4, 15 ],
            "wednesday": [ 19, 30, 10, 21 ],
            "thursday": [ 18, 29, 9, 20 ],
            "friday": [ 17, 28, 8, 19 ],
            "saturday": [ 16, 27, 7, 18 ],
            "sunday": [ 15, 26, 6, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/market-in-the-normandy.jpg',
          title: 'Market in the Normandy',
          artist: 'Theodore Rousseau',
          year: 'c.1845 - c.1848',
          rule: {
            "monday": [ 15, 26, 6, 17 ],
            "tuesday": [ 14, 25, 5, 16 ],
            "wednesday": [ 13, 24, 4, 15 ],
            "thursday": [ 19, 30, 10, 21 ],
            "friday": [ 18, 29, 9, 20 ],
            "saturday": [ 17, 28, 8, 19 ],
            "sunday": [ 16, 27, 7, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/two-nymphs-pursued-by-satyrs.jpg',
          title: 'Two Nymphs Pursued by Satyrs',
          artist: 'Honore Daumier',
          year: '1850',
          rule: {
            "monday": [ 16, 27, 7, 18 ],
            "tuesday": [ 15, 26, 6, 17 ],
            "wednesday": [ 14, 25, 5, 16 ],
            "thursday": [ 13, 24, 4, 15 ],
            "friday": [ 19, 30, 10, 21 ],
            "saturday": [ 18, 29, 9, 20 ],
            "sunday": [ 17, 28, 8, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/dandy-in-paris.jpg',
          title: 'Dandy in Paris',
          artist: 'Paul Gavarni',
          year: '?',
          rule: {
            "monday": [ 18, 29, 9, 20 ],
            "tuesday": [ 17, 28, 8, 19 ],
            "wednesday": [ 16, 27, 7, 18 ],
            "thursday": [ 15, 26, 6, 17 ],
            "friday": [ 14, 25, 5, 16 ],
            "saturday": [ 20, 31, 11, 22 ],
            "sunday": [ 19, 30, 10, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/attila-the-hun(1).jpg',
          title: 'Attila the Hun',
          artist: 'Eugene Delacroix',
          year: '1847',
          rule: {
            "monday": [ 19, 30, 10, 21 ],
            "tuesday": [ 18, 29, 9, 20 ],
            "wednesday": [ 17, 28, 8, 19 ],
            "thursday": [ 16, 27, 7, 18 ],
            "friday": [ 15, 26, 6, 17 ],
            "saturday": [ 14, 25, 5, 16 ],
            "sunday": [ 20, 31, 11, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-vision-dante-and-beatrice-1846.jpg',
          title: 'The Vision, Dante and Beatrice',
          artist: 'Ary Scheffer',
          year: '1846',
          rule: {
            "monday": [ 20, 31, 11, 22 ],
            "tuesday": [ 19, 30, 10, 21 ],
            "wednesday": [ 18, 29, 9, 20 ],
            "thursday": [ 17, 28, 8, 19 ],
            "friday": [ 16, 27, 7, 18 ],
            "saturday": [ 15, 26, 6, 17 ],
            "sunday": [ 14, 25, 5, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/lucinda-carpenter-tweeter-and-abigail-forrester-1841.jpg',
          title: 'Lucinda Carpenter, Tweeter and Abigail Forrester',
          artist: 'Auguste Edouart',
          year: '1841',
          rule: {
            "monday": [ 14, 25, 5, 16 ],
            "tuesday": [ 20, 31, 11, 22 ],
            "wednesday": [ 19, 30, 10, 21 ],
            "thursday": [ 18, 29, 9, 20 ],
            "friday": [ 17, 28, 8, 19 ],
            "saturday": [ 16, 27, 7, 18 ],
            "sunday": [ 15, 26, 6, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/diana-and-endymion-1822.jpg',
          title: 'Diana and Endymion',
          artist: 'Jérôme-Martin Langlois',
          year: '1822',
          rule: {
            "monday": [ 15, 26, 6, 17 ],
            "tuesday": [ 14, 25, 5, 16 ],
            "wednesday": [ 20, 31, 11, 22 ],
            "thursday": [ 19, 30, 10, 21 ],
            "friday": [ 18, 29, 9, 20 ],
            "saturday": [ 17, 28, 8, 19 ],
            "sunday": [ 16, 27, 7, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/sappho-at-leucate-1801.jpg',
          title: 'Sappho at Leucate',
          artist: 'Antoine-Jean Gros',
          year: '1801',
          rule: {
            "monday": [ 16, 27, 7, 18 ],
            "tuesday": [ 15, 26, 6, 17 ],
            "wednesday": [ 14, 25, 5, 16 ],
            "thursday": [ 20, 31, 11, 22 ],
            "friday": [ 19, 30, 10, 21 ],
            "saturday": [ 18, 29, 9, 20 ],
            "sunday": [ 17, 28, 8, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/bathing-venus.jpg',
          title: 'Bathing Venus',
          artist: 'Pierre-Paul Prud\'hon',
          year: '?',
          rule: {
            "monday": [ 17, 28, 8, 19 ],
            "tuesday": [ 16, 27, 7, 18 ],
            "wednesday": [ 15, 26, 6, 17 ],
            "thursday": [ 14, 25, 5, 16 ],
            "friday": [ 20, 31, 11, 22 ],
            "saturday": [ 19, 30, 10, 21 ],
            "sunday": [ 18, 29, 9, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-attributes-of-music-1770.jpg',
          title: 'The Attributes of Music',
          artist: 'Anne Vallayer-Coster',
          year: '1770',
          rule: {
            "monday": [ 19, 30, 10, 21 ],
            "tuesday": [ 18, 29, 9, 20 ],
            "wednesday": [ 17, 28, 8, 19 ],
            "thursday": [ 16, 27, 7, 8 ],
            "friday": [ 15, 26, 6, 17 ],
            "saturday": [ 21, 1, 12, 23 ],
            "sunday": [ 20, 31, 11, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/young-woman-playing-with-a-dog-1772.jpg',
          title: 'Young Woman Playing with a Dog',
          artist: 'Jean-Honore Fragonard',
          year: '1765 - 1772',
          rule: {
            "monday": [ 20, 31, 11, 22 ],
            "tuesday": [ 19, 30, 10, 21 ],
            "wednesday": [ 18, 29, 9, 20 ],
            "thursday": [ 17, 28, 8, 19 ],
            "friday": [ 16, 27, 7, 8 ],
            "saturday": [ 15, 26, 6, 17 ],
            "sunday": [ 21, 1, 12, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/self-portrait-with-the-bull-s-eye-1737.jpg',
          title: 'Self-Portrait with the bull\'s-eye',
          artist: 'Maurice Quentin de La Tour',
          year: '1737',
          rule: {
            "monday": [ 21, 1, 12, 23 ],
            "tuesday": [ 20, 31, 11, 22 ],
            "wednesday": [ 19, 30, 10, 21 ],
            "thursday": [ 18, 29, 9, 20 ],
            "friday": [ 17, 28, 8, 19 ],
            "saturday": [ 16, 27, 7, 8 ],
            "sunday": [ 15, 26, 6, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/girl-with-racket-and-shuttlecock.jpg',
          title: 'Girl with Racket and Shuttlecock',
          artist: 'Jean-Baptiste-Simeon Chardin',
          year: 'c.1740',
          rule: {
            "monday": [ 15, 26, 6, 17 ],
            "tuesday": [ 21, 1, 12, 23 ],
            "wednesday": [ 20, 31, 11, 22 ],
            "thursday": [ 19, 30, 10, 21 ],
            "friday": [ 18, 29, 9, 20 ],
            "saturday": [ 17, 28, 8, 19 ],
            "sunday": [ 16, 27, 7, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 130,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/cupid-disarmed.jpg',
          title: 'Cupid Disarmed',
          artist: 'Antoine Watteau',
          year: 'c.1715',
          rule: {
            "monday": [ 16, 27, 7, 8 ],
            "tuesday": [ 15, 26, 6, 17 ],
            "wednesday": [ 21, 1, 12, 23 ],
            "thursday": [ 20, 31, 11, 22 ],
            "friday": [ 19, 30, 10, 21 ],
            "saturday": [ 18, 29, 9, 20 ],
            "sunday": [ 17, 28, 8, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 131,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/caligula-depositing-the-ashes-of-his-mother-and-brother-in-the-tomb-of-his-ancestors.jpg',
          title: 'Caligula Depositing the Ashes of his Mother and Brother in the Tomb of his Ancestors',
          artist: 'Eustache Le Sueur',
          year: '1647',
          rule: {
            "monday": [ 17, 28, 8, 19 ],
            "tuesday": [ 16, 27, 7, 8 ],
            "wednesday": [ 15, 26, 6, 17 ],
            "thursday": [ 21, 1, 12, 23 ],
            "friday": [ 20, 31, 11, 22 ],
            "saturday": [ 19, 30, 10, 21 ],
            "sunday": [ 18, 29, 9, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 132,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/marine-with-the-trojans-burning-their-boats-1642.jpg',
          title: 'Marine with the Trojans Burning their Boats',
          artist: 'Claude Lorrain',
          year: '1642',
          rule: {
            "monday": [ 18, 29, 9, 20 ],
            "tuesday": [ 17, 28, 8, 19 ],
            "wednesday": [ 16, 27, 7, 8 ],
            "thursday": [ 15, 26, 6, 17 ],
            "friday": [ 21, 1, 12, 23 ],
            "saturday": [ 20, 31, 11, 22 ],
            "sunday": [ 19, 30, 10, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 133,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/bacchanal-before-a-statue-of-pan-1633.jpg',
          title: 'Bacchanal before a Statue of Pan',
          artist: 'Nicolas Poussin',
          year: '1631 - 1633',
          rule: {
            "monday": [ 20, 31, 11, 22 ],
            "tuesday": [ 19, 30, 10, 21 ],
            "wednesday": [ 18, 29, 9, 20 ],
            "thursday": [ 17, 28, 8, 9 ],
            "friday": [ 16, 27, 7, 18 ],
            "saturday": [ 22, 2, 13, 24 ],
            "sunday": [ 21, 1, 12, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 134,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/portrait-of-a-lady-in-a-hat-1630.jpg',
          title: 'Portrait of a Lady in a Hat',
          artist: 'Claude Deruet',
          year: '1630',
          rule: {
            "monday": [ 21, 1, 12, 23 ],
            "tuesday": [ 20, 31, 11, 22 ],
            "wednesday": [ 19, 30, 10, 21 ],
            "thursday": [ 18, 29, 9, 20 ],
            "friday": [ 17, 28, 8, 9 ],
            "saturday": [ 16, 27, 7, 18 ],
            "sunday": [ 22, 2, 13, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 135,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-emperor-charles-iv-and-the-dignitaries-of-paris-1460.jpg',
          title: 'The Emperor Charles IV and the dignitaries of Paris',
          artist: 'Jean Fouquet',
          year: '1455 - 1460',
          rule: {
            "monday": [ 22, 2, 13, 24 ],
            "tuesday": [ 21, 1, 12, 23 ],
            "wednesday": [ 20, 31, 11, 22 ],
            "thursday": [ 19, 30, 10, 21 ],
            "friday": [ 18, 29, 9, 20 ],
            "saturday": [ 17, 28, 8, 9 ],
            "sunday": [ 16, 27, 7, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 136,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/sculptcure-par-jean-luc-blanc-2007.jpg',
          title: 'Sculptcure (par Jean-Luc Blanc)',
          artist: 'Michel Blazy',
          year: '2007',
          rule: {
            "monday": [ 16, 27, 7, 18 ],
            "tuesday": [ 22, 2, 13, 24 ],
            "wednesday": [ 21, 1, 12, 23 ],
            "thursday": [ 20, 31, 11, 22 ],
            "friday": [ 19, 30, 10, 21 ],
            "saturday": [ 18, 29, 9, 20 ],
            "sunday": [ 17, 28, 8, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 137,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/cantona-s-rolls-royce.jpg',
          title: 'Cantona\'s Rolls Royce',
          artist: 'JonOne',
          year: '?',
          rule: {
            "monday": [ 17, 28, 8, 9 ],
            "tuesday": [ 16, 27, 7, 18 ],
            "wednesday": [ 22, 2, 13, 24 ],
            "thursday": [ 21, 1, 12, 23 ],
            "friday": [ 20, 31, 11, 22 ],
            "saturday": [ 19, 30, 10, 21 ],
            "sunday": [ 18, 29, 9, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 138,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/pont-du-ciel-100by100cm-2016.jpg',
          title: 'Pont Du Ciel',
          artist: 'Li CHEVALIER',
          year: '2016',
          rule: {
            "monday": [ 18, 29, 9, 20 ],
            "tuesday": [ 17, 28, 8, 9 ],
            "wednesday": [ 16, 27, 7, 18 ],
            "thursday": [ 22, 2, 13, 24 ],
            "friday": [ 21, 1, 12, 23 ],
            "saturday": [ 20, 31, 11, 22 ],
            "sunday": [ 19, 30, 10, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 139,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/le-cirque-1984-175x140.jpg',
          title: 'Circuse',
          artist: 'Eric Massholder',
          year: '1984',
          rule: {
            "monday": [ 19, 30, 10, 21 ],
            "tuesday": [ 18, 29, 9, 20 ],
            "wednesday": [ 17, 28, 8, 9 ],
            "thursday": [ 16, 27, 7, 18 ],
            "friday": [ 22, 2, 13, 24 ],
            "saturday": [ 21, 1, 12, 23 ],
            "sunday": [ 20, 31, 11, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 140,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/l-abus-de-plaisir-2013.jpg',
          title: 'L’abus de plaisir',
          artist: 'Miss.Tic',
          year: '2013',
          rule: {
            "monday": [ 21, 1, 12, 23 ],
            "tuesday": [ 20, 31, 11, 22 ],
            "wednesday": [ 19, 30, 10, 21 ],
            "thursday": [ 18, 29, 9, 10 ],
            "friday": [ 17, 28, 8, 19 ],
            "saturday": [ 23, 3, 14, 24 ],
            "sunday": [ 22, 2, 13, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 141,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/ecoute-la-rue-detail.jpg',
          title: 'Ecoute la Rue (detail)',
          artist: 'Epsylon Point',
          year: '?',
          rule: {
            "monday": [ 22, 2, 13, 24 ],
            "tuesday": [ 21, 1, 12, 23 ],
            "wednesday": [ 20, 31, 11, 22 ],
            "thursday": [ 19, 30, 10, 21 ],
            "friday": [ 18, 29, 9, 10 ],
            "saturday": [ 17, 28, 8, 19 ],
            "sunday": [ 23, 3, 14, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 142,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/papier-d-coup-1967-3.jpg',
          title: 'Papier découpé',
          artist: 'Louis Cane',
          year: '1967',
          rule: {
            "monday": [ 23, 3, 14, 24 ],
            "tuesday": [ 22, 2, 13, 24 ],
            "wednesday": [ 21, 1, 12, 23 ],
            "thursday": [ 20, 31, 11, 22 ],
            "friday": [ 19, 30, 10, 21 ],
            "saturday": [ 18, 29, 9, 10 ],
            "sunday": [ 17, 28, 8, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 143,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/tiru-fragments-1984.jpg',
          title: 'Tiru-Fragments',
          artist: 'Francois Rouan',
          year: '1984',
          rule: {
            "monday": [ 17, 28, 8, 19 ],
            "tuesday": [ 23, 3, 14, 24 ],
            "wednesday": [ 22, 2, 13, 24 ],
            "thursday": [ 21, 1, 12, 23 ],
            "friday": [ 20, 31, 11, 22 ],
            "saturday": [ 19, 30, 10, 21 ],
            "sunday": [ 18, 29, 9, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 144,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/d-finition-m-thode-506-la-photographie-n-est-que-l-ombre-de-la-peinture-2010.jpg',
          title: 'dé-finition/méthode #506: la photographie n’est que l’ombre de la peinture',
          artist: 'Claude Rutault',
          year: '2010',
          rule: {
            "monday": [ 18, 29, 9, 10 ],
            "tuesday": [ 17, 28, 8, 19 ],
            "wednesday": [ 23, 3, 14, 24 ],
            "thursday": [ 22, 2, 13, 24 ],
            "friday": [ 21, 1, 12, 23 ],
            "saturday": [ 20, 31, 11, 22 ],
            "sunday": [ 19, 30, 10, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 145,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/container-z-ro-1988-1.jpg',
          title: 'Container Zéro',
          artist: 'Jean-Pierre Raynaud',
          year: '1988',
          rule: {
            "monday": [ 19, 30, 10, 21 ],
            "tuesday": [ 18, 29, 9, 10 ],
            "wednesday": [ 17, 28, 8, 19 ],
            "thursday": [ 23, 3, 14, 24 ],
            "friday": [ 22, 2, 13, 24 ],
            "saturday": [ 21, 1, 12, 23 ],
            "sunday": [ 20, 31, 11, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 146,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/escale-1964.jpg',
          title: 'Escale',
          artist: 'Herve Telemaque',
          year: '1964',
          rule: {
            "monday": [ 20, 31, 11, 22 ],
            "tuesday": [ 19, 30, 10, 21 ],
            "wednesday": [ 18, 29, 9, 10 ],
            "thursday": [ 17, 28, 8, 19 ],
            "friday": [ 23, 3, 14, 24 ],
            "saturday": [ 22, 2, 13, 24 ],
            "sunday": [ 21, 1, 12, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 147,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/untitled-no-56-1996.jpg',
          title: 'Untitled No. 56',
          artist: 'Claude Viallat',
          year: '1996',
          rule: {
            "monday": [ 22, 2, 13, 24 ],
            "tuesday": [ 21, 1, 12, 23 ],
            "wednesday": [ 20, 31, 10, 22 ],
            "thursday": [ 19, 30, 10, 11 ],
            "friday": [ 18, 29, 9, 20 ],
            "saturday": [ 24, 4, 15, 25 ],
            "sunday": [ 23, 3, 14, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 148,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/n-6608-enseigne-peinte-les-sciences-exactes-1977.jpg',
          title: 'N° 6608: Enseigne peinte - Les sciences exactes',
          artist: 'Jean-Claude Silbermann',
          year: '1977',
          rule: {
            "monday": [ 23, 3, 14, 25 ],
            "tuesday": [ 22, 2, 13, 24 ],
            "wednesday": [ 21, 1, 12, 23 ],
            "thursday": [ 20, 31, 10, 22 ],
            "friday": [ 19, 30, 10, 11 ],
            "saturday": [ 18, 29, 9, 20 ],
            "sunday": [ 24, 4, 15, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 149,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/fiborythm-2009.jpg',
          title: 'Fiborythm',
          artist: 'Charles Bezie',
          year: '2009',
          rule: {
            "monday": [ 24, 4, 15, 25 ],
            "tuesday": [ 23, 3, 14, 25 ],
            "wednesday": [ 22, 2, 13, 24 ],
            "thursday": [ 21, 1, 12, 23 ],
            "friday": [ 20, 31, 10, 22 ],
            "saturday": [ 19, 30, 10, 11 ],
            "sunday": [ 18, 29, 9, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 150,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/18th-montreux-jazz-festival-poster-1984.jpg',
          title: '18th Montreux jazz festival (Poster)',
          artist: 'Niki de Sainte Phalle',
          year: '1984',
          rule: {
            "monday": [ 18, 29, 9, 20 ],
            "tuesday": [ 24, 4, 15, 25 ],
            "wednesday": [ 23, 3, 14, 25 ],
            "thursday": [ 22, 2, 13, 24 ],
            "friday": [ 21, 1, 12, 23 ],
            "saturday": [ 20, 31, 10, 22 ],
            "sunday": [ 19, 30, 10, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 151,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/independence-war-1948.jpg',
          title: 'Independence war',
          artist: 'Avigdor Arikha',
          year: '1948',
          rule: {
            "monday": [ 19, 30, 10, 11 ],
            "tuesday": [ 18, 29, 9, 20 ],
            "wednesday": [ 24, 4, 15, 25 ],
            "thursday": [ 23, 3, 14, 25 ],
            "friday": [ 22, 2, 13, 24 ],
            "saturday": [ 21, 1, 12, 23 ],
            "sunday": [ 20, 31, 10, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 152,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/valdes-peninsula-argentina-2001.jpg',
          title: 'Valdes Peninsula, Argentina',
          artist: 'Elliott Erwitt',
          year: '2001',
          rule: {
            "monday": [ 20, 31, 10, 22 ],
            "tuesday": [ 19, 30, 10, 11 ],
            "wednesday": [ 18, 29, 9, 20 ],
            "thursday": [ 24, 4, 15, 25 ],
            "friday": [ 23, 3, 14, 25 ],
            "saturday": [ 22, 2, 13, 24 ],
            "sunday": [ 21, 1, 12, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 153,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/untitled-cosmogony-1960.jpg',
          title: 'Untitled Cosmogony',
          artist: 'Yves Klein',
          year: '1960',
          rule: {
            "monday": [ 21, 1, 12, 23 ],
            "tuesday": [ 20, 31, 10, 22 ],
            "wednesday": [ 19, 30, 10, 11 ],
            "thursday": [ 18, 29, 9, 20 ],
            "friday": [ 24, 4, 15, 25 ],
            "saturday": [ 23, 3, 14, 25 ],
            "sunday": [ 22, 2, 13, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 154,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/avant-le-jour-1986.jpg',
          title: 'Avant le Jour',
          artist: 'James Bishop',
          year: '1986',
          rule: {
            "monday": [ 23, 3, 14, 25 ],
            "tuesday": [ 22, 2, 13, 24 ],
            "wednesday": [ 21, 1, 11, 13 ],
            "thursday": [ 20, 31, 11, 12 ],
            "friday": [ 19, 30, 10, 21 ],
            "saturday": [ 25, 5, 16, 26 ],
            "sunday": [ 24, 4, 15, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 155,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/reflections-in-water-deformed-by-the-spectator-1964.jpg',
          title: 'Reflections in water deformed by the spectator',
          artist: 'Francois Morellet',
          year: '1964',
          rule: {
            "monday": [ 24, 4, 15, 26 ],
            "tuesday": [ 23, 3, 14, 25 ],
            "wednesday": [ 22, 2, 13, 24 ],
            "thursday": [ 21, 1, 11, 13 ],
            "friday": [ 20, 31, 11, 12 ],
            "saturday": [ 19, 30, 10, 21 ],
            "sunday": [ 25, 5, 16, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 156,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/eclipse-chromatique-no-1-1973.jpg',
          title: 'Eclipse chromatique No. 1',
          artist: 'Martha Boto',
          year: '1973',
          rule: {
            "monday": [ 25, 5, 16, 26 ],
            "tuesday": [ 24, 4, 15, 26 ],
            "wednesday": [ 23, 3, 14, 25 ],
            "thursday": [ 22, 2, 13, 24 ],
            "friday": [ 21, 1, 11, 13 ],
            "saturday": [ 20, 31, 11, 12 ],
            "sunday": [ 19, 30, 10, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 157,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/la-t-l-vision-dechiquet-e-ou-l-anti-cr-tinisation-jagged-television-or-anti-cretinization-1989.jpg',
          title: 'La télévision dechiquetée ou l’anti-crétinisation (Jagged Television or Anti-Cretinization)',
          artist: 'Isidore Isou',
          year: '1989',
          rule: {
            "monday": [ 19, 30, 10, 21 ],
            "tuesday": [ 25, 5, 16, 26 ],
            "wednesday": [ 24, 4, 15, 26 ],
            "thursday": [ 23, 3, 14, 25 ],
            "friday": [ 22, 2, 13, 24 ],
            "saturday": [ 21, 1, 11, 13 ],
            "sunday": [ 20, 31, 11, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 158,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/adieu-vieux-monde-1991.jpg',
          title: 'Adieu vieux monde',
          artist: 'Mimi Parent',
          year: '1991',
          rule: {
            "monday": [ 20, 31, 11, 12 ],
            "tuesday": [ 19, 30, 10, 21 ],
            "wednesday": [ 25, 5, 16, 26 ],
            "thursday": [ 24, 4, 15, 26 ],
            "friday": [ 23, 3, 14, 25 ],
            "saturday": [ 22, 2, 13, 24 ],
            "sunday": [ 21, 1, 11, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 159,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/chromographie-x6-graphisme-chromatique-sur-carr-s-1975.jpg',
          title: 'Chromographie x6: Graphisme chromatique sur carrés',
          artist: 'Gregorio Vardanega',
          year: '1975',
          rule: {
            "monday": [ 21, 1, 11, 13 ],
            "tuesday": [ 20, 31, 11, 12 ],
            "wednesday": [ 19, 30, 10, 21 ],
            "thursday": [ 25, 5, 16, 26 ],
            "friday": [ 24, 4, 15, 26 ],
            "saturday": [ 23, 3, 14, 25 ],
            "sunday": [ 22, 2, 13, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 160,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/hant-e-par-une-aurore-fragile-1947.jpg',
          title: 'Hantée par une aurore fragile',
          artist: 'Jaroslav Serpan',
          year: '1947',
          rule: {
            "monday": [ 22, 2, 13, 24 ],
            "tuesday": [ 21, 1, 11, 13 ],
            "wednesday": [ 20, 31, 11, 12 ],
            "thursday": [ 19, 30, 10, 21 ],
            "friday": [ 25, 5, 16, 26 ],
            "saturday": [ 24, 4, 15, 26 ],
            "sunday": [ 23, 3, 14, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 161,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/vall-e-de-gorbio.jpg',
          title: 'Vallée de Gorbio',
          artist: 'S. H. Raza',
          year: '?',
          rule: {
            "monday": [ 24, 4, 15, 26 ],
            "tuesday": [ 23, 3, 14, 25 ],
            "wednesday": [ 22, 2, 12, 14 ],
            "thursday": [ 21, 1, 12, 13 ],
            "friday": [ 20, 31, 11, 22 ],
            "saturday": [ 26, 6, 17, 27 ],
            "sunday": [ 25, 5, 16, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 162,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/clair-d-obscurite-1988.jpg',
          title: 'Éclair d\'obscurite',
          artist: 'Chu Teh-Chun',
          year: '1988',
          rule: {
            "monday": [ 25, 5, 16, 27 ],
            "tuesday": [ 24, 4, 15, 26 ],
            "wednesday": [ 23, 3, 14, 25 ],
            "thursday": [ 22, 2, 12, 14 ],
            "friday": [ 21, 1, 12, 13 ],
            "saturday": [ 20, 31, 11, 22 ],
            "sunday": [ 26, 6, 17, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 163,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/ossiach-1996.jpg',
          title: 'Ossiach',
          artist: 'Olivier Debre',
          year: '1996',
          rule: {
            "monday": [ 26, 6, 17, 27 ],
            "tuesday": [ 25, 5, 16, 27 ],
            "wednesday": [ 24, 4, 15, 26 ],
            "thursday": [ 23, 3, 14, 25 ],
            "friday": [ 22, 2, 12, 14 ],
            "saturday": [ 21, 1, 12, 13 ],
            "sunday": [ 20, 31, 11, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 164,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/peinture-11-juillet-1987-1987.jpg',
          title: 'Peinture 11 Juillet 1987',
          artist: 'Pierre Soulages',
          year: '1987',
          rule: {
            "monday": [ 20, 31, 11, 22 ],
            "tuesday": [ 26, 6, 17, 27 ],
            "wednesday": [ 25, 5, 16, 27 ],
            "thursday": [ 24, 4, 15, 26 ],
            "friday": [ 23, 3, 14, 25 ],
            "saturday": [ 22, 2, 12, 14 ],
            "sunday": [ 21, 1, 12, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 165,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/criture-10-2-63-1963.jpg',
          title: 'Écriture 10.2.63',
          artist: 'Jean Degottex',
          year: '1963',
          rule: {
            "monday": [ 21, 1, 12, 13 ],
            "tuesday": [ 20, 31, 11, 22 ],
            "wednesday": [ 26, 6, 17, 27 ],
            "thursday": [ 25, 5, 16, 27 ],
            "friday": [ 24, 4, 15, 26 ],
            "saturday": [ 23, 3, 14, 25 ],
            "sunday": [ 22, 2, 12, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 166,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/untitled-1946.jpg',
          title: 'Untitled',
          artist: 'Mario Prassinos',
          year: '1946',
          rule: {
            "monday": [ 22, 2, 12, 14 ],
            "tuesday": [ 21, 1, 12, 13 ],
            "wednesday": [ 20, 31, 11, 22 ],
            "thursday": [ 26, 6, 17, 27 ],
            "friday": [ 25, 5, 16, 27 ],
            "saturday": [ 24, 4, 15, 26 ],
            "sunday": [ 23, 3, 14, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 167,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/creatures-1979.jpg',
          title: 'Creatures',
          artist: 'Jules Perahim',
          year: '1979',
          rule: {
            "monday": [ 23, 3, 14, 25 ],
            "tuesday": [ 22, 2, 12, 14 ],
            "wednesday": [ 21, 1, 12, 13 ],
            "thursday": [ 20, 31, 11, 22 ],
            "friday": [ 26, 6, 17, 27 ],
            "saturday": [ 25, 5, 16, 27 ],
            "sunday": [ 24, 4, 15, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 168,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/collage(1).jpg',
          title: 'Collage',
          artist: 'Gherasim Luca',
          year: '?',
          rule: {
            "monday": [ 25, 5, 16, 27 ],
            "tuesday": [ 24, 4, 15, 26 ],
            "wednesday": [ 23, 3, 13, 15 ],
            "thursday": [ 22, 2, 13, 14 ],
            "friday": [ 21, 1, 12, 23 ],
            "saturday": [ 27, 7, 18, 28 ],
            "sunday": [ 26, 6, 17, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 169,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/untitled-1.jpg',
          title: 'Untitled',
          artist: 'Jean-Michel Atlan',
          year: '?',
          rule: {
            "monday": [ 26, 6, 17, 28 ],
            "tuesday": [ 25, 5, 16, 27 ],
            "wednesday": [ 24, 4, 15, 26 ],
            "thursday": [ 23, 3, 13, 15 ],
            "friday": [ 22, 2, 13, 14 ],
            "saturday": [ 21, 1, 12, 23 ],
            "sunday": [ 27, 7, 18, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 170,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/le-printemps-1937.jpg',
          title: 'Le printemps',
          artist: 'Francis Gruber',
          year: '1937',
          rule: {
            "monday": [ 27, 7, 18, 28 ],
            "tuesday": [ 26, 6, 17, 28 ],
            "wednesday": [ 25, 5, 16, 27 ],
            "thursday": [ 24, 4, 15, 26 ],
            "friday": [ 23, 3, 13, 15 ],
            "saturday": [ 22, 2, 13, 14 ],
            "sunday": [ 21, 1, 12, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 171,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/arc-de-triomphe-2.jpg',
          title: 'Arc de Triomphe',
          artist: 'Antoine Blanchard',
          year: '?',
          rule: {
            "monday": [ 21, 1, 12, 23 ],
            "tuesday": [ 27, 7, 18, 28 ],
            "wednesday": [ 26, 6, 17, 28 ],
            "thursday": [ 25, 5, 16, 27 ],
            "friday": [ 24, 4, 15, 26 ],
            "saturday": [ 23, 3, 13, 15 ],
            "sunday": [ 22, 2, 13, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 172,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/le-bout-du-champ-1972.jpg',
          title: 'Le Bout du champ',
          artist: 'Raoul Ubac',
          year: '1972',
          rule: {
            "monday": [ 22, 2, 13, 14 ],
            "tuesday": [ 21, 1, 12, 23 ],
            "wednesday": [ 27, 7, 18, 28 ],
            "thursday": [ 26, 6, 17, 28 ],
            "friday": [ 25, 5, 16, 27 ],
            "saturday": [ 24, 4, 15, 26 ],
            "sunday": [ 23, 3, 13, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 173,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/bretagne-1956.jpg',
          title: 'Bretagne',
          artist: 'Jean Le Moal',
          year: '1956',
          rule: {
            "monday": [ 23, 3, 13, 15 ],
            "tuesday": [ 22, 2, 13, 14 ],
            "wednesday": [ 21, 1, 12, 23 ],
            "thursday": [ 27, 7, 18, 28 ],
            "friday": [ 26, 6, 17, 28 ],
            "saturday": [ 25, 5, 16, 27 ],
            "sunday": [ 24, 4, 15, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 174,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/personnages-cubistes-1950.jpg',
          title: 'Personnages Cubistes',
          artist: 'Paul Ackerman',
          year: '1949 - 1950',
          rule: {
            "monday": [ 24, 4, 15, 26 ],
            "tuesday": [ 23, 3, 13, 15 ],
            "wednesday": [ 22, 2, 13, 14 ],
            "thursday": [ 21, 1, 12, 23 ],
            "friday": [ 27, 7, 18, 28 ],
            "saturday": [ 26, 6, 17, 28 ],
            "sunday": [ 25, 5, 16, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 175,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/girl-on-a-bed.jpg',
          title: 'Girl on a Bed',
          artist: 'Balthus',
          year: 'c.1950',
          rule: {
            "monday": [ 26, 6, 17, 28 ],
            "tuesday": [ 25, 5, 16, 17 ],
            "wednesday": [ 24, 4, 14, 16 ],
            "thursday": [ 23, 3, 14, 15 ],
            "friday": [ 22, 2, 13, 24 ],
            "saturday": [ 28, 8, 19, 29 ],
            "sunday": [ 27, 7, 18, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 176,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/girl-with-green-scarf-1982.jpg',
          title: 'Girl with green scarf',
          artist: 'Le Pho',
          year: '1982',
          rule: {
            "monday": [ 27, 7, 18, 29 ],
            "tuesday": [ 26, 6, 17, 28 ],
            "wednesday": [ 25, 5, 16, 17 ],
            "thursday": [ 24, 4, 14, 16 ],
            "friday": [ 23, 3, 14, 15 ],
            "saturday": [ 22, 2, 13, 24 ],
            "sunday": [ 28, 8, 19, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 177,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/composition-brune-et-rouge-1964.jpg',
          title: 'Composition brune et rouge',
          artist: 'Serge Poliakoff',
          year: '1964',
          rule: {
            "monday": [ 28, 8, 19, 29 ],
            "tuesday": [ 27, 7, 18, 29 ],
            "wednesday": [ 26, 6, 17, 28 ],
            "thursday": [ 25, 5, 16, 17 ],
            "friday": [ 24, 4, 14, 16 ],
            "saturday": [ 23, 3, 14, 15 ],
            "sunday": [ 22, 2, 13, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 178,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/d-jeuner-de-fruits.jpg',
          title: 'Déjeuner de fruits',
          artist: 'Leon Arthur Tutundjian',
          year: '?',
          rule: {
            "monday": [ 22, 2, 13, 24 ],
            "tuesday": [ 28, 8, 19, 29 ],
            "wednesday": [ 27, 7, 18, 29 ],
            "thursday": [ 26, 6, 17, 28 ],
            "friday": [ 25, 5, 16, 17 ],
            "saturday": [ 24, 4, 14, 16 ],
            "sunday": [ 23, 3, 14, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 179,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/untitled-1973(1).jpg',
          title: 'Untitled',
          artist: 'Hans Hartung',
          year: '1973',
          rule: {
            "monday": [ 23, 3, 14, 15 ],
            "tuesday": [ 22, 2, 13, 24 ],
            "wednesday": [ 28, 8, 19, 29 ],
            "thursday": [ 27, 7, 18, 29 ],
            "friday": [ 26, 6, 17, 28 ],
            "saturday": [ 25, 5, 16, 17 ],
            "sunday": [ 24, 4, 14, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 180,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/cannes.jpg',
          title: 'Cannes',
          artist: 'Fikret Mualla Saygi',
          year: '?',
          rule: {
            "monday": [ 24, 4, 14, 16 ],
            "tuesday": [ 23, 3, 14, 15 ],
            "wednesday": [ 22, 2, 13, 24 ],
            "thursday": [ 28, 8, 19, 29 ],
            "friday": [ 27, 7, 18, 29 ],
            "saturday": [ 26, 6, 17, 28 ],
            "sunday": [ 25, 5, 16, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 181,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/le-charpentier-sur-la-place-1971.jpg',
          title: 'Le charpentier sur la place',
          artist: 'Grégoire Michonze',
          year: '1971',
          rule: {
            "monday": [ 25, 5, 16, 17 ],
            "tuesday": [ 24, 4, 14, 16 ],
            "wednesday": [ 23, 3, 14, 15 ],
            "thursday": [ 22, 2, 13, 24 ],
            "friday": [ 28, 8, 19, 29 ],
            "saturday": [ 27, 7, 18, 29 ],
            "sunday": [ 26, 6, 17, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 182,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/golden-club-1926.jpg',
          title: 'GOLDEN CLUB',
          artist: 'Cassandre',
          year: '1926',
          rule: {
            "monday": [ 27, 7, 18, 29 ],
            "tuesday": [ 26, 6, 17, 18 ],
            "wednesday": [ 25, 5, 15, 17 ],
            "thursday": [ 24, 4, 15, 16 ],
            "friday": [ 23, 3, 14, 25 ],
            "saturday": [ 29, 9, 20, 30 ],
            "sunday": [ 28, 8, 19, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 183,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-travelling-performers-1926.jpg',
          title: 'The Travelling Performers',
          artist: 'Yves Tanguy',
          year: '1926',
          rule: {
            "monday": [ 28, 8, 19, 30 ],
            "tuesday": [ 27, 7, 18, 29 ],
            "wednesday": [ 26, 6, 17, 18 ],
            "thursday": [ 25, 5, 15, 17 ],
            "friday": [ 24, 4, 15, 16 ],
            "saturday": [ 23, 3, 14, 25 ],
            "sunday": [ 29, 9, 20, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 184,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/composition-1968.jpg',
          title: 'Composition',
          artist: 'Charles Lapicque',
          year: '1968',
          rule: {
            "monday": [ 29, 9, 20, 30 ],
            "tuesday": [ 28, 8, 19, 30 ],
            "wednesday": [ 27, 7, 18, 29 ],
            "thursday": [ 26, 6, 17, 18 ],
            "friday": [ 25, 5, 15, 17 ],
            "saturday": [ 24, 4, 15, 16 ],
            "sunday": [ 23, 3, 14, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 185,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/93-k-1974.jpg',
          title: '93 K',
          artist: 'Gerard Schneider',
          year: '1974',
          rule: {
            "monday": [ 23, 3, 14, 25 ],
            "tuesday": [ 29, 9, 20, 30 ],
            "wednesday": [ 28, 8, 19, 30 ],
            "thursday": [ 27, 7, 18, 29 ],
            "friday": [ 26, 6, 17, 18 ],
            "saturday": [ 25, 5, 15, 17 ],
            "sunday": [ 24, 4, 15, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 186,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/composition(1).jpg',
          title: 'Composition',
          artist: 'Marcelle Cahn',
          year: '?',
          rule: {
            "monday": [ 24, 4, 15, 16 ],
            "tuesday": [ 23, 3, 14, 25 ],
            "wednesday": [ 29, 9, 20, 30 ],
            "thursday": [ 28, 8, 19, 30 ],
            "friday": [ 27, 7, 18, 29 ],
            "saturday": [ 26, 6, 17, 18 ],
            "sunday": [ 25, 5, 15, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 187,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/composition-1929.jpg',
          title: 'Composition',
          artist: 'Georges Papazoff',
          year: '1929',
          rule: {
            "monday": [ 25, 5, 15, 17 ],
            "tuesday": [ 24, 4, 15, 16 ],
            "wednesday": [ 23, 3, 14, 25 ],
            "thursday": [ 29, 9, 20, 30 ],
            "friday": [ 28, 8, 19, 30 ],
            "saturday": [ 27, 7, 18, 29 ],
            "sunday": [ 26, 6, 17, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 188,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/kiki-de-montparnasse.jpg',
          title: 'Kiki de Montparnasse',
          artist: 'Moise Kisling',
          year: '?',
          rule: {
            "monday": [ 26, 6, 17, 18 ],
            "tuesday": [ 25, 5, 15, 17 ],
            "wednesday": [ 24, 4, 15, 16 ],
            "thursday": [ 23, 3, 14, 25 ],
            "friday": [ 29, 9, 20, 30 ],
            "saturday": [ 28, 8, 19, 30 ],
            "sunday": [ 27, 7, 18, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 189,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-small-black-holes-1927.jpg',
          title: 'The Small Black Holes',
          artist: 'Serge Charchoune',
          year: '1927',
          rule: {
            "monday": [ 28, 8, 19, 30 ],
            "tuesday": [ 27, 7, 18, 19 ],
            "wednesday": [ 26, 6, 16, 18 ],
            "thursday": [ 25, 5, 16, 17 ],
            "friday": [ 24, 4, 15, 26 ],
            "saturday": [ 30, 10, 21, 31 ],
            "sunday": [ 29, 9, 20, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 190,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/femme-la-blouse-jaune-1916.jpg',
          title: 'Femme à la blouse jaune',
          artist: 'Alberto Magnelli',
          year: '1916',
          rule: {
            "monday": [ 29, 9, 20, 31 ],
            "tuesday": [ 28, 8, 19, 30 ],
            "wednesday": [ 27, 7, 18, 19 ],
            "thursday": [ 26, 6, 16, 18 ],
            "friday": [ 25, 5, 16, 17 ],
            "saturday": [ 24, 4, 15, 26 ],
            "sunday": [ 30, 10, 21, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 191,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/marching-1915.jpg',
          title: 'Marching',
          artist: 'Marc Chagall',
          year: '1915',
          rule: {
            "monday": [ 30, 10, 21, 31 ],
            "tuesday": [ 29, 9, 20, 31 ],
            "wednesday": [ 28, 8, 19, 30 ],
            "thursday": [ 27, 7, 18, 19 ],
            "friday": [ 26, 6, 16, 18 ],
            "saturday": [ 25, 5, 16, 17 ],
            "sunday": [ 24, 4, 15, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 192,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/composition-grise.jpg',
          title: 'Composition grise',
          artist: 'Roger Bissière',
          year: '?',
          rule: {
            "monday": [ 24, 4, 15, 26 ],
            "tuesday": [ 30, 10, 21, 31 ],
            "wednesday": [ 29, 9, 20, 31 ],
            "thursday": [ 28, 8, 19, 30 ],
            "friday": [ 27, 7, 18, 19 ],
            "saturday": [ 26, 6, 16, 18 ],
            "sunday": [ 25, 5, 16, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 193,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/fabric-pattern.jpg',
          title: 'Fabric Pattern',
          artist: 'Sonia Delaunay',
          year: '1928',
          rule: {
            "monday": [ 25, 5, 16, 17 ],
            "tuesday": [ 24, 4, 15, 26 ],
            "wednesday": [ 30, 10, 21, 31 ],
            "thursday": [ 29, 9, 20, 31 ],
            "friday": [ 28, 8, 19, 30 ],
            "saturday": [ 27, 7, 18, 19 ],
            "sunday": [ 26, 6, 16, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 194,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/l-entr-e-du-bassin-flot-bordeaux-1912.jpg',
          title: 'The entrance to the tidal basin in Bordeaux',
          artist: 'André Lhote',
          year: '1912',
          rule: {
            "monday": [ 26, 6, 16, 18 ],
            "tuesday": [ 25, 5, 16, 17 ],
            "wednesday": [ 24, 4, 15, 26 ],
            "thursday": [ 30, 10, 21, 31 ],
            "friday": [ 29, 9, 20, 31 ],
            "saturday": [ 28, 8, 19, 30 ],
            "sunday": [ 27, 7, 18, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 195,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/in-the-hotel-room-1908.jpg',
          title: 'In the Hotel Room',
          artist: 'Jules Pascin',
          year: '1908',
          rule: {
            "monday": [ 27, 7, 18, 19 ],
            "tuesday": [ 26, 6, 16, 18 ],
            "wednesday": [ 25, 5, 16, 17 ],
            "thursday": [ 24, 4, 15, 26 ],
            "friday": [ 30, 10, 21, 31 ],
            "saturday": [ 29, 9, 20, 31 ],
            "sunday": [ 28, 8, 19, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 196,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/shepherd-1910.jpg',
          title: 'Shepherd',
          artist: 'Eugeniusz Żak',
          year: '1910',
          rule: {
            "monday": [ 29, 9, 20, 31 ],
            "tuesday": [ 28, 8, 19, 20 ],
            "wednesday": [ 27, 7, 17, 19 ],
            "thursday": [ 26, 6, 17, 18 ],
            "friday": [ 25, 5, 16, 27 ],
            "saturday": [ 31, 11, 22, 1 ],
            "sunday": [ 30, 10, 21, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 197,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/church-sacre-couer.jpg',
          title: 'Church Sacre-Couer',
          artist: 'Maurice Utrillo',
          year: '?',
          rule: {
            "monday": [ 30, 10, 21, 1 ],
            "tuesday": [ 29, 9, 20, 31 ],
            "wednesday": [ 28, 8, 19, 20 ],
            "thursday": [ 27, 7, 17, 19 ],
            "friday": [ 26, 6, 17, 18 ],
            "saturday": [ 25, 5, 16, 27 ],
            "sunday": [ 31, 11, 22, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 198,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/asenath-from-the-picture-book-for-the-red-cross.jpg',
          title: 'Asenath - from the Picture Book for the Red Cross',
          artist: 'Edmund Dulac',
          year: '?',
          rule: {
            "monday": [ 31, 11, 22, 1 ],
            "tuesday": [ 30, 10, 21, 1 ],
            "wednesday": [ 29, 9, 20, 31 ],
            "thursday": [ 28, 8, 19, 20 ],
            "friday": [ 27, 7, 17, 19 ],
            "saturday": [ 26, 6, 17, 18 ],
            "sunday": [ 25, 5, 16, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 199,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/booksellers-of-notre-dame.jpg',
          title: 'Booksellers of Notre-Dame',
          artist: 'Edouard Cortes',
          year: '?',
          rule: {
            "monday": [ 25, 5, 16, 27 ],
            "tuesday": [ 31, 11, 22, 1 ],
            "wednesday": [ 30, 10, 21, 1 ],
            "thursday": [ 29, 9, 20, 31 ],
            "friday": [ 28, 8, 19, 20 ],
            "saturday": [ 27, 7, 17, 19 ],
            "sunday": [ 26, 6, 17, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 200,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/zealand-farmer-s-wives-1914.jpg',
          title: 'Zealand Farmer\'s Wives',
          artist: 'Henri Le Fauconnier',
          year: '1914',
          rule: {
            "monday": [ 26, 6, 17, 18 ],
            "tuesday": [ 25, 5, 16, 27 ],
            "wednesday": [ 31, 11, 22, 1 ],
            "thursday": [ 30, 10, 21, 1 ],
            "friday": [ 29, 9, 20, 31 ],
            "saturday": [ 28, 8, 19, 20 ],
            "sunday": [ 27, 7, 17, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 201,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-dancer.jpg',
          title: 'The Dancer',
          artist: 'Andre Derain',
          year: 'c.1910',
          rule: {
            "monday": [ 27, 7, 17, 19 ],
            "tuesday": [ 26, 6, 17, 18 ],
            "wednesday": [ 25, 5, 16, 27 ],
            "thursday": [ 31, 11, 22, 1 ],
            "friday": [ 30, 10, 21, 1 ],
            "saturday": [ 29, 9, 20, 31 ],
            "sunday": [ 28, 8, 19, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 202,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/not_detected_236819.jpg',
          title: 'Optophone I',
          artist: 'Francis Picabia',
          year: '1922',
          rule: {
            "monday": [ 28, 8, 19, 20 ],
            "tuesday": [ 27, 7, 17, 19 ],
            "wednesday": [ 26, 6, 17, 18 ],
            "thursday": [ 25, 5, 16, 27 ],
            "friday": [ 31, 11, 22, 1 ],
            "saturday": [ 30, 10, 21, 1 ],
            "sunday": [ 29, 9, 20, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 203,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/woman-with-blue-eyes-1908.jpg',
          title: 'Woman with Blue Eyes',
          artist: 'Kees van Dongen',
          year: '1908',
          rule: {
            "monday": [ 30, 10, 21, 1 ],
            "tuesday": [ 29, 9, 20, 21 ],
            "wednesday": [ 28, 8, 18, 20 ],
            "thursday": [ 27, 7, 18, 19 ],
            "friday": [ 26, 6, 17, 28 ],
            "saturday": [ 1, 12, 23, 2 ],
            "sunday": [ 31, 11, 22, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 204,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/at-the-bar.jpg',
          title: 'The Bar Counter',
          artist: 'Maurice de Vlaminck',
          year: '1900',
          rule: {
            "monday": [ 31, 11, 22, 2 ],
            "tuesday": [ 30, 10, 21, 1 ],
            "wednesday": [ 29, 9, 20, 21 ],
            "thursday": [ 28, 8, 18, 20 ],
            "friday": [ 27, 7, 18, 19 ],
            "saturday": [ 26, 6, 17, 28 ],
            "sunday": [ 1, 12, 23, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 205,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/self-portrait-10.jpg',
          title: 'Self-portrait',
          artist: 'Armand Henrion',
          year: '?',
          rule: {
            "monday": [ 1, 12, 23, 2 ],
            "tuesday": [ 31, 11, 22, 2 ],
            "wednesday": [ 30, 10, 21, 1 ],
            "thursday": [ 29, 9, 20, 21 ],
            "friday": [ 28, 8, 18, 20 ],
            "saturday": [ 27, 7, 18, 19 ],
            "sunday": [ 26, 6, 17, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 206,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/assia-1937.jpg',
          title: 'Assia',
          artist: 'Charles Despiau',
          year: '1937',
          rule: {
            "monday": [ 26, 6, 17, 28 ],
            "tuesday": [ 1, 12, 23, 2 ],
            "wednesday": [ 31, 11, 22, 2 ],
            "thursday": [ 30, 10, 21, 1 ],
            "friday": [ 29, 9, 20, 21 ],
            "saturday": [ 28, 8, 18, 20 ],
            "sunday": [ 27, 7, 18, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 207,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/lines-meeting-1932.jpg',
          title: 'Lines Meeting',
          artist: 'Pierre Dubreuil',
          year: '1932',
          rule: {
            "monday": [ 27, 7, 18, 19 ],
            "tuesday": [ 26, 6, 17, 28 ],
            "wednesday": [ 1, 12, 23, 2 ],
            "thursday": [ 31, 11, 22, 2 ],
            "friday": [ 30, 10, 21, 1 ],
            "saturday": [ 29, 9, 20, 21 ],
            "sunday": [ 28, 8, 18, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 208,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/bust-de-jeune-fille-1925.jpg',
          title: 'Bust de jeune fille',
          artist: 'Michel Simonidy',
          year: '1925',
          rule: {
            "monday": [ 28, 8, 18, 20 ],
            "tuesday": [ 27, 7, 18, 19 ],
            "wednesday": [ 26, 6, 17, 28 ],
            "thursday": [ 1, 12, 23, 2 ],
            "friday": [ 31, 11, 22, 2 ],
            "saturday": [ 30, 10, 21, 1 ],
            "sunday": [ 29, 9, 20, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 209,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/chambas-bruma-matinale.jpg',
          title: 'Brume Matinale',
          artist: 'Paul Émile Chabas',
          year: '?',
          rule: {
            "monday": [ 29, 9, 20, 21 ],
            "tuesday": [ 28, 8, 18, 20 ],
            "wednesday": [ 27, 7, 18, 19 ],
            "thursday": [ 26, 6, 17, 28 ],
            "friday": [ 1, 12, 23, 2 ],
            "saturday": [ 31, 11, 22, 2 ],
            "sunday": [ 30, 10, 21, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 210,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/harvesting-of-buckwheat-in-britain.jpg',
          title: 'Harvesting of buckwheat in Britain',
          artist: 'Georges Lacombe',
          year: '1895',
          rule: {
            "monday": [ 31, 11, 22, 2 ],
            "tuesday": [ 30, 10, 21, 22 ],
            "wednesday": [ 29, 9, 19, 21 ],
            "thursday": [ 28, 8, 19, 20 ],
            "friday": [ 27, 7, 18, 29 ],
            "saturday": [ 2, 13, 24, 3 ],
            "sunday": [ 1, 12, 23, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 211,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/church-at-notre-dame-at-vaudreuil-1900.jpg',
          title: 'Church at Notre Dame at Vaudreuil',
          artist: 'Gustave Loiseau',
          year: '1900',
          rule: {
            "monday": [ 1, 12, 23, 3 ],
            "tuesday": [ 31, 11, 22, 2 ],
            "wednesday": [ 30, 10, 21, 22 ],
            "thursday": [ 29, 9, 19, 21 ],
            "friday": [ 28, 8, 19, 20 ],
            "saturday": [ 27, 7, 18, 29 ],
            "sunday": [ 2, 13, 24, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 212,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/two-breton-women-under-a-flowering-apple-tree-1890.jpg',
          title: 'Two Breton Women under a Flowering Apple Tree',
          artist: 'Paul Serusier',
          year: '1890',
          rule: {
            "monday": [ 2, 13, 24, 3 ],
            "tuesday": [ 1, 12, 23, 3 ],
            "wednesday": [ 31, 11, 22, 2 ],
            "thursday": [ 30, 10, 21, 22 ],
            "friday": [ 29, 9, 19, 21 ],
            "saturday": [ 28, 8, 19, 20 ],
            "sunday": [ 27, 7, 18, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 213,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-milliner-1885.jpg',
          title: 'The Milliner',
          artist: 'Paul Signac',
          year: '1885',
          rule: {
            "monday": [ 27, 7, 18, 29 ],
            "tuesday": [ 2, 13, 24, 3 ],
            "wednesday": [ 1, 12, 23, 3 ],
            "thursday": [ 31, 11, 22, 2 ],
            "friday": [ 30, 10, 21, 22 ],
            "saturday": [ 29, 9, 19, 21 ],
            "sunday": [ 28, 8, 19, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 214,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/la-main-chaude.jpg',
          title: 'La main chaude',
          artist: 'Louis Vivin',
          year: '?',
          rule: {
            "monday": [ 28, 8, 19, 20 ],
            "tuesday": [ 27, 7, 18, 29 ],
            "wednesday": [ 2, 13, 24, 3 ],
            "thursday": [ 1, 12, 23, 3 ],
            "friday": [ 31, 11, 22, 2 ],
            "saturday": [ 30, 10, 21, 22 ],
            "sunday": [ 29, 9, 19, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 215,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/angelica-at-the-rock-after-ingres-1878.jpg',
          title: 'Angelica at the rock (After ingres)',
          artist: 'Georges Seurat',
          year: '1878',
          rule: {
            "monday": [ 29, 9, 19, 21 ],
            "tuesday": [ 28, 8, 19, 20 ],
            "wednesday": [ 27, 7, 18, 29 ],
            "thursday": [ 2, 13, 24, 3 ],
            "friday": [ 1, 12, 23, 3 ],
            "saturday": [ 31, 11, 22, 2 ],
            "sunday": [ 30, 10, 21, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 216,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-hair.jpg',
          title: 'The Hair',
          artist: 'Henri-Edmond Cross',
          year: 'c.1892',
          rule: {
            "monday": [ 30, 10, 21, 22 ],
            "tuesday": [ 29, 9, 19, 21 ],
            "wednesday": [ 28, 8, 19, 20 ],
            "thursday": [ 27, 7, 18, 29 ],
            "friday": [ 2, 13, 24, 3 ],
            "saturday": [ 1, 12, 23, 3 ],
            "sunday": [ 31, 11, 22, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 217,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/jaundiced-cuckolds-handling-ochre.jpg',
          title: 'Jaundiced Cuckolds Handling Ochre',
          artist: 'Alphonse Allais',
          year: '1884',
          rule: {
            "monday": [ 1, 12, 23, 3 ],
            "tuesday": [ 31, 11, 22, 23 ],
            "wednesday": [ 30, 10, 20, 22 ],
            "thursday": [ 29, 9, 20, 21 ],
            "friday": [ 28, 8, 19, 30 ],
            "saturday": [ 3, 14, 25, 4 ],
            "sunday": [ 2, 13, 24, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 218,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/unexpected-visit.jpg',
          title: 'Unexpected Visit',
          artist: 'Henri Gervex',
          year: '?',
          rule: {
            "monday": [ 2, 13, 24, 4 ],
            "tuesday": [ 1, 12, 23, 3 ],
            "wednesday": [ 31, 11, 22, 23 ],
            "thursday": [ 30, 10, 20, 22 ],
            "friday": [ 29, 9, 20, 21 ],
            "saturday": [ 28, 8, 19, 30 ],
            "sunday": [ 3, 14, 25, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 219,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/joan-of-arc.jpg',
          title: 'Joan Of Arc',
          artist: 'Jules Bastien-Lepage',
          year: '1879',
          rule: {
            "monday": [ 3, 14, 25, 4 ],
            "tuesday": [ 2, 13, 24, 4 ],
            "wednesday": [ 1, 12, 23, 3 ],
            "thursday": [ 31, 11, 22, 23 ],
            "friday": [ 30, 10, 20, 22 ],
            "saturday": [ 29, 9, 20, 21 ],
            "sunday": [ 28, 8, 19, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 220,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/gabriel-ferrier-l-auto-da-fe.jpg',
          title: 'L’auto Da-fe',
          artist: 'Gabriel Ferrier',
          year: '?',
          rule: {
            "monday": [ 28, 8, 19, 30 ],
            "tuesday": [ 3, 14, 25, 4 ],
            "wednesday": [ 2, 13, 24, 4 ],
            "thursday": [ 1, 12, 23, 3 ],
            "friday": [ 31, 11, 22, 23 ],
            "saturday": [ 30, 10, 20, 22 ],
            "sunday": [ 29, 9, 20, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 221,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/a-landscape-1902.jpg',
          title: 'A Landscape',
          artist: 'Pierre Emmanuel Damoye',
          year: '1902',
          rule: {
            "monday": [ 29, 9, 20, 21 ],
            "tuesday": [ 28, 8, 19, 30 ],
            "wednesday": [ 3, 14, 25, 4 ],
            "thursday": [ 2, 13, 24, 4 ],
            "friday": [ 1, 12, 23, 3 ],
            "saturday": [ 31, 11, 22, 23 ],
            "sunday": [ 30, 10, 20, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 222,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/suzy-deguez.jpg',
          title: 'Suzy Deguez',
          artist: 'Eugène Grasset',
          year: '?',
          rule: {
            "monday": [ 30, 10, 20, 22 ],
            "tuesday": [ 29, 9, 20, 21 ],
            "wednesday": [ 28, 8, 19, 30 ],
            "thursday": [ 3, 14, 25, 4 ],
            "friday": [ 2, 13, 24, 4 ],
            "saturday": [ 1, 12, 23, 3 ],
            "sunday": [ 31, 11, 22, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 223,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-pink-dress.jpg',
          title: 'The Pink Dress',
          artist: 'Frederic Bazille',
          year: 'c.1864',
          rule: {
            "monday": [ 31, 11, 22, 23 ],
            "tuesday": [ 30, 10, 20, 22 ],
            "wednesday": [ 29, 9, 20, 21 ],
            "thursday": [ 28, 8, 19, 30 ],
            "friday": [ 3, 14, 25, 4 ],
            "saturday": [ 2, 13, 24, 4 ],
            "sunday": [ 1, 12, 23, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 224,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/before-the-theatre.jpg',
          title: 'Before the Theatre',
          artist: 'Berthe Morisot',
          year: 'c.1875',
          rule: {
            "monday": [ 2, 13, 24, 4 ],
            "tuesday": [ 1, 12, 23, 24 ],
            "wednesday": [ 31, 11, 21, 23 ],
            "thursday": [ 30, 10, 21, 22 ],
            "friday": [ 29, 9, 20, 31 ],
            "saturday": [ 4, 15, 26, 5 ],
            "sunday": [ 3, 14, 25, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 225,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/danaid.jpg',
          title: 'Danaid',
          artist: 'Auguste Rodin',
          year: '1889',
          rule: {
            "monday": [ 3, 14, 25, 5 ],
            "tuesday": [ 2, 13, 24, 4 ],
            "wednesday": [ 1, 12, 23, 24 ],
            "thursday": [ 31, 11, 21, 23 ],
            "friday": [ 30, 10, 21, 22 ],
            "saturday": [ 29, 9, 20, 31 ],
            "sunday": [ 4, 15, 26, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 226,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/not_detected_238362.jpg',
          title: 'Village of Saint Mammès',
          artist: 'Alfred Sisley',
          year: 'c.1898',
          rule: {
            "monday": [ 4, 15, 26, 5 ],
            "tuesday": [ 3, 14, 25, 5 ],
            "wednesday": [ 2, 13, 24, 4 ],
            "thursday": [ 1, 12, 23, 24 ],
            "friday": [ 31, 11, 21, 23 ],
            "saturday": [ 30, 10, 21, 22 ],
            "sunday": [ 29, 9, 20, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 227,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/la-fille-de-l-emir-1883.jpg',
          title: 'La Fille De L\'Emir',
          artist: 'Carolus-Duran',
          year: '1883',
          rule: {
            "monday": [ 29, 9, 20, 31 ],
            "tuesday": [ 4, 15, 26, 5 ],
            "wednesday": [ 3, 14, 25, 5 ],
            "thursday": [ 2, 13, 24, 4 ],
            "friday": [ 1, 12, 23, 24 ],
            "saturday": [ 31, 11, 21, 23 ],
            "sunday": [ 30, 10, 21, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 228,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-grasshopper-1872.jpg',
          title: 'The Grasshopper',
          artist: 'Jules Joseph Lefebvre',
          year: '1872',
          rule: {
            "monday": [ 30, 10, 21, 22 ],
            "tuesday": [ 29, 9, 20, 31 ],
            "wednesday": [ 4, 15, 26, 5 ],
            "thursday": [ 3, 14, 25, 5 ],
            "friday": [ 2, 13, 24, 4 ],
            "saturday": [ 1, 12, 23, 24 ],
            "sunday": [ 31, 11, 21, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 229,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/le-barbier-negre-a-suez-1876.jpg',
          title: 'Le Barbier negre a Suez',
          artist: 'Leon Bonnat',
          year: '1876',
          rule: {
            "monday": [ 31, 11, 21, 23 ],
            "tuesday": [ 30, 10, 21, 22 ],
            "wednesday": [ 29, 9, 20, 31 ],
            "thursday": [ 4, 15, 26, 5 ],
            "friday": [ 3, 14, 25, 5 ],
            "saturday": [ 2, 13, 24, 4 ],
            "sunday": [ 1, 12, 23, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 230,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/sweet-doing-nothing-1877.jpg',
          title: 'Sweet Doing Nothing',
          artist: 'Auguste Toulmouche',
          year: '1877',
          rule: {
            "monday": [ 1, 12, 23, 24 ],
            "tuesday": [ 31, 11, 21, 23 ],
            "wednesday": [ 30, 10, 21, 22 ],
            "thursday": [ 29, 9, 20, 31 ],
            "friday": [ 4, 15, 26, 5 ],
            "saturday": [ 3, 14, 25, 5 ],
            "sunday": [ 2, 13, 24, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 231,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-execution-of-messalina-1874.jpg',
          title: 'The Execution of Messalina',
          artist: 'Gustave Moreau',
          year: '1874',
          rule: {
            "monday": [ 3, 14, 25, 5 ],
            "tuesday": [ 2, 13, 24, 25 ],
            "wednesday": [ 1, 12, 22, 24 ],
            "thursday": [ 31, 11, 22, 23 ],
            "friday": [ 30, 10, 21, 1 ],
            "saturday": [ 5, 16, 27, 6 ],
            "sunday": [ 4, 15, 26, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 232,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-meeting-of-the-elegant-ladies.jpg',
          title: 'The Meeting of the Elegant Ladies',
          artist: 'Adolphe Joseph Thomas Monticelli',
          year: 'c.1876',
          rule: {
            "monday": [ 4, 15, 26, 6 ],
            "tuesday": [ 3, 14, 25, 5 ],
            "wednesday": [ 2, 13, 24, 25 ],
            "thursday": [ 1, 12, 22, 24 ],
            "friday": [ 31, 11, 22, 23 ],
            "saturday": [ 30, 10, 21, 1 ],
            "sunday": [ 5, 16, 27, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 233,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/phryne-1850.jpg',
          title: 'Phryne',
          artist: 'Gustave Boulanger',
          year: '1850',
          rule: {
            "monday": [ 5, 16, 27, 6 ],
            "tuesday": [ 4, 15, 26, 6 ],
            "wednesday": [ 3, 14, 25, 5 ],
            "thursday": [ 2, 13, 24, 25 ],
            "friday": [ 1, 12, 22, 24 ],
            "saturday": [ 31, 11, 22, 23 ],
            "sunday": [ 30, 10, 21, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 234,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/wild-cat.jpg',
          title: 'Wild Cat',
          artist: 'Rosa Bonheur',
          year: '?',
          rule: {
            "monday": [ 30, 10, 21, 1 ],
            "tuesday": [ 5, 16, 27, 6 ],
            "wednesday": [ 4, 15, 26, 6 ],
            "thursday": [ 3, 14, 25, 5 ],
            "friday": [ 2, 13, 24, 25 ],
            "saturday": [ 1, 12, 22, 24 ],
            "sunday": [ 31, 11, 22, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 235,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/la-bacchante.jpg',
          title: 'La Bacchante',
          artist: 'Gustave Courbet',
          year: '?',
          rule: {
            "monday": [ 31, 11, 22, 23 ],
            "tuesday": [ 30, 10, 21, 1 ],
            "wednesday": [ 5, 16, 27, 6 ],
            "thursday": [ 4, 15, 26, 6 ],
            "friday": [ 3, 14, 25, 5 ],
            "saturday": [ 2, 13, 24, 25 ],
            "sunday": [ 1, 12, 22, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 236,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/on-a-terrace-1867.jpg',
          title: 'On a Terrace',
          artist: 'Ernest Meissonier',
          year: '1867',
          rule: {
            "monday": [ 1, 12, 22, 24 ],
            "tuesday": [ 31, 11, 22, 23 ],
            "wednesday": [ 30, 10, 21, 1 ],
            "thursday": [ 5, 16, 27, 6 ],
            "friday": [ 4, 15, 26, 6 ],
            "saturday": [ 3, 14, 25, 5 ],
            "sunday": [ 2, 13, 24, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 237,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/leaving-the-sheep-pen-1889.jpg',
          title: 'Leaving the Sheep Pen',
          artist: 'Charles Jacque',
          year: '1889',
          rule: {
            "monday": [ 2, 13, 24, 25 ],
            "tuesday": [ 1, 12, 22, 24 ],
            "wednesday": [ 31, 11, 22, 23 ],
            "thursday": [ 30, 10, 21, 1 ],
            "friday": [ 5, 16, 27, 6 ],
            "saturday": [ 4, 15, 26, 6 ],
            "sunday": [ 3, 14, 25, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 238,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-fisherman.jpg',
          title: 'The Fisherman',
          artist: 'Constant Troyon',
          year: '?',
          rule: {
            "monday": [ 4, 15, 26, 6 ],
            "tuesday": [ 3, 14, 25, 26 ],
            "wednesday": [ 2, 13, 23, 25 ],
            "thursday": [ 1, 12, 23, 24 ],
            "friday": [ 31, 11, 22, 2 ],
            "saturday": [ 6, 17, 28, 7 ],
            "sunday": [ 5, 16, 27, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 239,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/sappho-1867.jpg',
          title: 'Sappho',
          artist: 'Charles Gleyre',
          year: '1867',
          rule: {
            "monday": [ 5, 16, 27, 7 ],
            "tuesday": [ 4, 15, 26, 6 ],
            "wednesday": [ 3, 14, 25, 26 ],
            "thursday": [ 2, 13, 23, 25 ],
            "friday": [ 1, 12, 23, 24 ],
            "saturday": [ 31, 11, 22, 2 ],
            "sunday": [ 6, 17, 28, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 240,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/heraldic-eagle-185.jpg',
          title: 'Heraldic eagle',
          artist: 'Victor Hugo',
          year: '1855',
          rule: {
            "monday": [ 6, 17, 28, 7 ],
            "tuesday": [ 5, 16, 27, 7 ],
            "wednesday": [ 4, 15, 26, 6 ],
            "thursday": [ 3, 14, 25, 26 ],
            "friday": [ 2, 13, 23, 25 ],
            "saturday": [ 1, 12, 23, 24 ],
            "sunday": [ 31, 11, 22, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 241,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/woman-with-mandolin-1828.jpg',
          title: 'Woman with Mandolin',
          artist: 'Camille Corot',
          year: '1826 - 1828',
          rule: {
            "monday": [ 31, 11, 22, 2 ],
            "tuesday": [ 6, 17, 28, 7 ],
            "wednesday": [ 5, 16, 27, 7 ],
            "thursday": [ 4, 15, 26, 6 ],
            "friday": [ 3, 14, 25, 26 ],
            "saturday": [ 2, 13, 23, 25 ],
            "sunday": [ 1, 12, 23, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 242,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/a-row-of-calvarymen-on-horseback(1).jpg',
          title: 'A Row of Calvarymen on Horseback',
          artist: 'Horace Vernet',
          year: '?',
          rule: {
            "monday": [ 1, 12, 23, 24 ],
            "tuesday": [ 31, 11, 22, 2 ],
            "wednesday": [ 6, 17, 28, 7 ],
            "thursday": [ 5, 16, 27, 7 ],
            "friday": [ 4, 15, 26, 6 ],
            "saturday": [ 3, 14, 25, 26 ],
            "sunday": [ 2, 13, 23, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 243,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/joan-of-arc-on-corronation-of-charles-vii-in-the-cathedral-of-reims.jpg',
          title: 'Joan of Arc on Corronation of Charles VII in the Cathedral of Reims',
          artist: 'Jean Auguste Dominique Ingres',
          year: '1854',
          rule: {
            "monday": [ 2, 13, 23, 25 ],
            "tuesday": [ 1, 12, 23, 24 ],
            "wednesday": [ 31, 11, 22, 2 ],
            "thursday": [ 6, 17, 28, 7 ],
            "friday": [ 5, 16, 27, 7 ],
            "saturday": [ 4, 15, 26, 6 ],
            "sunday": [ 3, 14, 25, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 244,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/une-tude-de-femme-d-apr-s-nature-portrait-de-madame-soustras.jpg',
          title: 'Une étude de femme d\'après nature (Portrait de Madame Soustras)',
          artist: 'Marie-Denise Villers',
          year: '?',
          rule: {
            "monday": [ 3, 14, 25, 26 ],
            "tuesday": [ 2, 13, 23, 25 ],
            "wednesday": [ 1, 12, 23, 24 ],
            "thursday": [ 31, 11, 22, 2 ],
            "friday": [ 6, 17, 28, 7 ],
            "saturday": [ 5, 16, 27, 7 ],
            "sunday": [ 4, 15, 26, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 245,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/mademoiselle-lange-as-venus-1798(1).jpg',
          title: 'Mademoiselle Lange as Venus',
          artist: 'Anne-Louis Girodet',
          year: '1798',
          rule: {
            "monday": [ 5, 16, 27, 7 ],
            "tuesday": [ 4, 15, 26, 27 ],
            "wednesday": [ 3, 14, 24, 26 ],
            "thursday": [ 2, 13, 24, 25 ],
            "friday": [ 1, 12, 23, 3 ],
            "saturday": [ 7, 18, 29, 8 ],
            "sunday": [ 6, 17, 28, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 246,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/portrait-of-madame-charles-louis-trudaine-1792.jpg',
          title: 'Portrait of Madame Charles-Louis Trudaine',
          artist: 'Jacques-Louis David',
          year: 'c.1791 - 1792',
          rule: {
            "monday": [ 6, 17, 28, 8 ],
            "tuesday": [ 5, 16, 27, 7 ],
            "wednesday": [ 4, 15, 26, 27 ],
            "thursday": [ 3, 14, 24, 26 ],
            "friday": [ 2, 13, 24, 25 ],
            "saturday": [ 1, 12, 23, 3 ],
            "sunday": [ 7, 18, 29, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 247,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-fire-of-rome-18-july-64-ad.jpg',
          title: 'The Fire of Rome, 18 July 64 AD',
          artist: 'Hubert Robert',
          year: '1785',
          rule: {
            "monday":[ 7, 18, 29, 8 ],
            "tuesday": [ 6, 17, 28, 8 ],
            "wednesday": [ 5, 16, 27, 7 ],
            "thursday": [ 4, 15, 26, 27 ],
            "friday": [ 3, 14, 24, 26 ],
            "saturday": [ 2, 13, 24, 25 ],
            "sunday": [ 1, 12, 23, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 248,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/vsoldiers-in-a-mountain-gorge-with-a-storm.jpg',
          title: 'Vsoldiers in a Mountain Gorge, with a Storm',
          artist: 'Claude-Joseph Vernet',
          year: '1789',
          rule: {
            "monday":[ 1, 12, 23, 3 ],
            "tuesday": [ 7, 18, 29, 8 ],
            "wednesday": [ 6, 17, 28, 8 ],
            "thursday": [ 5, 16, 27, 7 ],
            "friday": [ 4, 15, 26, 27 ],
            "saturday": [ 3, 14, 24, 26 ],
            "sunday": [ 2, 13, 24, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 249,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/fall-of-the-giants.jpg',
          title: 'Fall of the Giants',
          artist: 'Pietro Longhi',
          year: '1734',
          rule: {
            "monday": [ 2, 13, 24, 25 ],
            "tuesday": [ 1, 12, 23, 3 ],
            "wednesday": [ 7, 18, 29, 8 ],
            "thursday": [ 6, 17, 28, 8 ],
            "friday": [ 5, 16, 27, 7 ],
            "saturday": [ 4, 15, 26, 27 ],
            "sunday": [ 3, 14, 24, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 250,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/terpsichore-muse-of-dance-1739.jpg',
          title: 'Terpsichore, Muse of Dance',
          artist: 'Jean-Marc Nattier',
          year: '1739',
          rule: {
            "monday": [ 3, 14, 24, 26 ],
            "tuesday": [ 2, 13, 24, 25 ],
            "wednesday": [ 1, 12, 23, 3 ],
            "thursday": [ 7, 18, 29, 8 ],
            "friday": [ 6, 17, 28, 8 ],
            "saturday": [ 5, 16, 27, 7 ],
            "sunday": [ 4, 15, 26, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 251,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/hyacinthe-rigaud-louis-xiv-roi-de-france-1638-1715-google-art-project.jpg',
          title: 'Louis XIV, Roi De France',
          artist: 'Hyacinthe Rigaud',
          year: '?',
          rule: {
            "monday": [ 4, 15, 26, 27 ],
            "tuesday": [ 3, 14, 24, 26 ],
            "wednesday": [ 2, 13, 24, 25 ],
            "thursday": [ 1, 12, 23, 3 ],
            "friday": [ 7, 18, 29, 8 ],
            "saturday": [ 6, 17, 28, 8 ],
            "sunday": [ 5, 16, 27, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 252,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/display-image-11.jpg',
          title: 'Market Scene with a Pick-pocket',
          artist: 'Louise Moillon',
          year: '?',
          rule: {
            "monday": [ 6, 17, 28, 8 ],
            "tuesday": [ 5, 16, 27, 28 ],
            "wednesday": [ 4, 15, 25, 27 ],
            "thursday": [ 3, 14, 25, 26 ],
            "friday": [ 2, 13, 24, 4 ],
            "saturday": [ 8, 19, 30, 9 ],
            "sunday": [ 7, 18, 29, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 253,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-triumph-of-galatea.jpg',
          title: 'The Triumph of Galatea',
          artist: 'Jacques Stella',
          year: '?',
          rule: {
            "monday": [ 7, 18, 29, 9 ],
            "tuesday": [ 6, 17, 28, 8 ],
            "wednesday": [ 5, 16, 27, 28 ],
            "thursday": [ 4, 15, 25, 27 ],
            "friday": [ 3, 14, 25, 26 ],
            "saturday": [ 2, 13, 24, 4 ],
            "sunday": [ 8, 19, 30, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 254,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/lute-player.jpg',
          title: 'Lute Player',
          artist: 'Nicolas Tournier',
          year: '?',
          rule: {
            "monday": [ 8, 19, 30, 9 ],
            "tuesday": [ 7, 18, 29, 9 ],
            "wednesday": [ 6, 17, 28, 8 ],
            "thursday": [ 5, 16, 27, 28 ],
            "friday": [ 4, 15, 25, 27 ],
            "saturday": [ 3, 14, 25, 26 ],
            "sunday": [ 2, 13, 24, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 255,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-annunciation-1500.jpg',
          title: 'The Annunciation',
          artist: 'Jean Hey',
          year: '1500',
          rule: {
            "monday": [ 2, 13, 24, 4 ],
            "tuesday": [ 8, 19, 30, 9 ],
            "wednesday": [ 7, 18, 29, 9 ],
            "thursday": [ 6, 17, 28, 8 ],
            "friday": [ 5, 16, 27, 28 ],
            "saturday": [ 4, 15, 25, 27 ],
            "sunday": [ 3, 14, 25, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 256,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/goliath-extract-from-the-combat-between-david-and-goliath.jpg',
          title: 'Goliath, extract from the combat between David and Goliath',
          artist: 'Herrad of Landsberg',
          year: '?',
          rule: {
            "monday": [ 3, 14, 25, 26 ],
            "tuesday": [ 2, 13, 24, 4 ],
            "wednesday": [ 8, 19, 30, 9 ],
            "thursday": [ 7, 18, 29, 9 ],
            "friday": [ 6, 17, 28, 8 ],
            "saturday": [ 5, 16, 27, 28 ],
            "sunday": [ 4, 15, 25, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 257,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/untitled-2009.jpg',
          title: 'Untitled',
          artist: 'Dominique Gonzalez-Foerster',
          year: '2009',
          rule: {
            "monday": [ 4, 15, 25, 27 ],
            "tuesday": [ 3, 14, 25, 26 ],
            "wednesday": [ 2, 13, 24, 4 ],
            "thursday": [ 8, 19, 30, 9 ],
            "friday": [ 7, 18, 29, 9 ],
            "saturday": [ 6, 17, 28, 8 ],
            "sunday": [ 5, 16, 27, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 258,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/vois-y-elles-voyelles-rimbaud-2016-1.jpg',
          title: 'Vois Y Elles Voyelles (Rimbaud)',
          artist: 'Kim Prisu',
          year: '2016',
          rule: {
            "monday": [ 5, 16, 27, 28 ],
            "tuesday": [ 4, 15, 25, 27 ],
            "wednesday": [ 3, 14, 25, 26 ],
            "thursday": [ 2, 13, 24, 4 ],
            "friday": [ 8, 19, 30, 9 ],
            "saturday": [ 7, 18, 29, 9 ],
            "sunday": [ 6, 17, 28, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 259,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/berlin-liberty-1990.jpg',
          title: 'Berlin Liberty',
          artist: 'Jerome Mesnager',
          year: '1990',
          rule: {
            "monday": [ 7, 18, 29, 9 ],
            "tuesday": [ 6, 17, 28, 29 ],
            "wednesday": [ 5, 16, 26, 28 ],
            "thursday": [ 4, 15, 26, 27 ],
            "friday": [ 3, 14, 25, 5 ],
            "saturday": [ 9, 20, 31, 10 ],
            "sunday": [ 8, 19, 30, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 260,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/untitled-2001-2.jpg',
          title: 'Untitled',
          artist: 'Moon Pil Shim',
          year: '2001',
          rule: {
            "monday": [ 8, 19, 30, 10 ],
            "tuesday": [ 7, 18, 29, 9 ],
            "wednesday": [ 6, 17, 28, 29 ],
            "thursday": [ 5, 16, 26, 28 ],
            "friday": [ 4, 15, 26, 27 ],
            "saturday": [ 3, 14, 25, 5 ],
            "sunday": [ 9, 20, 31, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 261,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/new-yorkaise-i-huile-sur-toile-50x50cm-2013.jpg.jpg',
          title: 'New Yorkaise I',
          artist: 'Pietropoli Patrick',
          year: '2013',
          rule: {
            "monday": [ 9, 20, 31, 10 ],
            "tuesday":[ 8, 19, 30, 10 ],
            "wednesday":  [ 7, 18, 29, 9 ],
            "thursday": [ 6, 17, 28, 29 ],
            "friday": [ 5, 16, 26, 28 ],
            "saturday": [ 4, 15, 26, 27 ],
            "sunday": [ 3, 14, 25, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 262,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/eurydice-n-37-2001.jpg',
          title: 'Eurydice n.37',
          artist: 'Bracha L. Ettinger',
          year: '2001',
          rule: {
            "monday": [ 3, 14, 25, 5 ],
            "tuesday":[ 9, 20, 31, 10 ],
            "wednesday":  [ 8, 19, 30, 10 ],
            "thursday": [ 7, 18, 29, 9 ],
            "friday": [ 6, 17, 28, 29 ],
            "saturday": [ 5, 16, 26, 28 ],
            "sunday": [ 4, 15, 26, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 263,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/theatrical-composition-1981.jpg',
          title: 'Theatrical Composition',
          artist: 'Christian Boltanski',
          year: '1981',
          rule: {
            "monday": [ 4, 15, 26, 27 ],
            "tuesday":[ 3, 14, 25, 5 ],
            "wednesday":  [ 9, 20, 31, 10 ],
            "thursday": [ 8, 19, 30, 10 ],
            "friday": [ 7, 18, 29, 9 ],
            "saturday": [ 6, 17, 28, 29 ],
            "sunday": [ 5, 16, 26, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 264,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/justine-2-1976.jpg',
          title: 'Justine (2)',
          artist: 'Ivan Tovar',
          year: '1976',
          rule: {
            "monday": [ 5, 16, 26, 28 ],
            "tuesday":[ 4, 15, 26, 27 ],
            "wednesday":  [ 3, 14, 25, 5 ],
            "thursday": [ 9, 20, 31, 10 ],
            "friday": [ 8, 19, 30, 10 ],
            "saturday": [ 7, 18, 29, 9 ],
            "sunday": [ 6, 17, 28, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 265,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/arrachement-1990-3.jpg',
          title: 'Arrachement',
          artist: 'Andre-Pierre Arnal',
          year: '1990',
          rule: {
            "monday": [ 6, 17, 28, 29 ],
            "tuesday": [ 5, 16, 26, 28 ],
            "wednesday": [ 4, 15, 26, 27 ],
            "thursday": [ 3, 14, 25, 5 ],
            "friday": [ 9, 20, 31, 10 ],
            "saturday": [ 8, 19, 30, 10 ],
            "sunday": [ 7, 18, 29, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 266,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/shared-space-2004.jpg',
          title: 'Shared Space',
          artist: 'Genevieve Asse',
          year: '2004',
          rule: {
            "monday": [ 8, 19, 30, 10 ],
            "tuesday": [ 7, 18, 29, 30 ],
            "wednesday": [ 6, 17, 27, 29 ],
            "thursday": [ 5, 16, 27, 28 ],
            "friday": [ 4, 15, 26, 6 ],
            "saturday": [ 10, 21, 1, 11 ],
            "sunday": [ 9, 20, 31, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 267,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/les-gardes-bard-s-d-acier-1968.jpg',
          title: 'Les gardes bardés d\'acier',
          artist: 'Jacques Busse',
          year: '1968',
          rule: {
            "monday": [ 9, 20, 31, 11 ],
            "tuesday": [ 8, 19, 30, 10 ],
            "wednesday": [ 7, 18, 29, 30 ],
            "thursday": [ 6, 17, 27, 29 ],
            "friday": [ 5, 16, 27, 28 ],
            "saturday": [ 4, 15, 26, 6 ],
            "sunday": [ 10, 21, 1, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 268,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/oedipe-explique-l-nigme-du-sphinx-2002.jpg',
          title: 'Oedipe explique l\'énigme du sphinx',
          artist: 'Pol Bury',
          year: '2002',
          rule: {
            "monday": [ 10, 21, 1, 11 ],
            "tuesday": [ 9, 20, 31, 11 ],
            "wednesday": [ 8, 19, 30, 10 ],
            "thursday": [ 7, 18, 29, 30 ],
            "friday": [ 6, 17, 27, 29 ],
            "saturday": [ 5, 16, 27, 28 ],
            "sunday": [ 4, 15, 26, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 269,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-same-way.jpg',
          title: 'The same Way',
          artist: 'Jean Benoit',
          year: '?',
          rule: {
            "monday": [ 4, 15, 26, 6 ],
            "tuesday": [ 10, 21, 1, 11 ],
            "wednesday": [ 9, 20, 31, 11 ],
            "thursday": [ 8, 19, 30, 10 ],
            "friday": [ 7, 18, 29, 30 ],
            "saturday": [ 6, 17, 27, 29 ],
            "sunday": [ 5, 16, 27, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 270,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/vous-etes-vous-jamais-laisse-glisser-le-long-d-une-pente-1974.jpg',
          title: 'Vous-etes vous jamais laisse glisser le long d\'une pente',
          artist: 'Jean Messagier',
          year: '1974',
          rule: {
            "monday": [ 5, 16, 27, 28 ],
            "tuesday": [ 4, 15, 26, 6 ],
            "wednesday": [ 10, 21, 1, 11 ],
            "thursday": [ 9, 20, 31, 11 ],
            "friday": [ 8, 19, 30, 10 ],
            "saturday": [ 7, 18, 29, 30 ],
            "sunday": [ 6, 17, 27, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 271,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/le-soleil-rouge-1950.jpg',
          title: 'Le Soleil Rouge',
          artist: 'Zao Wou-Ki',
          year: '1950',
          rule: {
            "monday": [ 6, 17, 27, 29 ],
            "tuesday": [ 5, 16, 27, 28 ],
            "wednesday": [ 4, 15, 26, 6 ],
            "thursday": [ 10, 21, 1, 11 ],
            "friday": [ 9, 20, 31, 11 ],
            "saturday": [ 8, 19, 30, 10 ],
            "sunday": [ 7, 18, 29, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 272,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/portrait-d-une-am-ricaine.jpg',
          title: 'Portrait d\'une Américaine',
          artist: 'Maurice Boitel',
          year: '?',
          rule: {
            "monday": [ 7, 18, 29, 30 ],
            "tuesday": [ 6, 17, 27, 29 ],
            "wednesday": [ 5, 16, 27, 28 ],
            "thursday": [ 4, 15, 26, 6 ],
            "friday": [ 10, 21, 1, 11 ],
            "saturday": [ 9, 20, 31, 11 ],
            "sunday": [ 8, 19, 30, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 273,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/sitges-iglesia-roja-1981.jpg',
          title: 'Sitges – Iglesia Roja',
          artist: 'Carlos Nadal',
          year: '1981',
          rule: {
            "monday": [ 9, 20, 31, 11 ],
            "tuesday": [ 8, 19, 30, 31 ],
            "wednesday": [ 7, 18, 28, 30 ],
            "thursday": [ 6, 17, 28, 29 ],
            "friday": [ 5, 16, 27, 7 ],
            "saturday": [ 11, 22, 2, 12 ],
            "sunday": [ 10, 21, 1, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 274,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/composition-in-green.jpg',
          title: 'Composition in Green',
          artist: 'Natalia Dumitresco',
          year: '?',
          rule: {
            "monday": [ 10, 21, 1, 12 ],
            "tuesday": [ 9, 20, 31, 11 ],
            "wednesday": [ 8, 19, 30, 31 ],
            "thursday": [ 7, 18, 28, 30 ],
            "friday": [ 6, 17, 28, 29 ],
            "saturday": [ 5, 16, 27, 7 ],
            "sunday": [ 11, 22, 2, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 275,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-autumn-1974.jpg',
          title: 'The Autumn',
          artist: 'Aurel Cojan',
          year: '1974',
          rule: {
            "monday": [ 11, 22, 2, 12 ],
            "tuesday": [ 10, 21, 1, 12 ],
            "wednesday": [ 9, 20, 31, 11 ],
            "thursday": [ 8, 19, 30, 31 ],
            "friday": [ 7, 18, 28, 30 ],
            "saturday": [ 6, 17, 28, 29 ],
            "sunday": [ 5, 16, 27, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 276,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/nicole-boubant-1933.jpg',
          title: 'Nicole Boubant',
          artist: 'Wols',
          year: '1933',
          rule: {
            "monday": [ 5, 16, 27, 7 ],
            "tuesday": [ 11, 22, 2, 12 ],
            "wednesday": [ 10, 21, 1, 12 ],
            "thursday": [ 9, 20, 31, 11 ],
            "friday": [ 8, 19, 30, 31 ],
            "saturday": [ 7, 18, 28, 30 ],
            "sunday": [ 6, 17, 28, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 277,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/untitled-2 (1).jpg',
          title: 'Untitled',
          artist: 'Adrien Dax',
          year: '?',
          rule: {
            "monday": [ 6, 17, 28, 29 ],
            "tuesday": [ 5, 16, 27, 7 ],
            "wednesday": [ 11, 22, 2, 12 ],
            "thursday": [ 10, 21, 1, 12 ],
            "friday": [ 9, 20, 31, 11 ],
            "saturday": [ 8, 19, 30, 31 ],
            "sunday": [ 7, 18, 28, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 278,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/partage-1963.jpg',
          title: 'Partage',
          artist: 'Aurelie Nemours',
          year: '1963',
          rule: {
            "monday": [ 7, 18, 28, 30 ],
            "tuesday": [ 6, 17, 28, 29 ],
            "wednesday": [ 5, 16, 27, 7 ],
            "thursday": [ 11, 22, 2, 12 ],
            "friday": [ 10, 21, 1, 12 ],
            "saturday": [ 9, 20, 31, 11 ],
            "sunday": [ 8, 19, 30, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 279,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/composition-1938.jpg',
          title: 'Composition',
          artist: 'Gaston Chaissac',
          year: '1938',
          rule: {
            "monday": [ 8, 19, 30, 31 ],
            "tuesday": [ 7, 18, 28, 30 ],
            "wednesday": [ 6, 17, 28, 29 ],
            "thursday": [ 5, 16, 27, 7 ],
            "friday": [ 11, 22, 2, 12 ],
            "saturday": [ 10, 21, 1, 12 ],
            "sunday": [ 9, 20, 31, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 280,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/le-buisson-ardent-1955.jpg',
          title: 'Le buisson ardent',
          artist: 'Jean Bertholle',
          year: '1955',
          rule: {
            "monday": [ 10, 21, 1, 12 ],
            "tuesday": [ 9, 20, 31, 1 ],
            "wednesday": [ 8, 19, 29, 31 ],
            "thursday": [ 7, 18, 29, 30 ],
            "friday": [ 6, 17, 28, 8 ],
            "saturday": [ 12, 23, 3, 13 ],
            "sunday": [ 11, 22, 2, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 281,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/place-de-l-europe-gare-saint-lazare-paris-1932.jpg',
          title: 'Place de l\'Europe, Gare Saint Lazare, Paris',
          artist: 'Henri Cartier-Bresson',
          year: '1932',
          rule: {
            "monday": [ 11, 22, 2, 13 ],
            "tuesday": [ 10, 21, 1, 12 ],
            "wednesday": [ 9, 20, 31, 1 ],
            "thursday": [ 8, 19, 29, 31 ],
            "friday": [ 7, 18, 29, 30 ],
            "saturday": [ 6, 17, 28, 8 ],
            "sunday": [ 12, 23, 3, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 282,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/mannequin-en-vitrine-1935.jpg',
          title: 'Mannequin en vitrine',
          artist: 'Dora Maar',
          year: '1935',
          rule: {
            "monday": [ 12, 23, 3, 13 ],
            "tuesday": [ 11, 22, 2, 13 ],
            "wednesday": [ 10, 21, 1, 12 ],
            "thursday": [ 9, 20, 31, 1 ],
            "friday": [ 8, 19, 29, 31 ],
            "saturday": [ 7, 18, 29, 30 ],
            "sunday": [ 6, 17, 28, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 283,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/le-torchas-casqu-from-la-vie-amoureuse-des-spumif-res-1948.jpg',
          title: 'Le Torchas Casqué (from La Vie Amoureuse des Spumifères)',
          artist: 'Georges Hugnet',
          year: '1948',
          rule: {
            "monday": [ 6, 17, 28, 8 ],
            "tuesday": [ 12, 23, 3, 13 ],
            "wednesday": [ 11, 22, 2, 13 ],
            "thursday": [ 10, 21, 1, 12 ],
            "friday": [ 9, 20, 31, 1 ],
            "saturday": [ 8, 19, 29, 31 ],
            "sunday": [ 7, 18, 29, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 284,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/ainsi-qu-un-doigt-geant-1962.jpg',
          title: 'Ainsi qu\'un doigt geant',
          artist: 'Pierre Tal-Coat',
          year: '1962',
          rule: {
            "monday": [ 7, 18, 29, 30 ],
            "tuesday": [ 6, 17, 28, 8 ],
            "wednesday": [ 12, 23, 3, 13 ],
            "thursday": [ 11, 22, 2, 13 ],
            "friday": [ 10, 21, 1, 12 ],
            "saturday": [ 9, 20, 31, 1 ],
            "sunday": [ 8, 19, 29, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 285,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-desert-1938.jpg',
          title: 'The Desert',
          artist: 'John Ferren',
          year: '1938',
          rule: {
            "monday": [ 8, 19, 29, 31 ],
            "tuesday": [ 7, 18, 29, 30 ],
            "wednesday": [ 6, 17, 28, 8 ],
            "thursday": [ 12, 23, 3, 13 ],
            "friday": [ 11, 22, 2, 13 ],
            "saturday": [ 10, 21, 1, 12 ],
            "sunday": [ 9, 20, 31, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 286,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/toudr-1971-1.jpg',
          title: 'Toudré',
          artist: 'Maurice Esteve',
          year: '1971',
          rule: {
            "monday": [ 9, 20, 31, 1 ],
            "tuesday": [ 8, 19, 29, 31 ],
            "wednesday": [ 7, 18, 29, 30 ],
            "thursday": [ 6, 17, 28, 8 ],
            "friday": [ 12, 23, 3, 13 ],
            "saturday": [ 11, 22, 2, 13 ],
            "sunday": [ 10, 21, 1, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 287,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/untitled-1956.jpg',
          title: 'Untitled',
          artist: 'Germaine Richier',
          year: '1956',
          rule: {
            "monday": [ 11, 22, 2, 13 ],
            "tuesday": [ 10, 21, 1, 2 ],
            "wednesday": [ 9, 20, 30, 1 ],
            "thursday": [ 8, 19, 30, 31 ],
            "friday": [ 7, 18, 29, 9 ],
            "saturday": [ 13, 24, 4, 14 ],
            "sunday": [ 12, 23, 3, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 288,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/pink-leopard-1940.jpg',
          title: 'Pink Leopard',
          artist: 'Sanyu',
          year: '1940',
          rule: {
            "monday": [ 12, 23, 3, 14 ],
            "tuesday": [ 11, 22, 2, 13 ],
            "wednesday": [ 10, 21, 1, 2 ],
            "thursday": [ 9, 20, 30, 1 ],
            "friday": [ 8, 19, 30, 31 ],
            "saturday": [ 7, 18, 29, 9 ],
            "sunday": [ 13, 24, 4, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 289,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/composition-1928.jpg',
          title: 'Composition',
          artist: 'Michel Seuphor',
          year: '1928',
          rule: {
            "monday": [ 13, 24, 4, 14 ],
            "tuesday": [ 12, 23, 3, 14 ],
            "wednesday": [ 11, 22, 2, 13 ],
            "thursday": [ 10, 21, 1, 2 ],
            "friday": [ 9, 20, 30, 1 ],
            "saturday": [ 8, 19, 30, 31 ],
            "sunday": [ 7, 18, 29, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 290,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/woman-with-cat-mask-1930.jpg',
          title: 'Woman with cat mask',
          artist: 'Brassai',
          year: '1930',
          rule: {
            "monday": [ 7, 18, 29, 9 ],
            "tuesday": [ 13, 24, 4, 14 ],
            "wednesday": [ 12, 23, 3, 14 ],
            "thursday": [ 11, 22, 2, 13 ],
            "friday": [ 10, 21, 1, 2 ],
            "saturday": [ 9, 20, 30, 1 ],
            "sunday": [ 8, 19, 30, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 291,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/carr-de-couleurs-1960.jpg',
          title: 'Carré de couleurs',
          artist: 'Jean Fautrier',
          year: '1960',
          rule: {
            "monday": [ 8, 19, 30, 31 ],
            "tuesday": [ 7, 18, 29, 9 ],
            "wednesday": [ 13, 24, 4, 14 ],
            "thursday": [ 12, 23, 3, 14 ],
            "friday": [ 11, 22, 2, 13 ],
            "saturday": [ 10, 21, 1, 2 ],
            "sunday": [ 9, 20, 30, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 292,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/no-name-1(8).jpg',
          title: 'The Andalusian Reapers',
          artist: 'Andre Masson',
          year: '1935',
          rule: {
            "monday": [ 9, 20, 30, 1 ],
            "tuesday": [ 8, 19, 30, 31 ],
            "wednesday": [ 7, 18, 29, 9 ],
            "thursday": [ 13, 24, 4, 14 ],
            "friday": [ 12, 23, 3, 14 ],
            "saturday": [ 11, 22, 2, 13 ],
            "sunday": [ 10, 21, 1, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 293,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/les-m-tamorphoses-1929.jpg',
          title: 'Les Métamorphoses',
          artist: 'Jean Hugo',
          year: '1929',
          rule: {
            "monday": [ 10, 21, 1, 2 ],
            "tuesday": [ 9, 20, 30, 1 ],
            "wednesday": [ 8, 19, 30, 31 ],
            "thursday": [ 7, 18, 29, 9 ],
            "friday": [ 13, 24, 4, 14 ],
            "saturday": [ 12, 23, 3, 14 ],
            "sunday": [ 11, 22, 2, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 294,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/at-the-theatre-ebony-and-white.jpg',
          title: 'At the Theatre, Ebony and White',
          artist: 'Erte',
          year: '?',
          rule: {
            "monday": [ 12, 23, 3, 14 ],
            "tuesday": [ 11, 22, 2, 3 ],
            "wednesday": [ 10, 21, 31, 2 ],
            "thursday": [ 9, 20, 31, 1 ],
            "friday": [ 8, 19, 30, 10 ],
            "saturday": [ 14, 25, 5, 15 ],
            "sunday": [ 13, 24, 4, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 295,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/the-ball-july-14.jpg',
          title: 'The Ball July 14',
          artist: 'Ossip Zadkine',
          year: '1922',
          rule: {
            "monday": [ 13, 24, 4, 15 ],
            "tuesday": [ 12, 23, 3, 14 ],
            "wednesday": [ 11, 22, 2, 3 ],
            "thursday": [ 10, 21, 31, 2 ],
            "friday": [ 9, 20, 31, 1 ],
            "saturday": [ 8, 19, 30, 10 ],
            "sunday": [ 14, 25, 5, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 296,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/untitled-9.jpg',
          title: 'Untitled',
          artist: 'Jean Cocteau',
          year: '?',
          rule: {
            "monday": [ 14, 25, 5, 15 ],
            "tuesday": [ 13, 24, 4, 15 ],
            "wednesday": [ 12, 23, 3, 14 ],
            "thursday": [ 11, 22, 2, 3 ],
            "friday": [ 10, 21, 31, 2 ],
            "saturday": [ 9, 20, 31, 1 ],
            "sunday": [ 8, 19, 30, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 297,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/la-dame-au-chat-et-la-th-i-re-1928.jpg',
          title: 'La dame au chat et à la théière',
          artist: 'Le Corbusier',
          year: '1928',
          rule: {
            "monday": [ 8, 19, 30, 10 ],
            "tuesday": [ 14, 25, 5, 15 ],
            "wednesday": [ 13, 24, 4, 15 ],
            "thursday": [ 12, 23, 3, 14 ],
            "friday": [ 11, 22, 2, 3 ],
            "saturday": [ 10, 21, 31, 2 ],
            "sunday": [ 9, 20, 31, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 298,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/la-riviere-dans-l-ile-de-france.jpg',
          title: 'La riviere dans l\'Ile de France',
          artist: 'Jules Lefranc',
          year: '?',
          rule: {
            "monday": [ 9, 20, 31, 1 ],
            "tuesday": [ 8, 19, 30, 10 ],
            "wednesday": [ 14, 25, 5, 15 ],
            "thursday": [ 13, 24, 4, 15 ],
            "friday": [ 12, 23, 3, 14 ],
            "saturday": [ 11, 22, 2, 3 ],
            "sunday": [ 10, 21, 31, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 299,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/leafage-and-drops.jpg',
          title: 'Leafage and Drops',
          artist: 'Jean Arp',
          year: '1920',
          rule: {
            "monday": [ 10, 21, 31, 2 ],
            "tuesday": [ 9, 20, 31, 1 ],
            "wednesday": [ 8, 19, 30, 10 ],
            "thursday": [ 14, 25, 5, 15 ],
            "friday": [ 13, 24, 4, 15 ],
            "saturday": [ 12, 23, 3, 14 ],
            "sunday": [ 11, 22, 2, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 300,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/nude-1910.jpg',
          title: 'Nude',
          artist: 'Lajos Tihanyi',
          year: '1910',
          rule: {
            "monday": [ 11, 22, 2, 3 ],
            "tuesday": [ 10, 21, 31, 2 ],
            "wednesday": [ 9, 20, 31, 1 ],
            "thursday": [ 8, 19, 30, 10 ],
            "friday": [ 14, 25, 5, 15 ],
            "saturday": [ 13, 24, 4, 15 ],
            "sunday": [ 12, 23, 3, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 301,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/window-eiffel-tower.jpg',
          title: 'Window, Eiffel Tower',
          artist: 'Robert Delaunay',
          year: '1910',
          rule: {
            "monday": [ 13, 24, 4, 15 ],
            "tuesday": [ 12, 23, 3, 4 ],
            "wednesday": [ 11, 22, 1, 3 ],
            "thursday": [ 10, 21, 1, 2 ],
            "friday": [ 9, 20, 31, 11 ],
            "saturday": [ 15, 26, 6, 16 ],
            "sunday": [ 14, 25, 5, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 302,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/la-bouteille-1916.jpg',
          title: 'La bouteille',
          artist: 'Henri Laurens',
          year: '1916',
          rule: {
            "monday": [ 14, 25, 5, 16 ],
            "tuesday": [ 13, 24, 4, 15 ],
            "wednesday": [ 12, 23, 3, 4 ],
            "thursday": [ 11, 22, 1, 3 ],
            "friday": [ 10, 21, 1, 2 ],
            "saturday": [ 9, 20, 31, 11 ],
            "sunday": [ 15, 26, 6, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 303,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/nue-au-chapeau-de-paille.jpg',
          title: 'Nue au chapeau de paille',
          artist: 'Andre Dunoyer de Segonzac',
          year: '?',
          rule: {
            "monday": [ 15, 26, 6, 16 ],
            "tuesday": [ 14, 25, 5, 16 ],
            "wednesday": [ 13, 24, 4, 15 ],
            "thursday": [ 12, 23, 3, 4 ],
            "friday": [ 11, 22, 1, 3 ],
            "saturday": [ 10, 21, 1, 2 ],
            "sunday": [ 9, 20, 31, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 304,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/a-peacock-1906.jpg',
          title: 'A Peacock',
          artist: 'Jean Metzinger',
          year: '1906',
          rule: {
            "monday": [ 9, 20, 31, 11 ],
            "tuesday": [ 15, 26, 6, 16 ],
            "wednesday": [ 14, 25, 5, 16 ],
            "thursday": [ 13, 24, 4, 15 ],
            "friday": [ 12, 23, 3, 4 ],
            "saturday": [ 11, 22, 1, 3 ],
            "sunday": [ 10, 21, 1, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 305,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/out-of-this-world-stealers-of-light-by-the-queen-of-romania.jpg',
          title: 'Out of This World (Stealers of Light by the Queen of Romania)',
          artist: 'Edmund Dulac',
          year: '?',
          rule: {
            "monday": [ 10, 21, 1, 2 ],
            "tuesday": [ 9, 20, 31, 11 ],
            "wednesday": [ 15, 26, 6, 16 ],
            "thursday": [ 14, 25, 5, 16 ],
            "friday": [ 13, 24, 4, 15 ],
            "saturday": [ 12, 23, 3, 4 ],
            "sunday": [ 11, 22, 1, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 306,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/opera-and-the-café-de-la-paix.jpg',
          title: 'Opera and the Café de la Paix',
          artist: 'Edouard Cortes',
          year: '?',
          rule: {
            "monday": [ 11, 22, 1, 3 ],
            "tuesday": [ 10, 21, 1, 2 ],
            "wednesday": [ 9, 20, 31, 11 ],
            "thursday": [ 15, 26, 6, 16 ],
            "friday": [ 14, 25, 5, 16 ],
            "saturday": [ 13, 24, 4, 15 ],
            "sunday": [ 12, 23, 3, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 307,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/modele-a-la-guitare.jpg',
          title: 'MODELE A LA GUITARE',
          artist: 'Henri Le Fauconnier',
          year: '?',
          rule: {
            "monday": [ 12, 23, 3, 4 ],
            "tuesday": [ 11, 22, 1, 3 ],
            "wednesday": [ 10, 21, 1, 2 ],
            "thursday": [ 9, 20, 31, 11 ],
            "friday": [ 15, 26, 6, 16 ],
            "saturday": [ 14, 25, 5, 16 ],
            "sunday": [ 13, 24, 4, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 308,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/music-1904.jpg',
          title: 'Music',
          artist: 'Andre Derain',
          year: '1904',
          rule: {
            "monday": [ 14, 25, 5, 16 ],
            "tuesday": [ 13, 24, 4, 5 ],
            "wednesday": [ 12, 23, 2, 4 ],
            "thursday": [ 11, 22, 2, 3 ],
            "friday": [ 10, 21, 1, 12 ],
            "saturday": [ 16, 27, 7, 17 ],
            "sunday": [ 15, 26, 6, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 309,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/women-and-bulldog-1942.jpg',
          title: 'Women and Bulldog',
          artist: 'Francis Picabia',
          year: '1941 - 1942',
          rule: {
            "monday": [ 15, 26, 6, 17 ],
            "tuesday": [ 14, 25, 5, 16 ],
            "wednesday": [ 13, 24, 4, 5 ],
            "thursday": [ 12, 23, 2, 4 ],
            "friday": [ 11, 22, 2, 3 ],
            "saturday": [ 10, 21, 1, 12 ],
            "sunday": [ 16, 27, 7, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 310,
          user_id: 1,
          theme: 'French',
          img_path: './img/july/femme-avec-cigarette-1908.jpg',
          title: 'Femme avec cigarette',
          artist: 'Kees van Dongen',
          year: '1908',
          rule: {
            "monday": [ 16, 27, 7, 17 ],
            "tuesday": [ 15, 26, 6, 17 ],
            "wednesday": [ 14, 25, 5, 16 ],
            "thursday": [ 13, 24, 4, 5 ],
            "friday": [ 12, 23, 2, 4 ],
            "saturday": [ 11, 22, 2, 3 ],
            "sunday": [ 10, 21, 1, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('july_arts_id_seq', (SELECT MAX(id) FROM july_arts));");
    });
};
