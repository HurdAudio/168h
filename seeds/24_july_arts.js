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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
          theme: 'french revolution',
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
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('july_arts_id_seq', (SELECT MAX(id) FROM july_arts));");
    });
};
