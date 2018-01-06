20.times do
  Product.create(
    title: Faker::Food.dish,
    price: Faker::Commerce.price,
    description: Faker::Lorem.sentence
  )
end

10.times do
  Location.create(
    address:Faker::Address.street_address,
    phone_number: Faker::Company.duns_number,
    name: Faker::Company.name
  )
end

1.times do
  User.create(
    email: 'test@test.com',
    password: 'password'
  )
end

puts 'seeded'