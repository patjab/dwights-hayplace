simple_hay_patches = [[	0	,	0	]	,
[	0	,	1	]	,
[	0	,	2	]	,
[	0	,	3	]	,
[	0	,	4	]	,
[	0	,	5	]	,
[	1	,	0	]	,
[	1	,	1	]	,
[	2	,	0	]	,
[	2	,	1	]	,
[	2	,	3	]	,
[	2	,	4	]	,
[	3	,	3	]	,
[	3	,	4	]	,
[	4	,	0	]	,
[	4	,	1	]	,
[	4	,	2	]	,
[	4	,	3	]	,
[	4	,	4	]	,
[	4	,	5	]	,
[	5	,	0	]	,
[	5	,	1	]	,
[	5	,	2	]	,
[	5	,	3	]	,
[	5	,	4	]	,
[	5	,	5	]	]


User.destroy_all
Maze.destroy_all
HayPatch.destroy_all

u = User.create(username: 'dwideschrude')
m = Maze.create(user: u)

simple_hay_patches.each do |coordinate|
  HayPatch.create(current_coordinate_row: coordinate[0], current_coordinate_col: coordinate[1], maze: m)
end
