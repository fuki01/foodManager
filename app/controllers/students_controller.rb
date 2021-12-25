class StudentsController < ApplicationController
  before_action :authenticate, only: [:index, :new, :create]
  def index
    # トレーナが登録した学生の一覧を表示する
    user = current_user
    @students = user.students
  end

  def new
    @student = Student.new
  end

  def create
    id = random_string(10)
    password = random_string(10)
    user_id = current_user.id
    @student = Student.new(user_id: user_id,student_id: id, student_pass: password)
    if @student.save
      flash[:notice] = "登録が完了しました"
      redirect_to students_path
    else
      render 'new'
    end
  end

  # ランダムな文字列を生成する
  def random_string(n)
    # ランダムな文字列を生成する
    (0...n).map { (65 + rand(26)).chr }.join
  end
end
