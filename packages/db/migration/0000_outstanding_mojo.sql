CREATE TABLE IF NOT EXISTS "entities" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"type" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "entity_tags" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"entity_id" bigint NOT NULL,
	"key" text NOT NULL,
	"value" text NOT NULL,
	"value_type" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp with time zone,
	CONSTRAINT "entity_tags_entity_id_and_key_idx" UNIQUE("entity_id","key")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "entity_tags" ADD CONSTRAINT "entity_tags_entity_id_entities_id_fk" FOREIGN KEY ("entity_id") REFERENCES "public"."entities"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "entities_type_idx" ON "entities" USING btree ("type");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "entities_created_at_idx" ON "entities" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "entity_tags_entity_id_idx" ON "entity_tags" USING btree ("entity_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "entity_tags_key_idx" ON "entity_tags" USING btree ("key");