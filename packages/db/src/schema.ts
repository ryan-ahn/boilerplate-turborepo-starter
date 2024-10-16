import {
  bigint,
  bigserial,
  index,
  pgTable,
  text,
  timestamp,
  unique,
} from "drizzle-orm/pg-core";

export const entitiesTable = pgTable(
  "entities",
  {
    id: bigserial("id", { mode: "number" }).primaryKey(),
    type: text("type").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    deletedAt: timestamp("deleted_at", { withTimezone: true }),
  },
  (table) => ({
    typeIdx: index("entities_type_idx").on(table.type),
    createdAtIdx: index("entities_created_at_idx").on(table.createdAt),
  }),
);

export const entityTagsTable = pgTable(
  "entity_tags",
  {
    id: bigserial("id", { mode: "number" }).primaryKey(),
    entityId: bigint("entity_id", { mode: "number" })
      .notNull()
      .references(() => entitiesTable.id),
    key: text("key").notNull(),
    value: text("value").notNull(),
    valueType: text("value_type").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    deletedAt: timestamp("deleted_at", { withTimezone: true }),
  },
  (table) => ({
    entityIdIdx: index("entity_tags_entity_id_idx").on(table.entityId),
    keyIdx: index("entity_tags_key_idx").on(table.key),
    uniqueEntityIdAndKeyIdx: unique("entity_tags_entity_id_and_key_idx").on(
      table.entityId,
      table.key,
    ),
  }),
);
