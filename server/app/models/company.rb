# == Schema Information
#
# Table name: companies
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  url        :string
#  icon       :string
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_companies_on_name     (name)
#  index_companies_on_user_id  (user_id)
#

class Company < ApplicationRecord

  belongs_to :user

  validates :name, presence: true

  before_validation :prepare_url

  private

  def prepare_url
    self.url ||= name
    self.url = url.downcase.gsub(/[\W\_]/, "-") if url.present?
  end

end
