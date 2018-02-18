'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages_reactions').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages_reactions').insert([
        {
          id: 1,
          user_author_id: 1,
          message_id: 1,
          reaction: 'thumbsUp'
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('messages_reactions_id_seq', (SELECT MAX(id) FROM messages_reactions));");
    });
};
