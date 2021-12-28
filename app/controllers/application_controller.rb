class ApplicationController < ActionController::Base
  def after_sign_in_path_for(resource)
    user_home_path
  end

  def authenticate_student_or_user?
    unless current_student || current_user
      flash[:alert] = "You must be logged in to access this section"
      redirect_to root_path
    end
  end
  
  # どのユーザーがログインしているかを返却する
  def return_current_account_postion
    if current_student.present?
      return "student"
    elsif current_user.present?
      return "user"
    else
      return "none"
    end
  end
  include StudentHelper
end
