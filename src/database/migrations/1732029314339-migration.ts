import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1732029314339 implements MigrationInterface {
  name = 'Migration1732029314339';

  accountTypes = ['Ahorros', 'Corriente'];
  clientTypes = ['Persona Natural', 'Empresa'];

  private async seedData(queryRunner: QueryRunner) {
    // Account types
    for (const accountType of this.accountTypes) {
      await queryRunner.query(
        `INSERT INTO "account_types" ("name") VALUES ($1)`,
        [accountType],
      );
    }

    // Client types
    for (const clientType of this.clientTypes) {
      await queryRunner.query(
        `INSERT INTO "client_types" ("name") VALUES ($1)`,
        [clientType],
      );
    }

    const accountTypes = await queryRunner.query(
      `SELECT id, name FROM "account_types"`,
    );

    const clientTypes = await queryRunner.query(
      `SELECT id, name FROM "client_types"`,
    );

    await queryRunner.query(
      `INSERT INTO "client_type_account_types" ("client_type_id", "account_type_id") VALUES ($1, $2)`,
      [
        clientTypes.find((ct) => ct.name === 'Persona Natural').id,
        accountTypes.find((at) => at.name === 'Ahorros').id,
      ],
    );
    await queryRunner.query(
      `INSERT INTO "client_type_account_types" ("client_type_id", "account_type_id") VALUES ($1, $2)`,
      [
        clientTypes.find((ct) => ct.name === 'Empresa').id,
        accountTypes.find((at) => at.name === 'Corriente').id,
      ],
    );
  }

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "account_types" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "enable" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_1944ce0e8e4a9f29fa1d4fbe4ce" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "client_types" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "enable" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_85832ef63aa395263d0b72b1ea1" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "client_type_account_types" ("client_type_id" integer NOT NULL, "account_type_id" integer NOT NULL, CONSTRAINT "PK_b058849603d33a412384a9a61e6" PRIMARY KEY ("client_type_id", "account_type_id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_b99bafe47877081554d497f1d0" ON "client_type_account_types" ("client_type_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_d8c743d2448aa31b67b1ee9f3f" ON "client_type_account_types" ("account_type_id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "client_type_account_types" ADD CONSTRAINT "FK_b99bafe47877081554d497f1d04" FOREIGN KEY ("client_type_id") REFERENCES "client_types"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "client_type_account_types" ADD CONSTRAINT "FK_d8c743d2448aa31b67b1ee9f3f6" FOREIGN KEY ("account_type_id") REFERENCES "account_types"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );

    await this.seedData(queryRunner);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "client_type_account_types" DROP CONSTRAINT "FK_d8c743d2448aa31b67b1ee9f3f6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "client_type_account_types" DROP CONSTRAINT "FK_b99bafe47877081554d497f1d04"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_d8c743d2448aa31b67b1ee9f3f"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_b99bafe47877081554d497f1d0"`,
    );
    await queryRunner.query(`DROP TABLE "client_type_account_types"`);
    await queryRunner.query(`DROP TABLE "client_types"`);
    await queryRunner.query(`DROP TABLE "account_types"`);
  }
}
