# Add admin user

data = { username: "admin", email: "admin@mail.com", password: "qwerty" }
admin = User.find_or_initialize_by(id: 1)
admin.assign_attributes(data)
admin.send(:encrypt_password)

puts " - Admin #{data}"

admin.save!(validate: false)
admin.activate!
admin.add_role(:admin)
