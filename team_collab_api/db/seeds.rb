User.create ([
			{ email: 'dande313@aol.com', password: 'abc123', admin: true},
			{ email: 'test@aol.com', password: 'abc123', admin: false}
	])

Project.create ([
	{ title: "Tower of Hanoi", description: "A Ruby CLI application, simulating the Tower of Hanoi, complete with difficulty settings and optional AI solver.", github_repo_url: "https://github.com/dande313/Hanoi_v3", assistance_needed: false},
	{ title: "Science Journal", description: "A Ruby on Rails Client, w/ JSON Front-end", github_repo_url: "https://github.com/dande313/university-science-journal-V2", assistance_needed: true},
	{ title: "Top BoardGames Ruby CLI", description: "A Ruby CLI Application, scrapping BoardGameGeek.com for the top rated boardgames", github_repo_url: "https://github.com/dande313/top_boardgames_ruby_cli", assistance_needed: false},
	{ title: "Team Collaborator", description: "A React/Redux Application with Rails API Backend", github_repo_url: "https://github.com/dande313/team_collab", assistance_needed: true}
	])

