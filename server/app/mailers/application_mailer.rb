class ApplicationMailer < ActionMailer::Base

  # append_view_path Rails.root.join("app", "views", "mailers")
  append_view_path Rails.root.join  *%w[app views mailers]
  default from: "support@example.com"

  layout "mailer"

end
