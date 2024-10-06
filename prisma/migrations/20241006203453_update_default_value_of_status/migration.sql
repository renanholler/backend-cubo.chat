-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_tickets" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "client_name" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'OPEN'
);
INSERT INTO "new_tickets" ("client_name", "id", "status") SELECT "client_name", "id", "status" FROM "tickets";
DROP TABLE "tickets";
ALTER TABLE "new_tickets" RENAME TO "tickets";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
