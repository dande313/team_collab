class Project < ApplicationRecord
	validates_presence_of :title, :description, :github_repo_url
end