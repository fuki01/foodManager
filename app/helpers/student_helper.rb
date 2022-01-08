module StudentHelper
  def current_student
    @current_student ||= Student.find(session[:student_id]) if session[:student_id]
  end

  def authenticate_student?()
    unless current_student
      flash[:alert] = "You must be logged in to access this section"
      redirect_to root_path
    end
  end

  def accsess_denied_student
    if return_current_account_postion == "student"
      begin
        if Student.find(params[:student_id]).id != session[:student_id]
          flash[:alert] = "You can't access this page"
          redirect_to dailies_index_path(current_student.id)
        end
      rescue
        flash[:alert] = "You can't access this page"
        redirect_to dailies_index_path(current_student.id)
      end
    end
  end

  def accsess_denied_user
    if return_current_account_postion == "user"
      begin
        current_user.student.each do |student|
          if student == Student.find(params[:student_id])
            @denied = true
          end
        end
      rescue
        @denied = false
      end
      
      if @denied == false
        flash[:alert] = "You can't access this page"
        redirect_to user_home_path
      end
    end
  end
end
