-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_messages" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "sender" TEXT NOT NULL,
    "ticket_id" INTEGER NOT NULL,
    CONSTRAINT "messages_ticket_id_fkey" FOREIGN KEY ("ticket_id") REFERENCES "tickets" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_messages" ("content", "id", "sender", "ticket_id") SELECT "content", "id", "sender", "ticket_id" FROM "messages";
DROP TABLE "messages";
ALTER TABLE "new_messages" RENAME TO "messages";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
