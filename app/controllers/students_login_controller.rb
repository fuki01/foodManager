class StudentsLoginController < ApplicationController
  def new
    @student = Student.new
  end

  def create
    student_id = Student.find_by(student_id: params[:student_id])
    student_pass = Student.find_by(student_pass: params[:student_pass])
    if student_id && student_pass
      student_login(student_id)
      flash[:notice] = "ログインしました"
      redirect_to dailys_path
    else
      flash[:danger] = "ログインに失敗しました"
      redirect_to students_login_path
    end
  end
  private
  def student_params
    params.require(:student).permit(:student_id, :student_pass)
  end
end
