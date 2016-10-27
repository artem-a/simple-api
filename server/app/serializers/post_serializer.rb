# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  title      :string           not null
#  body       :text
#  tags       :string           is an Array
#  ratings    :integer          is an Array
#  labels     :json
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_posts_on_ratings  (ratings)
#  index_posts_on_tags     (tags)
#  index_posts_on_user_id  (user_id)
#

class PostSerializer < ActiveModel::Serializer

  attributes :id, :title, :body, :tags, :ratings, :labels, :user_id

end
