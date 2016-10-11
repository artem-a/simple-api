class UserMailer < ApplicationMailer

  def activation_email(user)
    @user = user
    @activation_link = "#{root_url}activate/#{user.activation_token}"
    mail to: user.email, subject: "Activation account"
  end

  def reset_password_email(user)
    @user = user
    @reset_link = "#{root_url}password-reset/#{user.reset_password_token}"
    mail to: user.email, subject: "Reset password instructions!"
  end

end
