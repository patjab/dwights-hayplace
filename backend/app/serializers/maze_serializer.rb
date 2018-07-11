class MazeSerializer < ActiveModel::Serializer
  attributes :id, :size, :finished_time
  has_many :hay_patches
  has_many :characters
end
