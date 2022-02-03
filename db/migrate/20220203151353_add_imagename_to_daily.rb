class AddImagenameToDaily < ActiveRecord::Migration[6.1]
  def change
    add_column :dailies, :image_name, :string
  end
end
