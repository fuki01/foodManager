class StudentController < ApplicationController
  before_action :authenticate_user!, only: %i[index new create]

  def index
    @students = Student.where(user_id: current_user.id)
    # @studentsをソートする　@students.dailies.updated_atの降順
    # @students = @students.sort_by { |student| student.dailies.order(updated_at: :desc).first.updated_at }
    puts("students", @students[0].dailies[0].updated_at)
    session[:student_id] = nil
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
      flash[:notice] = 'You have successfully created a student'
      redirect_to '/user/home'
    else
      flash[:alert] = 'Error creating student'
      render 'new'
    end
  end

  def student_session_add
    session[:student_id] = params[:student_id]
    redirect_to dailies_path
  end

  def loginform
    @student = Student.new
  end

  def login
    student_username = Student.find_by(username: params[:username])
    student_password = Student.find_by(password: params[:password])
    # 例外処理
    begin
      if student_username.id == student_password.id
        session[:student_id] = student_username.id
        flash[:notice] = 'ログインに成功しました'
        redirect_to dailies_index_path(current_student.id)
      else
        flash[:alert] = 'ログインに失敗しました'
        redirect_to root_path
      end
    rescue StandardError
      flash[:alert] = 'ログインに失敗しました'
      redirect_to root_path
    end
  end

  def logout
    session[:student_id] = nil
    flash[:notice] = 'ログアウトしました'
    redirect_to student_loginform_path
  end

  private

  def student_params
    params.permit(:username, :password)
  end
end
