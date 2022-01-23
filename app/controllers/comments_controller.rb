class CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)

    if current_user.nil?
      @comment.position = "student"
    else
      @comment.position = "trainer"
    end
    if @comment.save
      redirect_to daily_path(@comment.daily_id)
    else
      flash[:alert] = "Error creating student"
      redirect_to daily_path(@comment.daily_id)
    end
  end

  private
  def comment_params
    params.permit(:content, :daily_id)
  end
end
