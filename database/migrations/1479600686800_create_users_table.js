'use strict';

const Schema = use('Schema');

class UsersTableSchema extends Schema {

  up() {
    this.create('users', (table) => {
      table.increments();
      // table.string('username', 80).notNullable().unique()
      table.string('name', 254);
      table.string('email', 254).notNullable().unique();
      table.string('password', 60).notNullable();
      table.boolean('is_shop_owner').default(false);
      table.boolean('is_admin').default(false);

      table.timestamps();
    });
  }

  down() {
    this.drop('users');
  }

}

module.exports = UsersTableSchema;
