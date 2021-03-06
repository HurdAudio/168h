'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('november_tiles', function(table) {
    table.increments().primary();
    table.integer('user_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.string('theme').notNullable().defaultTo('monochromatic');
    table.string('type').notNullable().defaultTo('default');
    table.text('src_string').notNullable().defaultTo('');
    table.string('repeat_value').notNullable().defaultTo('no-repeat');
    table.string('size_value').notNullable().defaultTo('100%');
    table.string('color_dark').notNullable().defaultTo('#ffffff');
    table.string('color_medium').notNullable().defaultTo('#ffffff');
    table.string('color_light').notNullable().defaultTo('#ffffff');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('november_tiles');
};
