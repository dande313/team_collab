class Api::ProjectsController < ApplicationController
  def index
    @projects = Project.order("created_at DESC").all
    render json: @projects
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      render json: @project
    else
      render json: { errors: { message: "Project failed to save." } }
    end
  end

  def destroy
    id = (params[:id])
    @beer = Question.find(id)
    if @question
      @question.destroy
    else
      render json: { errors: { message: "Question not found." } }
    end
  end

  private
    def project_params
      params.require(:project).permit(:title, :description, :github_repo_url, :assistance_needed)
    end
end
