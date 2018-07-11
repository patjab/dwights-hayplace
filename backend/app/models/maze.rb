class Maze < ApplicationRecord
  belongs_to :user
  has_many :characters
  has_many :hay_patches
end
