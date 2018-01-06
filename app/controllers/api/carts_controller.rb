class Api::CartsController < ApplicationController
  

  def index
    render json: Cart.all
  end
  def show
    render json: @cart
  end
  def create
    cart = Cart.new(cart_params)
    if cart.save
      render json: cart
    else
      render json: { errors: cart.errors.full_messages.join(',') }, status: 422
    end
  end
  def update
    if @cart.update(cart_params)
      render json: @cart
    else
      render json: { errors: @cart.errors.full_messages.join(',') }, status: 422
    end
  end
  def destroy
    @cart.destroy
  end
  private
    def cart_params
      params.require(:cart).permit(:price, :description, :image)
    end
end
