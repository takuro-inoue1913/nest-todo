import { MigrationInterface, QueryRunner } from 'typeorm';

export class createItem1635910869869 implements MigrationInterface {
  name = 'createItem1635910869869';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "item" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "todo" varchar NOT NULL, "limit" datetime NOT NULL, "idDone" boolean NOT NULL DEFAULT (0), "deletePassword" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "item"`);
  }
}
