class ProjectSerializer < ActiveModel::Serializer
	attributes :id, :title, :info, :repo_url, :assistance_needed
end