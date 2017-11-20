class Project < ApplicationRecord
	validates_presence_of :title, :info
end