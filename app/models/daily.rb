class Daily < ApplicationRecord
  validates :student_id, :day, presence: true
  belongs_to :student
  has_many :comments, dependent: :destroy
  has_one_attached :image
end
