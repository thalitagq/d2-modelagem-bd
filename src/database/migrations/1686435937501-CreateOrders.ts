import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrders1686435937501 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "orders",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true,
            },
            {
              name: "user_id",
              type: "uuid",
            },
            {
              name: "items_amount",
              type: "numeric",
            },
            {
              name: "total",
              type: "numeric",
            },
            {
              name: "created_at",
              type: "timestamp",
              default: "now()",
            },
          ],
          foreignKeys: [
            {
              name: "FKIOrderUser",
              referencedTableName: "users",
              referencedColumnNames: ["id"],
              columnNames: ["user_id"],
              onDelete: "SET NULL",
              onUpdate: "SET NULL",
            },
          ],
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("orders")
    }
}
