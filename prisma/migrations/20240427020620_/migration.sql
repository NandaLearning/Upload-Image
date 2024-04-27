/*
  Warnings:

  - You are about to drop the `Gambar` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Gambar";

-- CreateTable
CREATE TABLE "akun" (
    "id" SERIAL NOT NULL,
    "gambar" TEXT[],

    CONSTRAINT "akun_pkey" PRIMARY KEY ("id")
);
