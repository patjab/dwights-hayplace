# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_07_11_103022) do

  create_table "characters", force: :cascade do |t|
    t.integer "current_coordinate_row"
    t.integer "current_coordinate_col"
    t.integer "maze_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "hay_patches", force: :cascade do |t|
    t.integer "current_coordinate_row"
    t.integer "current_coordinate_col"
    t.integer "maze_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "mazes", force: :cascade do |t|
    t.integer "size", default: 6
    t.integer "finished_time"
    t.integer "user_id"
    t.integer "players_current_row", default: 3
    t.integer "players_current_col", default: 0
    t.integer "maze_finish_row", default: 3
    t.integer "maze_finish_col", default: 5
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
