class Api::MealsController < ApplicationController
  def index
    render json: Meal.all
  end
  def show
    render json: @meal
  end
  def create
    meal = Meal.new(meal_params)
    if meal.save
      render json: meal
    else
      render json: { errors: meal.errors.full_messages.join(',') }, status: 422
    end
  end
  def update
    if @meal.update(meal_params)
      render json: @meal
    else
      render json: { errors: @meal.errors.full_messages.join(',') }, status: 422
    end
  end
  def destroy
    @meal.destroy
  end
  private
    def meal_params
      params.require(:meal).permit(:price, :description, :image)
    end
end
