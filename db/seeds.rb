Product.create(title: 'Crown Burger', price: 6.29, description: Faker::Lorem.sentence)
Product.create(title: 'Junior Crown Burger', price: 5.29 , description: Faker::Lorem.sentence)
Product.create(title: 'Bacon Cheese Burger', price: 6.29 , description: Faker::Lorem.sentence)
Product.create(title: 'Jr. Burger', price: 3.49 , description: Faker::Lorem.sentence)
Product.create(title: 'Hamburger', price: 4.49 , description: Faker::Lorem.sentence)
Product.create(title: 'Cheeseburger', price: 4.89 , description: Faker::Lorem.sentence)
Product.create(title: 'DBL Hamburger', price: 5.89 , description: Faker::Lorem.sentence)
Product.create(title: 'DBL Cheeseburger', price: 6.79 , description: Faker::Lorem.sentence)
Product.create(title: 'Chili Hamburger', price: 5.99 , description: Faker::Lorem.sentence)
Product.create(title: 'Garden Hamburger', price: 5.49 , description: Faker::Lorem.sentence)
Product.create(title: 'Mushroom Swiss Burger', price: 5.99 , description: Faker::Lorem.sentence)
Product.create(title: 'Jalepeno Burger', price: 5.99 , description: Faker::Lorem.sentence)

10.times do
  Location.create(
    address: Faker::Address.street_address,
    phone_number: Faker::PhoneNumber.phone_number,
    name: Faker::Company.name,
    latitude: Faker::Address.latitude,
    longitude: Faker::Address.longitude
  )
end

1.times do
  User.create(
    email: 'test@test.com',
    password: 'password'
  )
end

puts 'seeded'
