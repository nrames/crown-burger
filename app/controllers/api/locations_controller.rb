class Api::LocationsController < ApplicationController
  def index
    render json: Location.all
  end
  def show
    render json: @location
  end
  def create
    location = Location.new(location_params)
    if location.save
      render json: location
    else
      render json: { errors: location.errors.full_messages.join(',') }, status: 422
    end
  end
  def update
    if @location.update(location_params)
      render json: @location
    else
      render json: { errors: @location.errors.full_messages.join(',') }, status: 422
    end
  end
  def destroy
    @location.destroy
  end
  private
    def location_params
      params.require(:location).permit(:name, :address, :phone_number)
    end
end