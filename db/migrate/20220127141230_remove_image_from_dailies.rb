class RemoveImageFromDailies < ActiveRecord::Migration[6.1]
  def change
    remove_column :dailies, :image, :string
  end
end
