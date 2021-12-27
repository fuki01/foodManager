class UserhomeController < ApplicationController
  before_action :authenticate_user!, only: [:index]
  def index
    @students = Student.all
  end
end
