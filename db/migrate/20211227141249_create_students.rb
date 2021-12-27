class CreateStudents < ActiveRecord::Migration[6.1]
  def change
    create_table :students do |t|
      t.string :username, null: false
      t.string :password, null: false
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
