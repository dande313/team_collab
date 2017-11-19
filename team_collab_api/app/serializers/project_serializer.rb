class ProjectSerializer < ActiveModel::Serializer
	attributes :id, :title, :description, :github_repo_url, :assistance_needed
end