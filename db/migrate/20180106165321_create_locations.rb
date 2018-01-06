class CreateLocations < ActiveRecord::Migration[5.1]
  def change
    create_table :locations do |t|
      t.text :address
      t.integer :phone_number
      t.string :name

      t.timestamps
    end
  end
end
