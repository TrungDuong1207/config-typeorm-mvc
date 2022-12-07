import { MigrationInterface, QueryRunner } from "typeorm"

export class updatePhoneBook1670406423527 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
			`ALTER TABLE phone_book ADD vip varchar(255) NOT NULL`
		);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
			`ALTER TABLE phone_book DROP COLUMN vip `
		);
    }

}
