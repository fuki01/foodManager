class CreateDailies < ActiveRecord::Migration[6.1]
  def change
    create_table :dailies do |t|
      t.references :student, null: false
      t.string :day
      t.string :context
      t.string :image

      t.timestamps
    end
  end
end
