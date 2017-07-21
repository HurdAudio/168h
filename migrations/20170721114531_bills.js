'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bills', function(table) {
    table.increments().primary();
    table.integer('user_id').notNullable().defaultTo(1).references('id').inTable('users').onDelete('CASCADE').index();
    table.string('name').notNullable().defaultTo('');
    table.decimal('amount_due').defaultTo(null);
    table.date('due_date').notNullable().defaultTo('1970-01-01');
    table.boolean('is_paid').notNullable().defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('bills');
};
