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
          user_avatar_url: 'https://media.licdn.com/dms/image/C5603AQFLD_nG1nXJgw/profile-displayphoto-shrink_200_200/0?e=1527822000&v=alpha&t=_sHEOD8fj-dYwo9oPE1uKIOwpdf61K0E4R1MdutVFys',
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
          user_avatar_url: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/27657238_192083014711919_3782297055876843888_n.jpg?_nc_cat=0&oh=c49cf96452423adbc67a8ab05f158f03&oe=5B32206F',
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
