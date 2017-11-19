class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :description
      t.string :github_repo_url
      t.boolean :assistance_needed
      t.integer :ibu
      t.timestamps
    end
  end
end
