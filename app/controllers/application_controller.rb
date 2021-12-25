class ApplicationController < ActionController::Base
  # sessionを読み込む
  include SessionsHelper
  include StudentsHelper
end
