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
          user_avatar_url: 'https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/37583709_10217288463910608_4577623758084243456_n.jpg?_nc_cat=0&oh=6181b58d05576a31df3f5c6ce6b6dcfd&oe=5BCAA135',
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
          user_avatar_url: 'https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/37641088_261522804434606_8030668212985135104_n.jpg?_nc_cat=0&oh=ae47280826f35dc9ee8548a58b912c81&oe=5C006D40',
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
          user_avatar_url: 'https://pbs.twimg.com/profile_images/3511787126/e23647c60fe7cee53e4d2d37a50a255c_400x400.jpeg',
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
