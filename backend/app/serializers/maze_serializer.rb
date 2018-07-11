class MazeSerializer < ActiveModel::Serializer
  attributes :id, :size, :finished_time, :players_current_row, :players_current_col, :maze_finish_row, :maze_finish_col
  has_many :hay_patches
  has_many :characters
end
