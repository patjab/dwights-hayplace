class CreateMazes < ActiveRecord::Migration[5.2]
  def change
    create_table :mazes do |t|
      t.integer :size, :default => 6
      t.integer :finished_time
      t.integer :user_id

      t.integer :players_current_row, :default => 3
      t.integer :players_current_col, :default => 0

      t.timestamps
    end
  end
end
