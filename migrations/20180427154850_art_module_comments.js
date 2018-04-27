'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('art_module_comments', function(table) {
    table.increments().primary();
    table.integer('user_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.integer('art_module').notNullable().defaultTo(1).references('id').inTable('art_modules').onDelete('CASCADE').index();
    table.text('comment').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('art_module_comments');
};
