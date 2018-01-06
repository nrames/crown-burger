class CreateMeals < ActiveRecord::Migration[5.1]
  def change
    create_table :meals do |t|
      t.text :description
      t.float :price
      t.string :image

      t.timestamps
    end
  end
end
