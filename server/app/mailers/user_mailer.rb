class UserMailer < ApplicationMailer

  def activation_email(user)
    @user = user
    @activation_link = "#{root_url}activate/#{user.activation_token}"
    mail to: @user.email, subject: "Activation account"
  end

end
