class User < ApplicationRecord
  validates :name, presence: true, length: {maximum: 50}
  # Learned something: You can append "i" to the end of a regex to make it case
  # insensitive.
  email_validator = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates :email, presence: true, length: {maximum: 255},
                                    format: {with: email_validator},
                                    uniqueness: {case_sensitive: false}
end
