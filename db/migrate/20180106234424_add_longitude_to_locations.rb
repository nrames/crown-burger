class AddLongitudeToLocations < ActiveRecord::Migration[5.1]
  def change
    add_column :locations, :longitude, :string
  end
end
