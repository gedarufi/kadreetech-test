import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1732116123182 implements MigrationInterface {
    name = 'Migration1732116123182'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clients" ("id" SERIAL NOT NULL, "firstName" character varying(100) NOT NULL, "lastName" character varying(100) NOT NULL, "phoneNumber" character varying(100) NOT NULL, "email" character varying(100) NOT NULL, "document" character varying(100) NOT NULL, "enable" boolean NOT NULL DEFAULT true, "clientTypeId" integer, CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "accounts" ("id" SERIAL NOT NULL, "balance" numeric(15,2) NOT NULL DEFAULT '0', "locked" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "ownerId" integer, "accountTypeId" integer, "cityId" integer, CONSTRAINT "PK_5a7a02c20412299d198e097a8fe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "account_movements" ("id" SERIAL NOT NULL, "amount" numeric(15,2) NOT NULL, "type" "public"."account_movements_type_enum" NOT NULL, "localMovement" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "accountId" integer, "cityId" integer, CONSTRAINT "PK_c926e307c87d5729d5d85b6db1e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "accounts" DROP COLUMN "locked"`);
        await queryRunner.query(`ALTER TABLE "accounts" DROP COLUMN "accountTypeId"`);
        await queryRunner.query(`ALTER TABLE "account_movements" DROP COLUMN "localMovement"`);
        await queryRunner.query(`ALTER TABLE "accounts" ADD "locked" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "accounts" ADD "accountTypeId" integer`);
        await queryRunner.query(`ALTER TABLE "account_movements" ADD "localMovement" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "FK_83efa5a29d41d5fef6555e133ed" FOREIGN KEY ("clientTypeId") REFERENCES "client_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "accounts" ADD CONSTRAINT "FK_2cb7f7a1dc3b84c8cde2b930944" FOREIGN KEY ("ownerId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "accounts" ADD CONSTRAINT "FK_0371319ee6dc789cc1ee11cf845" FOREIGN KEY ("accountTypeId") REFERENCES "account_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "accounts" ADD CONSTRAINT "FK_296ff3f66c067b1be45922717e5" FOREIGN KEY ("cityId") REFERENCES "divipola"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "account_movements" ADD CONSTRAINT "FK_dae89f38e90f02a194f57608f5a" FOREIGN KEY ("accountId") REFERENCES "accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "account_movements" ADD CONSTRAINT "FK_f8a1f795bbeabd7ffe6a771fe8b" FOREIGN KEY ("cityId") REFERENCES "divipola"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "account_movements" DROP CONSTRAINT "FK_f8a1f795bbeabd7ffe6a771fe8b"`);
        await queryRunner.query(`ALTER TABLE "account_movements" DROP CONSTRAINT "FK_dae89f38e90f02a194f57608f5a"`);
        await queryRunner.query(`ALTER TABLE "accounts" DROP CONSTRAINT "FK_296ff3f66c067b1be45922717e5"`);
        await queryRunner.query(`ALTER TABLE "accounts" DROP CONSTRAINT "FK_0371319ee6dc789cc1ee11cf845"`);
        await queryRunner.query(`ALTER TABLE "accounts" DROP CONSTRAINT "FK_2cb7f7a1dc3b84c8cde2b930944"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "FK_83efa5a29d41d5fef6555e133ed"`);
        await queryRunner.query(`ALTER TABLE "account_movements" DROP COLUMN "localMovement"`);
        await queryRunner.query(`ALTER TABLE "accounts" DROP COLUMN "accountTypeId"`);
        await queryRunner.query(`ALTER TABLE "accounts" DROP COLUMN "locked"`);
        await queryRunner.query(`ALTER TABLE "account_movements" ADD "localMovement" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "accounts" ADD "accountTypeId" integer`);
        await queryRunner.query(`ALTER TABLE "accounts" ADD "locked" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`DROP TABLE "account_movements"`);
        await queryRunner.query(`DROP TABLE "accounts"`);
        await queryRunner.query(`DROP TABLE "clients"`);
    }

}
