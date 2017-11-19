User.create ([
			{ email: 'dande313@aol.com', password: 'abc123', admin: true},
			{ email: 'test@aol.com', password: 'abc123', admin: false}
	])

Project.create ([
	{ ibu: 1, title: "Tower of Hanoi", description: "A Ruby CLI application, simulating the Tower of Hanoi, complete with difficulty settings and optional AI solver.", github_repo_url: "https://github.com/dande313/Hanoi_v3", assistance_needed: false},
	{ ibu: 2, title: "Science Journal", description: "A Ruby on Rails Client, w/ JSON Front-end", github_repo_url: "https://github.com/dande313/university-science-journal-V2", assistance_needed: true},
	{ ibu: 3, title: "Top BoardGames Ruby CLI", description: "A Ruby CLI Application, scrapping BoardGameGeek.com for the top rated boardgames", github_repo_url: "https://github.com/dande313/top_boardgames_ruby_cli", assistance_needed: false},
	{ ibu: 4, title: "Team Collaborator", description: "A React/Redux Application with Rails API Backend", github_repo_url: "https://github.com/dande313/team_collab", assistance_needed: true}
	])

