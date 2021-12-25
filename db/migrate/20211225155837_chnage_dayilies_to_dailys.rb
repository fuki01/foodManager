class ChnageDayiliesToDailys < ActiveRecord::Migration[6.1]
  def change
    rename_table :dayilies, :dailys
  end
end
