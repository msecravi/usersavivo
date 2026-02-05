export async function getAllUsers(pool) {
  const [rows] = await pool.query(
    `SELECT
      id,
      first_name AS firstName,
      last_name AS lastName,
      company_name AS companyName,
      company_title AS companyTitle,
      country
     FROM users
     ORDER BY id ASC`
  )

  const users = rows.map((r) => ({
    id: r.id,
    firstName: r.firstName,
    lastName: r.lastName,
    company: { name: r.companyName, title: r.companyTitle },
    address: { country: r.country }
  }))

  return { users, total: users.length, skip: 0, limit: users.length }
}
