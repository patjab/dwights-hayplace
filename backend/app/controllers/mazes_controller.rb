class MazesController < ApplicationController
  before_action :set_maze, only: [:show]

  def index
    @mazes = Maze.all
    render json: @mazes
  end

  def show
    render json: @maze
  end

  private
  def set_maze
    @maze = Maze.find(params[:id])
  end
end
