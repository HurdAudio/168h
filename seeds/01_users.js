'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          name: 'Devin Hurd',
          email: 'devin@devinhurd.com',
          hashed_password: '$2a$12$zlJZuGFGcqgLQyy/nVtoQeafv47g8dNTGTJL/x7EmSbPSiFLi.aMS',
          is_admin: true,
          user_avatar_url: 'https://media.licdn.com/dms/image/C5603AQFLD_nG1nXJgw/profile-displayphoto-shrink_200_200/0?e=1533772800&v=beta&t=6_zhjMUC7FVn7LnFCxRIufdtlG6BV7BEwPM9eUtCGRM',
          associates: {
            "friends": [ 2, 3 ]
          },
          security: {
            "key": "nYeYs~_OHOXrL_XZ8IK3i8",
            "value": "PFIQefgqVYZPdaJcy09nVT"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          name: 'Ginger DeRusha',
          email: 'mayacat505@gmail.com',
          hashed_password: '$2a$12$zlJZuGFGcqgLQyy/nVtoQeafv47g8dNTGTJL/x7EmSbPSiFLi.aMS',
          is_admin: false,
          user_avatar_url: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/19105867_209052646348289_2681967601890487066_n.jpg?_nc_cat=0&oh=002009e9f6318b54291f9a3d3368d790&oe=5BD335F4',
          associates: {
            "friends": [ 1, 3 ]
          },
          security: {
            "key": "nYeYs~_OHOXrL_XZ8IK3i8",
            "value": "PFIQefgqVYZPdaJcy09nVT"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          name: 'Lucifer Sam',
          email: 'cia_pope@yahoo.com',
          hashed_password: '$2a$12$zlJZuGFGcqgLQyy/nVtoQeafv47g8dNTGTJL/x7EmSbPSiFLi.aMS',
          is_admin: false,
          user_avatar_url: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/1964977_10203532053928956_1620738254_n.jpg?oh=912289bc56416424f7d2e4ef3bfb8604&oe=5B41AE92',
          associates: {
            "friends": [ 1, 2 ]
          },
          security: {
            "key": "nYeYs~_OHOXrL_XZ8IK3i8",
            "value": "PFIQefgqVYZPdaJcy09nVT"
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));");
    });
};
