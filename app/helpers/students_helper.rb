module StudentsHelper

  # idをセッションに保存する
  def student_login(student)
    session[:student_id] = student.id
    puts("session[:s_id] = #{session[:student_id]}")
  end


  def current_student
    if session[:student_id]
      @current_user ||= Student.find_by(id: 1)
      puts("@current_user: #{@current_user}")
    else
      puts("session[:student_id] is nil")

    end

  end

  def logged_in_student?
    !current_student.nil?
  end

  def current_student?(student)
    student == current_student
  end

  def student_log_out
    session.delete(:student_id)
    @current_student = nil
  end
end
