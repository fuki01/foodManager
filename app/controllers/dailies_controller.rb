class DailiesController < ApplicationController
  require 'securerandom'
  before_action :authenticate_student?, only: %i[new create]
  before_action :authenticate_student_or_user?, only: %i[index show]
  before_action :accsess_denied_student, only: [:index]
  before_action :accsess_denied_user, only: [:index]
  skip_before_action :verify_authenticity_token

  def index
    dailies = Daily.where(student_id: params[:student_id])
    # 同じ日数のデータをまとめる
    @dailies_group = dailies.group_by(&:day)
    # @dailies_groupをkeysでソートする
    @dailies_group = @dailies_group.sort.reverse.to_h
    # keyのみを取り出す
    @days = @dailies_group.keys

    first_bool = true
    tmp_day = ''
    @day_diffs = []

    @days.each do |day|
      if first_bool
        tmp_day = Date.parse(day)
        @day_diffs << 0
        first_bool = false
      else
        # 文字列を日付に変換
        day = Date.parse(day)
        @day_diffs << (day - tmp_day).to_i.abs
        tmp_day = day
      end
    end
  end

  def show
    @daily = Daily.find(params[:id])
    @comments = @daily.comments.order(created_at: :desc)
  end

  def new
    @daily = Daily.new
    @date = params[:date]
  end

  def create
    @daily = Daily.new(daily_params)
    puts daily_params
    @daily.student_id = current_student.id
    if params[:date].present?
      @daily.day = params[:date]
    else
      day = Time.zone.now.strftime('%Y-%m-%d')
      @daily.day = day
    end

    if @daily.save
      flash[:notice] = 'You have successfully created a daily'
      redirect_to "/dailies/#{current_student.id}/index"
    else
      flash[:alert] = 'Error creating daily'
      render 'new'
    end
  end

  def destroy
    @daily = Daily.find(params[:id])
    @daily.destroy
    redirect_to "/dailies/#{current_student.id}/index"
  end
  

  def stamp
    @daily = Daily.find(params[:id])
  end

  def canvas_save
    @daily = Daily.find(post_get_daily_params[:daily_id])
    @daily.image = post_get_daily_params[:image]
    if @daily.save
      redirect_to "/dailies/#{@daily.id}"
    else
      redirect_to "/dailies/#{@daily.id}/stamp"
    end
  end

  private

  def daily_params
    params.permit(:context, :image)
  end


  def post_get_daily_params
    params.permit(:daily_id, :image)
  end



end
