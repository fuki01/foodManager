class CreateDayilies < ActiveRecord::Migration[6.1]
  def change
    create_table :dayilies do |t|
      t.references :student, foreign_key: true, null: false
      t.references :user_id, foreign_key: true, null: false
      t.text :context

      t.timestamps
    end
  end
end
