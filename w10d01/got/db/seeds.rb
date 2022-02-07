# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "starting the seeds"

puts "generating the cities"

10.times do
  City.create(
    name: Faker::TvShows::GameOfThrones.city
  )
end

puts "grab the newly created cities"

cities = City.all

puts "generating the characters"

30.times do
  Character.create(
    name: Faker::TvShows::GameOfThrones.character,
    quote: Faker::TvShows::GameOfThrones.quote,
    city: cities.sample
  )
end

puts "all done!"
