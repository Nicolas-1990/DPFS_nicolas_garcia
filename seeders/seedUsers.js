const bcrypt = require("bcryptjs");
const db = require("../src/database/models/index");

async function seedUsers() {
  try {
    console.log("Seeding users...");

    const hash = await bcrypt.hash("123456", 10);

    await db.User.destroy({ where: {}, truncate: true });

    await db.User.bulkCreate([
      {
        first_name: "Administrador",
        last_name: "Test",
        email: "admin@test.com",
        password: hash,
        role: "admin",
        avatar: "admin.jpeg"
      },
      {
        first_name: "Usuario",
        last_name: "Test",
        email: "user@test.com",
        password: hash,
        role: "user",
        avatar: "user.jpeg"
      }
    ]);

    console.log("✅ Users creados correctamente");
    process.exit();

  } catch (error) {
    console.error("❌ Error seeding:", error);
    process.exit();
  }
}

seedUsers();