class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :title
      t.float :price
      t.text :description

      t.timestamps
    end
  end
end
