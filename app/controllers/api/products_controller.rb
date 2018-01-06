class Api::ProductsController < ApplicationController
  def index
    render json: Product.all
  end
  def show
    render json: @product
  end
  def create
    product = Product.new(product_params)
    if product.save
      render json: product
    else
      render json: { errors: product.errors.full_messages.join(',') }, status: 422
    end
  end
  def update
    if @product.update(product_params)
      render json: @product
    else
      render json: { errors: @product.errors.full_messages.join(',') }, status: 422
    end
  end
  def destroy
    @product.destroy
  end
  private
    def product_params
      params.require(:product).permit(:price, :description, :title)
    end
end
