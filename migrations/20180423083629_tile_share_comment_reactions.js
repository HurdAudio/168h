'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tile_share_comment_reactions', function(table) {
    table.increments().primary();
    table.integer('user_author_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.integer('tile_share_comment_id').notNullable().defaultTo(1).references('id').inTable('tile_share_comments').onDelete('CASCADE').index();
    table.string('reaction').notNullable().defaultTo('thumbsUp');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tile_share_comment_reactions');
};
