import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDataBase1627959485570 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createDatabase('woopDb', true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropDatabase('woopDb', true);
  }
}
