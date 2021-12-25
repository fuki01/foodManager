class CreateStudents < ActiveRecord::Migration[6.1]
  def change
    create_table :students do |t|
      t.references :user, foreign_key: true, null: false
      t.text :student_id, null: false
      t.text :student_pass, null: false

      t.timestamps
    end
  end
end
