class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :info
      t.string :repo_url
      t.boolean :assistance_needed, :default => false
      t.timestamps
    end
  end
end
