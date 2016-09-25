# Add admin user

User.find_or_initialize_by(id: 1) do |u|
  u.assign_attributes username: "admin",
    email: "admin@mail.com",
    password: "qwerty"

  u.save! validate: false
  u.activate!
  u.add_role :admin
end
