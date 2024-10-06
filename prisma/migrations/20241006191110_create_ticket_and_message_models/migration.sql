-- CreateTable
CREATE TABLE "tickets" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "client_name" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'open'
);

-- CreateTable
CREATE TABLE "messages" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "sender" TEXT NOT NULL,
    "ticket_id" INTEGER NOT NULL,
    CONSTRAINT "messages_ticket_id_fkey" FOREIGN KEY ("ticket_id") REFERENCES "tickets" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
