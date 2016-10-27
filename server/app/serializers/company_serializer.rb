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

class CompanySerializer < ActiveModel::Serializer

  attributes :id, :name, :url, :icon, :user_id

end
