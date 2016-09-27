class CompanySerializer < ActiveModel::Serializer

  attributes :id, :name, :url, :icon, :user_id

end
