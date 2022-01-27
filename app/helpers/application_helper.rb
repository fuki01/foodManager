module ApplicationHelper
  def change_day_labels(created_at)
    # スペースで分割する
    date_array = created_at.split(' ')
    # 日付を分割する
    # ["2012", "01", "01"]
    date_day_array = date_array[0].split('-')
    # 日付を変換する
    # ["2012", "01", "01"]
    date_day_array = [date_day_array[1], date_day_array[2], date_day_array[0]]
    # 日付を結合する
    # "01/01/2012"
    date_day_array = date_day_array.join('/')
    # 時間を分割する
    # ["01", "01", "00"]
    time_array = date_array[1].split(':')
    # 時間を変換する
    # ["01", "01", "00"]
    time_array = [time_array[0].to_i, time_array[1].to_i]
    # 時間を結合する
    # "01時01分"
    time_array = "#{time_array.join('時')}分"
    # 日付と時間を結合する
    # "01/01/2012 01:01:00"
    [date_day_array, time_array].join(' ')
  end
end
