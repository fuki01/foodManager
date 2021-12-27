class StudentController < ApplicationController
  before_action :authenticate_user!, only: [:index, :new, :create]

  def index
    @students = Student.where(user_id: current_user.id)
  end

  def show
    @student = Student.find(params[:id])
  end

  def new
    @student = Student.new
  end

  def create
    @student = Student.new(student_params)
    @student.user_id = current_user.id
    if @student.save
      redirect_to @student
    else
      flash[:notice] = "Error creating student"
      render 'new'
    end
  end

  private
    def student_params
      params.permit(:username, :password)
    end
end
