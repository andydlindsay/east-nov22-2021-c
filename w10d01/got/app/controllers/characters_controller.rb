class CharactersController < ApplicationController
  def index
    city = City.find params[:city_id] # req.params.city_id
    characters = city.characters

    render json: {
      city: city,
      characters: characters,
      one_more_thing: "something else"
    }
  end
end
