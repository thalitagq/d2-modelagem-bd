import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrderItem1686436423945 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "order-items",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true,
            },
            {
              name: "order_id",
              type: "uuid",
            },
            {
              name: "name",
              type: "varchar",
            },
            {
              name: "description",
              type: "varchar",
            },
            {
              name: "value",
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
              name: "FKItemOrder",
              referencedTableName: "orders",
              referencedColumnNames: ["id"],
              columnNames: ["order_id"],
              onDelete: "SET NULL",
              onUpdate: "SET NULL",
            },
          ],
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("order_items")
    }

}
