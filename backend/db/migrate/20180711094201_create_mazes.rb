class CreateMazes < ActiveRecord::Migration[5.2]
  def change
    create_table :mazes do |t|
      t.integer :size
      t.integer :finished_time
      t.integer :user_id

      t.timestamps
    end
  end
end
