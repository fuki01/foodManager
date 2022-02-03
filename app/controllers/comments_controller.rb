class CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)

    flash[:alert] = 'Error creating student' unless @comment.save
    redirect_to daily_path(@comment.daily_id)
  end

  private

  def comment_params
    params.permit(:content, :daily_id, :position)
  end
end
