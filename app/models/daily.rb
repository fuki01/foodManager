class Daily < ApplicationRecord
  belongs_to :student
  has_many :comments, dependent: :destroy
  has_one_attached :image
end
