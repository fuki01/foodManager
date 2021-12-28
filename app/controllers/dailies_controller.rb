class DailiesController < ApplicationController
  require 'securerandom'

  def index
    dailies = Daily.where(student_id: current_student.id)
    # 同じ日数のデータをまとめる
    @dailies_group = dailies.group_by(&:day)
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
        @day_diffs << ((day - tmp_day).to_i).abs
        # @day_diffs << day - tmp_day
        tmp_day = day
      end
    end
    puts @day_diffs
  end

  def new
    @daily = Daily.new
    @date = params[:date]
  end

  def create
    @daily = Daily.new(
      context: params[:context]
    )
    # 画像の保存
    if params[:image]
      # Dailieの一番最後のimageを取得する
      filename = SecureRandom.base64(8) + params[:image].original_filename
      @daily.image = filename
      File.binwrite("public/dailies/#{filename}", params[:image].read)
    end

    @daily.student_id = current_student.id

    if params[:date].present?
      @daily.day = params[:date]
    else
      day = Time.zone.now.strftime("%Y-%m-%d")
      @daily.day = day
    end
    # @daily.day = '2021-12-17'

    if @daily.save
      flash[:notice] = "You have successfully created a daily"
      redirect_to dailies_path
    else
      flash[:alert] = "Error creating daily"
      render 'new'
    end
  end
end
