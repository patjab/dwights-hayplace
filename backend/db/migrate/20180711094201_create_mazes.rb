class CreateMazes < ActiveRecord::Migration[5.2]
  def change
    create_table :mazes do |t|
      t.integer :size, :default => 6
      t.integer :finished_time
      t.integer :user_id

      t.timestamps
    end
  end
end
