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
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('july_arts_id_seq', (SELECT MAX(id) FROM july_arts));");
    });
};
