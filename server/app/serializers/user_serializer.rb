# == Schema Information
#
# Table name: users
#
#  id                              :integer          not null, primary key
#  username                        :string
#  email                           :string           not null
#  crypted_password                :string
#  salt                            :string
#  created_at                      :datetime
#  updated_at                      :datetime
#  activation_state                :string
#  activation_token                :string
#  activation_token_expires_at     :datetime
#  reset_password_token            :string
#  reset_password_token_expires_at :datetime
#  reset_password_email_sent_at    :datetime
#  last_login_at                   :datetime
#  last_logout_at                  :datetime
#  last_activity_at                :datetime
#  last_login_from_ip_address      :string
#
# Indexes
#
#  index_users_on_activation_token                     (activation_token)
#  index_users_on_email                                (email) UNIQUE
#  index_users_on_last_logout_at_and_last_activity_at  (last_logout_at,last_activity_at)
#  index_users_on_reset_password_token                 (reset_password_token)
#

class UserSerializer < ActiveModel::Serializer

  attributes :id, :username, :email

  has_one :company

end
